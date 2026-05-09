import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import {
  Gavel,
  ArrowRight,
  FileText,
  ScrollText,
  Shield,
  Skull,
  AlertTriangle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Criminal Law - FIR, Bail & Court Representation | Legal Door',
  description:
    'Expert criminal law services covering FIR, bail, appeals, white-collar crime, POCSO, cheque bounce, money laundering and cyber crime defence.',
};

const sections = [
  {
    title: 'FIR, Complaints & Police Matters',
    icon: FileText,
    description:
      'Police complaint assistance, FIR registration and complaint drafting before police stations, magistrates and competent authorities.',
    services: [
      { name: 'FIR Registration & Police Complaint Assistance', href: '/services/lawyer-services/criminal-law/fir-registration' },
      { name: 'Filing Criminal Complaints (Cr.P.C.)', href: '/services/lawyer-services/criminal-law/criminal-complaint-filing' },
      { name: 'Drafting Complaints — Police, Magistrate & Authorities', href: '/services/lawyer-services/criminal-law/complaint-drafting' },
    ],
  },
  {
    title: 'Bail, Quashing & Court Orders',
    icon: ScrollText,
    description:
      'Regular and anticipatory bail, FIR quashing, criminal appeals and writ petitions before Sessions Courts and High Courts.',
    services: [
      { name: 'Regular & Anticipatory Bail', href: '/services/lawyer-services/criminal-law/bail' },
      { name: 'FIR Quashing & Criminal Appeals (High Court)', href: '/services/lawyer-services/criminal-law/fir-quashing-appeals' },
      { name: 'Arrest, Remand, Appeals & Writ Petitions', href: '/services/lawyer-services/criminal-law/arrest-remand-writ' },
      { name: 'Contempt of Courts Act Matters', href: '/services/lawyer-services/criminal-law/contempt-of-court' },
      { name: 'Lookout Circular Cancellation', href: '/services/lawyer-services/criminal-law/lookout-circular-cancellation' },
      { name: 'Warrant Cancellation', href: '/services/lawyer-services/criminal-law/warrant-cancellation' },
    ],
  },
  {
    title: 'Violent & Personal Offences',
    icon: Skull,
    description:
      'Defence and prosecution in murder, abduction, assault, kidnapping, theft, robbery and trespass matters.',
    services: [
      { name: 'Murder, Abduction & Death by Negligence', href: '/services/lawyer-services/criminal-law/murder-abduction-negligence' },
      { name: 'Assault, Serious Injury & Personal Violence', href: '/services/lawyer-services/criminal-law/assault-injury' },
      { name: 'False Imprisonment, Kidnapping & Threats', href: '/services/lawyer-services/criminal-law/imprisonment-kidnapping-threats' },
      { name: 'Theft, Robbery, Burglary & Trespass', href: '/services/lawyer-services/criminal-law/theft-robbery-burglary' },
    ],
  },
  {
    title: 'Sexual & Child Offences',
    icon: Shield,
    description:
      'Specialized representation in POCSO, rape, sexual assault and juvenile justice matters with utmost confidentiality.',
    services: [
      { name: 'POCSO Child Protection Cases', href: '/services/lawyer-services/criminal-law/pocso' },
      { name: 'Rape & Sexual Assault Cases', href: '/services/lawyer-services/criminal-law/rape-sexual-assault' },
      { name: 'Child Sex Crimes & Juvenile Justice', href: '/services/lawyer-services/criminal-law/child-sex-juvenile' },
    ],
  },
  {
    title: 'White-Collar, Drug & Cyber Crimes',
    icon: AlertTriangle,
    description:
      'Cheque bounce, fraud, money laundering, drug offences and cyber crime defence — including CBI / ED / Crime Branch matters.',
    services: [
      { name: 'Cheque Bounce — NI Act Section 138/142', href: '/services/lawyer-services/criminal-law/cheque-bounce-ni-act' },
      { name: 'Fraud, Cheating, Forgery & Mischief', href: '/services/lawyer-services/criminal-law/fraud-cheating-forgery' },
      { name: 'Money Laundering', href: '/services/lawyer-services/criminal-law/money-laundering' },
      { name: 'CBI / ED / Crime Branch Cases', href: '/services/lawyer-services/criminal-law/cbi-ed-crime-branch' },
      { name: 'Drug Offences (NDPS Act)', href: '/services/lawyer-services/criminal-law/drug-offences' },
      { name: 'Cyber Crimes & Data Theft', href: '/services/lawyer-services/criminal-law/cyber-crime-data-theft' },
    ],
  },
];

export default function CriminalLawPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Gavel className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Criminal <span className="text-primary">Law</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Strategic and discreet criminal defence across FIR, bail, appeals,
            white-collar crime, POCSO, sexual offences, money laundering and cyber
            crime — at every stage from investigation to High Court litigation.
          </p>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {sections.map((section) => (
            <section key={section.title}>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900">{section.title}</h2>
                    <p className="text-sm text-slate-500 font-medium mt-1 max-w-2xl">
                      {section.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-primary shrink-0">
                  {section.services.length} Service{section.services.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="group bg-white border border-slate-100 p-6 rounded-3xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex items-center justify-between gap-3"
                  >
                    <span className="text-sm font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">
                      {service.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
