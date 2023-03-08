import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {
        console.log("AUTH", req.body.email, req.body.password);
        const data = await prisma.user.findMany({
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ success: false });
    }
}
