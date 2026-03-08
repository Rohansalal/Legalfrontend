import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';

export const metadata = {
  title: 'Startup India Registration - Legal Door',
  description: 'Unlock exclusive benefits and incentives with our expert Startup India registration services.',
};

export default function StartupIndiaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Startup India Registration</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              Register your startup under the Startup India initiative to access tax exemptions, funding opportunities, and various other benefits.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>3-Year Tax Holiday</li>
                <li>80% Rebate on Patent Filing</li>
                <li>Self-Certification under Labor Laws</li>
                <li>Easy Winding Up Process</li>
                <li>Access to Government Funding</li>
              </ul>
            </div>
            
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Must be a Pvt Ltd, LLP, or Partnership Firm</li>
                <li>Less than 10 years from Incorporation</li>
                <li>Turnover should not exceed 100 Crores</li>
                <li>Working towards Innovation & Improvement</li>
                <li>Scalable Business Model with Potential</li>
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
