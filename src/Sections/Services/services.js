import React from 'react';
import SpotlightCard from './SpotlightCard';

const servicesList = [
  {
    title: "Curation & Experiences",
    description: "Curating high-impact events and cultural experiences that leave lasting impressions and spark conversation.",
    icon: "✨",
    color: "#C91D73"
  },
  {
    title: "Creative Direction",
    description: "Translating abstract visions into tangible, brand-aligned aesthetics that resonate across all platforms.",
    icon: "🎨",
    color: "#80E3FF"
  },
  {
    title: "Live Production",
    description: "End-to-end technical and creative production, from stage design to lighting, ensuring seamless execution.",
    icon: "🎥",
    color: "#C91D73"
  },
  {
    title: "Artist Management",
    description: "Developing and elevating local talent through strategic career planning, studio coordination, and performance opportunities.",
    icon: "🎤",
    color: "#80E3FF"
  },
  {
    title: "Brand Strategy",
    description: "Architecting brand stories that cut through the noise, driving both cultural relevance and long-term growth.",
    icon: "📈",
    color: "#C91D73"
  },
  {
    title: "Cultural Insight",
    description: "Leveraging our deep connections with the city's pulse to provide actionable data and street-level intelligence.",
    icon: "🌆",
    color: "#80E3FF"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#2A098C] text-white font-['Montserrat'] relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-1 w-8 bg-[#C91D73]"></span>
              <span className="text-xs font-black uppercase tracking-widest text-[#80E3FF]">Services</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase italic">
              OUR<br/>SERVICES
            </h2>
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-md font-medium border-l-2 border-white/20 pl-6">
            We provide a comprehensive range of services to help you create moments that matter and souls that shine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <SpotlightCard key={index} className="flex flex-col h-full group bg-black/20 border-white/5 hover:border-white/20 transition-all duration-500">
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
              <p className="text-gray-400 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="mt-8 pt-6 border-t border-white/5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: service.color }}>
                  Expertise 0{index + 1}
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 p-4 md:p-12 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[10rem] md:text-[20rem] font-black leading-none tracking-tighter">SOUL</h2>
      </div>
    </section>
  );
}
