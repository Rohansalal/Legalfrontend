'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function FundRaisingPage() {
  const data = {
    title: 'Fund Raising for Companies',
    description:
      'End-to-end fund raising compliance — rights issue, preferential allotment (PAS-3), private placement (PAS-4), ESOP, venture capital, and angel investment compliance for private and public companies in India.',
    heroBadges: ['VC & Angel Compliance', 'PAS-3 & PAS-4 Experts', 'ESOP Structuring'],
    introTitle: 'What are Fund Raising Options for Companies?',
    introContent: (
      <p>
        Companies in India can raise funds through several routes under the Companies Act, 2013 and SEBI regulations. The primary methods are: (1) Rights Issue under Section 62(1)(a) — offering shares to existing shareholders in proportion to their holding; (2) Preferential Allotment under Section 42/62(1)(c) — issuing shares to a select group of persons at a price fixed per SEBI valuation norms; (3) Private Placement under Section 42 — offering shares to up to 200 persons per year through a Private Placement Offer Letter (Form PAS-4); (4) ESOP (Employee Stock Option Plan) under Section 62(1)(b) — incentivizing employees with options to purchase shares at a future date. For startups, angel investment under DPIIT-recognised angel networks and venture capital investment through SEBI-registered AIFs are common routes. Each route has specific compliance requirements including board/shareholder approvals, valuation, offer documents, and post-allotment ROC filings.
      </p>
    ),
    detailsTitle: 'Fund Raising Routes & Compliance',
    details: [
      {
        title: 'Rights Issue & Preferential Allotment',
        desc: 'Rights Issue: Offer new shares to existing shareholders pro-rata. Preferential Allotment: Issue shares to specific persons — requires Special Resolution, SEBI valuation, and PAS-3 filing.',
        icon: TrendingUp,
      },
      {
        title: 'Private Placement — PAS-4',
        desc: 'Private Placement allows raising funds from up to 200 identified persons per year. Requires Board and Special Resolution, PAS-4 offer letter, and PAS-3 allotment return.',
        icon: FileText,
      },
      {
        title: 'ESOP — Employee Stock Option Plan',
        desc: 'Grant options to employees to purchase shares at a predetermined price. Requires Compensation Committee, ESOP scheme document, Special Resolution, and periodic disclosures.',
        icon: Users,
      },
      {
        title: 'VC / Angel Investment Compliance',
        desc: 'Receive investment from DPIIT-recognised angel investors or SEBI-registered Alternative Investment Funds (AIFs). Requires share subscription agreement and FEMA compliance for foreign investment.',
        icon: Globe,
      },
    ],
    requirements: [
      'Board Resolution approving the fund raising mode',
      'Special Resolution at EGM (for preferential allotment and private placement)',
      'Valuation Report from Registered Valuer / Investment Banker',
      'Private Placement Offer Letter — Form PAS-4 (for private placement)',
      'Offer cum Application Form for subscribers',
      'Separate bank account for private placement funds',
      'Post-allotment return in Form PAS-3',
      'Updated shareholding pattern post-allotment',
    ],
    processTitle: 'How to Raise Funds Through Share Issuance',
    processIntro:
      'Each fund raising route has a distinct legal process. Our team guides you through the correct structure and ensures full compliance.',
    processSteps: [
      {
        title: 'Determine Structure & Valuation',
        desc: 'Select the appropriate fund raising route. Get a Fair Market Value (FMV) or SEBI-prescribed valuation from a Registered Valuer or Merchant Banker.',
        icon: FileSearch,
      },
      {
        title: 'Board & EGM Approvals',
        desc: 'Pass Board Resolution. Hold EGM to pass Special Resolution for preferential allotment, private placement, or ESOP scheme. Prepare and dispatch offer letter (PAS-4).',
        icon: UserCheck,
      },
      {
        title: 'Allot Shares & Receive Funds',
        desc: 'Collect applications and funds in a dedicated bank account. Pass Board Resolution for allotment within 60 days of receiving funds. Issue share certificates/demat credit.',
        icon: FileCheck,
      },
      {
        title: 'File PAS-3 & Update Records',
        desc: 'File allotment return in Form PAS-3 with ROC within 30 days of allotment. Update the Register of Members and shareholding pattern. File with SEBI if listed.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'For foreign investment, we ensure FEMA compliance — reporting to RBI via FC-GPR within 30 days of allotment, KYC, and inward remittance certification.',
    documents: [
      {
        category: 'Approval Documents',
        list: [
          'Board Resolution for fund raising',
          'EGM Notice and Special Resolution',
          'Valuation Report from Registered Valuer',
        ],
      },
      {
        category: 'Offer Documents',
        list: [
          'Private Placement Offer Letter — PAS-4 (if applicable)',
          'Offer cum Application Form',
          'KYC documents of investors',
        ],
      },
      {
        category: 'Post-Allotment Documents',
        list: [
          'Board Resolution for allotment',
          'Form PAS-3 with ROC',
          'Allotment letter and share certificates',
        ],
      },
    ],
    compliance: [
      {
        title: 'PAS-3 Filing within 30 Days',
        desc: 'Form PAS-3 (Allotment Return) must be filed with ROC within 30 days of allotment. Late filing attracts enhanced fees and regulatory scrutiny.',
      },
      {
        title: 'FEMA Reporting for Foreign Investment',
        desc: 'Foreign investment under the Automatic Route must be reported via FC-GPR to RBI within 30 days of allotment. FDI must be in permitted sectors at or above FMV.',
      },
      {
        title: 'ESOP Disclosure in Directors Report',
        desc: 'Annual Directors Report must disclose details of ESOP scheme — options granted, vested, exercised, and lapsed — as per Rule 12(9) of Companies Act Rules.',
      },
      {
        title: 'Anti-Money Laundering — Separate Bank Account',
        desc: 'Private placement funds must be received in a separate designated bank account. Funds cannot be used before the allotment is completed.',
      },
    ],
    faqs: [
      {
        q: 'What is the maximum number of persons for private placement?',
        a: 'Under Section 42 of the Companies Act, private placement offers can be made to a maximum of 200 identified persons per financial year, excluding Qualified Institutional Buyers (QIBs) and employees under ESOP.',
      },
      {
        q: 'Is valuation mandatory for preferential allotment?',
        a: 'Yes. For preferential allotment to non-promoters in public companies and most cases in private companies, a Fair Market Value certificate from a Registered Valuer or SEBI-registered Merchant Banker is mandatory.',
      },
      {
        q: 'What is the difference between rights issue and private placement?',
        a: 'Rights Issue offers shares to existing shareholders in proportion to their current holdings. Private Placement offers shares to specifically identified persons who may or may not be existing shareholders.',
      },
      {
        q: 'Can an NRI invest in a Pvt. Ltd. company?',
        a: 'Yes. NRIs can invest under the FDI route (as foreign investment) or under Schedule 4 of FEMA (NRI investment on non-repatriation basis). FEMA compliance and RBI reporting are required.',
      },
      {
        q: 'What is an Alternative Investment Fund (AIF)?',
        a: 'An AIF is a privately pooled investment vehicle registered with SEBI under the AIF Regulations, 2012. Categories include VC funds (Category I), PE funds (Category II), and hedge funds (Category III). They invest in startups and companies under defined structures.',
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
