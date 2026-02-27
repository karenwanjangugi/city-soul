import React from 'react';

const moments = [
  { src: '/moments/image1.jpg', alt: 'Moment 1', title: 'Urban Pulse' },
  { src: '/moments/image2.jpg', alt: 'Moment 2', title: 'Midnight Echo' },
  { src: '/moments/image3.JPG', alt: 'Moment 3', title: 'Sound of the City' },
  { src: '/moments/image4.jpg', alt: 'Moment 4', title: 'Vibrant Rhythms' },
  { src: '/moments/image5.jpg', alt: 'Moment 5', title: 'Cultural Soul' },
  { src: '/moments/image6.jpg', alt: 'Moment 6', title: 'Neon Dreams' },
];

export default function Moments() {
  return (
    <section id="moments" className="py-24 bg-black text-white font-['Montserrat'] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">MOMENTS</h2>
          <p className="text-xl text-gray-400 max-w-2xl font-medium">
            A glimpse into the energy, the culture, and the soul of the experiences curated across the city.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {moments.map((moment, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl bg-white/5 break-inside-avoid border border-white/10"
            >
              <img
                src={moment.src}
                alt={moment.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-black tracking-tight text-1xl uppercase leading-none">{moment.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
