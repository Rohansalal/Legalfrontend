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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Most Popular <span className="text-primary italic">Offerings.</span>
          </motion.h3>
        </div>

        {/* Categories Navigation - Pill Style with 'Show More' */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-full font-black text-[13px] transition-all duration-300 border relative",
                  activeTab === cat.id 
                    ? "bg-slate-900 text-white border-transparent shadow-xl shadow-slate-200" 
                    : "bg-white border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
                )}
              >
                <cat.icon className="w-4 h-4" strokeWidth={2} />
                {cat.label}
              </button>
            ))}
          </div>
          
          <Link 
            href="/services/business-registration" 
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-black text-[12px] uppercase tracking-wider hover:bg-slate-900 transition-all shadow-lg shadow-primary/20 ml-2"
          >
            Show More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Sub-Services Grid - Limited to 3 */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {activeData?.subServices.map((service, i) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  key={service.title}
                >
                  <Link 
                    href={service.href}
                    className="group h-full flex flex-col p-8 bg-white border border-slate-100 rounded-[32px] hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-blue-600 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/30">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h5 className="text-lg font-black text-slate-900 mb-3 leading-tight group-hover:text-primary transition-colors">{service.title}</h5>
                    <p className="text-[11px] text-primary font-black uppercase tracking-widest mb-6 opacity-70 group-hover:opacity-100 transition-opacity">Verified Legal Path</p>
                    <div className="mt-auto flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.2em]">
                      Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
