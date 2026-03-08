import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';

export const metadata = {
  title: 'Dubai Company Registration - Legal Door',
  description: 'Setup your business in Dubai and UAE. We offer Mainland, Free Zone, and Offshore company formation services.',
};

export default function DubaiCompanyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Dubai (UAE) Company Registration</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              Dubai is a global business hub offering a tax-free environment and world-class infrastructure. It&apos;s a gateway between East and West.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Why Dubai?</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>0% Corporate and Income Tax</li>
                <li>100% Foreign Ownership in Free Zones</li>
                <li>World-Class Infrastructure & Logistics</li>
                <li>Easy Access to MEASA Region</li>
                <li>Vibrant Business Ecosystem</li>
              </ul>
            </div>
            
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Formation Options</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Mainland Company</li>
                <li>Free Zone Company</li>
                <li>Offshore Company</li>
                <li>Branch Office Setup</li>
                <li>Visa & Licensing Support</li>
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
