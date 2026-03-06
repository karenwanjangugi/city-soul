import React from 'react';

export default function Contact() {
  const socialLinks = {
    INSTAGRAM: "https://www.instagram.com/hunja_wangui/",
    LINKEDIN: "https://www.linkedin.com/in/kelvin-hunja",
  };

  return (
    <section id="contact" className="bg-black text-white font-['Montserrat'] relative overflow-hidden min-h-screen border-t border-white/5">
      
      {/* Refined Skyline Graphic */}
      <div className="w-full bg-[#80E3FF]/10 overflow-hidden pointer-events-none z-0 border-b border-white/5">
        <img
          src="/Nai.svg"
          alt="City Silhouette"
          className="w-full h-auto object-bottom block scale-110 pt-10 md:scale-100 origin-bottom opacity-40 mix-blend-overlay"
          // style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-24 pb-24 md:pb-48">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-20">
          
          <div className="flex-1 text-left">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none text-white uppercase italic">LET'S<br/>TALK</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#C91D73] to-transparent"></div>
            </div>
            
            <div className="space-y-12 md:space-y-20 text-base md:text-lg leading-relaxed text-gray-300 font-medium max-w-xl">
              <p className="text-xl md:text-2xl border-l-2 border-[#80E3FF] pl-6 italic">
                Ready to bring your vision to life? Get in touch and let's create something extraordinary together.
              </p>
              
              <div className="space-y-12">
                <div className="flex flex-col group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#C91D73] font-black mb-4">Email Connection</span>
                  <a href="mailto:hunjawangui@gmail.com" className="text-2xl md:text-4xl font-black hover:text-[#80E3FF] transition-all duration-300 tracking-tighter break-words">hunjawangui@gmail.com</a>
                </div>
                
                <div className="flex flex-col group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#80E3FF] font-black mb-4">Direct Line</span>
                  <a href="tel:+254714387438" className="text-2xl md:text-4xl font-black hover:text-[#C91D73] transition-all duration-300 tracking-tighter">+254 714 387 438</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-start lg:items-end w-full">
            <div className="w-full max-w-sm lg:text-right mt-12 lg:mt-0">
              <div className="inline-block mb-12">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black mb-2">Social Pulse</h3>
                <div className="h-0.5 w-full bg-[#C91D73]"></div>
              </div>
              <ul className="space-y-6 md:space-y-10">
                {Object.entries(socialLinks).map(([platform, url]) => (
                  <li key={platform}>
                    <a href={url} target="_blank" rel="noopener noreferrer" 
                       className="text-4xl md:text-6xl font-black hover:text-[#80E3FF] transition-all duration-500 hover:translate-x-4 lg:hover:-translate-x-4 tracking-tighter inline-block uppercase italic">
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Branding */}
      <div className="absolute bottom-12 left-6 right-6 flex items-center justify-between border-t border-white/10 pt-8 opacity-40">
        <span className="text-[10px] font-black tracking-[0.5em] uppercase">City Soul © 2026</span>
        <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#C91D73]">Nairobi • Kenya</span>
      </div>
    </section>
  );
}
