'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Heart, ShieldCheck, FileText, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function NGOTrustRegistrationPage() {
  const data = {
    title: 'Trust Registration for NGO',
    description: 'Register a public charitable trust as your NGO structure — the simplest and most trusted form for education, healthcare, and social welfare organizations in India.',
    heroBadges: ['Indian Trusts Act 1882', 'State Registration', '15–20 Days'],
    introTitle: 'Trust as an NGO Structure',
    introContent: (
      <p>A Public Charitable Trust is the most widely used NGO structure in India for organizing education, health, social welfare, and religious activities. Registered under the Indian Trusts Act, 1882 (or respective state act), it is governed by trustees appointed in the Trust Deed. It is simpler to manage than a Society (no regular elections) and more straightforward than a Section 8 Company. Once registered, the trust can obtain 12A and 80G tax exemptions, apply for FCRA to receive foreign donations, and access government grants.</p>
    ),
    detailsTitle: 'Benefits of Trust as NGO',
    details: [
      { title: 'Simple Governance', desc: 'Trustee-managed structure with no annual elections — continuity and stability in management.', icon: Heart },
      { title: 'Flexible Operations', desc: 'Wider operational flexibility — easier to add programs and activities than a Section 8 company.', icon: ShieldCheck },
      { title: '12A & 80G Eligible', desc: 'Apply for income tax exemption and donor tax deduction after registration.', icon: FileText },
      { title: 'FCRA Eligible', desc: 'Trusts with 3+ year track record can apply for FCRA to receive foreign contributions.', icon: Globe },
    ],
    requirements: [
      'Minimum 2 trustees', 'One author/settlor (can also be a trustee)',
      'Trust Deed executed on stamp paper', 'Charitable objectives clearly defined',
      'Registered office address in India', 'PAN Cards of all trustees',
      'No-profit motive — all income must be applied to objectives', 'Bank account in trust name',
    ],
    processTitle: 'How to Register a Charitable Trust',
    processIntro: 'Trust registration is done at the Sub-Registrar office (for immovable property) or Notarized (for movable property only).',
    processSteps: [
      { title: 'Draft Trust Deed', desc: 'Prepare comprehensive Trust Deed specifying name, registered office, objectives, trustees, their powers, beneficiaries, and dissolution procedure.', icon: FileSearch },
      { title: 'Execute on Stamp Paper', desc: 'Print on appropriate stamp paper (value varies by state). All trustees must sign in the presence of 2 witnesses.', icon: UserCheck },
      { title: 'Register at Sub-Registrar Office', desc: 'Present before the Sub-Registrar along with trustees and witnesses for in-person registration.', icon: Globe },
      { title: 'Receive Registered Trust Deed', desc: 'Sub-Registrar registers and returns the certified copy. Trust is legally constituted.', icon: CheckCircle2 },
      { title: 'Apply for PAN and Bank Account', desc: 'Apply for PAN for the Trust. Open a bank account in the Trust name.', icon: FileCheck },
    ],
    processOutro: 'Trust registration takes 15–20 days. All trustees must be present at the Sub-Registrar office — the key step.',
    documents: [
      { category: 'Trustee Documents', list: ['PAN Card of all trustees', 'Aadhaar Card', 'Passport size photographs', 'Address proof'] },
      { category: 'Trust Deed', list: ['Deed on appropriate stamp paper', 'Signed by all trustees and 2 witnesses', 'Clear charitable objectives'] },
      { category: 'Registered Office', list: ['Rental agreement or ownership proof', 'NOC from landlord', 'Latest utility bill'] },
    ],
    compliance: [
      { title: 'Annual Accounts', desc: 'Maintain audited income-expenditure statement and balance sheet. Mandatory for 12A eligibility.' },
      { title: 'Income Tax Return', desc: 'File ITR annually. Apply for 12A to avail income tax exemption on surplus income.' },
      { title: 'Activity Reports', desc: 'Document all charitable activities with photographs, beneficiary details, and expenditure records.' },
      { title: 'FCRA Annual Return', desc: 'If FCRA registered, file Form FC-4 annually within 9 months of financial year end.' },
    ],
    faqs: [
      { q: 'How many trustees are required?', a: 'Minimum 2 trustees. There is no upper limit, but odd numbers (3, 5, 7) are recommended for clear majority decisions.' },
      { q: 'Can the author of the trust also be a trustee?', a: 'Yes. The person creating the trust (author/settlor) can also be one of the trustees.' },
      { q: 'Is trust registration mandatory?', a: 'Registration is mandatory if the trust holds immovable property. For movable property only, a notarized deed is sufficient — but registration is strongly recommended for tax benefits and credibility.' },
      { q: 'Can a trust earn commercial income?', a: 'Yes, provided all income is applied towards charitable objectives. Commercial activities should not dominate — income tax exemption applies only to charitable income.' },
      { q: 'Can I add trustees later?', a: 'Yes. New trustees can be added by passing a resolution and executing a Supplementary Trust Deed, as provided in the original Trust Deed.' },
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
