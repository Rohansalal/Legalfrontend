import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Search, ShieldCheck, Globe, Zap, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Company Name Search & Consultation - Legal Door',
  description: 'Comprehensive business naming services including MCA search, Trademark check, and Brand consultation.',
};

const nameServices = [
  {
    title: 'MCA Name Search',
    description: 'Check real-time availability of your proposed company name with the Ministry of Corporate Affairs.',
    href: '/business-registration/company-name-search/mca-name-search',
    icon: Search
  },
  {
    title: 'Trademark Name Search',
    description: 'Ensure your brand name is unique and doesn\'t infringe on existing trademarks in your industry.',
    href: '/business-registration/company-name-search/trademark-name-search',
    icon: ShieldCheck
  },
  {
    title: 'Domain Name Check',
    description: 'Verify if the matching .com, .in or other domain extensions are available for your business.',
    href: '/business-registration/company-name-search/domain-name-check',
    icon: Globe
  },
  {
    title: 'RUN Application',
    description: 'Reserve Unique Name (RUN) application with the ROC to secure your company name before registration.',
    href: '/business-registration/company-name-search/run-application',
    icon: Zap
  },
  {
    title: 'Brand Name Consultation',
    description: 'Expert advice on choosing a name that is legally strong, marketable, and easy to remember.',
    href: '/business-registration/company-name-search/brand-name-consultation',
    icon: Lightbulb
  }
];

export default function CompanyNameSearchPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Company Name <span className="text-primary">Search</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            The right name is the foundation of your brand. We provide exhaustive search and reservation services to ensure your business starts with a unique and legally protected identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {nameServices.map((service) => (
            <Link 
              key={service.title} 
              href={service.href}
              className="group bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-2xl hover:border-primary transition-all duration-300 flex flex-col items-start"
            >
              <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-primary/10 transition-colors mb-6">
                <service.icon className="w-6 h-6 text-slate-900 group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                {service.description}
              </p>
              <span className="mt-auto text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
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
