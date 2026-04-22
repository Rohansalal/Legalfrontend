'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { UserCheck, Zap, Calculator, Globe, FileSearch, CheckCircle2, FileCheck, Building2, ShieldCheck } from 'lucide-react';

export default function ProprietorshipFirmPage() {
  const data = {
    title: 'Proprietorship Firm Registration',
    description: "The simplest business structure in India — start your business quickly with minimal investment, zero compliance overhead, and full control in your hands.",
    heroBadges: ['No Minimum Capital', 'Easiest Setup', '3–7 Days Process'],
    introTitle: 'What is a Proprietorship Firm?',
    introContent: (
      <p>A Sole Proprietorship is a business owned and operated by a single individual. It is the simplest and most common form of business in India, especially for small traders, freelancers, and local service providers. There is no separate legal entity — the owner and the business are the same. While there is no formal registration law specific to proprietorships, registration is achieved through a combination of GST, MSME, Shop & Establishment, and/or trade licenses depending on the business nature.</p>
    ),
    detailsTitle: 'Why Choose a Proprietorship?',
    details: [
      { title: 'Instant Setup', desc: 'Start business in as little as 3–7 days with minimal documentation.', icon: Zap },
      { title: 'Complete Control', desc: 'You make all decisions. No board, no partners, no shareholders.', icon: UserCheck },
      { title: 'Low Cost & Compliance', desc: 'Lowest registration cost and minimal annual compliance requirements.', icon: Calculator },
      { title: 'Tax Benefits', desc: 'Taxed as individual income — lower tax rates for lower income brackets.', icon: ShieldCheck },
    ],
    requirements: [
      'PAN Card of proprietor', 'Aadhaar Card',
      'Bank account in business name', 'GST registration (if turnover > ₹20L)',
      'MSME/Udyam registration (recommended)', 'Shop & Establishment License (state-specific)',
      'Trade License (if applicable)', 'Professional Tax Registration (state-specific)',
    ],
    processTitle: 'How to Register a Proprietorship Firm',
    processIntro: 'Proprietorship registration is done through multiple government registrations that collectively establish business identity.',
    processSteps: [
      { title: 'GST Registration (Primary Identity)', desc: 'Obtain GSTIN — this serves as the primary business registration proof for a proprietorship.', icon: FileSearch },
      { title: 'MSME / Udyam Registration', desc: 'Register on Udyam portal for MSME status. Enables access to government schemes and bank loans.', icon: Building2 },
      { title: 'Shop & Establishment License', desc: 'Apply with your local municipal authority for Shop & Establishment license if you have a physical office.', icon: Globe },
      { title: 'Trade License (if applicable)', desc: 'Obtain trade license from municipal body if your business requires it (food, manufacturing, etc.).', icon: CheckCircle2 },
      { title: 'Open Current Bank Account', desc: 'Open a current account in the firm name using GSTIN + proprietor KYC documents.', icon: FileCheck },
    ],
    processOutro: 'A proprietorship can be established in 3–7 days. The key registration is GST which serves as the primary proof of business existence.',
    documents: [
      { category: 'Identity Documents', list: ['PAN Card', 'Aadhaar Card', 'Passport size photograph'] },
      { category: 'Business Address', list: ['Electricity bill or Rent Agreement', "NOC from landlord (if rented)", 'Municipal license (if applicable)'] },
      { category: 'Bank Account', list: ['PAN Card', 'GSTIN certificate', 'Address proof', 'Cancelled cheque'] },
    ],
    compliance: [
      { title: 'Income Tax Return', desc: 'File ITR-3 or ITR-4 (Sugam) annually. Business income taxed as personal income.' },
      { title: 'GST Returns', desc: 'If GST registered, file GSTR-1 and GSTR-3B monthly/quarterly.' },
      { title: 'Bookkeeping', desc: 'Maintain basic income-expense records. Audit required if turnover exceeds ₹1 Crore (₹2 Crore under presumptive scheme).' },
      { title: 'Professional Tax', desc: 'Pay professional tax as applicable in your state (if enrolled).' },
    ],
    faqs: [
      { q: 'Is there a formal registration certificate for Proprietorship?', a: 'There is no single registration certificate for a proprietorship. GST certificate, MSME/Udyam certificate, and shop license together establish the business identity.' },
      { q: 'What is the biggest risk of a Proprietorship?', a: 'Unlimited personal liability — the owner is personally responsible for all business debts. Personal assets can be attached to settle business obligations.' },
      { q: 'Can a Proprietorship convert to a company?', a: 'Yes. You can convert a proprietorship to a Private Limited Company or LLP as your business grows. The conversion is straightforward.' },
      { q: 'Do I need GST registration for Proprietorship?', a: 'GST registration is mandatory if your annual turnover exceeds ₹20 Lakhs (₹10 Lakhs in special states). It is also recommended for inter-state selling.' },
      { q: 'Can I hire employees in a Proprietorship?', a: 'Yes. You can hire any number of employees. If you have 10+ employees, ESI and PF registrations become mandatory.' },
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
