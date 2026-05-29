'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'NoBroker', logo: '/images/partner/nobroker.png' },
  { name: 'Have on Deal', logo: '/images/partner/have-on-deal.png' },
  { name: 'MKOT — My Kind of Trip', logo: '/images/partner/mkot.jpeg' },
];

export function ClientsSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 overflow-hidden bg-white relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest mb-4 sm:mb-6">
            Our Partners
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight break-words">
            Trusted by <span className="text-primary italic">Industry Leaders.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed px-2">
            Proud to power legal compliance for fast-growing brands and startups across India.
          </p>
        </motion.div>

        {/* Partner logos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="flex items-center justify-center h-32 sm:h-36 lg:h-40 p-6 sm:p-8 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
