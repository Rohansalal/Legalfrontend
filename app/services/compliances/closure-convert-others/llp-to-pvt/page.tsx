'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function LLPToPvtPage() {
  const data = {
    title: 'Convert LLP to Private Limited Company',
    description:
      'Complete conversion of LLP to Private Limited Company — creditor NOC, FiLLiP/SPICe+ filing, ROC approval, transfer of assets and liabilities, minimum 2 directors and share capital structuring.',
    heroBadges: ['LLP to Pvt. Ltd. Experts', 'Creditor NOC Handling', 'Asset Transfer Compliance'],
    introTitle: 'What is Conversion of LLP to Pvt. Ltd.?',
    introContent: (
      <p>
        Converting an LLP to a Private Limited Company allows partners to benefit from the corporate advantages of a company — limited liability as shareholders, ability to raise equity funding, ESOP issuance, and a more structured governance framework attractive to institutional investors. The conversion process is governed by Section 366–374 of the Companies Act, 2013 and Schedule III thereto. The process requires: obtaining a No Objection Certificate (NOC) from all secured creditors and partners; publishing notice in a newspaper about the intended conversion; filing the application for incorporation using SPICe+ or the applicable form with the ROC; and obtaining a fresh Certificate of Incorporation. The LLP is then deemed dissolved without winding up, and all assets, liabilities, employees, and contracts automatically transfer to the new company. All partners become shareholders in proportion to their LLP contribution, unless otherwise agreed.
      </p>
    ),
    detailsTitle: 'Key Aspects of LLP to Company Conversion',
    details: [
      {
        title: 'Creditor NOC Requirement',
        desc: 'All secured creditors and unsecured creditors (if any objection) must provide No Objection for the conversion. Creditor consent is a prerequisite for ROC filing.',
        icon: ShieldCheck,
      },
      {
        title: 'Newspaper Publication',
        desc: 'Publish conversion notice in 2 newspapers (1 English, 1 vernacular) in the state of the LLP\'s registered office to invite objections from creditors and public.',
        icon: Globe,
      },
      {
        title: 'Minimum 2 Directors & Share Capital',
        desc: 'The new Pvt. Ltd. must have minimum 2 directors and 2 shareholders. All LLP partners become shareholders proportional to their contribution unless otherwise agreed.',
        icon: Users,
      },
      {
        title: 'Asset & Liability Transfer',
        desc: 'On conversion, all LLP assets, liabilities, agreements, and employees transfer to the new company by operation of law. No separate transfer deed is required.',
        icon: TrendingUp,
      },
    ],
    requirements: [
      'LLP Agreement and all amendments',
      'LLP Certificate of Incorporation (LLPIN)',
      'Audited Financial Statements of LLP',
      'No Objection Certificate from all secured creditors',
      'Consent of all partners to convert',
      'List of assets and liabilities to be transferred',
      'KYC documents for all proposed directors',
      'New company name availability (SPICe+ Part A)',
    ],
    processTitle: 'How to Convert LLP to Pvt. Ltd.',
    processIntro:
      'The conversion involves multiple parallel tracks — creditor NOC, newspaper notice, and ROC filing. Our team coordinates all steps.',
    processSteps: [
      {
        title: 'Partners Resolution & Creditor NOC',
        desc: 'Pass resolution of all partners consenting to conversion. Obtain NOC from all secured creditors. Issue individual intimation to creditors about the proposed conversion.',
        icon: FileSearch,
      },
      {
        title: 'Newspaper Notice Publication',
        desc: 'Publish notice in 2 newspapers within 21 days of filing application. Wait for objection period. Address any creditor objections before proceeding.',
        icon: UserCheck,
      },
      {
        title: 'File Incorporation Application',
        desc: 'File SPICe+ with all required documents — MOA, AOA, shareholder details, director KYC, registered office proof. Pay applicable fees and stamp duty.',
        icon: FileCheck,
      },
      {
        title: 'Receive COI & Close LLP',
        desc: 'ROC issues Certificate of Incorporation for the new Pvt. Ltd. LLP is deemed dissolved. Transfer tax registrations, bank accounts, and contracts to the new entity.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'Post-conversion, we assist with PAN/TAN update, GST registration transfer, bank account update, and first-year compliance setup for the new company.',
    documents: [
      {
        category: 'LLP Documents',
        list: [
          'LLP Certificate of Incorporation',
          'LLP Agreement (latest version)',
          'Audited Financial Statements',
        ],
      },
      {
        category: 'Creditor & Partner Documents',
        list: [
          'NOC from all secured creditors',
          'Consent of all LLP partners',
          'List of assets and liabilities',
        ],
      },
      {
        category: 'New Company Documents',
        list: [
          'Draft MOA and AOA for new Pvt. Ltd.',
          'KYC of proposed directors',
          'Registered office proof for new company',
        ],
      },
    ],
    compliance: [
      {
        title: 'LLP Filing Before Conversion',
        desc: 'Ensure all pending LLP annual returns (Form 11 and Form 8) are filed up to date before initiating conversion. No pending defaults should exist.',
      },
      {
        title: 'Income Tax Continuity',
        desc: 'Tax losses and unabsorbed depreciation of the LLP can be carried forward by the new company under Section 72A if all conditions of the conversion are met.',
      },
      {
        title: 'GST Registration Transfer',
        desc: 'Apply for GST amendment or fresh GST registration for the new company. Cancel the old LLP\'s GSTIN after ensuring all pending returns are filed.',
      },
      {
        title: 'Contract Novation',
        desc: 'Although assets and liabilities transfer by law, key commercial contracts (especially those with "change of control" clauses) may require explicit novation with the counter-party.',
      },
    ],
    faqs: [
      {
        q: 'Do LLP partners become shareholders in the new company?',
        a: 'Yes. By default, all partners of the LLP become shareholders of the new Private Limited Company in proportion to their contribution in the LLP. A different arrangement can be agreed upon mutually.',
      },
      {
        q: 'Is the LLP dissolved automatically after conversion?',
        a: 'Yes. Upon issuance of the Certificate of Incorporation for the new company, the LLP is deemed dissolved without the requirement of formal winding up proceedings.',
      },
      {
        q: 'How long does LLP to Pvt. Ltd. conversion take?',
        a: 'The conversion process typically takes 45–75 days, including the creditor notice period, newspaper publication, and ROC processing time.',
      },
      {
        q: 'Can all LLP\'s tax losses be carried forward to the new company?',
        a: 'Yes, subject to Section 72A conditions — the conversion must be bona fide, the company must continue the same business, and all assets/liabilities must be transferred to the company.',
      },
      {
        q: 'Are there any stamp duty implications on conversion?',
        a: 'Conversion of LLP to company may attract stamp duty in some states on the transfer of immovable property. Movable assets and contracts are generally exempt from stamp duty on conversion.',
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
