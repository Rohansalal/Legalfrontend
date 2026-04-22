import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import Link from 'next/link';
import { Building2, FileText, Award, Users, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Business Registration Services - Legal Door',
  description: 'Complete business registration services — company registration, licenses, NGO, tax exemption, and more. Expert guidance at every step.',
};

const categories = [
  {
    id: 'company-registration',
    label: 'A. Company Registration',
    icon: Building2,
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    description: 'Register Pvt Ltd, LLP, OPC, Partnership, NBFC and more under the Companies Act, 2013.',
    services: [
      'Private Limited Company', 'Public Limited Company', 'LLP Registration',
      'One Person Company', 'GST Registration', 'Section 8 Company',
      'Producer Company', 'Proprietorship Firm', 'Partnership Firm', 'NBFC Registration'
    ],
    href: '/services/business-registration/company-registration',
  },
  {
    id: 'other-registration',
    label: 'B. Other Registration',
    icon: FileText,
    color: 'bg-orange-50 text-orange-600 border-orange-100',
    description: 'Society, Trust, Political Party, RERA, IEC, FCRA, ESI & PF, and more specialized registrations.',
    services: [
      'Society Registration', 'Trust Registration', 'Political Party', '12A & 80G',
      'RWA Registration', 'RERA Registration', 'Import Export Code',
      'FCRA/FEMA', 'ESI & PF', 'Telemarketing Registration'
    ],
    href: '/services/business-registration/other-registration',
  },
  {
    id: 'license',
    label: 'C. License',
    icon: Award,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    description: 'FSSAI, AYUSH, Drug, Liquor, Factory, Trade License and all government licenses for your business.',
    services: [
      'FSSAI License', 'AYUSH License', 'Drug License', 'Liquor License', 'Factory License',
      'Small Finance Bank License', 'FFMC License', 'PASARA License', 'Trade License', 'Shop & Establishment'
    ],
    href: '/services/business-registration/license',
  },
  {
    id: 'ngo-registration',
    label: 'D. NGO Registration',
    icon: Users,
    color: 'bg-pink-50 text-pink-600 border-pink-100',
    description: 'Register your NGO as a Trust, Society, or Section 8 Company with full legal compliance.',
    services: ['Trust Registration', 'Society Registration', 'Section 8 Company'],
    href: '/services/business-registration/ngo-registration',
  },
  {
    id: 'tax-exemption',
    label: 'E. Tax Exemption',
    icon: ShieldCheck,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    description: 'Get 12A and 80G registration to avail income tax exemptions for your NGO or charitable trust.',
    services: ['12A Registration', '80G Registration'],
    href: '/services/business-registration/tax-exemption',
  },
];

export default function BusinessRegistrationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#022d54] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0a3d6d_0%,#022d54_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-300 font-bold text-[10px] uppercase tracking-wider mb-6">
            <CheckCircle2 className="w-3 h-3" />
            Government Certified Experts
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            Business <br />
            <span className="text-blue-400 italic">Registration</span>
          </h1>
          <p className="text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            From startup incorporation to government licenses — we handle every aspect of your business registration with precision and speed.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Choose Your <span className="text-primary italic">Registration Type</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
              35+ registration and licensing services across 5 categories — find exactly what your business needs.
            </p>
          </div>

          <div className="space-y-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className={`w-16 h-16 rounded-[1.5rem] border flex items-center justify-center shrink-0 ${cat.color}`}>
                      <cat.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <h2 className="text-2xl font-black text-slate-900">{cat.label}</h2>
                        <Link
                          href={cat.href}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#022d54] text-white font-black text-sm hover:bg-blue-600 transition-colors shrink-0"
                        >
                          View All <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <p className="text-slate-500 font-medium mb-6">{cat.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.services.map((svc) => (
                          <span key={svc} className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 text-xs font-bold">
                            {svc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
