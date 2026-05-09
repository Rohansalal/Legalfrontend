import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import { BadgeCheck, ArrowRight, ChevronRight } from 'lucide-react';
import { certificationServices } from '@/lib/compliances-data/certification';

export const metadata = {
  title: 'ISO & BIS Certification Services | Legal Door',
  description:
    'Accredited ISO and BIS certification consultancy — ISO 9001, 14001, 27001, 45001 quality / security / safety management and BIS Standard Mark / Hallmarking.',
};

export default function CertificationLandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-8 max-w-7xl mx-auto flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services/compliances" className="hover:text-primary transition-colors">Compliances</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900">Certification</span>
        </nav>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <BadgeCheck className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            ISO & BIS Certification
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Internationally recognized ISO certifications and BIS Standard Mark
            (ISI) — for quality, security, safety, environment and product compliance.
          </p>
          <span className="inline-block mt-6 text-xs font-black uppercase tracking-widest text-primary">
            {Object.keys(certificationServices).length} Services
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {Object.entries(certificationServices).map(([slug, service]) => (
            <Link
              key={slug}
              href={`/services/compliances/certification/${slug}`}
              className="group bg-white border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col gap-4"
            >
              <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed flex-1">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary">
                Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
