import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Tax Exemption Registration - Legal Door',
  description: '12A and 80G registration for NGOs and charitable trusts to get income tax exemption and donor deduction benefits.',
};

const services = [
  {
    title: '12A Registration',
    slug: '12a-registration',
    desc: 'Section 12A of the Income Tax Act grants income tax exemption to NGOs and charitable trusts on surplus income. It is the first step every NGO should take after formation.',
    time: '30–45 Days',
    benefits: [
      'Complete exemption from income tax on surplus',
      'Mandatory for availing 80G status',
      'Enables receiving grants from government',
      'Valid permanently (subject to renewal under new law)',
      'Applicable to Trust, Society, and Section 8 Company',
    ],
    who: ['Charitable Trusts', 'Religious Trusts', 'Registered Societies', 'Section 8 Companies'],
  },
  {
    title: '80G Registration',
    slug: '80g-registration',
    desc: 'Section 80G of the Income Tax Act allows donors to claim a 50% or 100% deduction on donations made to your NGO. This dramatically increases your fundraising ability.',
    time: '30–45 Days',
    benefits: [
      '50% or 100% deduction for donors',
      'Attract corporate CSR funding',
      'Eligible for foreign donations with FCRA',
      'Increases donor trust and credibility',
      'Applicable after receiving 12A certificate',
    ],
    who: ['Charitable Trusts', 'Religious Trusts', 'Registered Societies', 'Section 8 Companies'],
  },
];

export default function TaxExemptionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20 bg-[#022d54] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0a3d6d_0%,#022d54_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-bold mb-6">
            <Link href="/services/business-registration" className="hover:text-white transition-colors">Business Registration</Link>
            <span>/</span>
            <span className="text-white">Tax Exemption</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 border border-white/10 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <div className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-1">Section E</div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">Tax Exemption</h1>
            </div>
          </div>
          <p className="text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            Maximize your NGO's impact with 12A and 80G registrations — unlock income tax exemptions and attract more donors.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/business-registration/tax-exemption/${svc.slug}`}
                className="group bg-white border border-slate-100 rounded-[2rem] p-10 hover:border-[#022d54] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-[1.25rem] bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-indigo-600" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                    {svc.time}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#022d54] mb-4 leading-tight">{svc.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-1">{svc.desc}</p>
                <div className="space-y-2.5 mb-8">
                  {svc.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {b}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[#022d54] font-black text-xs uppercase tracking-wider mt-auto group-hover:gap-3 transition-all">
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
