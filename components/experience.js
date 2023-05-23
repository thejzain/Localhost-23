import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { FirstPc } from "./First-pc";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import { Power3 } from "gsap";
// import { Expo } from "gsap";
// import { RoughEase } from "gsap/all";

export const Experiece = () => {
  const ref = useRef();
  const tl = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current.position,
      {
        x: 100,
        y: 10,
        z: 80,
      },
      {
        x: 10,
        y: 15,
        z: 80,
        duration: 2.5,
        ease: Power3.easeIn,
        // scrollTrigger: { trigger: ref, markers: true },
      }
      // {
      //   x: 0,
      //   y: 0,
      //   z: 50,
      //   duration: 2,
      //   ease: Power3.easeIn,
      // }
    );
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[10, 10, 10]} />
      <PerspectiveCamera
        makeDefault
        // position={[10, 150, 80]}
        fov={50}
        ref={ref}
      />
      <OrbitControls enableZoom={true} />
      <Stars />
      <FirstPc />
    </>
  );
};
