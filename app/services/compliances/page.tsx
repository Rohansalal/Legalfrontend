import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import {
  FileCheck,
  TrendingUp,
  Briefcase,
  BadgeCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata = {
  title: 'Compliances Services - Legal Door',
  description:
    'Annual compliances, change in business, closure / conversion and certifications — ROC, GST, ITR, ISO, BIS handled by experienced corporate counsel and CAs.',
};

const categories = [
  {
    id: 'company-compliances',
    label: 'A. Company Compliances',
    icon: FileCheck,
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    description: 'Annual ROC filings (AOC-4, MGT-7), accounting, audit and GST filing for Pvt Ltd, Public Ltd, LLP, OPC, Section 8, NBFC, Producer and Nidhi companies.',
    services: [
      'Annual Compliances — Pvt. Ltd.',
      'Annual Compliances — Public Ltd.',
      'Annual Compliances — LLP',
      'Annual Compliances — OPC',
      'Annual Compliances — Nidhi Company',
      'Annual Compliances — Section 8',
      'Annual Compliances — Producer Company',
      'Annual Compliances — NBFC',
      'Accounting & Book Keeping',
      'GST Filing',
    ],
    href: '/services/compliances/company-compliances',
  },
  {
    id: 'change-in-business',
    label: 'B. Change in Business',
    icon: TrendingUp,
    color: 'bg-orange-50 text-orange-600 border-orange-100',
    description: 'Name, place, object, directors, capital, share transfers, dematerialization, KYC and fund-raising — all post-incorporation changes filed with MCA.',
    services: [
      'Change Company Name',
      'Change of Place of Company',
      'Change of Object of Company',
      'Change of Directors',
      'Increase Authorized Capital',
      'Increase Paid-up Capital',
      'Director (DIR-3) KYC',
      'Dematerialization of Shares',
      'Share Transfer',
      'Fund Raising',
    ],
    href: '/services/compliances/change-in-business',
  },
  {
    id: 'closure-convert-others',
    label: 'C. Closure, Convert & Others',
    icon: Briefcase,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    description: 'Convert Pvt Ltd to Public, LLP to Pvt, close LLP / Pvt / Public / NGO and obtain CA / CS / CMA / Advocate audit reports.',
    services: [
      'Convert Pvt Ltd to Public Ltd',
      'Convert LLP to Pvt Ltd',
      'Close LLP',
      'Close Pvt. Ltd.',
      'Close Public Ltd.',
      'Close NGO',
      'CA Audit & Report',
      'CS Audit & Report',
      'CMA Audit & Report',
      'Advocate Audit & Report',
    ],
    href: '/services/compliances/closure-convert-others',
  },
  {
    id: 'certification',
    label: 'D. Certification',
    icon: BadgeCheck,
    color: 'bg-pink-50 text-pink-600 border-pink-100',
    description: 'ISO and BIS certifications for quality management, product standards and Indian compliance.',
    services: ['ISO Certification', 'BIS Certification'],
    href: '/services/compliances/certification',
  },
];

export default function CompliancesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-[#022d54] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0a3d6d_0%,#022d54_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-300 font-bold text-[10px] uppercase tracking-wider mb-6">
            <CheckCircle2 className="w-3 h-3" />
            ROC, GST & Audit Specialists
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            Corporate <br />
            <span className="text-blue-400 italic">Compliances</span>
          </h1>
          <p className="text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            From annual ROC filings to company closure and certifications — comprehensive
            compliance services to keep your business legally healthy.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Choose Your <span className="text-primary italic">Compliance Service</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
              32+ compliance, change-management, closure and certification services.
            </p>
          </div>

          <div className="space-y-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className={`w-16 h-16 rounded-[1.5rem] border flex items-center justify-center shrink-0 ${cat.color}`}>
                      <cat.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h2 className="text-2xl font-black text-slate-900">{cat.label}</h2>
                        <Link
                          href={cat.href}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#022d54] text-white font-black text-sm hover:bg-blue-600 transition-colors shrink-0"
                        >
                          View All <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <p className="text-slate-500 font-medium mb-6">{cat.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.services.map((svc) => (
                          <span
                            key={svc}
                            className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 text-xs font-bold"
                          >
                            {svc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
