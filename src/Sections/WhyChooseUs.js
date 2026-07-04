import React from 'react';

const reasons = [
  {
    title: 'We curate, not just supply',
    description: 'End-to-end experience design — we shape how the moment feels, not only who plays.',
  },
  {
    title: 'One partner, every need',
    description: 'Concept, talent, production and content under a single roof.',
  },
  {
    title: 'Soul meets standards',
    description: 'Distinctive taste paired with professional, reliable delivery.',
  },
  {
    title: 'Local roots, global benchmark',
    description: 'Nairobi scene fluency, built on world-class practice.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="whychooseus" className="py-24 md:py-32 bg-offwhite text-ink font-poppins relative overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 flex items-center gap-4">
          <span className="h-[2px] w-12 bg-magenta"></span>
          <span className="text-xs font-black uppercase tracking-[0.4em] text-deepcyan">Why Choose Us</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="relative bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <span className="text-[10px] font-black tracking-widest text-magenta">0{index + 1}</span>
              <h3 className="font-lora text-xl md:text-2xl font-black italic tracking-tight mt-4 mb-4 leading-tight">
                {reason.title}
              </h3>
              <p className="text-sm md:text-base text-ink/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
