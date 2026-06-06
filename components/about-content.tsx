'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Landmark,
  Building2,
  FileCheck,
  Scale,
  Globe,
  Gavel,
  Users,
  Target,
  Lightbulb,
  Award,
  Briefcase,
  Calculator,
  FileText,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  Quote,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ── Data ─────────────────────────────────────────────────────────────── */

const achievements = [
  { value: '2012', label: 'Established', sub: 'Years of Trust' },
  { value: '20+', label: 'Countries Served', sub: 'Global Footprint' },
  { value: '100+', label: 'Awards & Honors', sub: 'Recognised Excellence' },
  { value: '100+', label: 'Professionals', sub: 'Multidisciplinary Team' },
  { value: '5,000+', label: 'Services Delivered', sub: 'End-to-End Execution' },
  { value: '10,000+', label: 'Happy Clients', sub: 'Across India & Abroad' },
];

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To simplify legal and business processes — helping entrepreneurs transform ideas into thriving enterprises through reliable, transparent and technology-enabled solutions.',
    color: 'from-orange-500 to-pink-600',
  },
  {
    icon: Lightbulb,
    title: 'Our Vision',
    desc: 'To be the most trusted Legal Tech-driven partner, empowering businesses to achieve sustainable growth, profitability and long-term success across the globe.',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: ShieldCheck,
    title: 'Our Approach',
    desc: 'A client-centric model that blends deep legal expertise with innovation — delivering seamless, efficient and cost-effective services to clients across diverse industries.',
    color: 'from-emerald-500 to-teal-600',
  },
];

const services = [
  { icon: Building2, title: 'Business Registration & Licenses', desc: 'Company, LLP, startup & licensing from day one.', href: '/services/business-registration' },
  { icon: FileCheck, title: 'Compliance Management', desc: 'Ongoing regulatory, ROC, GST & tax compliance.', href: '/services/compliances' },
  { icon: FileText, title: 'Legal Documentation', desc: 'Agreements, notices, deeds & corporate documents.', href: '/services/documentation' },
  { icon: Landmark, title: 'Property Registration', desc: 'Sale, gift, lease deeds, due diligence & title search.', href: '/services/property' },
  { icon: Briefcase, title: 'Corporate Law', desc: 'M&A, insolvency, IPO, banking & securities law.', href: '/services/lawyer-services/corporate-services' },
  { icon: Globe, title: 'Global Business Advisory', desc: 'Cross-border setup & advisory in 20+ countries.', href: '/services/global-business' },
  { icon: Scale, title: 'International Law', desc: 'Immigration, trade, customs & cross-border matters.', href: '/services/lawyer-services/aviation-maritime' },
  { icon: Gavel, title: 'Criminal Law', desc: 'Bail, FIR, appeals, white-collar & cyber crime.', href: '/services/lawyer-services/criminal-law' },
  { icon: Users, title: 'Family Law', desc: 'Divorce, custody, maintenance & matrimonial matters.', href: '/services/lawyer-services/family-law' },
];

const team = [
  { icon: Scale, label: 'Lawyers', desc: 'Litigation & advisory specialists' },
  { icon: Calculator, label: 'Chartered Accountants', desc: 'Tax, audit & financial strategy' },
  { icon: FileCheck, label: 'Company Secretaries', desc: 'Corporate governance & compliance' },
  { icon: Briefcase, label: 'Financial Experts', desc: 'Funding, structuring & growth advisory' },
];

const differentiators = [
  'Government of India approved & MCA registered firm',
  'Legal Tech-driven platform with real-time monitoring',
  'Multidisciplinary team under one roof',
  'Transparent, fixed and cost-effective pricing',
  'Trusted by clients across India and 20+ countries',
  'Result-oriented, practical legal solutions',
];

/* Graceful image — falls back to brand gradient if the photo fails to load. */
function PhotoFrame({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);
  return (
    <div className={cn('relative overflow-hidden bg-gradient-to-br from-[#0a3d6d] via-[#022d54] to-[#0a3d6d]', className)}>
      {!errored && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          className="w-full h-full object-cover"
        />
      )}
      {errored && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Scale className="w-20 h-20 text-white/15" strokeWidth={1} />
        </div>
      )}
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* ── Component ────────────────────────────────────────────────────────── */

