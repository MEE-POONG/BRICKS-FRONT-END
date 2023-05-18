import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const data = await prisma.cart.findUnique({
          include: {
            cartItems: true,
          },
          where: {
            userId: req.query.userId,
          },
        });
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
            image: req.body.image,
            productId: req.body.productId,
            name: req.body.name,
            cartId: req.body.cartId,
            catypeId: req.body.catypeId,
          },
        });
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
      case "DELETE":
      try {
        const data = await prisma.cartItems.delete({
          where: {
            id: req.query.cartItemId,
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
