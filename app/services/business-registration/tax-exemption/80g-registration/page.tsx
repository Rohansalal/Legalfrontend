'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Heart, ShieldCheck, Calculator, TrendingUp, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function EightyGRegistrationPage() {
  const data = {
    title: '80G Registration',
    description: 'Section 80G registration allows donors to claim 50% or 100% income tax deduction on donations to your NGO — dramatically increasing your fundraising capability.',
    heroBadges: ['Income Tax Act Section 80G', 'Donor Tax Benefit', '30–45 Days'],
    introTitle: 'What is 80G Registration?',
    introContent: (
      <p>Section 80G of the Income Tax Act, 1961 provides a tax deduction benefit to donors who make donations to registered charitable organizations. Once your NGO obtains 80G registration, donors can claim either 50% or 100% deduction (subject to 10% of adjusted gross total income limit) on their donations from their taxable income. This is a powerful fundraising tool — a ₹1 Lakh donation effectively costs the donor only ₹70,000 or ₹50,000 after tax benefit. Corporate donors particularly value 80G certification for CSR compliance. 80G registration requires prior 12A registration.</p>
    ),
    detailsTitle: 'Why 80G Registration Transforms NGO Fundraising',
    details: [
      { title: '50% Donor Deduction', desc: 'Donors claim 50% of their donation amount as tax deduction — makes your NGO more attractive for contributions.', icon: Heart },
      { title: 'CSR Funding Magnet', desc: 'Corporate CSR teams actively seek 80G-certified NGOs for their mandatory 2% CSR spending.', icon: Calculator },
      { title: 'Attract HNI Donors', desc: 'High-net-worth individuals prefer 80G NGOs to maximize their philanthropic impact with tax efficiency.', icon: TrendingUp },
      { title: 'Build Trust', desc: '80G certification signals government-verified legitimacy — increases donor confidence significantly.', icon: ShieldCheck },
    ],
    requirements: [
      'NGO must have 12A registration first', 'NGO must have been operational for at least 1 year (preferred)',
      'No part of income benefits founders/trustees personally', 'PAN Card of NGO entity',
      'Audited financial statements for past years', 'Activity report demonstrating charitable work',
      'Registration certificate of the NGO', 'List of trustees/directors with identity proof',
    ],
    processTitle: 'How to Apply for 80G Registration',
    processIntro: '80G registration is applied online on the Income Tax portal (incometax.gov.in) as Form 10G (now integrated with Form 10A for combined 12A + 80G application).',
    processSteps: [
      { title: 'Ensure 12A Registration', desc: '80G cannot be obtained without first having 12A registration. Apply for 12A simultaneously if not yet registered.', icon: UserCheck },
      { title: 'File Form 10A / 10AB', desc: 'For combined 12A and 80G: File Form 10A (new) or Form 10AB (renewal) on incometax.gov.in. Select both 12A and 80G in the same application.', icon: FileSearch },
      { title: 'Upload Financial Statements', desc: 'Attach audited accounts, income-expenditure statements, activity reports, and donation records.', icon: CheckCircle2 },
      { title: 'CIT(E) Hearing', desc: 'Commissioner of Income Tax (Exemptions) may call for a personal hearing. Respond promptly with complete documentation.', icon: Globe },
      { title: '80G Certificate Issued', desc: 'Upon approval, 80G certificate is issued with validity period. Issue Form 10BE to donors for claiming deduction.', icon: FileCheck },
    ],
    processOutro: '80G processing takes 30–45 days. Organizations applying together for 12A + 80G save time.',
    documents: [
      { category: 'NGO Documents', list: ['12A registration certificate', 'PAN Card', 'Registration certificate (Trust/Society/Section 8)', 'Trust Deed / MoA'] },
      { category: 'Financial Evidence', list: ['Audited accounts (last 1–3 years)', 'Income-expenditure statements', 'List of donors with amounts'] },
      { category: 'Activity Proof', list: ['Detailed activity report', 'Photographs of charitable work', 'Beneficiary details', 'Board resolutions'] },
    ],
    compliance: [
      { title: '5-Year Renewal', desc: 'File Form 10AB for 80G renewal at least 6 months before expiry.' },
      { title: 'Form 10BD Filing', desc: 'File statement of donations (Form 10BD) with CIT(E) annually by May 31st — list all donors with amounts.' },
      { title: 'Issue Form 10BE to Donors', desc: 'Issue donation certificates (Form 10BE) to every donor within 15 days of receiving donation — required for donor\'s tax claim.' },
      { title: 'Maintain Donor Records', desc: 'Keep full records of all donations with donor PAN, address, and receipt copies for at least 7 years.' },
    ],
    faqs: [
      { q: 'Can donors claim 100% deduction under 80G?', a: 'Yes, for donations to certain specified funds (PM Relief Fund, PMNRF, Chief Minister\'s Relief Fund). For most NGOs with 80G, donors get 50% deduction subject to 10% of adjusted gross total income.' },
      { q: 'Is 80G required before I can receive CSR funds?', a: 'While not always legally mandatory, almost all corporate CSR committees insist on both 12A and 80G certification before releasing CSR funds to NGOs.' },
      { q: 'Can a foreign company claim 80G deduction?', a: 'No. 80G deduction is available only to Indian taxpayers. Foreign donors cannot claim 80G. For foreign donations, the NGO needs FCRA registration instead.' },
      { q: 'Does 80G cover online donations?', a: 'Yes. Donations made via NEFT, RTGS, UPI, or cheque all qualify for 80G deduction, as long as they are properly documented and Form 10BE is issued.' },
      { q: 'What is the maximum donation that can be claimed under 80G?', a: 'Donations to most NGOs qualify for 50% deduction but limited to 10% of adjusted gross total income. There is no monetary cap on the donation amount itself.' },
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
