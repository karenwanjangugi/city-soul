import { useEffect, useRef, useState } from 'react';

const backgroundAssets = [
  { 
    type: 'video', 
    src: '/video.mp4',
    fallback: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2000'
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=80&w=2000', 
    alt: 'Live Band Performance' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000', 
    alt: 'Crowd Energy' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=2000', 
    alt: 'DJ Performance' 
  },
  { 
    type: 'image', 
    src: 'https://images.unsplash.com/photo-1514525253361-bee8a187449a?auto=format&fit=crop&q=80&w=2000', 
    alt: 'Intimate Music moments' 
  },
];

export default function Hero() {
  const canvasRef = useRef(null);
  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAssetIndex((prev) => (prev + 1) % backgroundAssets.length);
    }, 7000); 
    return () => clearInterval(interval);
  }, []);

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

      // Dark cinematic overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
      ctx.fillRect(0, 0, width, height);

      // Cinematic Cutout Text - Positioned TOP RIGHT
      const text = 'MUSIC.\nCULTURE.\nMOMENTS.';
      const fontSize = Math.min(width * 0.08, width < 768 ? 35 : 120);
      const lines = text.split('\n');
      const lineHeight = fontSize * 1.0;
      
      const startY = height * 0.2; 
      const startX = width < 768 ? width - 20 : width - 80;

      ctx.font = `900 ${fontSize}px Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
      ctx.textAlign = 'right';
      ctx.textBaseline = 'top';
      
      // 1. Draw the Outline
      ctx.globalCompositeOperation = 'source-over';
      const gradient = ctx.createLinearGradient(startX, startY, startX - width * 0.4, startY + (lineHeight * lines.length));
      gradient.addColorStop(0, '#C91D73');
      gradient.addColorStop(0.5, '#80E3FF');
      gradient.addColorStop(1, '#2A098C');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = width < 768 ? 2 : 5;
      ctx.lineJoin = 'round';
      
      lines.forEach((line, index) => {
        ctx.strokeText(line, startX, startY + index * lineHeight);
      });

      // 2. Draw the Cutout
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      
      lines.forEach((line, index) => {
        ctx.fillText(line, startX, startY + index * lineHeight);
      });
    };

    draw();
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black font-['Montserrat']">
      {/* Cinematic Background Slider */}
      <div className="absolute inset-0 z-0">
        {backgroundAssets.map((asset, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentAssetIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {asset.type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={asset.src} type="video/mp4" />
              </video>
            ) : (
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear"
                style={{ 
                  backgroundImage: `url(${asset.src})`,
                  transform: index === currentAssetIndex ? 'scale(1.1)' : 'scale(1)'
                }}
              />
            )}
          </div>
        ))}
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 block pointer-events-none"
      />

      {/* Content Overlay - Positioned at the bottom to avoid canvas cutout text */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-20 pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-0.5 w-12 bg-[#80E3FF]"></span>
            <span className="text-[#80E3FF] text-xs md:text-sm font-black tracking-[0.4em] uppercase">City Soul Experience</span>
          </div>

          <div className="space-y-6 text-white/90 max-w-2xl leading-relaxed">
            <h1 className="text-3xl md:text-6xl font-black text-white italic tracking-tight leading-[1.1]">
              Music. Culture.<br/>Unforgettable Moments.
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-200 max-w-xl">
              We curate live music, DJ experiences and immersive entertainment that transform events into powerful shared memories.
            </p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm font-black text-[#C91D73] uppercase tracking-widest pt-4">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                For Brands
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                For Venues
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                For the Culture
              </span>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-[#C91D73] text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 text-center shadow-2xl"
            >
              Curate My Event
            </a>
            <a 
              href="#moments" 
              className="px-10 py-5 border-2 border-white text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              Explore Experiences
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </section>
  );
}
