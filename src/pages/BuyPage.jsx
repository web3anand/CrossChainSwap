import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import { useAppKit } from '@reown/appkit/react'; 
import { AppKitProvider } from '../providers/AppKitProvider'; 
import ShinyText from '../components/ui/elements/ShinyText';
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
            <li onClick={() => navigate("/news")}>News</li>
          </ul>
        </div>
      </header>
      <div className="arr">
        <div>
           <p className="rio"> Create your <span>on-chain Footprint</span> on Blockchain </p>
        </div>
        <div className="uy">
           <button onClick={() => open({ view: 'OnRampProviders' })} className="reow">
           <ShinyText text="buy your fortune " disabled={false} speed={3} className='custom-class' />
           </button>
        </div>
      </div>
    </div>
  );
}

export default function BuyContent(){
  return (
    <AppKitProvider>
      <Buy1/>
    </AppKitProvider>
  );
}
