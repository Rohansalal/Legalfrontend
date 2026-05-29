import Link from 'next/link';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export interface LegalSection {
  heading: string;
  /** Paragraphs of body text. */
  body?: string[];
  /** Optional bullet list rendered after the body. */
  bullets?: string[];
}

export interface LegalPageProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export function LegalPage({ title, lastUpdated, intro, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-14 lg:pt-40 lg:pb-20 overflow-hidden bg-[#022d54] bg-[radial-gradient(circle_at_top,#0a3d6d_0%,#022d54_60%,#0a3d6d_100%)]">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-white/60 mb-8 flex-wrap">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{title}</span>
          </nav>

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-6">
            <ShieldCheck className="w-7 h-7 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-sm font-bold uppercase tracking-widest text-white/50">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12">{intro}</p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i} className="scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-start gap-3">
                  <span className="text-primary font-black">{i + 1}.</span>
                  {section.heading}
                </h2>
                {section.body?.map((para, j) => (
                  <p key={j} className="text-slate-600 font-medium leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2.5">
                    {section.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span className="text-slate-600 font-medium leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Contact note */}
          <div className="mt-14 p-8 rounded-3xl bg-slate-50 border border-slate-100">
            <h3 className="text-lg font-black text-slate-900 mb-2">Questions?</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              If you have any questions about this policy, please{' '}
              <Link href="/contact" className="text-primary font-black hover:underline">
                contact us
              </Link>{' '}
              or email{' '}
              <a href="mailto:contact@legaldoor.in" className="text-primary font-black hover:underline">
                contact@legaldoor.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
