import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const data = await prisma.type.findFirst({
          where: {
            name: {
              equals: req.query.typeName,
            },
          },
          include: {
            subType: {
              where: {
                name: {
                  equals: req.query.subTypeName,
                },
              },
              include: {
                products: true,
              },
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
