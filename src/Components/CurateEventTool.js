import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Send, CheckCircle2 } from 'lucide-react';
import { gsap } from 'gsap';

const steps = [
  {
    id: 'eventType',
    title: 'What type of event are we curating?',
    options: ['Corporate Event', 'Wedding', 'Private Celebration', 'Lifestyle Event', 'Other']
  },
  {
    id: 'musicStyle',
    title: 'What music style fits your vision?',
    options: ['Soulful Live Music', 'DJ Set (Lounge/Sunset)', 'DJ Set (Vibrant Dancefloor)', 'Acoustic / Intimate', 'Mixed Experience']
  },
  {
    id: 'eventSize',
    title: 'Approximate event size?',
    options: ['Intimate (< 50)', 'Medium (50 - 200)', 'Large (200+)', 'Not Sure Yet']
  },
  {
    id: 'services',
    title: 'Which services do you need?',
    multi: true,
    options: ['Live Music Performance', 'DJ Experiences', 'Full Event Programming', 'Venue Music Strategy', 'Experiential Concepts', 'Talent Booking', 'Advisory']
  },
  {
    id: 'budget',
    title: 'Approximate budget range?',
    options: ['Under KES 100K', 'KES 100K - 500K', 'KES 500K - 1M', 'KES 1M+', 'Not Sure Yet']
  },
  {
    id: 'contact',
    title: 'Let’s finalize the details',
    isForm: true
  }
];

const emptyFormData = {
  eventType: '',
  musicStyle: '',
  eventSize: '',
  services: [],
  budget: '',
  name: '',
  organisation: '',
  email: '',
  phone: '',
  eventDate: '',
  notes: ''
};

export default function CurateEventTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(emptyFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stepRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    if (!isSubmitted) {
      gsap.fromTo(stepRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );

      const progress = ((currentStep + 1) / steps.length) * 100;
      gsap.to(progressRef.current, { width: `${progress}%`, duration: 0.5 });
    }
  }, [currentStep, isSubmitted]);

  const handleOptionSelect = (option) => {
    const step = steps[currentStep];
    if (step.multi) {
      const updatedServices = formData.services.includes(option)
        ? formData.services.filter(s => s !== option)
        : [...formData.services, option];
      setFormData({ ...formData, services: updatedServices });
    } else {
      setFormData({ ...formData, [step.id]: option });
      setTimeout(nextStep, 300);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct email body
    const subject = `Event Curation Inquiry from ${formData.name}`;
    const body = `
      Event Type: ${formData.eventType}
      Music Style: ${formData.musicStyle}
      Event Size: ${formData.eventSize}
      Services: ${formData.services.join(', ')}
      Budget Range: ${formData.budget}

      Client Details:
      Name: ${formData.name}
      Organisation: ${formData.organisation}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Event Date: ${formData.eventDate}

      Notes: ${formData.notes}
    `;

    window.location.href = `mailto:Events@citysoulexperience.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 text-center h-[500px] flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-magenta/20 rounded-full flex items-center justify-center mb-6 border border-magenta/30">
          <CheckCircle2 className="text-magenta" size={40} />
        </div>
        <h3 className="font-lora text-3xl font-black text-white mb-4 italic uppercase tracking-tighter">Inquiry Sent</h3>
        <p className="text-gray-400 max-w-sm mx-auto mb-8 font-medium">
          Thank you for starting your curation journey. Your email client should have opened to send the details to Events@citysoulexperience.com.
        </p>
        <button
          onClick={() => { setIsSubmitted(false); setCurrentStep(0); setFormData(emptyFormData); }}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-magenta hover:text-white transition-colors"
        >
          Start New Inquiry
        </button>
      </div>
    );
  }

  const step = steps[currentStep];

  return (
    <div className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl font-poppins">
      {/* Progress Bar */}
      <div className="h-1 w-full bg-white/5">
        <div ref={progressRef} className="h-full bg-gradient-to-r from-magenta via-cyan to-deepcyan shadow-[0_0_10px_rgba(200,29,115,0.5)]" />
      </div>

      <div className="p-8 md:p-12 min-h-[500px] flex flex-col">
        <div className="mb-10 flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">
            Step {currentStep + 1} of {steps.length}
          </span>
          <div className="flex items-center gap-1 opacity-20">
            {steps.map((_, i) => (
              <div key={i} className={`h-1 w-4 rounded-full ${i <= currentStep ? 'bg-cyan' : 'bg-white'}`} />
            ))}
          </div>
        </div>

        <div ref={stepRef} className="flex-1">
          <h3 className="font-lora text-2xl md:text-4xl font-black text-white mb-10 leading-none italic uppercase tracking-tighter">
            {step.title}
          </h3>

          {!step.isForm ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {step.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionSelect(option)}
                  className={`group relative p-6 text-left border rounded-xl transition-all duration-300 ${
                    (step.multi ? formData.services.includes(option) : formData[step.id] === option)
                      ? 'border-magenta bg-magenta/10'
                      : 'border-white/10 bg-white/5 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-bold tracking-tight ${
                      (step.multi ? formData.services.includes(option) : formData[step.id] === option)
                        ? 'text-white'
                        : 'text-gray-400 group-hover:text-white'
                    }`}>
                      {option}
                    </span>
                    {step.multi && (
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        formData.services.includes(option)
                        ? 'bg-magenta border-magenta'
                        : 'border-white/20'
                      }`}>
                        {formData.services.includes(option) && <div className="w-2 h-2 bg-black rounded-full" />}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-magenta">Full Name</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tommy Soul"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-magenta transition-all text-white font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan">Organisation</label>
                  <input
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    placeholder="Company / Venue name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-magenta transition-all text-white font-medium"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tommy@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-magenta transition-all text-white font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-magenta">Phone Number</label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-magenta transition-all text-white font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-magenta transition-all text-white font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Tell us more about your vision..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-magenta transition-all text-white font-medium resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-magenta text-white font-black uppercase tracking-[0.3em] py-5 rounded-xl hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-4 group"
              >
                Launch Inquiry
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
              currentStep === 0 ? 'opacity-0' : 'text-gray-500 hover:text-white'
            }`}
          >
            <ChevronLeft size={14} /> Back
          </button>

          {step.multi && (
            <button
              onClick={nextStep}
              className="px-8 py-3 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-full hover:bg-cyan transition-all flex items-center gap-2"
            >
              Continue <ChevronRight size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
