'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function AnnualPublicLtdPage() {
  const data = {
    title: 'Annual Compliances for Public Limited Company',
    description:
      'Comprehensive annual compliance management for Public Limited Companies — MGT-7, AOC-4, AGM within 6 months, SEBI obligations for listed entities, and board governance requirements.',
    heroBadges: ['SEBI & ROC Compliant', 'Listed & Unlisted Companies', 'Expert CA & CS Team'],
    introTitle: 'What are Annual Compliances for a Public Limited Company?',
    introContent: (
      <p>
        A Public Limited Company registered under the Companies Act, 2013 carries significantly higher compliance obligations than a Private Limited Company due to its ability to invite public investment. It must file Form MGT-7 (Annual Return) and Form AOC-4 (Financial Statements) with the Registrar of Companies (ROC) each year. The Annual General Meeting (AGM) must be held within 6 months of the financial year end. Listed Public Companies face additional obligations under SEBI (LODR) Regulations, 2015, including quarterly financial disclosures, corporate governance reports, and related party transaction disclosures. The board must have a minimum of 3 directors and comply with audit committee, nomination &amp; remuneration committee, and stakeholder relationship committee requirements under the Companies Act and SEBI regulations.
      </p>
    ),
    detailsTitle: 'Key Annual Compliance Obligations',
    details: [
      {
        title: 'AGM Within 6 Months',
        desc: 'Public Limited Companies must hold the AGM within 6 months of financial year end. First AGM must be held within 18 months of incorporation.',
        icon: Clock,
      },
      {
        title: 'MGT-7 & AOC-4 Filing',
        desc: 'File Annual Return (MGT-7) within 60 days of AGM and Financial Statements (AOC-4) within 30 days with detailed disclosures.',
        icon: FileText,
      },
      {
        title: 'SEBI LODR Compliance',
        desc: 'Listed companies must submit quarterly financials, corporate governance reports, shareholding patterns, and reconciliation of share capital to stock exchanges.',
        icon: TrendingUp,
      },
      {
        title: 'Board & Committee Meetings',
        desc: 'Minimum 4 Board Meetings annually, mandatory Audit Committee, NRC, and Stakeholder Relationship Committee for prescribed categories.',
        icon: Users,
      },
    ],
    requirements: [
      'Certificate of Incorporation and MOA/AOA',
      'Audited Financial Statements with Directors Report',
      'DSC of Managing Director and Company Secretary',
      'List of Directors with DIN and KYC compliance status',
      'Shareholding pattern as on record date',
      'Minutes of Board Meetings and AGM',
      'Company Secretary appointment (mandatory for listed/large companies)',
      'SEBI filing credentials (for listed companies)',
    ],
    processTitle: 'How to Complete Annual Compliances for Public Ltd.',
    processIntro:
      'Public Limited compliance is time-sensitive and multi-layered. Our team of CA, CS and legal experts manages the entire annual cycle.',
    processSteps: [
      {
        title: 'Statutory Audit & Directors Report',
        desc: 'Complete the statutory audit by a CA firm. Prepare Directors Report with mandatory disclosures under Section 134 of the Companies Act, 2013.',
        icon: FileSearch,
      },
      {
        title: 'Board Meeting for Financial Approval',
        desc: 'Hold a board meeting to approve audited financials and the Directors Report. Issue AGM notice at least 21 clear days before the meeting date.',
        icon: UserCheck,
      },
      {
        title: 'Conduct AGM & File AOC-4',
        desc: 'Hold the AGM, adopt financials, appoint/reappoint auditor. File AOC-4 on MCA within 30 days of AGM with XBRL data for prescribed companies.',
        icon: FileCheck,
      },
      {
        title: 'File MGT-7 & SEBI Reports',
        desc: 'File the Annual Return (MGT-7) within 60 days of AGM. Submit Corporate Governance Report and Annual Report to stock exchanges if listed.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We maintain a year-round compliance calendar ensuring every deadline — ROC, SEBI, Income Tax — is met without any default.',
    documents: [
      {
        category: 'Incorporation Documents',
        list: [
          'Certificate of Incorporation',
          'MOA and AOA',
          'PAN, TAN of the company',
        ],
      },
      {
        category: 'Financial & Audit Documents',
        list: [
          'Audited Balance Sheet, P&L, Cash Flow Statement',
          'Auditor Report (CARO if applicable)',
          'Directors Report with annexures',
        ],
      },
      {
        category: 'Governance Documents',
        list: [
          'Board Meeting minutes for the year',
          'AGM notice and minutes',
          'Shareholding pattern and register of members',
        ],
      },
    ],
    compliance: [
      {
        title: 'Quarterly SEBI Filings',
        desc: 'Listed companies must submit shareholding pattern, financial results, and corporate governance reports to BSE/NSE every quarter.',
      },
      {
        title: 'XBRL Filing Requirement',
        desc: 'Listed companies and those with paid-up capital above ₹5 crore or turnover above ₹100 crore must file AOC-4 in XBRL format.',
      },
      {
        title: 'Secretarial Audit',
        desc: 'Companies with paid-up capital above ₹10 crore or turnover above ₹250 crore must conduct Secretarial Audit and file Form MR-3.',
      },
      {
        title: 'Cost Audit',
        desc: 'Manufacturing or service companies above prescribed thresholds must conduct Cost Audit under Section 148 and file CRA-4 with MCA.',
      },
    ],
    faqs: [
      {
        q: 'What is the AGM deadline for a Public Limited Company?',
        a: 'The AGM must be held within 6 months of the end of the financial year. For companies following April–March financial year, this means by 30 September each year.',
      },
      {
        q: 'How is a Public Limited Company different from Private in terms of compliance?',
        a: 'Public Limited Companies have more stringent disclosure requirements, mandatory appointment of a Company Secretary (for larger companies), higher board committee requirements, and if listed, extensive SEBI LODR obligations.',
      },
      {
        q: 'Is XBRL filing mandatory for all Public Limited Companies?',
        a: 'XBRL is mandatory for listed companies and unlisted public companies with paid-up capital of ₹5 crore or above, or turnover of ₹100 crore or above.',
      },
      {
        q: 'What happens if a Public Limited Company misses the AGM deadline?',
        a: 'Non-holding of AGM invites a penalty of up to ₹1 lakh on the company and each officer in default under Section 99 of the Companies Act, 2013.',
      },
      {
        q: 'Is a Company Secretary mandatory for a Public Limited Company?',
        a: 'A whole-time Company Secretary is mandatory for listed companies and those with paid-up share capital of ₹10 crore or more under Section 203 of the Companies Act.',
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
