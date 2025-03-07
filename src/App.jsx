import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BridgePage from "./pages/BridgePage"; // your existing widget page
import DocumentationPage from "./pages/DocumentationPage";
import NewsPage from "./pages/NewsPage";
import ScanPage from "./pages/ScanPage";
import "./index.css";
import BuyPage from "./pages/BuyPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bridge" element={<BridgePage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/scan" element={<ScanPage />} />
      </Routes>
    </Router>
  );
}
