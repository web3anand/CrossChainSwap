import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BridgePage from "./pages/BridgePage"; // your existing widget page
import SupportPage from "./pages/SupportPage";
import "./index.css";
import BuyPage from "./pages/BuyPage";
import NewsPage from "./pages/NewsPage";




export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bridge" element={<BridgePage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}
