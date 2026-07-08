import React from 'react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    key: 'experiences',
    title: 'Experiences',
    description: 'Live music · DJ experiences · event entertainment programming · venue residencies · experiential concepts · event production',
    href: '/services',
    status: 'active',
  },
  {
    key: 'talent',
    title: 'Talent',
    description: 'Artist management & development · bookings (artists, DJs, bands) · music production (Executive Producer)',
    href: '/roster',
    status: 'active',
  },
  {
    key: 'advisory',
    title: 'Advisory',
    description: 'Entertainment strategy · venue programming direction · event consultancy · market-entry advisory',
    href: '/advisory',
    status: 'active',
  },
  {
    key: 'media',
    title: 'Media & Content',
    description: 'Journalism · podcasts · festival interviews · scene coverage',
    href: null,
    status: 'coming-soon',
  },
];

export default function PillarsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {pillars.map((pillar) => {
        const CardInner = (
          <>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan">Pillar</span>
              {pillar.status === 'coming-soon' && (
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black bg-cyan px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
            <h3 className="font-lora text-2xl font-black uppercase italic tracking-tighter mb-4 leading-none">
              {pillar.title}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              {pillar.description}
            </p>
          </>
        );

        return pillar.href ? (
          <Link
            key={pillar.key}
            to={pillar.href}
            className="group block h-full bg-black/20 border border-white/10 hover:border-magenta/60 rounded-2xl p-7 transition-all duration-300"
          >
            {CardInner}
          </Link>
        ) : (
          <div
            key={pillar.key}
            className="h-full bg-black/20 border border-white/5 rounded-2xl p-7 opacity-70"
          >
            {CardInner}
          </div>
        );
      })}
    </div>
  );
}
