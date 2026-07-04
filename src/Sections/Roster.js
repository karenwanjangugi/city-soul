import React, { useState } from 'react';
import { Mic2, Disc3, Users } from 'lucide-react';
import { goToContact } from '../utils/contactIntent';

// Placeholder roster — swap these entries for real acts (name, genre, photo) when
// available. Kept as a plain array so this is a one-file update later.
const acts = [
  {
    name: 'Artist Name',
    type: 'Live Artist',
    genre: 'Afro Soul · Live Band',
    icon: Mic2,
  },
  {
    name: 'DJ Name',
    type: 'DJ',
    genre: 'Afrobeat · Amapiano',
    icon: Disc3,
  },
  {
    name: 'Band Name',
    type: 'Band',
    genre: 'Live Fusion',
    icon: Users,
  },
];

const filters = ['All', 'Live Artist', 'DJ', 'Band'];

export default function Roster() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleActs = activeFilter === 'All'
    ? acts
    : acts.filter((act) => act.type === activeFilter);

  const handleBook = (act) => {
    goToContact('roster', { name: act.name, type: act.type });
  };

  return (
    <section id="roster" className="py-24 md:py-32 bg-black text-white font-poppins relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-magenta"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-cyan">Talent</span>
            </div>
            <h2 className="font-lora text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic">
              Roster
            </h2>
          </div>
          <p className="text-white/60 max-w-md font-medium leading-relaxed">
            Artists, DJs and bands we manage, develop and book. Filter by type and
            enquire directly to bring one to your stage.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-magenta border-magenta text-white'
                  : 'bg-transparent border-white/15 text-white/60 hover:border-white/40 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleActs.map((act) => {
            const Icon = act.icon;
            return (
              <div
                key={act.name}
                className="group bg-white/5 border border-white/10 hover:border-magenta/50 rounded-2xl overflow-hidden transition-all duration-500"
              >
                <div className="aspect-square bg-gradient-to-br from-indigo to-black flex items-center justify-center relative">
                  <Icon size={56} className="text-cyan/70 group-hover:text-cyan transition-colors" />
                  <span className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest text-black bg-cyan px-3 py-1 rounded-full">
                    Placeholder
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan">{act.type}</span>
                  <h3 className="font-lora text-2xl font-black italic tracking-tight mt-2 mb-1">{act.name}</h3>
                  <p className="text-sm text-white/50 mb-6">{act.genre}</p>
                  <button
                    onClick={() => handleBook(act)}
                    className="w-full py-3 bg-transparent border border-white/20 hover:bg-magenta hover:border-magenta text-white font-black uppercase tracking-widest text-[10px] rounded-full transition-all duration-300"
                  >
                    Book {act.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-white/30 italic">
          Roster entries above are placeholders pending real artist data — photos,
          names and genres will be swapped in.
        </p>
      </div>
    </section>
  );
}