export function AboutContent() {
  return (
    <>
      {/* ════════════════ HERO (dark — keeps the transparent navbar visible) ════════════════ */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 overflow-hidden bg-[#022d54] bg-[radial-gradient(circle_at_top_left,#0a3d6d_0%,#022d54_55%,#021e3a_100%)]">
        {/* glow blobs */}
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[55%] bg-orange-500/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[45%] h-[55%] bg-indigo-500/15 rounded-full blur-[130px] pointer-events-none" />
        {/* grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-6">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-[11px] font-black uppercase tracking-[0.18em] text-white/90">
                  About Legal Door LLP
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6">
                Empowering Businesses,{' '}
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent italic">
                  Enabling Growth.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 mb-8">
                A leading <span className="text-orange-400 font-bold">Legal Tech-driven</span> professional
                services firm, founded in 2012 by Dr. Deepak Choudhary — helping startups, SMEs and
                corporations build successful, compliant and globally recognised brands.
              </p>

              {/* badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-9">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <Landmark className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-xs font-bold text-white/90">Govt. of India · MCA Registered</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <Trophy className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-xs font-bold text-white/90">100+ Awards &amp; Recognitions</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-black text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
                >
                  Talk to an Expert <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services/business-registration"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm backdrop-blur-xl hover:bg-white/15 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            {/* Right — image with floating stat cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="relative hidden lg:block"
            >
              <PhotoFrame
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1100&q=80"
                alt="Lady Justice — symbol of law and fairness at Legal Door LLP"
                className="rounded-[32px] aspect-[4/5] shadow-2xl ring-1 ring-white/10"
              />

              {/* floating card — top */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-6 top-10 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 max-w-[210px]"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-xl font-black text-slate-900 leading-none">20+</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Countries Served</p>
                </div>
              </motion.div>

              {/* floating card — bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-5 bottom-12 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 max-w-[220px]"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xl font-black text-slate-900 leading-none">10,000+</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Satisfied Clients</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════ ACHIEVEMENTS BAR ════════════════ */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="-mt-10 sm:-mt-14 relative z-20 rounded-[28px] sm:rounded-[36px] bg-white shadow-[0_24px_70px_rgba(2,45,84,0.14)] ring-1 ring-slate-100 px-6 sm:px-10 py-8 sm:py-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 divide-slate-100">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center"
                >
                  <p className="text-3xl sm:text-4xl font-black bg-gradient-to-br from-orange-500 to-pink-600 bg-clip-text text-transparent leading-none">
                    {a.value}
                  </p>
                  <p className="text-[12px] sm:text-sm font-black text-slate-900 mt-2">{a.label}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{a.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════ OUR STORY ════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* image */}
            <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="relative order-2 lg:order-1">
              <PhotoFrame
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1100&q=80"
                alt="Legal Door advisory in action"
                className="rounded-[32px] aspect-[5/4] shadow-2xl ring-1 ring-slate-100"
              />
              <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col items-center justify-center w-32 h-32 rounded-3xl bg-gradient-to-br from-[#022d54] to-[#0a3d6d] text-white shadow-2xl ring-4 ring-white">
                <span className="text-3xl font-black leading-none">12+</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/70 mt-1 text-center px-2">Years of Excellence</span>
              </div>
            </motion.div>

            {/* copy */}
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="order-1 lg:order-2 space-y-6">
              <div>
                <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-3">Who We Are</h4>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  One of India&apos;s fastest-growing{' '}
                  <span className="text-primary italic">Legal Tech</span> firms.
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Legal Door LLP was founded in 2012 by <strong className="text-slate-900">Dr. Deepak Choudhary</strong> —
                a renowned lawyer, entrepreneur and business strategist — with a vision to simplify legal and business
                processes. Since then, we have empowered entrepreneurs, startups, SMEs and corporations to achieve
                sustainable growth, profitability and long-term success.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We believe every business has the potential to become a recognised brand when supported by the right
                legal, financial and strategic guidance. As an organization approved and registered with the Government
                of India under the Ministry of Corporate Affairs (MCA), we combine legal expertise with innovative
                technology to deliver seamless, efficient and cost-effective solutions across diverse industries.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {differentiators.slice(0, 4).map((d) => (
                  <div key={d} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700 leading-snug">{d}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════ MISSION / VISION / APPROACH ════════════════ */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center mb-14">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-3">What Drives Us</h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Built on Purpose &amp; Principle
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-3xl p-8 shadow-sm ring-1 ring-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br shadow-lg', p.color)}>
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ WHAT WE DO ════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center mb-14">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-3">Our Expertise</h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              A Full Spectrum of Legal &amp; Business Services
            </h2>
            <p className="text-slate-500 leading-relaxed">
              From launching a new venture to expanding globally, our experienced professionals deliver practical,
              result-oriented solutions across every stage of your journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
              >
                <Link
                  href={s.href}
                  className="group flex flex-col h-full p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-slate-900 text-base mb-1.5">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-black text-primary uppercase tracking-wider mt-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ WHY LEGAL DOOR (dark) ════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28 bg-[#022d54] bg-[radial-gradient(circle_at_top_right,#0a3d6d_0%,#022d54_60%,#021e3a_100%)] relative overflow-hidden">
        <div className="absolute -top-16 -left-12 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* left — team */}
            <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
              <h4 className="text-orange-400 font-black uppercase tracking-[0.3em] text-[11px] mb-3">What Sets Us Apart</h4>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                One Multidisciplinary Team, Every Solution.
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                What truly sets Legal Door LLP apart is our team of highly qualified professionals working
                collaboratively under one roof — combining deep industry knowledge with a client-centric approach
                to help businesses navigate complexity while focusing on growth and innovation.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {team.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <t.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="font-black text-white text-sm">{t.label}</p>
                      <p className="text-[11px] text-slate-400 leading-snug mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* right — differentiator checklist */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[32px] bg-white/[0.04] border border-white/10 backdrop-blur-xl p-8 sm:p-10 shadow-2xl"
            >
              <h3 className="text-xl font-black text-white mb-6">Why clients choose us</h3>
              <ul className="space-y-4">
                {differentiators.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-200 font-medium leading-snug">{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════ MEET THE FOUNDER ════════════════ */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
            {/* photo */}
            <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="relative max-w-md mx-auto lg:mx-0 w-full">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-indigo-500/10 rounded-[40px] blur-2xl pointer-events-none" />
              <PhotoFrame
                src="/images/partner/deepak-choudhary.jpeg"
                alt="Dr. Deepak Choudhary, Founder of Legal Door LLP"
                className="relative rounded-[32px] aspect-[4/5] shadow-2xl ring-1 ring-slate-100"
              />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl ring-1 ring-slate-100 px-5 py-3 text-center whitespace-nowrap">
                <p className="font-black text-slate-900 text-sm">Dr. Deepak Choudhary</p>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-0.5">Founder &amp; Managing Partner</p>
              </div>
            </motion.div>

            {/* bio */}
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-6 pt-6 lg:pt-0">
              <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[11px]">Meet the Founder</h4>
              <Quote className="w-10 h-10 text-primary/20" />
              <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed">
                &ldquo;Every business has the potential to become a successful and recognised brand when supported by
                the right legal, financial and strategic guidance.&rdquo;
              </p>
              <p className="text-slate-600 leading-relaxed">
                A renowned lawyer, entrepreneur and business strategist, Dr. Deepak Choudhary established Legal Door LLP
                in 2012 with a single mission — to make legal and corporate services accessible, efficient and
                hassle-free. Under his leadership, the firm has grown into a globally trusted Legal Tech partner serving
                clients in 20+ countries, earning 100+ awards and the trust of over 10,000 businesses.
              </p>
              <div className="flex flex-wrap gap-6 pt-2">
                <div>
                  <p className="text-2xl font-black text-slate-900">2012</p>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Founded Legal Door</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">100+</p>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Awards Won</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">20+</p>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Countries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════ GLOBAL PRESENCE STRIP ════════════════ */}
      <section className="pb-4 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#0b1f3a] via-[#0e2747] to-[#15355f] px-8 sm:px-12 py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="absolute -top-12 -right-10 w-60 h-60 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-black uppercase tracking-[0.25em] text-[11px]">Global Reach</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight max-w-xl">
                A truly global legal &amp; business solutions partner.
              </h3>
            </div>
            <Link
              href="/services/global-business"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-black text-sm shadow-lg hover:-translate-y-0.5 transition-all shrink-0"
            >
              Explore Global Services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
