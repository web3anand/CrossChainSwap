import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import DockHeader from "../components/DockHeader";
import "../index.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     

      {/* Full-page blur overlay */}
      <div className="blur-overlay" />

      <DockHeader />

      {/* Content */}
      <div className="landing-content">
        <h1>Decentralized Cross-Chain Swap</h1>

        <h2 className="ji">
          Seamless Transactions <span>across</span> Blockchain
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
