import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WidgetPage from "./pages/WidgetPage"; // your existing widget page
import "./index.css";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/widget" element={<WidgetPage />} />
      </Routes>
    </Router>
  );
}
