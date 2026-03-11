import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from './logo.svg';
import Vision from './Sections/vision';
import About from './Sections/about';
import Contact from './Sections/Contact';
import Services from './Sections/Services/services';
import Testimonials from './Sections/Testimonials';
import PillNav from './Sections/Hero/PillNav';
import Hero from './Sections/Hero/Hero';
import Moments from './Sections/Moments';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeHref, setActiveHref] = useState('#home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#vision' },
    { label: 'Experiences', href: '#moments' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'The Soul', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Synchronize Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHref(`#${entry.target.id}`);
        }
      });
    }, {
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0
    });

    const sections = ['home', 'vision', 'moments', 'services', 'testimonials', 'about', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div>
      <PillNav 
        items={navItems} 
        activeHref={activeHref}
        logo={logo}
        initialLoadAnimation={true}
      />
      <Hero />
      <Vision />
      <Moments />
      <Services />
      <Testimonials />
      <About />
      <Contact />
    </div>
  );
}




