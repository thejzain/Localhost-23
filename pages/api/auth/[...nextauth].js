import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/libs/prisma";
import axios from "axios";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.NEXTSECRET,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      // console.log(token);
      return token;
    },
    async session({session, token, user}) {
      // console.log(token.token.user)
      const res = await axios.post(process.env.BACKEND + "/api/user", { user: token.token.user, option: 0 });
      if (res.data.success === true) {
        return {
          ...session,
          image: session.user.image,
          loggedin: true,
          user: res.data.user,
        };
      } else {
        return null;
      }
    },
  },
});
