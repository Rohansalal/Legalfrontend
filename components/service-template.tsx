'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  UserCheck, 
  FileText, 
  Zap,
  HelpCircle,
  Plus,
  Minus,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { TrustSection } from '@/components/trust-section';
import { Star } from 'lucide-react';
import { FloatingIcons } from '@/components/floating-icons';

interface ServiceTemplateProps {
  // Hero
  title: string;
  description: string;
  heroBadges: string[];
  // Intro Section
  introTitle: string;
  introContent: React.ReactNode;
  // Top Details
  detailsTitle: string;
  details: { title: string; desc: string; icon: any }[];
  // Requirements
  requirementsTitle?: string;
  requirements: string[];
  // Process
  processTitle: string;
  processIntro: string;
  processSteps: { title: string; desc: string; icon: any }[];
  processOutro: string;
  // Documents
  documentsTitle?: string;
  documents: { category: string; list: string[] }[];
  // Compliance
  complianceTitle?: string;
  compliance: { title: string; desc: string }[];
  // FAQs
  faqTitle?: string;
  faqSubtitle?: string;
  faqs: { q: string; a: string }[];
}

export function ServiceTemplate({
  title,
  description,
  heroBadges,
  introTitle,
  introContent,
  detailsTitle,
  details,
  requirementsTitle = "Eligibility & Requirements",
  requirements,
  processTitle,
  processIntro,
  processSteps,
  processOutro,
  documentsTitle = "Documents Required",
  documents,
  complianceTitle = "Post-Registration Compliance",
  compliance,
  faqTitle = "Common Questions",
  faqSubtitle = "Everything you need to know",
  faqs
}: ServiceTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white font-sans antialiased relative overflow-hidden">
      {/* Background Floating Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4]">
        <FloatingIcons />
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10">
        {/* 1. HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#022d54] bg-[radial-gradient(circle_at_top,#0a3d6d_0%,#022d54_50%,#0a3d6d_100%)]">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left w-full">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-black text-white leading-[1.1] mb-4 sm:mb-6 tracking-tight"
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                {description}
              </motion.p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12">
                {heroBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                    <span className="text-white text-[10px] sm:text-xs font-black uppercase tracking-wider">{badge}</span>
                  </div>
                ))}
              </div>

              {/* Premium Trust Cards */}
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <img src="https://www.google.com/favicon.ico" alt="G" className="w-3 h-3" />
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 fill-[#FBBC05] text-[#FBBC05]" />)}
                    </div>
                  </div>
                  <p className="text-white font-black text-[11px]">4.9/5 Google Reviews</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-tighter">2,450+ Verified Users</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 bg-[#00b67a] flex items-center justify-center rounded-[2px]">
                      <Star className="w-2 h-2 fill-white text-white" />
                    </div>
                    <p className="text-white font-black text-[9px] uppercase tracking-tighter">Excellent Trustpilot</p>
                  </div>
                  <p className="text-white font-black text-[11px]">TrustScore 4.8</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-tighter">1.2k+ Reviews</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-black text-[9px] uppercase tracking-tighter">Clutch</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 fill-[#da291c] text-[#da291c]" />)}
                    </div>
                  </div>
                  <p className="text-white font-black text-[11px]">Top Legal Firm 2024</p>
                  <p className="text-white/40 text-[9px] font-bold uppercase tracking-tighter">5.0/5 Clutch Rating</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-md bg-white rounded-3xl sm:rounded-[2rem] lg:rounded-[2.5rem] p-5 sm:p-6 lg:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)] border border-white/10"
            >
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1.5 sm:mb-2 tracking-tight text-center">Get Free Consultation</h3>
              <p className="text-xs sm:text-sm text-slate-500 font-bold text-center mb-6 sm:mb-8">Fill the form and our experts will call you.</p>
              <form className="space-y-3 sm:space-y-4">
                <Input placeholder="Full Name" className="h-11 sm:h-12 rounded-xl bg-slate-50 border-slate-100 font-bold" />
                <Input placeholder="Email Address" type="email" className="h-11 sm:h-12 rounded-xl bg-slate-50 border-slate-100 font-bold" />
                <Input placeholder="Phone Number" type="tel" inputMode="tel" className="h-11 sm:h-12 rounded-xl bg-slate-50 border-slate-100 font-bold" />
                <Input placeholder="City" className="h-11 sm:h-12 rounded-xl bg-slate-50 border-slate-100 font-bold" />
                <Button className="w-full h-12 sm:h-14 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 text-white font-black text-sm sm:text-base lg:text-lg shadow-xl shadow-orange-500/20 hover:scale-[1.02] transition-transform">
                  Secure Your Call
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1.5 INTRO SECTION (What is...) */}
      <section className="py-14 sm:py-20 md:py-24 bg-white border-b border-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-start">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl sm:rounded-3xl bg-primary/5 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {introTitle}
              </h2>
              <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                {introContent}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reviews Section */}
      <TrustSection />

      {/* 2. PROCESS DETAILS SECTION */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#FDFDFD]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{detailsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
            {details.map((item, i) => (
              <div key={i} className="p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[24px] lg:rounded-[32px] bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-50 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REQUIREMENTS SECTION */}
      <section className="py-14 sm:py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl sm:rounded-[36px] lg:rounded-[48px] p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl border border-slate-100">
            <h2 className="text-2xl xs:text-3xl font-black text-slate-900 mb-8 sm:mb-10 md:mb-12 text-center">{requirementsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-3 sm:gap-y-4 md:gap-y-6">
              {requirements.map((req, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/50 border border-slate-50">
                  <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-700">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="py-14 sm:py-20 md:py-24 bg-white relative overflow-hidden border-t border-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              {processTitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              {processIntro}
            </p>
          </div>
          
          <div className="space-y-0 relative">
            <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-slate-100 hidden sm:block" />
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-0 sm:pl-20 pb-12 last:pb-0 group"
              >
                <div className="hidden sm:flex absolute left-0 top-0 w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 items-center justify-center transition-all duration-500 group-hover:bg-slate-900 group-hover:border-slate-900 shadow-sm group-hover:shadow-xl">
                  <span className="text-lg font-black text-slate-400 group-hover:text-white transition-colors">
                    {i + 1}
                  </span>
                </div>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-0 transition-all">
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 flex items-center gap-2.5 sm:gap-3 leading-tight">
                    <span className="sm:hidden w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center text-[10px] font-black shrink-0">
                      {i + 1}
                    </span>
                    <span className="min-w-0">Step {i + 1}: {step.title}</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12 md:mt-16 bg-slate-50 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-[24px] md:rounded-[32px] border border-slate-100"
          >
            <div className="flex gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-bold leading-relaxed italic">
                {processOutro}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. DOCUMENTS SECTION */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-10 sm:mb-12 md:mb-16 text-center">{documentsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {documents.map((doc, i) => (
              <div key={i} className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[28px] lg:rounded-[40px] shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-5 sm:mb-6 lg:mb-8">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 leading-tight uppercase tracking-tight">{doc.category}</h4>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {doc.list.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPLIANCE SECTION */}
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl sm:rounded-[36px] lg:rounded-[48px] p-6 sm:p-8 md:p-10 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary/20 blur-[100px] rounded-full" />
            <h2 className="text-2xl xs:text-3xl font-black mb-8 sm:mb-10 md:mb-12 relative z-10">{complianceTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 relative z-10">
              {compliance.map((item, i) => (
                <div key={i} className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-left">
                  <h4 className="font-black text-orange-500 text-xs sm:text-sm mb-1.5 sm:mb-2 uppercase tracking-widest">{item.title}</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight">{faqTitle}</h2>
            <p className="text-sm sm:text-base text-slate-500 font-bold">{faqSubtitle}</p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl sm:rounded-[24px] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 md:p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-black text-slate-900 text-sm sm:text-base leading-snug">{faq.q}</span>
                  {openFaq === i ? <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 sm:p-5 md:p-6 pt-3 sm:pt-4 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed border-t border-slate-50 bg-slate-50/30">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}
