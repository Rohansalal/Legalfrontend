import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Globe, Plane, Ship, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Import Export Code (IEC) - Legal Door',
  description: 'Apply for your Import Export Code to expand your business globally with our expert assistance.',
};

export default function ImportExportCodePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Import Export <span className="text-primary">Code (IEC)</span></h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                The Import Export Code (IEC) is a 10-digit identification number issued by the DGFT, which is mandatory for any person/business looking to import or export goods and services.
              </p>
              <div className="grid gap-4">
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-xl shrink-0">
                    <Plane className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed">Expand your business reach to international markets and global customers.</p>
                </div>
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex gap-4">
                  <div className="w-12 h-12 bg-green-50 flex items-center justify-center rounded-xl shrink-0">
                    <Ship className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-sm font-bold text-slate-700 leading-relaxed">Required to clear customs, ship products abroad, and send/receive payments.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <h3 className="text-xl font-black mb-6">Key Features of IEC:</h3>
              <ul className="space-y-4">
                {[
                  'Lifetime validity - no need to renew.',
                  'No compliance or filing required for IEC.',
                  'Available for individuals and all types of firms.',
                  'Necessary to claim export-based incentives.',
                  'Smooth customs clearance for imports.',
                  'Essential for international banking.'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
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
