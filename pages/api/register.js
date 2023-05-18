import prisma from "@/libs/prisma";
import { events } from "@react-three/fiber";

export default async function Register(req, res) {
  if (req.method == "POST") {
    try {
      console.log(req.body);
      const body = req.body;
      await prisma.transactions.create({
        data: body,
      });
      //   const user = prisma.user.findUnique({ where: { email: body.email } });
      //   await prisma.user.update({
      //     where: {
      //       email: body.email,
      //     },
      //     create: { events: [...events, body.event] },
      //   });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
}
