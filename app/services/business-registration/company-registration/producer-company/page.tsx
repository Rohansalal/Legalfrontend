import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';

export const metadata = {
  title: 'Producer Company Registration - Legal Door',
  description: 'Support and guidance for farmers and primary producers to register as a Producer Company.',
};

export default function ProducerCompanyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Producer Company</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              A Producer Company is formed by primary producers like farmers or people involved in agricultural activities to improve their income and standard of living.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Core Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Better Access to Markets</li>
                <li>Shared Processing Facilities</li>
                <li>Limited Liability Protection</li>
                <li>Corporate Status for Primary Producers</li>
                <li>Eligibility for Government Grants</li>
              </ul>
            </div>
            
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Registration Criteria</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Minimum of 5 Directors</li>
                <li>Minimum of 10 Producer Members</li>
                <li>Minimum Paid-up Capital of 5 Lakhs</li>
                <li>Must be Primary Producers</li>
                <li>DSC for all Directors</li>
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
