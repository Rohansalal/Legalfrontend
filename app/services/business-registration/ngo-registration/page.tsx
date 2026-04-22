import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Users, Heart, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'NGO Registration Services - Legal Door',
  description: 'Register your NGO as a Trust, Society, or Section 8 Company. Full legal compliance and tax exemption guidance.',
};

const services = [
  {
    title: 'Trust Registration',
    slug: 'trust-registration',
    desc: 'A public charitable trust is the most preferred structure for NGOs. Governed by Indian Trusts Act, 1882 and state-specific laws. Easy management with trustee-based governance.',
    icon: Heart,
    color: 'text-pink-600 bg-pink-50 border-pink-100',
    time: '15–20 Days',
    benefits: ['Simpler governance', 'Suitable for education & health', 'Can get 12A & 80G', 'Less compliance'],
  },
  {
    title: 'Society Registration',
    slug: 'society-registration',
    desc: 'A society is registered under the Societies Registration Act, 1860. Ideal for cultural, charitable, scientific, and educational objectives with democratic member-based management.',
    icon: Users,
    color: 'text-blue-600 bg-blue-50 border-blue-100',
    time: '20–30 Days',
    benefits: ['Democratic structure', 'Multiple members/founders', 'Eligible for government grants', 'Can get 12A & 80G'],
  },
  {
    title: 'Section 8 Company',
    slug: 'section-8-company',
    desc: 'A Section 8 Company under the Companies Act, 2013 is the most credible NGO structure. Regulated by MCA, it enjoys tax exemptions and is preferred by foreign donors and CSR funders.',
    icon: ShieldCheck,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    time: '20–30 Days',
    benefits: ['Highest credibility', 'No minimum capital', 'CSR & foreign funding eligible', 'Full MCA compliance'],
  },
];

export default function NgoRegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20 bg-[#022d54] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0a3d6d_0%,#022d54_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-bold mb-6">
            <Link href="/services/business-registration" className="hover:text-white transition-colors">Business Registration</Link>
            <span>/</span>
            <span className="text-white">NGO Registration</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 border border-white/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-pink-400" />
            </div>
            <div>
              <div className="text-pink-400 font-bold text-xs uppercase tracking-widest mb-1">Section D</div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">NGO Registration</h1>
            </div>
          </div>
          <p className="text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            Choose the right legal structure for your non-profit. We guide you through Trust, Society, and Section 8 Company registration with full compliance.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/business-registration/ngo-registration/${svc.slug}`}
                className="group bg-white border border-slate-100 rounded-[2rem] p-10 hover:border-[#022d54] hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className={`w-16 h-16 rounded-[1.5rem] border flex items-center justify-center mb-8 ${svc.color}`}>
                  <svc.icon className="w-8 h-8" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-[#022d54] leading-tight">{svc.title}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0 ml-2">
                    {svc.time}
                  </span>
                </div>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-1">{svc.desc}</p>
                <div className="space-y-2 mb-8">
                  {svc.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[#022d54] font-black text-xs uppercase tracking-wider mt-auto group-hover:gap-3 transition-all">
                  Register Now
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
