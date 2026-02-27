export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-black text-white flex items-center justify-center font-['Montserrat'] relative overflow-hidden">
      {/* Background elements can go here */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-8xl font-black mb-12 md:mb-20 tracking-tighter leading-none text-center uppercase">THE WORD<br />ON THE STREET</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-left">
          <div className="border-l-4 border-white pl-6 md:pl-8 py-2 md:py-4">
            <p className="text-xl md:text-2xl italic font-light leading-relaxed mb-6">
              “Working with City Soul Experience was one of the best decisions we made for our Valentines dinner. From the curation of the live band to the seamless sound production and overall flow of the evening, everything felt intentional and premium.
              What stood out most was their ability to understand our audience and create an atmosphere that was both vibrant and sophisticated. The team handled every detail with professionalism, creativity, and calm confidence.
              Our guests are still talking about the experience months later. City Soul doesn’t just provide entertainment they create moments.”
            </p>
            <cite className="text-lg md:text-xl font-bold not-italic block uppercase">— MARKETING MANAGER, NOVOTEL NAIROBI</cite>
          </div>

          <div className="border-l-4 border-white pl-6 md:pl-8 py-2 md:py-4">
            <p className="text-xl md:text-2xl italic font-light leading-relaxed mb-6">
              “City Soul Experience transformed my birthday celebration into something I will remember for the rest of my life. They didn’t just bring performers, they brought energy, emotion, and magic into the space.
              from the DJ set to the live performances, every transition felt smooth and thoughtfully curated. The team was organized, responsive, and genuinely invested in making sure I felt special.
              If you want your event to feel alive, elevated, and unforgettable, City Soul Experience is the team to call.”
            </p>
            <cite className="text-lg md:text-xl font-bold not-italic block uppercase">— PRIVATE CLIENT, NAIROBI</cite>
          </div>
        </div>
      </div>
    </section>
  );
}

