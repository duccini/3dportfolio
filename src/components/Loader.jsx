import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 20,
          color: "#f1f1f1",
          fontWeight: 400,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        Loading {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
