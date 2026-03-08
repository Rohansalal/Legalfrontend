import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';

export const metadata = {
  title: 'LLP Registration - Legal Door',
  description: 'Easy and efficient Limited Liability Partnership (LLP) registration services.',
};

export default function LLPPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Limited Liability Partnership (LLP)</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              An LLP combines the benefits of a partnership and a limited company. It's an ideal structure for professional services and small to medium businesses.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Limited Liability for Partners</li>
                <li>Low Compliance Requirements</li>
                <li>Flexible Management</li>
                <li>No Minimum Capital Requirement</li>
                <li>Tax Benefits over Companies</li>
              </ul>
            </div>
            
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Registration Process</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Obtain DSC for Partners</li>
                <li>Apply for Name Reservation</li>
                <li>File Incorporation Documents</li>
                <li>Draft & Execute LLP Agreement</li>
                <li>Apply for PAN & TAN</li>
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
