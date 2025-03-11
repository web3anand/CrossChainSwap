import React, { useRef, useEffect } from 'react';

export default function HyperspeedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Create a star field with depth (z)
    const stars = [];
    const numStars = 500; // Adjust for density
    const maxZ = width;
    
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * maxZ
      });
    }
    
    function draw() {
      // Clear canvas with black background
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);
      
      // Draw each star
      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        // Perspective projection factor
        const k = 128 / (star.z || 1);
        const x = star.x * k + width / 2;
        const y = star.y * k + height / 2;
        const r = (1 - star.z / maxZ) * 2; // star size diminishes with distance
        
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }
    }
    
    function update() {
      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        // Increase z to simulate moving forward (stars moving outward)
        star.z -= 4; // Speed factor; adjust as needed
        if (star.z < 1) {
          // Reset star to far distance and randomize position
          star.z = maxZ;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
        }
      }
    }
    
    function animate() {
      update();
      draw();
      requestAnimationFrame(animate);
    }
    
    animate();
    
    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}
    />
  );
}
