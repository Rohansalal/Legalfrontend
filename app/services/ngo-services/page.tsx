import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Users, FileCheck, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'NGO Services & Registration - Legal Door',
  description: 'Complete legal solutions for NGO registration, compliance, and funding support.',
};

const ngoCategories = [
  {
    title: 'NGO Registration',
    icon: Users,
    services: [
      { name: 'Trust Registration', href: '/services/ngo-services/ngo-registration/trust' },
      { name: 'Society Registration', href: '/services/ngo-services/ngo-registration/society' },
      { name: 'Section 8 Company', href: '/services/ngo-services/ngo-registration/section-8' }
    ]
  },
  {
    title: 'NGO Tax Exemption',
    icon: ShieldCheck,
    services: [
      { name: '12A Registration', href: '/services/ngo-services/ngo-tax-exemption/12a' },
      { name: '80G Registration', href: '/services/ngo-services/ngo-tax-exemption/80g' }
    ]
  },
  {
    title: 'NGO Funding',
    icon: Heart,
    services: [
      { name: 'CSR Funding', href: '/services/ngo-services/ngo-funding/csr' },
      { name: 'FCRA Registration', href: '/services/ngo-services/ngo-funding/fcra' }
    ]
  }
];

export default function NGOPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">NGO <span className="text-primary">Legal Support</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Empowering social impact through comprehensive legal expertise. We help you set up and maintain your NGO with zero hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {ngoCategories.map((cat) => (
            <div key={cat.title} className="bg-white border border-slate-100 p-8 rounded-[40px] hover:shadow-2xl transition-all duration-500 flex flex-col group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                <cat.icon className="w-7 h-7 text-slate-900 group-hover:text-primary" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">{cat.title}</h3>
              <div className="space-y-4 mb-8 flex-1">
                {cat.services.map((service) => (
                  <Link 
                    key={service.name} 
                    href={service.href}
                    className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link href="#" className="w-full bg-slate-900 text-white py-4 rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors">
                Consult Experts
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
