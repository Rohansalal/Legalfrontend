import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Plane, Anchor, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Aviation, Maritime & International Law | Legal Door',
  description:
    'Specialist aviation licensing (DGCA, AERA, AAI, BCAS, ICAO, IATA), maritime law and international cross-border legal advisory.',
};

const sections = [
  {
    title: 'Aviation License & Approval',
    icon: Plane,
    description:
      'Complete aviation regulatory and transactional advisory — aircraft transactions, airline certification, DGCA / AERA / AAI / BCAS approvals.',
    services: [
      { name: 'Sale / Purchase / Leasing of Aircraft', href: '/services/lawyer-services/aviation-maritime/aviation/aircraft-sale-purchase-leasing' },
      { name: 'Airline Start-ups, Certification & Aircraft Finance', href: '/services/lawyer-services/aviation-maritime/aviation/airline-startup-certification' },
      { name: 'DGCA Compliances & Approval', href: '/services/lawyer-services/aviation-maritime/aviation/dgca' },
      { name: 'AERA Compliances & Approval', href: '/services/lawyer-services/aviation-maritime/aviation/aera' },
      { name: 'AAI Compliances & Approval', href: '/services/lawyer-services/aviation-maritime/aviation/aai' },
      { name: 'BCAS Compliances & Approval', href: '/services/lawyer-services/aviation-maritime/aviation/bcas' },
      { name: 'ICAO Regulations & Advisory', href: '/services/lawyer-services/aviation-maritime/aviation/icao' },
      { name: 'IATA License & Advisory', href: '/services/lawyer-services/aviation-maritime/aviation/iata' },
      { name: 'Aero-Sports License & Advisory', href: '/services/lawyer-services/aviation-maritime/aviation/aero-sports' },
      { name: 'Drone Registration & Advisory', href: '/services/lawyer-services/aviation-maritime/aviation/drone' },
      { name: 'Pilot Training, License & Advisory', href: '/services/lawyer-services/aviation-maritime/aviation/pilot-training' },
    ],
  },
  {
    title: 'Maritime Law',
    icon: Anchor,
    description:
      'Shipping and admiralty matters — vessel licensing, charter parties, cargo claims and maritime disputes.',
    services: [
      { name: 'Ship License', href: '/services/lawyer-services/aviation-maritime/maritime/ship-license' },
    ],
  },
  {
    title: 'International Law',
    icon: Globe,
    description:
      'Cross-border transactions, FEMA and PMLA advisory for individuals and corporates operating across jurisdictions.',
    services: [
      { name: 'Cross-Border Transactions', href: '/services/lawyer-services/aviation-maritime/international/cross-border-transactions' },
      { name: 'Money Laundering', href: '/services/lawyer-services/aviation-maritime/international/money-laundering' },
    ],
  },
];

export default function AviationMaritimePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Plane className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Aviation & <span className="text-primary">Maritime Law</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Niche regulatory and transactional legal advisory for aviation, maritime
            and international law — from aircraft leasing and DGCA approvals to
            ship licensing and cross-border compliance.
          </p>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {sections.map((section) => (
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
