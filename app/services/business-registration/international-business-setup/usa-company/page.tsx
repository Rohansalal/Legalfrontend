import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';

export const metadata = {
  title: 'USA Company Registration - Legal Door',
  description: 'Incorporate your business in the USA from anywhere in the world. We handle the paperwork for you.',
};

export default function USACompanyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">USA Company Registration</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              Incorporating a company in the USA offers unmatched credibility and access to the world&apos;s largest market and venture capital ecosystem.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Why Incorporate in USA?</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access to US Market & Investors</li>
                <li>Limited Liability Protection</li>
                <li>World-Class Business Infrastructure</li>
                <li>Tax Advantages (Specific States)</li>
                <li>Global Recognition & Trust</li>
              </ul>
            </div>
            
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>LLC or C-Corp Formation</li>
                <li>Registered Agent Services</li>
                <li>EIN (Employer Identification Number)</li>
                <li>Operating Agreement Preparation</li>
                <li>Post-Incorporation Support</li>
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
