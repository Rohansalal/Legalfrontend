'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Heart, Calculator, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function TwelveARegistrationPage() {
  const data = {
    title: '12A Registration',
    description: "Section 12A of the Income Tax Act grants complete income tax exemption to NGOs on their surplus income. The foundational tax benefit every NGO must obtain after formation.",
    heroBadges: ['Income Tax Act Section 12A', 'Lifetime Exemption', '30–45 Days'],
    introTitle: 'What is 12A Registration?',
    introContent: (
      <p>Section 12A (now 12AB after amendments in April 2021) of the Income Tax Act, 1961 provides tax exemption to charitable trusts, societies, and Section 8 companies on their income, provided such income is applied for charitable or religious purposes. Without 12A registration, an NGO's surplus income is taxed like any corporate entity at applicable rates. Once registered, all income applied towards the stated objectives is fully exempt from income tax. The registration is granted by the Commissioner of Income Tax (Exemptions) — CIT(E) of the jurisdiction.</p>
    ),
    detailsTitle: 'Why 12A is the Most Important NGO Registration',
    details: [
      { title: 'Complete Tax Exemption', desc: 'All surplus income applied to charitable purposes is 100% exempt from income tax.', icon: ShieldCheck },
      { title: 'Prerequisite for 80G', desc: 'NGO must have 12A before it can apply for 80G (donor tax deduction benefit).', icon: Heart },
      { title: 'Unlock Government Grants', desc: 'Most Central and State Government grants require 12A registration as a mandatory criterion.', icon: Globe },
      { title: 'CSR Funding Eligibility', desc: 'Corporate CSR teams typically require 12A certificate before making contributions to NGOs.', icon: Calculator },
    ],
    requirements: [
      'NGO must be legally registered (Trust/Society/Section 8 Company)', 'Activities must be genuinely charitable / religious',
      'No income should benefit the founders or trustees personally', 'PAN Card of the NGO entity',
      'Registration certificate of the NGO', 'Constitution (Trust Deed / MoA / Rules)',
      'Audited financial statements (for existing NGOs)', 'Activity report of charitable work done',
    ],
    processTitle: 'How to Apply for 12A Registration',
    processIntro: 'From April 2021, 12A registration is filed online on the Income Tax portal as Form 10A (new application) or Form 10AB (renewal).',
    processSteps: [
      { title: 'Obtain PAN for NGO', desc: 'Ensure the NGO entity has a PAN. Log in to incometax.gov.in using the NGO\'s PAN and password.', icon: UserCheck },
      { title: 'File Form 10A on IT Portal', desc: 'Select "Application for registration of charitable/religious trust or institution" and file Form 10A.', icon: FileSearch },
      { title: 'Upload Supporting Documents', desc: 'Attach registration certificate, Trust Deed/MoA, PAN card, audited accounts (if available), and activity report.', icon: Globe },
      { title: 'Hearing by CIT(E)', desc: 'CIT(E) may call the NGO for a hearing or ask for additional documents. Respond promptly within deadlines.', icon: CheckCircle2 },
      { title: 'Provisional / Full Registration', desc: 'New NGOs: Provisional 12A/12AB for 3 years. Operational NGOs: 5-year full registration.', icon: FileCheck },
    ],
    processOutro: 'Processing takes 30–45 days. New NGOs receive provisional 3-year 12A. Existing NGOs with strong activity record receive 5-year registration.',
    documents: [
      { category: 'NGO Registration Proof', list: ['Trust Deed / MoA and Bye-laws', 'Registration Certificate (state / MCA)', 'PAN Card of the NGO'] },
      { category: 'Financial Documents', list: ['Audited accounts (last 3 years if available)', 'Income-expenditure statement', 'Balance sheet'] },
      { category: 'Activity Evidence', list: ['Annual activity reports', 'Photographs of charitable activities', 'List of beneficiaries', 'Expenditure on charitable activities'] },
    ],
    compliance: [
      { title: '5-Year Renewal', desc: 'File Form 10AB for renewal at least 6 months before expiry of provisional/regular 12A registration.' },
      { title: 'Annual ITR Filing', desc: 'File ITR-7 annually even after getting 12A exemption. Non-filing can lead to cancellation of 12A.' },
      { title: 'Restricted Activities', desc: 'Income applied for personal benefit of trustees or for political activities forfeits the 12A exemption.' },
      { title: 'Form 10BD Filing', desc: 'If 80G is also obtained, file Form 10BD (statement of donations) and issue Form 10BE certificates to donors annually.' },
    ],
    faqs: [
      { q: 'Can a newly formed NGO get 12A registration?', a: 'Yes. New NGOs can apply for provisional 12A registration immediately after formation. The provisional status is valid for 3 years, after which full registration is granted based on actual charitable activities.' },
      { q: 'Is 12A registration permanent?', a: 'Since April 2021, 12A registrations are no longer permanent. Regular 12A is valid for 5 years and must be renewed by filing Form 10AB.' },
      { q: 'What if an NGO earns income from investments?', a: 'Investment income (interest, dividends, rent) of an NGO is also exempt under 12A, provided the amount is eventually applied towards charitable objectives.' },
      { q: 'Can 12A be cancelled?', a: 'Yes. CIT(E) can cancel 12A if the NGO misuses funds, engages in non-charitable activities, fails to file ITR, or violates any conditions of registration.' },
      { q: 'Does 12A cover all types of NGOs?', a: 'Yes. Charitable Trusts, Societies, Section 8 Companies, and other charitable institutions all qualify for 12A registration, provided their objects are genuinely charitable.' },
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
