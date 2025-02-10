// src/pages/LandingPage.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

function InteractiveGridBackground() {
  const canvasRef = useRef(null);
  const cellSize = 40; // Smaller squares
  const threshold = 300; // Radius for the jump effect
  const maxJump = 15; // Maximum vertical jump in pixels
  // Use a ref to store the pointer coordinates
  const pointerRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function drawGrid() {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);
      const pointer = pointerRef.current;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellSize;
          const y = row * cellSize;
          const centerX = x + cellSize / 2;
          const centerY = y + cellSize / 2;
          const dx = centerX - pointer.x;
          const dy = centerY - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          let offset = 0;
          if (distance < threshold) {
            // Calculate jump based on distance; closer squares jump more.
            offset = ((threshold - distance) / threshold) * maxJump;
          }
          // Draw the square (shifted upward by offset)
          ctx.fillStyle = "#ac3b5b";
          ctx.fillRect(x, y - offset, cellSize, cellSize);
          // Draw a thin black border around the square
          ctx.strokeStyle = "black";
          ctx.lineWidth = 0.3;
          ctx.strokeRect(x, y - offset, cellSize, cellSize);
        }
      }
    }

    function animate() {
      drawGrid();
      requestAnimationFrame(animate);
    }
    animate();

    function handleMouseMove(e) {
      pointerRef.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
      }}
    />
  );
}

export default function LandingPage() {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate("/widget");
  };

  return (
    <div className="relative overflow-hidden h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center text-white">
      {/* Interactive Grid Background */}
      <InteractiveGridBackground />

      {/* Landing Page Content */}
      <div className="relative z-10 text-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4"
        >
          Decentralized Cross-Chain Swap
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg text-gray-300 mb-6"
        >
           Experience seamless multi-chain transactions 
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Button
            onClick={handleEnterClick}
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-black px-6 py-3 rounded-lg text-xl shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            Enter Cross-Chain Swap
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
