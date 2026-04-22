'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function AdvocateAuditReportPage() {
  const data = {
    title: 'Advocate Audit & Legal Report Services',
    description:
      'Professional legal audit services by qualified advocates — contract legal audit, property title verification reports, due diligence reports, litigation audit, and compliance legal opinions for businesses and investors.',
    heroBadges: ['Legal Due Diligence', 'Title Verification Reports', 'Contract Compliance Audit'],
    introTitle: 'What is an Advocate Audit & Legal Report?',
    introContent: (
      <p>
        An Advocate (lawyer) enrolled with a State Bar Council under the Advocates Act, 1961 is qualified to conduct legal audits, title verification, due diligence, and issue legal opinions on behalf of businesses, financial institutions, and investors. A Legal Audit (also called Compliance Audit) involves a systematic review of a company\'s contracts, agreements, legal obligations, and regulatory compliance from a legal perspective — distinct from financial audits done by CAs or secretarial audits done by CS. Title Verification Reports (TVR) are mandatory for banks and NBFCs before disbursing property loans. Legal Due Diligence Reports are critical before mergers, acquisitions, private equity investment, and real estate transactions. A Litigation Audit reviews the status of all pending court cases, arbitrations, and regulatory proceedings of a company. Legal opinions by advocates are relied upon in high-value transactions, corporate restructuring, and board deliberations.
      </p>
    ),
    detailsTitle: 'Types of Advocate Audit & Legal Reports',
    details: [
      {
        title: 'Legal Due Diligence Report',
        desc: 'Comprehensive review of a target company\'s legal standing — contracts, licenses, litigations, IP ownership, regulatory compliance — for M&A, private equity, or IPO transactions.',
        icon: FileSearch,
      },
      {
        title: 'Title Verification Report (TVR)',
        desc: 'Search and verification of property title for banks, NBFCs, and buyers. Includes ownership chain, encumbrances, mutation records, and legal opinion on clear title.',
        icon: Building2,
      },
      {
        title: 'Contract Legal Audit',
        desc: 'Review of all commercial contracts — vendor agreements, customer contracts, loan agreements, lease deeds — for legal risk, enforceability, and compliance with applicable laws.',
        icon: FileText,
      },
      {
        title: 'Litigation Audit & Compliance Opinion',
        desc: 'Audit of all pending litigation, arbitration, NCLT/NCLAT proceedings, and regulatory orders. Provides a contingent liability assessment and risk opinion.',
        icon: Scale,
      },
    ],
    requirements: [
      'All material contracts and agreements of the company',
      'Property documents, title deeds, and encumbrance certificates',
      'List of ongoing and past litigations with court details',
      'Regulatory licenses, permits, and approvals',
      'ROC documents — MOA, AOA, shareholder agreements',
      'Employment agreements and HR policies',
      'IP registrations — trademarks, patents, copyrights',
      'Relevant correspondence with regulatory authorities',
    ],
    processTitle: 'How We Conduct Advocate Audit & Legal Reports',
    processIntro:
      'Our empanelled advocates follow a structured legal review methodology to provide accurate, actionable reports for your business and investment decisions.',
    processSteps: [
      {
        title: 'Scope Definition & Document Collection',
        desc: 'Define audit scope based on purpose — M&A due diligence, property loan, compliance review. Collect all relevant legal documents, contracts, and filings.',
        icon: FileSearch,
      },
      {
        title: 'Legal Review & Risk Identification',
        desc: 'Advocates review all documents for legal validity, enforceability, compliance with law, and existing or potential legal risks. Conduct searches at courts, registries, and regulatory databases.',
        icon: UserCheck,
      },
      {
        title: 'Draft Legal Audit / Due Diligence Report',
        desc: 'Prepare detailed Legal Audit Report or Due Diligence Report covering findings, risks, non-compliances, contingent liabilities, and recommendations.',
        icon: FileCheck,
      },
      {
        title: 'Issue Legal Opinion',
        desc: 'Issue a signed Legal Opinion summarizing key findings, legal standing, risk level (Red/Amber/Green), and recommended actions. Delivered in business-ready format.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'For property transactions, our advocates also register title documents, draft sale deeds, and obtain encumbrance certificates as part of a complete legal service.',
    documents: [
      {
        category: 'Corporate Documents',
        list: [
          'MOA, AOA, shareholder agreements',
          'Board resolutions and minutes',
          'Regulatory approvals and licenses',
        ],
      },
      {
        category: 'Property Documents',
        list: [
          'Title deed and sale deed',
          'Encumbrance certificate (EC)',
          'Revenue records and mutation certificate',
        ],
      },
      {
        category: 'Contract & Litigation Documents',
        list: [
          'All active commercial contracts',
          'Pending court case details and cause list',
          'Demand notices, legal notices received',
        ],
      },
    ],
    compliance: [
      {
        title: 'Bar Council Registration',
        desc: 'Legal opinions and audit reports are valid only when issued by an Advocate enrolled with a State Bar Council under the Advocates Act, 1961 and holding a valid Certificate of Practice.',
      },
      {
        title: 'Confidentiality Obligations',
        desc: 'Advocates are bound by professional confidentiality (attorney-client privilege) under the Bar Council of India Rules. All information shared is strictly confidential.',
      },
      {
        title: 'Due Diligence for RBI-Regulated Entities',
        desc: 'Banks and NBFCs are required to obtain legal due diligence reports and title verification reports from empanelled lawyers before sanction of secured loans above prescribed limits.',
      },
      {
        title: 'SEBI Requirements for IPO Legal Audit',
        desc: 'SEBI (ICDR) Regulations require legal due diligence by an independent legal counsel as part of IPO preparation. The red herring prospectus must disclose all material litigations.',
      },
    ],
    faqs: [
      {
        q: 'What is a Legal Due Diligence Report?',
        a: 'A Legal Due Diligence Report is a comprehensive assessment of a company\'s legal standing prepared by advocates for investors, acquirers, or lenders. It covers corporate structure, contracts, litigations, IP, regulatory compliance, and material risks.',
      },
      {
        q: 'Who needs a Title Verification Report?',
        a: 'Banks, NBFCs, and HFCs require a Title Verification Report from an empanelled advocate before disbursing any property-backed loan. Property buyers also commission TVRs for independent legal clarity on title.',
      },
      {
        q: 'What is the difference between a legal audit and a secretarial audit?',
        a: 'A Legal Audit focuses on contracts, title, litigation risks, and compliance with general and sector-specific laws. A Secretarial Audit (Form MR-3) focuses specifically on corporate law compliance — board governance, MCA filings, and SEBI regulations.',
      },
      {
        q: 'Can an advocate represent a company in court after conducting a legal audit?',
        a: 'Yes. Unlike statutory auditors (CA/CS) who must be independent, an advocate can continue to represent or advise the company even after conducting a legal audit, unless there is a specific conflict of interest.',
      },
      {
        q: 'Is a legal opinion required for all M&A transactions?',
        a: 'While not mandated by a single law, independent legal opinions are standard practice in M&A transactions, required by banks for acquisition financing, and expected by institutional investors and SEBI for listed company transactions.',
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
