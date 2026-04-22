import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';

export const metadata = {
  title: 'Other Registration Services - Legal Door',
  description: 'Society, Trust, Political Party, RERA, IEC, FCRA, ESI & PF, and more specialized registrations in India.',
};

const services = [
  { title: 'Society Registration (NGO)', slug: 'society-registration', desc: 'Register a society under the Societies Registration Act, 1860 for educational, charitable, or social objectives.', time: '20–30 Days' },
  { title: 'Trust Registration (NGO)', slug: 'trust-registration', desc: 'Create a private or public trust under the Indian Trusts Act for charitable purposes with tax benefits.', time: '15–20 Days' },
  { title: 'Political Party Registration', slug: 'political-party-registration', desc: 'Register a political party with the Election Commission of India under Representation of the People Act.', time: '60–90 Days' },
  { title: '12A & 80G Registration', slug: '12a-80g-registration', desc: 'Dual registration for NGOs — 12A for income tax exemption, 80G for donor tax deduction benefits.', time: '30–45 Days' },
  { title: 'RWA Registration', slug: 'rwa-registration', desc: 'Resident Welfare Association registration for managing residential colonies and societies.', time: '15–20 Days' },
  { title: 'RERA Registration', slug: 'rera-registration', desc: 'Mandatory RERA registration for real estate promoters and projects under Real Estate Act, 2016.', time: '20–30 Days' },
  { title: 'Import Export Code (IEC) Registration', slug: 'import-export-code', desc: 'IEC code from DGFT is mandatory for any business involved in import or export of goods/services.', time: '3–5 Days' },
  { title: 'FCRA/FEMA Registration', slug: 'fcra-fema-registration', desc: 'FCRA registration for NGOs to receive foreign contributions. FEMA compliance for forex transactions.', time: '60–90 Days' },
  { title: 'ESI & PF Registration', slug: 'esi-pf-registration', desc: 'Mandatory ESIC and EPF registration for establishments with 10+ employees. Social security compliance.', time: '7–10 Days' },
  { title: 'Telemarketing Registration', slug: 'telemarketing-registration', desc: 'Register with TRAI as a telemarketer (header, template, scrubbing) for compliant marketing calls and SMS.', time: '7–15 Days' },
];

export default function OtherRegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20 bg-[#022d54] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0a3d6d_0%,#022d54_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-bold mb-6">
            <Link href="/services/business-registration" className="hover:text-white transition-colors">Business Registration</Link>
            <span>/</span>
            <span className="text-white">Other Registration</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 border border-white/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-orange-400" />
            </div>
            <div>
              <div className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-1">Section B</div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">Other Registration</h1>
            </div>
          </div>
          <p className="text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            Specialized registrations beyond company formation — from NGOs to RERA, IEC to FCRA, we handle every government registration.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <Link
                key={svc.slug}
                href={`/services/business-registration/other-registration/${svc.slug}`}
                className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 hover:border-[#022d54] hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-black">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                    {svc.time}
                  </span>
                </div>
                <h3 className="text-xl font-black text-[#022d54] mb-3 leading-tight">{svc.title}</h3>
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
