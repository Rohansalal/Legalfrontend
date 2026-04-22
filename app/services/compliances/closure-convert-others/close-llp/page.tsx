'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function CloseLLPPage() {
  const data = {
    title: 'Close / Strike Off LLP',
    description:
      'Expert assistance for closing and striking off your LLP — Form LLP-24 for fast track strike off, LLP-X for voluntary winding up, nil liability requirement, MCA dormancy option, and NCLT winding up process.',
    heroBadges: ['LLP-24 Strike Off Experts', 'Zero Liability Required', 'Fast Track Closure'],
    introTitle: 'What is Strike Off / Closure of an LLP?',
    introContent: (
      <p>
        An LLP that is no longer operational can be officially closed through two main routes: (1) Strike Off (Defunct LLP) using Form LLP-24 under Rule 37 of the LLP Rules — for LLPs that have no assets, liabilities, or pending litigations and have not conducted any business for at least 1 year; (2) Voluntary Winding Up under Section 63 of the LLP Act — applicable when the LLP has business activity, assets, or liabilities that need to be liquidated through a structured process. The LLP-24 route is available only if all annual returns (Form 11 and Form 8) are up to date, income tax returns are filed, and the LLP has nil assets and liabilities. Partners must pass a resolution and submit an affidavit confirming the nil status. If the ROC finds the LLP dormant (not filed for 5+ years), it can initiate suo motu strike off. The NCLT can also order winding up of an LLP in certain cases.
      </p>
    ),
    detailsTitle: 'LLP Closure Routes',
    details: [
      {
        title: 'Form LLP-24 — Fast Track Strike Off',
        desc: 'For defunct LLPs with nil assets, liabilities, and no pending litigations. All annual returns and ITRs must be filed. Fastest and cheapest closure route.',
        icon: Zap,
      },
      {
        title: 'Voluntary Winding Up',
        desc: 'When LLP has assets, liabilities, or business activity. Requires partners\' resolution, appointment of liquidator, creditor notice, asset distribution, and final dissolution.',
        icon: Scale,
      },
      {
        title: 'NCLT Winding Up',
        desc: 'Tribunal-ordered winding up for fraud, oppression, or when the LLP is unable to pay debts. More complex process involving court proceedings.',
        icon: ShieldCheck,
      },
      {
        title: 'ROC Suo Motu Strike Off',
        desc: 'The ROC can strike off a dormant LLP (inactive for 5+ years and not filed returns) on its own motion. Partners can also apply for dormancy status as an alternative to closure.',
        icon: FileText,
      },
    ],
    requirements: [
      'LLPIN and Certificate of Incorporation of the LLP',
      'NIL statement of assets and liabilities signed by all partners',
      'Affidavit from all partners confirming LLP is defunct',
      'All pending LLP annual returns (Form 11 & Form 8) filed',
      'All income tax returns (ITR-5) filed up to date',
      'Bank account closure certificate (if applicable)',
      'Indemnity bond signed by all partners',
      'DSC of designated partners',
    ],
    processTitle: 'How to Strike Off an LLP',
    processIntro:
      'The Form LLP-24 route is the simplest path to closure. Our team clears all pending filings and manages the complete application.',
    processSteps: [
      {
        title: 'Clear All Pending Filings',
        desc: 'Ensure all pending Form 11, Form 8, and ITR-5 are filed. There should be no pending dues to any government department.',
        icon: FileSearch,
      },
      {
        title: 'Pass Partners Resolution',
        desc: 'All partners pass a resolution to apply for strike off. Prepare and sign Affidavit of NIL assets and liabilities and an Indemnity Bond.',
        icon: UserCheck,
      },
      {
        title: 'File Form LLP-24',
        desc: 'Submit Form LLP-24 on the MCA portal with all documents — NIL statement, partners affidavit, indemnity bond, and bank closure certificate.',
        icon: FileCheck,
      },
      {
        title: 'ROC Strike Off & MCA Gazette Notification',
        desc: 'ROC processes the application and publishes the strike off in the Official Gazette. LLP ceases to exist from the date of Gazette notification.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'Once struck off, the LLP\'s name is removed from the MCA register. Partners are released from all future compliance obligations.',
    documents: [
      {
        category: 'LLP Formation Documents',
        list: [
          'LLP Certificate of Incorporation',
          'LLP Agreement',
          'LLPIN and PAN',
        ],
      },
      {
        category: 'Closure Affidavits',
        list: [
          'NIL Assets and Liabilities Statement',
          'Affidavit from all designated partners',
          'Indemnity Bond signed by all partners',
        ],
      },
      {
        category: 'Compliance Evidence',
        list: [
          'Filed Form 11 and Form 8 acknowledgments',
          'ITR-5 acknowledgments for all years',
          'Bank account closure certificate',
        ],
      },
    ],
    compliance: [
      {
        title: 'Nil Liability Confirmation',
        desc: 'LLP-24 is only available if there are no outstanding liabilities — no pending dues to employees, creditors, government departments, or courts.',
      },
      {
        title: 'Bank Account Closure',
        desc: 'All LLP bank accounts must be closed before applying for strike off. The bank closure certificate must be attached to the LLP-24 application.',
      },
      {
        title: 'GST Cancellation',
        desc: 'If GST registered, cancel the GSTIN before filing LLP-24. File final GSTR-10 (final return) after GST cancellation.',
      },
      {
        title: 'Income Tax Clearance',
        desc: 'All ITR-5 returns must be filed up to the financial year preceding the closure application. Any pending tax demand must be paid.',
      },
    ],
    faqs: [
      {
        q: 'Can an LLP be closed if it has pending liabilities?',
        a: 'The fast track LLP-24 route requires NIL liabilities. If there are liabilities, the LLP must follow the Voluntary Winding Up process under Section 63 of the LLP Act, 2008 to pay off creditors before closure.',
      },
      {
        q: 'How long does LLP-24 strike off take?',
        a: 'After filing LLP-24, the ROC typically processes and publishes the strike off in the Official Gazette within 60–90 days, subject to the completeness of documents.',
      },
      {
        q: 'What happens to pending LLP annual returns during strike off?',
        a: 'All pending Form 11 and Form 8 returns must be filed before the LLP-24 application. The ROC will not process strike off if there are unfiled returns.',
      },
      {
        q: 'Can partners be held liable after the LLP is struck off?',
        a: 'Partners can still be held liable for any obligations that arose before the strike off. The indemnity bond submitted as part of LLP-24 protects the government but does not automatically release partners from pre-existing creditor claims.',
      },
      {
        q: 'What is the difference between LLP strike off and winding up?',
        a: 'Strike off (LLP-24) is administrative removal of defunct LLPs with NIL activity. Winding up involves actual liquidation of assets and settlement of liabilities under a formal process supervised by a liquidator.',
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
