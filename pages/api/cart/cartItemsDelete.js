import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "DELETE":
      try {
        const data = await prisma.cartItems.deleteMany({
          where: {
            cartId: req.query.cartId,
          },
        });
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
