'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, BarChart3, Cloud, Layout, MousePointer2 } from 'lucide-react';

const clients = [
  { name: 'TechCorp Inc', icon: <Cpu className="w-6 h-6" />, color: 'text-blue-500' },
  { name: 'Global Finance', icon: <BarChart3 className="w-6 h-6" />, color: 'text-emerald-500' },
  { name: 'Innovation Hub', icon: <Zap className="w-6 h-6" />, color: 'text-amber-500' },
  { name: 'Cloud Systems', icon: <Cloud className="w-6 h-6" />, color: 'text-sky-500' },
  { name: 'Digital Ventures', icon: <Globe className="w-6 h-6" />, color: 'text-indigo-500' },
  { name: 'Safe Guard', icon: <Shield className="w-6 h-6" />, color: 'text-rose-500' },
  { name: 'UX Design Co', icon: <Layout className="w-6 h-6" />, color: 'text-purple-500' },
  { name: 'Interactive Labs', icon: <MousePointer2 className="w-6 h-6" />, color: 'text-orange-500' },
];

// Duplicate for seamless loop
const allClients = [...clients, ...clients, ...clients];

export function ClientsSection() {
  return (
    <section className="pt-0 pb-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join 500+ companies scaling with Legal Door
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Infinite Scroll Container */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {allClients.map((client, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center mx-4 md:mx-8"
            >
              <div className="flex items-center gap-4 px-8 py-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group cursor-default">
                <div className={`${client.color} opacity-70 group-hover:opacity-100 transition-opacity`}>
                  {client.icon}
                </div>
                <span className="text-xl font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 mt-0 text-center">
        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-500 font-medium"
        >
          Join <span className="text-primary font-bold">500+</span> companies scaling with Legal Door
        </motion.p> */}
      </div>
    </section>
  );
}
