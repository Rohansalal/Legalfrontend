'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Globe, Heart, Building2, UserCheck, FileSearch, CheckCircle2, FileCheck, Zap } from 'lucide-react';

export default function NGOSection8CompanyPage() {
  const data = {
    title: 'Section 8 Company for NGO',
    description: 'The most credible NGO legal structure — Section 8 Company under the Companies Act, 2013, regulated by MCA, preferred by corporates for CSR and international donors for grants.',
    heroBadges: ['MCA Regulated', 'CSR Funding Ready', '20–30 Days'],
    introTitle: 'Why Section 8 Company is the Gold Standard for NGOs',
    introContent: (
      <p>A Section 8 Company is the most prestigious and credible NGO structure in India. Incorporated under Section 8 of the Companies Act, 2013 by the Ministry of Corporate Affairs (MCA), it must apply a Central Government license (INC-16) to use the word "Foundation", "Association", "Organisation", etc. Unlike Trusts and Societies, a Section 8 Company follows the full Companies Act governance framework — board meetings, resolutions, MCA annual filings — giving it the highest accountability and transparency. This is why most corporate CSR programs and international grant-making organizations prefer it.</p>
    ),
    detailsTitle: 'Section 8 Company vs Other NGO Structures',
    details: [
      { title: 'Highest Credibility', desc: 'MCA regulation and full company law governance make it the most trusted NGO structure.', icon: ShieldCheck },
      { title: 'CSR Funding Ready', desc: 'Companies Law requires 2% CSR — most companies prefer Section 8 structure for CSR recipients.', icon: Building2 },
      { title: 'FCRA & Foreign Funding', desc: 'Easily eligible for FCRA and preferred by international foundations and bilateral agencies.', icon: Globe },
      { title: 'No Dividend Distribution', desc: 'Profits must be applied only to charitable objectives — ensures trustworthiness.', icon: Heart },
    ],
    requirements: [
      'Minimum 2 Directors and 2 Shareholders (can overlap)', 'At least 1 Indian Resident Director',
      'Digital Signature Certificate (DSC) for all directors', 'Director Identification Number (DIN)',
      'Central Government license (Form INC-12)', 'Estimated annual income-expenditure projection',
      'Statement of objectives (clearly charitable)', 'Registered office in India',
    ],
    processTitle: 'How to Register a Section 8 Company for NGO',
    processIntro: 'Registration requires both MCA incorporation AND a Central Government license — a two-step process.',
    processSteps: [
      { title: 'Obtain DSC and DIN', desc: 'All proposed directors must obtain DSC (Class 3) and Director Identification Number.', icon: UserCheck },
      { title: 'Name Approval via SPICe+', desc: 'Reserve company name through SPICe+ Part A. Name must end with "Foundation/Association/Organisation/Society/Council/Institute" etc.', icon: FileSearch },
      { title: 'File INC-12 for Central License', desc: 'Submit Form INC-12 to Central Government with Draft MOA, AOA, estimated income-expenditure, and declaration.', icon: Globe },
      { title: 'Receive INC-16 License', desc: 'Central Government grants INC-16 license if objectives are genuinely charitable and applicants are fit.', icon: CheckCircle2 },
      { title: 'File SPICe+ Part B', desc: 'Submit incorporation form with INC-16 license attached. Complete AGILE-PRO and eMOA/eAOA.', icon: Building2 },
      { title: 'Certificate of Incorporation', desc: 'MCA/RoC issues Certificate of Incorporation. Section 8 Company is legally formed.', icon: FileCheck },
    ],
    processOutro: 'Takes 20–30 working days primarily due to INC-12/INC-16 Central Government approval. Expediting requires complete and error-free documentation.',
    documents: [
      { category: 'Director Documents', list: ['PAN Card', 'Aadhaar Card', 'Photograph', 'Address proof'] },
      { category: 'Company Formation', list: ['Draft MOA with charitable objectives', 'Draft AOA', 'Projected income-expenditure (3 years)', 'Declaration that profits will not be distributed'] },
      { category: 'Registered Office', list: ['Rental agreement or ownership deed', 'NOC from landlord', 'Latest utility bill'] },
    ],
    compliance: [
      { title: 'MCA Annual Filings', desc: 'File AOC-4 and MGT-7 every year with RoC. Non-compliance attracts penalties and striking-off.' },
      { title: 'Board Meetings', desc: 'Minimum 2 board meetings per year (reduced for Section 8). Maintain proper minutes.' },
      { title: 'Statutory Audit', desc: 'Annual audit by qualified CA is mandatory. Audited financials must be filed with MCA.' },
      { title: '12A & 80G Renewal', desc: 'Renew 12A and 80G registrations every 5 years by filing Form 10AB with Income Tax Department.' },
    ],
    faqs: [
      { q: 'Can the founder take salary in a Section 8 Company?', a: 'Yes. Founders and directors can receive reasonable remuneration for services rendered, subject to Central Government approval in some cases.' },
      { q: 'Can a Section 8 Company undertake commercial activities?', a: 'Yes, subject to the condition that all profits are applied towards the stated charitable objectives. Commercial income should be incidental to charitable activities.' },
      { q: 'Is Section 8 Company preferred for CSR activities?', a: 'Yes. Section 8 Companies are the most credible CSR implementing agencies. Under Companies Act 2013, CSR expenditure through Section 8 companies meets the CSR requirements.' },
      { q: 'Can a Section 8 Company receive foreign donations?', a: 'Yes, but only after obtaining FCRA (Foreign Contribution Regulation Act) registration from the Ministry of Home Affairs.' },
      { q: 'What is the difference between Section 8 Company and Section 25 Company?', a: 'Section 8 is the new provision under Companies Act, 2013. Section 25 was the corresponding provision under the old Companies Act, 1956. All existing Section 25 companies are now treated as Section 8 companies.' },
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
