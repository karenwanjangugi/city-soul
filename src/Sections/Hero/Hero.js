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

      // Draw text outline first (before the cutout)
      const text = 'FEEL THE\nMOMENT';
      const fontSize = Math.min(width * 0.15, width < 768 ? 80 : 250);
      const lines = text.split('\n');
      const lineHeight = fontSize * 0.85;
      const totalHeight = lineHeight * lines.length;
      const startY = height / 2 - totalHeight / 2 + (width < 768 ? 0 : 100);
      const startX = width < 768 ? 20 : 50;

      ctx.font = `900 ${fontSize}px Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      
      // 1. Draw the Outline (Source-over)
      ctx.globalCompositeOperation = 'source-over';
      
      // Create a diagonal gradient for the stroke
      const gradient = ctx.createLinearGradient(startX, startY, startX + width * 0.5, startY + totalHeight);
      gradient.addColorStop(0, '#C91D73'); // Pink
      gradient.addColorStop(0.5, '#80E3FF'); // Light Blue
      gradient.addColorStop(1, '#2A098C'); // Purple
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = width < 768 ? 2 : 4;
      ctx.lineJoin = 'round';
      
      lines.forEach((line, index) => {
        ctx.strokeText(line, startX, startY + index * lineHeight + fontSize / 2);
      });

      // 2. Draw the Cutout (Destination-out)
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      
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
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 block"
      />
    </section>
  );
}
