import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import Iridescence from "../components/backgrounds/Iridescence";
import DockHeader from "../components/DockHeader";
import "../index.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Iridescence background */}
      <div style={{ position: "absolute", inset: 0, zIndex: -3 }}>
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      {/* Full-page blur overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          background: "rgba(255, 255, 255, 0.02)", // optional slight tint
        }}
      />

      <DockHeader />

      {/* Content */}
      <div
        className="gradient"
        style={{
          textAlign: "center",
          paddingTop: "20vh",
        }}
      >
        <h1>
          
            Decentralized Cross-Chain Swap
          
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
