import Head from "next/head";
import { Experiece } from "@/components/experience";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-screen bg-slate-700">
          <Canvas
            size={[`2000px`, `3000px`]}
            style={{ width: `100%`, height: `100%`, position: `relative` }}
            shadows
            // camera={{ position: [10, 0, 80], fov: 50 }}
          >
            <Experiece />
          </Canvas>
        </div>
      </main>
    </>
  );
}
