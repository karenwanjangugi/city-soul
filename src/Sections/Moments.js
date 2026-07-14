import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const moments = [
  {
    src: '/moments/image1.jpg',
    alt: 'Elijah Kitaka Performing',
    title: 'Elijah Kitaka: Live in NBO',
    venue: 'Replay NBO',
    year: '2025',
    description: "It was an honour to curate and produce Elijah Kitaka's first event in Nairobi, bringing his unique sound to our local stage as a full live production with the Double Black Band."
  },
  {
    src: '/moments/image4.jpg',
    alt: 'Social Night Live Hosting',
    title: 'Social Night Live · Residency',
    venue: 'The Social House Nairobi',
    year: '2023',
    description: 'Sharing hosting duties at our biweekly residency, nights built around community through music.'
  },
  {
    src: '/moments/image2.jpg',
    alt: 'Za Kale Bongo Flava Party',
    title: 'Za Kale Celebration',
    venue: 'Nairobi',
    year: null,
    description: 'A curated celebration of classic Bongo Flava by DJ N!K and DJ Kimmie, bringing fans together to honour the rhythms of our heritage.'
  },
  {
    src: '/moments/image3.JPG',
    alt: 'Sofar Sounds Kigali',
    title: 'Sofar Sounds · Kigali',
    venue: 'Kigali, Rwanda',
    year: null,
    description: "Road-managing logistics from Nairobi to Kigali for Muthaka's Sofar Sounds performance."
  },
  {
    src: '/services/people-having-fun-wedding-hall.jpg',
    alt: 'The Novotel Westlands event',
    title: 'The Novotel Westlands',
    venue: 'Novotel Westlands, Nairobi',
    year: null,
    description: "Curated and provided live entertainment for their themed Valentine's Day dinner and Mother's Day luncheon.",
    placeholderImage: true,
  },
];

export default function Moments() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === 'ArrowRight') {
        nextMoment();
      } else if (e.key === 'ArrowLeft') {
        prevMoment();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const openModal = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextMoment = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex + 1) % moments.length);
  };

  const prevMoment = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prevIndex) => (prevIndex - 1 + moments.length) % moments.length);
  };

  const currentMoment = selectedIndex !== null ? moments[selectedIndex] : null;

  return (
    <section id="moments" className="py-24 bg-black text-magenta font-poppins overflow-hidden relative border-t border-white/5">

      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-lora text-4xl md:text-6xl text-magenta font-black tracking-tighter leading-none uppercase italic">Experiences We've Curated</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-magenta to-transparent opacity-30"></div>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl font-medium border-l-2 border-cyan pl-6">
            Clients trust evidence of previous experiences. Here's a glimpse into the soulful live music events in Nairobi, experiential concerts, and vibrant venue programming we've brought to life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((moment, index) => {
            // With 5 cards the last row falls short of a full grid, span the
            // trailing cards so the final row fills completely at every breakpoint
            // instead of leaving a gap.
            const isSecondToLast = index === moments.length - 2;
            const isLast = index === moments.length - 1;
            const spanClass = isSecondToLast
              ? 'lg:col-span-2'
              : isLast
              ? 'md:col-span-2 lg:col-span-1'
              : '';

            return (
              <div
                key={index}
                onClick={() => openModal(index)}
                className={`relative group overflow-hidden rounded-2xl bg-[#111] border border-white/10 cursor-pointer transition-all duration-500 hover:border-magenta/40 shadow-xl aspect-[4/5] ${spanClass}`}
              >
                <img
                  src={moment.src}
                  alt={moment.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Persistent Metadata Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/85 to-transparent">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="block text-[10px] font-black tracking-[0.3em] text-cyan mb-1 uppercase">
                      {moment.venue}{moment.year ? ` · ${moment.year}` : ''}
                    </span>
                    <span className="font-lora text-white font-black tracking-tight text-lg uppercase leading-none italic block mb-2">
                      {moment.title}
                    </span>
                    <span className="text-xs text-gray-300 font-medium leading-snug line-clamp-2">
                      {moment.description}
                    </span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-magenta/20 rounded-2xl transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popup Modal */}
      {currentMoment && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={closeModal}
        >
          {/* Previous Button */}
          <button
            onClick={prevMoment}
            className="absolute left-4 md:left-8 z-30 p-4 bg-black/50 hover:bg-magenta text-white rounded-full transition-all duration-300 border border-white/10 hover:border-transparent group"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextMoment}
            className="absolute right-4 md:right-8 z-30 p-4 bg-black/50 hover:bg-magenta text-white rounded-full transition-all duration-300 border border-white/10 hover:border-transparent group"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div
            className="relative max-w-5xl w-full bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-magenta/20 shadow-[0_0_50px_rgba(200,29,115,0.1)] max-h-[90vh] overflow-y-auto md:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-3 bg-black/50 hover:bg-magenta text-white rounded-full transition-all duration-300 border border-white/10 hover:border-transparent group"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-3/5 bg-black flex items-center justify-center p-2 min-h-[300px] md:min-h-0">
                <img
                  key={currentMoment.src}
                  src={currentMoment.src}
                  alt={currentMoment.alt}
                  className="w-full h-full object-contain max-h-[50vh] md:max-h-[85vh] rounded-2xl transition-opacity duration-500"
                />
              </div>
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-[#0d0d0d]">
                <div className="inline-block px-3 py-1 bg-cyan/10 rounded-full border border-cyan/20 mb-6 w-fit">
                  <span className="text-[10px] font-black tracking-[0.2em] text-cyan uppercase">
                    {currentMoment.venue}{currentMoment.year ? ` · ${currentMoment.year}` : ''}
                  </span>
                </div>
                <h3 className="font-lora text-4xl md:text-5xl text-white font-black mb-6 leading-[0.9] uppercase italic tracking-tighter">
                  {currentMoment.title}
                </h3>
                <p className="text-lg text-gray-400 font-medium leading-relaxed">
                  {currentMoment.description}
                </p>
                {currentMoment.placeholderImage && (
                  <p className="mt-4 text-xs text-gray-500 italic">
                    Placeholder photo, swap for real Novotel Westlands event photography.
                  </p>
                )}
                <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                  <p className="text-[10px] text-magenta uppercase tracking-[0.3em] font-black">
                    City Soul
                  </p>
                  <div className="h-1 w-12 bg-gradient-to-r from-magenta to-cyan rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
