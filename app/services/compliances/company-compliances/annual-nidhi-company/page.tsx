'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function AnnualNidhiCompanyPage() {
  const data = {
    title: 'Annual Compliances for Nidhi Company',
    description:
      'Expert annual compliance services for Nidhi Companies — NDH-1 annual return, NDH-3 half-yearly return, financial statements, net owned fund ratio maintenance, and member threshold compliance.',
    heroBadges: ['NDH-1 & NDH-3 Experts', 'MCA Nidhi Rules Compliant', 'Half-Yearly Filing'],
    introTitle: 'What are Annual Compliances for a Nidhi Company?',
    introContent: (
      <p>
        A Nidhi Company is a type of Non-Banking Finance Company (NBFC) incorporated under Section 406 of the Companies Act, 2013 and governed by the Nidhi Rules, 2014. It is formed for the purpose of cultivating the habit of savings among its members and operates for mutual benefit. Nidhi Companies face a unique compliance structure distinct from regular companies. They must file Form NDH-1 (Annual Return of Nidhi Company) by 30 April every year. Additionally, Form NDH-3 is required to be filed half-yearly within 30 days of each half-year end (i.e., by 30 April and 30 October). Nidhi Companies must also maintain a Net Owned Fund (NOF) to deposits ratio of not more than 1:20, maintain at least 200 members within the first year, and ensure unencumbered term deposits of not less than 10% of outstanding deposits as per Rule 14.
      </p>
    ),
    detailsTitle: 'Key Annual Compliance Obligations for Nidhi Company',
    details: [
      {
        title: 'NDH-1 — Annual Return',
        desc: 'File Form NDH-1 with details of members, deposits, loans, and financial position by 30 April every year with the Registrar of Companies.',
        icon: FileText,
      },
      {
        title: 'NDH-3 — Half-Yearly Return',
        desc: 'File Form NDH-3 within 30 days after each half-year end (i.e., by 30 April and 30 October) disclosing deposits, loans, and member statistics.',
        icon: Clock,
      },
      {
        title: 'Net Owned Fund Ratio',
        desc: 'Maintain NOF to deposits ratio within 1:20. Net Owned Fund must be minimum ₹10 lakh at all times as per Nidhi (Amendment) Rules, 2022.',
        icon: TrendingUp,
      },
      {
        title: 'Member Requirements',
        desc: 'Must have minimum 200 members within 1 year of incorporation. If not achieved, apply for extension via NDH-2 before expiry.',
        icon: Users,
      },
    ],
    requirements: [
      'Certificate of Incorporation as a Nidhi Company',
      'MOA and AOA mentioning Nidhi Company objects',
      'Audited financial statements for the year',
      'Register of Members with minimum 200 members',
      'Details of deposits, loans, and borrowings',
      'Net Owned Fund computation statement',
      'Unencumbered FD certificate (min. 10% of deposits)',
      'DSC of Director and CA Certificate',
    ],
    processTitle: 'How to Complete Annual Compliances for Nidhi Company',
    processIntro:
      'Nidhi compliance requires both annual and half-yearly filings. Our specialized team ensures all NDH forms and ROC filings are completed on time.',
    processSteps: [
      {
        title: 'Prepare Half-Yearly Financial Data',
        desc: 'Compile member statistics, deposit details, loan outstanding, and NOF ratio for the half-year ended 31 March and 30 September respectively.',
        icon: FileSearch,
      },
      {
        title: 'File NDH-3 (Half-Yearly)',
        desc: 'Submit Form NDH-3 within 30 days of each half-year end. File separately for April–September (by 30 October) and October–March (by 30 April).',
        icon: FileCheck,
      },
      {
        title: 'Complete Statutory Audit',
        desc: 'Get accounts audited by a CA. Verify NOF ratio, FD maintenance, and member count. Prepare audited financials for annual filing.',
        icon: UserCheck,
      },
      {
        title: 'File NDH-1 and ROC Returns',
        desc: 'Submit Annual Return NDH-1 by 30 April. Also file MGT-7 and AOC-4 with ROC as required under Companies Act, 2013.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We also help Nidhi Companies apply for NDH-2 extension if the 200-member threshold has not been met within the stipulated period.',
    documents: [
      {
        category: 'Company Documents',
        list: [
          'Certificate of Incorporation',
          'MOA and AOA (with Nidhi objects)',
          'PAN of the company',
        ],
      },
      {
        category: 'Financial Documents',
        list: [
          'Audited Balance Sheet and P&L',
          'Statement of NOF computation',
          'FD receipts (unencumbered, min. 10% of deposits)',
        ],
      },
      {
        category: 'Member & Deposit Records',
        list: [
          'Register of Members (min. 200)',
          'Details of deposits and loans as on date',
          'DSC of authorised Director',
        ],
      },
    ],
    compliance: [
      {
        title: 'MGT-7 & AOC-4 Filing',
        desc: 'In addition to NDH forms, file MGT-7 (Annual Return) and AOC-4 (Financial Statements) under the Companies Act, 2013 every year.',
      },
      {
        title: 'Deposit & Loan Ratio Maintenance',
        desc: 'Ensure loans extended to members do not violate the deposit-to-loan limits under Nidhi Rules. Deposits cannot be raised from non-members.',
      },
      {
        title: 'Income Tax Return',
        desc: 'Nidhi Companies must file ITR-6 every year. Income from members (interest on loans) is taxable as business income.',
      },
      {
        title: 'Member Threshold Compliance',
        desc: 'Maintain at least 200 members at all times. If membership drops, take corrective action immediately to avoid regulatory non-compliance.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between NDH-1 and NDH-3?',
        a: 'NDH-1 is an annual return filed by 30 April each year covering the full financial year. NDH-3 is a half-yearly return filed twice a year covering 6-month periods (April–September and October–March).',
      },
      {
        q: 'What is the Net Owned Fund requirement for Nidhi Companies?',
        a: 'Nidhi Companies must maintain a minimum Net Owned Fund (NOF) of ₹10 lakh and the ratio of NOF to deposits must not exceed 1:20 at any point.',
      },
      {
        q: 'Can a Nidhi Company accept deposits from non-members?',
        a: 'No. A Nidhi Company can only accept deposits from and provide loans to its members. Transactions with non-members are strictly prohibited.',
      },
      {
        q: 'What happens if a Nidhi Company fails to achieve 200 members?',
        a: 'The company must file Form NDH-2 with the Regional Director before expiry of the 1-year period seeking an extension of time to achieve the 200-member requirement.',
      },
      {
        q: 'Is GST applicable to a Nidhi Company?',
        a: 'Interest income from loans is generally exempt from GST. However, if the Nidhi Company provides other services, GST registration may be required based on the nature and value of services.',
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
