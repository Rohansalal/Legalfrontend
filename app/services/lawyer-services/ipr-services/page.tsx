import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { BadgeCheck, Copyright, FileSignature, ArrowRight, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'IPR Services - Trademark, Copyright & Patent | Legal Door',
  description:
    'Complete IPR legal services: trademark registration, opposition, infringement, copyright registration for music, art and books, and patent filing.',
};

const iprSections = [
  {
    title: 'Trademark',
    icon: BadgeCheck,
    description:
      'End-to-end trademark protection from filing to renewal, opposition and infringement litigation.',
    services: [
      { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
      { name: 'Trademark Objection', href: '/services/lawyer-services/ipr-services/trademark/objection' },
      { name: 'Trademark Hearing', href: '/services/lawyer-services/ipr-services/trademark/hearing' },
      { name: 'Trademark Opposition', href: '/services/lawyer-services/ipr-services/trademark/opposition' },
      { name: 'Trademark Renewal', href: '/services/lawyer-services/ipr-services/trademark/renewal' },
      { name: 'Trademark Restoration', href: '/services/lawyer-services/ipr-services/trademark/restoration' },
      { name: 'Trademark Assignment', href: '/services/lawyer-services/ipr-services/trademark/assignment' },
      { name: 'Trademark Infringement', href: '/services/lawyer-services/ipr-services/trademark/infringement' },
      { name: 'Trademark Investigation', href: '/services/lawyer-services/ipr-services/trademark/investigation' },
      { name: 'Trademark Logo', href: '/services/lawyer-services/ipr-services/trademark/logo' },
    ],
  },
  {
    title: 'Copyright',
    icon: Copyright,
    description:
      'Copyright protection for creative works including music, art, literature, cinematography and digital symbols.',
    services: [
      { name: 'Copyright Registration', href: '/services/lawyer-services/ipr-services/copyright/registration' },
      { name: 'Copyright Objection', href: '/services/lawyer-services/ipr-services/copyright/objection' },
      { name: 'Songs Copyright', href: '/services/lawyer-services/ipr-services/copyright/songs' },
      { name: 'Songs Recording Copyright', href: '/services/lawyer-services/ipr-services/copyright/songs-recording' },
      { name: 'Artistic Work / Painting Copyright', href: '/services/lawyer-services/ipr-services/copyright/artistic-work' },
      { name: 'Logo Copyright', href: '/services/lawyer-services/ipr-services/copyright/logo' },
      { name: 'Cinematography Copyright', href: '/services/lawyer-services/ipr-services/copyright/cinematography' },
      { name: 'Copyright a Book', href: '/services/lawyer-services/ipr-services/copyright/book' },
      { name: 'Literature / Dramatic Copyright', href: '/services/lawyer-services/ipr-services/copyright/literature-dramatic' },
      { name: 'E-Symbol Copyright', href: '/services/lawyer-services/ipr-services/copyright/e-symbol' },
    ],
  },
  {
    title: 'Patent',
    icon: FileSignature,
    description:
      'Provisional and complete patent filing to secure your invention and protect commercial advantage.',
    services: [
      { name: 'Patent Complete Registration', href: '/services/lawyer-services/ipr-services/patent/complete-registration' },
      { name: 'Patent Provisional Registration', href: '/services/lawyer-services/ipr-services/patent/provisional-registration' },
    ],
  },
];

export default function IPRServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Lightbulb className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            IPR <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Protect your brand, creative works and inventions with comprehensive
            intellectual property legal services. Trademark, copyright and patent
            specialists handling registration through litigation.
          </p>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {iprSections.map((section) => (
            <section key={section.title}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900">{section.title}</h2>
                    <p className="text-sm text-slate-500 font-medium mt-1 max-w-xl">
                      {section.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  {section.services.length} Service{section.services.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="group bg-white border border-slate-100 p-6 rounded-3xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex items-center justify-between gap-3"
                  >
                    <span className="text-sm font-black text-slate-900 group-hover:text-primary transition-colors">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
