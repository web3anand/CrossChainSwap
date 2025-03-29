import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const GoldenParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
  id="golden-dust"
  init={particlesInit}
  options={{
    fullScreen: { enable: false },
    particles: {
      number: { value: 30 },
      color: { value: "#FFD700" },
      shape: { type: "circle" },
      opacity: { value: 0.8, random: true },
      size: { value: 3, random: true },
      move: { speed: 1, direction: "top", outMode: "out" },
    },
  }}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100px",
    zIndex: 2,  // Increase to ensure particles are above header
    pointerEvents: "none",
  }}
/>

  );
};

export default GoldenParticles;
