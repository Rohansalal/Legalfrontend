import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Briefcase, Building, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Trade License Registration - Legal Door',
  description: 'Obtain your municipal trade license with professional support to conduct business activities legally.',
};

export default function TradeLicensePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Trade <span className="text-primary">License</span></h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                <Building className="absolute top-6 right-6 w-20 h-20 text-slate-50 group-hover:text-primary/5 transition-colors" />
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6 relative z-10">
                  A Trade License is a document/certificate that gives the permission to an entity to carry on a particular trade or business in a particular area, issued by the local Municipal Corporation.
                </p>
                <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm relative z-10">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm font-bold text-slate-700 leading-relaxed">Required for commercial activities, manufacturing, food shops, and more.</p>
                </div>
              </section>

              <div className="space-y-6">
                <h3 className="text-2xl font-black text-slate-900">Types of Trade Licenses:</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: 'Industries License', text: 'Small, medium, and large-scale manufacturing units.' },
                    { title: 'Shop License', text: 'Shops selling various goods, items, and services.' },
                    { title: 'Food Establishment License', text: 'Hotels, restaurants, bakeries, and food shops.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</h4>
                        <p className="text-xs text-slate-500 font-medium">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 p-8 rounded-3xl text-white">
                <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-primary">
                  Importance
                </h3>
                <ul className="space-y-4">
                  {[
                    'Legally conduct business in a locality.',
                    'Regulatory body monitoring and control.',
                    "Ensures business doesn't pose public health issues.",
                    'Prevents legal consequences and penalties.',
                    'Enhances business goodwill in market.'
                  ].map((doc, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-bold text-white/70 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {doc}
                    </li>
                  ))}
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
