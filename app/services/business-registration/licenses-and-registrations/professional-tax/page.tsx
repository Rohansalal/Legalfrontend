import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Calculator, CheckCircle2, FileText, Landmark } from 'lucide-react';

export const metadata = {
  title: 'Professional Tax Registration - Legal Door',
  description: 'Apply for Professional Tax registration for your employees and business with our expert support.',
};

export default function ProfessionalTaxPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Professional <span className="text-primary">Tax</span></h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Professional tax is a tax levied by the state governments in India on any individual who earns an income from salary or anyone who practices a profession.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm items-start">
                  <Landmark className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="text-sm font-bold text-slate-700 leading-relaxed">Mandatory for all employers and professionals across various states in India.</p>
                </div>
                <div className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm items-start">
                  <Calculator className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="text-sm font-bold text-slate-700 leading-relaxed">Amount varies by state but is capped at ₹2,500 per year per individual.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <h3 className="text-xl font-black mb-6">Tax Certificates:</h3>
              <div className="space-y-6">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="font-bold text-primary text-sm mb-1">PTRC</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-medium">Professional Tax Registration Certificate - for employer to deduct and pay tax for employees.</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="font-bold text-primary text-sm mb-1">PTEC</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-medium">Professional Tax Enrollment Certificate - for the entity/proprietor/professionals themselves.</p>
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
