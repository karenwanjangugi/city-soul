import React from 'react';

export default function Contact() {
  // --- UPDATE YOUR SOCIAL LINKS HERE ---
  const socialLinks = {
    INSTAGRAM: "https://www.instagram.com/hunja_wangui/",
    // FACEBOOK: "https://facebook.com/citysoulculture",
    LINKEDIN: "https://www.linkedin.com/in/kelvinhunja",
    // TWITTER: "https://twitter.com/citysoulculture"
  };

  return (
    <section id="contact" className="bg-black text-white font-['Montserrat'] relative overflow-hidden min-h-screen">
      
      {/* City Silhouette Background at the TOP */}
      <div className="w-full bg-white overflow-hidden pointer-events-none z-0">
        <img
          src="/Nai.svg"
          alt="City Silhouette"
          className="w-full h-auto object-bottom block scale-110 md:scale-100 origin-bottom"
          style={{ filter: 'brightness(0)' }}
        />
      </div>

      {/* Splatter Backgrounds */}
      <img
        src="/Splatter-01.svg"
        alt=""
        className="absolute top-[20%] right-[-10%] md:right-[2%] w-[300px] md:w-[450px] h-auto opacity-10 pointer-events-none z-0"
        style={{ transform: 'rotate(15deg)', filter: 'invert(1)' }}
      />
      
      <img
        src="/Splatter-18.svg"
        alt=""
        className="absolute bottom-[5%] -left-[10%] md:left-[-5%] w-[250px] md:w-[400px] h-auto opacity-10 pointer-events-none z-0"
        style={{ transform: 'rotate(-10deg)', filter: 'invert(1)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-12 md:pt-24 pb-24 md:pb-48">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-20">
          
          {/* Left Column: Contact Heading & Info */}
          <div className="flex-1 text-left">
            <h2 className="text-6xl md:text-8xl font-black mb-8 md:mb-12 tracking-tighter leading-none text-white">LET'S<br/>TALK</h2>
            <div className="space-y-8 md:space-y-12 text-lg md:text-xl leading-relaxed text-gray-300 font-medium max-w-xl">
              <p className="text-xl md:text-2xl">
                Ready to bring your vision to life? Get in touch and let's create something extraordinary together.
              </p>
              
              <div className="mt-12 md:mt-20 space-y-8 md:space-y-12">
                <div className="flex flex-col group">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-2 md:mb-4">Email Us</span>
                  <a href="mailto:hello@citysoul.com" className="text-2xl md:text-4xl font-black hover:text-gray-400 transition-colors tracking-tight break-words">hunjawangui@gmail.com</a>
                </div>
                
                <div className="flex flex-col group pt-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-2 md:mb-4">Call Us</span>
                  <a href="tel:+254714387438" className="text-2xl md:text-4xl font-black hover:text-gray-400 transition-colors tracking-tight">+254 714 387 438</a>
                </div>

                <div className="flex flex-col pt-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-2 md:mb-4">Visit Us</span>
                  <p className="text-xl md:text-3xl font-bold tracking-tight">JOYLINE, LUMUMBA DRIVE, NAIROBI KASARANI DISTRICT, ROYSAMBU. P.O BOX 100946, 00100 - G.P.O NAIROBI,</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Social Links */}
          <div className="flex-1 flex flex-col justify-start lg:items-end w-full">
            <div className="w-full max-w-sm lg:text-right mt-12 lg:mt-0">
              <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-8 md:mb-12">Follow the Soul</h3>
              <ul className="space-y-6 md:space-y-10">
                {Object.entries(socialLinks).map(([platform, url]) => (
                  <li key={platform}>
                    <a href={url} target="_blank" rel="noopener noreferrer" 
                       className="text-4xl md:text-6xl font-black hover:text-gray-400 transition-all hover:pl-4 lg:hover:pr-4 lg:hover:pl-0 tracking-tighter inline-block">
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
