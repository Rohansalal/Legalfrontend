import Link from 'next/link';
import {
  Globe,
  Landmark,
  Building2,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  FileText,
  Sparkles,
  Plus,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import {
  type Jurisdiction,
  type Region,
  REGIONS,
  FORMATION_PROCESS,
  WHATS_INCLUDED,
  BASE_REQUIREMENTS,
  jurisdictionsByRegion,
  jurisdictionHref,
  regionHref,
} from '@/lib/global-jurisdictions';

const ICONS: Record<string, typeof Globe> = {
  Globe,
  Landmark,
  Building2,
  Briefcase,
  ShieldCheck,
};

function RegionIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Globe;
  return <Icon className={className} />;
}

/* ════════════════════════════════════════════════════════════════════════
 *  Jurisdiction detail page
 * ════════════════════════════════════════════════════════════════════════ */

export function JurisdictionPage({
  jurisdiction: j,
  region,
}: {
  jurisdiction: Jurisdiction;
  region: Region;
}) {
  const faqs = j.faqs ?? region.faqs;
  const requirements = [...BASE_REQUIREMENTS, ...(j.requirements ?? [])];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-32 pb-20">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/50 mb-6">
            <Link href="/services/global-business" className="hover:text-white transition-colors">Global Business</Link>
            <span>/</span>
            <Link href={regionHref(region.slug)} className="hover:text-white transition-colors">{region.name}</Link>
          </div>
          <div className="max-w-3xl">
            <div className="text-5xl mb-5">{j.flag}</div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5">
              {j.name} <span className="text-primary">Company Registration</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed font-medium mb-8">{j.tagline}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-primary text-white font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
              >
                Start Registration <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl bg-white/10 text-white font-bold text-sm">
                <Clock className="w-4 h-4 text-primary" /> {j.timeline}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 space-y-24">
        {/* ── Entity types ── */}
        <section>
          <SectionHeading
            kicker="Choose Your Structure"
            title={`Business Entities in ${j.name}`}
            subtitle="Select the right entity type for your liability, tax and growth goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {j.entities.map((e) => (
              <div
                key={e.name}
                className="bg-white border border-slate-100 rounded-[28px] p-7 hover:shadow-2xl hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-black text-slate-900">{e.name}</h3>
                {e.full && <p className="text-xs font-bold text-primary uppercase tracking-wider mt-1">{e.full}</p>}
                <p className="text-sm text-slate-600 leading-relaxed mt-4">{e.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why this jurisdiction ── */}
        <section>
          <SectionHeading
            kicker="Business Advantages"
            title={`Why Register in ${j.name}?`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {j.highlights.map((h) => (
              <div key={h} className="flex items-start gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <p className="text-[15px] font-bold text-slate-800 leading-snug">{h}</p>
              </div>
            ))}
          </div>
          {/* Region-level benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {region.benefits.map((b) => (
              <div key={b.title} className="bg-white border border-slate-100 rounded-2xl p-6">
                <Sparkles className="w-5 h-5 text-primary mb-3" />
                <h4 className="font-black text-slate-900 mb-2 text-sm">{b.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Process ── */}
        <section>
          <SectionHeading
            kicker="Our Process"
            title="A Simple, Guided Setup"
            subtitle={`We manage every step of your ${j.name} incorporation end to end.`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {FORMATION_PROCESS.map((step, i) => (
              <div key={step.title} className="relative bg-white border border-slate-100 rounded-2xl p-6">
                <span className="text-4xl font-black text-slate-100 absolute top-4 right-5">{i + 1}</span>
                <h4 className="font-black text-slate-900 mb-2 text-sm relative z-10">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed relative z-10">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Requirements + What's included ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-[30px] p-8 md:p-10 border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-black text-slate-900">What You Need</h3>
            </div>
            <ul className="space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-950 text-white rounded-[30px] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-black">What’s Included</h3>
            </div>
            <ul className="space-y-3">
              {WHATS_INCLUDED.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm font-medium text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="max-w-3xl mx-auto">
          <SectionHeading kicker="FAQ" title="Frequently Asked Questions" center />
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white border border-slate-100 rounded-2xl px-6 py-5 hover:border-slate-200 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer list-none font-black text-slate-900 text-[15px]">
                  {f.q}
                  <Plus className="w-5 h-5 text-primary shrink-0 transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="text-sm text-slate-600 leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Other jurisdictions in region ── */}
        <RegionSiblings region={region} currentSlug={j.slug} />

        {/* ── Back link ── */}
        <div className="text-center">
          <Link
            href={regionHref(region.slug)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-black text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to {region.name}
          </Link>
        </div>
      </div>

      <CTASection />
      <Footer />
    </main>
  );
}

function RegionSiblings({ region, currentSlug }: { region: Region; currentSlug: string }) {
  const siblings = jurisdictionsByRegion(region.key).filter((s) => s.slug !== currentSlug);
  if (siblings.length === 0) return null;
  return (
    <section>
      <SectionHeading kicker={region.name} title={`More ${region.name} Jurisdictions`} />
      <div className="flex flex-wrap gap-3">
        {siblings.map((s) => (
          <Link
            key={jurisdictionHref(s)}
            href={jurisdictionHref(s)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-50 border border-slate-100 text-sm font-bold text-slate-700 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
          >
            <span>{s.flag}</span> {s.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
 *  Region landing page
 * ════════════════════════════════════════════════════════════════════════ */

export function RegionLanding({ region }: { region: Region }) {
  const all = jurisdictionsByRegion(region.key);
  const freezones = all.filter((j) => j.group === 'freezones');
  const mainland = all.filter((j) => j.group === 'mainland');
  const ungrouped = all.filter((j) => !j.group);

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden bg-slate-950 text-white pt-32 pb-20">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/50 mb-6">
            <Link href="/services/global-business" className="hover:text-white transition-colors">Global Business</Link>
            <span>/</span>
            <span className="text-white/80">{region.name}</span>
          </div>
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <RegionIcon name={region.icon} className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5">
              Company Registration in <span className="text-primary">{region.name}</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed font-medium">{region.intro}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20 space-y-20">
        {ungrouped.length > 0 && (
          <JurisdictionGrid items={ungrouped} />
        )}

        {freezones.length > 0 && (
          <section>
            <SectionHeading kicker="UAE Free Zones" title="Free Zone Setup" subtitle="100% foreign ownership, fast setup and tax efficiency." />
            <JurisdictionGrid items={freezones} bare />
          </section>
        )}

        {mainland.length > 0 && (
          <section>
            <SectionHeading kicker="GCC Mainland" title="Mainland Setup" subtitle="Trade directly across the local market with full access." />
            <JurisdictionGrid items={mainland} bare />
          </section>
        )}

        {/* Region benefits */}
        <section>
          <SectionHeading kicker="Why" title={`Benefits of Incorporating in ${region.name}`} center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {region.benefits.map((b) => (
              <div key={b.title} className="bg-white border border-slate-100 rounded-2xl p-6">
                <Sparkles className="w-5 h-5 text-primary mb-3" />
                <h4 className="font-black text-slate-900 mb-2 text-sm">{b.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
      <Footer />
    </main>
  );
}

function JurisdictionGrid({ items, bare }: { items: Jurisdiction[]; bare?: boolean }) {
  return (
    <div className={bare ? '' : ''}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((j) => (
          <Link
            key={jurisdictionHref(j)}
            href={jurisdictionHref(j)}
            className="group bg-white border border-slate-100 rounded-[28px] p-7 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl">{j.flag}</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                <Clock className="w-3.5 h-3.5" /> {j.timeline}
              </span>
            </div>
            <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">{j.name}</h3>
            <p className="text-sm text-slate-500 leading-relaxed mt-2 flex-1">{j.tagline}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {j.entities.slice(0, 3).map((e) => (
                <span key={e.name} className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full">{e.name}</span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest mt-5">
              Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── Shared heading ───────────────────────────────────────────────────── */

function SectionHeading({
  kicker,
  title,
  subtitle,
  center,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 ${center ? 'text-center max-w-2xl mx-auto' : ''}`}>
      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">{kicker}</span>
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 tracking-tight">{title}</h2>
      {subtitle && <p className="text-slate-500 font-medium mt-3 leading-relaxed">{subtitle}</p>}
    </div>
  );
}
