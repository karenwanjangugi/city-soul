import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SpotlightCard from './SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    id: "live-music",
    title: "Live Music Experiences",
    shortDescription: "Soulful performances featuring talented singers, bands and instrumentalists curated for the moment.",
    detailedDescription: "City Soul curates soulful live music performances featuring talented singers, bands and instrumentalists who know how to connect with audiences. Every performance is thoughtfully selected to match the mood, audience and atmosphere of your event.",
    fullContent: "There is something timeless about live music. A voice, an instrument, a room full of people listening together. It creates a sense of presence that no playlist ever could. Whether the goal is to create a warm and intimate environment or to energise a crowd, we ensure the music feels natural to the moment. The result is an experience where guests don’t just attend, they feel the moment.",
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
    shortDescription: "Our DJs curate musical journeys that guide the flow of an event from beginning to end.",
    detailedDescription: "City Soul DJs curate musical journeys that guide the flow of an event from beginning to end. Whether it’s a relaxed afternoon gathering, a stylish evening reception, or a vibrant dance floor.",
    fullContent: "A great DJ does more than play songs. They read the room. They understand timing. They know when to elevate the energy and when to let a moment breathe. We carefully match DJs to the style, audience and intention of each event, ensuring the music feels authentic to the moment. When done right, a DJ doesn’t just entertain, they shape the emotional rhythm of the night.",
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
    shortDescription: "We design full entertainment programmes that ensure the energy of an event evolves naturally.",
    detailedDescription: "City Soul designs full entertainment programmes that ensure the energy of an event evolves naturally from beginning to end.",
    fullContent: "Great events are rarely remembered for a single moment. They are remembered for the flow of experiences that unfold throughout the evening. By thoughtfully programming the entertainment, we help events feel intentional, dynamic and cohesive rather than a series of disconnected performances. Our role is to ensure entertainment becomes a central part of the experience, not just an addition to it.",
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
    shortDescription: "Partnering with hospitality spaces to design consistent music programmes and residencies.",
    detailedDescription: "City Soul partners with restaurants, hotels, lounges and lifestyle spaces to design consistent music programmes and artist residencies.",
    fullContent: "For hospitality spaces, music is more than background sound; it is part of the identity of the venue. The right music programme can shape how guests experience a space, influence how long they stay, and define the character of the venue. A residency allows a venue to build a recognizable musical identity through regular performances by carefully selected artists or DJs. Over time, these recurring experiences create familiarity, community and anticipation among guests.",
    curateList: [
      "Curated live music nights",
      "DJ residencies and themed music experiences",
      "Weekly or monthly music programming",
      "Artist bookings aligned with the venue’s brand and audience"
    ],
    image: "/services/pexels-wolfgang-1002140-2747446.jpg",
    color: "#80E3FF"
  },
  {
    id: "experiential",
    title: "Experiential Entertainment Concepts",
    shortDescription: "Immersive entertainment experiences that blend music, storytelling, and art.",
    detailedDescription: "City Soul designs immersive entertainment experiences that blend music, storytelling, art and audience interaction.",
    fullContent: "Some moments call for something beyond traditional performances. These experiences move beyond simply watching a performance and invite audiences to step into the atmosphere of the music itself. Our goal is to design experiences that feel unique, immersive and memorable—the kind people talk about long after the event ends.",
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
    image: "/services/person-close-up-recording-video-with-smartphone-concert.jpg",
    color: "#C91D73"
  }
];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.from(gridRef.current.children, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'ArrowRight') {
        nextService();
      } else if (e.key === 'ArrowLeft') {
        prevService();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  // Reset scroll position when changing service in modal
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [selectedIndex]);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextService = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % servicesList.length);
  };

  const prevService = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + servicesList.length) % servicesList.length);
  };

  const selectedService = selectedIndex !== null ? servicesList[selectedIndex] : null;

  return (
    <section 
      id="services" 
      ref={sectionRef} 
      className={`py-32 bg-[#0a051d] text-white font-['Montserrat'] relative border-t border-white/5 transition-all duration-300 ${selectedIndex !== null ? 'z-[10000]' : 'z-10'}`}
    >
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div ref={titleRef} className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-[#C91D73]"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-[#80E3FF]">What We Do</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic">
              OUR<br/>SERVICES
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-white/80 max-w-md font-medium border-l-2 border-white/20 pl-8 italic">
            At City Soul Experience, we believe that music is more than entertainment; it is the <span className="text-white">invisible architecture</span> of an experience.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={service.id} 
              onClick={() => openModal(index)}
              className="group cursor-pointer h-full"
            >
              <SpotlightCard className="h-full flex flex-col bg-black/20 border-white/10 hover:border-white/30 transition-all duration-500 p-8 md:p-10 min-h-[450px]">
                <div className="relative mb-12 overflow-hidden rounded-2xl aspect-square lg:aspect-video shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-4 right-4 text-[10px] font-black tracking-widest text-white/50">0{index+1}</div>
                </div>

                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter group-hover:text-[#80E3FF] transition-colors leading-none">
                    {service.title}
                  </h3>
                  <p className="text-white/60 font-medium leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-4 text-[#80E3FF] font-black uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
                  <span>Explore Details</span>
                  <ArrowRight size={16} />
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedService && (
          <div 
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4 md:p-8 lg:p-12 bg-black/95 backdrop-blur-xl"
            onClick={closeModal}
          >
            {/* Previous Button */}
            <button 
              onClick={prevService}
              className="absolute left-4 md:left-8 z-[10004] p-4 bg-black/50 hover:bg-[#C91D73] text-white rounded-full transition-all duration-300 border border-white/10 hover:border-transparent group hidden md:block"
              aria-label="Previous service"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            {/* Next Button */}
            <button 
              onClick={nextService}
              className="absolute right-4 md:right-8 z-[10004] p-4 bg-black/50 hover:bg-[#C91D73] text-white rounded-full transition-all duration-300 border border-white/10 hover:border-transparent group hidden md:block"
              aria-label="Next service"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div 
              className="relative max-w-6xl w-full bg-[#111] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-[10002]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 z-[10003] p-4 bg-black/50 hover:bg-[#C91D73] text-white rounded-full transition-all duration-300 border border-white/10 hover:border-transparent group"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform" />
              </button>

              {/* Modal Image Section */}
              <div className="w-full md:w-[45%] h-[250px] md:h-auto relative overflow-hidden flex-shrink-0">
                <img 
                  key={selectedService.image}
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 flex flex-col gap-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#80E3FF]">The Experience</span>
                  <h4 className="text-3xl font-black uppercase italic tracking-tighter text-white">{selectedService.id.replace('-', ' ')}</h4>
                </div>
              </div>

              {/* Modal Content Section */}
              <div 
                ref={contentRef}
                className="w-full md:w-[55%] p-8 md:p-16 overflow-y-auto custom-scrollbar bg-[#111]"
                data-lenis-prevent
              >
                <div className="mb-12">
                  <div className="h-1 w-20 mb-8" style={{ backgroundColor: selectedService.color }}></div>
                  <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8">
                    {selectedService.title}
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-white leading-tight italic">
                    {selectedService.detailedDescription}
                  </p>
                </div>

                <div className="space-y-12">
                  <div className="space-y-6">
                    <p className="text-lg text-white/60 font-medium leading-relaxed">
                      {selectedService.fullContent}
                    </p>
                  </div>

                  {selectedService.perfectFor && (
                    <div className="pt-10 border-t border-white/5">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80E3FF] mb-8">Perfect for:</p>
                      <ul className="grid grid-cols-1 gap-4">
                        {selectedService.perfectFor.map((item, i) => (
                          <li key={i} className="text-sm text-white/50 flex items-start gap-4 group/item hover:text-white transition-colors">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: selectedService.color }}></span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedService.curateList && (
                    <div className="pt-10 border-t border-white/5">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80E3FF] mb-8">We curate & coordinate:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {selectedService.curateList.map((item, i) => (
                          <li key={i} className="text-sm text-white/50 flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: selectedService.color }}></span>
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedService.examples && (
                    <div className="pt-10 border-t border-white/5">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80E3FF] mb-8">Concept Examples:</p>
                      <ul className="space-y-4">
                        {selectedService.examples.map((item, i) => (
                          <li key={i} className="text-base text-white/70 flex items-start gap-4 italic font-medium">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: selectedService.color }}></span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">City Soul Experience</p>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C91D73]"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

         {/* Closing Section */}
        <div className="mt-10 py-20 border-t border-white/10 text-center relative">
         
          <h4 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-12">
            Great music doesn’t just fill a space<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #C91D73' }}>it transforms how people experience it.</span>
          </h4>

        </div>

      {/* Background Graphic */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none select-none hidden lg:block">
        <h2 className="text-[30rem] font-black leading-none tracking-tighter italic">SOUL</h2>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #C91D73;
        }
      `}} />
    </section>
  );
}
