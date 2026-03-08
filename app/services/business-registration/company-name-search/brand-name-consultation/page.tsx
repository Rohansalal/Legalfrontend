import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Lightbulb, Target, Sparkles, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Brand Name Consultation - Legal Door',
  description: 'Expert branding and legal consultation to help you choose the perfect name for your business.',
};

export default function BrandConsultationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Brand Name <span className="text-primary">Consultation</span></h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Choosing a name is more than just a creative exercise. It&apos;s a strategic decision that impacts your marketing, legal protection, and long-term brand equity.
              </p>
              <div className="grid gap-4">
                <div className="flex gap-4 p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Strategic Alignment</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">We ensure your name resonates with your target audience and core values.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-white border border-slate-100 rounded-3xl shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Legal Soundness</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Ensuring your brand name can be legally protected through trademarks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-10 rounded-[40px] text-white relative overflow-hidden">
              <Sparkles className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              <h3 className="text-2xl font-black mb-6">Our Process</h3>
              <ul className="space-y-4">
                {['Business Analysis', 'Creative Brainstorming', 'Linguistic Check', 'Trademark Verification', 'Domain Availability', 'Final Recommendation'].map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
