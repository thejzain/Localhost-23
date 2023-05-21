import Carousel from "@/components/carousel";
import Head from "next/head";

export default function Home() {
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
      </div>
    </>
  );
}
