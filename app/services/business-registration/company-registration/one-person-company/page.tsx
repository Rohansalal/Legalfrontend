import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';

export const metadata = {
  title: 'One Person Company Registration - Legal Door',
  description: 'Specialized services for solo entrepreneurs to register their own One Person Company (OPC).',
};

export default function OPCPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">One Person Company (OPC)</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              An OPC allows a single person to form a company with all the benefits of a corporate entity while maintaining full control.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Why Choose OPC?</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Full Control for One Person</li>
                <li>Limited Liability Protection</li>
                <li>Separate Legal Identity</li>
                <li>Corporate Status for Sole Businesses</li>
                <li>Fewer Compliance compared to Pvt. Ltd.</li>
              </ul>
            </div>
            
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Main Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>One Director and One Shareholder</li>
                <li>Indian Citizen & Resident is Required</li>
                <li>Nominee Appointment is Mandatory</li>
                <li>Registered Office Address</li>
                <li>Digital Signature for the Director</li>
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
