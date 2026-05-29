'use client';

import { motion } from 'framer-motion';
import {
  Search,
  FileSearch,
  ClipboardList,
  Play,
  CheckCircle2,
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

// Connector style between consecutive nodes (matches the reference design).
const connectors: ('solid' | 'dotted')[] = ['solid', 'dotted', 'dotted', 'solid'];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-16 sm:py-20 md:py-28 lg:py-32 xl:py-36 overflow-hidden bg-[#04132b]"
    >
      {/* Premium navy background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,#0a2a52_0%,#061a37_45%,#04122a_100%)]" />
        {/* Faint concentric arcs — top-left */}
        <svg className="absolute -top-56 -left-56 w-[680px] h-[680px] opacity-[0.07]" viewBox="0 0 200 200" fill="none">
          {[95, 78, 61, 44].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} stroke="#bcd4ff" strokeWidth="0.4" />
          ))}
        </svg>
        {/* Faint concentric arcs — bottom-right */}
        <svg className="absolute -bottom-56 -right-56 w-[680px] h-[680px] opacity-[0.06]" viewBox="0 0 200 200" fill="none">
          {[95, 78, 61].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} stroke="#bcd4ff" strokeWidth="0.4" />
          ))}
        </svg>
        <div className="absolute top-[12%] right-[6%] w-[460px] h-[460px] bg-blue-500 rounded-full blur-[170px] opacity-[0.14]" />
        <div className="absolute bottom-[8%] left-[6%] w-[420px] h-[420px] bg-cyan-500 rounded-full blur-[170px] opacity-[0.1]" />
      </div>

      <div className="relative z-10 max-w-7xl 3xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-4xl 3xl:max-w-5xl mx-auto text-center mb-16 sm:mb-20 md:mb-24"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl font-black text-white leading-[1.05] mb-5 sm:mb-6 tracking-tight px-2">
            How{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent italic">
              Legal Door
            </span>{' '}
            Works
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto px-2">
            A five-step legal journey designed for clarity, confidence, and measurable outcomes.
          </p>
        </motion.div>

        {/* ── Desktop / large timeline ───────────────────────────── */}
        <div className="hidden lg:block">
          {/* Numbered nodes + connectors */}
          <div className="grid grid-cols-5">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-80px' }}
                className="relative flex justify-center"
              >
                {/* Connector to the next node */}
                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 left-1/2 w-full -translate-y-1/2 px-1">
                    {connectors[i] === 'solid' ? (
                      <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 via-sky-400 to-blue-500/60" />
                    ) : (
                      <div className="h-0 w-full border-t-2 border-dotted border-slate-400/40" />
                    )}
                  </div>
                )}

                {/* Node */}
                <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-[#06182f] border border-blue-400/40 flex items-center justify-center shadow-[0_0_28px_-6px_rgba(56,128,255,0.55)]">
                  <span className="text-white font-black text-lg tracking-wide">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Icon · title · description · accent */}
          <div className="grid grid-cols-5 mt-10 xl:mt-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-80px' }}
                className="group flex flex-col items-center text-center px-3 xl:px-5"
              >
                <step.icon
                  className="w-11 h-11 xl:w-12 xl:h-12 text-sky-300/90 mb-6 xl:mb-7 transition-all duration-300 group-hover:text-cyan-300 group-hover:-translate-y-1"
                  strokeWidth={1.3}
                />
                <h3 className="text-lg xl:text-xl font-black text-white tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed mb-5 max-w-[15rem]">
                  {step.desc}
                </p>
                <div className="w-8 h-[2px] rounded-full bg-blue-500/70 transition-all duration-300 group-hover:w-12 group-hover:bg-sky-400" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile / tablet timeline ───────────────────────────── */}
        <div className="lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-5 sm:gap-6"
            >
              {/* Node + vertical connector */}
              <div className="flex flex-col items-center">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#06182f] border border-blue-400/40 flex items-center justify-center shadow-[0_0_22px_-6px_rgba(56,128,255,0.55)] shrink-0">
                  <span className="text-white font-black text-sm sm:text-base">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 my-2 w-0 ${
                      connectors[i] === 'solid'
                        ? 'border-l-2 border-solid border-blue-500/50'
                        : 'border-l-2 border-dotted border-slate-400/40'
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pb-9 sm:pb-10">
                <step.icon className="w-8 h-8 text-sky-300/90 mb-3" strokeWidth={1.4} />
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-md">
                  {step.desc}
                </p>
                <div className="w-8 h-[2px] rounded-full bg-blue-500/70 mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
