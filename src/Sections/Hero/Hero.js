import { useEffect, useState } from 'react';

const backgroundAssets = [
  { 
    type: 'video', 
    src: '/video.mp4',
    fallback: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2000'
  },
  { 
    type: 'image', 
    src: '/crowd.jpg', 
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
  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAssetIndex((prev) => (prev + 1) % backgroundAssets.length);
    }, 7000); 
    return () => clearInterval(interval);
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
        {/* Cinematic dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Content Overlay - Centered layout */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center pb-12 md:pb-0 px-6 md:px-20">
        <div className="max-w-4xl text-center">

          <div className="space-y-6 md:space-y-8 text-white/95 max-w-3xl mx-auto leading-relaxed">
            <h1 className="text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-black text-white italic tracking-tight mb-4 md:mb-6 leading-[1.05]">
              Music. Culture.<br/>
              Unforgettable Moments.
            </h1>
            <p className="text-base md:text-xl lg:text-2xl font-medium text-gray-100 max-w-2xl mx-auto leading-relaxed">
              We curate live music, DJ experiences and immersive entertainment that transform events into powerful shared memories.
            </p>
            
            <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-3 text-[10px] md:text-xs font-black text-[#C91D73] uppercase tracking-[0.2em] pt-2">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]"></span>
                For Brands
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]"></span>
                For Venues
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]"></span>
                For the Culture
              </span>
            </div>
          </div>
          
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 md:px-12 py-4 md:py-5 bg-[#C91D73] text-white font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all duration-300 text-center shadow-2xl"
            >
              Curate My Event
            </a>
            <a 
              href="#moments" 
              className="px-8 md:px-12 py-4 md:py-5 border-2 border-white text-white font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              Explore Experiences
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-center gap-6 opacity-60">
        <div className="w-px h-20 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </section>
  );
}
