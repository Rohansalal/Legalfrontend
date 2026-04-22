'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function ClosePvtLtdPage() {
  const data = {
    title: 'Close / Strike Off Private Limited Company',
    description:
      'Expert closure services for Pvt. Ltd. Companies — STK-2 fast track strike off, voluntary winding up, NCLT process, nil income and assets requirement, and complete MCA filing handled by professionals.',
    heroBadges: ['STK-2 Strike Off Experts', 'Fast Track Closure', 'Nil Company Compliance'],
    introTitle: 'How to Close a Private Limited Company?',
    introContent: (
      <p>
        Closing a Private Limited Company in India can be done through three main routes depending on the company\'s financial position: (1) Fast Track Strike Off (FTO) using Form STK-2 under Section 248 of the Companies Act, 2013 — for companies that have nil assets and liabilities, have not been operational for 2 or more years, and have filed all pending ROC returns; (2) Voluntary Winding Up under the Insolvency and Bankruptcy Code (IBC), 2016 — for companies that are solvent but wish to close; (3) Compulsory Winding Up by NCLT under Section 271 — for insolvent companies or on grounds of just and equitable order. The STK-2 route is the most commonly used fast track route. It requires all pending annual returns (AOC-4 and MGT-7) and income tax returns (ITR-6) to be filed before application. There must be no pending litigation, government dues, or ongoing business activity.
      </p>
    ),
    detailsTitle: 'Company Closure Routes',
    details: [
      {
        title: 'Fast Track Strike Off — STK-2',
        desc: 'Apply under Section 248 using Form STK-2 for companies inactive for 2+ years with nil assets/liabilities. All ROC and IT filings must be up to date.',
        icon: Zap,
      },
      {
        title: 'Voluntary Winding Up under IBC',
        desc: 'Solvent companies can voluntarily liquidate under the IBC, 2016. Requires board declaration of solvency, liquidator appointment, and NCLT order.',
        icon: Scale,
      },
      {
        title: 'NCLT Winding Up — Section 271',
        desc: 'Tribunal-ordered winding up for insolvent companies, fraud, or public interest cases. More complex and time-consuming than voluntary routes.',
        icon: ShieldCheck,
      },
      {
        title: 'Dormant Company Status',
        desc: 'As an alternative to closure, apply for Dormant Company status under Section 455. Reduced compliance burden with only Form MSC-3 annual return.',
        icon: Clock,
      },
    ],
    requirements: [
      'Certificate of Incorporation of the company',
      'Board Resolution to apply for strike off / closure',
      'NIL statement of assets and liabilities',
      'Affidavit by all directors confirming nil activity',
      'Indemnity Bond executed by all directors',
      'All pending AOC-4, MGT-7 returns filed',
      'All ITR-6 returns filed up to date',
      'Bank account closure certificate',
    ],
    processTitle: 'How to Close / Strike Off a Pvt. Ltd. Company',
    processIntro:
      'The STK-2 fast track route is the most efficient path for defunct companies. Our team ensures all compliance is cleared before applying.',
    processSteps: [
      {
        title: 'Clear All Pending ROC & Tax Filings',
        desc: 'File all pending AOC-4, MGT-7, and ITR-6 returns. Pay any outstanding taxes or penalties. Close all bank accounts and obtain closure certificates.',
        icon: FileSearch,
      },
      {
        title: 'Board Resolution & Affidavit',
        desc: 'Pass Board Resolution approving the strike off application. All directors sign Affidavit of NIL assets/liabilities and an Indemnity Bond notarized by notary.',
        icon: UserCheck,
      },
      {
        title: 'File STK-2 on MCA Portal',
        desc: 'Submit Form STK-2 with all attachments — Affidavit, Indemnity Bond, NIL statement, and bank closure certificate. Pay government fee.',
        icon: FileCheck,
      },
      {
        title: 'ROC Notice & Gazette Publication',
        desc: 'ROC issues public notice for 30 days. If no objections, the company name is struck off the register and published in the Official Gazette.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'Once struck off, the company ceases to exist. Directors are relieved of future compliance obligations. GST registration is cancelled separately.',
    documents: [
      {
        category: 'Company Documents',
        list: [
          'Certificate of Incorporation',
          'PAN of the company',
          'MOA and AOA',
        ],
      },
      {
        category: 'Closure Documents',
        list: [
          'NIL Assets and Liabilities Statement',
          'Affidavit of directors (notarized)',
          'Indemnity Bond (all directors)',
        ],
      },
      {
        category: 'Filing Evidence',
        list: [
          'Last 3 years ROC filing acknowledgments',
          'Last 3 years ITR-6 acknowledgments',
          'Bank account closure certificate',
        ],
      },
    ],
    compliance: [
      {
        title: 'GST Cancellation Before Strike Off',
        desc: 'Cancel GSTIN and file GSTR-10 (final return) before applying for company strike off. Pending GST obligations can delay the process.',
      },
      {
        title: 'TDS Compliance Clearance',
        desc: 'Ensure all TDS returns (24Q, 26Q) are filed and any TDS payable has been deposited. Obtain Form 16A clearance if applicable.',
      },
      {
        title: 'Director Liability Post Strike Off',
        desc: 'Directors remain liable for actions and liabilities that arose before the strike off. The company can be restored to the register within 20 years by NCLT.',
      },
      {
        title: 'Restoration if Strike Off Was Wrong',
        desc: 'If the company is struck off by ROC suo motu (for non-filing), members or creditors can apply to NCLT for restoration within 20 years under Section 252.',
      },
    ],
    faqs: [
      {
        q: 'What are the eligibility conditions for STK-2 fast track strike off?',
        a: 'The company must: (1) not have conducted any business for 2 or more years, (2) have nil assets and liabilities, (3) have filed all pending annual returns and ITRs, (4) have no pending litigation or government dues.',
      },
      {
        q: 'How long does the STK-2 strike off process take?',
        a: 'After filing STK-2, the ROC issues a notice and waits for objections. The entire process typically takes 3–6 months for the Gazette notification.',
      },
      {
        q: 'Can a company with bank balance apply for strike off?',
        a: 'No. All bank accounts must be closed and the bank closure certificate must be attached to the STK-2 application. A company with funds in its account cannot apply for strike off.',
      },
      {
        q: 'What happens to the company PAN after strike off?',
        a: 'After strike off, the company PAN becomes inactive. The company can no longer file any tax returns or transact using its PAN. PAN cannot be surrendered separately.',
      },
      {
        q: 'Can a struck off company be revived?',
        a: 'Yes. A company struck off by the ROC can be restored to the register by the NCLT on an application by any aggrieved party within 20 years from the date of strike off.',
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
