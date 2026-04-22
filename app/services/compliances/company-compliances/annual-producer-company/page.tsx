'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function AnnualProducerCompanyPage() {
  const data = {
    title: 'Annual Compliances for Producer Company',
    description:
      'Specialized annual compliance services for Producer Companies — AGM within 90 days, board meetings, statutory audit, ROC filings, member record maintenance, and produce-related disclosures under the Companies Act.',
    heroBadges: ['Producer Company Specialists', 'AGM within 90 Days', 'Member Record Experts'],
    introTitle: 'What are Annual Compliances for a Producer Company?',
    introContent: (
      <p>
        A Producer Company is a corporate entity incorporated under Sections 581A to 581ZT of the Companies Act, 1956 (now read with the Companies Act, 2013 via the Companies (Amendment) Act, 2002). It is formed by farmers, agriculturalists, and primary producers to collectively engage in production, grading, pooling, harvesting, procurement, and marketing of primary produce. A Producer Company has unique compliance requirements distinct from ordinary companies. The most notable is that the AGM must be held within 90 days (not 6 months) of the financial year end. The board must hold at least 4 meetings per year with not more than 120 days gap. Financial statements must be audited and filed with the ROC. The company must also maintain proper member records, update the register of members, and ensure timely submission of returns with the Registrar.
      </p>
    ),
    detailsTitle: 'Key Annual Compliance Obligations',
    details: [
      {
        title: 'AGM Within 90 Days',
        desc: 'Producer Companies must hold their AGM within 90 days of financial year end — significantly earlier than the 6-month window allowed for regular companies.',
        icon: Clock,
      },
      {
        title: 'ROC Annual Filings',
        desc: 'File AOC-4 (Financial Statements) and MGT-7 (Annual Return) with the Registrar within 30 and 60 days of AGM respectively.',
        icon: FileText,
      },
      {
        title: 'Statutory Audit',
        desc: 'Accounts must be audited by a Chartered Accountant every year. The audit report is presented at the AGM and filed with the ROC.',
        icon: ShieldCheck,
      },
      {
        title: 'Member Register & Records',
        desc: 'Maintain an accurate and updated Register of Members. Record all changes — new members, exits, share transfers — within prescribed timelines.',
        icon: Users,
      },
    ],
    requirements: [
      'Certificate of Incorporation as a Producer Company',
      'Memorandum and Articles of Association',
      'List of all active members (producer members only)',
      'Audited Financial Statements for the year',
      'Minutes of Board Meetings and AGM',
      'DSC of the Managing Director/CEO',
      'Details of produce dealt by the company during the year',
      'Register of Members updated as on financial year end',
    ],
    processTitle: 'How to Complete Annual Compliances for Producer Company',
    processIntro:
      'Our team manages the complete annual compliance cycle for Producer Companies, including the early AGM deadline and specialized disclosures.',
    processSteps: [
      {
        title: 'Finalize Accounts & Statutory Audit',
        desc: 'Close books of accounts by 31 March. Appoint auditor and complete audit. Prepare Directors Report with disclosures specific to Producer Company.',
        icon: FileSearch,
      },
      {
        title: 'Hold AGM Within 90 Days',
        desc: 'Conduct AGM within 90 days of financial year end (by 29 June). Adopt financial statements, declare patronage bonus if any, and appoint/reappoint auditor.',
        icon: UserCheck,
      },
      {
        title: 'File AOC-4 with ROC',
        desc: 'Submit audited Balance Sheet and P&L Account with Directors Report in Form AOC-4 within 30 days of AGM.',
        icon: FileCheck,
      },
      {
        title: 'File MGT-7 Annual Return',
        desc: 'Submit Annual Return in Form MGT-7 within 60 days of AGM. Include member statistics, directors, and produce turnover details.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We also assist with member admission, exit procedures, and patronage bonus distribution compliance for Producer Companies.',
    documents: [
      {
        category: 'Company Documents',
        list: [
          'Certificate of Incorporation',
          'MOA and AOA',
          'Producer Company registration under relevant state Act (if any)',
        ],
      },
      {
        category: 'Financial Documents',
        list: [
          'Audited Balance Sheet and P&L Account',
          'Auditor Report',
          'Statement of produce procured and distributed',
        ],
      },
      {
        category: 'Member Documents',
        list: [
          'Register of Members (producer members only)',
          'Member share contribution records',
          'Patronage bonus calculation sheet',
        ],
      },
    ],
    compliance: [
      {
        title: 'Membership Restrictions',
        desc: 'Membership is restricted to primary producers only. Non-producers cannot be members. Any change in membership must be updated in the register.',
      },
      {
        title: 'Patronage Bonus Distribution',
        desc: 'If patronage bonus is declared, it must be distributed among members in proportion to their participation in the business of the Producer Company.',
      },
      {
        title: 'Income Tax Return',
        desc: 'Producer Companies are taxed as companies under the Income Tax Act. File ITR-6 annually by the applicable deadline.',
      },
      {
        title: 'Board Meeting Frequency',
        desc: 'At least 4 board meetings per year with maximum 120 days between consecutive meetings. Record and maintain board meeting minutes.',
      },
    ],
    faqs: [
      {
        q: 'Why must a Producer Company hold AGM within 90 days?',
        a: 'The law applicable to Producer Companies requires the AGM to be held within 90 days of the financial year end, which is stricter than the 6-month window for regular companies, ensuring timely reporting to members who are active producers.',
      },
      {
        q: 'Can non-farmers be members of a Producer Company?',
        a: 'No. Membership in a Producer Company is restricted to primary producers — persons engaged in agriculture, horticulture, floriculture, aquaculture, animal husbandry, etc. Corporate entities are not eligible for membership.',
      },
      {
        q: 'What is a patronage bonus in a Producer Company?',
        a: 'A patronage bonus is a distribution of surplus to members in proportion to their participation in the business (e.g., volume of produce supplied). It is distinct from dividend and is a key feature of the Producer Company model.',
      },
      {
        q: 'Is GST applicable on the activities of a Producer Company?',
        a: 'Activities like procurement and sale of agricultural produce are generally exempt from GST. However, services provided and processed goods may attract GST. A case-by-case assessment is recommended.',
      },
      {
        q: 'What happens if AGM is not held within 90 days?',
        a: 'Failure to hold the AGM within the prescribed period attracts penalties on the company and its officers in default. The ROC may also take action for non-compliance.',
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
