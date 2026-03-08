import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Globe, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

export const metadata = {
  title: 'Domain Name Check - Legal Door',
  description: 'Secure your online identity with our domain availability search and registration services.',
};

export default function DomainCheckPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">Domain Name <span className="text-primary">Check</span></h1>
          
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl mb-12">
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
              A business without a matching domain is incomplete in today&apos;s digital era. We help you find and secure the perfect domain name to match your company name.
            </p>
            <div className="flex gap-4">
              <input type="text" placeholder="yourbusiness.com" className="flex-1 bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-primary shadow-sm" />
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-slate-800 transition-colors">Check Availability</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-slate-900">Why it matters?</h3>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm items-start">
                  <Globe className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm font-bold text-slate-700">Consistent brand identity across all platforms.</p>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm items-start">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm font-bold text-slate-700">Professional email addresses for your team.</p>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm items-start">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm font-bold text-slate-700">Protect your brand from digital impersonation.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h3 className="text-xl font-black text-slate-900 mb-4">Extensions We Check:</h3>
              <div className="grid grid-cols-2 gap-4">
                {['.com (Global)', '.in (India)', '.co.in (India Business)', '.org (Non-profit)', '.net (Tech)', '.biz (Business)'].map((ext) => (
                  <div key={ext} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-slate-700">{ext}</span>
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
