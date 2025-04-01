import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import VariableProximity from "../components/ui/elements/VariableProximity";
import DockHeader from "../components/DockHeader";
import "../index.css"; 

export default function DocumentationPage() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    return (
      <div>

       <DockHeader/>
    
      <div
      className="fo"
      ref={containerRef}
      style={{position: 'relative'}}
>
  <VariableProximity
    label={'SupportPage will be live soon ...'}
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