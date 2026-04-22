'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, Briefcase, Users } from 'lucide-react';

export default function BusinessAgreementPage() {
  const data = {
    title: 'Business Agreement Drafting',
    description: 'Professionally drafted business agreements including partnership deeds, shareholder agreements, co-founder agreements, distributor agreements, and agency agreements — covering IP, profit sharing, exit, and dispute resolution.',
    heroBadges: ['Partnership & Shareholder Agreements', 'Co-Founder & Exit Clauses', 'Arbitration Compliant'],
    introTitle: 'What are Business Agreements?',
    introContent: (
      <p>Business agreements are comprehensive legal documents that govern the relationships, rights, obligations, and liabilities between parties in a business arrangement. In India, the legal framework for business agreements spans the Indian Contract Act 1872, the Indian Partnership Act 1932, the Companies Act 2013, the Limited Liability Partnership Act 2008, and the Arbitration and Conciliation Act 1996 (for dispute resolution). Common business agreements include Partnership Deeds (defining the terms of a partnership firm including profit/loss sharing ratio, roles, capital contribution, and dissolution procedure under the Indian Partnership Act 1932), Shareholder Agreements (SHA — governing the relationship between shareholders of a private limited company, including voting rights, tag-along and drag-along rights, anti-dilution clauses, and exit mechanisms), Co-Founder Agreements (defining roles, equity vesting schedules with cliff and vesting periods, IP assignment to the company, and handling of a co-founder\'s departure), Distributor Agreements (governing territorial rights, minimum purchase obligations, pricing, returns, and exclusivity), and Agency Agreements (establishing the principal-agent relationship, commission structure, authority to bind the principal, and indemnity). Critical clauses in every business agreement include IP ownership (all business-related IP must belong to the company, not individuals), non-compete and non-solicitation provisions (typically 1–3 years post-exit), dividend and profit distribution policy, dispute resolution via arbitration at ICC or domestic arbitration forums, and governing law (Indian law, specific jurisdiction).</p>
    ),
    detailsTitle: 'Types of Business Agreements We Draft',
    details: [
      { title: 'Partnership & Co-Founder Agreements', desc: 'Partnership deeds under the Indian Partnership Act 1932 and co-founder agreements with equity vesting (4-year vesting, 1-year cliff), roles, IP assignment, and departure handling for startups.', icon: Users },
      { title: 'Shareholder Agreements (SHA)', desc: 'Comprehensive SHA covering share transfer restrictions, right of first refusal (ROFR), anti-dilution protection, drag-along/tag-along rights, board representation, and investor exit mechanisms.', icon: Briefcase },
      { title: 'Distributor & Agency Agreements', desc: 'Structured agreements for distribution networks, exclusive and non-exclusive agency arrangements, sub-distribution rights, territory definitions, and performance-linked fee structures.', icon: Globe },
      { title: 'Non-Compete & Exit Provisions', desc: 'Carefully crafted non-compete (enforceable under Indian law within reasonable geographic and temporal limits), non-solicitation, and buyout clauses to protect business continuity on partner exit.', icon: ShieldCheck },
    ],
    requirements: [
      'Names, addresses, and contribution details of all parties',
      'Business nature, name, and registered address',
      'Profit/loss sharing ratio or equity ownership structure',
      'Roles, responsibilities, and decision-making authority of each party',
      'Duration, exit conditions, and buyout valuation methodology',
      'IP ownership and confidentiality requirements',
    ],
    processTitle: 'How We Draft Your Business Agreement',
    processIntro: 'We combine legal expertise with deep business understanding to draft agreements that protect your interests while enabling smooth business operations.',
    processSteps: [
      { title: 'Business Structure Assessment', desc: 'We understand your business model, the relationship between parties, existing or proposed equity/ownership structure, and specific risk areas to be addressed in the agreement.', icon: UserCheck },
      { title: 'Drafting Key Clauses', desc: 'Our team drafts all critical provisions: roles and responsibilities, capital contribution and profit sharing, IP ownership, non-compete, non-solicitation, exit mechanism, and dispute resolution.', icon: FileSearch },
      { title: 'Review & Negotiation', desc: 'Both parties review the draft. We facilitate negotiations on disputed clauses and ensure the final agreement reflects the agreed commercial terms without legal ambiguity.', icon: CheckCircle2 },
      { title: 'Execution, Stamping & Registration', desc: 'We assist with execution on correct stamp paper (partnership deeds may require state-specific stamping and registration), e-signature where applicable, and notarization if needed.', icon: FileCheck },
    ],
    processOutro: 'Business agreement drafting typically takes 3–7 working days depending on complexity. Shareholder agreements for funded startups may take 7–14 days due to multiple party negotiations.',
    documents: [
      { category: 'Party Identification', list: ['PAN Card and Aadhaar of all individual parties', 'Incorporation certificate (for company parties)', 'Board resolution / authority to execute (for companies)'] },
      { category: 'Business Details', list: ['Business plan or company profile', 'Existing shareholder structure / cap table', 'Existing IP registrations (trademark, patent, copyright)'] },
      { category: 'Commercial Terms', list: ['Agreed equity / profit sharing ratios', 'Capital contribution schedule', 'Proposed salary / remuneration for working partners / founders'] },
    ],
    compliance: [
      { title: 'Partnership Deed Registration', desc: 'While registration of a partnership firm under the Indian Partnership Act 1932 is not mandatory, an unregistered firm cannot sue third parties or enforce rights against co-partners in court. Registration with the Registrar of Firms is strongly recommended.' },
      { title: 'Stamp Duty on Partnership Deeds', desc: 'Partnership deeds attract stamp duty under state stamp acts — typically &#8377;500 to &#8377;5,000 depending on the state and capital contribution. Shareholder agreements must also be stamped if they contain share transfer clauses.' },
      { title: 'IP Assignment Must Be in Writing', desc: 'For co-founder and business agreements, IP created by founders prior to or during the company\'s operation must be formally assigned to the company via a written IP Assignment Agreement — verbal transfers of IP are not recognized.' },
      { title: 'Non-Compete Enforceability', desc: 'Under Section 27 of the Indian Contract Act, agreements in restraint of trade are void unless they fall within statutory exceptions. Non-compete clauses must be reasonable in scope, geography, and time period to have any chance of enforcement in Indian courts.' },
    ],
    faqs: [
      { q: 'Is a co-founder agreement legally mandatory for a startup?', a: 'No, but it is absolutely critical. Without a co-founder agreement, disputes over equity, roles, and IP can destroy a company. A well-drafted co-founder agreement with equity vesting schedules prevents the most common causes of early-stage startup failure.' },
      { q: 'What is equity vesting and why does it matter?', a: 'Equity vesting means founders earn their shares over time (typically 4 years with a 1-year cliff). If a founder exits before the vesting period, unvested shares return to the company\'s ESOP pool. This prevents a departing founder from holding a large equity stake without contributing to the company\'s growth.' },
      { q: 'Can a Shareholder Agreement override the Articles of Association?', a: 'In India, the Articles of Association (AoA) of a company takes precedence over a Shareholder Agreement (SHA) for matters involving the company itself. To ensure SHA provisions are enforceable, key provisions must be mirrored in the AoA. We ensure consistency between SHA and AoA during drafting.' },
      { q: 'Are non-compete clauses enforceable in India?', a: 'Indian courts have historically been reluctant to enforce post-employment non-competes as they conflict with the right to livelihood. However, non-competes during employment or partnership are generally enforceable. Non-solicitation of employees and customers tends to be more reliably enforced than geographic restrictions.' },
      { q: 'What happens if a business partner wants to exit?', a: 'The exit mechanism should be defined in the business agreement. Common mechanisms include right of first refusal (existing partners get first right to buy the exiting partner\'s stake), shotgun/buy-sell clauses (either party can buy out the other at a named price), and waterfall provisions (priority of payouts on dissolution or sale).' },
    ],
  };

  return (
    <main>
      <Navbar />
      <ServiceTemplate {...data} />
      <CTASection />
      <Footer />
    </main>
  );
}
