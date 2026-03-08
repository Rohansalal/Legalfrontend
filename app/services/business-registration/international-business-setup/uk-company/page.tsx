import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';

export const metadata = {
  title: 'UK Company Registration - Legal Door',
  description: 'Quick and professional UK company incorporation services for international entrepreneurs.',
};

export default function UKCompanyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">UK Company Registration</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              The UK is one of the easiest places in the world to start and run a business, with a simple registration process and a prestigious reputation.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Key Advantages</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Efficient Registration (24-48 Hours)</li>
                <li>Highly Prestigious Jurisiction</li>
                <li>Access to European and Global Markets</li>
                <li>Straightforward Compliance</li>
                <li>Low Share Capital Requirements</li>
              </ul>
            </div>
            
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Registration Includes</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Certificate of Incorporation</li>
                <li>Memorandum & Articles of Association</li>
                <li>Registered Office Address in UK</li>
                <li>Companies House Filings</li>
                <li>Share Certificates for Directors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
