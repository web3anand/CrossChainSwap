import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./DockHeader.css";

export default function DockHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`dock-wrapper ${visible ? "show" : "hide"}`}>
      <div className="dock-container">
       
        <div className="dock-links">
          <span className={isActive("/") ? "active" : ""} onClick={() => navigate("/")}>
            Main
          </span>
          <span className={isActive("/bridge") ? "active" : ""} onClick={() => navigate("/bridge")}>
            Bridge
          </span>
          <span className={isActive("/documentation") ? "active" : ""} onClick={() => navigate("/documentation")}>
            Documentation
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
