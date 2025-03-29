import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function MovingParticles() {
  const ref = useRef();
  
  // Rotate the particles slowly for a dynamic effect
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  const count = 7000; // More particles for a richer effect
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <Points ref={ref} positions={positions} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00FFFF"
        size={0.08}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function SpaceBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <MovingParticles />
    </Canvas>
  );
}
