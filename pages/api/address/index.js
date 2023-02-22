import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const data = await prisma.address.findMany({
          where: {
            userId: req.query.userId,
          },
        });
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const data = await prisma.address.create({
          data: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            tel: req.body.tel,
            province: req.body.province,
            district: req.body.district,
            subDistrict: req.body.subDistrict,
            postalCode: req.body.postalCode,
            address: req.body.address,
            userId: req.body.userId,
          },
        });
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const data = await prisma.address.update({
          where: {
            id: req.query.addressId,
          },
          data: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            tel: req.body.tel,
            province: req.body.province,
            district: req.body.district,
            subDistrict: req.body.subDistrict,
            postalCode: req.body.postalCode,
            address: req.body.address,
            userId: req.body.userId,
          },
        });
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const data = await prisma.address.delete({
          where: {
            id: req.query.addressId,
          },
        });
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
