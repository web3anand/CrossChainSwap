// src/pages/LandingPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import GradientText from "../components/ui/elements/GradientText";
import Hyperspeed from "../components/Hyperspeed"; // Your hyperspeed component
import "../index.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="m10"
      style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}
    >
      {/* Hyperspeed Background Container */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -2,
        }}
      >
        <Hyperspeed
  enablePointerSpeedUp
  effectOptions={{
    distortion: "turbulentDistortion",
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xffffff,
      brokenLines: 0xffffff,
      leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
      rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
      sticks: 0x03b3c3,
    },
  }}
/>

      </div>

      <header className="header1">
        <div className="headerlink">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/documentation")}>Documentation</li>
            <li onClick={() => navigate("/bridge")}>Bridge</li>
            <li onClick={() => navigate("/scan")}>Scan</li>
            <li onClick={() => navigate("/news")}>News</li>
          </ul>
        </div>
      </header>

      {/* Landing Page Content Overlay */}
      <div
        className="gradient"
        style={{ textAlign: "center", paddingTop: "20vh" }}
      >
        <h1>
          <GradientText
            colors={[
              "#40ffaa",
              "#4079ff",
              "#40ffaa",
              "#4079ff",
              "#40ffaa",
            ]}
            animationSpeed={3}
            showBorder={false}
            className="Gradinet1"
          >
            Decentralized Cross-Chain Swap
          </GradientText>
        </h1>
        <h2 className="ji">
          Seemless Transaction <span>across</span> Blockchain
        </h2>
        <motion.div>
          <Button onClick={() => navigate("/bridge")} className="linkb">
            Enter Cross-Chain Swap
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
