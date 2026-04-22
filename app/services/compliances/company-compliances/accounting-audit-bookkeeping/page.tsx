'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function AccountingAuditBookkeepingPage() {
  const data = {
    title: 'Accounting, Audit & Book Keeping Services',
    description:
      'Professional accounting, statutory audit, GST audit, income tax audit under Section 44AB, and bookkeeping services for businesses across India. Accurate records, timely filings, zero penalties.',
    heroBadges: ['CA-Led Accounting Teams', 'Statutory & Tax Audit', 'Cloud Bookkeeping'],
    introTitle: 'What is Accounting, Audit & Bookkeeping?',
    introContent: (
      <p>
        Maintaining accurate books of accounts is a legal requirement under the Companies Act, 2013 and the Income Tax Act, 1961 for all registered businesses. Statutory Audit under Section 143 of the Companies Act is mandatory for all companies. Income Tax Audit under Section 44AB is required for businesses with turnover exceeding ₹1 crore (₹10 crore for digital transactions above 95%) or professionals with gross receipts above ₹50 lakh. GST Audit under Section 35(5) of the CGST Act (reconciled via GSTR-9C) is applicable for turnover above ₹5 crore. Bookkeeping services ensure real-time financial visibility, GST-compliant invoicing, TDS compliance, and timely management reports. Outsourcing these functions to professionals saves costs and ensures regulatory compliance across all tax and company law dimensions.
      </p>
    ),
    detailsTitle: 'Our Accounting & Audit Services',
    details: [
      {
        title: 'Statutory Audit (Companies Act)',
        desc: 'Independent audit of financial statements under Section 143 by a qualified CA. Covers accuracy of records, internal controls, and CARO reporting.',
        icon: ShieldCheck,
      },
      {
        title: 'Income Tax Audit — Section 44AB',
        desc: 'Tax audit of books of accounts for businesses above turnover threshold. Issuing Form 3CA/3CB along with Form 3CD with all mandatory disclosures.',
        icon: FileText,
      },
      {
        title: 'GST Audit & GSTR-9C',
        desc: 'Reconciliation of annual GST returns with audited financial statements. Filing of GSTR-9C (self-certified or CA-certified) for turnover above ₹5 crore.',
        icon: TrendingUp,
      },
      {
        title: 'Bookkeeping & Cloud Accounting',
        desc: 'Day-to-day bookkeeping using Tally, Zoho Books, or QuickBooks. Preparation of monthly P&L, balance sheet, cash flow, and management reports.',
        icon: Briefcase,
      },
    ],
    requirements: [
      'All sales and purchase invoices for the year',
      'Bank statements of all business accounts',
      'Cash vouchers and expense receipts',
      'TDS certificates (Form 16A) received from clients',
      'Loan statements and fixed asset register',
      'Previous year financial statements and audit report',
      'GST returns filed for the year (GSTR-1, GSTR-3B)',
      'Payroll records and salary slips',
    ],
    processTitle: 'How We Handle Accounting, Audit & Bookkeeping',
    processIntro:
      'Our structured approach ensures clean books, compliant audits, and actionable financial insights for your business.',
    processSteps: [
      {
        title: 'Data Collection & Bookkeeping',
        desc: 'Collect all invoices, bank statements, and vouchers. Post journal entries, reconcile bank accounts, and prepare trial balance month by month.',
        icon: FileSearch,
      },
      {
        title: 'Financial Statement Preparation',
        desc: 'Prepare accurate Balance Sheet, Profit & Loss Account, and Cash Flow Statement as per Indian Accounting Standards (Ind AS or AS).',
        icon: UserCheck,
      },
      {
        title: 'Conduct Statutory / Tax Audit',
        desc: 'Our CA team conducts the audit, reviews internal controls, verifies ledgers, and issues audit reports (3CA/3CB/3CD for tax audit, CARO for companies).',
        icon: FileCheck,
      },
      {
        title: 'Filing & Compliance',
        desc: 'File audited financials with MCA (AOC-4), GSTR-9C with GST portal, and ITR with Income Tax Department within applicable deadlines.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We provide monthly MIS reports so you always have accurate financial data to make informed business decisions throughout the year.',
    documents: [
      {
        category: 'Transaction Records',
        list: [
          'Sales invoices and purchase bills',
          'Bank statements (all accounts)',
          'Petty cash records and expense vouchers',
        ],
      },
      {
        category: 'Tax & Compliance Records',
        list: [
          'GST returns (GSTR-1 & GSTR-3B) for the year',
          'TDS challans and Form 26AS',
          'Previous year audit report and ITR',
        ],
      },
      {
        category: 'Asset & Liability Records',
        list: [
          'Fixed asset register with depreciation',
          'Loan account statements',
          'Outstanding debtors and creditors list',
        ],
      },
    ],
    compliance: [
      {
        title: 'Books of Accounts Maintenance',
        desc: 'Under Section 128 of the Companies Act, companies must maintain books at the registered office. Books must be preserved for 8 years from date of entry.',
      },
      {
        title: 'Internal Financial Controls',
        desc: 'Directors are responsible for ensuring adequate internal financial controls. The statutory auditor must report on the adequacy of internal controls under CARO.',
      },
      {
        title: 'TDS Compliance',
        desc: 'Deduct TDS at applicable rates on salary, professional fees, rent, and contractor payments. File quarterly TDS returns (24Q, 26Q, 27Q).',
      },
      {
        title: 'Advance Tax Compliance',
        desc: 'Estimate and pay advance tax in four installments (June, September, December, March) to avoid interest under Sections 234B and 234C.',
      },
    ],
    faqs: [
      {
        q: 'Who is required to get a tax audit under Section 44AB?',
        a: 'Businesses with turnover above ₹1 crore (or ₹10 crore if cash transactions are less than 5%) and professionals with gross receipts above ₹50 lakh must get tax audit done under Section 44AB.',
      },
      {
        q: 'What is CARO and which companies need it?',
        a: 'CARO (Companies Audit Report Order) 2020 requires auditors to report on specific matters like loans, inventory, fraud, and internal financial controls. It applies to most companies except small, OPC, banking, insurance, and Section 8 companies.',
      },
      {
        q: 'What is the difference between statutory audit and tax audit?',
        a: 'Statutory audit under the Companies Act checks the true and fair view of financials. Tax audit under Section 44AB verifies accuracy of tax-relevant information in the books. Both may be conducted by the same CA.',
      },
      {
        q: 'Is bookkeeping different from accounting?',
        a: 'Bookkeeping involves recording day-to-day transactions (journals, ledgers). Accounting involves analyzing, summarizing, and reporting those records in financial statements. Both are essential for compliance and decision-making.',
      },
      {
        q: 'Can I outsource bookkeeping for my company?',
        a: 'Yes. Outsourcing bookkeeping to professionals is a cost-effective and compliant approach. You retain access to your books via cloud software, and the CA team handles all data entry, reconciliation, and report preparation.',
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
