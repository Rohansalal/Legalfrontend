import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';

export const metadata = {
  title: 'Business Registration - Legal Door',
  description: 'Expert guidance for your business registration needs. Start your business journey with confidence.',
};

export default function BusinessRegistrationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Business Registration</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              We offer a comprehensive range of business registration services to help you establish and grow your business. Our expert team will guide you through every step of the process.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">Company Registration</h2>
              <p className="text-muted-foreground mb-6">
                Register your business as a Private Limited, LLP, One Person Company, and more.
              </p>
              <Link href="/services/business-registration/company-registration" className="text-primary font-medium hover:underline">View Services &rarr;</Link>
            </div>
            
            <div className="bg-card border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">International Business Setup</h2>
              <p className="text-muted-foreground mb-6">
                Expand your horizons with international company registration in USA, UK, Dubai, and Singapore.
              </p>
              <Link href="/services/business-registration/international-business-setup" className="text-primary font-medium hover:underline">View Services &rarr;</Link>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
