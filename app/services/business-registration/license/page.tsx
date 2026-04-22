import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';

export const metadata = {
  title: 'Business Licenses - Legal Door',
  description: 'FSSAI, AYUSH, Drug, Liquor, Factory, Trade, Shop & Establishment and all government business licenses in India.',
};

const services = [
  { title: 'FSSAI License', slug: 'fssai-license', desc: 'Food Safety and Standards Authority of India license — mandatory for any food business operator in India.', time: '7–30 Days' },
  { title: 'AYUSH License', slug: 'ayush-license', desc: 'License to manufacture, sell, or distribute Ayurveda, Yoga, Unani, Siddha, and Homeopathy products.', time: '30–60 Days' },
  { title: 'Drug License', slug: 'drug-license', desc: 'Retail, wholesale, or manufacturing drug license under the Drugs and Cosmetics Act, 1940.', time: '30–45 Days' },
  { title: 'Liquor License', slug: 'liquor-license', desc: 'State-specific liquor license for retail sale, restaurant/bar, or wholesale distribution of alcoholic beverages.', time: '30–60 Days' },
  { title: 'Factory License', slug: 'factory-license', desc: 'Mandatory license for manufacturing units employing 10+ workers (with power) or 20+ (without power).', time: '15–30 Days' },
  { title: 'Small Finance Bank License', slug: 'small-finance-bank-license', desc: 'RBI license for Small Finance Banks to provide basic financial services to underserved sections.', time: '180–365 Days' },
  { title: 'FFMC License', slug: 'ffmc-license', desc: 'Full-Fledged Money Changer license from RBI to purchase and sell foreign currency to the public.', time: '60–90 Days' },
  { title: 'PASARA License', slug: 'pasara-license', desc: 'Private Security Agencies Regulation Act license for operating a private security agency in India.', time: '30–60 Days' },
  { title: 'Trade License', slug: 'trade-license', desc: 'Issued by the local municipal authority — mandatory to legally operate any trade or business from a premises.', time: '7–15 Days' },
  { title: 'Shop and Establishment License', slug: 'shop-establishment-license', desc: 'State-level license under the Shops and Establishments Act — required for all commercial establishments.', time: '3–7 Days' },
];

export default function LicensePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20 bg-[#022d54] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0a3d6d_0%,#022d54_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-bold mb-6">
            <Link href="/services/business-registration" className="hover:text-white transition-colors">Business Registration</Link>
            <span>/</span>
            <span className="text-white">License</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-[1.5rem] bg-white/10 border border-white/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">Section C</div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">Business Licenses</h1>
            </div>
          </div>
          <p className="text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            Every government license your business needs — from food safety to financial services. We handle documentation, liaison, and follow-up.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <Link
                key={svc.slug}
                href={`/services/business-registration/license/${svc.slug}`}
                className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 hover:border-[#022d54] hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
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
                  Apply Now
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
