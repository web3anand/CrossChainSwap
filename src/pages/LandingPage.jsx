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
    <div className="m13">
      {/* Threads Background */}
      <div
        style={{
          width: "100%",
          height: "600px",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
    
        }}
      >
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      <header className="header1">
        <div className="header2">
          
          </div>
        <div className="headerlink">
          <ul>
            <li>Home</li>
            <li>Documentation</li>
            <li>Bridge</li>
            <li>Buy</li>
            <li>Scan</li>
            <li>News</li>
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
           className="Gradinet"
         >
          Decentralized Cross-Chain Swap
        </GradientText>
        </h1>
        <h2 className="ji"> 
          Seemless Transaction <span>across</span> Blockchain
        </h2>
        <motion.div>
          <Button
            onClick={() => navigate("/widget")}
            className="linkbutton"
          >
            Enter Cross-Chain Swap
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
