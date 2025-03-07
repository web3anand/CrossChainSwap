import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import { useAppKit } from '@reown/appkit/react'; 
import { AppKitProvider } from '../providers/AppKitProvider'; 
import "../index.css"; 

function Buy1() {
  const navigate = useNavigate();
  const { open } = useAppKit(); 
  const containerRef = useRef(null);
    return (
      <div>

<header className="header1">
        <div className="headerlink">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/documentation")}>Documentation</li>
            <li onClick={() => navigate("/bridge")}>Bridge</li>
            <li onClick={() => navigate("/buy")}>Buy</li>
            <li onClick={() => navigate("/scan")}>Scan</li>
            <li onClick={() => navigate("/news")}>News</li>
          </ul>
        </div>
      </header>

      
       <div><button onClick={() => open()} className="reow"> BUY CRYPTO </button></div>
     

      </div>
    );
  }

  export default function buycontent(){
    return (
        <AppKitProvider>
         <Buy1/>
        </AppKitProvider>
    );
  }