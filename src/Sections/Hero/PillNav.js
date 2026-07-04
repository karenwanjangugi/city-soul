import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { goToContact } from '../../utils/contactIntent';

const PillNav = ({
  items = [],
  activeHref,
  className = "",
  pillColor = "#ffffff",
  hoveredPillTextColor = "#000000",
  pillTextColor = "#ffffff",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ opacity: 0 });
  
  const itemsRef = useRef([]);

  useEffect(() => {
    const activeIndex = items.findIndex(item => item.href === activeHref);
    const targetIndex = hoveredIndex !== null ? hoveredIndex : (activeIndex !== -1 ? activeIndex : null);

    if (targetIndex !== null && itemsRef.current[targetIndex]) {
      const target = itemsRef.current[targetIndex];
      setPillStyle({
        left: target.offsetLeft,
        width: target.offsetWidth,
        opacity: 1,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      });
    } else {
      setPillStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex, activeHref, items]);

  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile/Tablet Logo - Top Left */}
      <div className="lg:hidden fixed top-6 left-6 z-[120]">
        <img 
          src="/logo.png" 
          alt="City Soul" 
          className="h-10 w-auto cursor-pointer drop-shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>

      {/* Mobile/Tablet Right Controls - Enquire + Toggle */}
      <div className="lg:hidden fixed top-6 right-6 z-[120] flex items-center gap-3">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            setIsMobileMenuOpen(false);
            goToContact('general');
          }}
          className="px-4 py-2.5 bg-magenta text-white font-black uppercase tracking-widest text-[10px] rounded-full shadow-2xl hover:bg-white hover:text-black transition-all duration-300"
        >
          Enquire
        </a>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-white shadow-2xl transition-transform active:scale-90"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Unified Navigation Bar */}
      <nav
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-[100] hidden lg:flex items-center p-2 rounded-full border border-white/20 backdrop-blur-lg shadow-2xl w-max max-w-[95vw] ${className}`}
        style={{ backgroundColor: `rgba(0, 0, 0, 0.5)` }}
      >
        {/* Desktop Logo Inside Pill */}
        <div className="flex items-center px-4 border-r border-white/10 shrink-0">
          <img 
            src="/logo.png" 
            alt="City Soul" 
            className="h-12 xl:h-14 w-auto cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        {/* Desktop Menu Items */}
        <div className="relative flex items-center p-1 ml-1 shrink-0">
          {/* Animated Pill Highlight */}
          <div 
            className="absolute h-[calc(100%-4px)] rounded-full pointer-events-none z-0"
            style={{ 
              backgroundColor: pillColor,
              ...pillStyle
            }}
          />

          {items.map((item, index) => {
            const isActive = item.href === activeHref;
            const isHovered = hoveredIndex === index;
            
            return (
              <a
                key={item.href}
                href={item.href}
                ref={el => itemsRef.current[index] = el}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="relative px-2 xl:px-3 py-1.5 text-[10px] xl:text-[11px] uppercase tracking-[0.1em] xl:tracking-[0.15em] font-bold transition-colors duration-300 z-10 whitespace-nowrap shrink-0"
                style={{ 
                  color: (isHovered || (isActive && hoveredIndex === null)) 
                    ? hoveredPillTextColor 
                    : pillTextColor 
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Persistent Enquire CTA */}
        <div className="flex items-center pl-1 ml-1 border-l border-white/10 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              goToContact('general');
            }}
            className="px-3 xl:px-4 py-2 bg-magenta text-white font-black uppercase tracking-[0.1em] xl:tracking-[0.15em] text-[10px] xl:text-[11px] rounded-full whitespace-nowrap hover:bg-white hover:text-black transition-all duration-300"
          >
            Enquire
          </a>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[110] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`text-4xl font-black tracking-tighter transition-all hover:scale-110 ${
                item.href === activeHref ? 'text-white underline decoration-2 underline-offset-8' : 'text-gray-500 hover:text-white'
              }`}
            >
              {item.label.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default PillNav;
