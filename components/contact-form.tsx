'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const services = [
  'Business Registration',
  'Compliances',
  'Documentation',
  'Property',
  'Lawyer Services',
  'Global Business',
  'General Inquiry',
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend wired yet — show a confirmation state.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Thank you!</h3>
        <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
          Your message has been received. One of our legal experts will get back to you within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm font-black text-primary uppercase tracking-widest hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass =
    'w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-colors';
  const labelClass = 'block text-xs font-black uppercase tracking-wider text-slate-500 mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name</label>
          <input id="name" name="name" type="text" required placeholder="Your full name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email Address</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>Service of Interest</label>
        <select id="service" name="service" required defaultValue="" className={fieldClass}>
          <option value="" disabled>Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" name="message" required rows={5} placeholder="Tell us briefly about your requirement…" className={`${fieldClass} resize-none`} />
      </div>

      <button
        type="submit"
        className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 text-white font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors duration-300"
      >
        Send Message
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="text-[11px] text-slate-400 text-center font-medium">
        Your information is kept strictly confidential and protected by attorney–client privilege.
      </p>
    </form>
  );
}
