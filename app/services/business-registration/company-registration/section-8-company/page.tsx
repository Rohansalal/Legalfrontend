'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Heart, ShieldCheck, Zap, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck, Building2 } from 'lucide-react';

export default function Section8CompanyPage() {
  const data = {
    title: 'Section 8 Company Registration',
    description: 'The most credible NGO structure in India — register a Section 8 Company for charitable, educational, or social objectives with MCA regulation and significant tax benefits.',
    heroBadges: ['Non-Profit Structure', 'CSR Funding Eligible', '20–30 Days Process'],
    introTitle: 'What is a Section 8 Company?',
    introContent: (
      <p>A Section 8 Company is incorporated under Section 8 of the Companies Act, 2013 for promoting charitable, educational, religious, social welfare, or environmental objectives. Unlike a Trust or Society, it is regulated by the Ministry of Corporate Affairs (MCA), giving it the highest credibility among NGO structures. Profits must be applied only towards the company's objectives — no dividend distribution is allowed. It is the preferred structure for organizations seeking CSR funding and foreign donations.</p>
    ),
    detailsTitle: 'Why Register as a Section 8 Company?',
    details: [
      { title: 'Highest Credibility', desc: 'MCA-regulated structure preferred by donors, CSR teams, and government bodies.', icon: ShieldCheck },
      { title: 'No Minimum Capital', desc: 'No minimum paid-up capital requirement — start with any amount.', icon: Zap },
      { title: 'Tax Exemption Eligible', desc: 'Can apply for 12A (income tax exemption) and 80G (donor tax deduction).', icon: Heart },
      { title: 'FCRA Eligible', desc: 'Eligible to receive foreign contributions after obtaining FCRA registration.', icon: Globe },
    ],
    requirements: [
      'Minimum 2 Directors and 2 Shareholders', 'At least 1 Indian Resident Director',
      'Digital Signature Certificate (DSC)', 'Director Identification Number (DIN)',
      'Proposed company name ending with "Foundation / Association / Organisation / Society / Council / Club / Institute / Federation / Chamber / Confederation / Federation"',
      'Statement of objectives of the company', 'Registered Office Address',
      'Declaration that no profit distribution to members',
    ],
    processTitle: 'How to Register a Section 8 Company',
    processIntro: 'Section 8 registration requires a special Central Government license in addition to normal company incorporation.',
    processSteps: [
      { title: 'Obtain DSC and DIN', desc: 'All proposed directors must obtain DSC and DIN before proceeding.', icon: UserCheck },
      { title: 'Apply for Name Approval', desc: 'Reserve the company name via SPICe+ Part A. Name must reflect charitable purpose.', icon: FileSearch },
      { title: 'File INC-12 for License', desc: 'Apply for Section 8 license from the Central Government through Form INC-12 with MOA, AOA, and estimated future income/expenditure.', icon: Globe },
      { title: 'Receive INC-16 License', desc: 'Central Government issues INC-16 license if satisfied with the objectives and capability.', icon: CheckCircle2 },
      { title: 'File SPICe+ for Incorporation', desc: 'Submit SPICe+ Part B form with the INC-16 license for final incorporation.', icon: Building2 },
      { title: 'Certificate of Incorporation', desc: 'RoC issues the COI. Section 8 Company is now legally incorporated.', icon: FileCheck },
    ],
    processOutro: 'Section 8 Company registration takes 20–30 working days, primarily due to the Central Government license processing time.',
    documents: [
      { category: 'Director Identity', list: ['PAN Card of all Directors', 'Aadhaar Card', 'Photograph', 'Address proof'] },
      { category: 'Company Documents', list: ['Draft MOA with charitable objectives', 'Draft AOA', 'Estimated income & expenditure statement'] },
      { category: 'Registered Office', list: ['Rental Agreement or ownership proof', 'Latest utility bill', "NOC from landlord"] },
    ],
    compliance: [
      { title: 'MCA Annual Filings', desc: 'File AOC-4 and MGT-7 annually with RoC. Non-compliance attracts heavy penalties.' },
      { title: 'Income Tax Return', desc: 'File ITR annually. Apply for 12A to get income tax exemption on surplus.' },
      { title: 'Audit Requirement', desc: 'Statutory audit is mandatory for Section 8 Companies regardless of turnover.' },
      { title: 'No Profit Distribution', desc: 'Profits cannot be distributed as dividends. All income must be used for stated objectives.' },
    ],
    faqs: [
      { q: 'Can a Section 8 Company earn revenue?', a: 'Yes, a Section 8 Company can earn revenue through membership fees, grants, donations, and even commercial activities — but all profits must be reinvested in the charitable objectives.' },
      { q: 'Is Section 8 Company better than a Trust?', a: 'Section 8 Company offers higher credibility (MCA regulated), better governance structure, and is preferred by corporate CSR teams and foreign donors. Trusts are simpler to manage.' },
      { q: 'Can a Section 8 Company receive foreign donations?', a: 'Yes, but only after obtaining FCRA (Foreign Contribution Regulation Act) registration from the Ministry of Home Affairs.' },
      { q: 'What are the tax benefits?', a: 'After 12A registration, all surplus income is exempt from income tax. After 80G registration, donors can claim 50% or 100% deduction on their donations.' },
      { q: 'Can a Section 8 Company pay salaries?', a: 'Yes. Reasonable salaries to employees and directors for services rendered are permitted.' },
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
