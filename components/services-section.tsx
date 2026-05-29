'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  Scale, 
  TrendingUp, 
  FileCheck, 
  Gavel, 
  ArrowRight,
  Sparkles,
  FileText, 
  Zap, 
  Globe, 
  Award, 
  Landmark, 
  Calculator, 
  Building2, 
  MessageSquare, 
  Home 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const categories = [
  {
    id: 'legal-solutions',
    label: 'Legal Solutions',
    icon: Scale,
    description: 'Foundational legal structures for your venture.',
    subServices: [
      { title: 'Private Limited Registration', desc: 'Launch your company with India’s most trusted corporate structure.', href: '/services/business-registration/company-registration/private-limited-company', icon: ShieldCheck },
      { title: 'Trademark Registration', desc: 'Protect your brand name and logo with a registered trademark.', href: '/services/lawyer-services/ipr-services/trademark/registration', icon: ShieldCheck },
      { title: 'Founders Agreement', desc: 'Define roles, equity and exits before they ever become disputes.', href: '/services/documentation/business-corporate/joint-venture-agreement', icon: FileCheck }
    ]
  },
  {
    id: 'business-growth',
    label: 'Business Growth',
    icon: TrendingUp,
    description: 'Scale your operations globally and securely.',
    subServices: [
      { title: 'Startup India Registration', desc: 'Unlock tax benefits and DPIIT recognition for your startup.', href: '/services/business-registration/other-registration/startup-india-registration', icon: Zap },
      { title: 'Import Export Code (IEC)', desc: 'Get the IEC you need to trade across international borders.', href: '/services/business-registration/other-registration/import-export-code', icon: Globe },
      { title: 'ISO Certification', desc: 'Build credibility with globally recognised quality standards.', href: '/services/compliances/certification/iso-certification', icon: Award }
    ]
  },
  {
    id: 'global-services',
    label: 'Global Services',
    icon: Globe,
    description: 'International legal solutions for businesses expanding worldwide.',
    subServices: [
      { title: 'Company Registration — Americas', desc: 'Form a US LLC or Corporation and reach the world’s largest market.', href: '/services/global-business/americas', icon: Globe },
      { title: 'Company Registration — Europe', desc: 'UK Ltd, German GmbH, Dutch BV and more across the EU.', href: '/services/global-business/europe', icon: Landmark },
      { title: 'Company Registration — Asia-Pacific', desc: 'Set up in Singapore, Hong Kong, India, Australia and beyond.', href: '/services/global-business/asia-pacific', icon: Building2 },
      { title: 'Company Registration — Middle East', desc: 'UAE free zones and GCC mainland with 100% ownership.', href: '/services/global-business/middle-east', icon: ShieldCheck },
      { title: 'Company Registration — Offshore', desc: 'Tax-neutral BVI, Cayman and Caribbean holding structures.', href: '/services/global-business/offshore', icon: ShieldCheck },
    ]
  },
  {
    id: 'compliance',
    label: 'Compliance',
    icon: FileCheck,
    description: 'Stay regulated with zero administrative friction.',
    subServices: [
      { title: 'GST Registration', desc: 'Register for GST quickly and stay compliant from day one.', href: '/services/business-registration/company-registration/gst-registration', icon: Calculator },
      { title: 'Professional Tax', desc: 'Hassle-free professional tax registration and filing.', href: '/services/business-registration/taxation', icon: Landmark },
      { title: 'Annual ROC Filing', desc: 'Keep your company in good standing with timely ROC filings.', href: '/services/compliances/company-compliances/annual-pvt-ltd', icon: Building2 }
    ]
  },
  {
    id: 'dispute-resolution',
    label: 'Dispute Resolution',
    icon: Gavel,
    description: 'Expert legal defense and conflict management.',
    subServices: [
      { title: 'Legal Notice Response', desc: 'Respond to or send legal notices with expert drafting.', href: '/services/lawyer-services/legal-notice', icon: MessageSquare },
      { title: 'Civil Litigation Support', desc: 'End-to-end representation for civil disputes and suits.', href: '/services/lawyer-services/litigation', icon: Gavel },
      { title: 'Consumer Court Case', desc: 'Fight unfair practices with strong consumer court support.', href: '/services/lawyer-services/consumer-complaint', icon: Gavel }
    ]
  },
];

/* Soft pastel icon palette rotated across cards (reference design). */
const ICON_STYLES = [
  { bg: 'bg-emerald-100', fg: 'text-emerald-600' },
  { bg: 'bg-blue-100', fg: 'text-blue-600' },
  { bg: 'bg-orange-100', fg: 'text-orange-600' },
  { bg: 'bg-violet-100', fg: 'text-violet-600' },
  { bg: 'bg-rose-100', fg: 'text-rose-600' },
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const activeData = categories.find(c => c.id === activeTab);

  return (
    <section id="services" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-[#f8fafc] relative overflow-hidden">
      {/* Top Transition Gradient */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#022d54] to-transparent pointer-events-none opacity-20" />

      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header — centered */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3 h-3" />
            Trusted Legal Expertise
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-[#022d54] tracking-tight leading-[1.1]"
          >
            Smart Solutions for{' '}
            <span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">Modern Businesses</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed mt-5"
          >
            All-in-one platform for online legal consultation, business incorporation, corporate
            compliance and startup-friendly solutions — tailored for every industry.
          </motion.p>
        </div>

        {/* Categories Navigation — centered underline tabs (scrollable on mobile) */}
        <div className="mb-10 sm:mb-14 -mx-4 sm:mx-0">
          <div className="flex md:justify-center items-center gap-x-6 sm:gap-x-9 overflow-x-auto custom-scrollbar border-b border-slate-200 px-4 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "relative shrink-0 whitespace-nowrap pb-4 text-[13px] sm:text-[15px] font-bold transition-colors duration-300",
                  activeTab === cat.id ? "text-primary" : "text-slate-500 hover:text-slate-900"
                )}
              >
                {cat.label}
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeServiceTab"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Sub-Services Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
            >
              {activeData?.subServices.map((service, i) => {
                const style = ICON_STYLES[i % ICON_STYLES.length];
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    key={service.title}
                    className="group h-full"
                  >
                    <Link
                      href={service.href}
                      className="relative flex flex-col h-full p-6 sm:p-7 lg:p-8 bg-white border border-slate-200/80 rounded-3xl shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h5 className="text-lg sm:text-xl font-bold text-[#022d54] leading-snug">{service.title}</h5>
                        <div className={cn("w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110", style.bg)}>
                          <service.icon className={cn("w-5 h-5 sm:w-6 sm:h-6", style.fg)} strokeWidth={2} />
                        </div>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-1">{service.desc}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                        Know More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View all services */}
        <div className="flex justify-center mt-12 sm:mt-14">
          <Link
            href="/services/business-registration"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#022d54] text-white font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300 shadow-lg"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
