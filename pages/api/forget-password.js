import nodemailer from 'nodemailer';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {

    if (!req.body.email) {
        return res.status(400).json({ success: false, message: 'กรุณากรอกอีเมล์' });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email
        }
    });

    if (user == null) {
        return res.status(400).json({ success: false, message: 'ไม่พบอีเมล์นี้ในระบบ' });
    }

    await prisma.user.update({
        where: {
            email: req.body.email
        },
        data: {
            password: "123456"
        }
    });

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'warayut.tae@gmail.com',
            pass: 'abriojxzhdwlxwas'
        }
    });

    let info = await transporter.sendMail({
        from: '"ME PROMPT TECHNOLOGY 👻" <warayut.tae@gmail.com>',
        to: req.body.email,
        subject: 'รหัสผ่านใหม่ของคุณคือ ✔',
        text: 'รหัสผ่านใหม่ของคุณคือ 123456',
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>CHUN WARAYUT TEKRAHOK</title>
            <style>
            .container {
                width: 100%;
                height: 100%;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .email {
                width: 80%;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
            }
            .email-header {
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
            }
            .email-body {
                padding: 20px;
            }
            .email-footer {
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
            }
            </style>
        </head>
        <body>
            <div class="container">
            <div class="email">
                <div class="email-header">
                <p>ช่างพอง อิฐประสาน</p>
                </div>
                <div class="email-body">
                <p>รหัสผ่านใหม่ของคุณคือ 123456</p> <a href="https://xn--72cah0a9bls7bydzab3brky72a.com/login">ช่างพอง อิฐประสาน.com</a>
                </div>
                <div class="email-footer">
                <p>ME PROMPT TECHNOLOGY</p>
                </div>
            </div>
            </div>
        </body>
        </html>
    `
    });

    res.status(200).json({ success: true });
}