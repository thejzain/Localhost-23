import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Background() {
  // return (
  //   <div className="dots fixed top-11 md:scale-150">
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //     <div className="dot"></div>
  //   </div>
  // );
  return (
    <>
      <Canvas className="h-screen">
        <Stars />
      </Canvas>
    </>
  );
}
