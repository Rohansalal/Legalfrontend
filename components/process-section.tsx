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
    <section id="process" className="pt-6 pb-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-30" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-black tracking-[0.2em] uppercase text-xs mb-4"
          >
            Our Methodology
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
          >
            How <span className="text-slate-400">Legal Door</span> Works
          </motion.h3>
        </div>

        {/* Process Flow - Desktop */}
        <div className="hidden lg:block relative">
          {/* Central Connecting Line */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-500 via-orange-500 to-emerald-500"
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                {/* Step Circle */}
                <div className="relative inline-block mb-8">
                  <div className={`w-20 h-20 rounded-3xl ${step.bg} ${step.color} flex items-center justify-center shadow-xl shadow-slate-200/50 group-hover:scale-110 transition-transform duration-300 relative z-10 border-4 border-white`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center border-2 border-white z-20">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-black text-slate-900 mb-3 px-2 leading-tight">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Flow - Mobile/Tablet */}
        <div className="lg:hidden relative space-y-12">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 left-[27px] w-0.5 bg-slate-100 -z-10">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-blue-500 via-orange-500 to-emerald-500"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.color} flex-shrink-0 flex items-center justify-center shadow-lg relative z-10 border-2 border-white`}>
                <step.icon className="w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center border-2 border-white">
                  {index + 1}
                </div>
              </div>
              <div className="pt-1">
                <h4 className="text-xl font-black text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-primary transition-all shadow-2xl shadow-slate-900/20 active:scale-95">
            Book Your Free Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
