import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Torus = () => {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <mesh>
          <torusKnotGeometry args={[1.3, 0.5, 100, 10]} />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  );
};

export default Torus;
