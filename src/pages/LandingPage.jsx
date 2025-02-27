// src/pages/LandingPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import Threads from "../components/ui/elements/threads";
import GradientText from "../components/ui/elements/GradientText";
import "../index.css"; 


export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="m10">
      {/* Threads Background */}
      <div
        style={{
          width: "100%",
          height: "600px",
          position: "absolute",
          top: 2,
          left: 0,
          zIndex: -2,
        }}
      >
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      <header className="header1">
        <div className="headerlink">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/documentation")}>Documentation</li>
            <li onClick={() => navigate("/bridge")}>Bridge</li>
            <li>Buy</li>
            <li onClick={() => navigate("/scan")}>Scan</li>
            <li onClick={() => navigate("/news")}>News</li>
          </ul>
        </div>
      </header>

      {/* Landing Page Content Overlay */}
      <div className="gradient">
        <h1>
         <GradientText
           colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
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
          <Button
            onClick={() => navigate("/bridge")}
            className="linkbutton"
          >
            Enter Cross-Chain Swap
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
