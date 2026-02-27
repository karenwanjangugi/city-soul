import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);

      // Fill canvas with fully opaque black overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, width, height);

      // Draw text cutouts
      const text = 'FEEL THE\nMOMENT';
      // Adjust font size based on screen width
      const fontSize = Math.min(width * 0.15, width < 768 ? 80 : 250);
      
      ctx.font = `900 ${fontSize}px Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';

      // Create clipping path for text (cutout effect)
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      
      const lines = text.split('\n');
      const lineHeight = fontSize * 0.85;
      const totalHeight = lineHeight * lines.length;
      
      // Vertical centering with offset
      const startY = height / 2 - totalHeight / 2 + (width < 768 ? 0 : 100);
      const startX = width < 768 ? 20 : 50;

      lines.forEach((line, index) => {
        ctx.fillText(line, startX, startY + index * lineHeight + fontSize / 2);
      });
    };

    draw();
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* CANVAS OVERLAY WITH TEXT CUTOUTS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 block"
      />

      {/* RIGHT SIDE TEXT CONTENT */}
      {/* <div className="absolute z-20 text-white font-['Montserrat'] px-6
                      bottom-20 left-6 right-6 md:right-[5%] md:left-auto md:top-[65%] md:bottom-auto md:w-[35%] md:-translate-y-1/2">
        <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed mb-8 md:mb-12">
          In the heartbeat of the city, we find the rhythm of the soul. We don't 
          just create events; we craft experiences that resonate in the quiet 
          moments between the lights.
        </p>
        <button
          className="w-full md:w-[350px] py-4 bg-white text-black rounded-full text-lg md:text-xl font-bold 
                     transition-all duration-300 hover:bg-white/80 active:scale-95"
          onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
        </button>
      </div> */}
    </section>
  );
}

