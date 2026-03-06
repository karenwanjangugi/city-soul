import React from 'react';

export default function About() {
  return (
    <section id="about" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#80E3FF] text-black font-['Montserrat'] relative overflow-hidden min-h-screen flex items-center border-t border-black/5">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-8 md:pt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className="flex-1 text-left">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">ABOUT</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-black/40 to-transparent"></div>
            </div>
            
            <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-gray-900 font-medium max-w-xl border-l-2 border-[#C91D73] pl-6 md:pl-8">
              <p>
                As a multidisciplinary creative producer, event curator, and artist manager with over
                four years of experience, Hunja develops impactful experiences that merge sound, culture,
                and storytelling. Hunja's work spans event curation, artist development, creative direction,
                live production, stakeholder engagement, studio coordination, and brand-aligned content
                strategy.
              </p>
              <p>
                Hunja has built strong relationships with artists, venues, and industry players
                across East Africa, ensuring every project is collaborative, artist-first, and strategically
                executed. Backed by a background in business and strategic management, Hunja operates at the
                intersection of creativity and structure, designing culturally resonant experiences that
                drive sustainable growth.
              </p>
              <div className="pt-4 flex items-center gap-2">
                <span className="h-1 w-10 bg-[#C91D73] rounded-full"></span>
                <span className="text-xs font-black uppercase tracking-widest">The Soul Behind the City</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[300px] md:max-w-[450px] aspect-[4/5] group">
              {/* Colored Offsets */}
              <div 
                className="absolute top-4 left-4 md:top-8 md:left-8 w-full h-full bg-[#C91D73] z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
                aria-hidden="true"
              ></div>
              <div 
                className="absolute top-8 left-8 md:top-14 md:left-14 w-full h-full bg-black/10 z-0"
                aria-hidden="true"
              ></div>
              
              <div className="relative z-10 w-full h-full bg-gray-200 shadow-2xl overflow-hidden border-2 border-black/5">
                <img 
                  src="/photo.png" 
                  alt="City Soul Culture" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
