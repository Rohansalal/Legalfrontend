'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function AnnualPvtLtdPage() {
  const data = {
    title: 'Annual Compliances for Pvt. Ltd. Company',
    description:
      'Stay ROC-compliant every year. We handle MGT-7, AOC-4, board meetings, statutory registers, and auditor appointment for your Private Limited Company — on time, every time.',
    heroBadges: ['MCA Certified Experts', 'Zero Penalty Guarantee', 'End-to-End Filing'],
    introTitle: 'What are Annual Compliances for a Private Limited Company?',
    introContent: (
      <p>
        Every Private Limited Company registered under the Companies Act, 2013 must fulfil a set of mandatory annual compliances irrespective of turnover or activity. These include filing the Annual Return (MGT-7) and Financial Statements (AOC-4) with the Registrar of Companies (ROC), conducting at least four Board Meetings per year, maintaining statutory registers, and getting accounts audited by a qualified Chartered Accountant. Non-compliance attracts heavy penalties under Section 137 and Section 92 of the Companies Act — ₹100 per day per form with no upper cap. For small companies and OPCs, the condensed MGT-7A form applies instead. Timely compliance also protects directors from disqualification under Section 164(2) of the Act.
      </p>
    ),
    detailsTitle: 'Key Annual Compliance Obligations',
    details: [
      {
        title: 'ROC Annual Return — MGT-7',
        desc: 'File the Annual Return in Form MGT-7 within 60 days of the AGM, disclosing shareholding pattern, directors, and corporate governance data.',
        icon: FileText,
      },
      {
        title: 'Financial Statements — AOC-4',
        desc: 'File audited Balance Sheet and Profit & Loss Account in Form AOC-4 within 30 days of the AGM. Includes cash flow statement for applicable companies.',
        icon: TrendingUp,
      },
      {
        title: 'Statutory Audit & Auditor Appointment',
        desc: 'Appoint a Statutory Auditor within 30 days of incorporation. File ADT-1 to intimate the ROC. Audit must be completed before the AGM.',
        icon: ShieldCheck,
      },
      {
        title: 'Board Meetings & AGM',
        desc: 'Hold minimum 4 Board Meetings annually with gap not exceeding 120 days. Conduct AGM within 6 months of financial year end (by 30 September).',
        icon: Users,
      },
    ],
    requirements: [
      'Certificate of Incorporation and PAN of the company',
      'Audited Financial Statements signed by the auditor',
      'Board Resolution for AGM and filing authorization',
      'Digital Signature Certificate (DSC) of authorised director',
      'Details of shareholders and share capital structure',
      'Statutory registers: Register of Members, Directors, Charges',
      'Minutes of all Board Meetings and AGM held during the year',
      'Previous year filed returns (MGT-7 and AOC-4)',
    ],
    processTitle: 'How to Complete Annual Compliances for Pvt. Ltd.',
    processIntro:
      'Our experts follow a structured annual compliance calendar to ensure zero defaults and timely ROC filings for your company.',
    processSteps: [
      {
        title: 'Accounts Closure & Audit',
        desc: 'Close books of accounts for the financial year ending 31 March. Appoint/confirm the Statutory Auditor and get accounts audited.',
        icon: FileSearch,
      },
      {
        title: 'Conduct AGM',
        desc: 'Hold the Annual General Meeting (AGM) by 30 September. Adopt financial statements, appoint auditor, and declare dividend if any.',
        icon: UserCheck,
      },
      {
        title: 'File AOC-4',
        desc: 'Upload audited financial statements in Form AOC-4 on the MCA portal within 30 days of AGM. Attach balance sheet, P&L, and auditor report.',
        icon: FileCheck,
      },
      {
        title: 'File MGT-7 (Annual Return)',
        desc: 'File the Annual Return in Form MGT-7 within 60 days of the AGM with details of shareholders, directors, and company governance.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'Our compliance team monitors all deadlines proactively and sends reminders well in advance to ensure your company is never marked as a defaulter.',
    documents: [
      {
        category: 'Company Documents',
        list: [
          'Certificate of Incorporation (COI)',
          'PAN and TAN of the company',
          'MOA and AOA',
        ],
      },
      {
        category: 'Financial Documents',
        list: [
          'Audited Balance Sheet and P&L Account',
          'Auditor Report and notes to accounts',
          'Bank statements and trial balance',
        ],
      },
      {
        category: 'Director & Shareholder Documents',
        list: [
          'List of Directors with DIN',
          'Shareholding pattern as on 31 March',
          'DSC of authorised signatory',
        ],
      },
    ],
    compliance: [
      {
        title: 'DIR-3 KYC for Directors',
        desc: 'Every director holding a DIN must file DIR-3 KYC annually by 30 September to keep their DIN active.',
      },
      {
        title: 'Income Tax Return — ITR-6',
        desc: 'Companies must file ITR-6 by 31 October (tax audit cases) or 31 July (others). Linked to ROC financials.',
      },
      {
        title: 'GST Returns',
        desc: 'File monthly GSTR-1 and GSTR-3B if GST registered. Annual GSTR-9 must be filed by 31 December.',
      },
      {
        title: 'Maintenance of Statutory Registers',
        desc: 'Maintain Register of Members (MGT-1), Register of Directors (MBP-1), and Register of Charges throughout the year.',
      },
    ],
    faqs: [
      {
        q: 'What is the due date for filing MGT-7 and AOC-4?',
        a: 'AOC-4 must be filed within 30 days of the AGM and MGT-7 within 60 days of the AGM. Since the AGM is typically held by 30 September, deadlines usually fall in October and November respectively.',
      },
      {
        q: 'What is the penalty for late filing?',
        a: 'Late filing attracts an additional fee of ₹100 per day per form under Section 403 of the Companies Act, 2013, with no maximum cap. This can accumulate into very large penalties over time.',
      },
      {
        q: 'Is AGM mandatory for all Pvt. Ltd. companies?',
        a: 'Yes. Every company must hold an AGM within 6 months of the end of the financial year. The first AGM must be held within 9 months of the end of the first financial year.',
      },
      {
        q: 'Can a director be disqualified for non-filing?',
        a: 'Yes. Under Section 164(2), if a company fails to file annual returns or financial statements for 3 consecutive years, all directors become disqualified and cannot be appointed in any other company for 5 years.',
      },
      {
        q: 'What is MGT-7A and who must file it?',
        a: 'MGT-7A is a simplified Annual Return form introduced for Small Companies and One Person Companies (OPCs) having turnover below ₹2 crore or paid-up capital below ₹50 lakh.',
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
