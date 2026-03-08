import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Award, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'ISO Certification - Legal Door',
  description: 'Standardize your business processes and boost your brand reputation with our expert ISO certification services.',
};

export default function ISOCertificationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest mb-6">
            <Award className="w-4 h-4 text-primary" />
            Global Standards
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">ISO <span className="text-primary">Certification</span></h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            ISO certification is a global benchmark that proves your business meets international quality and security standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            { id: '9001', title: 'Quality Management', text: 'ISO 9001:2015 helps companies meet customer requirements more effectively.' },
            { id: '14001', title: 'Environmental', text: 'ISO 14001 ensures your business minimizes environmental impact.' },
            { id: '27001', title: 'Information Security', text: 'ISO 27001 provides a robust framework for managing sensitive data.' },
            { id: '22000', title: 'Food Safety', text: 'ISO 22000 ensures safety across the entire food supply chain.' },
            { id: '45001', title: 'Occupational Health', text: 'ISO 45001 focus on employee safety and health at the workplace.' },
            { id: 'Other', title: 'Specialized ISO', text: 'Custom ISO certifications like ISO 13485 (Medical) or ISO 20000 (ITSM).' }
          ].map((iso) => (
            <div key={iso.id} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center font-black text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {iso.id}
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-3">{iso.title}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{iso.text}</p>
            </div>
          ))}
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
