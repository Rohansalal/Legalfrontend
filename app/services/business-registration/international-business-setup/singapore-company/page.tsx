import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';

export const metadata = {
  title: 'Singapore Company Registration - Legal Door',
  description: 'Incorporate your company in Singapore, the top business destination in Asia. We help with all legal formalities.',
};

export default function SingaporeCompanyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Singapore Company Registration</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              Singapore is consistently ranked as the easiest place to do business in the world. Its strategic location and business-friendly policies make it a top choice.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Why Singapore?</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Ease of Doing Business</li>
                <li>Strategic Location in South East Asia</li>
                <li>World-Class Infrastructure</li>
                <li>Attractive Corporate Tax Rates</li>
                <li>Excellent Global Connectivity</li>
              </ul>
            </div>
            
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Registration Needs</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Company Name Approval</li>
                <li>Minimum One Resident Director</li>
                <li>Company Secretary Appointment</li>
                <li>Paid-up Capital of at least S$1</li>
                <li>Registered Office Address in Singapore</li>
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
