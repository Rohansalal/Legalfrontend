'use client';

import { motion } from 'framer-motion';

const partners: { name: string; logo: string; dark?: boolean }[] = [
  { name: 'NoBroker', logo: '/images/partner/nobroker.png' },
  { name: 'Have on Deal', logo: '/images/partner/have-on-deal.png' },
  { name: 'MKOT — My Kind of Trip', logo: '/images/partner/mkot.jpeg' },
  { name: 'Investors Door', logo: '/images/partner/investors-door.jpeg' },
  { name: 'Deepak Choudhary & Co.', logo: '/images/partner/deepak-choudhary.jpeg' },
  { name: 'Business Door', logo: '/images/partner/business-door.jpeg' },
  { name: 'Weblok', logo: '/images/partner/weblok.jpeg' },
  { name: 'Trippex Travels', logo: '/images/partner/trippex-travels.png' },
  { name: 'AiidL Technologies', logo: '/images/partner/aiidl-technologies.jpg' },
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

        {/* Partner logos — seamless infinite marquee (right → left) */}
        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            className="flex w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="shrink-0 px-2.5 sm:px-3 lg:px-4 py-2">
                <div
                  className={`flex items-center justify-center h-28 sm:h-32 lg:h-36 w-48 sm:w-56 lg:w-64 p-5 sm:p-7 rounded-2xl sm:rounded-3xl border ${
                    partner.dark
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-slate-100'
                  }`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
