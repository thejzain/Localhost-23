import { Avatar, Button, Input, Spacer, Switch } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRef, useState } from "react";
import axios from "axios";

export default function Profile() {
  const session = useSession();
  const user = session.data?.user;

  const college = useRef(0);
  const phone = useRef(0);
  const batch = useRef(0);
  const department = useRef(0);
  const [member, setMember] = useState(user?.csimember);

  async function handleSave() {
    const change = {
      option: 1,
      email: user.email,
      college: college.current.value,
      phone: phone.current.value,
      batch: batch.current.value,
      department: department.current.value,
      csimember: member,
    };
    await axios.post("/api/user", change);
  }

  if (user) {
    return (
      <>
        <Head>
          <title>Profile</title>
        </Head>
        <div className="text-center text-3xl pt-[10vh] ">profile</div>
        <div className="grid  place-items-center p-10">
          <Avatar src={user?.image} size="xl"></Avatar>
          <div className="text-3xl">{user?.username}</div>
          <div className="text-2xl opacity-80">{user?.email}</div>
        </div>
        <div className="w-screen grid justify-center place-items-center">
          <div className="grid md:grid-cols-2 w-[50vw] gap-10 z-20">
            <Input
              ref={college}
              underlined
              labelLeft="College"
              placeholder={user?.college}
              size="xl"
            />
            <Input
              ref={phone}
              underlined
              labelLeft="Phone"
              placeholder={user?.phone}
              size="xl"
            />
            <Input
              ref={batch}
              underlined
              labelLeft="Batch"
              placeholder={user?.batch}
              size="xl"
            />
            <Input
              ref={department}
              underlined
              labelLeft="Department"
              placeholder={user?.department}
              size="xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-5 mt-7">
            <div className="text-right">CSI member : </div>
            <Switch checked={member} onChange={() => setMember(!member)} />
          </div>
          <Spacer y={1} />
          <div>
            <Button
              size={"md"}
              bordered
              color={"gradient"}
              onPress={() => handleSave()}
            >
              Save
            </Button>
          </div>
        </div>
      </>
    );
  } else {
    return <div className="grid place-items-center h-screen text-4xl">signin</div>;
  }
}
