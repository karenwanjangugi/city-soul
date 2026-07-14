import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../Sections/Hero/Hero';
import WhyChooseUs from '../Sections/WhyChooseUs';
import Testimonials from '../Sections/Testimonials';
import PillarsGrid from '../Sections/PillarsGrid';
import { goToContact } from '../utils/contactIntent';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />

      <section className="py-24 md:py-32 bg-[#0a051d] text-white font-poppins border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-magenta"></span>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-cyan">What We Do</span>
              </div>
              <h2 className="font-lora text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase italic">
                Four Pillars,<br />One Agency
              </h2>
            </div>
            <p className="text-white/60 max-w-md font-medium leading-relaxed">
              Music is the invisible architecture of an experience. We curate it, we
              develop the talent behind it, and we advise on getting it right.
            </p>
          </div>
          <PillarsGrid />
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />

      <section className="py-24 md:py-32 bg-magenta text-ink font-poppins border-t border-black/5 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-lora text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] uppercase italic mb-8">
            Ready to bring your vision to life?
          </h2>
          <p className="text-lg md:text-xl font-medium text-ink/80 mb-10">
            Tell us what you're after: curating an event, booking talent, advisory,
            or just starting a conversation.
          </p>
          <button
            onClick={() => goToContact(navigate, 'general')}
            className="px-10 py-4 bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300"
          >
            Work with us
          </button>
        </div>
      </section>
    </>
  );
}
