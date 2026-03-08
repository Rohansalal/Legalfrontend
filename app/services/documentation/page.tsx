import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { FileText, Briefcase, Home, User, Building2, ArrowRight, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Legal Documentation & Drafting - Legal Door',
  description: 'Professional drafting of business, property, personal, and corporate legal documents.',
};

const documentationCategories = [
  {
    title: 'Business Documentation',
    icon: Briefcase,
    services: [
      { name: 'NDA Drafting', href: '/services/documentation/business-documents/nda' },
      { name: 'MOU Drafting', href: '/services/documentation/business-documents/mou' },
      { name: 'Vendor Agreement', href: '/services/documentation/business-documents/vendor-agreement' },
      { name: 'Shareholders Agreement', href: '/services/documentation/business-documents/shareholders-agreement' },
      { name: 'Founders Agreement', href: '/services/documentation/business-documents/founder-agreement' }
    ]
  },
  {
    title: 'Property Documentation',
    icon: Home,
    services: [
      { name: 'Rent Agreement', href: '/services/documentation/property-documents/rental-agreement' },
      { name: 'Sale Agreement', href: '/services/documentation/property-documents/sale-deed' },
      { name: 'Lease Agreement', href: '/services/documentation/property-documents/lease-agreement' },
      { name: 'Property Partition Deed', href: '/services/documentation/property-documents/partition-deed' }
    ]
  },
  {
    title: 'Personal Documents',
    icon: User,
    services: [
      { name: 'Affidavit', href: '/services/documentation/personal-legal-documents/affidavits' },
      { name: 'Power of Attorney', href: '/services/documentation/personal-legal-documents/power-of-attorney' },
      { name: 'Will', href: '/services/documentation/personal-legal-documents/wills-trusts' },
      { name: 'Succession Certificate', href: '/services/documentation/personal-legal-documents/succession-certificate' }
    ]
  },
  {
    title: 'Employment & HR',
    icon: Users,
    services: [
      { name: 'Employment Agreement', href: '/services/documentation/employment-hr/employment-agreement' },
      { name: 'Offer Letter', href: '/services/documentation/employment-hr/offer-letter' },
      { name: 'Internship Agreement', href: '/services/documentation/employment-hr/internship-agreement' },
      { name: 'HR Policy', href: '/services/documentation/employment-hr/hr-policy' }
    ]
  }
];

export default function DocumentationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Legal <span className="text-primary">Documentation</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Error-free legal drafting for every need. Our legal experts ensure your documents are precisely drafted and legally compliant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {documentationCategories.map((cat) => (
            <div key={cat.title} className="bg-white border border-slate-100 p-8 rounded-[40px] hover:shadow-2xl transition-all duration-500 flex flex-col group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                <cat.icon className="w-7 h-7 text-slate-900 group-hover:text-primary" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">{cat.title}</h3>
              <div className="space-y-4 mb-8 flex-1">
                {cat.services.map((service) => (
                  <Link 
                    key={service.name} 
                    href={service.href}
                    className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link href="#" className="w-full bg-slate-900 text-white py-4 rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors">
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
