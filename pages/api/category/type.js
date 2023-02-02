import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        let page = +req.query.page || 1;
        let pageSize = 10;
        const data = await prisma.$transaction([
          prisma.products.count({
            where: {
              subType: {
                type: {
                  name: {
                    equals: req.query.typeName,
                  },
                },
              },
            },
          }),
          prisma.type.findFirst({
            where: {
              name: {
                equals: req.query.typeName,
              },
            },
            include: {
              subType: {
                include: {
                  products: true,
                },
              },
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
          }),
        ]);
        const totalPage = Math.ceil(data[0] / pageSize);
        res.status(200).json({ data: data[1], page, pageSize, totalPage });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
