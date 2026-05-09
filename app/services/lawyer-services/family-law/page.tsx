import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import {
  Heart,
  ArrowRight,
  Users,
  HeartHandshake,
  Scale,
  Baby,
  Wallet,
  Gem,
  ShieldAlert,
  Ban,
  Globe,
  ArrowRightLeft,
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Family Law - Divorce, Custody & Maintenance | Legal Door',
  description:
    'Expert family law services covering divorce (mutual & contested), child custody, alimony, dowry, domestic violence and matrimonial transfers.',
};

const services = [
  {
    name: 'Family Dispute',
    description:
      'Mediation, negotiation and litigation across inheritance, partition and joint family disputes.',
    icon: Users,
    href: '/services/lawyer-services/family-law/family-dispute',
  },
  {
    name: 'Mutual Divorce',
    description:
      'Joint petition under section 13B HMA / equivalent — drafting, court appearances and decree.',
    icon: HeartHandshake,
    href: '/services/lawyer-services/family-law/mutual-divorce',
  },
  {
    name: 'Contested Divorce',
    description:
      'Cruelty, desertion, adultery and other grounds — full courtroom representation through trial.',
    icon: Scale,
    href: '/services/lawyer-services/family-law/contested-divorce',
  },
  {
    name: 'Child Custody & Visitation',
    description:
      'Custody petitions, guardianship, visitation rights and best-interests advocacy for minors.',
    icon: Baby,
    href: '/services/lawyer-services/family-law/child-custody-visitation',
  },
  {
    name: 'Alimony & Maintenance',
    description:
      'Section 125 CrPC, HMA / Special Marriage Act maintenance — interim and permanent claims.',
    icon: Wallet,
    href: '/services/lawyer-services/family-law/alimony-maintenance',
  },
  {
    name: 'Dowry',
    description:
      'Defence and prosecution under Dowry Prohibition Act and Section 498A IPC matters.',
    icon: Gem,
    href: '/services/lawyer-services/family-law/dowry',
  },
  {
    name: 'Domestic Violence',
    description:
      'Protection, residence and monetary relief orders under PWDVA, 2005.',
    icon: ShieldAlert,
    href: '/services/lawyer-services/family-law/domestic-violence',
  },
  {
    name: 'Injunction Against Spouse',
    description:
      'Restraining orders, anti-harassment injunctions and protective court directions.',
    icon: Ban,
    href: '/services/lawyer-services/family-law/injunction-against-spouse',
  },
  {
    name: 'Execution of Foreign Divorce Decree',
    description:
      'Recognition, enforcement and execution of overseas divorce decrees in Indian courts.',
    icon: Globe,
    href: '/services/lawyer-services/family-law/foreign-divorce-decree',
  },
  {
    name: 'Transfer of Matrimonial Cases',
    description:
      'Transfer petitions before Supreme Court / High Courts to move matrimonial matters across jurisdictions.',
    icon: ArrowRightLeft,
    href: '/services/lawyer-services/family-law/transfer-of-matrimonial-cases',
  },
];

export default function FamilyLawPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Family <span className="text-primary">Law</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Sensitive, confidential and effective legal representation in matrimonial
            and family matters — divorce, custody, maintenance, domestic violence
            and cross-border family disputes.
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
