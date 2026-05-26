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
  CheckCircle2,
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
      { title: 'Private Limited Registration', href: '/services/business-registration/company-registration/private-limited-company', icon: ShieldCheck },
      { title: 'Trademark Registration', href: '/services/business-registration/company-name-search/trademark-name-search', icon: ShieldCheck },
      { title: 'Founders Agreement', href: '/services/documentation/business-documents/founder-agreement', icon: FileCheck }
    ]
  },
  { 
    id: 'business-growth', 
    label: 'Business Growth', 
    icon: TrendingUp,
    description: 'Scale your operations globally and securely.',
    subServices: [
      { title: 'Startup India Registration', href: '/services/business-registration/company-registration/startup-india-registration', icon: Zap },
      { title: 'Import Export Code (IEC)', href: '/services/business-registration/licenses-and-registrations/import-export-code', icon: Globe },
      { title: 'ISO Certification', href: '/services/business-registration/licenses-and-registrations/iso-certification', icon: Award }
    ]
  },
  { 
    id: 'global-services',
    label: 'Global Services',
    icon: Globe,
    description: 'International legal solutions for businesses expanding worldwide.',
    subServices: [
      { 
        title: 'Company Registration - Americas', 
        href: '/services/global-business/company-registration/americas', 
        icon: Building2 
      },
      { 
        title: 'Company Registration - Europe', 
        href: '/services/global-business/company-registration/europe', 
        icon: Building2 
      },
      { 
        title: 'Company Registration - Asia-Pacific', 
        href: '/services/global-business/company-registration/asia-pacific', 
        icon: Building2 
      },
      { 
        title: 'Company Registration - UAE & Middle East', 
        href: '/services/global-business/company-registration/uae-middle-east', 
        icon: Building2 
      },
      { 
        title: 'Company Registration - Offshore Jurisdictions', 
        href: '/services/global-business/company-registration/offshore', 
        icon: Building2 
      },
      { 
        title: 'Global Compliance & FEMA', 
        href: '/services/global-business/global-compliance', 
        icon: ShieldCheck 
      },
      { 
        title: 'Global Banking & Treasury', 
        href: '/services/global-business/global-banking', 
        icon: Calculator 
      },
      { 
        title: 'Cross-Border Expansion Strategy', 
        href: '/services/global-business/global-expansion', 
        icon: TrendingUp 
      },
      { 
        title: 'Educational Institution Setup', 
        href: '/services/global-business/educational-law/institutional', 
        icon: Award 
      },
      { 
        title: 'Legal Exam Coaching', 
        href: '/services/global-business/educational-law/courses', 
        icon: FileCheck 
      },
      { 
        title: 'Student Visa & Immigration Services', 
        href: '/services/global-business/educational-law/counseling-admission', 
        icon: Users 
      }
    ]
  },
  { 
    id: 'compliance', 
    label: 'Compliance', 
    icon: FileCheck,
    description: 'Stay regulated with zero administrative friction.',
    subServices: [
      { title: 'GST Registration', href: '/services/business-registration/licenses-and-registrations/gst-registration', icon: Calculator },
      { title: 'Professional Tax', href: '/services/business-registration/licenses-and-registrations/professional-tax', icon: Landmark },
      { title: 'Annual ROC Filing', href: '#', icon: Building2 }
    ]
  },
  { 
    id: 'dispute-resolution', 
    label: 'Dispute Resolution', 
    icon: Gavel,
    description: 'Expert legal defense and conflict management.',
    subServices: [
      { title: 'Legal Notice Response', href: '/services/lawyer-services/legal-notices', icon: MessageSquare },
      { title: 'Civil Litigation Support', href: '/services/lawyer-services/court-support', icon: Gavel },
      { title: 'Consumer Court Case', href: '#', icon: Gavel }
    ]
  },
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

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] uppercase tracking-wider mb-3 sm:mb-4"
            >
              <Sparkles className="w-3 h-3" />
              Trusted Legal Expertise
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl 3xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]"
            >
              Most Popular <br />
              <span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent italic">Offerings.</span>
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services/business-registration"
              className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 text-slate-900 font-black text-xs sm:text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-slate-200"
            >
              Show More
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Categories Navigation — horizontal scroll on mobile, wrap on desktop */}
        <div className="mb-8 sm:mb-10 md:mb-12 -mx-4 sm:mx-0">
          <div className="flex md:flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl sm:rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 max-w-fit overflow-x-auto md:overflow-visible custom-scrollbar mx-4 sm:mx-auto md:mx-0 snap-x snap-mandatory">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-xl sm:rounded-[1.5rem] font-black text-[11px] sm:text-[12px] md:text-[13px] transition-all duration-500 shrink-0 snap-start whitespace-nowrap",
                  activeTab === cat.id
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-900"
                )}
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-slate-900 rounded-xl sm:rounded-[1.5rem] shadow-lg shadow-slate-900/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  <cat.icon className={cn("w-3.5 h-3.5 sm:w-4 sm:h-4", activeTab === cat.id ? "text-primary-foreground" : "text-slate-400")} strokeWidth={2.5} />
                  {cat.label}
                </span>
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
              {activeData?.subServices.map((service, i) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={service.title}
                  className="group"
                >
                  <Link
                    href={service.href}
                    className="relative block h-full p-5 sm:p-6 md:p-7 lg:p-8 bg-white border border-slate-200 rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] transition-all duration-500 hover:bg-[#022d54] hover:border-[#022d54] shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(2,45,84,0.3)] group-hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Icon Container */}
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl lg:rounded-[1.5rem] bg-[#022d54] flex items-center justify-center mb-5 sm:mb-6 lg:mb-8 group-hover:bg-white transition-all duration-500 shadow-xl group-hover:shadow-white/10">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:text-[#022d54] transition-colors duration-500" strokeWidth={1.5} />

                      {/* Floating Badge on Icon */}
                      <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500 border-[3px] border-white group-hover:border-white/20 flex items-center justify-center transition-colors duration-500">
                        <CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />
                      </div>
                    </div>

                    <div className="relative">
                      <h5 className="text-base sm:text-lg lg:text-xl font-bold text-[#022d54] mb-3 sm:mb-4 leading-tight group-hover:text-white transition-colors duration-500">{service.title}</h5>

                      <div className="flex items-center gap-2 mb-6 sm:mb-8 lg:mb-10">
                        <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-400 transition-all duration-500">
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider">Verified Legal Path</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-black text-[#022d54] uppercase tracking-[0.15em] sm:tracking-[0.2em] group-hover:text-white transition-colors duration-500">
                          Learn More
                        </span>
                        <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#022d54] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#022d54] transition-all duration-500 shadow-lg">
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
