import React, { useEffect, useRef } from 'react';
import SpotlightCard from './SpotlightCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


const servicesList = [
  {
    id: "live-music",
    title: "Live Music Experiences",
    description: "There is something timeless about live music. A voice, an instrument, a room full of people listening together. It creates a sense of presence that no playlist ever could.",
    detailedDescription: "City Soul curates soulful live music performances featuring talented singers, bands and instrumentalists who know how to connect with audiences. Every performance is thoughtfully selected to match the mood, audience and atmosphere of your event. Whether the goal is to create a warm and intimate environment or to energise a crowd, we ensure the music feels natural to the moment. The result is an experience where guests don’t just attend, they feel the moment.",
    perfectFor: [
      "Corporate events seeking a refined and engaging atmosphere",
      "Weddings and celebrations that deserve memorable musical moments",
      "Private gatherings where the experience should feel personal and meaningful",
      "Lifestyle events where music becomes part of the identity of the space"
    ],
    image: "/services/pexels-ingo-1755086.jpg",
    color: "#C91D73"
  },
  {
    id: "dj",
    title: "DJ Experiences",
    description: "A great DJ does more than play songs. They read the room. They understand timing. They know when to elevate the energy and when to let a moment breathe.",
    detailedDescription: "City Soul DJs curate musical journeys that guide the flow of an event from beginning to end. Whether it’s a relaxed afternoon gathering, a stylish evening reception, or a vibrant dance floor, our DJs create a soundtrack that fits the atmosphere and keeps guests engaged. We carefully match DJs to the style, audience and intention of each event, ensuring the music feels authentic to the moment. When done right, a DJ doesn’t just entertain, they shape the emotional rhythm of the night.",
    perfectFor: [
      "Brand events and product launches",
      "Private parties and celebrations",
      "Lifestyle and social gatherings",
      "After-parties and late-night experiences"
    ],
    image: "/services/pexels-danielnouri-8448573.jpg",
    color: "#80E3FF"
  },
  {
    id: "event-programming",
    title: "Event Entertainment Programming",
    description: "Great events are rarely remembered for a single moment. They are remembered for the flow of experiences that unfold throughout the evening.",
    detailedDescription: "City Soul designs full entertainment programmes that ensure the energy of an event evolves naturally from beginning to end. By thoughtfully programming the entertainment, we help events feel intentional, dynamic and cohesive rather than a series of disconnected performances. Our role is to ensure entertainment becomes a central part of the experience, not just an addition to it.",
    curateList: [
      "Artist and performer selection",
      "Music direction and event atmosphere",
      "Performance scheduling and flow",
      "Artist coordination and management"
    ],
    perfectFor: [
      "Corporate events",
      "Festivals and cultural gatherings",
      "Brand activations",
      "Experiential events"
    ],
    image: "/services/people-having-fun-wedding-hall.jpg",
    color: "#C91D73"
  },
  {
    id: "venue-programming",
    title: "Venue Music Programming & Residencies",
    description: "For hospitality spaces, music is more than background sound; it is part of the identity of the venue.",
    detailedDescription: "The right music programme can shape how guests experience a space, influence how long they stay, and define the character of the venue. City Soul partners with restaurants, hotels, lounges and lifestyle spaces to design consistent music programmes and artist residencies that elevate their atmosphere and attract audiences. A residency allows a venue to build a recognizable musical identity through regular performances by carefully selected artists or DJs.",
    curateList: [
      "Curated live music nights",
      "DJ residencies and themed music experiences",
      "Weekly or monthly music programming",
      "Artist bookings aligned with the venue’s brand and audience"
    ],
    extraInfo: "Over time, these recurring experiences create familiarity, community and anticipation among guests. When music and atmosphere align, a venue becomes more than a location it becomes a destination people return to.",
    image: "/services/pexels-wolfgang-1002140-2747446.jpg",
    color: "#80E3FF"
  },
  {
    id: "experiential",
    title: "Experiential Entertainment Concepts",
    description: "Some moments call for something beyond traditional performances.",
    detailedDescription: "City Soul designs immersive entertainment experiences that blend music, storytelling, art and audience interaction to create moments that feel distinct and deeply engaging. These experiences move beyond simply watching a performance and invite audiences to step into the atmosphere of the music itself.",
    examples: [
      "Experiential concerts that combine performance and audience interaction",
      "Themed music experiences inspired by culture, storytelling or artistic concepts",
      "Multi-sensory performances that combine music with visual and narrative elements"
    ],
    perfectFor: [
      "Cultural events",
      "Brand activations",
      "creative festivals",
      "intimate artistic gatherings"
    ],
    finalThought: "Our goal is to design experiences that feel unique, immersive and memorable—the kind people talk about long after the event ends.",
    image: "/services/person-close-up-recording-video-with-smartphone-concert.jpg",
    color: "#C91D73"
  }
];


