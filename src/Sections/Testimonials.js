export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-black text-white flex items-center justify-center font-['Montserrat'] relative overflow-hidden">
      {/* Background elements can go here */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-8xl font-black mb-12 md:mb-20 tracking-tighter leading-none text-center uppercase">THE WORD<br/>ON THE STREET</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-left">
          <div className="border-l-4 border-white pl-6 md:pl-8 py-2 md:py-4">
            <p className="text-xl md:text-2xl italic font-light leading-relaxed mb-6">
              "City Soul transformed our brand launch into a cultural moment. Their attention 
              to the pulse of the city is unmatched. They don't just plan events; they curate 
              atmospheres."
            </p>
            <cite className="text-lg md:text-xl font-bold not-italic block uppercase">— CREATIVE DIRECTOR, URBAN HIVE</cite>
          </div>
          
          <div className="border-l-4 border-white pl-6 md:pl-8 py-2 md:py-4">
            <p className="text-xl md:text-2xl italic font-light leading-relaxed mb-6">
              "Working with them was like seeing the city's heartbeat translated into 
              production. The energy, the precision, the soul it's all there in 
              everything they touch."
            </p>
            <cite className="text-lg md:text-xl font-bold not-italic block uppercase">— LEAD ARTIST, NEON PULSE</cite>
          </div>
        </div>
      </div>
    </section>
  );
}
