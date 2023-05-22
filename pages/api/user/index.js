import prisma from "@/libs/prisma";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    return res.status(200).end();
  }
  if (req.method === "POST") {
    try {
      switch (req.body.option) {
        case 0: {
          const { name, email, image } = req.body.user;
          console.log({ name, email });
          const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          });
          if (user) {
            return res.json({ success: true, user: user });
          } else {
            const newuser = await prisma.user.create({
              data: { username: name, email: email, image: image },
            });
            return res.json({ success: true, user: newuser });
          }
        }
        case 1: {
          const { email, college, phone, batch, department, csimember } =
            req.body;
          const user = await prisma.user.update({
            where: {
              email: email,
            },
            data: {
              college: college,
              phone: phone,
              batch: batch,
              department: department,
              csimember: csimember,
            },
          });
          res.json({ success: true });
        }
      }
    } catch (err) {
      // console.log(err);
      return res.json({ success: false, message: err.message });
    }
  }
}
