'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function AnnualSection8Page() {
  const data = {
    title: 'Annual Compliances for Section 8 Company',
    description:
      'Complete annual compliance management for Section 8 (NGO) Companies — MGT-7, AOC-4, 12A/80G renewal, FCRA reporting, CSR disclosures, and Income Tax exemption maintenance handled by experts.',
    heroBadges: ['NGO Compliance Experts', '12A & 80G Renewal', 'FCRA Filing Specialists'],
    introTitle: 'What are Annual Compliances for a Section 8 Company?',
    introContent: (
      <p>
        A Section 8 Company is a non-profit organization incorporated under Section 8 of the Companies Act, 2013 for promoting commerce, art, science, sports, education, research, social welfare, religion, charity, or environmental protection. While operating as a company, it carries compliance obligations under both the Companies Act and the Income Tax Act. It must file Form MGT-7 (Annual Return) and Form AOC-4 (Financial Statements) with the ROC every year. Income tax exemptions under Sections 12A and 80G must be renewed periodically. If the company receives foreign contributions, FCRA annual returns must be filed with the Ministry of Home Affairs. Companies receiving CSR funds must maintain proper utilization records and file CSR-2. License under Section 8 can be revoked for non-compliance, making timely annual compliance critical.
      </p>
    ),
    detailsTitle: 'Key Annual Compliance Obligations',
    details: [
      {
        title: 'ROC Annual Filings — MGT-7 & AOC-4',
        desc: 'File Annual Return (MGT-7) and Audited Financial Statements (AOC-4) with the ROC every year within prescribed deadlines after AGM.',
        icon: FileText,
      },
      {
        title: '12A & 80G Renewal',
        desc: 'Income Tax registration under 12A (exemption) and 80G (donor deduction) must be renewed every 5 years via Form 10A/10AB on the Income Tax portal.',
        icon: Award,
      },
      {
        title: 'FCRA Annual Return',
        desc: 'Section 8 companies receiving foreign contributions must file FC-4 (FCRA Annual Return) on the FCRA portal within 9 months of financial year end (by 31 December).',
        icon: Globe,
      },
      {
        title: 'CSR Utilization Reporting',
        desc: 'Companies that implement CSR activities through Section 8 must file Form CSR-2 disclosing utilization of CSR funds received from corporates.',
        icon: ShieldCheck,
      },
    ],
    requirements: [
      'Certificate of Incorporation under Section 8',
      'License from Registrar of Companies (Section 8 license)',
      'Audited Financial Statements and Auditor Report',
      'Income Tax Registration Certificate (12A and 80G)',
      'FCRA Registration Certificate (if foreign funding received)',
      'Details of Directors and board composition',
      'Receipts and payment accounts with utilization certificates',
      'DSC of authorised Director or Company Secretary',
    ],
    processTitle: 'How to Complete Annual Compliances for Section 8 Company',
    processIntro:
      'Section 8 companies face dual compliance — under Companies Act and Income Tax/FCRA. Our experts navigate both domains seamlessly.',
    processSteps: [
      {
        title: 'Accounts Preparation & Statutory Audit',
        desc: 'Prepare income-expenditure account and balance sheet. Conduct statutory audit by an empanelled CA. Prepare utilization certificates for grants received.',
        icon: FileSearch,
      },
      {
        title: 'Hold AGM & File AOC-4 / MGT-7',
        desc: 'Conduct AGM within 6 months of year end. File audited financials in AOC-4 within 30 days and Annual Return (MGT-7) within 60 days of AGM.',
        icon: UserCheck,
      },
      {
        title: 'File Income Tax Return & 12A/80G Renewal',
        desc: 'File ITR-7 for Section 8 companies claiming exemption. Ensure 12A and 80G registrations are current and apply for renewal via Form 10AB before expiry.',
        icon: FileCheck,
      },
      {
        title: 'File FCRA Annual Return (if applicable)',
        desc: 'If FCRA registered, file FC-4 on the FCRA portal by 31 December, disclosing foreign contribution received, purpose, and utilization.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We track all renewal deadlines for 12A, 80G, and FCRA registrations to ensure your tax exemption and foreign funding eligibility remain intact.',
    documents: [
      {
        category: 'Company Documents',
        list: [
          'Certificate of Incorporation and Section 8 License',
          'MOA and AOA',
          'PAN of the Section 8 Company',
        ],
      },
      {
        category: 'Tax Exemption Documents',
        list: [
          '12A Registration Certificate',
          '80G Approval Certificate',
          'ITR-7 acknowledgment of previous year',
        ],
      },
      {
        category: 'FCRA & CSR Documents',
        list: [
          'FCRA Registration Certificate (if applicable)',
          'Foreign contribution receipt details (bank account)',
          'CSR utilization certificate from implementing NGO',
        ],
      },
    ],
    compliance: [
      {
        title: 'Income Tax Return — ITR-7',
        desc: 'Section 8 companies must file ITR-7 under Section 139(4A) or 139(4C). Failure to file can result in loss of 12A exemption.',
      },
      {
        title: 'Section 8 License Renewal Conditions',
        desc: 'The license under Section 8 can be revoked if the company deviates from its charitable objects or distributes profits to members.',
      },
      {
        title: 'CSR-2 Form Filing',
        desc: 'Section 8 companies that have implemented CSR projects on behalf of corporates must file CSR-2 with MCA disclosing project-wise utilization.',
      },
      {
        title: 'FCRA Bank Account Compliance',
        desc: 'Foreign contributions must be received only in the designated FCRA account at SBI New Delhi Main Branch. Sub-accounts can be opened for utilization.',
      },
    ],
    faqs: [
      {
        q: 'Does a Section 8 Company need to hold an AGM?',
        a: 'Yes. Section 8 companies must hold an AGM within 6 months of financial year end, just like a regular company. The AGM provisions of the Companies Act, 2013 apply in full.',
      },
      {
        q: 'How often must 12A and 80G be renewed?',
        a: 'Post the 2020 amendment, existing 12A and 80G registrations are valid for 5 years and must be renewed by filing Form 10AB at least 6 months before expiry.',
      },
      {
        q: 'Can a Section 8 Company distribute profits?',
        a: 'No. Section 8 Companies cannot distribute profits, dividends, or bonus to its members. All income must be applied toward the company\'s charitable objectives.',
      },
      {
        q: 'What is the penalty for FCRA non-filing?',
        a: 'Failure to file the FCRA annual return can result in cancellation of FCRA registration, making the organization ineligible to receive foreign contributions.',
      },
      {
        q: 'Is statutory audit mandatory for Section 8 Companies?',
        a: 'Yes. All Section 8 Companies must get their accounts audited by a Chartered Accountant every year, regardless of turnover. Audit report is mandatory for both ROC filing and Income Tax exemption.',
      },
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
