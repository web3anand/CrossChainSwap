import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "20px 0",
        textAlign: "center",
        color: "#fff",
        background: "rgba(0, 0, 0, 0.9)",
        fontSize: "14px",
      }}
    >
      <p>© {new Date().getFullYear()} daybot.fun | All rights reserved.</p>
      <p>
        <a href="/privacy-policy" style={{ color: "#bbb", textDecoration: "none" }}>
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="/terms" style={{ color: "#bbb", textDecoration: "none" }}>
          Terms & Conditions
        </a>
      </p>
    </footer>
  );
}
