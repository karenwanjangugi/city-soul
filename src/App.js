import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PillNav from './Sections/Hero/PillNav';
import Footer from './Sections/Footer';
import Home from './Pages/Home';
import AboutPage from './Pages/About';
import Services from './Sections/Services/services';
import Advisory from './Sections/Advisory';
import Talent from './Sections/Talent';
import Moments from './Sections/Moments';
import Contact from './Sections/Contact';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Talent', href: '/talent' },
  { label: 'Experiences', href: '/moments' },
  { label: 'Advisory', href: '/advisory' },
];

function AppShell() {
  const location = useLocation();
  const lenisRef = useRef(null);

  // Lenis + GSAP ScrollTrigger, set up once for the life of the app.
  useEffect(() => {
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
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);

  // On every route change: jump to top and let ScrollTrigger re-measure the
  // new page's sections once they've mounted.
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [location.pathname]);

  return (
    <div>
      <PillNav items={navItems} activeHref={location.pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/moments" element={<Moments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
