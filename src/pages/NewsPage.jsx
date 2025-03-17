import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function NewsPage() {
  const navigate = useNavigate();

  const manualTweets = ["1895512307008200878"];

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
      {/* Navbar */}
      <header className="header1">
        <div className="headerlink">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/documentation")}>Documentation</li>
            <li onClick={() => navigate("/bridge")}>Bridge</li>
            <li onClick={() => navigate("/buy")}>Buy</li>
            <li onClick={() => navigate("/news")}>News</li>
          </ul>
        </div>
      </header>

      {/* Space below navbar */}
      <div style={{ marginTop: "80px" }} />

      {/* Manual Tweet Embeds */}
      <div
        style={{
          width: "100vw",
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {manualTweets.map((id) => (
          <div
            key={id}
            className="hover-container"
            style={{
              padding: "20px",
              border: "1px solid #444",
              borderRadius: "15px",
              width: "100%",
              maxWidth: "600px",
              transition: "transform 0.3s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "300px", // Optional: ensure space even before tweet loads
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <blockquote className="twitter-tweet" data-theme="dark">
              <a href={`https://twitter.com/hashvalue/status/${id}`}></a>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
}
