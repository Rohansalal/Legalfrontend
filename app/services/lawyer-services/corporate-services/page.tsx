import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import {
  Building,
  ArrowRight,
  ShieldAlert,
  GitMerge,
  TrendingUp,
  Banknote,
  Umbrella,
  LineChart,
  Users,
  Globe,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Corporate Legal Services | Legal Door',
  description:
    'Specialist corporate law: insolvency & bankruptcy, M&A, IPO listing, banking, insurance, securities, industrial dispute and international trade & customs.',
};

const services = [
  {
    name: 'Insolvency & Bankruptcy',
    description:
      'Advisory and litigation under IBC — creditor / debtor representation, CIRP, liquidation and resolution plans.',
    icon: ShieldAlert,
    href: '/services/lawyer-services/corporate-services/insolvency-bankruptcy',
  },
  {
    name: 'Merger & Acquisitions',
    description:
      'Due diligence, structuring, regulatory approvals, share purchase, asset purchase and post-merger integration.',
    icon: GitMerge,
    href: '/services/lawyer-services/corporate-services/merger-acquisitions',
  },
  {
    name: 'IPO Listing & Compliances',
    description:
      'SEBI compliance, DRHP / RHP drafting, listing agreements and post-listing continuous disclosure.',
    icon: TrendingUp,
    href: '/services/lawyer-services/corporate-services/ipo-listing',
  },
  {
    name: 'Banking Law & Compliances',
    description:
      'RBI regulatory advisory, NBFC compliances, lending documentation, recovery and DRT representation.',
    icon: Banknote,
    href: '/services/lawyer-services/corporate-services/banking-law',
  },
  {
    name: 'Insurance Law & Compliances',
    description:
      'IRDAI compliance, policy drafting, claim disputes, reinsurance contracts and insurance litigation.',
    icon: Umbrella,
    href: '/services/lawyer-services/corporate-services/insurance-law',
  },
  {
    name: 'Securities Law & Compliances',
    description:
      'SEBI regulations, takeover code, insider trading defence, listing obligations and securities litigation.',
    icon: LineChart,
    href: '/services/lawyer-services/corporate-services/securities-law',
  },
  {
    name: 'Industrial Dispute',
    description:
      'Conciliation, labour court & industrial tribunal matters, layoffs, retrenchment and union negotiations.',
    icon: Users,
    href: '/services/lawyer-services/corporate-services/industrial-dispute',
  },
  {
    name: 'International Trade & Customs Law',
    description:
      'Cross-border trade compliance, customs valuation, anti-dumping, FEMA and DGFT advisory.',
    icon: Globe,
    href: '/services/lawyer-services/corporate-services/international-trade-customs',
  },
];

export default function CorporateServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Building className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Corporate <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Strategic corporate legal advisory and litigation across insolvency, M&A,
            capital markets, banking, insurance, securities and international trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white border border-slate-100 p-8 rounded-[40px] hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-7 h-7 text-slate-900 group-hover:text-primary" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{service.name}</h3>
              <p className="text-sm text-slate-600 mb-6 flex-1 font-medium leading-relaxed">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight className="w-4 h-4" />
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
