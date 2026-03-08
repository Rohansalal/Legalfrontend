import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Calculator, CheckCircle2, FileCheck, Shield } from 'lucide-react';

export const metadata = {
  title: 'GST Registration - Legal Door',
  description: 'Fast and reliable GST registration services for businesses of all sizes.',
};

export default function GSTRegistrationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">GST <span className="text-primary">Registration</span></h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Goods and Services Tax (GST) is an indirect tax used in India on the supply of goods and services. Registration is mandatory for businesses with a turnover exceeding certain thresholds.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  'Turnover-based registration',
                  'Inter-state supply mandatory registration',
                  'E-commerce operator registration',
                  'Casual taxable person registration'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <h3 className="text-xl font-black mb-6">Documents Needed:</h3>
              <ul className="space-y-4">
                {[
                  'PAN Card of Business/Proprietor',
                  'Aadhaar Card of Stakeholders',
                  'Address Proof of Business Place',
                  'Bank Account Statement/Cheque',
                  'Digital Signature (for Companies/LLP)',
                  'Letter of Authorization'
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/70">
                    <FileCheck className="w-4 h-4 text-primary" />
                    {doc}
                  </li>
                ))}
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
