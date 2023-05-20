import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { Input, Grid, Button, Spacer } from "@nextui-org/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import events from "@/contents/events";

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
    <div className="h-screen grid md:grid-cols-2 grid-rows-2">
      <div className="h-screen grid place-items-center content-center ">
        <div>
          <img src={eventdata?.img}></img>
        </div>
      </div>
      <div className="grid grid-rows-2 justify-center">
        <div className="mt-10 md:mt-0">
          <div className="text-6xl text-center pt-[10vh]">
            {eventdata?.name}
          </div>
          <Spacer y={3} />
          <div>{eventdata?.des}</div>
          <Spacer y={2} />
          <div className="text-xl">{eventdata?.date}</div>
        </div>
        <Spacer y={3} />
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

export async function getServerSideProps(context) {
  // console.log(context.query.name);
  try {
    const name = context.query.name;
    const event = events.find((event) => event.link === name);
    // console.log(event);
    if (event != undefined) {
      return {
        props: {
          eventdata: event,
        },
      };
    } else {
      return {
        props: {
          eventdata: null,
        },
      };
    }
  } catch (err) {
    console.log(err);
  }
}
