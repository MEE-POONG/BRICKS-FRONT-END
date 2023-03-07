import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const data = await prisma.products.findFirst({
          where: {
            name: {
              equals: req.query.name,
            },
          },
          include: {
            imageProduct: true,
            subType: {
              include: { type: true },
            },
            qtyRate: {
              include: { addOnRate: true },
            },
          },
        });

        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
