import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Cheque Bounce Lawyers - Legal Door',
  description: 'Expert legal services for cheque bounce cases under NI Act.',
};

const services = [
  { title: 'NI Act Case', description: 'Legal representation for cases under Negotiable Instruments Act.' },
  { title: 'Cheque Dishonor', description: 'Legal remedy for cheque dishonor cases.' },
  { title: 'Legal Remedy', description: 'Complete legal solutions for cheque bounce issues.' },
];

export default function ChequeBouncePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Cheque <span className="text-primary">Bounce</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Expert legal representation for cheque bounce cases under NI Act.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="bg-white border border-slate-100 p-8 rounded-[40px] hover:shadow-2xl transition-all duration-500 flex flex-col group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                <AlertTriangle className="w-7 h-7 text-slate-900 group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4">{service.title}</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1">{service.description}</p>
              <Link href="/contact" className="w-full bg-slate-900 text-white py-4 rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors">
                Enquire Now
              </Link>
            </div>
          ))}
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
