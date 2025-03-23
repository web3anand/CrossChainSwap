import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useAppKit } from "@reown/appkit/react";
import { AppKitProvider } from "../providers/AppKitProvider";
import ShinyText from "../components/ui/elements/ShinyText";
import DockHeader from "../components/DockHeader";
import "../index.css";

function Buy1() {
  const navigate = useNavigate();
  const { open } = useAppKit();
  const containerRef = useRef(null);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        width: "100%",
      }}
    >
     {/* Fullscreen Background Image */}
   <div
     className="buy-container"
      style={{
       position: "fixed", // change to fixed to cover full screen
       top: 0,
       left: 0,
       width: "100vw",    
       height: "100vh",   
       backgroundImage: `url("/12.jpg")`,
       backgroundSize: "cover",
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat",
       zIndex: -3,
     }}
   />

     {/* Blur Overlay */}
    <div
       className="bg-blur"
       style={{
         position: "fixed", // change to fixed for full overlay
         top: 0,
         left: 0,
         width: "100vw",
         height: "100vh",
         backdropFilter: "blur(20px)",
         WebkitBackdropFilter: "blur(20px)",
         zIndex: -2,
         }}
          />



      {/* Main Content */}
      <DockHeader />

      <div className="arr" style={{ position: "relative", zIndex: 1 }}>
        <div>
          <p className="rio">
            Create your <span>on-chain Footprint</span> on Blockchain
          </p>
        </div>
        <div className="uy">
          <button onClick={() => open({ view: "OnRampProviders" })} className="reow">
            <ShinyText
              text="buy your fortune "
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BuyContent() {
  return (
    <AppKitProvider>
      <Buy1 />
    </AppKitProvider>
  );
}
