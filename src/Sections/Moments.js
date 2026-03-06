import React, { useState } from 'react';
import { X } from 'lucide-react';

const moments = [
  { 
    src: '/moments/image1.jpg', 
    alt: 'Elijah Kitaka Performing', 
    title: 'Elijah Kitaka Live', 
    description: "It was an honor to curate and produce Elijah Kitaka's first event in Nairobi in 2025, bringing his unique sound to our local stage." 
  },
  { 
    src: '/moments/image2.jpg', 
    alt: 'Za Kale Bongo Flava Party', 
    title: 'Za Kale Celebration', 
    description: 'A curated celebration of classic Bongo Flava music. We enjoyed bringing together fans to honor the rhythms that define our heritage.' 
  },
  { 
    src: '/moments/image3.JPG', 
    alt: 'Authentic Connections', 
    title: 'Authentic Spirit', 
    description: 'Capturing the genuine spirit and community that fuels our local music scene.' 
  },
  { 
    src: '/moments/image4.jpg', 
    alt: 'Social Night Live Hosting', 
    title: 'Social Night Live', 
    description: 'Sharing hosting duties at our biweekly show at The Social House Nairobi in 2023. These nights were all about building community through music.' 
  },
  { 
    src: '/moments/image5.jpg', 
    alt: 'Njerae Performing', 
    title: 'Njerae Live', 
    description: 'Njerae sharing her talent at Social Night Live. A memorable highlight from our time at The Social House.' 
  },
  { 
    src: '/moments/image6.jpg', 
    alt: 'Cultural Moments', 
    title: 'City Rhythms', 
    description: "Celebrating the diverse creative energy that makes Nairobi's music culture so vibrant." 
  },
  { 
    src: '/moments/image7.jpg', 
    alt: 'Elijah Kitaka Poster', 
    title: 'A Musical Milestone', 
    description: "The official poster for Elijah Kitaka's Nairobi performance—a visual memory of a special milestone in our journey." 
  },
];

export default function Moments() {
  const [selectedMoment, setSelectedMoment] = useState(null);

  const openModal = (moment) => {
    setSelectedMoment(moment);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMoment(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="moments" className="py-24 bg-black text-[#C91D73] font-['Montserrat'] overflow-hidden relative border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-5xl md:text-7xl text-[#C91D73] font-black tracking-tighter leading-none">MOMENTS</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#C91D73] to-transparent opacity-30"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl font-medium border-l-2 border-[#80E3FF] pl-6">
            A glimpse into the energy, the culture, and the soul of the experiences curated across the city.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {moments.map((moment, index) => (
            <div 
              key={index} 
              onClick={() => openModal(moment)}
              className="relative group overflow-hidden rounded-2xl bg-[#111] break-inside-avoid border border-white/10 cursor-pointer transition-all duration-500 hover:border-[#C91D73]/40 shadow-xl"
            >
              <img
                src={moment.src}
                alt={moment.alt}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              {/* Refined Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block text-xs font-bold tracking-[0.2em] text-[#80E3FF] mb-2 uppercase">Experience</span>
                  <span className="text-white font-black tracking-tight text-xl uppercase leading-none">{moment.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedMoment && (
        <div 
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-[#C91D73]/20 shadow-[0_0_50px_rgba(201,29,115,0.1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 p-3 bg-black/50 hover:bg-[#C91D73] text-white rounded-full transition-all duration-300 border border-white/10 hover:border-transparent group"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            <div className="flex flex-col md:flex-row min-h-[60vh]">
              <div className="md:w-3/5 bg-black flex items-center justify-center p-2">
                <img
                  src={selectedMoment.src}
                  alt={selectedMoment.alt}
                  className="w-full h-full object-contain max-h-[60vh] md:max-h-[85vh] rounded-2xl"
                />
              </div>
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-[#0d0d0d]">
                <div className="inline-block px-3 py-1 bg-[#80E3FF]/10 rounded-full border border-[#80E3FF]/20 mb-6 w-fit">
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#80E3FF] uppercase">Feel The Moment</span>
                </div>
                <h3 className="text-4xl md:text-5xl text-white font-black mb-6 leading-[0.9] uppercase italic tracking-tighter">
                  {selectedMoment.title}
                </h3>
                <p className="text-lg text-gray-400 font-medium leading-relaxed">
                  {selectedMoment.description}
                </p>
                <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                  <p className="text-[10px] text-[#C91D73] uppercase tracking-[0.3em] font-black">
                    City Soul
                  </p>
                  <div className="h-1 w-12 bg-gradient-to-r from-[#C91D73] to-[#80E3FF] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
