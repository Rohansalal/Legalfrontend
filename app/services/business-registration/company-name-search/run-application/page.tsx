import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Zap, Clock, ShieldCheck, FileCheck } from 'lucide-react';

export const metadata = {
  title: 'RUN Application Service - Legal Door',
  description: 'Reserve your unique company name with the ROC using our professional RUN application services.',
};

export default function RUNApplicationPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">RUN <span className="text-primary">Application</span></h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <section className="space-y-6">
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                The RUN (Reserve Unique Name) service is an easy and web-based process for reservation of a name for a new company or for change of name of an existing company.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">20 Days Validity</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Reserved names are valid for 20 days for new company registration.</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-slate-100 rounded-2xl shadow-sm flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Secured Identity</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">Ensure nobody else registers your chosen name while you prepare your documents.</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl h-full flex flex-col justify-center">
              <h3 className="text-xl font-black text-slate-900 mb-6">Application Process</h3>
              <div className="space-y-6 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-200" />
                {[
                  { step: '01', title: 'Consultation', text: 'Select two unique names for your business.' },
                  { step: '02', title: 'Search Check', text: 'We conduct preliminary MCA and Trademark searches.' },
                  { step: '03', title: 'Submission', text: 'Professional filing of the RUN application with MCA.' },
                  { step: '04', title: 'Approval', text: 'Get your Name Reservation Certificate from ROC.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center text-[10px] font-black text-primary shrink-0 shadow-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
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
