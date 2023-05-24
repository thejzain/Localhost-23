import Carousel from "@/components/carousel";
import Head from "next/head";
import { useSession } from "next-auth/react";
import AboutUs from "@/components/about";

export default function Home() {
  const session = useSession();
  console.log(session)
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <div className="h-[70vh] pt-[10vh]  grid justify-center content-center text-6xl">
          <div>LocalHost 23</div>
        </div>
        <div>
          <Carousel />
        </div>
        <div className="w-screen grid place-items-center"><AboutUs/></div>
      </div>
    </>
  );
}
