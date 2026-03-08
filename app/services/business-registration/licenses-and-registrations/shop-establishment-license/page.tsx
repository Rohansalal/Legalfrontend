import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Building, ClipboardCheck, Info, FileText } from 'lucide-react';

export const metadata = {
  title: 'Shop & Establishment License - Legal Door',
  description: 'Apply for your Shop and Establishment license with professional guidance to ensure local law compliance.',
};

export default function ShopEstablishmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Shop & Establishment <span className="text-primary">License</span></h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <section className="bg-slate-50 p-8 rounded-[40px] border border-slate-100">
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                  Every shop and commercial establishment in India must register under the respective State&apos;s Shop and Establishment Act within 30 days of commencing operations.
                </p>
                <div className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <Info className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm font-bold text-slate-700 leading-relaxed">It regulates working hours, child labor, payment of wages, and holidays in the workplace.</p>
                </div>
              </section>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Mandatory Compliance', text: 'Required for all commercial shops, hotels, theaters, and more.' },
                  { title: 'Bank Account Opening', text: 'Essential document needed to open a business bank account.' },
                  { title: 'Proof of Business', text: 'Acts as a legal proof for the existence of your business.' },
                  { title: 'Subsidies & Benefits', text: 'Helps in availing government subsidies and financial aid.' }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary p-8 rounded-3xl text-white">
                <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5" />
                  Quick Apply
                </h3>
                <div className="space-y-4">
                  <input type="text" placeholder="State of Operation" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-medium placeholder:text-white/40 focus:outline-none focus:bg-white/20" />
                  <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-medium placeholder:text-white/40 focus:outline-none focus:bg-white/20" />
                  <button className="w-full bg-white text-primary font-black py-3 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">Start Application</button>
                </div>
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
