'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Headphones, Scale, Globe, FileCheck2 } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Guaranteed Compliance',
    description: '100% error-free documentation with our triple-check verification system.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process applications up to 5x faster than traditional legal firms.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Headphones,
    title: 'Expert Consultation',
    description: 'Direct access to senior CAs and Lawyers for your specific business needs.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Scale,
    title: 'Transparent Pricing',
    description: 'No hidden charges. Fixed upfront costs for all our legal services.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Globe,
    title: 'Pan India Presence',
    description: 'Operating in 28+ states, handling local regulations seamlessly.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: FileCheck2,
    title: '100% Digital Process',
    description: 'Secure paperless experience from onboarding to final delivery.',
    color: 'bg-amber-50 text-amber-600',
  },
];

const authorities = [
  { id: 'mca', caption: 'MCA Registered' },
  { id: 'fssai', caption: 'FSSAI Licensed' },
  { id: 'msme', caption: 'MSME / Udyam' },
  { id: 'ip', caption: 'IP India Registered' },
  { id: 'iso', caption: 'ISO Certified' },
  { id: 'gst', caption: 'GST Compliant' },
  { id: 'incometax', caption: 'Income Tax Dept.' },
  { id: 'ugc', caption: 'UGC Recognised' },
  { id: 'mci', caption: 'MCI Approved' },
  { id: 'eci', caption: 'Election Commission' },
];

/** Self-contained circular trust seals (drop real logo PNGs in to swap). */
function AuthorityBadge({ id }: { id: string }) {
  switch (id) {
    case 'iso':
      return (
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-[7px] font-black tracking-[0.25em] text-slate-400">CERTIFIED</span>
          <span className="text-2xl sm:text-3xl font-black text-[#022d54] tracking-tight my-0.5">ISO</span>
          <span className="text-[7px] font-black tracking-[0.25em] text-slate-400">COMPANY</span>
        </div>
      );
    case 'fssai':
      return (
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-xl sm:text-2xl font-black tracking-tight">
            <span className="text-[#1e3a8a]">fss</span>
            <span className="text-emerald-600">ai</span>
          </span>
          <span className="text-[6.5px] font-bold tracking-[0.15em] text-slate-400 mt-1.5">FOOD SAFETY</span>
        </div>
      );
    case 'msme':
      return (
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-xl sm:text-2xl font-black text-[#022d54] tracking-tight">MSME</span>
          <span className="text-[6.5px] font-bold tracking-[0.15em] text-slate-400 mt-1.5">GOVT. OF INDIA</span>
        </div>
      );
    case 'ip':
      return (
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-lg sm:text-xl font-black text-[#022d54] tracking-tight">
            IP <span className="text-primary">INDIA</span>
          </span>
          <span className="text-[6px] font-bold tracking-[0.12em] text-slate-400 mt-1.5">PATENTS · DESIGNS · TM</span>
        </div>
      );
    case 'mca':
      return (
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-2xl sm:text-3xl font-black text-[#022d54] tracking-tight">MCA</span>
          <span className="text-[6px] font-bold tracking-[0.15em] text-slate-400 mt-1.5">CORPORATE AFFAIRS</span>
        </div>
      );
    case 'gst':
      return (
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-2xl sm:text-3xl font-black text-[#022d54] tracking-tight">GST</span>
          <span className="text-[6px] font-bold tracking-[0.12em] text-slate-400 mt-1.5">GOODS &amp; SERVICES TAX</span>
        </div>
      );
    case 'incometax':
      return (
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-xl sm:text-2xl font-black text-[#022d54] tracking-tight">
            I<span className="text-primary">-</span>T
          </span>
          <span className="text-[6px] font-bold tracking-[0.12em] text-slate-400 mt-1.5">INCOME TAX DEPT.</span>
        </div>
      );
    case 'ugc':
      return (
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-2xl sm:text-3xl font-black text-[#022d54] tracking-tight">UGC</span>
          <span className="text-[6px] font-bold tracking-[0.12em] text-slate-400 mt-1.5">UNIV. GRANTS COMM.</span>
        </div>
      );
    case 'mci':
      return (
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-2xl sm:text-3xl font-black text-[#022d54] tracking-tight">MCI</span>
          <span className="text-[6px] font-bold tracking-[0.12em] text-slate-400 mt-1.5">MEDICAL COUNCIL</span>
        </div>
      );
    case 'eci':
      return (
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-2xl sm:text-3xl font-black text-[#022d54] tracking-tight">ECI</span>
          <span className="text-[6px] font-bold tracking-[0.12em] text-slate-400 mt-1.5">ELECTION COMM.</span>
        </div>
      );
    default:
      return null;
  }
}

/**
 * Shows the official logo from /public/images/authorities/<id>.png.
 * Falls back to the styled text seal if the file hasn't been added yet,
 * so the section never renders a broken image.
 */
function AuthorityLogo({ id, label }: { id: string; label: string }) {
  const [errored, setErrored] = useState(false);
  if (errored) return <AuthorityBadge id={id} />;
  return (
    <img
      src={`/images/authorities/${id}.png`}
      alt={label}
      loading="lazy"
      onError={() => setErrored(true)}
      className="max-w-[80%] max-h-[80%] object-contain"
    />
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20 md:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-primary font-black tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">Why Legal Door</h2>
          <h3 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl 3xl:text-6xl font-black text-slate-900 leading-tight mb-6 sm:mb-8">
            The Smarter Way to{' '}
            <span className="text-primary italic">Scale Your Business</span>
          </h3>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We combine legal expertise with cutting-edge technology to provide a seamless registration experience for entrepreneurs.
          </p>
        </motion.div>

        {/* Feature cards — round icon badges with extra breathing room */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 lg:mt-20">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-left p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${feature.color} flex items-center justify-center mb-4 sm:mb-5`}>
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h4 className="font-black text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">{feature.title}</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Government Regulatory Authorities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-20 lg:mt-24 relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-gradient-to-br from-[#0b1f3a] via-[#0e2747] to-[#15355f] p-8 sm:p-12 lg:p-14"
        >
          <div className="absolute -top-16 -right-12 w-72 h-72 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

          <h3 className="relative text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            Obtain Authorization from{' '}
            <br className="hidden sm:block" />
            Government Regulatory Authorities
          </h3>

          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 justify-items-center">
            {authorities.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-3 sm:gap-4"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center shadow-2xl shadow-black/20 ring-4 ring-white/10 transition-transform duration-300 hover:scale-105 overflow-hidden p-3">
                  <AuthorityLogo id={a.id} label={a.caption} />
                </div>
                <span className="text-white/55 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  {a.caption}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
