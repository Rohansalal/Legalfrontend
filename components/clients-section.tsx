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
    <section className="pt-0 pb-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Trusted by <span className="text-primary italic">Industry Leaders.</span>
          </h2>
          <p className="text-lg text-slate-500 font-bold max-w-2xl mx-auto">
            Powering compliance for 500+ Indian conglomerates and growing startups.
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
              className="inline-flex items-center justify-center mx-6 md:mx-12"
            >
              <div className="flex items-center justify-center w-40 h-24 p-6 bg-white rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-default">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      </div>
    </section>
  );
}
