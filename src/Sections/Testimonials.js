import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-black text-white flex items-center justify-center font-['Montserrat'] relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16 md:pt-24">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-20 md:mb-32 gap-12">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-[#80E3FF]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C91D73]">Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic">
              THE WORD<br />ON THE STREET
            </h2>
          </div>
          <div className="md:w-1/3 md:pt-12">
            <p className="text-gray-400 text-lg font-medium leading-relaxed italic border-r-2 border-[#C91D73] pr-6 text-right">
              "Experience is the only currency that matters in the city."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-left">
          <div className="relative group">
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#80E3FF] to-[#C91D73] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl italic font-light leading-relaxed text-gray-200">
                “Working with City Soul Experience was one of the best decisions we made for our Valentines dinner. From the curation of the live band to the seamless sound production and overall flow of the evening, everything felt intentional and premium.”
              </p>
              <div>
                <cite className="text-base md:text-lg font-black not-italic block uppercase tracking-tight text-[#80E3FF]">
                  Marketing Manager
                </cite>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Novotel Nairobi</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C91D73] to-[#80E3FF] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl italic font-light leading-relaxed text-gray-200">
                “City Soul Experience transformed my birthday celebration into something I will remember for the rest of my life. They didn’t just bring performers, they brought energy, emotion, and magic into the space.”
              </p>
              <div>
                <cite className="text-base md:text-lg font-black not-italic block uppercase tracking-tight text-[#C91D73]">
                  Private Client
                </cite>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none w-full text-center overflow-hidden">
        <span className="text-[20vw] md:text-[30vw] font-black tracking-tighter uppercase leading-none text-white">STREET</span>
      </div>
    </section>
  );
}
