import React, { useEffect, useRef } from 'react';
import CurateEventTool from '../Components/CurateEventTool';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const toolRef = useRef(null);

  const socialLinks = {
    INSTAGRAM: "https://www.instagram.com/hunja_wangui/",
    LINKEDIN: "https://www.linkedin.com/company/city-soul-experience/",
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Content animation
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
        x: -30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });

      // Tool animation
      gsap.from(toolRef.current, {
        scrollTrigger: {
          trigger: toolRef.current,
          start: 'top 75%',
        },
        x: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="bg-black text-white font-['Montserrat'] relative overflow-hidden min-h-screen border-t border-white/5 pb-24" >
      

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none text-white uppercase italic mb-8 opacity-100">
            LET'S TALK
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-[#80E3FF] text-xs font-black uppercase tracking-[0.5em] mb-4">Inquiry • Collaboration • Curation</p>
            <div className="h-0.5 w-24 bg-[#C91D73] mx-auto"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-20">
          
          {/* Left Column: The Tool */}
          <div className="w-full lg:w-7/12" ref={toolRef}>
            <CurateEventTool />
          </div>

          {/* Right Column: Contact Details & Info */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between" ref={contentRef}>
            <div className="space-y-16">
              <div className="space-y-8 border-l-2 border-[#C91D73] pl-8">
                <h3 className="text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter leading-none">
                  Ready to bring your vision to life?
                </h3>
                <p className="text-lg text-gray-400 font-medium leading-relaxed">
                  Fill out our curation tool or reach out directly. We're ready to design experiences where music and human connection meet.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12">
                <div className="flex flex-col group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#C91D73] font-black mb-3">Email Connection</span>
                  <a href="mailto:citysoulnrb@gmail.com" className="text-xl md:text-2xl font-black hover:text-[#80E3FF] transition-all duration-300 tracking-tighter break-words">citysoulnrb@gmail.com</a>
                </div>
                
                <div className="flex flex-col group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#80E3FF] font-black mb-3">Direct Line</span>
                  <a href="tel:+254714387438" className="text-xl md:text-2xl font-black hover:text-[#C91D73] transition-all duration-300 tracking-tighter">+254 714 387 438</a>
                </div>
              </div>

              <div className="pt-4">
                <div className="inline-block mb-6">
                  <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black mb-2">Social Pulse</h3>
                  <div className="h-0.5 w-full bg-[#C5A059]"></div>
                </div>
                <div className="flex flex-wrap gap-8">
                  {Object.entries(socialLinks).map(([platform, url]) => (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" 
                       className="text-lg font-black hover:text-[#C5A059] transition-all duration-500 tracking-tighter uppercase italic">
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Call to Action Banner - Fills the space below the tool */}
        <div className="mt-24 md:mt-32 pt-16 border-t border-white/10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
              Let’s Create Something Memorable
            </h3>
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Whether you're planning an event, launching a brand experience, or elevating a venue atmosphere, let’s create something unforgettable together.
            </p>
            <div className="pt-8">
               <div className="h-1 w-20 bg-gradient-to-r from-[#C91D73] to-[#80E3FF] mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Branding */}
      <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between opacity-40">
        <span className="text-[10px] font-black tracking-[0.5em] uppercase">City Soul © 2026</span>
        <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#C91D73]">Nairobi • Kenya</span>
      </div>
    </section>
  );
}
