import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EventPage({ event }) {
  const rout = useRouter();
  useEffect(() => console.log(rout.asPath));
  return (
    <div className="h-screen grid grid-cols-2">
      <div className="h-screen grid place-items-center content-center ">
        <div>
          <img src="https://nextui.org/images/card-example-2.jpeg"></img>
        </div>
      </div>
      <div className="">
        <div className="text-6xl text-center pt-[10vh]">Name</div>
        <div>ahsdgfhjasdgfhkjasdgfhjadsfjhbshafbajhsdbjh</div>
      </div>
    </div>
  );
}
