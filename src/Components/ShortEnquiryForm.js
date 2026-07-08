import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const variantConfig = {
  roster: {
    subjectPrefix: 'Talent Booking Enquiry',
    submitLabel: 'Send Booking Enquiry',
    email: 'bookings@citysoulexperience.com',
    fields: [
      { id: 'act', label: 'Act', type: 'text', required: true },
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'email', label: 'Email Address', type: 'email', required: true },
      { id: 'phone', label: 'Phone Number', type: 'text', required: true },
      { id: 'eventDate', label: 'Preferred Date', type: 'date' },
      { id: 'venue', label: 'Venue / Location', type: 'text' },
      { id: 'notes', label: 'Notes', type: 'textarea' },
    ],
  },
  advisory: {
    subjectPrefix: 'Advisory Enquiry',
    submitLabel: 'Send Advisory Enquiry',
    email: 'Events@citysoulexperience.com',
    fields: [
      { id: 'organisation', label: 'Organisation', type: 'text', required: true },
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'email', label: 'Email Address', type: 'email', required: true },
      { id: 'phone', label: 'Phone Number', type: 'text' },
      {
        id: 'focus',
        label: 'What do you need help with?',
        type: 'select',
        options: ['Entertainment strategy', 'Venue programming direction', 'Event consultancy', 'Market-entry advisory', 'Other'],
      },
      { id: 'notes', label: 'Additional Details', type: 'textarea' },
    ],
  },
  general: {
    subjectPrefix: 'General Enquiry',
    submitLabel: 'Send Enquiry',
    email: 'vibes@citysoulexperience.com',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'email', label: 'Email Address', type: 'email', required: true },
      { id: 'phone', label: 'Phone Number', type: 'text' },
      { id: 'message', label: 'Message', type: 'textarea', required: true },
    ],
  },
};

export default function ShortEnquiryForm({ variant, initialAct }) {
  const config = variantConfig[variant];

  const buildInitialData = () => {
    const data = {};
    config.fields.forEach((field) => { data[field.id] = ''; });
    if (variant === 'roster' && initialAct) {
      data.act = `${initialAct.name} (${initialAct.type})`;
    }
    return data;
  };

  const [formData, setFormData] = useState(buildInitialData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `${config.subjectPrefix} from ${formData.name}`;
    const body = config.fields
      .map((field) => `${field.label}: ${formData[field.id] || '-'}`)
      .join('\n');

    window.location.href = `mailto:${config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-magenta/20 rounded-full flex items-center justify-center mb-6 border border-magenta/30">
          <CheckCircle2 className="text-magenta" size={40} />
        </div>
        <h3 className="font-lora text-3xl font-black text-white mb-4 italic uppercase tracking-tighter">Inquiry Sent</h3>
        <p className="text-gray-400 max-w-sm mx-auto mb-8 font-medium">
          Thank you. Your email client should have opened to send the details to {config.email}.
        </p>
        <button
          onClick={() => { setIsSubmitted(false); setFormData(buildInitialData()); }}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-magenta hover:text-white transition-colors"
        >
          Start New Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 min-h-[400px] flex flex-col justify-center space-y-6 font-poppins">
      {config.fields.map((field) => (
        <div key={field.id} className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan">
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              required={field.required}
              rows="3"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-magenta transition-all text-white font-medium resize-none"
            />
          ) : field.type === 'select' ? (
            <select
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              required={field.required}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-magenta transition-all text-white font-medium"
            >
              <option value="" disabled className="bg-black">Select an option</option>
              {field.options.map((option) => (
                <option key={option} value={option} className="bg-black">{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.id}
              value={formData[field.id]}
              onChange={handleChange}
              required={field.required}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-magenta transition-all text-white font-medium"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-magenta text-white font-black uppercase tracking-[0.3em] py-5 rounded-xl hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-4 group"
      >
        {config.submitLabel}
        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </form>
  );
}
