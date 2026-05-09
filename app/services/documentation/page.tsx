import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Scale, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Legal Documentation & Drafting Services - Legal Door',
  description:
    'Professional drafting of legal and corporate documents — legal notices, affidavits, agreements, NDAs, MoUs, franchise, JV and corporate appointments. Lawyer-vetted, registration-ready.',
};

const categories = [
  {
    title: 'Legal Documentation',
    icon: Scale,
    description:
      'Legal notices, affidavits, attestation, marriage registration, contracts and real estate agreements — drafted and registered.',
    href: '/services/documentation/legal',
    services: [
      { name: 'Legal Notice', href: '/services/documentation/legal/legal-notice' },
      { name: 'Affidavit', href: '/services/documentation/legal/affidavit' },
      { name: 'Notary, Stamp & Attestation', href: '/services/documentation/legal/notary-stamp-attestation' },
      { name: 'Apostille (MEA / HRD)', href: '/services/documentation/legal/apostille' },
      { name: 'Marriage Registration', href: '/services/documentation/legal/marriage-registration' },
      { name: 'Rent / Lease Agreement', href: '/services/documentation/legal/rent-lease-agreement' },
      { name: 'Legal Contract', href: '/services/documentation/legal/legal-contract' },
      { name: 'Business Agreement', href: '/services/documentation/legal/business-agreement' },
      { name: 'Real Estate Agreement', href: '/services/documentation/legal/real-estate-agreement' },
    ],
  },
  {
    title: 'Business / Corporate Documentation',
    icon: Briefcase,
    description:
      'Corporate letters, partnership and franchise agreements, NDAs, MoUs and statutory appointments for organisations.',
    href: '/services/documentation/business-corporate',
    services: [
      { name: 'No Objection Certificate (NOC)', href: '/services/documentation/business-corporate/noc' },
      { name: 'Offer / Appointment Letter', href: '/services/documentation/business-corporate/offer-appointment-letter' },
      { name: 'Resignation Letter', href: '/services/documentation/business-corporate/resignation-letter' },
      { name: 'Termination Letter', href: '/services/documentation/business-corporate/termination-letter' },
      { name: 'Memorandum of Understanding (MoU)', href: '/services/documentation/business-corporate/mou' },
      { name: 'Franchise Agreement', href: '/services/documentation/business-corporate/franchise-agreement' },
      { name: 'Joint Venture Agreement', href: '/services/documentation/business-corporate/joint-venture-agreement' },
      { name: 'Non-Disclosure Agreement (NDA)', href: '/services/documentation/business-corporate/nda' },
      { name: 'Auditor Appointment Letter', href: '/services/documentation/business-corporate/auditor-appointment-letter' },
      { name: 'Appointment of Company Secretary', href: '/services/documentation/business-corporate/company-secretary-appointment' },
    ],
  },
];

export default function DocumentationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Legal <span className="text-primary">Documentation</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Error-free legal drafting for every need. Lawyer-drafted documents — legal notices,
            affidavits, contracts, corporate agreements and statutory appointments —
            ready for registration and enforcement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-slate-100 p-8 md:p-10 rounded-[40px] hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <cat.icon className="w-8 h-8 text-slate-900 group-hover:text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                {cat.description}
              </p>
              <div className="border-t border-slate-100 pt-6 mb-8 flex-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">
                  {cat.services.length} Services
                </span>
                <ul className="space-y-2">
                  {cat.services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                        <span>{service.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={cat.href}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2"
              >
                View Category <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
