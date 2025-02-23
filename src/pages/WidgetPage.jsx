import React, { useState, useEffect } from 'react';
import { LiFiWidget } from '@lifi/widget';
import Threads from '../components/ui/elements/threads';

// Swap mode configuration
const swapConfig = {
  variant: "wide",
  subvariant: "split",
  appearance: "light",
  theme: {
    palette: {
      primary: { main: "#ffb343" },
      secondary: { main: "#027944" },
      background: { default: "#ffeff3", paper: "#ffffff" },
      text: { primary: "#190006", secondary: "#766066" },
      grey: { 200: "#F0E5E8", 300: "#E5D7DA", 700: "#7A666B", 800: "#58373F" }
    },
    shape: { borderRadiusSecondary: 20, borderRadius: 16 },
    typography: { fontFamily: "Lexend, serif" },
    container: { boxShadow: "0px 8px 32px #b74f4f00", borderRadius: "8px" },
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
      primary: { main: "#ffb343" },
      secondary: { main: "#027944" },
      background: { default: "#ffeff3", paper: "#ffffff" },
      text: { primary: "#190006", secondary: "#766066" },
      grey: { 200: "#F0E5E8", 300: "#E5D7DA", 700: "#7A666B", 800: "#58373F" }
    },
    shape: { borderRadius: 16, borderRadiusSecondary: 20, borderRadiusTertiary: 24 },
    typography: { fontFamily: "Lexend, serif" },
    container: { boxShadow: "0px 8px 32px rgba(0, 0, 0, 0)", borderRadius: "10px" },
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
    zIndex: -2,
    background: `radial-gradient(circle at ${coords.x}px ${coords.y}px,rgba(63, 60, 60, 0.56),rgb(0, 0, 0) 50%)`
  };

  const glassOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(10px)',
    background: 'rgba(104, 104, 104, 0.16)',
    zIndex: -1
  };

  return (
    <>
      <div style={backgroundStyle} />
      <div style={glassOverlayStyle} />
    </>
  );
}

function App() {
  const [mode, setMode] = useState("swap");

  // Toggle between swap and refuel modes.
  const toggleMode = () => {
    setMode((prev) => (prev === "swap" ? "refuel" : "swap"));
  };

  const currentConfig = mode === "swap" ? swapConfig : refuelConfig;

  return (
    <div style={{ padding: '15px', position: 'relative' }}>
      {/* Interactive background */}
      <InteractiveBackground />
      
      <header className="header1">
        <div className="header2">
          </div>
        <div className="headerlink">
          <nav>
          <ul>
            <li>Home</li>
            <li>Documentation</li>
            <li>Bridge</li>
            <li>Buy</li>
            <li>Scan</li>
            <li>News</li>
          </ul>
          </nav>
        </div>
      </header>

      <div className='m13'>
       <h1 > .    </h1>
      </div>
      <div class = "m12" style={{ marginBottom: '15px' }}>
        <h1></h1>
        <button
          onClick={toggleMode}
          style={{
            padding: '10px 30px',
            fontSize: '1rem',
            fontFamily: "Lexend, serif",
            border: 'none',
            borderRadius: '5px',
            backgroundColor: 'rgba(255, 255, 255, 0.81)',
            color: 'rgba(0, 0, 0, 0.81)',
            cursor: 'pointer'
          }}
        >
          {mode === "swap" ? "Refuel" : "Swap"}
        </button>
      </div>

      {/* LI.FI Widget */}
      <LiFiWidget integrator="daybot" config={currentConfig} />
    </div>
  );
}

export default App;
