import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Gavel, MessageSquare, Scale, Landmark, ArrowRight, FileText, Shield, Users, Briefcase, Home, Globe, Scale3d, TrendingUp, Building, Car, Heart, Wallet, Phone, Monitor, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Lawyer Services & Legal Representation - Legal Door',
  description: 'Expert lawyer services for legal consultation, notices, dispute resolution, and court representation.',
};

const lawyerCategories = [
  {
    title: 'Legal Notice',
    icon: FileText,
    services: [
      { name: 'Legal Notice Drafting', href: '/services/lawyer-services/legal-notice/drafting' },
      { name: 'Legal Notice Response', href: '/services/lawyer-services/legal-notice/response' },
      { name: 'Demand Notice', href: '/services/lawyer-services/legal-notice/demand' }
    ]
  },
  {
    title: 'Litigation',
    icon: Scale,
    services: [
      { name: 'Civil Litigation', href: '/services/lawyer-services/litigation/civil' },
      { name: 'Criminal Litigation', href: '/services/lawyer-services/litigation/criminal' },
      { name: 'High Court Litigation', href: '/services/lawyer-services/litigation/high-court' },
      { name: 'Supreme Court', href: '/services/lawyer-services/litigation/supreme-court' }
    ]
  },
  {
    title: 'Consumer Complaint',
    icon: Shield,
    services: [
      { name: 'Consumer Forum', href: '/services/lawyer-services/consumer-complaint/forum' },
      { name: 'District Consumer Forum', href: '/services/lawyer-services/consumer-complaint/district' },
      { name: 'State Consumer Forum', href: '/services/lawyer-services/consumer-complaint/state' },
      { name: 'National Consumer Forum', href: '/services/lawyer-services/consumer-complaint/national' }
    ]
  },
  {
    title: 'Finance Lawyers',
    icon: Wallet,
    services: [
      { name: 'Financial Disputes', href: '/services/lawyer-services/finance-lawyers/financial-disputes' },
      { name: 'Banking Law', href: '/services/lawyer-services/finance-lawyers/banking-law' },
      { name: 'Loan Disputes', href: '/services/lawyer-services/finance-lawyers/loan-disputes' }
    ]
  },
  {
    title: 'Cheque Bounce',
    icon: AlertTriangle,
    services: [
      { name: 'NI Act Case', href: '/services/lawyer-services/cheque-bounce/ni-act' },
      { name: 'Cheque Dishonor', href: '/services/lawyer-services/cheque-bounce/dishonor' },
      { name: 'Legal Remedy', href: '/services/lawyer-services/cheque-bounce/remedy' }
    ]
  },
  {
    title: 'Child Custody',
    icon: Users,
    services: [
      { name: 'Child Custody', href: '/services/lawyer-services/child-custody/main' },
      { name: 'Guardianship', href: '/services/lawyer-services/child-custody/guardianship' },
      { name: 'Visitation Rights', href: '/services/lawyer-services/child-custody/visitation' }
    ]
  },
  {
    title: 'Civil Lawyers',
    icon: Scale3d,
    services: [
      { name: 'Civil Disputes', href: '/services/lawyer-services/civil-lawyers/disputes' },
      { name: 'Property Disputes', href: '/services/lawyer-services/civil-lawyers/property' },
      { name: 'Contract Disputes', href: '/services/lawyer-services/civil-lawyers/contract' }
    ]
  },
  {
    title: 'Consumer Protection',
    icon: Shield,
    services: [
      { name: 'Consumer Rights', href: '/services/lawyer-services/consumer-protection/rights' },
      { name: 'Defective Products', href: '/services/lawyer-services/consumer-protection/defective-products' },
      { name: 'Service Deficiency', href: '/services/lawyer-services/consumer-protection/service-deficiency' }
    ]
  },
  {
    title: 'Contract Lawyers',
    icon: Briefcase,
    services: [
      { name: 'Contract Drafting', href: '/services/lawyer-services/contract-lawyers/drafting' },
      { name: 'Contract Review', href: '/services/lawyer-services/contract-lawyers/review' },
      { name: 'Contract Dispute', href: '/services/lawyer-services/contract-lawyers/dispute' }
    ]
  },
  {
    title: 'Corporate Lawyers',
    icon: Building,
    services: [
      { name: 'Corporate Law', href: '/services/lawyer-services/corporate-lawyers/main' },
      { name: 'Merger Acquisition', href: '/services/lawyer-services/corporate-lawyers/ma' },
      { name: 'Compliance', href: '/services/lawyer-services/corporate-lawyers/compliance' }
    ]
  },
  {
    title: 'Criminal Lawyers',
    icon: Gavel,
    services: [
      { name: 'Criminal Defense', href: '/services/lawyer-services/criminal-lawyers/defense' },
      { name: 'Bail Application', href: '/services/lawyer-services/criminal-lawyers/bail' },
      { name: 'FIR Quashing', href: '/services/lawyer-services/criminal-lawyers/fir-quashing' }
    ]
  },
  {
    title: 'Cyber Crime',
    icon: Monitor,
    services: [
      { name: 'Cyber Fraud', href: '/services/lawyer-services/cyber-crime/fraud' },
      { name: 'Data Breach', href: '/services/lawyer-services/cyber-crime/data-breach' },
      { name: 'Online Harassment', href: '/services/lawyer-services/cyber-crime/harassment' }
    ]
  },
  {
    title: 'Property Lawyers',
    icon: Home,
    services: [
      { name: 'Property Dispute', href: '/services/lawyer-services/property-lawyers/dispute' },
      { name: 'Title Verification', href: '/services/lawyer-services/property-lawyers/title-verification' },
      { name: 'Rent Dispute', href: '/services/lawyer-services/property-lawyers/rent-dispute' }
    ]
  },
  {
    title: 'Divorce Lawyers',
    icon: Heart,
    services: [
      { name: 'Mutual Divorce', href: '/services/lawyer-services/divorce-lawyers/mutual' },
      { name: 'Contested Divorce', href: '/services/lawyer-services/divorce-lawyers/contested' },
      { name: 'Alimony & Maintenance', href: '/services/lawyer-services/divorce-lawyers/alimony' }
    ]
  },
  {
    title: 'Family Lawyers',
    icon: Users,
    services: [
      { name: 'Family Dispute', href: '/services/lawyer-services/family-lawyers/dispute' },
      { name: 'Will & Inheritance', href: '/services/lawyer-services/family-lawyers/will' },
      { name: 'Succession', href: '/services/lawyer-services/family-lawyers/succession' }
    ]
  },
  {
    title: 'GST Lawyers',
    icon: TrendingUp,
    services: [
      { name: 'GST Advisory', href: '/services/lawyer-services/gst-lawyers/advisory' },
      { name: 'GST Litigation', href: '/services/lawyer-services/gst-lawyers/litigation' },
      { name: 'GST Refund', href: '/services/lawyer-services/gst-lawyers/refund' }
    ]
  },
  {
    title: 'IP Lawyers',
    icon: Globe,
    services: [
      { name: 'Trademark', href: '/services/lawyer-services/ip-lawyers/trademark' },
      { name: 'Copyright', href: '/services/lawyer-services/ip-lawyers/copyright' },
      { name: 'Patent', href: '/services/lawyer-services/ip-lawyers/patent' }
    ]
  },
  {
    title: 'Labour Lawyers',
    icon: Briefcase,
    services: [
      { name: 'Employment Dispute', href: '/services/lawyer-services/labour-lawyers/employment' },
      { name: 'Workmen Compensation', href: '/services/lawyer-services/labour-lawyers/compensation' },
      { name: 'Industrial Dispute', href: '/services/lawyer-services/labour-lawyers/industrial' }
    ]
  },
  {
    title: 'Money Recovery',
    icon: Wallet,
    services: [
      { name: 'Debt Recovery', href: '/services/lawyer-services/money-recovery/debt' },
      { name: 'Loan Recovery', href: '/services/lawyer-services/money-recovery/loan' },
      { name: 'Recovery Suit', href: '/services/lawyer-services/money-recovery/suit' }
    ]
  },
  {
    title: 'Motor Accident',
    icon: Car,
    services: [
      { name: 'Accident Claim', href: '/services/lawyer-services/motor-accident/claim' },
      { name: 'Compensation', href: '/services/lawyer-services/motor-accident/compensation' },
      { name: 'Insurance Claim', href: '/services/lawyer-services/motor-accident/insurance' }
    ]
  },
  {
    title: 'Muslim Law',
    icon: Heart,
    services: [
      { name: 'Nikah & Marriage', href: '/services/lawyer-services/muslim-law/nikah' },
      { name: 'Divorce', href: '/services/lawyer-services/muslim-law/divorce' },
      { name: 'Maintenance', href: '/services/lawyer-services/muslim-law/maintenance' }
    ]
  },
  {
    title: 'TMT',
    icon: Monitor,
    services: [
      { name: 'Technology Law', href: '/services/lawyer-services/tmt/technology' },
      { name: 'Media Law', href: '/services/lawyer-services/tmt/media' },
      { name: 'Telecom Law', href: '/services/lawyer-services/tmt/telecom' }
    ]
  },
  {
    title: 'Risk Management',
    icon: Shield,
    services: [
      { name: 'Regulatory Compliance', href: '/services/lawyer-services/risk-management/regulatory' },
      { name: 'Corporate Governance', href: '/services/lawyer-services/risk-management/governance' },
      { name: 'Due Diligence', href: '/services/lawyer-services/risk-management/due-diligence' }
    ]
  }
];

export default function LawyerServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Lawyer <span className="text-primary">Services</span></h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Access expert legal representation and professional advice. Our team of experienced lawyers is here to protect your interests and resolve complex legal issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {lawyerCategories.map((cat) => (
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
                Book a Lawyer
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
