import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Soup, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';

export const metadata = {
  title: 'FSSAI License Registration - Legal Door',
  description: 'Apply for your FSSAI food license with our professional assistance for a smooth registration process.',
};

export default function FSSAILicensePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">FSSAI <span className="text-primary">License</span></h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                FSSAI (Food Safety and Standards Authority of India) registration is mandatory for any business involved in the manufacturing, processing, storage, distribution, and sale of food products.
              </p>
              <div className="grid gap-4">
                {[
                  'FSSAI Registration (Small Business)',
                  'FSSAI State License (Medium Business)',
                  'FSSAI Central License (Large Business)',
                  'License Renewal & Modification'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm items-center">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <h3 className="text-xl font-black mb-6">Key Benefits:</h3>
              <ul className="space-y-4">
                {[
                  'Builds consumer trust and brand identity.',
                  'Legal advantages for food startups.',
                  'Facilitates expansion and government funding.',
                  'Improves food safety and quality management.',
                  'Mandatory for e-commerce food selling.',
                  'Assurance for safe and hygienic food.'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/70 leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    {benefit}
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
