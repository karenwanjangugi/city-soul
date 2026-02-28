import React from 'react';
import SpotlightCard from './SpotlightCard';

const servicesList = [
  {
    title: "Curation & Experiences",
    description: "Curating high-impact events and cultural experiences that leave lasting impressions and spark conversation.",
    icon: "✨"
  },
  {
    title: "Creative Direction",
    description: "Translating abstract visions into tangible, brand-aligned aesthetics that resonate across all platforms.",
    icon: "🎨"
  },
  {
    title: "Live Production",
    description: "End-to-end technical and creative production, from stage design to lighting, ensuring seamless execution.",
    icon: "🎥"
  },
  {
    title: "Artist Management",
    description: "Developing and elevating local talent through strategic career planning, studio coordination, and performance opportunities.",
    icon: "🎤"
  },
  {
    title: "Brand Strategy",
    description: "Architecting brand stories that cut through the noise, driving both cultural relevance and long-term growth.",
    icon: "📈"
  },
  {
    title: "Cultural Insight",
    description: "Leveraging our deep connections with the city's pulse to provide actionable data and street-level intelligence.",
    icon: "🌆"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0d0d0d] text-white font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Our Services</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            We provide a comprehensive range of services to help you create moments that matter and souls that shine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <SpotlightCard key={index} className="flex flex-col h-full">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
