'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Briefcase,
  TrendingUp,
  GraduationCap,
  Globe,
  Heart,
  Clock,
  Award,
  Send,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ── Data ─────────────────────────────────────────────────────────────── */

const departments = ['All', 'Legal', 'Corporate', 'Taxation', 'Technology', 'Research'] as const;
type Department = (typeof departments)[number];

type Job = {
  title: string;
  dept: Exclude<Department, 'All'>;
  type: string;
  location: string;
  exp: string;
  desc: string;
};

const jobs: Job[] = [
  { title: 'Associate Advocate', dept: 'Legal', type: 'Full-time', location: 'New Delhi / Remote', exp: '2–4 yrs', desc: 'Drafting, litigation support and client advisory across civil and corporate matters.' },
  { title: 'Senior Corporate Lawyer', dept: 'Corporate', type: 'Full-time', location: 'Mumbai', exp: '6+ yrs', desc: 'Lead M&A, IPO and securities mandates for high-growth companies.' },
  { title: 'Tax Consultant (CA)', dept: 'Taxation', type: 'Contract', location: 'Remote', exp: '3–5 yrs', desc: 'Income-tax, GST and audit advisory for businesses, startups and NGOs.' },
  { title: 'Full Stack Developer', dept: 'Technology', type: 'Full-time', location: 'Bangalore / Remote', exp: '3–6 yrs', desc: 'Build our Legal Tech platform with Next.js, TypeScript and Node.' },
  { title: 'Company Secretary', dept: 'Corporate', type: 'Full-time', location: 'New Delhi', exp: '2–5 yrs', desc: 'ROC filings, board governance and end-to-end corporate compliance.' },
  { title: 'Legal Research Analyst', dept: 'Research', type: 'Full-time', location: 'Pune', exp: '1–3 yrs', desc: 'Case-law research, statutory tracking and knowledge management.' },
  { title: 'Product Designer (UI/UX)', dept: 'Technology', type: 'Full-time', location: 'Remote', exp: '2–4 yrs', desc: 'Design intuitive flows for clients navigating complex legal journeys.' },
];

const perks = [
  { icon: TrendingUp, title: 'Accelerated Growth', desc: 'Real ownership from day one and a clear path to lead practice areas and products.', color: 'from-orange-500 to-pink-600' },
  { icon: GraduationCap, title: 'Mentorship & Learning', desc: 'Learn directly from senior advocates, CAs and CS professionals under one roof.', color: 'from-indigo-500 to-blue-600' },
  { icon: Globe, title: 'Global Exposure', desc: 'Work on cross-border mandates spanning 20+ countries and diverse industries.', color: 'from-emerald-500 to-teal-600' },
  { icon: Clock, title: 'Flexible & Remote', desc: 'Hybrid and remote-friendly roles built around outcomes, not office hours.', color: 'from-violet-500 to-purple-600' },
  { icon: Heart, title: 'Wellbeing First', desc: 'Health cover, generous leave and a culture that respects your time off.', color: 'from-rose-500 to-red-600' },
  { icon: Award, title: 'Recognition & Rewards', desc: 'Performance-linked incentives and recognition for the work that moves the needle.', color: 'from-amber-500 to-orange-600' },
];

const steps = [
  { n: '01', title: 'Apply', desc: 'Share your application and resume — it takes a couple of minutes.' },
  { n: '02', title: 'Screening', desc: 'A short introductory call with our talent team to align on the role.' },
  { n: '03', title: 'Interviews', desc: 'Meet the team, discuss real problems and showcase your craft.' },
  { n: '04', title: 'Offer', desc: 'A clear offer and a warm welcome — let’s build together.' },
];

const heroStats = [
  { value: '100+', label: 'Professionals' },
  { value: '20+', label: 'Countries' },
  { value: '2012', label: 'Established' },
];

