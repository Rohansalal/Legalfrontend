'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function CAAuditReportPage() {
  const data = {
    title: 'CA Audit & Report Services',
    description:
      'Professional CA audit and certification services — statutory audit under Companies Act, tax audit under Section 44AB, GST audit (GSTR-9C), internal audit, CARO 2020 report, and ICAI standards compliance.',
    heroBadges: ['ICAI-Certified CA Firms', 'Statutory & Tax Audit', 'CARO 2020 Reports'],
    introTitle: 'What is a CA Audit & Report?',
    introContent: (
      <p>
        A Chartered Accountant (CA) registered with the Institute of Chartered Accountants of India (ICAI) is empowered to conduct various types of audits and certifications under Indian law. The most critical audit is the Statutory Audit under Section 143 of the Companies Act, 2013 — mandatory for all companies regardless of turnover. This involves examining financial statements to ensure they present a true and fair view. Tax Audit under Section 44AB of the Income Tax Act is mandatory for businesses above prescribed turnover limits. The CA must issue Form 3CA/3CB and Form 3CD with 44 specific disclosure clauses. GST Audit (GSTR-9C reconciliation statement) is required for taxpayers with aggregate turnover above ₹5 crore. The CARO (Companies Audit Report Order) 2020 requires auditors to additionally report on loans, inventory, fraud, related party transactions, and internal financial controls for applicable companies.
      </p>
    ),
    detailsTitle: 'Types of CA Audit & Reports',
    details: [
      {
        title: 'Statutory Audit — Companies Act',
        desc: 'Independent examination of financial statements under Section 143 ensuring true and fair view. Includes CARO 2020 report for applicable companies.',
        icon: ShieldCheck,
      },
      {
        title: 'Tax Audit — Section 44AB',
        desc: 'Audit of books of accounts for businesses above ₹1 crore turnover. Issue Form 3CA/3CB with Form 3CD containing 44 mandatory disclosure clauses.',
        icon: FileText,
      },
      {
        title: 'GST Audit — GSTR-9C',
        desc: 'Reconciliation of annual GST returns with audited financial statements. Self-certified GSTR-9C mandatory for aggregate turnover above ₹5 crore.',
        icon: TrendingUp,
      },
      {
        title: 'Internal Audit & Special Certifications',
        desc: 'Internal audit of operational controls, process efficiency, and compliance. Special CA certifications for FEMA, fund utilization, net worth, and bank credit facilities.',
        icon: Award,
      },
    ],
    requirements: [
      'Audited books of accounts (ledgers, journal, cash book)',
      'Bank statements reconciled for the year',
      'All sales and purchase invoices',
      'TDS returns and Form 26AS for verification',
      'GST returns (GSTR-1 and GSTR-3B) for the year',
      'Fixed asset register and depreciation schedule',
      'Loan agreements and bank sanction letters',
      'Previous year audit report and financial statements',
    ],
    processTitle: 'How We Conduct CA Audit & Reports',
    processIntro:
      'Our ICAI-empanelled CA team follows a structured audit methodology ensuring complete compliance with Indian Auditing Standards (SAs).',
    processSteps: [
      {
        title: 'Planning & Risk Assessment',
        desc: 'Understand the business, assess material risks, review internal controls, and prepare audit plan. Identify key audit areas requiring focus.',
        icon: FileSearch,
      },
      {
        title: 'Vouching & Verification',
        desc: 'Verify transaction vouchers, match entries with invoices, reconcile bank accounts, confirm balances with third parties, and test internal controls.',
        icon: UserCheck,
      },
      {
        title: 'Financial Statement Review',
        desc: 'Review and finalize Balance Sheet, P&L, and Cash Flow. Verify compliance with Ind AS/AS. Prepare notes to accounts and Directors Report disclosures.',
        icon: FileCheck,
      },
      {
        title: 'Issue Audit Report & CARO',
        desc: 'Issue Statutory Audit Report, CARO 2020 Report, Tax Audit Report (Form 3CA/3CD), and GSTR-9C. Sign and upload on respective portals (MCA, IT, GST).',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'Our CA team also provides advisory on audit findings, internal control gaps, and tax optimization opportunities identified during the audit.',
    documents: [
      {
        category: 'Financial Records',
        list: [
          'Trial Balance and Ledgers',
          'Bank reconciliation statements',
          'Fixed asset register',
        ],
      },
      {
        category: 'Transaction Evidence',
        list: [
          'Sales invoices and purchase bills',
          'Expense vouchers and receipt books',
          'Loan and investment documents',
        ],
      },
      {
        category: 'Compliance Records',
        list: [
          'TDS returns and challans',
            'GST returns filed for the year',
          'Previous audit report and management letter',
        ],
      },
    ],
    compliance: [
      {
        title: 'ICAI Standards on Auditing (SAs)',
        desc: 'All statutory audits must comply with ICAI Standards on Auditing (SA 200–SA 720). Non-compliance can result in disciplinary action against the CA by ICAI.',
      },
      {
        title: 'Auditor Independence',
        desc: 'A statutory auditor cannot be an employee, debtor, creditor, or relative of a director of the company being audited. Independence must be maintained throughout the audit.',
      },
      {
        title: 'CARO 2020 Reporting',
        desc: 'CARO 2020 requires auditors to specifically report on 21 matters including loans, fraud, inventory, internal financial controls, and related party transactions.',
      },
      {
        title: 'Signing Deadlines',
        desc: 'Tax audit report must be signed before 31 October. Statutory audit report must be ready before the AGM. GSTR-9C must be filed by 31 December.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between statutory audit and internal audit?',
        a: 'Statutory audit is an external, mandatory audit by an independent CA to verify financial statements for regulatory compliance. Internal audit is an optional (mandatory for some large companies) review of operational controls and risk management.',
      },
      {
        q: 'Who can conduct a statutory audit under the Companies Act?',
        a: 'Only a Chartered Accountant (CA) or a firm of CAs holding a valid Certificate of Practice issued by ICAI can be appointed as a statutory auditor.',
      },
      {
        q: 'What is Form 3CD and why is it important?',
        a: 'Form 3CD is the statement of particulars accompanying the tax audit report under Section 44AB. It contains 44 specific disclosures about the business — TDS, loans, payments to related parties, capital gains, and more.',
      },
      {
        q: 'Is CARO 2020 applicable to all companies?',
        a: 'CARO 2020 does not apply to: OPCs, small companies, banking and insurance companies, Section 8 companies, and private limited companies that are not subsidiaries of public companies and meet the size criteria.',
      },
      {
        q: 'What happens if a company does not get a statutory audit done?',
        a: 'Failure to appoint a statutory auditor or complete the audit is an offence under Section 139/147 of the Companies Act. It also delays filing of financial statements (AOC-4) with ROC, attracting penalties.',
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
