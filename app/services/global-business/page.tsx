import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Globe, Landmark, Building2, Briefcase, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import {
  REGIONS,
  jurisdictionsByRegion,
  jurisdictionHref,
  regionHref,
} from '@/lib/global-jurisdictions';

export const metadata = {
  title: 'Global Business — Company Registration Worldwide | Legal Door',
  description:
    'Register your company in 40+ jurisdictions across the Americas, Europe, Asia-Pacific, the Middle East and offshore financial centres. Expert international incorporation, compliance and banking support.',
};

const ICONS: Record<string, typeof Globe> = {
  Globe,
  Landmark,
  Building2,
  Briefcase,
  ShieldCheck,
};

export default function GlobalBusinessPage() {
  const totalJurisdictions = REGIONS.reduce(
    (n, r) => n + jurisdictionsByRegion(r.key).length,
    0,
  );

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-32 pb-20">
        <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-primary/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[11px] font-black uppercase tracking-widest mb-6">
            <Globe className="w-3.5 h-3.5 text-primary" /> {totalJurisdictions}+ Jurisdictions
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Global <span className="text-primary">Business</span> Setup
          </h1>
          <p className="text-lg text-white/70 leading-relaxed font-medium">
            Incorporate your company anywhere in the world. From a US LLC or UK Ltd to UAE
            free zones and offshore holding structures — we handle formation, compliance and
            banking across every major jurisdiction.
          </p>
        </div>
      </section>

      {/* ── Regions ── */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {REGIONS.map((region) => {
            const Icon = ICONS[region.icon] ?? Globe;
            const items = jurisdictionsByRegion(region.key);
            return (
              <div
                key={region.key}
                className="bg-white border border-slate-100 p-8 md:p-10 rounded-[36px] hover:shadow-2xl transition-all duration-500 flex flex-col group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-7 h-7 text-slate-900 group-hover:text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">{region.name}</h3>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      {items.length} jurisdictions
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                  {region.blurb}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 flex-1 content-start">
                  {items.map((j) => (
                    <Link
                      key={jurisdictionHref(j)}
                      href={jurisdictionHref(j)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <span>{j.flag}</span> {j.name}
                    </Link>
                  ))}
                </div>

                <Link
                  href={regionHref(region.key)}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2"
                >
                  Explore {region.name} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <CTASection />
      <Footer />
    </main>
  );
}
