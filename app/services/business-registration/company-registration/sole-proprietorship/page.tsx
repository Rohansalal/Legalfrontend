import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';

export const metadata = {
  title: 'Sole Proprietorship Registration - Legal Door',
  description: 'Simplest way to start your business as an individual. We help you with all the necessary registrations.',
};

export default function SoleProprietorshipPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Sole Proprietorship</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              Sole Proprietorship is the simplest form of business where an individual owns, manages, and controls the entire business.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Advantages</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Easy to Start and Close</li>
                <li>Full Control & Ownership</li>
                <li>Low Compliance Burden</li>
                <li>Lower Taxation (Individuals)</li>
                <li>Full Privacy in Operations</li>
              </ul>
            </div>
            
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Necessary Registrations</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>GST Registration (if required)</li>
                <li>Udyam/MSME Registration</li>
                <li>Shop and Establishment License</li>
                <li>PAN Card for the Proprietor</li>
                <li>Bank Account in Business Name</li>
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
