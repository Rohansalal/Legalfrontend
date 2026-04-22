'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function ClosePublicLtdPage() {
  const data = {
    title: 'Close / Strike Off Public Limited Company',
    description:
      'Expert assistance for winding up Public Limited Companies — Tribunal-ordered winding up, voluntary liquidation under IBC, creditor and shareholder dues clearance, ROC procedures, and 6–24 months timeline management.',
    heroBadges: ['IBC Voluntary Liquidation', 'NCLT Winding Up Experts', 'Creditor Clearance'],
    introTitle: 'How to Close a Public Limited Company?',
    introContent: (
      <p>
        Closing a Public Limited Company in India is a more complex and regulated process than closing a Private Limited Company, due to the involvement of public shareholders, creditors, and in the case of listed companies, SEBI. The primary routes are: (1) Voluntary Liquidation under the Insolvency and Bankruptcy Code (IBC), 2016 — where the company is solvent and shareholders want to wind up; (2) Compulsory Winding Up by NCLT under Section 271 of the Companies Act — for insolvent companies or on public interest grounds; (3) Fast Track Strike Off via STK-2 under Section 248 — only if the company has never commenced business or has been inactive for 2+ years with nil assets/liabilities. The entire process involves clearing all dues to employees, creditors, and government, liquidating assets, distributing surplus to shareholders, and filing final forms with the ROC. The timeline ranges from 6 months (voluntary liquidation of simple companies) to 24+ months (complex NCLT proceedings).
      </p>
    ),
    detailsTitle: 'Winding Up Routes for Public Ltd.',
    details: [
      {
        title: 'Voluntary Liquidation under IBC',
        desc: 'Solvent Public Ltd. can voluntarily liquidate under IBC Section 59. Requires Board Declaration of Solvency, shareholders resolution, IBBI-registered liquidator appointment.',
        icon: Scale,
      },
      {
        title: 'NCLT Compulsory Winding Up',
        desc: 'NCLT orders winding up for insolvency, fraud, or just and equitable grounds under Section 271. Official Liquidator appointed. Assets distributed per priority waterfall.',
        icon: ShieldCheck,
      },
      {
        title: 'STK-2 Strike Off (Inactive Only)',
        desc: 'If Public Ltd. is inactive for 2+ years with nil assets/liabilities, apply for fast track strike off under Section 248. All ROC and ITR filings must be current.',
        icon: Zap,
      },
      {
        title: 'Listed Company SEBI Delisting',
        desc: 'Before winding up a listed public company, compliance with SEBI Delisting Regulations, 2021 is required — reverse book building, minimum public announcement, and SEBI approval.',
        icon: Globe,
      },
    ],
    requirements: [
      'Certificate of Incorporation of the Public Ltd.',
      'Board Declaration of Solvency (for voluntary liquidation)',
      'Special Resolution by shareholders at EGM',
      'IBBI-registered Insolvency Professional as Liquidator',
      'List of all creditors with outstanding dues',
      'Employee settlement certificates',
      'Tax clearance from Income Tax Department',
      'SEBI compliance (for listed companies)',
    ],
    processTitle: 'How to Wind Up a Public Limited Company',
    processIntro:
      'Winding up a Public Ltd. requires careful coordination between NCLT, SEBI, creditors, shareholders, and tax authorities. Our team manages the full process.',
    processSteps: [
      {
        title: 'Board Declaration of Solvency & Resolution',
        desc: 'Board passes declaration of solvency (for voluntary route). Call EGM with 21 days notice. Pass Special Resolution for voluntary liquidation.',
        icon: FileSearch,
      },
      {
        title: 'Appoint Liquidator & Creditor Notice',
        desc: 'Appoint IBBI-registered Insolvency Professional as Liquidator. Issue creditor notice. File with NCLT. Liquidator takes control of assets.',
        icon: UserCheck,
      },
      {
        title: 'Asset Liquidation & Dues Clearance',
        desc: 'Liquidator realizes all assets. Pays off all creditors in IBC waterfall priority order. Settles employee dues. Distributes surplus to shareholders.',
        icon: FileCheck,
      },
      {
        title: 'Final Report & ROC Filing',
        desc: 'Liquidator submits final dissolution report to NCLT/ROC. ROC registers dissolution. Company name removed from register. Gazette notification published.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'For listed companies, we coordinate with SEBI, BSE/NSE for delisting compliance before initiating the winding up process.',
    documents: [
      {
        category: 'Company Documents',
        list: [
          'Certificate of Incorporation',
          'MOA and AOA',
          'Latest audited financial statements',
        ],
      },
      {
        category: 'Creditor & Employee Documents',
        list: [
          'Complete creditor list with outstanding amounts',
          'Employee dues settlement certificates',
          'Bank account statements',
        ],
      },
      {
        category: 'Regulatory Documents',
        list: [
          'Tax clearance certificates (Income Tax, GST)',
          'SEBI delisting approval (for listed companies)',
          'IBBI Liquidator appointment letter',
        ],
      },
    ],
    compliance: [
      {
        title: 'SEBI Delisting Before Winding Up',
        desc: 'Listed public companies must complete the SEBI delisting process — public announcement, reverse book building, and SEBI exit order — before proceeding with winding up.',
      },
      {
        title: 'Creditor Priority Waterfall',
        desc: 'Assets must be distributed in IBC priority: liquidation costs, secured creditors, employees, financial creditors, government dues, unsecured creditors, then shareholders.',
      },
      {
        title: 'NCLT Oversight',
        desc: 'Winding up of Public Limited Companies with significant liabilities must go through NCLT. The Liquidator reports to the NCLT throughout the process.',
      },
      {
        title: 'Tax Compliance Before Closure',
        desc: 'File all pending ITR-6, GST returns, and TDS returns. Obtain Income Tax clearance certificate. Cancel GST registration via GSTR-10.',
      },
    ],
    faqs: [
      {
        q: 'How long does winding up a Public Limited Company take?',
        a: 'Voluntary liquidation of a simple company can take 6–12 months. Complex NCLT winding up with multiple creditors can take 18–36 months depending on asset complexity.',
      },
      {
        q: 'Can shareholders get money back when a Public Ltd. is wound up?',
        a: 'Shareholders receive residual assets only after all creditors (secured, employees, financial, government, unsecured) have been fully paid. In insolvency cases, shareholders often receive nothing.',
      },
      {
        q: 'Is SEBI involved in winding up of a listed Public Ltd.?',
        a: 'Yes. Listed companies must first be delisted from stock exchanges per SEBI Delisting Regulations before proceeding with winding up. SEBI must grant exit approval.',
      },
      {
        q: 'Who can apply for winding up of a Public Ltd.?',
        a: 'Shareholders, creditors, the government, the ROC, or the company itself can apply for winding up. Creditors typically apply when the company is insolvent.',
      },
      {
        q: 'What is the IBC waterfall for distribution in liquidation?',
        a: 'The IBC Section 53 waterfall is: (1) Liquidation costs, (2) Workmen dues (24 months) and Secured creditors, (3) Other employee dues (12 months), (4) Unsecured financial creditors, (5) Government dues, (6) Other unsecured creditors, (7) Equity shareholders.',
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
