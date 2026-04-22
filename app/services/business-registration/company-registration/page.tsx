import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Building2 } from 'lucide-react';

export const metadata = {
  title: 'Company Registration Services - Legal Door',
  description: 'Register your company as Private Ltd, Public Ltd, LLP, OPC, Partnership Firm, NBFC and more. Expert guidance under Companies Act 2013.',
};

const services = [
  { title: 'Private Limited Company Registration', slug: 'private-limited-company', desc: 'Most popular structure for startups. Limited liability, separate legal entity, easy to raise funding.', time: '7–10 Days' },
  { title: 'Public Limited Company Registration', slug: 'public-limited-company', desc: 'Raise capital from the public, list on stock exchanges. Suitable for large-scale businesses.', time: '15–20 Days' },
  { title: 'Limited Liability Partnership (LLP) Registration', slug: 'llp-registration', desc: 'Combines benefits of partnership and company. Low compliance, limited liability for partners.', time: '10–15 Days' },
  { title: 'One Person Company (OPC) Registration', slug: 'one-person-company', desc: 'Run a company solo with full limited liability protection. Ideal for solo entrepreneurs.', time: '7–10 Days' },
  { title: 'GST Registration for Company & Firm', slug: 'gst-registration', desc: 'Mandatory GST registration for businesses above ₹20L turnover. Get GSTIN within 3–5 days.', time: '3–5 Days' },
  { title: 'Section 8 Company Registration', slug: 'section-8-company', desc: 'Non-profit company for charitable objectives. Enjoys tax benefits and credibility of a company.', time: '20–30 Days' },
  { title: 'Producer Company Registration', slug: 'producer-company', desc: 'Empower farmers & artisans through collective business. Registered under Companies Act 2013.', time: '20–25 Days' },
  { title: 'Proprietorship Firm Registration', slug: 'proprietorship-firm', desc: 'Simplest business structure. No minimum capital, low compliance. Perfect for small businesses.', time: '3–7 Days' },
  { title: 'Partnership Firm Registration', slug: 'partnership-firm', desc: 'Two or more partners sharing profits and liabilities. Easy to set up with a deed.', time: '5–7 Days' },
  { title: 'NBFC Registration', slug: 'nbfc-registration', desc: 'Non-Banking Financial Company registration with RBI. For lending, investment, and financial services.', time: '90–180 Days' },
];

export default function CompanyRegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20 bg-[#022d54] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0a3d6d_0%,#022d54_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-bold mb-6">
            <Link href="/services/business-registration" className="hover:text-white transition-colors">Business Registration</Link>
            <span>/</span>
            <span className="text-white">Company Registration</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 border border-white/10 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <div className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1">Section A</div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">Company Registration</h1>
            </div>
          </div>
          <p className="text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            Register your business with the right legal structure. From startups to large enterprises — we cover all 10 company types under Indian law.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <Link
                key={svc.slug}
                href={`/services/business-registration/company-registration/${svc.slug}`}
                className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 hover:border-[#022d54] hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#022d54] flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-black">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                    {svc.time}
                  </span>
                </div>
                <h3 className="text-xl font-black text-[#022d54] mb-3 group-hover:text-[#022d54] leading-tight">{svc.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{svc.desc}</p>
                <div className="flex items-center gap-2 text-[#022d54] font-black text-xs uppercase tracking-wider group-hover:gap-3 transition-all">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
