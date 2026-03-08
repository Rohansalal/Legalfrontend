import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Scale, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Litigation Services - Legal Door',
  description: 'Expert litigation services for civil, criminal and high court cases.',
};

const services = [
  { title: 'Civil Litigation', description: 'Representation in civil disputes and cases.' },
  { title: 'Criminal Litigation', description: 'Defence in criminal matters and cases.' },
  { title: 'High Court Litigation', description: 'Representation in High Court matters.' },
  { title: 'Supreme Court', description: 'Supreme Court appearance and representation.' },
];

export default function LitigationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6"><span className="text-primary">Litigation</span> Services</h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Expert litigation services for all your legal disputes in civil, criminal and higher courts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="bg-white border border-slate-100 p-8 rounded-[40px] hover:shadow-2xl transition-all duration-500 flex flex-col group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                <Scale className="w-7 h-7 text-slate-900 group-hover:text-primary" />
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
