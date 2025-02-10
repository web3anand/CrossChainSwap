// src/widgetpage.jsx
import React, { useState, useEffect } from 'react'
import { LiFiWidget } from '@lifi/widget'

// Swap mode configuration
const swapConfig = {
  variant: "wide",
  subvariant: "split",
  appearance: "light",
  theme: {
    palette: {
      primary: { main: "#f7557c" },
      secondary: { main: "#027944" },
      background: { default: "#ffeff3", paper: "#ffffff" },
      text: { primary: "#190006", secondary: "#766066" },
      grey: { 200: "#F0E5E8", 300: "#E5D7DA", 700: "#7A666B", 800: "#58373F" }
    },
    shape: { borderRadiusSecondary: 50, borderRadius: 10 },
    typography: { fontFamily: "Lexend, serif" },
    container: { boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)", borderRadius: "20px" },
    components: { MuiCard: { defaultProps: { variant: "elevation" } } }
  }
};

// Refuel mode configuration
const refuelConfig = {
  variant: "wide",
  subvariant: "refuel",
  appearance: "light",
  theme: {
    palette: {
      primary: { main: "#f7557c" },
      secondary: { main: "#027944" },
      background: { default: "#ffeff3", paper: "#ffffff" },
      text: { primary: "#190006", secondary: "#766066" },
      grey: { 200: "#F0E5E8", 300: "#E5D7DA", 700: "#7A666B", 800: "#58373F" }
    },
    shape: { borderRadius: 16, borderRadiusSecondary: 16, borderRadiusTertiary: 24 },
    typography: { fontFamily: "Lexend, serif" },
    container: { boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)", borderRadius: "16px" },
    components: { MuiCard: { defaultProps: { variant: "elevation" } } }
  }
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
    zIndex: -1,
    // The gradient centers on the mouse pointer position.
    background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.96), rgba(224, 59, 100, 0.77) 70%)`,
    transition: 'background 0.1s ease-out'
  };

  return <div style={backgroundStyle} />;
}

function App() {
  const [mode, setMode] = useState("swap");

  // Toggle between swap and refuel modes.
  const toggleMode = () => {
    setMode((prev) => (prev === "swap" ? "refuel" : "swap"));
  };

  const currentConfig = mode === "swap" ? swapConfig : refuelConfig;

  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      {/* Interactive background */}
      <InteractiveBackground />

      <div style={{ marginBottom: '20px' }}>
        <h1></h1>
        <button
          onClick={toggleMode}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            fontFamily: "Lexend, serif",
            border: 'none',
            borderRadius: '10px',
            backgroundColor: '#f7557c',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          {mode === "swap" ? "Switch to Refuel" : "Switch to Swap"}
        </button>
      </div>

      {/* LI.FI Widget */}
      <LiFiWidget integrator="daybot" config={currentConfig} />
    </div>
  );
}

export default App;
