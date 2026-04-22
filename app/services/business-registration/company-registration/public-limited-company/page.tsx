'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Building2, TrendingUp, ShieldCheck, Globe, UserCheck, FileSearch, PenTool, CheckCircle2, FileCheck, Zap } from 'lucide-react';

export default function PublicLimitedCompanyPage() {
  const data = {
    title: 'Public Limited Company Registration',
    description: 'Raise capital from the public, list on stock exchanges, and build a large-scale enterprise. A Public Limited Company is the gold standard for major Indian businesses.',
    heroBadges: ['Stock Exchange Listing Eligible', 'Unlimited Shareholders', '15–20 Days Process'],
    introTitle: 'What is a Public Limited Company?',
    introContent: (
      <p>A Public Limited Company is a company registered under the Companies Act, 2013 that can offer its shares to the general public and list on stock exchanges like NSE and BSE. It requires a minimum of 7 shareholders, 3 directors, and no ceiling on the number of members. It is ideal for large businesses seeking massive capital from public investors.</p>
    ),
    detailsTitle: 'Why Choose a Public Limited Company?',
    details: [
      { title: 'Public Capital Raising', desc: 'Issue shares and debentures to the public through IPO, FPO, or public issue.', icon: TrendingUp },
      { title: 'Stock Exchange Listing', desc: 'List on BSE or NSE to provide liquidity to investors and increase brand credibility.', icon: Globe },
      { title: 'Unlimited Members', desc: 'No cap on the number of shareholders — scale your investor base globally.', icon: Building2 },
      { title: 'Limited Liability', desc: 'Shareholders are only liable to the extent of their share capital contribution.', icon: ShieldCheck },
    ],
    requirements: [
      'Minimum 7 Shareholders', 'Minimum 3 Directors (max 15)',
      'At least 1 Indian Resident Director', 'Minimum paid-up capital ₹5 Lakhs',
      'Registered Office Address', 'Digital Signature Certificate (DSC)',
      'Director Identification Number (DIN)', 'Prospectus for public issue (if applicable)',
    ],
    processTitle: 'How to Register a Public Limited Company',
    processIntro: 'The process is similar to Pvt Ltd but requires additional compliance steps due to public shareholding.',
    processSteps: [
      { title: 'Obtain DSC for All Directors', desc: 'All 3+ proposed directors must have a valid Class 3 DSC.', icon: UserCheck },
      { title: 'Name Approval via SPICe+', desc: 'Submit company name for MCA approval. Name must include "Limited" at the end.', icon: FileSearch },
      { title: 'Draft MOA and AOA', desc: 'Prepare Memorandum and Articles of Association specifying public company objectives.', icon: PenTool },
      { title: 'File Incorporation Forms', desc: 'Submit SPICe+ Part B with AGILE-PRO, eMOA, eAOA to MCA.', icon: Globe },
      { title: 'Obtain Certificate of Incorporation', desc: 'RoC issues COI with CIN. Company is now legally formed.', icon: CheckCircle2 },
      { title: 'Commencement of Business', desc: 'File INC-20A within 180 days of incorporation before starting operations.', icon: FileCheck },
    ],
    processOutro: 'Public Limited Company registration typically takes 15–20 working days. Stock exchange listing requires additional SEBI compliance.',
    documents: [
      { category: 'Director Identity', list: ['PAN Cards of all Directors', 'Aadhaar Cards', 'Passport size photographs', 'Address proof of each Director'] },
      { category: 'Registered Office', list: ['Ownership deed or Rental Agreement', 'Latest utility bill', "NOC from property owner"] },
      { category: 'Company Documents', list: ['MOA & AOA draft', 'Consent of Directors (DIR-2)', 'Affidavit from subscribers'] },
    ],
    compliance: [
      { title: 'SEBI Compliance', desc: 'Listed companies must comply with SEBI LODR regulations, insider trading rules, and quarterly disclosures.' },
      { title: 'AGM & Board Meetings', desc: 'Mandatory Annual General Meeting (AGM) within 6 months of financial year end.' },
      { title: 'Statutory Audit', desc: 'Audited financial statements required annually by a qualified CA.' },
      { title: 'MCA Annual Filings', desc: 'File AOC-4, MGT-7, and other required forms with RoC every year.' },
    ],
    faqs: [
      { q: 'What is the difference between Pvt Ltd and Public Ltd?', a: 'A Public Limited Company can raise funds from the public and list on stock exchanges, while a Pvt Ltd cannot. Public Ltd has no cap on shareholders; Pvt Ltd is limited to 200.' },
      { q: 'Can a Public Ltd company be listed on NSE/BSE immediately?', a: 'No. Listing requires compliance with SEBI regulations, minimum paid-up capital requirements, and a formal IPO process.' },
      { q: 'What is the minimum capital for Public Ltd?', a: 'Minimum paid-up share capital of ₹5 Lakhs is required for a Public Limited Company.' },
      { q: 'How many directors are required?', a: 'A minimum of 3 directors are required. At least one must be a resident of India.' },
      { q: 'Can a Public Ltd convert to Pvt Ltd?', a: 'Yes, a Public Ltd company can convert to Pvt Ltd by passing a special resolution and filing the required forms with MCA.' },
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
