'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Search,
  FileSearch,
  ClipboardList,
  Play,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const steps = [
  { icon: Search },
  { icon: FileSearch },
  { icon: ClipboardList },
  { icon: Play },
  { icon: CheckCircle2 },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 30%'],
  });
  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative py-28 md:py-40 bg-[#020a1a] overflow-hidden"
    >
      {/* Layered premium background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020a1a] via-[#031432] to-[#020a1a]" />
        <div className="absolute top-[8%] right-[2%] w-[520px] h-[520px] bg-blue-500 rounded-full blur-[160px] opacity-[0.18]" />
        <div className="absolute bottom-[6%] left-[2%] w-[520px] h-[520px] bg-cyan-500 rounded-full blur-[160px] opacity-[0.12]" />
        <div className="absolute top-[40%] left-[42%] w-[420px] h-[420px] bg-indigo-500 rounded-full blur-[140px] opacity-[0.1]" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 20 Q 25 10, 50 20 T 100 20" fill="none" stroke="white" strokeWidth="0.05" />
          <path d="M0 50 Q 25 40, 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.05" />
          <path d="M0 80 Q 25 70, 50 80 T 100 80" fill="none" stroke="white" strokeWidth="0.05" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-4xl mx-auto text-center mb-24 md:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm text-blue-300 text-[11px] font-bold uppercase tracking-[0.25em] mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Our Process
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tight">
            How{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent italic">
              Legal Door
            </span>{' '}
            Works
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
            A five-step legal journey designed for clarity, confidence, and measurable outcomes.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative mb-28">
          {/* Animated progress line */}
          <div className="absolute top-[60px] left-[10%] right-[10%] h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              style={{ width: lineProgress }}
              className="relative h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
            >
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-300 rounded-full blur-md"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-5 gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-100px' }}
                className="group relative"
              >
                {/* Icon node */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-[120px] h-[120px] rounded-[2rem] backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/[0.06] group-hover:border-blue-400/30 group-hover:shadow-[0_25px_60px_-15px_rgba(59,130,246,0.55)]">
                      <step.icon
                        className="w-12 h-12 text-blue-300 group-hover:text-cyan-300 transition-colors duration-500"
                        strokeWidth={1.4}
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 w-11 h-11 rounded-2xl bg-gradient-to-br from-white to-slate-200 text-slate-900 text-sm font-black flex items-center justify-center shadow-xl ring-4 ring-[#020a1a]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet timeline */}
        <div className="lg:hidden relative mb-20">
          <div className="absolute top-0 bottom-0 left-[36px] w-[2px] bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="w-full bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500"
            />
          </div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-5"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-[72px] h-[72px] rounded-2xl backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-blue-300" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-xl bg-white text-slate-900 text-[11px] font-black flex items-center justify-center ring-4 ring-[#020a1a]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-lg text-[#020a1a] bg-white overflow-hidden transition-all duration-500 hover:shadow-[0_25px_60px_-10px_rgba(59,130,246,0.6)] hover:scale-[1.03]">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Start Your Legal Journey
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-all duration-500 group-hover:text-white group-hover:translate-x-1.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
