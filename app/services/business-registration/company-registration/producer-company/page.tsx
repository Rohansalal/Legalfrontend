'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Users, ShieldCheck, TrendingUp, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck, Building2 } from 'lucide-react';

export default function ProducerCompanyPage() {
  const data = {
    title: 'Producer Company Registration',
    description: 'Empower farmers, artisans, and producers through collective business. A Producer Company brings the structure of a company with the spirit of a cooperative.',
    heroBadges: ['For Farmers & Artisans', 'Collective Ownership', '20–25 Days Process'],
    introTitle: 'What is a Producer Company?',
    introContent: (
      <p>A Producer Company is a legally recognized body of producers — farmers, artisans, or craftspersons — registered under Section 378 of the Companies Act, 2013 (formerly Companies Act, 1956, Part IXA). It combines the advantages of a cooperative society with the structure and credibility of a company. Members are individuals engaged in activities related to primary produce (agriculture, horticulture, floriculture, pisciculture, animal husbandry, etc.) and they collectively own and manage the company.</p>
    ),
    detailsTitle: 'Key Benefits of a Producer Company',
    details: [
      { title: 'Collective Bargaining', desc: 'Pool resources to negotiate better prices and market access for members.', icon: Users },
      { title: 'Limited Liability', desc: 'Members are protected — personal assets not at risk for company debts.', icon: ShieldCheck },
      { title: 'Access to Finance', desc: 'Eligible for NABARD grants, government subsidies, and bank loans as a company.', icon: TrendingUp },
      { title: 'Market Linkage', desc: 'Collective selling enables direct access to large buyers, processors, and export markets.', icon: Globe },
    ],
    requirements: [
      'Minimum 10 individual producers OR 2 producer institutions', 'All members must be engaged in primary produce activities',
      'Minimum 5 Directors', 'At least 1 Indian Resident Director',
      'Digital Signature Certificate (DSC)', 'Director Identification Number (DIN)',
      'Unique company name ending with "Producer Company Ltd"', 'Registered Office Address',
    ],
    processTitle: 'How to Register a Producer Company',
    processIntro: 'Producer Company registration follows the SPICe+ MCA process, similar to a Private Limited Company.',
    processSteps: [
      { title: 'Obtain DSC and DIN for Directors', desc: 'All proposed directors must get their DSC and DIN before proceeding.', icon: UserCheck },
      { title: 'Reserve Company Name', desc: 'Submit name via SPICe+ Part A. Name must end with "Producer Company Limited".', icon: FileSearch },
      { title: 'Prepare MOA and AOA', desc: 'Draft MOA specifying primary produce activities and AOA governing company operations.', icon: Building2 },
      { title: 'File SPICe+ Part B', desc: 'Submit incorporation form with all 10+ member details, director details, and registered office.', icon: Globe },
      { title: 'MCA Verification', desc: 'MCA verifies all documents and member eligibility (all must be primary producers).', icon: CheckCircle2 },
      { title: 'Certificate of Incorporation', desc: 'RoC issues COI. Producer Company is now a registered legal entity.', icon: FileCheck },
    ],
    processOutro: 'Registration typically takes 20–25 working days. All members must provide documentary evidence of their producer activity.',
    documents: [
      { category: 'Member / Director Identity', list: ['PAN Card of all 10+ members', 'Aadhaar Card', 'Photograph', 'Address proof'] },
      { category: 'Producer Proof', list: ['Farmer: Kisan Credit Card / Land Records / Passbook', 'Artisan: Certificate from Govt body', 'Any document proving primary produce activity'] },
      { category: 'Registered Office', list: ['Rental Agreement or ownership deed', 'Latest utility bill', "NOC from landlord"] },
    ],
    compliance: [
      { title: 'Annual General Meeting', desc: 'Mandatory AGM within 90 days of financial year end. All producer-members must be notified.' },
      { title: 'MCA Annual Filings', desc: 'File AOC-4 and MGT-7 annually. Non-compliance attracts penalties.' },
      { title: 'Distribution of Patronage Bonus', desc: 'Surplus can be distributed as patronage bonus to members in proportion to their transactions.' },
      { title: 'Statutory Audit', desc: 'Annual audit by a qualified CA is mandatory.' },
    ],
    faqs: [
      { q: 'Who can be a member of a Producer Company?', a: 'Only individuals who are primary producers (farmers, fishermen, artisans, etc.) or producer institutions (other producer companies / cooperatives) can be members.' },
      { q: 'Can a Producer Company sell products in the open market?', a: 'Yes. A Producer Company can aggregate members\' produce and sell collectively in open markets, to retailers, processors, or exporters.' },
      { q: 'Is a Producer Company eligible for government subsidies?', a: 'Yes. Producer Companies are eligible for various government schemes under NABARD, SFAC, and state agriculture departments.' },
      { q: 'Can profits be distributed?', a: 'Limited dividend distribution is allowed. Surplus can also be distributed as patronage bonus based on member transactions.' },
      { q: 'What is the difference between a Producer Company and a Cooperative?', a: 'A Producer Company follows the Companies Act and has MCA regulation — stronger governance, limited liability, and easier access to finance than traditional cooperatives.' },
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
