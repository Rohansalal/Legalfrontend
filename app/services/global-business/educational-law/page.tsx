import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { GraduationCap, BookOpen, Compass, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Educational Law - Institutional, Coaching & Admissions | Legal Door',
  description:
    'Specialized educational law services — university / college / school setup and compliance, legal exam coaching (CLAT, Judicial Services, Civil Services), and admissions / counseling for LLB, LLM and PhD.',
};

const subSections = [
  {
    title: 'University / College / School',
    href: '/services/global-business/educational-law/institutional',
    icon: GraduationCap,
    description:
      'End-to-end legal advisory for educational institutions — setup, licenses, compliance, governance and dispute management.',
    services: [
      'Setup Strategy & Implementation',
      'Licenses & Regulatory Approvals',
      'Regulatory Compliance',
      'Student Rights Protection',
      'Policy Drafting & Review',
      'Institutional Governance',
      'Dispute Negotiation',
      'Special Education Advocacy',
      'Accreditation & Licensing',
      'Contract Review',
      'Intellectual Property',
      'Government Grant Compliance',
      'Legal Advice for School Boards',
      'Handling Harassment Cases',
    ],
  },
  {
    title: 'Legal Exam Coaching',
    href: '/services/global-business/educational-law/courses',
    icon: BookOpen,
    description:
      'Comprehensive preparation for premier legal and law-related entrance / professional examinations.',
    services: [
      'CLAT / AILET',
      'Judicial Services',
      'Civil Services',
      'Law for IAS',
      'Law for UGC-NET',
      'Company Secretary',
      'Patent Agent Examination',
      'Trademark Agent Exam',
    ],
  },
  {
    title: 'Counseling, Admission & Training',
    href: '/services/global-business/educational-law/counseling-admission',
    icon: Compass,
    description:
      'Career counseling, law-school admissions, drafting training, moot court support and study-abroad guidance.',
    services: [
      'Career Counseling',
      'LLB Admission',
      'LLM Admission',
      'PhD Admission',
      'Legal Drafting & Pleading Training',
      'Moot Court Competition',
      'Study Abroad',
      'Foreign Immigration & Visa',
    ],
  },
];

export default function EducationalLawPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container mx-auto py-24 px-4 pt-32">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-8 max-w-7xl mx-auto">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services/global-business" className="hover:text-primary transition-colors">Global Business</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900">Educational Law</span>
        </nav>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Educational <span className="text-primary">Law</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            End-to-end legal services for educational institutions plus career-defining
            coaching and counseling for aspiring lawyers — from school setup compliance
            to CLAT, Judicial Services and law-school admissions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {subSections.map((section) => (
            <div
              key={section.title}
              className="bg-white border border-slate-100 p-8 rounded-[40px] hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <section.icon className="w-7 h-7 text-slate-900 group-hover:text-primary" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{section.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                {section.description}
              </p>
              <div className="border-t border-slate-100 pt-6 mb-8 flex-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">
                  Includes
                </span>
                <ul className="space-y-2">
                  {section.services.map((service) => (
                    <li key={service} className="flex items-start gap-2 text-sm font-bold text-slate-600">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={section.href}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2"
              >
                View All Services <ArrowRight className="w-4 h-4" />
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
