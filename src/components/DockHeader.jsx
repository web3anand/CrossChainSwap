import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./DockHeader.css";

export default function DockHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY <= lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (path) => location.pathname === path;

  // Initialize tsParticles
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className={`dock-wrapper ${visible ? "show" : "hide"}`}>
      {/* Golden Particles Effect */}
      <Particles
        id="golden-dust"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 30 },
            color: { value: "#FFD700" }, // Gold particles
            shape: { type: "circle" },
            opacity: { value: 0.8, random: true },
            size: { value: 3, random: true },
            move: { speed: 1, direction: "top", outMode: "out" },
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100px",
          zIndex: -1, // Behind navbar
          pointerEvents: "none",
        }}
      />

      <div className="dock-container">
        <div className="dock-links">
          <span className={isActive("/") ? "active" : ""} onClick={() => navigate("/")}>
            Main
          </span>
          <span className={isActive("/bridge") ? "active" : ""} onClick={() => navigate("/bridge")}>
            Bridge
          </span>
          <span className={isActive("/support") ? "active" : ""} onClick={() => navigate("/support")}>
            Support
          </span>
          <span className={isActive("/buy") ? "active" : ""} onClick={() => navigate("/buy")}>
            Buy
          </span>
          <span className={isActive("/news") ? "active" : ""} onClick={() => navigate("/news")}>
            News
          </span>
        </div>
      </div>
    </div>
  );
}
