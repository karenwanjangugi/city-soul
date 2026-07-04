import React from 'react';
import { ArrowRight } from 'lucide-react';
import { goToContact } from '../utils/contactIntent';

const coverage = [
  'Entertainment strategy',
  'Venue programming direction',
  'Event consultancy',
  'Market-entry advisory',
];

const whoFor = [
  'Hotels, restaurants and lifestyle venues shaping a musical identity',
  'Brands entering entertainment or experiential marketing for the first time',
  'International labels and acts entering the East African market',
  'Organisations building an internal entertainment or events strategy',
];

export default function Advisory() {
  return (
    <section id="advisory" className="py-24 md:py-32 bg-indigo text-white font-poppins relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-2/5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-magenta"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-cyan">Advisory</span>
            </div>
            <h2 className="font-lora text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase italic mb-6">
              Entertainment Advisory
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              We advise brands, venues and organisations on how to do entertainment
              well — from strategy through to execution.
            </p>
            <div className="mt-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan block mb-2">Engagement</span>
              <p className="text-white font-bold">Day rate or retainer — enquire for details.</p>
            </div>
            <button
              onClick={() => goToContact('advisory')}
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-magenta text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300"
            >
              Enquire about Advisory
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan mb-5 block">What it covers</span>
              <ul className="space-y-4">
                {coverage.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0"></span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan mb-5 block">Who it's for</span>
              <ul className="space-y-4">
                {whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0"></span>
                    <span className="leading-snug text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
