import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { FileText, Shield, Soup, Globe, Briefcase, Calculator, Award, Landmark, Building } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Licenses & Registrations - Legal Door',
  description: 'Apply for essential business licenses and registrations including GST, MSME, FSSAI, and more.',
};

const licenseServices = [
  {
    title: 'GST Registration',
    description: 'Get Goods and Services Tax registration for your business to operate legally and claim input tax credit.',
    href: '/business-registration/licenses-and-registrations/gst-registration',
    icon: Calculator
  },
  {
    title: 'Shop & Establishment',
    description: 'Mandatory license for businesses operating within municipal limits to regulate working conditions.',
    href: '/business-registration/licenses-and-registrations/shop-establishment-license',
    icon: Building
  },
  {
    title: 'FSSAI License',
    description: 'Essential food safety registration for anyone involved in manufacturing, processing, or selling food.',
    href: '/business-registration/licenses-and-registrations/fssai-license',
    icon: Soup
  },
  {
    title: 'Import Export Code',
    description: 'The Import Export Code (IEC) is mandatory for any business looking to trade goods globally.',
    href: '/business-registration/licenses-and-registrations/import-export-code',
    icon: Globe
  },
  {
    title: 'Trade License',
    description: 'Get permission from the local municipality to carry out specific trade activities in a particular area.',
    href: '/business-registration/licenses-and-registrations/trade-license',
    icon: Briefcase
  },
  {
    title: 'Professional Tax',
    description: 'Registration for taxes levied by state governments on individuals earning income from profession or trade.',
    href: '/business-registration/licenses-and-registrations/professional-tax',
    icon: FileText
  },
  {
    title: 'ISO Certification',
    description: 'Standardize your business processes and improve quality management with global ISO standards.',
    href: '/business-registration/licenses-and-registrations/iso-certification',
    icon: Award
  },
  {
    title: 'MSME Registration',
    description: 'Register under the MSME Act to avail subsidies, government schemes, and financial benefits.',
    href: '/business-registration/licenses-and-registrations/msme-registration',
    icon: Landmark
  }
];

export default function LicensesRegistrationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Licenses & <span className="text-primary">Registrations</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Stay compliant and unlock business opportunities with our expert licensing services. From tax registrations to industry-specific permits, we handle all the paperwork for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {licenseServices.map((service) => (
            <Link 
              key={service.title} 
              href={service.href}
              className="group bg-white border border-slate-100 p-8 rounded-3xl hover:shadow-2xl hover:border-primary transition-all duration-300 flex flex-col"
            >
              <div className="p-3 rounded-2xl bg-slate-50 group-hover:bg-primary/10 transition-colors mb-6 w-fit">
                {service.icon ? <service.icon className="w-6 h-6 text-slate-900 group-hover:text-primary" /> : <div className="w-6 h-6" />}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                {service.description}
              </p>
              <span className="mt-auto text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
