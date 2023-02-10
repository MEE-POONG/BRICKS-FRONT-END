import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const data = await prisma.cartItems.findMany();
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = await prisma.cartItems.create({
          data: {
            qty: req.body.qty,
            price: req.body.price,
            lat: req.body.lat,
            lng: req.body.lng,
            distance: req.body.distance,
            productId: req.body.productId,
            cartId: req.body.cartId,
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
