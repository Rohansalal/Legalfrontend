'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function AnnualLLPPage() {
  const data = {
    title: 'Annual Compliances for LLP',
    description:
      'Timely LLP annual compliance filing — Form 11 (Annual Return), Form 8 (Statement of Accounts & Solvency), LLP agreement maintenance, and penalty avoidance. Expert assistance for all LLPs across India.',
    heroBadges: ['Form 11 & Form 8 Experts', 'MCA Filing Specialists', 'Penalty-Free Compliance'],
    introTitle: 'What are Annual Compliances for an LLP?',
    introContent: (
      <p>
        A Limited Liability Partnership (LLP) registered under the LLP Act, 2008 must fulfil two mandatory annual filings with the Ministry of Corporate Affairs (MCA): Form 11 (Annual Return) and Form 8 (Statement of Accounts &amp; Solvency). Form 11 is due within 60 days of financial year end (by 30 May), while Form 8 must be filed within 30 days of 6 months after financial year end (by 30 October). Unlike companies, LLPs are not required to hold an AGM, but they must maintain a current LLP Agreement and update it for any changes in partners or contribution. Non-filing attracts a penalty of ₹100 per day per form with no ceiling, making timely compliance critical. LLPs with turnover above ₹40 lakh or contribution above ₹25 lakh must also get their accounts audited by a Chartered Accountant.
      </p>
    ),
    detailsTitle: 'Key Annual Compliance Obligations for LLP',
    details: [
      {
        title: 'Form 11 — Annual Return',
        desc: 'File Annual Return with details of partners, their contributions, and changes during the year. Due by 30 May each year.',
        icon: FileText,
      },
      {
        title: 'Form 8 — Statement of Accounts',
        desc: 'File Statement of Accounts and Solvency disclosing financial position of the LLP. Due by 30 October each year.',
        icon: TrendingUp,
      },
      {
        title: 'LLP Audit Requirement',
        desc: 'Mandatory audit by CA if turnover exceeds ₹40 lakh or contribution exceeds ₹25 lakh. Unaudited accounts accepted below these thresholds.',
        icon: ShieldCheck,
      },
      {
        title: 'LLP Agreement Maintenance',
        desc: 'Keep LLP Agreement updated with current partner details, profit-sharing ratios, and roles. File Form 3 for any amendments within 30 days.',
        icon: Scale,
      },
    ],
    requirements: [
      'LLP Identification Number (LLPIN)',
      'Current LLP Agreement signed by all designated partners',
      'Financial statements for the year ending 31 March',
      'Auditor Report (if turnover &gt; ₹40 lakh or contribution &gt; ₹25 lakh)',
      'Details of all partners and designated partners with DPIN',
      'DSC of at least two designated partners',
      'Income Tax Return acknowledgment (ITR-5)',
      'GST returns if registered under GST',
    ],
    processTitle: 'How to Complete Annual Compliances for LLP',
    processIntro:
      'Our team ensures both Form 11 and Form 8 are prepared accurately and filed well before deadlines to avoid penalties.',
    processSteps: [
      {
        title: 'Prepare Financial Statements',
        desc: 'Compile profit & loss account and balance sheet for the year ending 31 March. Get audit done if threshold is crossed.',
        icon: FileSearch,
      },
      {
        title: 'File Form 8 by 30 October',
        desc: 'Upload Statement of Accounts and Solvency on the MCA LLP portal. Attach auditor report if applicable. Signed by two designated partners.',
        icon: FileCheck,
      },
      {
        title: 'File Form 11 by 30 May',
        desc: 'Submit Annual Return with summary of partners, their contributions, and any changes in management during the year.',
        icon: UserCheck,
      },
      {
        title: 'File ITR-5 for the LLP',
        desc: 'LLPs are taxed as a firm. File ITR-5 by 31 July (non-audit) or 31 October (audit cases). Remuneration to partners must be within prescribed limits.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We track all LLP compliance deadlines and proactively remind you to avoid costly late fees that accumulate at ₹100 per day.',
    documents: [
      {
        category: 'LLP Formation Documents',
        list: [
          'Certificate of Incorporation of LLP',
          'LLP Agreement (latest amended version)',
          'LLPIN and PAN of the LLP',
        ],
      },
      {
        category: 'Financial Documents',
        list: [
          'Balance Sheet and P&L for the year',
          'Auditor Certificate (if applicable)',
          'Bank statements and trial balance',
        ],
      },
      {
        category: 'Partner Documents',
        list: [
          'PAN and Aadhaar of all designated partners',
          'DPIN (Designated Partner Identification Number)',
          'DSC of two designated partners',
        ],
      },
    ],
    compliance: [
      {
        title: 'Income Tax Filing — ITR-5',
        desc: 'LLPs must file ITR-5 annually. Audit is mandatory under Section 44AB if turnover exceeds ₹1 crore (business) or ₹50 lakh (profession).',
      },
      {
        title: 'GST Return Filing',
        desc: 'GST-registered LLPs must file GSTR-1, GSTR-3B monthly/quarterly, and GSTR-9 annually.',
      },
      {
        title: 'Form 3 for LLP Agreement Changes',
        desc: 'Any change in partners, contribution, or profit-sharing ratio requires filing Form 3 within 30 days of the change.',
      },
      {
        title: 'DPIN KYC for Designated Partners',
        desc: 'All designated partners must complete DIR-3 KYC annually by 30 September to keep their DPIN active.',
      },
    ],
    faqs: [
      {
        q: 'What are the due dates for Form 11 and Form 8?',
        a: 'Form 11 (Annual Return) is due by 30 May each year (within 60 days of financial year end). Form 8 (Statement of Accounts) is due by 30 October each year.',
      },
      {
        q: 'Is audit mandatory for all LLPs?',
        a: 'No. Audit is mandatory only when the LLP turnover exceeds ₹40 lakh or contribution exceeds ₹25 lakh. Below these limits, partners can self-certify the financial statements.',
      },
      {
        q: 'What is the penalty for non-filing of LLP annual returns?',
        a: 'A penalty of ₹100 per day per form is levied with no upper limit. This means an LLP that delays filing for a year can face penalties exceeding ₹36,000 per form.',
      },
      {
        q: 'Can a dormant LLP avoid annual filings?',
        a: 'No. Even a dormant or inactive LLP must file Form 11 and Form 8 every year. Failure to file can lead to strike off of the LLP by the Registrar.',
      },
      {
        q: 'How is LLP taxed compared to a company?',
        a: 'An LLP is taxed as a partnership firm at 30% flat rate plus applicable surcharge and cess. There is no DDT (Dividend Distribution Tax), and remuneration/interest to partners is deductible within limits under Section 40(b) of the Income Tax Act.',
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
