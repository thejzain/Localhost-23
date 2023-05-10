import { OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";
import { FirstPc } from "./First-pc";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";
import { Power3 } from "gsap";
export const Experiece = () => {
  const ref = useRef();
  const tl = useRef();

  // gsap.registerPlugin(ScrollTrigger);  
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
        duration: 2,
        ease: Power3.easeIn,
        scrollTrigger: { trigger: ref, markers: true },
      }
    );
  });
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[10, 10, 10]} />
      <PerspectiveCamera
        makeDefault
        position={[10, 10, 80]}
        fov={50}
        ref={ref}
      />
      <OrbitControls enableZoom={false} />

      <FirstPc />
    </>
  );
};
