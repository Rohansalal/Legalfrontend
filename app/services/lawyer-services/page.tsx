import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Lightbulb, Building, Plane, Heart, Gavel, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Lawyer Services & Legal Representation - Legal Door',
  description:
    'Expert lawyer services across IPR, Corporate, Aviation & Maritime, Family and Criminal Law. End-to-end legal consultation, drafting and court representation.',
};

const lawyerCategories = [
  {
    title: 'IPR Services',
    icon: Lightbulb,
    description:
      'Trademark, Copyright and Patent registration, prosecution, opposition and litigation.',
    href: '/services/lawyer-services/ipr-services',
    highlights: [
      'Trademark Registration & Renewal',
      'Copyright Registration',
      'Patent Registration (Provisional & Complete)',
      'Trademark Opposition & Infringement',
      'Logo, Music & Artistic Works Copyright',
    ],
  },
  {
    title: 'Corporate Services',
    icon: Building,
    description:
      'Insolvency, M&A, IPO, banking, insurance, securities and industrial-dispute advisory & litigation.',
    href: '/services/lawyer-services/corporate-services',
    highlights: [
      'Insolvency & Bankruptcy',
      'Merger & Acquisitions',
      'IPO Listing & Compliances',
      'Banking, Insurance & Securities Law',
      'International Trade & Customs',
    ],
  },
  {
    title: 'Aviation & Maritime Law',
    icon: Plane,
    description:
      'Aviation licensing (DGCA / AERA / AAI / BCAS), maritime regulation and cross-border legal advisory.',
    href: '/services/lawyer-services/aviation-maritime',
    highlights: [
      'Aviation License & Approval',
      'Aircraft Sale, Purchase & Leasing',
      'DGCA / AERA / AAI / BCAS Compliances',
      'Maritime & Ship Licensing',
      'International Law & Cross-Border Transactions',
    ],
  },
  {
    title: 'Family Law',
    icon: Heart,
    description:
      'Divorce (mutual & contested), child custody, alimony, dowry, domestic violence and matrimonial transfers.',
    href: '/services/lawyer-services/family-law',
    highlights: [
      'Mutual & Contested Divorce',
      'Child Custody & Visitation',
      'Alimony & Maintenance',
      'Domestic Violence & Dowry',
      'Foreign Divorce Decree Execution',
    ],
  },
  {
    title: 'Criminal Law',
    icon: Gavel,
    description:
      'FIR, bail, criminal appeals, white-collar crime, POCSO, cheque bounce, cyber crime and writ petitions.',
    href: '/services/lawyer-services/criminal-law',
    highlights: [
      'FIR Registration & Quashing',
      'Regular & Anticipatory Bail',
      'Cheque Bounce (NI Act 138/142)',
      'POCSO, Rape & Sexual Assault',
      'Money Laundering, Fraud & Cyber Crime',
    ],
  },
];

export default function LawyerServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Lawyer <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Access expert legal representation across intellectual property, corporate,
            aviation & maritime, family and criminal law. Our experienced lawyers
            protect your interests and resolve complex legal matters end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {lawyerCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white border border-slate-100 p-8 rounded-[40px] hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <cat.icon className="w-7 h-7 text-slate-900 group-hover:text-primary" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                {cat.description}
              </p>
              <div className="space-y-3 mb-8 flex-1">
                {cat.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-bold text-slate-600"
                  >
                    <ArrowRight className="w-4 h-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href={cat.href}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors"
              >
                View All Services
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
