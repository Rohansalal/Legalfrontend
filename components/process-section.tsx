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
  {
    icon: Search,
    title: 'Discover',
    desc: 'Tell us your business goals — we map them to the right legal pathway in one quick call.',
  },
  {
    icon: FileSearch,
    title: 'Diagnose',
    desc: 'Senior experts review your documents, flag risks, and shape a precise filing plan.',
  },
  {
    icon: ClipboardList,
    title: 'Document',
    desc: 'We draft, vet, and prepare every form — no errors, no surprises, fully transparent.',
  },
  {
    icon: Play,
    title: 'Execute',
    desc: 'Filings, approvals, and follow-ups handled end-to-end while you focus on your business.',
  },
  {
    icon: CheckCircle2,
    title: 'Deliver',
    desc: 'Certificates in hand and a dedicated post-launch support concierge for ongoing compliance.',
  },
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
      className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-40 bg-[#020a1a] overflow-hidden"
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

      <div className="relative z-10 max-w-7xl 3xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-4xl 3xl:max-w-5xl mx-auto text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm text-blue-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-5 sm:mb-6 md:mb-8">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            Our Process
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-black text-white leading-[1.05] mb-5 sm:mb-6 md:mb-8 tracking-tight px-2">
            How{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent italic">
              Legal Door
            </span>{' '}
            Works
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto px-2">
            A five-step legal journey designed for clarity, confidence, and measurable outcomes.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative mb-20 xl:mb-28">
          {/* Animated progress line — centered on icon nodes (48px at lg, 60px at xl) */}
          <div className="absolute top-[48px] xl:top-[60px] left-[10%] right-[10%] h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
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

          <div className="grid grid-cols-5 gap-4 xl:gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-100px' }}
                className="group relative text-center"
              >
                {/* Icon node */}
                <div className="flex justify-center mb-6 xl:mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-[96px] h-[96px] xl:w-[120px] xl:h-[120px] rounded-[1.5rem] xl:rounded-[2rem] backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-white/[0.06] group-hover:border-blue-400/30 group-hover:shadow-[0_25px_60px_-15px_rgba(59,130,246,0.55)]">
                      <step.icon
                        className="w-10 h-10 xl:w-12 xl:h-12 text-blue-300 group-hover:text-cyan-300 transition-colors duration-500"
                        strokeWidth={1.4}
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 w-9 h-9 xl:w-11 xl:h-11 rounded-xl xl:rounded-2xl bg-gradient-to-br from-white to-slate-200 text-slate-900 text-xs xl:text-sm font-black flex items-center justify-center shadow-xl ring-4 ring-[#020a1a]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                <h3 className="text-base xl:text-lg 2xl:text-xl font-black text-white tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs xl:text-sm text-slate-400 font-medium leading-relaxed px-1">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet timeline */}
        <div className="lg:hidden relative mb-12 sm:mb-16 md:mb-20">
          <div className="absolute top-0 bottom-0 left-[28px] sm:left-[36px] w-[2px] bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="w-full bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500"
            />
          </div>

          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 sm:gap-5"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 sm:w-[64px] sm:h-[64px] md:w-[72px] md:h-[72px] rounded-2xl backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-300" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white text-slate-900 text-[10px] sm:text-[11px] font-black flex items-center justify-center ring-4 ring-[#020a1a]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-1.5 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">
                    {step.desc}
                  </p>
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
          <button className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base md:text-lg text-[#020a1a] bg-white overflow-hidden transition-all duration-500 hover:shadow-[0_25px_60px_-10px_rgba(59,130,246,0.6)] hover:scale-[1.03] max-w-full">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
              Start Your Legal Journey
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 group-hover:text-white group-hover:translate-x-1.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
