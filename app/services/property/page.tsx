import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { FileText, Landmark, Search, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Property Services & Legal Support - Legal Door',
  description: 'Expert legal support for property documentation, registration, and verification.',
};

const propertyCategories = [
  {
    title: 'Property Documentation',
    icon: FileText,
    services: [
      { name: 'Sale Deed Drafting', href: '/services/property/property-documentation/sale-deed-drafting' },
      { name: 'Gift Deed', href: '/services/property/property-documentation/gift-deed' },
      { name: 'Rental Agreement', href: '/services/property/property-documentation/rental-agreement' },
      { name: 'Lease Agreement', href: '/services/property/property-documentation/lease-agreement' }
    ]
  },
  {
    title: 'Property Registration',
    icon: Landmark,
    services: [
      { name: 'Property Registration', href: '/services/property/property-registration/registration' },
      { name: 'Stamp Duty Calculation', href: '/services/property/property-registration/stamp-duty' },
      { name: 'Property Mutation', href: '/services/property/property-registration/mutation' }
    ]
  },
  {
    title: 'Property Verification',
    icon: ShieldCheck,
    services: [
      { name: 'Title Verification', href: '/services/property/property-verification/title-verification' },
      { name: 'Land Record Check', href: '/services/property/property-verification/land-record' },
      { name: 'Legal Due Diligence', href: '/services/property/property-verification/due-diligence' }
    ]
  }
];

export default function PropertyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Property <span className="text-primary">Legal Services</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Navigating property laws can be complex. We provide comprehensive legal support to ensure your property transactions are safe, transparent, and legally sound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {propertyCategories.map((cat) => (
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
