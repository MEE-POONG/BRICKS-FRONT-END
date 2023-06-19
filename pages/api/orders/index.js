import { PrismaClient } from "@prisma/client";
import axios from "axios";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  let pad = (function (num) {
    return function () {
      let str = String(num++);
      while (str.length < 6) str = "0" + str;
      return "OCP" + str;
    };
  })((await prisma.orders.count()) + 1);
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const data = await prisma.orders.findMany({
          where: {
            userId: req.query.userId,
          },
          include: {
            orderDetail: {
              include: {
                products: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc'
          }
        });
        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const oderCode = pad();
        console.log(oderCode);
        const data = await prisma.orders.create({
          data: {
            orderCode: oderCode,
            totalPrice: parseFloat(req.body.totalPrice),
            image: req.body.image,
            status: req.body.status,
            userId: req.body.userId,
            addressId: req.body.addressId,
            orderDetail: {
              create: req.body.cart.map((product) => ({
                sumPrice: parseFloat(product.price),
                sumQty: parseInt(product.qty),
                lat: parseFloat(product.lat),
                lng: parseFloat(product.lng),
                distance: parseFloat(product.distance),
                productId: product.productId
              })),
            },
          },
        });

        let notify = new FormData();
        notify.append('message', 'มีรายการสั่งซื้อใหม่!\n' + 'รหัสสั่งซื้อ: ' + oderCode + '\n' + 'ราคารวม: ' + req.body.totalPrice.toLocaleString("en-US") + ' บาท');
        notify.append('imageThumbnail', req.body.image);
        notify.append('imageFullsize', req.body.image);

        let config = {
          method: 'post',
          url: 'https://notify-api.line.me/api/notify',
          headers: {
            'Authorization': 'Bearer CDhLcADRAVBuDpVleoqIClIXAQXQUkms7hBe6FpWNhb'
          },
          data: notify
        };

        axios.request(config)

        res.status(200).json(data);
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
