import { OrbitControls, ScrollControls } from "@react-three/drei";
import { FirstPc } from "./First-pc";
export const Experiece = () => {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} />
      <ScrollControls damping={0.25}>
        <FirstPc />
      </ScrollControls>
    </>
  );
};
