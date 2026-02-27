import React, { useRef, useState } from 'react';

const ChromaPhoto = ({ src, alt, className = "" }) => {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to center of the image
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const moveX = (e.clientX - centerX) / (rect.width / 2);
    const moveY = (e.clientY - centerY) / (rect.height / 2);

    // Max displacement in pixels
    const intensity = 10;
    setOffset({
      x: moveX * intensity,
      y: moveY * intensity
    });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setOffset({ x: 0, y: 0 });
  };

  const layerStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    mixBlendMode: 'screen',
    transition: isHovering ? 'none' : 'transform 0.5s ease-out',
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden bg-black ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ isolation: 'isolate' }}
    >
      {/* Base Image (Grey/Dark for background) */}
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover opacity-50 grayscale" 
      />

      {/* Red Channel Layer */}
      <div 
        style={{
          ...layerStyle,
          backgroundColor: 'red',
          backgroundBlendMode: 'multiply',
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      />

      {/* Green Channel Layer */}
      <div 
        style={{
          ...layerStyle,
          backgroundColor: 'lime',
          backgroundBlendMode: 'multiply',
          transform: `translate(${-offset.x}px, ${-offset.y}px)`,
        }}
      />

      {/* Blue Channel Layer */}
      <div 
        style={{
          ...layerStyle,
          backgroundColor: 'blue',
          backgroundBlendMode: 'multiply',
          transform: `translate(${offset.y}px, ${-offset.x}px)`,
        }}
      />
    </div>
  );
};

export default ChromaPhoto;
