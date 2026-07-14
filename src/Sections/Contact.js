import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CurateEventTool from '../Components/CurateEventTool';
import ShortEnquiryForm from '../Components/ShortEnquiryForm';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const intentTabs = [
  { id: 'event', label: 'Curate an Event' },
  { id: 'talent', label: 'Book Talent' },
  { id: 'advisory', label: 'Advisory Enquiry' },
  { id: 'general', label: 'General Enquiry' },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const toolRef = useRef(null);

  const location = useLocation();
  const [activeIntent, setActiveIntent] = useState('event');
  const [talentAct, setTalentAct] = useState(null);

  const socialLinks = {
    INSTAGRAM: "https://www.instagram.com/hunja_wangui/",
    LINKEDIN: "https://www.linkedin.com/company/city-soul-experience/",
  };

  useEffect(() => {
    const { intent, extra } = location.state || {};
    if (intent) setActiveIntent(intent);
    if (intent === 'talent' && extra) setTalentAct(extra);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

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
    <section id="contact" ref={sectionRef} className="bg-black text-white font-poppins relative overflow-hidden min-h-screen border-t border-white/5 pb-24" >


      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-32 md:pt-40">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="font-lora text-7xl md:text-[10rem] font-black tracking-tighter leading-none text-white uppercase italic mb-8 opacity-100">
            LET'S TALK
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-cyan text-xs font-black uppercase tracking-[0.5em] mb-4">Inquiry • Collaboration • Curation</p>
            <div className="h-0.5 w-24 bg-magenta mx-auto"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Intent-aware Enquiry Form */}
          <div className="w-full lg:w-7/12" ref={toolRef}>
            <div className="flex flex-wrap gap-3 mb-6">
              {intentTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveIntent(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                    activeIntent === tab.id
                      ? 'bg-magenta border-magenta text-white'
                      : 'bg-transparent border-white/15 text-white/60 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeIntent === 'event' ? (
              <CurateEventTool />
            ) : (
              <ShortEnquiryForm
                key={activeIntent}
                variant={activeIntent}
                initialAct={activeIntent === 'talent' ? talentAct : undefined}
              />
            )}
          </div>

          {/* Right Column: Contact Details & Info */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between" ref={contentRef}>
            <div className="space-y-16">
              <div className="space-y-8 border-l-2 border-magenta pl-8">
                <h3 className="font-lora text-3xl md:text-4xl font-black text-white italic uppercase tracking-tighter leading-none">
                  Ready to bring your vision to life?
                </h3>
                <p className="text-lg text-gray-400 font-medium leading-relaxed">
                  Tell us what you're after: curating an event, booking talent, advisory,
                  or just starting a conversation, and we'll take it from there.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
                <div className="flex flex-col group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-magenta font-black mb-3">Bookings</span>
                  <a href="mailto:bookings@citysoulexperience.com" className="text-lg md:text-xl font-black hover:text-cyan transition-all duration-300 tracking-tighter break-words">bookings@citysoulexperience.com</a>
                </div>

                <div className="flex flex-col group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-cyan font-black mb-3">Events &amp; Advisory</span>
                  <a href="mailto:Events@citysoulexperience.com" className="text-lg md:text-xl font-black hover:text-magenta transition-all duration-300 tracking-tighter break-words">Events@citysoulexperience.com</a>
                </div>

                <div className="flex flex-col group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-magenta font-black mb-3">General &amp; Vibes</span>
                  <a href="mailto:vibes@citysoulexperience.com" className="text-lg md:text-xl font-black hover:text-cyan transition-all duration-300 tracking-tighter break-words">vibes@citysoulexperience.com</a>
                </div>

                <div className="flex flex-col group">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-cyan font-black mb-3">Direct Line</span>
                  <a href="tel:+254714387438" className="text-xl md:text-2xl font-black hover:text-magenta transition-all duration-300 tracking-tighter">+254 714 387 438</a>
                </div>
              </div>

              <div className="pt-4">
                <div className="inline-block mb-6">
                  <h3 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black mb-2">Social Pulse</h3>
                  <div className="h-0.5 w-full bg-deepcyan"></div>
                </div>
                <div className="flex flex-wrap gap-8">
                  {Object.entries(socialLinks).map(([platform, url]) => (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" 
                       className="text-lg font-black hover:text-deepcyan transition-all duration-500 tracking-tighter uppercase italic">
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
            <h3 className="font-lora text-2xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
              Let’s Create Something Memorable
            </h3>
            <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Whether you're planning an event, launching a brand experience, or elevating a venue atmosphere, let’s create something unforgettable together.
            </p>
            <div className="pt-8">
               <div className="h-1 w-20 bg-gradient-to-r from-magenta to-cyan mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
