'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/service-card';
import { ShieldCheck, Users, Trophy, CreditCard } from 'lucide-react';

const advantages = [
  { icon: ShieldCheck, label: 'Personalized Service', active: true },
  { icon: Users, label: 'Expert Team', active: false },
  { icon: Trophy, label: 'Proven Results', active: false },
  { icon: CreditCard, label: 'Affordable Fees', active: false },
];

const services = [
  {
    title: 'Tailored Strategy',
    description: "We don't believe in one-size-fits-all. Every case receives a customized legal strategy designed specifically for your unique situation and desired outcome.",
  },
  {
    title: 'Dedicated Case Manager',
    description: "Never feel lost in the legal system. You will be assigned a dedicated case manager who ensures clear communication and regular updates at every step.",
  },
  {
    title: 'Comprehensive Compliance',
    description: "Stay ahead of regulatory changes. We provide end-to-end support for all your business compliance needs, from GST to annual filings and beyond.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-wide uppercase text-xs mb-3"
          >
            The Legal Door Advantage
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900"
          >
            Most Popular <span className="text-slate-400">Offerings</span>
          </motion.h3>
        </div>

        {/* Advantage Badges/Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {advantages.map((adv, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -2 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border ${
                adv.active 
                  ? 'bg-slate-900 text-white border-transparent shadow-lg' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary'
              }`}
            >
              <adv.icon className="w-5 h-5" />
              <span className="text-sm">{adv.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA for Services */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 font-medium">
            Need something else? <button className="text-primary font-bold hover:underline">Explore all 50+ legal services</button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
