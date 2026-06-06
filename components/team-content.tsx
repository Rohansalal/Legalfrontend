'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Mail,
  Scale,
  Calculator,
  FileCheck,
  Briefcase,
  ArrowRight,
  Sparkles,
  Quote,
  Users,
} from 'lucide-react';
import { PostImage } from '@/components/post-image';

const portrait = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&q=80`;

const stats = [
  { value: '100+', label: 'Professionals' },
  { value: '500+', label: 'MCA Certified Experts' },
  { value: '20+', label: 'Countries Served' },
  { value: '12+', label: 'Years of Excellence' },
];

const leader = {
  name: 'Dr. Deepak Choudhary',
  role: 'Founder & Managing Partner',
  image: '/images/partner/deepak-choudhary.jpeg',
  quote:
    'Every business has the potential to become a successful and recognised brand when supported by the right legal, financial and strategic guidance.',
  bio: 'A renowned lawyer, entrepreneur and business strategist, Dr. Deepak Choudhary founded Legal Door LLP in 2012 with a mission to make legal and corporate services accessible, efficient and hassle-free. He leads a multidisciplinary team serving clients across 20+ countries.',
};

const team = [
  { name: 'Dr. Vikram Sethi', role: 'Chief Legal Officer', expert: 'Corporate Law', image: portrait('1519085360753-af0119f7cbe7') },
  { name: 'Ananya Sharma', role: 'Principal Consultant', expert: 'International Setup', image: portrait('1573496359142-b8d87734a5a2') },
  { name: 'Rajesh Khanna', role: 'Head of Taxation', expert: 'GST & Compliance', image: portrait('1560250097-0b93528c311a') },
  { name: 'Siddharth Roy', role: 'Head of R&D', expert: 'Legal Tech', image: portrait('1633332755192-727a05c4013d') },
  { name: 'Meera Deshmukh', role: 'Lead Advocate', expert: 'Dispute Resolution', image: portrait('1580489944761-15a19d654956') },
  { name: 'Amit Verma', role: 'Senior Partner', expert: 'Property Laws', image: portrait('1472099645785-5658abf4ff4e') },
];

const disciplines = [
  { icon: Scale, label: 'Lawyers', desc: 'Litigation & advisory specialists across every practice area.' },
  { icon: Calculator, label: 'Chartered Accountants', desc: 'Tax, audit and financial strategy for businesses of all sizes.' },
  { icon: FileCheck, label: 'Company Secretaries', desc: 'Corporate governance, ROC and statutory compliance experts.' },
  { icon: Briefcase, label: 'Financial Experts', desc: 'Funding, structuring and growth advisory for ambitious founders.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function TeamContent() {
  return (
    <>
      {/* ════════════ HERO (dark — keeps the transparent navbar visible) ════════════ */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-28 sm:pb-32 overflow-hidden bg-[#022d54] bg-[radial-gradient(circle_at_top,#0a3d6d_0%,#022d54_55%,#021e3a_100%)]">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[55%] h-[60%] bg-orange-500/12 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-6">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-white/90">Our People</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6">
              The Experts Behind{' '}
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent italic">
                Legal Door.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
              A multidisciplinary team of lawyers, Chartered Accountants, company secretaries and financial experts —
              working together to deliver practical, result-oriented solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════ STAT STRIP ════════════ */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="-mt-12 sm:-mt-16 relative z-20 rounded-[28px] sm:rounded-[36px] bg-white shadow-[0_24px_70px_rgba(2,45,84,0.14)] ring-1 ring-slate-100 px-6 sm:px-10 py-8 sm:py-10"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center"
                >
                  <p className="text-3xl sm:text-4xl font-black bg-gradient-to-br from-orange-500 to-pink-600 bg-clip-text text-transparent leading-none">
                    {s.value}
                  </p>
                  <p className="text-[11px] sm:text-sm font-black text-slate-900 mt-2">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ LEADERSHIP SPOTLIGHT ════════════ */}
      <section className="py-20 sm:py-24 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="relative max-w-md mx-auto lg:mx-0 w-full">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-indigo-500/10 rounded-[40px] blur-2xl pointer-events-none" />
              <PostImage
                src={leader.image}
                alt={`${leader.name}, ${leader.role}`}
                className="relative rounded-[32px] aspect-[4/5] shadow-2xl ring-1 ring-slate-100"
              />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl ring-1 ring-slate-100 px-5 py-3 text-center whitespace-nowrap">
                <p className="font-black text-slate-900 text-sm">{leader.name}</p>
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-0.5">{leader.role}</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-6 pt-6 lg:pt-0">
              <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[11px]">Leadership</h4>
              <Quote className="w-10 h-10 text-primary/20" />
              <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed">&ldquo;{leader.quote}&rdquo;</p>
              <p className="text-slate-600 leading-relaxed">{leader.bio}</p>
              <div className="flex items-center gap-3 pt-2">
                <Link href="/contact" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ TEAM GRID ════════════ */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center mb-14">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-3">Core Team</h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Specialists You Can Trust
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden mb-5 shadow-sm ring-1 ring-slate-100">
                  <PostImage src={member.image} alt={`${member.name}, ${member.role}`} className="absolute inset-0 w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <Link href="/contact" aria-label={`${member.name} on LinkedIn`} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </Link>
                    <Link href="/contact" aria-label={`Email ${member.name}`} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-primary hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="px-1">
                  <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">{member.role}</p>
                  <p className="text-xs text-slate-400 font-bold">Expertise: {member.expert}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ DISCIPLINES ════════════ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto text-center mb-14">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-3">Under One Roof</h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Four Disciplines, One Team
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {disciplines.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#022d54] to-[#0a3d6d] flex items-center justify-center mb-5 shadow-lg">
                  <d.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-black text-slate-900 text-base mb-2">{d.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ JOIN THE TEAM ════════════ */}
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
                <Users className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-black uppercase tracking-[0.25em] text-[11px]">Careers</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight max-w-xl">
                Want to build the future of legal services with us?
              </h3>
            </div>
            <Link
              href="/careers"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-black text-sm shadow-lg hover:-translate-y-0.5 transition-all shrink-0"
            >
              View Open Roles <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
