import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DockHeader from "../components/DockHeader";
import "../index.css";

export default function NewsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const loadTwitterScript = () => {
      if (window.twttr) {
        window.twttr.widgets.load();
        return;
      }

      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    };

    loadTwitterScript();
  }, []);

  return (
    <div>
      <DockHeader />

      {/* Space below navbar */}
      <div style={{ marginTop: "80px" }} />

      {/* Embedded Twitter Timeline */}
      <div
        style={{
          width: "100vw",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#f8f9fa",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        }}
      >

        <a
          className="twitter-timeline"
          data-width="900"
          data-height="600"
          data-theme="dark"
          href="https://twitter.com/hashvalue?ref_src=twsrc%5Etfw"
        >
          
        </a>
      </div>
    </div>
  );
}
