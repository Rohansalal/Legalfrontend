'use client';

import { motion } from 'framer-motion';
import {
  Search,
  FileSearch,
  ClipboardList,
  Play,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Initial Consultation',
    description: 'Meet with our expert attorneys to understand your legal needs and objectives.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: FileSearch,
    title: 'Case Analysis',
    description: 'Comprehensive review of your situation and development of strategy.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: ClipboardList,
    title: 'Legal Planning',
    description: 'Create a detailed roadmap with clear milestones and timelines.',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
  },
  {
    icon: Play,
    title: 'Execution',
    description: 'Implement solutions with continuous support and regular updates.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
  {
    icon: CheckCircle2,
    title: 'Resolution',
    description: 'Achieve your legal objectives with exceptional results.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#022d54] relative overflow-hidden">
      {/* Premium Background Design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-500 rounded-full blur-[120px] opacity-20" />
        
        {/* Floating Lines or Patterns */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 20 Q 25 15, 50 20 T 100 20" fill="none" stroke="white" strokeWidth="0.1" />
          <path d="M0 50 Q 25 45, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.1" />
          <path d="M0 80 Q 25 75, 50 80 T 100 80" fill="none" stroke="white" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with Trust Elements */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 font-bold text-[11px] uppercase tracking-widest mb-6"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Our Methodology
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
            >
              How <span className="text-blue-400 italic">Legal Door</span> Works.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed"
            >
              Precision, Integrity, and Excellence at every step of your legal journey.
            </motion.p>
          </div>

          {/* Trust Counter Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">500+</div>
              <div className="text-blue-400 font-black text-xs uppercase tracking-[0.2em] mb-4">Global Enterprises</div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-[200px] mx-auto">
                Trust our methodology for their critical legal operations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Process Flow - Desktop */}
        <div className="hidden lg:block relative mb-20">
          {/* Central Connecting Line */}
          <div className="absolute top-[45px] left-[5%] right-[5%] h-[2px] bg-white/10 -z-10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500"
            />
          </div>

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Step Circle */}
                <div className="relative inline-block mb-10">
                  <div className={`w-24 h-24 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-400 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all duration-500 relative z-10 group-hover:-translate-y-2`}>
                    <step.icon className="w-10 h-10 text-blue-400 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white text-slate-900 text-sm font-black flex items-center justify-center border-4 border-[#022d54] z-20 shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-black text-white mb-4 px-2 leading-tight group-hover:text-blue-400 transition-colors duration-500">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed px-4 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Flow - Mobile/Tablet */}
        <div className="lg:hidden relative space-y-16">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-[35px] w-[2px] bg-white/10 -z-10">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-8"
            >
              <div className={`w-20 h-20 rounded-[1.5rem] bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center relative z-10`}>
                <step.icon className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-slate-900 text-xs font-black flex items-center justify-center border-2 border-[#022d54]">
                  {index + 1}
                </div>
              </div>
              <div className="pt-2">
                <h4 className="text-2xl font-black text-white mb-3">{step.title}</h4>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Bottom Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <button className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-[#022d54] rounded-[2rem] font-black text-xl hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
            <span className="relative z-10">Start Your Legal Journey</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
