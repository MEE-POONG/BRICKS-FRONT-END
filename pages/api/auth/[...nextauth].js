import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
const prisma = new PrismaClient();


export default NextAuth({
  secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login',
  },
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
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: 'email'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {

        const { email, password } = credentials;

        try {
          const data = await prisma.user.findFirstOrThrow({
            where: {
              AND: {
                OR: [
                  {
                    email: email
                  },
                  {
                    username: email
                  }
                ],
                password: password,
              }
            }
          });

          return data
        } catch (error) {
          console.log(error);
          return null;
        }

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
        token.user = user;
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
        //เซ็ตค่าให้ session
        session.user = token.user;
        session.user.image = token?.user?.image || 'https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png';
        (session.user.id = token.uid), (session.user.cartId = data?.id);

      }
      return session;
    },
  },
  // cookies: {
  //   sessionToken: {
  //     name: `__Secure-next-auth.session-token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: 'lax',
  //       path: '/',
  //       domain: '.dreamblock.org',
  //       secure: true,
  //     },
  //   },
  // },
});
