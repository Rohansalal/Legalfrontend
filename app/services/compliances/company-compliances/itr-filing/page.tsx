'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function ITRFilingPage() {
  const data = {
    title: 'ITR Filing for Businesses',
    description:
      'Expert Income Tax Return filing for companies (ITR-6), LLPs and firms (ITR-5), and proprietorships (ITR-3). Tax audit under Section 44AB, advance tax computation, and maximum refund optimization.',
    heroBadges: ['ITR-5 / ITR-6 Experts', 'Tax Audit Specialists', 'Advance Tax Planning'],
    introTitle: 'What is Business ITR Filing?',
    introContent: (
      <p>
        Every business entity in India — whether a company, LLP, partnership firm, or proprietorship — must file an Income Tax Return (ITR) every year under the Income Tax Act, 1961. The applicable form depends on the type of entity: ITR-6 for companies (other than those claiming Section 11 exemption), ITR-5 for LLPs, partnership firms, and AOP/BOIs, and ITR-3 for proprietorships and individual partners with business income. The due date for entities requiring tax audit under Section 44AB is 31 October (extended at times). Non-audit businesses must file by 31 July. Failure to file on time results in a late fee of up to ₹10,000 under Section 234F, loss of carried-forward losses, and interest under Sections 234A, 234B, and 234C. Tax planning through advance tax, deductions under Chapter VI-A, and presumptive taxation under Section 44AD/44ADA can significantly reduce tax liability.
      </p>
    ),
    detailsTitle: 'Business ITR Filing — Key Aspects',
    details: [
      {
        title: 'ITR-6 for Companies',
        desc: 'Mandatory for all companies (Pvt. Ltd., Public Ltd., OPC) except Section 25/8 companies claiming Section 11. Due by 31 October (tax audit cases).',
        icon: Building2,
      },
      {
        title: 'ITR-5 for LLPs & Firms',
        desc: 'Filed by LLPs, partnership firms, AOP/BOI. Taxed at 30% flat rate plus surcharge/cess. Partner remuneration and interest deductible under Section 40(b).',
        icon: Briefcase,
      },
      {
        title: 'Tax Audit under Section 44AB',
        desc: 'Mandatory for businesses with turnover above ₹1 crore (₹10 crore for high-digital). Form 3CA/3CB with Form 3CD — 44 specific disclosure clauses.',
        icon: FileSearch,
      },
      {
        title: 'Advance Tax & TDS',
        desc: 'Pay advance tax in 4 installments. Deduct TDS on salary, professional fees, rent, and other payments. Reconcile TDS with Form 26AS and AIS.',
        icon: TrendingUp,
      },
    ],
    requirements: [
      'PAN of the company/LLP/firm',
      'Audited financial statements (if tax audit applicable)',
      'Form 26AS and Annual Information Statement (AIS)',
      'TDS certificates received (Form 16A)',
      'GST returns for cross-verification of turnover',
      'Advance tax challans paid during the year',
      'Previous year ITR acknowledgment (ITR-V)',
      'Details of capital gains (if any assets sold)',
    ],
    processTitle: 'How We File ITR for Businesses',
    processIntro:
      'Our CA team handles the complete ITR preparation, tax audit, and e-filing process with accuracy and within deadlines.',
    processSteps: [
      {
        title: 'Tax Audit & Books Finalization',
        desc: 'Finalize books of accounts. Conduct tax audit if threshold applies. Prepare Form 3CA/3CB with Form 3CD covering all 44 prescribed clauses.',
        icon: FileSearch,
      },
      {
        title: 'Compute Taxable Income & Tax Liability',
        desc: 'Compute taxable income after all allowable deductions. Apply MAT/AMT if applicable. Determine final tax liability after TDS credit and advance tax.',
        icon: UserCheck,
      },
      {
        title: 'Pay Self-Assessment Tax',
        desc: 'Pay any balance self-assessment tax via Challan 280 on the Income Tax portal before filing. Interest under Section 234B applies if advance tax shortfall exists.',
        icon: FileCheck,
      },
      {
        title: 'E-File ITR and Verify',
        desc: 'File the applicable ITR form (ITR-3/5/6) on the Income Tax e-filing portal. Verify via DSC (mandatory for companies/LLPs) or EVC within 30 days.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We provide detailed tax computation sheets and suggest legal tax-saving strategies before filing to minimize your effective tax rate.',
    documents: [
      {
        category: 'Financial Records',
        list: [
          'Audited Balance Sheet and P&L Account',
          'Tax audit report (Form 3CA/3CB + 3CD if applicable)',
          'Depreciation schedule',
        ],
      },
      {
        category: 'Income & TDS Records',
        list: [
          'Form 26AS / Annual Information Statement (AIS)',
          'TDS certificates received (Form 16A)',
          'Bank interest certificates',
        ],
      },
      {
        category: 'Tax Payment Records',
        list: [
          'Advance tax challans (June, Sept, Dec, March)',
          'Self-assessment tax challan',
          'Previous year ITR and carry-forward loss details',
        ],
      },
    ],
    compliance: [
      {
        title: 'MAT / AMT Compliance',
        desc: 'Companies must pay Minimum Alternate Tax (MAT) at 15% on book profits if regular tax is lower. LLPs are subject to AMT (Alternate Minimum Tax).',
      },
      {
        title: 'Transfer Pricing Compliance',
        desc: 'Companies with international transactions or specified domestic transactions must comply with transfer pricing regulations and file Form 3CEB.',
      },
      {
        title: 'Carry Forward of Losses',
        desc: 'Business losses can be carried forward for 8 assessment years. Unabsorbed depreciation can be carried forward indefinitely — but only if ITR is filed on time.',
      },
      {
        title: 'CSR Deduction Limits',
        desc: 'CSR expenditure is not deductible as a business expense under Section 37 of the Income Tax Act. However, donations to eligible entities may qualify under Section 80G.',
      },
    ],
    faqs: [
      {
        q: 'What is the due date for filing ITR for a company?',
        a: 'Companies must file ITR-6 by 31 October if a tax audit is required, or by 31 July otherwise. If transfer pricing is involved, the deadline is 30 November.',
      },
      {
        q: 'Can a company file a belated return?',
        a: 'Yes. A belated return can be filed up to 31 December of the assessment year (3 months before the end of the assessment year). However, interest under Section 234A and a late fee of ₹10,000 under Section 234F applies.',
      },
      {
        q: 'What is the corporate tax rate for domestic companies?',
        a: 'Domestic companies pay income tax at 22% (base rate) under Section 115BAA, plus 10% surcharge and 4% health &amp; education cess — effective rate of approximately 25.17%. New manufacturing companies can opt for 15% rate under Section 115BAB.',
      },
      {
        q: 'Is tax audit mandatory for all LLPs?',
        a: 'Tax audit under Section 44AB is required for an LLP whose turnover exceeds ₹1 crore (business) or ₹50 lakh (professional services) in the financial year.',
      },
      {
        q: 'What is Section 44AD presumptive taxation?',
        a: 'Under Section 44AD, eligible small businesses with turnover up to ₹2 crore can declare 8% (6% for digital receipts) of turnover as deemed profit, without maintaining detailed books or tax audit.',
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
