import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';

export const metadata = {
  title: 'Partnership Firm Registration - Legal Door',
  description: 'Easy and professional partnership firm registration for your shared business vision.',
};

export default function PartnershipFirmPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Partnership Firm</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              A partnership firm is a business structure where two or more individuals manage and operate a business according to a partnership deed.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Simple to Form and Manage</li>
                <li>Shared Responsibility and Risk</li>
                <li>Combined Skills and Capital</li>
                <li>No Minimum Capital Requirement</li>
                <li>Ease of Compliance</li>
              </ul>
            </div>
            
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Necessary Steps</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Draft a Partnership Deed</li>
                <li>Notarize the Partnership Deed</li>
                <li>Apply for PAN and TAN in Firm Name</li>
                <li>Register the Deed (Optional but Recommended)</li>
                <li>GST Registration (if required)</li>
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
