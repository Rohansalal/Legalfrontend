'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Heart, ShieldCheck, FileText, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function TrustRegistrationPage() {
  const data = {
    title: 'Trust Registration (NGO)',
    description: 'Create a private or public charitable trust for social welfare, education, healthcare, or religious purposes. Governed by the Indian Trusts Act, 1882.',
    heroBadges: ['Indian Trusts Act 1882', 'State Registration', '15–20 Days'],
    introTitle: 'What is a Registered Trust?',
    introContent: (
      <p>A Trust is a legal arrangement where the owner (settlor/author) transfers property or funds to a group of persons (trustees) for the benefit of beneficiaries or charitable purposes. Public Charitable Trusts are used for NGOs, while Private Trusts are used for family wealth management. For NGO purposes, a Public Charitable Trust is registered with the state Charity Commissioner or Sub-Registrar. It is governed primarily by the Indian Trusts Act, 1882 and state-specific acts.</p>
    ),
    detailsTitle: 'Why Register a Trust?',
    details: [
      { title: 'Simple Governance', desc: 'Trustee-based management is simpler than democratic societies or MCA-regulated companies.', icon: Heart },
      { title: 'Ideal for Education & Health', desc: 'Most schools, hospitals, and charitable organizations in India operate as trusts.', icon: ShieldCheck },
      { title: 'Tax Exemption Eligible', desc: 'Public trusts can apply for 12A income tax exemption and 80G donor deduction status.', icon: FileText },
      { title: 'FCRA Eligible', desc: 'Registered trusts can apply for FCRA to receive foreign contributions for charitable work.', icon: Globe },
    ],
    requirements: [
      'Minimum 2 Trustees', 'Trust Deed executed on stamp paper',
      'Author/Settler of the trust (can also be a trustee)', 'Named beneficiaries or charitable objectives',
      'PAN Card of all trustees', 'Registered office address',
      'Trust Deed registered with Sub-Registrar (mandatory for immovable property)', 'Declaration of trust objectives',
    ],
    processTitle: 'How to Register a Trust in India',
    processIntro: 'Trust registration is done at the Sub-Registrar office in the district where the trust is formed. Some states also have a Charity Commissioner.',
    processSteps: [
      { title: 'Draft Trust Deed', desc: 'Prepare Trust Deed specifying name, objectives, trustees, trustee powers, beneficiaries, and dissolution procedure.', icon: FileSearch },
      { title: 'Execute on Stamp Paper', desc: 'Print Trust Deed on non-judicial stamp paper and sign before the Sub-Registrar.', icon: UserCheck },
      { title: 'Register with Sub-Registrar', desc: 'Present before the Sub-Registrar along with 2 witnesses. Trustees must be present in person.', icon: Globe },
      { title: 'Pay Registration Fee', desc: 'Pay applicable stamp duty and registration fee (varies by state and trust property value).', icon: CheckCircle2 },
      { title: 'Receive Registered Trust Deed', desc: 'Sub-Registrar registers the deed and returns a certified copy. Trust is now legally constituted.', icon: FileCheck },
    ],
    processOutro: 'Trust registration takes 15–20 days. The critical step is the personal appearance of trustees before the Sub-Registrar.',
    documents: [
      { category: 'Trustee Documents', list: ['PAN Card of all trustees', 'Aadhaar Card', 'Passport size photographs', 'Address proof'] },
      { category: 'Trust Deed', list: ['Executed deed on stamp paper', 'Signed by all trustees', 'Witnessed by 2 independent witnesses'] },
      { category: 'Office Address', list: ['Rental Agreement or ownership deed', 'NOC from landlord', 'Latest utility bill'] },
    ],
    compliance: [
      { title: 'Annual Accounts', desc: 'Prepare and maintain annual income-expenditure statements. Audit required for 12A trusts.' },
      { title: 'Income Tax Return', desc: 'File ITR annually. Apply for 12A for complete income tax exemption.' },
      { title: 'Charity Commissioner Reports', desc: 'In states like Maharashtra and Gujarat, trusts must file annual reports with the Charity Commissioner.' },
      { title: 'Trust Property Management', desc: 'Trustees must manage trust property prudently and only for the stated objectives.' },
    ],
    faqs: [
      { q: 'What is the difference between a Public Trust and Private Trust?', a: 'A Public Charitable Trust benefits the general public (used for NGOs). A Private Trust benefits specific individuals or families (used for estate planning).' },
      { q: 'How many trustees are required?', a: 'Minimum 2 trustees are required. There is no upper limit, but an odd number (3, 5, 7) is recommended for clear majority voting.' },
      { q: 'Can a trust own property?', a: 'Yes. A trust can own movable and immovable property. Property transferred to the trust must be registered in the trust\'s name.' },
      { q: 'Is a Trust deed notarized or registered?', a: 'For immovable property, trust deed registration with the Sub-Registrar is mandatory. For movable property, notarization is sufficient though registration is recommended.' },
      { q: 'Can a trust be dissolved?', a: 'A trust can be dissolved as per the dissolution clause in the Trust Deed or by court order. Assets must be transferred to another charitable organization with similar objectives.' },
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
