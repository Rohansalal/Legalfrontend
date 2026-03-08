import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';

export const metadata = {
  title: 'Company Registration - Legal Door',
  description: 'Fast and efficient company registration services tailored to your business needs.',
};

const companyServices = [
  { name: 'Private Limited Company', href: '/services/business-registration/company-registration/private-limited-company' },
  { name: 'Limited Liability Partnership', href: '/services/business-registration/company-registration/limited-liability-partnership' },
  { name: 'One Person Company', href: '/services/business-registration/company-registration/one-person-company' },
  { name: 'Sole Proprietorship', href: '/services/business-registration/company-registration/sole-proprietorship' },
  { name: 'Nidhi Company', href: '/services/business-registration/company-registration/nidhi-company' },
  { name: 'Producer Company', href: '/services/business-registration/company-registration/producer-company' },
  { name: 'Partnership Firm', href: '/services/business-registration/company-registration/partnership-firm' },
  { name: 'Startup India Registration', href: '/services/business-registration/company-registration/startup-india-registration' },
];

export default function CompanyRegistrationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Company Registration</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground text-center mb-12">
            Explore our comprehensive range of company registration services. Whether you're a startup or an established firm, we have the right legal structure for your success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyServices.map((service) => (
              <Link 
                key={service.name} 
                href={service.href} 
                className="block bg-card hover:bg-muted border p-6 rounded-lg text-center transition-colors"
              >
                <h3 className="text-xl font-semibold">{service.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
