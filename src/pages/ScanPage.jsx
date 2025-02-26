import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import VariableProximity from "../components/ui/elements/VariableProximity";
import "../index.css"; 

export default function ScanPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
    return (
      <div>
 <header className="header1">
        <div className="headerlink">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/documentation")}>Documentation</li>
            <li onClick={() => navigate("/bridge")}>Bridge</li>
            <li>Buy</li>
            <li onClick={() => navigate("/scan")}>Scan</li>
            <li onClick={() => navigate("/news")}>News</li>
          </ul>
        </div>
      </header>


      <div
ref={containerRef}
style={{position: 'relative'}}
>
  <VariableProximity
    label={'Soon you can access ScanPage'}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 400, 'opsz' 9"
    toFontVariationSettings="'wght' 1000, 'opsz' 40"
    containerRef={containerRef}
    radius={150}
    falloff='gaussian'
  />
</div>

      </div>
    );
  }