const deptStyles: Record<string, string> = {
  Legal: 'bg-orange-50 text-orange-600 ring-orange-100',
  Corporate: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
  Taxation: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
  Technology: 'bg-violet-50 text-violet-600 ring-violet-100',
  Research: 'bg-amber-50 text-amber-600 ring-amber-100',
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/* ── Component ────────────────────────────────────────────────────────── */

export function CareersContent() {
  const [active, setActive] = useState<Department>('All');
  const filtered = active === 'All' ? jobs : jobs.filter((j) => j.dept === active);

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
                  Careers at Legal Door
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6">
                Build the Future of{' '}
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent italic">
                  Law.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 mb-8">
                We are looking for brilliant minds to join our mission. At Legal Door you&apos;ll work
                at the intersection of <span className="text-orange-400 font-bold">high-stakes law</span> and
                cutting-edge technology — alongside lawyers, CAs and CS professionals under one roof.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-9">
                <Link
                  href="#openings"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-black text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
                >
                  View Openings <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#culture"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm backdrop-blur-xl hover:bg-white/15 transition-all"
                >
                  Our Culture
                </Link>
              </div>

              {/* inline stats */}
              <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl sm:text-3xl font-black text-white leading-none">{s.value}</p>
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — visual with floating cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[32px] aspect-[4/5] overflow-hidden shadow-2xl ring-1 ring-white/10 bg-gradient-to-br from-[#0a3d6d] via-[#022d54] to-[#021e3a]">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=80"
                  alt="A collaborative team at work at Legal Door"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021e3a] via-transparent to-transparent" />
              </div>

              {/* floating card — top */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -left-6 top-10 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3 max-w-[220px]"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-xl font-black text-slate-900 leading-none">{jobs.length} Roles</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Open Right Now</p>
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
                  <Globe className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xl font-black text-slate-900 leading-none">Hybrid</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Remote Friendly</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════ CULTURE / PERKS ════════════════ */}
      <section id="culture" className="relative bg-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center mb-14">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-4">Why Legal Door</h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              A place to do the{' '}
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent italic">
                best work of your life.
              </span>
            </h2>
            <p className="text-slate-500 font-medium mt-5 leading-relaxed">
              We blend deep legal expertise with technology and a genuinely supportive team. Here is what
              you can expect when you join us.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative p-7 rounded-[28px] bg-slate-50 border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500"
              >
                <div className={cn('w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br text-white shadow-lg', p.color)}>
                  <p.icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">{p.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ OPEN POSITIONS ════════════════ */}
      <section id="openings" className="relative bg-slate-50 py-20 sm:py-24 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
              <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-4">Join the team</h4>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Current Openings
              </h2>
            </motion.div>

            {/* department filter */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
              {departments.map((d) => {
                const count = d === 'All' ? jobs.length : jobs.filter((j) => j.dept === d).length;
                const isActive = active === d;
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setActive(d)}
                    className={cn(
                      'inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-black uppercase tracking-wider transition-all duration-200',
                      isActive
                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/15'
                        : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-slate-800',
                    )}
                  >
                    {d}
                    <span className={cn('text-[10px] px-1.5 py-0.5 rounded-full', isActive ? 'bg-white/20' : 'bg-slate-100 text-slate-400')}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* job list */}
            <div className="space-y-4">
              {filtered.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group flex flex-col md:flex-row md:items-center gap-6 p-6 sm:p-7 bg-white rounded-[28px] border border-slate-100 hover:border-primary/40 hover:shadow-2xl hover:shadow-slate-200/70 transition-all duration-400"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                      <span className={cn('text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ring-1', deptStyles[job.dept])}>
                        {job.dept}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                        <Clock className="w-3.5 h-3.5" /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                        <Briefcase className="w-3.5 h-3.5" /> {job.exp}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-primary transition-colors tracking-tight">
                      {job.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium mt-1.5 leading-relaxed">{job.desc}</p>
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[12px] mt-3">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      {job.location}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 text-white font-black text-[12px] uppercase tracking-widest group-hover:bg-primary transition-colors shrink-0 whitespace-nowrap"
                  >
                    Apply Now
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-slate-400 font-bold py-10">No openings in this team right now — check back soon.</p>
            )}
          </div>
        </div>
      </section>

      {/* ════════════════ HIRING PROCESS ════════════════ */}
      <section className="relative bg-white py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center mb-14">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-4">How we hire</h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              A simple, respectful process.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative p-7 rounded-[28px] bg-slate-50 border border-slate-100"
              >
                <span className="text-4xl font-black bg-gradient-to-br from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  {s.n}
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-3 mb-2 tracking-tight">{s.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 text-slate-300" />
                )}
              </motion.div>
            ))}
          </div>

          {/* open application */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mt-16 rounded-[32px] p-8 sm:p-10 bg-[#022d54] bg-[radial-gradient(circle_at_top_right,#0a3d6d_0%,#022d54_60%,#021e3a_100%)] relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-orange-500/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Send className="w-6 h-6 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-1.5">
                  Don&apos;t see the right role?
                </h3>
                <p className="text-slate-300 font-medium text-sm leading-relaxed">
                  We&apos;re always glad to meet exceptional lawyers, CAs, CS professionals and engineers.
                  Send us your resume and we&apos;ll reach out when something fits.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-black text-sm hover:bg-slate-100 hover:-translate-y-0.5 transition-all shrink-0"
              >
                Send Your Resume <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
