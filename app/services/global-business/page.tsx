import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Globe, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Global Business & Educational Law - Legal Door',
  description:
    'Specialized legal services for international company formation, global expansion and educational law including institutional setup, exam coaching and admissions.',
};

const categories = [
  {
    title: 'Global Business Setup & Expansion',
    icon: Globe,
    description:
      'International incorporation, cross-border compliance, global banking and expansion advisory.',
    href: '/services/global-business',
    highlights: [
      'International Company Formation',
      'Global Compliance & FEMA',
      'Global Banking & Treasury',
      'Cross-Border Expansion Strategy',
    ],
    services: [
      { name: 'International Formation', href: '/services/global-business/international-company-formation' },
      { name: 'Global Compliance', href: '/services/global-business/global-compliance' },
      { name: 'Global Banking', href: '/services/global-business/global-banking' },
      { name: 'Global Expansion', href: '/services/global-business/global-expansion' },
    ],
    cta: 'Expand Globally',
    subcategories: [
      {
        title: 'Company Registration by Region',
        description: 'Detailed company formation services across different jurisdictions',
        items: [
          { name: 'Americas', href: '/services/global-business/company-registration/americas' },
          { name: 'Europe', href: '/services/global-business/company-registration/europe' },
          { name: 'Asia-Pacific', href: '/services/global-business/company-registration/asia-pacific' },
          { name: 'UAE & Middle East', href: '/services/global-business/company-registration/uae-middle-east' },
          { name: 'Offshore Jurisdictions', href: '/services/global-business/company-registration/offshore' }
        ]
      }
    ]
  },
  {
    title: 'Educational Law',
    icon: GraduationCap,
    description:
      'End-to-end legal and advisory services across educational institutions, legal exam coaching and law-school admissions.',
    href: '/services/global-business/educational-law',
    highlights: [
      'Institution Setup, Licensing & Compliance',
      'Legal Exam Coaching (CLAT, Judicial, Civil Services)',
      'LLB / LLM / PhD Admission Counseling',
      'Study Abroad & Foreign Immigration',
    ],
    services: [
      { name: 'University / College / School', href: '/services/global-business/educational-law/institutional' },
      { name: 'Legal Exam Coaching', href: '/services/global-business/educational-law/courses' },
      { name: 'Counseling, Admission & Training', href: '/services/global-business/educational-law/counseling-admission' },
    ],
    cta: 'Explore Education Law',
    subcategories: [
      {
        title: 'University/College/School Services',
        description: 'Comprehensive legal services for educational institutions',
        items: [
          { name: 'Strategic Planning & Implementation', href: '#' },
          { name: 'Licensing & Regulatory Approvals', href: '#' },
          { name: 'Regulatory Compliance', href: '#' },
          { name: 'Student Rights Protection', href: '#' },
          { name: 'Policy Drafting & Review', href: '#' },
          { name: 'Institutional Governance Advice', href: '#' },
          { name: 'Dispute Negotiation', href: '#' },
          { name: 'Special Education Advocacy', href: '#' },
          { name: 'Accreditation & Licensing', href: '#' },
          { name: 'Contract Review', href: '#' },
          { name: 'Intellectual Property Services', href: '#' },
          { name: 'Government Grant Compliance', href: '#' },
          { name: 'Legal Advice for School Boards', href: '#' },
          { name: 'Handling Harassment Cases', href: '#' }
        ]
      },
      {
        title: 'Legal Exam Coaching',
        description: 'Preparation for various competitive law exams',
        items: [
          { name: 'CLAT / AILET', href: '#' },
          { name: 'Judicial Services', href: '#' },
          { name: 'Civil Services', href: '#' },
          { name: 'Law for IAS', href: '#' },
          { name: 'Law for UGC-NET', href: '#' },
          { name: 'Company Secretary', href: '#' },
          { name: 'Patent Agent Examination', href: '#' },
          { name: 'Trademark Agent Exam', href: '#' }
        ]
      },
      {
        title: 'Counseling, Admission & Training',
        description: 'Guidance and training for legal education and career development',
        items: [
          { name: 'Career Counseling', href: '#' },
          { name: 'LLB Admission', href: '#' },
          { name: 'LLM Admission', href: '#' },
          { name: 'PhD Admission', href: '#' },
          { name: 'Legal Drafting & Pleading Training', href: '#' },
          { name: 'Moot Court Competition', href: '#' },
          { name: 'Study Abroad', href: '#' },
          { name: 'Foreign Immigration & Visa', href: '#' }
        ]
      }
    ]
  }
];

export default function GlobalBusinessPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Global <span className="text-primary">Business</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            From international incorporation and cross-border compliance to specialized
            educational law — we help businesses, institutions and individuals navigate
            global opportunities with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-slate-100 p-8 md:p-10 rounded-[40px] hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <cat.icon className="w-8 h-8 text-slate-900 group-hover:text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                {cat.description}
              </p>

              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">
                  Highlights
                </span>
                <ul className="space-y-2">
                  {cat.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {cat.subcategories && (
                <div className="border-t border-slate-100 pt-6 mb-8 flex-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block">
                    Service Categories
                  </span>
                  <div className="space-y-4">
                    {cat.subcategories.map((subcat, index) => (
                      <div key={index} className="space-y-3">
                        <h4 className="font-black text-slate-900 mb-2">{subcat.title}</h4>
                        <p className="text-sm text-slate-600">{subcat.description}</p>
                        <div className="space-y-2">
                          {subcat.items.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="block px-4 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors border border-slate-200"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-slate-100 pt-6 mb-8 flex-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block">
                  Quick Links
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="text-xs font-bold text-slate-600 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={cat.href}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2"
              >
                {cat.cta} <ArrowRight className="w-4 h-4" />
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
