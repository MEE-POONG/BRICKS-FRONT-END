import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";

const prisma = new PrismaClient();

export default NextAuth({
  secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET,
    encryption: true,
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (isNewUser) {
        await prisma.cart.create({
          data: { userId: user.id },
        });
      }
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    async session({ session, token, user }) {
      const data = await prisma.cart.findUnique({
        where: {
          userId: token.uid,
        },
      });
      if (session?.user) {
        (session.user.id = token.uid), (session.user.cartId = data?.id);
      }
      return session;
    },
  },
});
