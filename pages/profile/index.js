import { Avatar, Input } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function Profile() {
  const session = useSession();
  const user = session.data?.user;

  if (user) {
    return (
      <>
        <Head>
          <title>Profile</title>
        </Head>
        <div className="text-center text-3xl pt-[10vh]">profile</div>
        <div className="grid  place-items-center p-10">
          <Avatar src={user?.image} size="xl"></Avatar>
          <div className="text-3xl">{user?.username}</div>
          <div className="text-2xl opacity-80">{user?.email}</div>
        </div>
        <div>
          <Input
            underlined
            labelLeft="College"
            placeholder={user?.college}
          />
        </div>
      </>
    );
  } else {
    return <>signin</>;
  }
}
