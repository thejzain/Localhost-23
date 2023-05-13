import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EventPage({ event }) {
  const rout = useRouter();
  useEffect(()=> console.log(rout.asPath))
  return <div></div>;
}
