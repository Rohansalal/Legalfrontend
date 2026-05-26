'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, BarChart3, Cloud, Layout, MousePointer2 } from 'lucide-react';

const clients = [
  { name: 'Tata Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg' },
  { name: 'Reliance', logo: 'https://upload.wikimedia.org/wikipedia/en/9/99/Reliance_Industries_Logo.svg' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { name: 'HDFC Bank', logo: 'https://www.vectorlogo.zone/logos/hdfcbank/hdfcbank-ar21.svg' },
  { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg' },
  { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { name: 'Adani', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Adani_Group_logo.svg' },
  { name: 'Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Mahindra_and_Mahindra_Logo.svg' },
];

// Duplicate for seamless loop
const allClients = [...clients, ...clients];

export function ClientsSection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 overflow-hidden bg-white relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest mb-4 sm:mb-6">
            Global Recognition
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight break-words">
            Trusted by <span className="text-primary italic">Industry Leaders.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed px-2">
            Powering legal compliance for over <span className="text-primary font-black">500+</span> Indian conglomerates and fast-growing global startups.
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Infinite Scroll Container */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {allClients.map((client, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center mx-4 sm:mx-6 md:mx-12"
            >
              <div className="flex items-center justify-center w-28 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 p-3 sm:p-4 md:p-6 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-default">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      </div>
    </section>
  );
}
