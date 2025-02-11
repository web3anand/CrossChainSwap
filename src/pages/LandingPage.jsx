import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import "../index.css"; // Import global CSS file

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

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-screen flex flex-col items-center justify-center text-white">
      <div className="progress-bar-background">
        <div className="progress-bar" />
      </div>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-300 mb-6 font-mono tracking-wide"
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
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-black px-6 py-3 rounded-lg text-xl shadow-lg transform transition-transform duration-200 hover:scale-105"
          >
            Enter Cross-Chain Swap
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
