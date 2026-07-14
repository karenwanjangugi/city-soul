import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text fade in
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Image fade in + subtle scale
      gsap.from(imageWrapperRef.current, {
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: 'top 80%',
        },
        x: 50,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: 'power3.out'
      });

      // Parallax effect on the offset colored boxes
      const offsets = imageWrapperRef.current.querySelectorAll('.absolute');
      gsap.to(offsets, {
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: (i) => (i + 1) * 20,
        ease: 'none'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const whoWeWorkWith = [
    'Corporates seeking refined entertainment for events and activations.',
    'Hotels, restaurants, lounges and lifestyle venues building a musical identity through residencies and programming.',
    'Artists, DJs and bands looking for management, development and bookings.',
    'Brands and organisations wanting expert guidance on entertainment, music and events.',
    'International labels and acts entering the East African market.',
  ];

  return (
    <section id="about" ref={sectionRef} className="pt-12 pb-24 md:pt-16 md:pb-32 bg-cyan text-black font-poppins relative overflow-hidden min-h-screen flex items-center border-t border-black/5">

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-8 md:pt-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          <div className="flex-1 text-left" ref={textRef}>
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <h2 className="font-lora text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase italic">THE SOUL</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-black/40 to-transparent"></div>
            </div>

            <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-gray-900 font-medium max-w-xl border-l-2 border-magenta pl-6 md:pl-8">
              <p>
                Hunja Wangui is a Nairobi-based experiential entertainment creative with
                five years building City Soul Experience from the ground up.
              </p>
              {/* TODO: placeholder "why" sentence, confirm exact wording with Hunja before publishing */}
              <p>
                What drives the work is simple: the belief that a well-chosen soundtrack
                can turn a room of strangers into a shared memory.
              </p>
              <p>
                Their work spans event curation, artist development, live production and
                advisory, always in pursuit of the feeling a room can hold when the
                music is right.
              </p>
              <div className="pt-4 flex items-center gap-2">
                <span className="h-1 w-10 bg-magenta rounded-full"></span>
                <span className="text-xs font-black uppercase tracking-widest text-magenta">The Soul Behind the City</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end w-full" ref={imageWrapperRef}>
            <div className="relative w-full max-w-[300px] md:max-w-[450px] aspect-[4/5] group">
              {/* Colored Offsets */}
              <div
                className="absolute top-4 left-4 md:top-8 md:left-8 w-full h-full bg-magenta z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
                aria-hidden="true"
              ></div>
              <div
                className="absolute top-8 left-8 md:top-14 md:left-14 w-full h-full bg-black/10 z-0"
                aria-hidden="true"
              ></div>

              <div className="relative z-10 w-full h-full bg-gray-200 shadow-2xl overflow-hidden border-2 border-black/5">
                <img
                  src="/photo.png"
                  alt="Hunja Wangui - City Soul Founder"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Who We Work With */}
        <div className="mt-20 md:mt-24 pt-12 border-t border-black/10">
          <span className="text-xs font-black uppercase tracking-[0.4em] text-deepcyan block mb-8">Who We Work With</span>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl">
            {whoWeWorkWith.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-900">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0"></span>
                <span className="leading-snug font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
