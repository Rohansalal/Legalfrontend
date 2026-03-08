import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ShieldCheck, Search, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Trademark Name Search - Legal Door',
  description: 'Comprehensive trademark search across all 45 classes to ensure your brand name is safe to use.',
};

export default function TrademarkSearchPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Trademark Name <span className="text-primary">Search</span></h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                  Securing your brand begins with an exhaustive trademark search. Don&apos;t risk legal battles; verify that your name is unique and legally registrable.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                    <Search className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold text-slate-900 mb-2">Public Search</h4>
                    <p className="text-xs text-slate-500 font-medium">Checking the IP India database for direct and phonetic matches.</p>
                  </div>
                  <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                    <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-bold text-slate-900 mb-2">Class Search</h4>
                    <p className="text-xs text-slate-500 font-medium">Verification in relevant trademark classes out of 45 available classes.</p>
                  </div>
                </div>
              </section>

              <div className="space-y-6">
                <h3 className="text-2xl font-black text-slate-900">Why Search?</h3>
                <div className="space-y-4">
                  {[
                    'Avoid legal notices and expensive lawsuits.',
                    'Prevent opposition from established brand owners.',
                    'Ensure 100% ownership of your business name.',
                    'Save time on registration that might get rejected.',
                    'Build brand credibility and market trust.'
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <ShieldAlert className="w-5 h-5 text-primary" />
                      <span className="text-sm font-bold text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
                <h3 className="text-xl font-black mb-4 text-primary">Need a Report?</h3>
                <p className="text-sm text-white/70 mb-6 font-medium leading-relaxed">Our experts provide a detailed trademark search report within 24 hours.</p>
                <button className="w-full bg-primary text-white font-black py-3 rounded-xl hover:bg-orange-600 transition-colors">Order Search Report</button>
              </div>
              
              <div className="border border-slate-200 p-8 rounded-3xl">
                <h4 className="font-bold text-slate-900 mb-4">Search Coverage:</h4>
                <ul className="space-y-3">
                  <li className="text-sm font-bold text-slate-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Device Mark (Logo)
                  </li>
                  <li className="text-sm font-bold text-slate-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Word Mark (Name)
                  </li>
                  <li className="text-sm font-bold text-slate-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Phonetic Similarities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
