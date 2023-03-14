import prisma from "@/libs/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession();
  if (!session) {
    console.log("no sess");
  }
  const data = req.body;
  if (req.method == "POST") {
    prisma.user.update({
      where: { email: data.email },
      data: {
        name: data.event,
      },
    });
    console.log(data);
    res.json({ test: "ok" });
  }
}
