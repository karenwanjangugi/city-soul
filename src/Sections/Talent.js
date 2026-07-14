import React, { useState } from 'react';
import { Mic2, Disc3, Users, TrendingUp, CalendarCheck, Music4 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { goToContact } from '../utils/contactIntent';

const offerings = [
  {
    title: 'Artist Management & Development',
    description: 'Long-term management for the artists, DJs and bands we represent, building their sound, brand and career trajectory.',
    icon: TrendingUp,
  },
  {
    title: 'Bookings',
    description: 'Artists, DJs and bands booked for your event, venue or brand, matched to the mood, audience and scale of what you’re building.',
    icon: CalendarCheck,
  },
  {
    title: 'Music Production',
    description: 'Executive production support for artists and tracks, from concept through to release.',
    icon: Music4,
  },
];

// Placeholder talent, swap these entries for real acts (name, genre, photo) when
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

const bookingFor = [
  'Corporates seeking refined entertainment for events and activations',
  'Hotels, restaurants, lounges and lifestyle venues booking for a night or a residency',
  'Brands and organisations planning activations or launches',
  'Private clients celebrating something worth remembering',
];

const joiningFor = [
  'Artists, DJs and bands looking for management and development',
  'Acts who want bookings handled: riders, logistics, negotiation',
  'Musicians ready to grow beyond one-off gigs into a real career',
];

const howItWorks = [
  {
    step: '01',
    title: 'Share the brief',
    description: 'Tell us the event, the vibe and the date.',
  },
  {
    step: '02',
    title: 'We match the act',
    description: 'From our talent, based on genre, energy and audience.',
  },
  {
    step: '03',
    title: 'We handle logistics',
    description: 'Scheduling, riders and on-site coordination, sorted.',
  },
  {
    step: '04',
    title: 'Show time',
    description: 'Your stage, soundtracked right.',
  },
];

const filters = ['All', 'Live Artist', 'DJ', 'Band'];

export default function Talent() {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const visibleActs = activeFilter === 'All'
    ? acts
    : acts.filter((act) => act.type === activeFilter);

  const handleBook = (act) => {
    goToContact(navigate, 'talent', { name: act.name, type: act.type });
  };

  return (
    <section id="talent" className="pt-32 md:pt-40 pb-24 md:pb-32 bg-black text-white font-poppins relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-magenta"></span>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-cyan">Talent</span>
            </div>
            <h2 className="font-lora text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase italic">
              Talent
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-white/60 font-medium leading-relaxed">
              Artists, DJs and bands we manage, develop and book. Filter by type and
              enquire directly to bring one to your stage.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {offerings.map((offer) => {
            const Icon = offer.icon;
            return (
              <div key={offer.title} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <Icon size={28} className="text-cyan mb-5" />
                <h3 className="font-lora text-lg font-black italic tracking-tight mb-3 leading-tight">
                  {offer.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {offer.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Who It's For */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-10 pt-16 border-t border-white/10">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan mb-5 block">If you're booking talent</span>
            <ul className="space-y-4">
              {bookingFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0"></span>
                  <span className="leading-snug text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan mb-5 block">If you're an artist</span>
            <ul className="space-y-4 mb-6">
              {joiningFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0"></span>
                  <span className="leading-snug text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => goToContact(navigate, 'talent')}
              className="px-6 py-3 bg-transparent border border-white/20 hover:bg-magenta hover:border-magenta text-white font-black uppercase tracking-widest text-[10px] rounded-full transition-all duration-300"
            >
              Introduce Yourself
            </button>
          </div>
        </div>

        {/* How Booking Works */}
        <div className="mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan mb-8 block">How Booking Works</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step}>
                <span className="text-[10px] font-black tracking-widest text-magenta">{item.step}</span>
                <h3 className="font-lora text-lg font-black italic tracking-tight mt-3 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
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
                    Talent
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
          {/* Talent entries above are placeholders pending real artist data, photos,
          names and genres will be swapped in. */}
        </p>
      </div>
    </section>
  );
}
