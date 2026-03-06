import React from 'react';

export default function Vision() {
  return (
    <section id="vision" className="bg-[#C91D73] text-[#1a1a1a] pt-12 pb-24 md:pt-16 md:pb-32 relative overflow-hidden font-['Montserrat'] border-t border-black/5">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-8 md:pt-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <div className="flex flex-col gap-4">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] md:leading-none uppercase">
                WE<br/>DON'T MISS
              </h2>
              <div className="h-1 w-20 bg-[#80E3FF]"></div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="space-y-8 text-lg md:text-xl leading-relaxed font-medium">
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-black/20"></div>
                <p className="pl-6 text-black/80 text-xl md:text-2xl">
                  A world where music experiences transcend performance to become 
                  transformative platforms for connection, cultural preservation, and artistic growth.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.2em] px-3 py-1 bg-black text-[#80E3FF] rounded-full">Our Objective</span>
                  <div className="h-px flex-1 bg-black/20"></div>
                </div>
                <p className="text-base md:text-lg leading-relaxed">
                  The objective is the development of a global platform that champions African 
                  talent, not just through curation and live experiences, but through artist 
                  development, strategic collaboration, and culturally grounded storytelling 
                  that resonates across borders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Detail */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <h2 className="text-[15rem] font-black leading-none translate-y-20 translate-x-10 tracking-tighter">VISION</h2>
      </div>
    </section>
  );
}
