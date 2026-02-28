import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white text-black font-['Montserrat'] relative overflow-hidden min-h-screen flex items-center">
      {/* Splatter Background */}
      <img
        src="/Splatter-19.svg"
        alt=""
        className="absolute top-[5%] -left-[10%] md:left-[5%] w-[300px] md:w-[600px] h-auto opacity-40 md:opacity-80 pointer-events-none z-0"
        style={{ transform: 'rotate(-5deg)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <div className="flex-1 text-left">
            <h2 className="text-5xl md:text-7xl font-black mb-8 md:mb-12 tracking-tighter leading-none">ABOUT</h2>
            <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-gray-900 font-medium max-w-xl">
              <p>
                As a multidisciplinary creative producer, event curator, and artist manager with over
                four years of experience, I develop impactful experiences that merge sound, culture,
                and storytelling. My work spans event curation, artist development, creative direction,
                live production, stakeholder engagement, studio coordination, and brand-aligned content
                strategy.
              </p>
              <p>
                I’ve built strong relationships with artists, venues, and industry players
                across East Africa, ensuring every project is collaborative, artist-first, and strategically
                executed. Backed by a background in business and strategic management, I operate at the
                intersection of creativity and structure, designing culturally resonant experiences that
                drive sustainable growth, grounded in the belief that music is more than performance
                ; it is connection, identity, and legacy.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Stack */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[300px] md:max-w-[450px] aspect-[4/5]">
              {/* The Black Background Plate (Offset) */}
              <div 
                className="absolute top-6 left-6 md:top-10 md:left-10 w-full h-full bg-black z-0"
                aria-hidden="true"
              ></div>
              
              {/* The Photo Container */}
              <div className="relative z-10 w-full h-full bg-gray-200 shadow-xl overflow-hidden border border-gray-100">
                <img 
                  src="/photo.png" 
                  alt="City Soul Culture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
