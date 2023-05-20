import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { Input, Grid, Button, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function EventPage({ eventdata }) {
  const rout = useRouter();
  const session = useSession();

  // useEffect(() => console.log(rout.asPath));
  const upiref = useRef(0);
  async function handleRegister() {
    if (!session) {
    } else {
      const newData = {
        username: session.data.user.username,
        email: session.data.user.email,
        event: "eventName",
        transactionid: upiref.current.value,
      };
      console.log(newData);
      const res = await axios.post("/api/register", newData);
      console.log(res);
    }
  }

  return (
    <div className="h-screen grid grid-cols-2">
      <div className="h-screen grid place-items-center content-center ">
        <div>
          <img src="https://nextui.org/images/card-example-2.jpeg"></img>
        </div>
      </div>
      <div className="grid grid-rows-2 justify-center">
        <div>
          <div className="text-6xl text-center pt-[10vh]">Name</div>
          <Spacer y={3} />
          <div>ahsdgfhjasdgfhkjasdgfhjadsfjhbshafbajhsdbjh</div>
        </div>
        <div>
          <div>
            <Input
              ref={upiref}
              size="xl"
              placeholder="UPI Transaction ID"
              color="primary"
              bordered
              className="text-white "
            />
          </div>
          <Spacer y={1} />
          <div>
            <Button color="gradient" onClick={handleRegister}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