export default function Services() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const serviceRefs = useRef([]);
  const closingRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      gsap.from(introRef.current.children, {
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });


      // Services animation
      serviceRefs.current.forEach((el, i) => {
        if (!el) return;
       
        const isEven = i % 2 === 0;
        const image = el.querySelector('.service-image');
        const content = el.querySelector('.service-content');


        gsap.from(image, {
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
          },
          x: isEven ? -100 : 100,
          opacity: 0,
          duration: 1.5,
          ease: 'power4.out'
        });


        gsap.from(content, {
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
          },
          x: isEven ? 100 : -100,
          opacity: 0,
          duration: 1.5,
          ease: 'power4.out'
        });
      });


      // Closing animation
      gsap.from(closingRef.current, {
        scrollTrigger: {
          trigger: closingRef.current,
          start: 'top 90%',
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    }, sectionRef);


    return () => ctx.revert();
  }, []);


  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#0a051d] text-white font-['Montserrat'] relative overflow-hidden border-t border-white/5">
     
      <div className="max-w-7xl mx-auto px-6 relative z-10">
       
        {/* Intro Section */}
        <div ref={introRef} className="mb-40 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[2px] w-12 bg-[#C91D73]"></span>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#80E3FF]">What We Do</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic mb-12">
            THE INVISIBLE<br/>ARCHITECTURE<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>OF AN EXPERIENCE</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <p className="text-2xl md:text-3xl font-bold leading-tight text-white/90">
              At City Soul Experience, we believe that music is more than entertainment; it is the invisible architecture of an experience.
            </p>
            <div className="space-y-6 text-lg text-gray-400 font-medium border-l-2 border-white/10 pl-8">
              <p>The right music can transform how people feel in a space. It can shift the mood of a room, spark connections between strangers, and turn a gathering into a memory that lingers long after the night ends.</p>
              <p>Our role is to curate the sound, energy and atmosphere of moments that matter. Through thoughtfully selected artists, DJs and immersive music concepts, we design experiences that feel intentional, soulful and alive.</p>
              <p className="text-white font-bold italic pt-4">Whether it’s an intimate gathering, a brand activation, or a venue looking to shape its identity through music, City Soul ensures that the soundtrack of the experience is never accidental.</p>
            </div>
          </div>
        </div>


        {/* Services List */}
        <div className="space-y-48">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              ref={el => serviceRefs.current[index] = el}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
            >
              {/* Image Column */}
              <div className="service-image w-full lg:w-[45%] aspect-[4/5] relative group rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a051d]/80 via-transparent to-transparent opacity-60"></div>
               
                {/* Visual Accent */}
                <div
                  className="absolute top-8 right-8 w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:border-white/50 transition-colors"
                >
                  <span className="text-xs font-black tracking-widest">0{index + 1}</span>
                </div>
              </div>


              {/* Content Column */}
              <div className="service-content w-full lg:w-[55%] space-y-10">
                <SpotlightCard className="bg-white/[0.02] border-white/5 p-10 md:p-12 hover:border-white/10 transition-all duration-500">
                  <div className="mb-10">
                    <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter mb-6">
                      {service.title}
                    </h3>
                    <div className="h-1.5 w-24 rounded-full" style={{ backgroundColor: service.color }}></div>
                  </div>


                  <div className="space-y-8">
                    <p className="text-xl md:text-2xl font-bold text-white/95 leading-snug italic">
                      {service.description}
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed font-medium">
                      {service.detailedDescription}
                    </p>
                    {service.extraInfo && (
                      <p className="text-lg text-gray-400 leading-relaxed font-medium border-l-2 border-[#80E3FF]/30 pl-6 italic">
                        {service.extraInfo}
                      </p>
                    )}
                  </div>


                  {service.perfectFor && (
                    <div className="mt-12 pt-10 border-t border-white/5">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80E3FF] mb-8">Perfect for:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
                        {service.perfectFor.map((item, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-4 group/item">
                            <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 group-hover/item:scale-125" style={{ backgroundColor: service.color }}></span>
                            <span className="leading-tight group-hover/item:text-white transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}


                  {service.curateList && (
                    <div className="mt-12 pt-10 border-t border-white/5">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80E3FF] mb-8">We curate & coordinate:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
                        {service.curateList.map((item, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-4">
                            <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: service.color }}></span>
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}


                  {service.examples && (
                    <div className="mt-12 pt-10 border-t border-white/5">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80E3FF] mb-8">Examples include:</p>
                      <ul className="space-y-5">
                        {service.examples.map((item, i) => (
                          <li key={i} className="text-base text-gray-300 flex items-start gap-4 italic font-medium">
                            <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: service.color }}></span>
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}


                  {service.finalThought && (
                    <p className="mt-12 text-sm font-bold text-white/60 italic uppercase tracking-wider">
                      {service.finalThought}
                    </p>
                  )}
                </SpotlightCard>
              </div>
            </div>
          ))}
        </div>


        {/* Closing Section */}
        <div ref={closingRef} className="mt-64 py-32 border-t border-white/10 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#C91D73] to-transparent"></div>
         
          <h4 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-12">
            Great music doesn’t just fill a space<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #C91D73' }}>it transforms how people experience it.</span>
          </h4>
         
          <div className="flex justify-center gap-6 mt-16">
            {[1,2,3].map(i => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
            ))}
          </div>
        </div>
      </div>


      {/* Background Graphic */}
      <div className="absolute top-1/4 -right-20 opacity-[0.02] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[25rem] font-black leading-none tracking-tighter rotate-90">SERVICES</h2>
      </div>
      <div className="absolute bottom-1/4 -left-20 opacity-[0.02] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[25rem] font-black leading-none tracking-tighter -rotate-90">EXPERIENCE</h2>
      </div>
    </section>
  );
}



