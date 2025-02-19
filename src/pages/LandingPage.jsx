// src/pages/LandingPage.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import "../index.css"; // Ensure styles are in index.css

const words = ["Bitcoin", "Ethereum", "Base", "Solana", "Polygon", "BeraChain"];

const getRandomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return chars[Math.floor(Math.random() * chars.length)];
};

const useScrambleText = (text, interval = 50, duration = 1000) => {
  const [displayedText, setDisplayedText] = useState(text);

  useEffect(() => {
    let timeout;
    let iterations = 0;
    const maxIterations = duration / interval;

    const scramble = () => {
      if (iterations < maxIterations) {
        setDisplayedText((prev) =>
          prev
            .split("")
            .map((char, i) => (Math.random() > 0.5 ? getRandomChar() : text[i]))
            .join("")
        );
        iterations++;
        timeout = setTimeout(scramble, interval);
      } else {
        setDisplayedText(text);
      }
    };

    scramble();
    return () => clearTimeout(timeout);
  }, [text, interval, duration]);

  return displayedText;
};

export default function LandingPage() {
  const navigate = useNavigate();
  const [wordIndex, setWordIndex] = useState(0);
  const scrambledText = useScrambleText(words[wordIndex]);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursor = document.getElementById("cursor-effect");
    const trail = [];

    const createRipple = (x, y) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);
      trail.push(ripple);

      setTimeout(() => {
        ripple.style.opacity = "0";
        ripple.style.transform = "scale(2)";
      }, 10);

      setTimeout(() => {
        ripple.remove();
        trail.shift();
      }, 1000);
    };

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      createRipple(x, y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cursorStyle = {
    position: "fixed",
    width: "15px",
    height: "15px",
    background: "radial-gradient(circle, rgba(80, 227, 194, 0.8) 0%, rgba(74, 144, 226, 0) 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    transition: "transform 0.1s linear",
    mixBlendMode: "difference",
    zIndex: "9999"
  };



  function InteractiveBackground() {
    // Start with the center of the viewport
    const [coords, setCoords] = useState({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });
  
    useEffect(() => {
      const handleMouseMove = (event) => {
        setCoords({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    const backgroundStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      background: `radial-gradient(circle at ${coords.x}px ${coords.y}px,rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.49) 50%)`
    };
  
  
    return (
      <>
        <div style={backgroundStyle} />
        <div style={glassOverlayStyle} />
      </>
    );
  }

  return (
    <div className="relative overflow-hidden h-screen flex flex-col items-center justify-center text-white bg-dark">
      <div id="cursor-effect" style={cursorStyle} />
      <div className="ripple-background"></div>
      <div className="relative z-10 text-center p-6 max-w-lg mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4"
        >
          Decentralized Cross-Chain Swap
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-base md:text-lg text-gray-300 mb-6 font-mono tracking-wide"
        >
          Seamless CrossChain Transfer to <strong>{scrambledText}</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button
            onClick={() => navigate("/widget")}
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-black px-6 py-3 rounded-lg text-lg md:text-xl shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            Enter Cross-Chain Swap
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
