'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Plus,
  Minus,
  FileText,
  Phone,
  Sparkles,
  Star,
  ShieldCheck,
  Scale,
  AlertTriangle,
  BookOpen,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export interface ServiceContent {
  title: string;
  description: string;
  // SEO
  keywords?: string[];
  // Core content
  overview: string;
  whyChooseUs?: { title: string; desc: string }[];
  keyPoints: string[];
  process: { title: string; desc: string }[];
  documents?: string[];
  statutoryRefs?: { name: string; desc: string }[];
  pitfalls?: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedServices?: { name: string; href: string }[];
}

export interface LeafServicePageProps extends ServiceContent {
  breadcrumbs: { name: string; href?: string }[];
}

export function LeafServicePage({
  breadcrumbs,
  title,
  description,
  overview,
  whyChooseUs,
  keyPoints,
  process,
  documents,
  statutoryRefs,
  pitfalls,
  faqs,
  relatedServices,
}: LeafServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Schema.org JSON-LD
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: title,
    description,
    provider: {
      '@type': 'LegalService',
      name: 'Legal Door',
      url: 'https://legaldoor.in',
      areaServed: 'IN',
    },
    serviceType: title,
    areaServed: { '@type': 'Country', name: 'India' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: c.href } : {}),
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Schemas for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#022d54] bg-[radial-gradient(circle_at_top,#0a3d6d_0%,#022d54_60%,#0a3d6d_100%)]">
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-white/60 mb-8 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-orange-400 transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.name}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="w-3 h-3" />}
              </span>
            ))}
          </nav>

          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight"
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-300 max-w-2xl font-medium leading-relaxed mb-8"
              >
                {description}
              </motion.p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span className="text-white text-xs font-black uppercase tracking-wider">Expert Lawyers</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span className="text-white text-xs font-black uppercase tracking-wider">Confidential</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span className="text-white text-xs font-black uppercase tracking-wider">PAN India</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                  <span className="text-white text-xs font-black uppercase tracking-wider">4.9/5 Reviews</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 text-white font-black text-sm shadow-xl hover:scale-[1.02] transition-transform"
                >
                  <Phone className="w-4 h-4" /> Talk to a Lawyer
                </Link>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-sm hover:bg-white/10 transition-colors"
                >
                  How It Works <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Lead form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:max-w-md bg-white rounded-[2rem] p-8 shadow-2xl border border-white/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="text-xs font-black uppercase tracking-widest text-orange-500">Free Consultation</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Get Expert Legal Help</h2>
              <p className="text-sm text-slate-500 font-bold mb-6">Share your details — our specialist will call you back.</p>
              <form className="space-y-3">
                <Input placeholder="Full Name" className="h-12 rounded-xl bg-slate-50 border-slate-100 font-bold" />
                <Input placeholder="Phone Number" className="h-12 rounded-xl bg-slate-50 border-slate-100 font-bold" />
                <Input placeholder="Email Address" className="h-12 rounded-xl bg-slate-50 border-slate-100 font-bold" />
                <Input placeholder="City" className="h-12 rounded-xl bg-slate-50 border-slate-100 font-bold" />
                <Button className="w-full h-12 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-sm">
                  Request Callback
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
              <span className="text-xs font-black uppercase tracking-widest text-primary mb-3 block">Overview</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Understanding {title}
              </h2>
            </div>
            <div className="md:w-2/3 text-slate-600 font-medium leading-relaxed text-base md:text-lg whitespace-pre-line">
              {overview}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us (optional) */}
      {whyChooseUs && whyChooseUs.length > 0 && (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-orange-400 mb-3 block">Why Legal Door</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Built for Outcomes, Trusted Pan-India</h2>
              <p className="text-slate-400 font-medium max-w-2xl mx-auto">
                Specialist lawyers, transparent pricing and end-to-end execution from first call to final order.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-orange-400" />
                  </div>
                  <h4 className="font-black text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Points */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-primary mb-3 block">What We Cover</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">Key Highlights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-shadow"
                >
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-primary mb-3 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">How We Help You</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              A straightforward, transparent path from first call to resolution.
            </p>
          </div>

          <div className="space-y-0 relative">
            <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-slate-100 hidden sm:block" />
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-0 sm:pl-20 pb-10 last:pb-0 group"
              >
                <div className="hidden sm:flex absolute left-0 top-0 w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 items-center justify-center transition-all group-hover:bg-slate-900 group-hover:border-slate-900">
                  <span className="text-lg font-black text-slate-400 group-hover:text-white transition-colors">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 flex items-center gap-3">
                  <span className="sm:hidden w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-xs font-black shrink-0">
                    {i + 1}
                  </span>
                  {step.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents (optional) */}
      {documents && documents.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-primary block">Checklist</span>
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900">Documents Required</h2>
                </div>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm font-bold text-slate-600 leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Statutory References (optional) */}
      {statutoryRefs && statutoryRefs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-primary mb-3 block">Legal Framework</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Applicable Laws & Regulations</h2>
              <p className="text-slate-600 font-medium leading-relaxed max-w-3xl">
                Key statutes, rules and judicial precedents that govern this service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {statutoryRefs.map((ref, i) => (
                <div key={i} className="p-6 rounded-3xl border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 mb-2 leading-tight">{ref.name}</h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{ref.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Common Pitfalls (optional) */}
      {pitfalls && pitfalls.length > 0 && (
        <section className="py-20 bg-amber-50/40 border-y border-amber-100/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-amber-700 mb-3 block">Avoid These Mistakes</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Common Pitfalls</h2>
              <p className="text-slate-600 font-medium leading-relaxed max-w-3xl">
                Costly errors we routinely help clients fix — or better, avoid altogether.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pitfalls.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-amber-100">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-1 text-sm">{p.title}</h4>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-primary mb-3 block">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Common Questions</h2>
            <p className="text-slate-500 font-bold">Everything you need to know before you begin</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-black text-slate-900 pr-6 leading-snug text-sm md:text-base">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <Minus className="w-5 h-5 text-primary shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-50 whitespace-pre-line">
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

      {/* Related Services (optional) */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-widest text-primary mb-3 block">Explore More</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">Related Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  className="group bg-white border border-slate-100 p-5 rounded-2xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">
                      {s.name}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </main>
  );
}
