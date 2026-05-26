"use client";

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Globe, Building2, ArrowRight, CheckCircle2, ShieldCheck, Users, Landmark, Calculator } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const registrationOptions = [
  {
    region: 'United Kingdom',
    entities: [
      { name: 'LTD', description: 'Private Limited Company - Most common business structure in the UK' },
      { name: 'LLP', description: 'Limited Liability Partnership - Combines partnership flexibility with limited liability' },
      { name: 'PLC', description: 'Public Limited Company - For businesses planning to list on stock exchange' }
    ]
  },
  {
    region: 'Germany',
    entities: [
      { name: 'GmbH', description: 'Gesellschaft mit beschränkter Haftung - Limited Liability Company equivalent' },
      { name: 'UG (haftungsbeschränkt)', description: 'Unternehmergesellschaft - "Mini-GmbH" with lower capital requirements' },
      { name: 'AG', description: 'Aktiengesellschaft - Corporation structure for larger businesses' }
    ]
  },
  {
    region: 'Switzerland',
    entities: [
      { name: 'GmbH', description: 'Gesellschaft mit beschränkter Haftung - Limited Liability Company' },
      { name: 'AG', description: 'Aktiengesellschaft - Corporation for larger enterprises' },
      { name: 'KG', description: 'Kommanditgesellschaft - Limited partnership structure' }
    ]
  },
  {
    region: 'Netherlands',
    entities: [
      { name: 'BV', description: 'Besloten Vennootschap - Private Limited Liability Company' },
      { name: 'NV', description: 'Naamloze Vennootschap - Public Limited Company' },
      { name: 'Cooperatie', description: 'Cooperative structure for member-owned businesses' }
    ]
  },
  {
    region: 'Estonia',
    entities: [
      { name: 'OÜ', description: 'Osaühing - Private Limited Company, popular for e-residency' },
      { name: 'AS', description: 'Aktsiaselts - Public Stock Company' },
      { name: 'TÜ', description: 'Täisühing - General Partnership' }
    ]
  },
  {
    region: 'Poland',
    entities: [
      { name: 'Sp. z o.o.', description: 'Spółka z ograniczoną odpowiedzialnością - Limited Liability Company' },
      { name: 'S.A.', description: 'Spółka Akcyjna - Joint-stock company for larger businesses' },
      { name: 'Sp. k.', description: 'Spółka komandytowa - Limited partnership' }
    ]
  },
  {
    region: 'Cyprus',
    entities: [
      { name: 'LTD', description: 'Private Limited Company - Most common business structure' },
      { name: 'PLC', description: 'Public Limited Company - For listing on Cyprus Stock Exchange' },
      { name: 'LLC', description: 'Limited Liability Company - Hybrid structure' }
    ]
  },
  {
    region: 'Georgia',
    entities: [
      { name: 'LLC', description: 'Limited Liability Company - Most popular business structure' },
      { name: 'JSC', description: 'Joint Stock Company - For larger enterprises and investments' },
      { name: 'Cooperative', description: 'Cooperative structure for member-owned businesses' }
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

export default function EuropeCompanyRegistration() {
  const router = useRouter();

  const handleRegister = (entityName, regionName) => {
    const entityParam = entityName.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '').replace(/\(|\)/g, '');
    const regionParam = regionName.toLowerCase().replace(/\s+/g, '-');
    router.push(`/services/global-business/company-registration/europe?entity=${entityParam}&region=${regionParam}`);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Company Registration <span className="text-primary">Europe</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Establish your business presence across Europe with expert guidance on the optimal entity structure for your specific business needs, taking into account local regulations, tax implications, and operational requirements.
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
            Our Europe Registration Services
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