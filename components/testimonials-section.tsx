'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CEO, Tech Startup',
    content: 'Legal Door transformed our contract negotiations. Their expertise saved us months and significant costs. Highly recommended for any fast-scaling business.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Michael Chen',
    title: 'Principal, Global Finance',
    content: 'The team went above and beyond to protect my intellectual property. Their strategic approach was invaluable during our international expansion phase.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop',
  },
  {
    name: 'Jessica Martinez',
    title: 'HR Director, Enterprise Corp',
    content: 'Exceptional guidance on employment law matters. They simplified complex regulations and ensured full compliance across all our regional offices.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
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
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Trusted by 500+ <br />
              <span className="text-slate-400">Global Enterprises</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm">
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
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
        </div>

        {/* Brand Trust Bar */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-10 border-t border-slate-200 flex flex-wrap justify-center gap-12 grayscale opacity-50"
        >
          {/* We can add small client logos or just a trust text */}
        {/*  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Averaging 4.9/5 stars across 2,000+ verified reviews</p>
        </motion.div> */}
      </div>
    </section>
  );
}
