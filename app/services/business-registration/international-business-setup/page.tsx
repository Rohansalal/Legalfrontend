import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';

export const metadata = {
  title: 'International Business Setup - Legal Door',
  description: 'Expand your business globally with our international company registration services in the USA, UK, Dubai, and Singapore.',
};

const internationalServices = [
  { name: 'USA Company', href: '/business-registration/international-business-setup/usa-company' },
  { name: 'UK Company', href: '/business-registration/international-business-setup/uk-company' },
  { name: 'Dubai Company', href: '/business-registration/international-business-setup/dubai-company' },
  { name: 'Singapore Company', href: '/business-registration/international-business-setup/singapore-company' },
];

export default function InternationalBusinessSetupPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">International Business Setup</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground text-center mb-12">
            Taking your business global is a big step. We make it easier with our specialized services for international business setup.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {internationalServices.map((service) => (
              <a 
                key={service.name} 
                href={service.href} 
                className="block bg-card hover:bg-muted border p-8 rounded-lg text-center transition-colors"
              >
                <h3 className="text-2xl font-semibold">{service.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
