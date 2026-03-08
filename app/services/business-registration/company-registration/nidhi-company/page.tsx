import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';

export const metadata = {
  title: 'Nidhi Company Registration - Legal Door',
  description: 'Specialized assistance for registering a Nidhi Company to promote savings among members.',
};

export default function NidhiCompanyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20 px-4 pt-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Nidhi Company</h1>
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground text-center">
              A Nidhi Company is a type of company in the Indian non-banking financial sector, recognized under section 406 of the Companies Act, 2013. Its main purpose is to cultivate the habit of thrift and savings among its members.
            </p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Core Objectives</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Borrow and Lend money only between members</li>
                <li>Encourage the habit of saving among members</li>
                <li>Mutual Benefit for its members</li>
                <li>Operate primarily in local communities</li>
                <li>Low cost of registration and maintenance</li>
              </ul>
            </div>
            
            <div className="bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Key Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Minimum of 3 Directors</li>
                <li>Minimum of 7 Shareholders</li>
                <li>Minimum Paid-up Capital of 5 Lakhs</li>
                <li>Digital Signature for Directors</li>
                <li>Specific suffix &quot;Nidhi Limited&quot; in the name</li>
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
