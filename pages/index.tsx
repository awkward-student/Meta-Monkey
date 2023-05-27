import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import AnimatedBox from "../components/AnimatedBox";
// import CameraOrbitController from "../components/CameraOrbitController";
import { OrbitControls, Stats } from "@react-three/drei/core";

const Home: NextPage = () => {
  const testing = true;

  return (
    <div className="container">
      <Canvas>
        {testing ? <Stats /> : null}
        {testing ? <axesHelper args={[2]} /> : null}
        {testing ? <gridHelper args={[10, 10]} /> : null}
        {/* <CameraOrbitController /> */}
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <AnimatedBox isTesting={testing} />
      </Canvas>
    </div>
  );
};

export default Home;
