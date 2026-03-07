import React, { useEffect, useRef } from 'react';
import SpotlightCard from './SpotlightCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    title: "Live Music Experiences",
    description: "Soulful performances from talented singers, bands and musicians curated to match the mood of your event.",
    perfectFor: ["corporate events", "weddings", "private celebrations", "lifestyle events"],
    icon: "🎤",
    color: "#C91D73"
  },
  {
    title: "DJ Experiences",
    description: "Our DJs do more than play music — they shape the energy of the room. From laid-back sunset sets to vibrant dance floors, each set is thoughtfully curated.",
    icon: "🎧",
    color: "#80E3FF"
  },
  {
    title: "Event Entertainment Programming",
    description: "We design full entertainment line-ups for events. From artist selection to performance flow and coordination, we ensure every moment feels seamless.",
    icon: "📅",
    color: "#C91D73"
  },
  {
    title: "Venue Music Programming",
    description: "We partner with restaurants, hotels and lounges to curate recurring music experiences that elevate their atmosphere and attract audiences.",
    icon: "🏨",
    color: "#80E3FF"
  },
  {
    title: "Experiential Entertainment Concepts",
    description: "We create immersive music experiences that combine performance, storytelling and audience interaction.",
    icon: "✨",
    color: "#C91D73"
  }
];

export default function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Staggered cards animation
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#2A098C] text-white font-['Montserrat'] relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 relative z-10">
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-1 w-8 bg-[#C91D73]"></span>
              <span className="text-xs font-black uppercase tracking-widest text-[#80E3FF]">What We Do</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase italic">
              OUR<br/>SERVICES
            </h2>
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-md font-medium border-l-2 border-white/20 pl-6">
            We are a leader in event entertainment in Kenya, providing bespoke DJ and live music entertainment and beyond to help you create moments that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} ref={el => cardsRef.current[index] = el}>
              <SpotlightCard className="flex flex-col h-full group bg-black/20 border-white/5 hover:border-white/20 transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <div 
                    className="w-10 h-1 rounded-full opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: service.color }}
                  ></div>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium mb-6">
                  {service.description}
                </p>
                
                {service.perfectFor && (
                  <div className="mt-auto">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#80E3FF] mb-3">Perfect for:</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.perfectFor.map((item, i) => (
                        <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#C91D73] rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-white/5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: service.color }}>
                    Service 0{index + 1}
                  </span>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 p-4 md:p-12 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[7rem] md:text-[20rem] font-black leading-none tracking-tighter">SOUL</h2>
      </div>
    </section>
  );
}
