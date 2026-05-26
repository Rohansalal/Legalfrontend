"use client";

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Globe, Building2, ArrowRight, CheckCircle2, ShieldCheck, Users, Landmark, Calculator } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const registrationOptions = [
  {
    region: 'United States',
    entities: [
      { name: 'LLC', description: 'Limited Liability Company - Flexible management structure, pass-through taxation' },
      { name: 'Corporation (C-Corp)', description: 'Standard corporation for businesses planning to go public or seek venture capital' },
      { name: 'Corporation (S-Corp)', description: 'Special tax status for domestic corporations with pass-through taxation' }
    ]
  },
  {
    region: 'Canada',
    entities: [
      { name: 'LTD', description: 'Limited Company - Separate legal entity with limited liability protection' },
      { name: 'Corporation', description: 'Federal or provincial incorporation for business operations' }
    ]
  },
  {
    region: 'Mexico',
    entities: [
      { name: 'S. de R.L.', description: 'Sociedad de Responsabilidad Limitada - Limited Liability Company equivalent' },
      { name: 'S.A.', description: 'Sociedad Anónima - Corporation structure for larger businesses' }
    ]
  },
  {
    region: 'Panama',
    entities: [
      { name: 'S.A.', description: 'Sociedad Anónima - Popular for international business and holding companies' },
      { name: 'IBC', description: 'International Business Corporation - Tax-efficient offshore structure' }
    ]
  },
  {
    region: 'Belize',
    entities: [
      { name: 'IBC', description: 'International Business Corporation - Widely used for international trade and investment' }
    ]
  },
  {
    region: 'Barbados',
    entities: [
      { name: 'IBC', description: 'International Business Corporation - Favored for international business and e-commerce' },
      { name: 'SRL', description: 'Sociedad de Responsabilidad Limitada - Limited Liability Company structure' }
    ]
  },
  {
    region: 'Dominica',
    entities: [
      { name: 'IBC', description: 'International Business Corporation - Popular for international business structuring' }
    ]
  },
  {
    region: 'Chile',
    entities: [
      { name: 'SpA', description: 'Sociedad por Acciones - Flexible corporation structure for startups and investors' }
    ]
  }
];

const serviceFeatures = [
  {
    title: 'Complete Entity Formation',
    description: 'From name availability check to certificate issuance, we handle every step of the incorporation process.',
    icon: CheckCircle2
  },
  {
    title: 'Registered Agent Services',
    description: 'Professional registered agent representation in all jurisdictions for compliance and legal notices.',
    icon: ShieldCheck
  },
  {
    title: 'Bank Account Assistance',
    description: 'Guidance and support for opening corporate bank accounts in your chosen jurisdiction.',
    icon: Building2
  },
  {
    title: 'Tax ID Registration',
    description: 'Obtaining all necessary tax identification numbers and registrations for your business.',
    icon: Calculator
  },
  {
    title: 'Legal Address Provision',
    description: 'Registered office address services to meet local jurisdictional requirements.',
    icon: Landmark
  },
  {
    title: 'Ongoing Compliance Support',
    description: 'Annual filings, renewals, and compliance monitoring to keep your company in good standing.',
    icon: Users
  }
];

export default function AmericasCompanyRegistration() {
  const router = useRouter();

  const handleRegister = (entityName, regionName) => {
    const entityParam = entityName.toLowerCase().replace(/\s+/g, '-');
    const regionParam = regionName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/services/global-business/company-registration/americas?entity=${entityParam}&region=${regionParam}`);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Company Registration <span className="text-primary">Americas</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Establish your business presence across North, Central, and South America with expert guidance on the optimal entity structure for your specific business needs.
          </p>
        </div>

        <div className="space-y-12">
          {registrationOptions.map((region, index) => (
            <div key={index} className="bg-white border border-slate-100 rounded-[30px] p-8 hover:shadow-2xl transition-all duration-500">
              <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                {region.region}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.entities.map((entity, idx) => (
                  <div key={idx} className="bg-slate-50 p-6 rounded-[20px] border border-slate-200 hover:border-primary hover:bg-primary/5 transition-all duration-300">
                    <h3 className="text-xl font-black text-slate-900 mb-3">{entity.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{entity.description}</p>
                    <button 
                      onClick={() => handleRegister(entity.name, region.region)}
                      className="w-full bg-primary text-white py-3 rounded-[15px] text-center font-medium text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
                    >
                      Start Registration
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-[30px] p-10 mt-16">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-8">
            Our Americas Registration Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/services/global-business"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-black text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-slate-200"
          >
            Back to Global Business 
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <Footer />
     </main>
   );
 }