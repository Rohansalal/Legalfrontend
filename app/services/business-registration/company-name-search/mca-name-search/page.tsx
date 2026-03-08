import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Search, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'MCA Name Search - Legal Door',
  description: 'Real-time MCA name availability check and expert guidance for company name reservation.',
};

export default function MCANameSearchPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">MCA Name <span className="text-primary">Search</span></h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                  Before you register a company in India, you must ensure that your proposed name is unique and complies with the Ministry of Corporate Affairs (MCA) naming guidelines.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Uniqueness Check</h4>
                      <p className="text-sm text-slate-500 font-medium">We check your name against the database of millions of registered companies and LLPs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Guideline Compliance</h4>
                      <p className="text-sm text-slate-500 font-medium">Ensuring the name doesn't contain prohibited words or violate the Emblems and Names Act.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h3 className="text-2xl font-black text-slate-900">MCA Naming Rules</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Must be unique and not similar to existing names.',
                    'Should not be offensive or undesirable.',
                    'Must include the suffix (Pvt Ltd, LLP, etc.).',
                    'Should not violate registered trademarks.',
                    'Words like "Global" or "International" have capital requirements.',
                    'Should reflect the business activity clearly.'
                  ].map((rule, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-bold text-slate-700">{rule}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <div className="bg-primary p-8 rounded-3xl text-white shadow-xl">
                <h3 className="text-xl font-black mb-4">Check Availability</h3>
                <p className="text-sm text-white/80 mb-6 font-medium">Send us your proposed name and we will conduct a professional search for you.</p>
                <div className="space-y-4">
                  <input type="text" placeholder="Proposed Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-medium placeholder:text-white/40 focus:outline-none focus:bg-white/20" />
                  <button className="w-full bg-white text-primary font-black py-3 rounded-xl hover:bg-slate-50 transition-colors">Search Now</button>
                </div>
              </div>
              
              <div className="bg-slate-900 p-8 rounded-3xl text-white">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="w-5 h-5 text-orange-400" />
                  <h4 className="font-bold text-sm uppercase tracking-wider">Expert Tip</h4>
                </div>
                <p className="text-sm text-white/70 font-medium leading-relaxed">
                  Always have at least 2-3 alternate names ready in case your first choice is rejected by the ROC.
                </p>
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
