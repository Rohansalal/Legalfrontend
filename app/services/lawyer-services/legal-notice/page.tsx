import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { FileText, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Legal Notice Services - Legal Door',
  description: 'Professional legal notice drafting and response services.',
};

const services = [
  { title: 'Legal Notice Drafting', description: 'Professional drafting of legal notices for various purposes.' },
  { title: 'Legal Notice Response', description: 'Expert response to legal notices received.' },
  { title: 'Demand Notice', description: 'Drafting and sending demand notices for payment or action.' },
];

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Legal <span className="text-primary">Notice</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Professional legal notice drafting and response services to protect your legal rights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="bg-white border border-slate-100 p-8 rounded-[40px] hover:shadow-2xl transition-all duration-500 flex flex-col group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                <FileText className="w-7 h-7 text-slate-900 group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{service.title}</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1">{service.description}</p>
              <Link href="/contact" className="w-full bg-slate-900 text-white py-4 rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors">
                Enquire Now
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Why Choose Our Legal Notice Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['Experienced legal professionals', 'Quick turnaround time', 'Proper legal format', 'Filing assistance'].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
