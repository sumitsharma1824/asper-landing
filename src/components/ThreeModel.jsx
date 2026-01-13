import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AsperLogo from "./models/Asper.jsx";

function ThreeModel() {
  return (
    <Canvas className="w-full h-full" camera={{ position: [0, 0, 4], fov: 40 }}>
      <ambientLight intensity={0.25} />
      <ambientLight intensity={0.18} />
      <directionalLight
        position={[0, 2.5, 6]}
        intensity={2.8}
        color={"#ede6e6"}
        castShadow
      />
      <directionalLight position={[0, 3, -6]} intensity={3} color={"#ffffff"} />
      <spotLight
        position={[0, 6, 2]}
        angle={0.35}
        penumbra={0.6}
        intensity={2.2}
        color={"#ffffff"}
      />
      <pointLight position={[4, 1, 2]} intensity={7} color={"#ff1a1a"} />
      <pointLight position={[-4, 0.5, 1]} intensity={4} color={"#a80000"} />
      <pointLight position={[0, 1, -5]} intensity={3} color={"#ffffff"} />
      <pointLight position={[2, -1, -4]} intensity={4} color={"#ff0000"} />

      <pointLight position={[4, 0.5, 2]} intensity={6} color={"#ff0000"} />
      <pointLight position={[-4, -1, -2]} intensity={3} color={"#8b0000"} />
      <AsperLogo />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={7}
      />
    </Canvas>
  );
}

export default ThreeModel;
