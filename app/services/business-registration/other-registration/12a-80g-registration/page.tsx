'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Heart, Calculator, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function TwelveA80GRegistrationPage() {
  const data = {
    title: '12A & 80G Registration',
    description: 'Get dual income tax benefits for your NGO — 12A grants income tax exemption to the organization, while 80G allows donors to claim tax deductions on their contributions.',
    heroBadges: ['Income Tax Exemption', 'Donor Tax Benefit', '30–45 Days'],
    introTitle: 'What are 12A and 80G Registrations?',
    introContent: (
      <p>Section 12A of the Income Tax Act, 1961 grants income tax exemption to NGOs (Trusts, Societies, Section 8 Companies) on their surplus income, provided all income is applied towards charitable objectives. Section 80G allows donors to claim 50% or 100% deduction on donations made to the registered organization. As of April 2021, new rules require all NGOs to apply for fresh registration under 12AB and 80G, and existing registrations must be renewed every 5 years. Both registrations are granted by the jurisdictional Commissioner of Income Tax (Exemptions) — CIT(E).</p>
    ),
    detailsTitle: 'Why 12A & 80G are Critical for NGOs',
    details: [
      { title: '12A: Tax-Free Operations', desc: 'Once 12A is granted, all income applied to charitable objectives is fully exempt from income tax.', icon: ShieldCheck },
      { title: '80G: Attract More Donors', desc: 'Donors can claim 50% deduction — doubles the effective impact of every rupee donated.', icon: Heart },
      { title: 'CSR Funding Eligibility', desc: 'Most corporates require 12A and 80G certifications before making CSR contributions.', icon: Calculator },
      { title: 'Government Grants', desc: 'Many central and state government grants require 12A registration as a prerequisite.', icon: Globe },
    ],
    requirements: [
      'NGO must be registered (Trust / Society / Section 8 Company)', 'Minimum 1–3 years of operation (for 80G)',
      'Audited financial statements for past years', 'Activities must be genuinely charitable',
      'No income benefits the founder/trustee personally', 'PAN Card of the NGO',
      'Constitution / Trust Deed / MOA', 'Registration certificate of the NGO',
    ],
    processTitle: 'How to Apply for 12A and 80G Registration',
    processIntro: 'Applications are submitted online on the Income Tax portal (incometax.gov.in) and processed by the CIT(E) of the jurisdiction.',
    processSteps: [
      { title: 'Prepare Application on IT Portal', desc: 'Login to incometax.gov.in with the NGO\'s PAN credentials. File Form 10A (for 12A) and Form 10G (for 80G).', icon: UserCheck },
      { title: 'Upload Financial Statements', desc: 'Attach audited accounts, income-expenditure statements, balance sheet, and activity reports.', icon: FileSearch },
      { title: 'Upload Constitutional Documents', desc: 'Attach Trust Deed / MOA, Registration Certificate, list of trustees/directors, and PAN card.', icon: Globe },
      { title: 'CIT(E) Review', desc: 'The Commissioner of Income Tax (Exemptions) reviews the application. May call for hearing or additional documents.', icon: CheckCircle2 },
      { title: 'Provisional / Full Registration', desc: 'For new NGOs: provisional 3-year registration granted. For operational NGOs with track record: 5-year registration granted.', icon: FileCheck },
    ],
    processOutro: 'Processing takes 30–45 days. New NGOs receive provisional 12A/80G for 3 years, after which they must apply for full registration with activity reports.',
    documents: [
      { category: 'NGO Registration', list: ['Trust Deed / MOA / Certificate of Incorporation', 'Registration Certificate', 'PAN Card of the NGO'] },
      { category: 'Financial Documents', list: ['Audited accounts (last 3 years if available)', 'Income-Expenditure statements', 'Balance Sheet'] },
      { category: 'Activity Reports', list: ['Annual activity report', 'Details of trustees/directors with identity proof', 'List of donors (if any)'] },
    ],
    compliance: [
      { title: '5-Year Renewal', desc: 'Both 12A and 80G registrations must be renewed every 5 years. File Form 10AB before expiry.' },
      { title: 'Annual Return Filing', desc: 'File Form 10BD (donor details statement) and Form 10BE (donation certificates to donors) annually.' },
      { title: 'Restricted Activities', desc: 'NGO cannot engage in political activities, distribute profits, or benefit founders personally.' },
      { title: 'Statement of Donations', desc: 'Issue Form 10BE certificates to all donors claiming 80G deduction within the prescribed timeline.' },
    ],
    faqs: [
      { q: 'Can a new NGO apply for 12A and 80G immediately after registration?', a: 'Yes. New NGOs can apply for provisional 12A and 80G registration immediately after formation. The provisional status is valid for 3 years.' },
      { q: 'How much deduction can a donor claim under 80G?', a: 'Donors can claim either 50% or 100% deduction depending on the category of the NGO. The deduction is further limited to 10% of adjusted gross total income.' },
      { q: 'Is 12A mandatory before applying for 80G?', a: 'Yes. 12A registration is a prerequisite for 80G. An NGO without 12A cannot get 80G status.' },
      { q: 'Do 12A and 80G need to be renewed?', a: 'Yes. Since April 2021, both 12A (12AB) and 80G registrations are valid for 5 years and must be renewed by filing Form 10AB.' },
      { q: 'Can a foreign donor claim 80G deduction?', a: 'No. Section 80G deduction is available only to donors who are taxable in India (Indian residents). Foreign donors need the NGO to have FCRA registration.' },
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
