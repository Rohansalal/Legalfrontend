'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Users, ShieldCheck, Calculator, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck, Building2 } from 'lucide-react';

export default function PartnershipFirmPage() {
  const data = {
    title: 'Partnership Firm Registration',
    description: 'Start a business with two or more partners under a legally binding Partnership Deed. Simple, cost-effective, and flexible — ideal for small and medium businesses.',
    heroBadges: ['2+ Partners', 'Low Compliance', '5–7 Days Process'],
    introTitle: 'What is a Partnership Firm?',
    introContent: (
      <p>A Partnership Firm is a business entity formed by two or more persons who agree to share profits and losses in a predetermined ratio. It is governed by the Indian Partnership Act, 1932. Registration is not mandatory but is strongly recommended as it provides legal protection — registered firms can sue partners or third parties, while unregistered firms cannot. Partners have unlimited personal liability for the firm's debts.</p>
    ),
    detailsTitle: 'Why Choose a Partnership Firm?',
    details: [
      { title: 'Easy Formation', desc: 'Formed by executing a Partnership Deed — no government approval or complex formalities.', icon: Users },
      { title: 'Shared Resources', desc: 'Pool funds, skills, and networks with partners to grow the business faster.', icon: Building2 },
      { title: 'Low Cost Setup', desc: 'Registration cost is minimal. Stamp duty on partnership deed is the primary expense.', icon: Calculator },
      { title: 'Flexible Profit Sharing', desc: 'Partners can agree on any profit-sharing ratio as per their contribution.', icon: Globe },
    ],
    requirements: [
      'Minimum 2 Partners (max 50)', 'All partners must be Indian citizens (for registered firms)',
      'Partnership Deed executed on stamp paper', 'Application to Registrar of Firms (ROF)',
      'PAN Card of all partners', 'Address proof of all partners',
      'Proof of business address', 'Affidavit from all partners',
    ],
    processTitle: 'How to Register a Partnership Firm',
    processIntro: 'Partnership registration is done with the Registrar of Firms (ROF) in the state where the firm operates.',
    processSteps: [
      { title: 'Draft Partnership Deed', desc: 'Prepare a comprehensive Partnership Deed covering profit-sharing, duties, capital contributions, dispute resolution, and exit clauses.', icon: FileSearch },
      { title: 'Execute on Stamp Paper', desc: 'Print the deed on non-judicial stamp paper of appropriate value (varies by state) and get it signed by all partners.', icon: UserCheck },
      { title: 'Apply to Registrar of Firms', desc: 'Submit Form 1 (application for registration) with the executed deed to the State Registrar of Firms.', icon: Globe },
      { title: 'Submit Supporting Documents', desc: 'Attach identity proofs, address proofs, and signed affidavits of all partners.', icon: Building2 },
      { title: 'Registration Certificate', desc: 'ROF issues a Registration Certificate and adds the firm to the Register of Firms.', icon: FileCheck },
    ],
    processOutro: 'Partnership firm registration takes 5–7 working days after submission of complete documents to the Registrar of Firms.',
    documents: [
      { category: 'Partner Identity', list: ['PAN Card of all partners', 'Aadhaar Card', 'Passport size photographs', 'Address proof (bank statement / utility bill)'] },
      { category: 'Partnership Deed', list: ['Executed deed on stamp paper', 'Signed by all partners', 'Witnessed by at least 2 witnesses'] },
      { category: 'Business Address', list: ['Rental Agreement or ownership deed', 'Latest utility bill', "NOC from landlord"] },
    ],
    compliance: [
      { title: 'Income Tax Return (ITR-5)', desc: 'Partnership firm must file ITR-5 annually. Taxed at 30% flat rate on profits.' },
      { title: 'GST Returns', desc: 'If GST registered, file GSTR-1 and GSTR-3B monthly/quarterly.' },
      { title: 'TDS Compliance', desc: 'Deduct and deposit TDS on payments like salaries, rent, professional fees as applicable.' },
      { title: 'Partnership Agreement Updates', desc: 'Any changes to profit-sharing ratio, partners, or key terms must be documented through a Supplementary Deed.' },
    ],
    faqs: [
      { q: 'Is registration of a Partnership Firm compulsory?', a: 'No, registration is not mandatory under the Indian Partnership Act, 1932. However, an unregistered firm cannot file a suit in court to enforce rights against partners or third parties.' },
      { q: 'How many partners can a firm have?', a: 'A partnership firm can have a maximum of 50 partners as per the Companies Act, 2013. Minimum 2 partners are required.' },
      { q: 'What is a Partnership Deed?', a: 'A Partnership Deed is a legally binding agreement between partners specifying profit-sharing ratio, capital contributions, duties, salaries, and procedures for dispute resolution and dissolution.' },
      { q: 'Can a partnership firm be converted to LLP?', a: 'Yes. A registered partnership firm can be converted to an LLP to get limited liability protection without changing the business structure significantly.' },
      { q: 'What are the tax implications for partners?', a: 'Partners pay income tax on their share of profits and any salary/commission received from the firm. The firm itself is taxed at 30%.' },
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
