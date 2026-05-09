import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Landmark, ShieldCheck, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Property Services & Legal Support - Legal Door',
  description:
    'Expert legal support for property registration, verification, certificates, and real estate & infrastructure matters.',
};

const propertyCategories = [
  {
    title: 'Registration',
    icon: Landmark,
    description: 'Sale, gift, lease, will, GPA & all property deed registrations.',
    services: [
      { name: 'Sale Deed Registration', href: '/services/property/registration/sale-deed' },
      { name: 'Gift Deed Registration', href: '/services/property/registration/gift-deed' },
      { name: 'Lease Deed Registration', href: '/services/property/registration/lease-deed' },
      { name: 'Conveyance Deed Registration', href: '/services/property/registration/conveyance-deed' },
      { name: 'Agreement to Sale', href: '/services/property/registration/agreement-to-sale' },
      { name: 'Mutation', href: '/services/property/registration/mutation' },
      { name: 'TM (Transfer of Memorandum)', href: '/services/property/registration/transfer-of-memorandum' },
      { name: 'Will Registration', href: '/services/property/registration/will-registration' },
      { name: 'General Power of Attorney', href: '/services/property/registration/general-power-of-attorney' },
      { name: 'Builder Buyer Agreement', href: '/services/property/registration/builder-buyer-agreement' },
    ],
  },
  {
    title: 'Verification, Report & Certificate',
    icon: ShieldCheck,
    description: 'Title search, due diligence, CERSAI, legal heir & succession certificates.',
    services: [
      { name: 'Title Search Verification', href: '/services/property/verification/title-search' },
      { name: 'Encumbrances Check', href: '/services/property/verification/encumbrances-check' },
      { name: 'Due Diligence Report', href: '/services/property/verification/due-diligence-report' },
      { name: 'Land Scrutiny Report', href: '/services/property/verification/land-scrutiny-report' },
      { name: 'CERSAI Verification', href: '/services/property/verification/cersai-verification' },
      { name: 'Certified Copy of Documents', href: '/services/property/verification/certified-copy' },
      { name: 'Permission to Mortgage (PTM)', href: '/services/property/verification/permission-to-mortgage' },
      { name: 'Legal Publish in Newspaper', href: '/services/property/verification/legal-newspaper-publication' },
      { name: 'Legal Heir Certificate', href: '/services/property/verification/legal-heir-certificate' },
      { name: 'Succession Certificate', href: '/services/property/verification/succession-certificate' },
    ],
  },
  {
    title: 'Real Estate & Infrastructure',
    icon: Building2,
    description: 'RERA, FDI, SEZ, PPP, project finance, land acquisition & real estate litigation.',
    services: [
      { name: 'RERA Registration & Compliances', href: '/services/property/real-estate/rera-registration' },
      { name: 'FDI in Real Estate', href: '/services/property/real-estate/fdi' },
      { name: 'Special Economic Zones', href: '/services/property/real-estate/sez' },
      { name: 'Sell / Purchase / Development of Land', href: '/services/property/real-estate/sell-purchase-development' },
      { name: 'PPP (Public Private Partnership)', href: '/services/property/real-estate/ppp' },
      { name: 'Property Dispute Resolution & Arbitration', href: '/services/property/real-estate/dispute-arbitration' },
      { name: 'Real Estate Project Finance', href: '/services/property/real-estate/project-finance' },
      { name: 'Land Acquisition', href: '/services/property/real-estate/land-acquisition' },
      { name: 'Real Estate Litigation (RERA)', href: '/services/property/real-estate/litigation' },
      { name: 'Title Clearance & Due Diligence', href: '/services/property/real-estate/title-clearance' },
    ],
  },
];

export default function PropertyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Property <span className="text-primary">Legal Services</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            From deed registration and title verification to RERA compliance and
            real estate litigation — end-to-end legal support for every property
            transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {propertyCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-slate-100 p-8 rounded-[40px] hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <cat.icon className="w-7 h-7 text-slate-900 group-hover:text-primary" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                {cat.description}
              </p>
              <div className="space-y-3 mb-8 flex-1">
                {cat.services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 shrink-0" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className="w-full bg-slate-900 text-white py-4 rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors"
              >
                Enquire Now
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
