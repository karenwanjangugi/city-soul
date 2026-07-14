import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { goToContact } from '../utils/contactIntent';

const coverage = [
  {
    title: 'Entertainment strategy',
    description: 'Defining how entertainment fits your brand or venue, and building the plan to deliver it.',
  },
  {
    title: 'Venue programming direction',
    description: 'Curating the music and entertainment calendar that gives your space a consistent identity.',
  },
  {
    title: 'Event consultancy',
    description: 'Expert input on entertainment choices for a specific event, from concept to lineup.',
  },
  {
    title: 'Market-entry advisory',
    description: 'Guidance for labels, acts and brands entering the East African entertainment market.',
  },
];

const whoFor = [
  {
    title: 'Hotels, restaurants and lifestyle venues',
    description: 'Shaping a musical identity through residencies and programming.',
  },
  {
    title: 'Brands new to entertainment',
    description: 'Entering experiential marketing for the first time and want it done right.',
  },
  {
    title: 'International labels and acts',
    description: 'Entering the East African market and needing local scene fluency.',
  },
  {
    title: 'Organisations building strategy',
    description: 'Developing an internal entertainment or events strategy from the ground up.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Discovery conversation',
    description: 'We learn your goals, your space and your audience.',
  },
  {
    step: '02',
    title: 'Proposal & scope',
    description: 'A clear plan, deliverables and next steps.',
  },
  {
    step: '03',
    title: 'Ongoing support',
    description: 'Strategy that evolves as your entertainment programme grows.',
  },
];

export default function Advisory() {
  const navigate = useNavigate();
  return (
    <section id="advisory" className="pt-32 md:pt-40 pb-24 md:pb-32 bg-indigo text-white font-poppins relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-2/5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-magenta"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-cyan">Advisory</span>
            </div>
            <h2 className="font-lora text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase italic mb-6">
              Creative Advisory
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              We advise brands, venues and organisations on how to do entertainment
              well, from strategy through to execution.
            </p>
            <button
              onClick={() => goToContact(navigate, 'advisory')}
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-magenta text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300"
            >
              Enquire about Advisory
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan mb-5 block">What it covers</span>
              <ul className="space-y-5">
                {coverage.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0"></span>
                    <span>
                      <span className="block text-white font-bold leading-snug">{item.title}</span>
                      <span className="block text-sm text-white/60 leading-snug mt-1">{item.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan mb-5 block">Who it's for</span>
              <ul className="space-y-5">
                {whoFor.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0"></span>
                    <span>
                      <span className="block text-white font-bold leading-snug text-sm">{item.title}</span>
                      <span className="block text-sm text-white/60 leading-snug mt-1">{item.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan mb-8 block">How It Works</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step}>
                <span className="text-[10px] font-black tracking-widest text-magenta">{item.step}</span>
                <h3 className="font-lora text-lg font-black italic tracking-tight mt-3 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
