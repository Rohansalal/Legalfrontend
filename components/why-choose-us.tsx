'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Headphones, Scale, Globe, FileCheck2 } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Guaranteed Compliance',
    description: '100% error-free documentation with our triple-check verification system.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process applications up to 5x faster than traditional legal firms.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Headphones,
    title: 'Expert Consultation',
    description: 'Direct access to senior CAs and Lawyers for your specific business needs.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Scale,
    title: 'Transparent Pricing',
    description: 'No hidden charges. Fixed upfront costs for all our legal services.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Globe,
    title: 'Pan India Presence',
    description: 'Operating in 28+ states, handling local regulations seamlessly.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: FileCheck2,
    title: '100% Digital Process',
    description: 'Secure paperless experience from onboarding to final delivery.',
    color: 'bg-amber-50 text-amber-600',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Why Legal Door</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
              The Smarter Way to <br />
              <span className="text-primary italic">Scale Your Business</span>
            </h3>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                We combine legal expertise with cutting-edge technology to provide a seamless registration experience for entrepreneurs.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                <div>
                  <p className="text-4xl font-black text-slate-900 mb-1">15k+</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Registrations</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900 mb-1">4.9/5</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">User Rating</p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 px-8 py-4 bg-slate-950 text-white rounded-2xl font-black text-lg shadow-2xl shadow-slate-900/20"
              >
                Learn Our History
              </motion.button>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-5`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className="font-black text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
