import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const data = await prisma.user.findMany({});
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        await prisma.user.create({
          data: {
            ...req.body,
            image: 'https://cdn-icons-png.flaticon.com/512/7452/7452962.png'
          }
        })

        res.status(201).json({ success: true })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
