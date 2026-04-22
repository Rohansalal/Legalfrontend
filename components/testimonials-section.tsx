'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Ankita Khurana',
    title: 'CEO, Digital Nexus India',
    content: 'The team went above and beyond to protect my intellectual property. Their strategic approach was invaluable during our international expansion phase.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Sanjay Gupta',
    title: 'Principal, Global Finance Corp',
    content: 'Exceptional guidance on employment law matters. They simplified complex regulations and ensured full compliance across all our regional offices.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Meera Iyer',
    title: 'HR Director, Enterprise India',
    content: 'Legal Door transformed our contract negotiations. Their expertise saved us months and significant costs. Highly recommended for any fast-scaling business.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Rohit Sharma',
    title: 'Founder, TechBridge Ventures',
    content: 'From startup incorporation to our Series A documentation, Legal Door handled everything flawlessly. Their proactive approach gave us confidence at every stage.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Priya Nair',
    title: 'COO, MedTech Solutions',
    content: 'Outstanding support for our regulatory compliance needs. The team was always available and delivered accurate guidance that kept our operations running smoothly.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Vikram Bose',
    title: 'MD, Bose & Associates',
    content: 'Their trademark registration service was remarkably fast. Within weeks our brand was protected. The team was thorough and communicated clearly throughout.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=150&h=150&auto=format&fit=crop',
  },
];

const PAGE_SIZE = 3;
const totalPages = Math.ceil(testimonials.length / PAGE_SIZE);

export function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const prev = () => {
    setDirection(-1);
    setPage((p) => (p - 1 + totalPages) % totalPages);
  };

  const next = () => {
    setDirection(1);
    setPage((p) => (p + 1) % totalPages);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Averaging 4.9/5 stars across 2,000+ verified reviews</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight text-left">
              Voices of <br />
              <span className="text-primary italic">Success.</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visible.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-10 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 group"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 group-hover:text-primary/10 transition-colors" />

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-slate-900">{testimonial.name}</p>
                    <p className="text-sm font-bold text-primary">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
