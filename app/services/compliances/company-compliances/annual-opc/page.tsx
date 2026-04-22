'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function AnnualOPCPage() {
  const data = {
    title: 'Annual Compliances for One Person Company (OPC)',
    description:
      'Complete OPC annual compliance management — MGT-7A, AOC-4, board meetings, mandatory conversion tracking, and ROC filings handled by experts. Stay compliant and avoid director disqualification.',
    heroBadges: ['OPC Compliance Experts', 'Conversion Monitoring', 'MCA-Certified Filing'],
    introTitle: 'What are Annual Compliances for a One Person Company?',
    introContent: (
      <p>
        A One Person Company (OPC) incorporated under Section 2(62) of the Companies Act, 2013 must comply with annual filing obligations similar to a Private Limited Company, though with certain relaxations. OPCs must file Form MGT-7A (simplified Annual Return) and Form AOC-4 (Financial Statements) with the Registrar of Companies each year. Unlike other companies, OPCs are required to hold only 2 Board Meetings per year with a gap of at least 90 days between them. Critically, an OPC is mandatorily required to convert into a Private Limited Company once its paid-up share capital exceeds ₹50 lakh or its average annual turnover for the preceding 3 financial years exceeds ₹2 crore. The conversion must be completed within 6 months of crossing the threshold. Failure to comply attracts penalties under Section 122 of the Act.
      </p>
    ),
    detailsTitle: 'Key Annual Compliance Obligations for OPC',
    details: [
      {
        title: 'MGT-7A — Simplified Annual Return',
        desc: 'OPCs file the simplified MGT-7A form (instead of MGT-7) within 60 days of the end of the financial year. Requires details of director and nominee.',
        icon: FileText,
      },
      {
        title: 'AOC-4 — Financial Statements',
        desc: 'File audited Balance Sheet and Profit & Loss in Form AOC-4 within 180 days from the end of financial year (by 27 September).',
        icon: TrendingUp,
      },
      {
        title: 'Board Meetings — Minimum 2',
        desc: 'Minimum 2 Board Meetings per year with at least 90 days gap between meetings. Minutes must be recorded and maintained.',
        icon: Users,
      },
      {
        title: 'Mandatory Conversion Monitoring',
        desc: 'Track turnover and paid-up capital thresholds. Mandatory conversion to Pvt. Ltd. within 6 months of exceeding ₹2Cr turnover or ₹50L capital.',
        icon: TrendingUp,
      },
    ],
    requirements: [
      'Certificate of Incorporation of OPC',
      'PAN and TAN of the OPC',
      'Audited Financial Statements for the year',
      'Details of the sole Director and Nominee Director',
      'DSC of the sole Director',
      'DIN and KYC status of the Director',
      'Board Meeting minutes for the year',
      'Nominee consent letter (INC-3) if nominee changes',
    ],
    processTitle: 'How to Complete Annual Compliances for OPC',
    processIntro:
      'OPC compliance is simpler than a standard Pvt. Ltd. but equally mandatory. Our team handles all filings accurately and on time.',
    processSteps: [
      {
        title: 'Accounts Preparation & Audit',
        desc: 'Prepare financial statements for the year ending 31 March. Appointment of Statutory Auditor is mandatory even for OPCs.',
        icon: FileSearch,
      },
      {
        title: 'Hold Board Meetings (Min. 2)',
        desc: 'Conduct at least 2 Board Meetings during the year. Record and maintain minutes. Adopt financial statements at a board meeting.',
        icon: UserCheck,
      },
      {
        title: 'File AOC-4',
        desc: 'Submit audited financial statements in Form AOC-4 within 180 days from the end of financial year, i.e., by 27 September.',
        icon: FileCheck,
      },
      {
        title: 'File MGT-7A',
        desc: 'Submit simplified Annual Return in Form MGT-7A within 60 days from the end of the financial year, i.e., by 29 May.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We also monitor your OPC turnover and capital to alert you well before mandatory conversion thresholds are crossed.',
    documents: [
      {
        category: 'Company Documents',
        list: [
          'Certificate of Incorporation',
          'MOA and AOA of the OPC',
          'PAN Card of the company',
        ],
      },
      {
        category: 'Financial Documents',
        list: [
          'Audited Balance Sheet and P&L Account',
          'Auditor Report',
          'Bank statements for the year',
        ],
      },
      {
        category: 'Director Documents',
        list: [
          'PAN and Aadhaar of Director',
          'DIN Certificate and DIR-3 KYC status',
          'Nominee details and INC-3 consent',
        ],
      },
    ],
    compliance: [
      {
        title: 'Conversion to Pvt. Ltd. on Threshold Breach',
        desc: 'Once turnover exceeds ₹2 crore or paid-up capital exceeds ₹50 lakh, the OPC must mandatorily convert to a Private Limited Company within 6 months.',
      },
      {
        title: 'Income Tax Return — ITR-6',
        desc: 'OPCs must file ITR-6 as they are taxed as a company at the applicable corporate tax rate.',
      },
      {
        title: 'DIR-3 KYC for Director',
        desc: 'The sole director must file DIR-3 KYC annually by 30 September to prevent DIN deactivation.',
      },
      {
        title: 'GST Compliance',
        desc: 'File monthly/quarterly GST returns (GSTR-1, GSTR-3B) if registered under GST. GSTR-9 annual return due by 31 December.',
      },
    ],
    faqs: [
      {
        q: 'What is the due date for AOC-4 for OPC?',
        a: 'Unlike other companies where AOC-4 is filed within 30 days of AGM, OPCs do not hold an AGM. Their AOC-4 is due within 180 days from the end of the financial year, typically by 27 September.',
      },
      {
        q: 'Does an OPC need to hold an AGM?',
        a: 'No. OPCs are exempt from holding an Annual General Meeting (AGM) under Section 122 of the Companies Act, 2013.',
      },
      {
        q: 'When must an OPC mandatorily convert to Pvt. Ltd.?',
        a: 'When paid-up capital exceeds ₹50 lakh or average annual turnover for the preceding 3 years exceeds ₹2 crore, the OPC must convert to a Private Limited Company within 6 months.',
      },
      {
        q: 'Can a foreign national or NRI form an OPC?',
        a: 'No. Only a natural person who is an Indian citizen and resident of India (present in India for at least 182 days in the preceding financial year) can incorporate an OPC.',
      },
      {
        q: 'Who is the nominee in an OPC and what are their obligations?',
        a: 'The nominee is a natural person who will take over the OPC in the event of the sole member\'s death or incapacity. The nominee must give consent via Form INC-3 and their details must be filed with the ROC.',
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
