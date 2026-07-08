import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { goToContact } from '../utils/contactIntent';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Advisory', href: '/advisory' },
  { label: 'Roster', href: '/roster' },
  { label: 'Experiences', href: '/moments' },
  { label: 'Contact', href: '/contact' },
];

const emails = [
  { label: 'Bookings', address: 'bookings@citysoulexperience.com' },
  { label: 'Events & Advisory', address: 'Events@citysoulexperience.com' },
  { label: 'General & Vibes', address: 'vibes@citysoulexperience.com' },
];

const socialLinks = {
  INSTAGRAM: 'https://www.instagram.com/hunja_wangui/',
  LINKEDIN: 'https://www.linkedin.com/company/city-soul-experience/',
};

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white font-poppins border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-14 lg:gap-10 pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3 className="font-lora text-2xl font-black uppercase italic tracking-tighter mb-4">
              City Soul Experience
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              The soundtrack is never accidental. An experiential entertainment agency
              based in Nairobi, Kenya.
            </p>
            <button
              onClick={() => goToContact(navigate, 'general')}
              className="inline-flex items-center px-6 py-3 bg-magenta text-white font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all duration-300"
            >
              Work with us
            </button>
          </div>

          {/* Nav */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan block mb-6">Explore</span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm font-bold text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan block mb-6">Get In Touch</span>
            <ul className="space-y-4 mb-8">
              {emails.map((email) => (
                <li key={email.address}>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-magenta font-black mb-1">{email.label}</span>
                  <a href={`mailto:${email.address}`} className="text-sm font-bold text-white/70 hover:text-cyan transition-colors break-all">
                    {email.address}
                  </a>
                </li>
              ))}
            </ul>
            <a href="tel:+254714387438" className="block text-sm font-bold text-white/70 hover:text-cyan transition-colors mb-4">
              +254 714 387 438
            </a>
            <div className="flex gap-6">
              {Object.entries(socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black uppercase tracking-widest text-white/50 hover:text-deepcyan transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 opacity-60">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase">City Soul © {new Date().getFullYear()}</span>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-magenta">Nairobi • Kenya</span>
        </div>
      </div>
    </footer>
  );
}
