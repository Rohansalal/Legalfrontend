import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Landmark, CheckCircle2, Award, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'MSME/Udyam Registration - Legal Door',
  description: 'Apply for MSME/Udyam registration to avail government benefits and subsidies for your small business.',
};

export default function MSMERegistrationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">MSME <span className="text-primary">Registration</span></h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Udyam Registration is a simple, online process that replaces the previous MSME registration. It provides various benefits, including collateral-free loans and subsidies.
              </p>
              <div className="space-y-4">
                {[
                  'Collateral-free loans from banks.',
                  'Subsidies on patent and trademark registration.',
                  'Concession on electricity bills.',
                  'Protection against delayed payments.',
                  'Priority for government tenders.',
                  'Exemption from direct tax laws.'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm items-center">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <h3 className="text-xl font-black mb-6">Eligibility:</h3>
              <div className="space-y-6">
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-widest">Micro</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-medium italic">Investment &lt; 1Cr | Turnover &lt; 5Cr</p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-widest">Small</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-medium italic">Investment &lt; 10Cr | Turnover &lt; 50Cr</p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="font-bold text-primary text-sm mb-1 uppercase tracking-widest">Medium</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-medium italic">Investment &lt; 50Cr | Turnover &lt; 250Cr</p>
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
