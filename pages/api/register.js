import prisma from "@/libs/prisma";

export default async function Register(req, res) {
  if (req.method == "POST") {
    try {
      const body = req.body;
      const { email, event } = body;
      const user = await prisma.user.findUnique({ where: { email: email } });
      const { events } = user;
      const exist = events.find((name) => name === event);
      if (!exist) {
        events.push(event);
        await prisma.user.update({
          where: {
            email: body.email,
          },
          data: { events: events },
        });
        await prisma.transactions.create({
          data: body,
        });
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    } catch (err) {
      console.log(err);
      res.json({ success: false });
    }
  }
}
