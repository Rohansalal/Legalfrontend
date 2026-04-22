'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Building2, ShieldCheck, TrendingUp, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck, Calculator } from 'lucide-react';

export default function NBFCRegistrationPage() {
  const data = {
    title: 'NBFC Registration',
    description: 'Get your Non-Banking Financial Company (NBFC) registered with the Reserve Bank of India (RBI). Enable lending, investment, and financial services under RBI supervision.',
    heroBadges: ['RBI Regulated', 'Financial Services License', '90–180 Days Process'],
    introTitle: 'What is an NBFC?',
    introContent: (
      <p>A Non-Banking Financial Company (NBFC) is a company registered under the Companies Act and licensed by the Reserve Bank of India (RBI) under Section 45-IA of the RBI Act, 1934. NBFCs provide a wide range of financial services including loans, advances, acquisition of shares/stocks/bonds, hire-purchase, insurance, and chit fund activities. Unlike banks, NBFCs cannot accept demand deposits, issue cheques, or provide deposit insurance. However, they play a critical role in India's financial ecosystem, especially in credit access for underserved segments.</p>
    ),
    detailsTitle: 'Types of NBFCs (RBI Categorization)',
    details: [
      { title: 'NBFC-ICC (Investment & Credit)', desc: 'Provides loans and credit facilities to individuals and businesses. Most common type.', icon: TrendingUp },
      { title: 'NBFC-MFI (Microfinance)', desc: 'Provides small loans to low-income borrowers in rural/semi-urban areas.', icon: ShieldCheck },
      { title: 'NBFC-P2P (Peer to Peer)', desc: 'Online platform connecting borrowers and lenders directly.', icon: Globe },
      { title: 'NBFC-Account Aggregator', desc: 'Securely aggregates financial data of customers for sharing with financial institutions.', icon: Calculator },
    ],
    requirements: [
      'Company registered under Companies Act 2013', 'Minimum Net Owned Fund (NOF) of ₹2 Crores',
      'Minimum 1/3rd directors with finance/banking experience', 'Clean CIBIL record for all directors',
      'Business plan for 5 years', 'IT infrastructure plan',
      'Fair Practices Code and KYC policy', 'No criminal record for any director',
    ],
    processTitle: 'How to Obtain NBFC License from RBI',
    processIntro: 'NBFC registration is a two-stage process: first incorporate a company, then apply to RBI for the Certificate of Registration (CoR).',
    processSteps: [
      { title: 'Incorporate a Private Limited Company', desc: 'Register a Pvt Ltd company under Companies Act with "Finance", "Investments", "Leasing", or "Capital" in the name.', icon: UserCheck },
      { title: 'Meet Net Owned Fund Requirement', desc: 'Ensure paid-up equity capital of minimum ₹2 Crores. This must reflect in the company\'s balance sheet.', icon: Calculator },
      { title: 'Prepare Business Plan & Policies', desc: 'Draft 5-year business plan, risk management framework, Fair Practices Code, KYC/AML policy, and IT security policy.', icon: FileSearch },
      { title: 'Apply on RBI COSMOS Portal', desc: 'Submit online application for NBFC registration on RBI\'s COSMOS portal with all required documents.', icon: Globe },
      { title: 'Physical Application to RBI Regional Office', desc: 'Submit physical copies of the application and supporting documents to the concerned RBI regional office.', icon: Building2 },
      { title: 'RBI Due Diligence & Inspection', desc: 'RBI conducts background verification, financial assessment, and may conduct an inspection of proposed operations.', icon: CheckCircle2 },
      { title: 'Certificate of Registration (CoR)', desc: 'RBI issues Certificate of Registration upon satisfaction. NBFC can now commence financial operations.', icon: FileCheck },
    ],
    processOutro: 'NBFC registration is a lengthy process taking 90–180 days. RBI scrutinizes applications very carefully. Professional guidance is strongly recommended.',
    documents: [
      { category: 'Company Documents', list: ['Certificate of Incorporation', 'MOA & AOA', 'Audited financial statements', 'Net Worth Certificate from CA'] },
      { category: 'Director Documents', list: ['PAN & Aadhaar of all directors', 'Banker\'s report for each director', 'CIBIL report', 'Resume / qualifications of each director'] },
      { category: 'Business Plan', list: ['5-year financial projections', 'Business model and target market', 'Risk management framework', 'IT infrastructure details'] },
    ],
    compliance: [
      { title: 'Statutory Audit', desc: 'Annual statutory audit is mandatory. Auditor must submit specific NBFC compliance report.' },
      { title: 'RBI Returns & Reporting', desc: 'File NBS-1 (annual), NBS-2 (annual), NBS-7 (quarterly), and other RBI-specific returns.' },
      { title: 'Prudential Norms', desc: 'Maintain Capital Adequacy Ratio (15%), provision for NPA, and credit concentration limits.' },
      { title: 'Fair Practices Code', desc: 'Adhere to RBI Fair Practices Code in all lending activities — interest rate disclosure, grievance redressal.' },
    ],
    faqs: [
      { q: 'What is the minimum capital required for NBFC?', a: 'A minimum Net Owned Fund (NOF) of ₹2 Crores is required for most NBFC categories. For NBFC-MFI, the requirement is ₹5 Crores (₹2 Crores for northeast region).' },
      { q: 'Can an NBFC accept deposits?', a: 'Most NBFCs cannot accept public deposits. Only NBFCs with a specific "Deposit Accepting" certificate from RBI can accept public deposits, and they face much stricter regulations.' },
      { q: 'What is the difference between a bank and an NBFC?', a: 'Banks can accept demand deposits (savings/current accounts), issue cheques, and are covered by deposit insurance. NBFCs cannot do any of these. NBFCs face less stringent CRR/SLR requirements.' },
      { q: 'How long does NBFC registration take?', a: 'The process typically takes 90–180 days from the date of application, depending on completeness of documents and RBI\'s processing queue.' },
      { q: 'Is there a renewal requirement for NBFC license?', a: 'The RBI Certificate of Registration does not expire. However, NBFCs must continuously comply with RBI regulations or risk cancellation of their CoR.' },
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
