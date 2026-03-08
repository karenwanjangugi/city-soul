import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Fade in content
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });

      // Parallax for background text
      gsap.to(bgTextRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        x: window.innerWidth < 768 ? -50 : -200,
        ease: 'none'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="vision" ref={sectionRef} className="bg-[#C91D73] text-[#1a1a1a] pt-12 pb-24 md:pt-16 md:pb-32 relative overflow-hidden font-['Montserrat'] border-t border-black/5">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-8 md:pt-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24">
          <div className="lg:w-1/3" ref={titleRef}>
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] md:leading-none uppercase">
                Where Music<br/>Meets Experience
              </h2>
              <div className="h-1 w-20 bg-[#80E3FF]"></div>
            </div>
          </div>
          <div className="lg:w-2/3" ref={contentRef}>
            <div className="space-y-8 text-lg md:text-xl leading-relaxed font-medium">
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-black/20"></div>
                <p className="pl-6 text-black/80 text-xl md:text-2xl italic font-bold">
                  City Soul Experience is a premier entertainment company in Nairobi and a dedicated experiential entertainment company focused on creating moments that feel alive, soulful and unforgettable.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-black/80">
                  We believe music has the power to shape memories. The right sound can transform the energy of a room and bring people together in meaningful ways.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-black/80">
                  Our work sits at the intersection of music, culture and live experiences, bringing together talented artists, DJs and creatives to design moments that stay with people long after the music fades.
                </p>
                <p className="text-base md:text-lg leading-relaxed border-t border-black/10 pt-6 text-black/80">
                  We collaborate with brands, venues and event organisers to craft experiences that feel intentional, vibrant and deeply human.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Detail */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none overflow-hidden w-full h-full flex items-end justify-end">
        <h2 ref={bgTextRef} className="text-[12vw] md:text-[15rem] font-black leading-none translate-y-1/4 translate-x-[5%] md:translate-x-0 tracking-tighter uppercase whitespace-nowrap">CULTURE EXPERIENCE</h2>
      </div>
    </section>
  );
}
