'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

type Testimonial = {
  name: string;
  title: string;
  service: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Riya Malhotra',
    title: 'Founder, Aarambh Studios',
    service: 'Trademark Registration',
    content:
      'They secured my brand’s trademark faster than I expected and handled an objection seamlessly. I finally feel my brand is properly protected.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Arjun Mehta',
    title: 'Private Client',
    service: 'Criminal Defence',
    content:
      'Facing a difficult FIR, their advocate guided me through anticipatory bail calmly and professionally. Clear advice when I needed it most.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Kavya Reddy',
    title: 'Private Client',
    service: 'Mutual Divorce',
    content:
      'They handled my mutual divorce with sensitivity and complete discretion. The process was far smoother and quicker than I had feared.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Sandeep Nair',
    title: 'Director, Northline Logistics',
    service: 'M&A Advisory',
    content:
      'Their corporate team structured our acquisition flawlessly and flagged risks we had completely missed. Genuinely top-tier legal advice.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Pooja Verma',
    title: 'Proprietor, Verma Textiles',
    service: 'Cheque Bounce (NI Act)',
    content:
      'Recovered my dues through a cheque-bounce case efficiently and kept me updated at every hearing. Clear communication, zero jargon.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Imran Sheikh',
    title: 'Owner, Sheikh Traders',
    service: 'Consumer Dispute',
    content:
      'Won my consumer court case against a defaulting vendor. The team was thorough, responsive and confident throughout the matter.',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Neha Kapoor',
    title: 'Private Client',
    service: 'Property Dispute',
    content:
      'They resolved a long-standing property title dispute that two other firms had given up on. Exceptional litigation support.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Rahul Desai',
    title: 'Co-founder, Finlytics',
    service: 'IPR & Founders’ Agreement',
    content:
      'From our founders’ agreement to a patent filing, they protected our IP and equity structure end to end. Highly recommended for startups.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop',
  },
];

const rowOne = testimonials.slice(0, 4);
const rowTwo = testimonials.slice(4);

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="relative w-[280px] sm:w-[320px] shrink-0 mx-2.5 sm:mx-3 p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/40">
      <Quote className="absolute top-4 right-5 w-7 h-7 text-slate-100" />
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-orange-500 text-orange-500" />
          ))}
        </div>
        <span className="text-[9px] font-black uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
          {t.service}
        </span>
      </div>

      <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed mb-5 line-clamp-4">
        “{t.content}”
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
          <img src={t.image} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <p className="font-black text-slate-900 text-[13px] truncate">{t.name}</p>
          <p className="text-[11px] font-bold text-slate-400 truncate">{t.title}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse }: { items: Testimonial[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden py-2">
      <motion.div
        className="flex shrink-0"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 38, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm mb-5">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-orange-500 text-orange-500" />
              ))}
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              4.9/5 across 2,000+ verified reviews
            </span>
          </div>
          <h3 className="text-3xl xs:text-4xl sm:text-5xl 3xl:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Voices of <span className="text-primary italic">Success.</span>
          </h3>
          <p className="text-slate-500 font-medium mt-4 leading-relaxed">
            Real outcomes from clients we’ve represented — from trademark and corporate matters
            to litigation, family and criminal law.
          </p>
        </motion.div>
      </div>

      {/* Auto-scrolling marquee (two rows, opposite directions) */}
      <div className="relative space-y-4 sm:space-y-5">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>
    </section>
  );
}
