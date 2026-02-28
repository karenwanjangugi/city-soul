export default function Vision() {
  return (
    <section id="vision" className="bg-white text-[#1a1a1a] py-24 md:py-32 relative overflow-hidden font-['Montserrat']">
      {/* Keyframe Styles */}
      <style>{`
        @keyframes splatterFadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 0.7; transform: scale(1); }
        }
        @keyframes splatterFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .splatter-anim {
          animation: splatterFadeIn 1.5s ease-out forwards, splatterFloat 6s ease-in-out 1.5s infinite;
        }
      `}</style>

      {/* Splatter Background - Center/Left */}
      <img
        src="/Splatter-01.svg"
        alt=""
        className="splatter-anim absolute top-[20%] -left-[10%] md:left-[10%] w-[300px] md:w-[500px] opacity-20 md:opacity-70 pointer-events-none z-0"
      />

      {/* Splatter Background - Top Right */}
      <img
        src="/Splatter-18.svg"
        alt=""
        className="splatter-anim absolute -top-[5%] -right-[5%] w-[250px] md:w-[450px] opacity-20 md:opacity-70 pointer-events-none z-0"
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] md:leading-none">
              WE<br/>DON'T MISS
            </h2>
          </div>
          <div className="lg:w-2/3">
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-900 font-medium">
              <p className="italic">
                A world where music experiences transcend performance to become 
                transformative platforms for connection, cultural preservation, and artistic growth.
              </p>
              <p className="text-base md:text-lg text-gray-700">
                The objective is the development of a global platform that champions African 
                talent,not just through curation and live experiences, but through artist 
                development, strategic collaboration, and culturally grounded storytelling 
                that resonates across borders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
