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
    const mm = gsap.matchMedia();

    mm.add({
      // Mobile
      isMobile: "(max-width: 767px)",
      // Desktop
      isDesktop: "(min-width: 768px)",
    }, (context) => {
      const { isMobile } = context.conditions;

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
        x: isMobile ? -50 : -200,
        ease: 'none'
      });
    }, sectionRef);

    return () => mm.revert();
  }, []);

  const values = [
    {
      title: 'Soulful Intention',
      description: 'Every choice serves how the moment should feel.',
    },
    {
      title: 'Creative Craft',
      description: 'Immersive, original concepts, delivered with care.',
    },
    {
      title: 'Authentic Connection',
      description: 'Music that brings people together.',
    },
    {
      title: 'Integrity',
      description: "We act in our artists' and clients' best interests, always.",
    },
  ];

  return (
    <section id="vision" ref={sectionRef} className="bg-magenta text-ink pt-12 pb-24 md:pt-16 md:pb-32 relative overflow-hidden font-poppins border-t border-black/5">

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-8 md:pt-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24">
          <div className="lg:w-1/3" ref={titleRef}>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-ink/70">Who We Are</span>
              <h2 className="font-lora text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] md:leading-none uppercase">
                Where Music<br/>Meets Experience
              </h2>
              <div className="h-1 w-20 bg-cyan"></div>
            </div>
          </div>
          <div className="lg:w-2/3" ref={contentRef}>
            <div className="space-y-8 text-lg md:text-xl leading-relaxed font-medium">
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-black/20"></div>
                <p className="font-lora pl-6 text-ink text-xl md:text-2xl italic font-bold">
                 City Soul Experience is an experiential entertainment agency based in Nairobi. We believe music is more than entertainment; it is the invisible architecture of an experience.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-base md:text-lg leading-relaxed text-ink/80">
                  The right sound can shift the mood of a room, spark connection between strangers, and turn a gathering into a memory that lingers long after the night ends.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-ink/80">
                  We curate the sound, energy and atmosphere of moments that matter. Through carefully selected artists, DJs and immersive concepts, we design experiences that feel intentional, soulful and alive, for brands, venues, artists and individuals alike.
                </p>
                <p className="text-base md:text-lg leading-relaxed border-t border-black/10 pt-6 text-ink/80">
                  We bring that same instinct to the talent we develop, the spaces we programme, and the stories we tell about the scene.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission pull-quote */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 border-t border-black/15 pt-14">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-ink/70 block mb-4">Vision</span>
            <p className="font-lora text-xl md:text-2xl italic font-semibold text-ink leading-snug">
              To become the defining name in experiential entertainment across the region, the partner trusted to shape how people feel through music.
            </p>
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-ink/70 block mb-4">Mission</span>
            <p className="font-lora text-xl md:text-2xl italic font-semibold text-ink leading-snug">
              To curate and produce soulful, intentional experiences; to develop and champion exceptional talent; and to raise the standard of entertainment for every space we touch.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 md:mt-24">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-ink/70 block mb-8">Our Values</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-offwhite rounded-2xl p-6 md:p-8 shadow-lg border border-black/5">
                <h3 className="font-lora text-lg md:text-xl font-black text-ink mb-3 leading-tight">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-ink/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
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
