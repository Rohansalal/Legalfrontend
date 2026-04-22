'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function CSAuditReportPage() {
  const data = {
    title: 'CS Audit & Secretarial Report Services',
    description:
      'Professional Company Secretary (CS) audit and certification — Secretarial Audit under Section 204, Secretarial Compliance Report under SEBI LODR, Annual Return certification, Form MR-3 filing, and ICSI standards compliance.',
    heroBadges: ['ICSI-Certified CS Professionals', 'Section 204 Secretarial Audit', 'SEBI LODR Reports'],
    introTitle: 'What is a CS Audit & Secretarial Report?',
    introContent: (
      <p>
        A Company Secretary (CS) registered with the Institute of Company Secretaries of India (ICSI) is empowered to conduct Secretarial Audit under Section 204 of the Companies Act, 2013. This is a compliance audit that checks whether a company has complied with all applicable laws — Companies Act, SEBI regulations, FEMA, labour laws, environmental laws, and sectoral regulations. The Secretarial Audit Report is issued in Form MR-3 and must be attached to the Directors Report. It is mandatory for listed companies, Public Limited Companies with paid-up capital above ₹10 crore or turnover above ₹250 crore, and every company with outstanding loans or borrowings above ₹100 crore. For listed companies, the CS also issues the Annual Secretarial Compliance Report under SEBI LODR Regulations, 2015, submitted to the stock exchange by 30 May each year. The CS also certifies Annual Returns (MGT-7 for companies above threshold) and attests various statutory forms filed with MCA.
      </p>
    ),
    detailsTitle: 'Types of CS Audit & Reports',
    details: [
      {
        title: 'Secretarial Audit — Form MR-3',
        desc: 'Mandatory for listed companies, Public Ltd. above ₹10 crore capital or ₹250 crore turnover, and companies with borrowings above ₹100 crore. Reports compliance with all applicable laws.',
        icon: ShieldCheck,
      },
      {
        title: 'Annual Secretarial Compliance Report',
        desc: 'SEBI LODR requirement for listed companies. CS reviews compliance with all SEBI regulations and submits the report to the stock exchange by 30 May.',
        icon: Globe,
      },
      {
        title: 'Annual Return Certification — MGT-7',
        desc: 'CS certification of Annual Return (MGT-7) for companies with paid-up capital above ₹10 crore or turnover above ₹50 crore, instead of board sign-off.',
        icon: FileText,
      },
      {
        title: 'Compliance Certificates & Attestation',
        desc: 'CS issues compliance certificates for bank filings, scheme of arrangement approvals, merger filings (NCLT), FEMA compliance, and various MCA forms.',
        icon: Award,
      },
    ],
    requirements: [
      'Minutes of all Board Meetings and Shareholder Meetings',
      'All MCA forms filed during the year with acknowledgments',
      'MOA, AOA, and all amendments with ROC approval',
      'Statutory registers — Directors, Members, Charges, etc.',
      'SEBI filings and stock exchange correspondence (listed companies)',
      'Directors Report and financial statements',
      'All company secretarial records and compliance files',
      'Related party transaction register and approvals',
    ],
    processTitle: 'How We Conduct CS Audit & Secretarial Reports',
    processIntro:
      'Our practicing CS team conducts thorough secretarial audits following ICSI standards and issues MR-3 reports within the required timelines.',
    processSteps: [
      {
        title: 'Review of Statutory Records',
        desc: 'Examine all statutory registers, meeting minutes, MCA filings, and secretarial compliance records for the financial year under review.',
        icon: FileSearch,
      },
      {
        title: 'Compliance Assessment',
        desc: 'Verify compliance with Companies Act, SEBI regulations, FEMA, RBI directions, and applicable sectoral laws. Identify non-compliances and qualifications.',
        icon: UserCheck,
      },
      {
        title: 'Draft MR-3 Report',
        desc: 'Prepare the Secretarial Audit Report in Form MR-3. Include observations, qualifications, and management comments. Get management responses for qualifications.',
        icon: FileCheck,
      },
      {
        title: 'Issue Report & Submit to SEBI/MCA',
        desc: 'Sign and issue Form MR-3. Attach to Directors Report for filing with ROC. Submit Annual Secretarial Compliance Report to stock exchange (listed companies).',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'Our CS team also provides advisory on governance gaps, board composition, and regulatory changes impacting your secretarial compliance.',
    documents: [
      {
        category: 'Meeting Records',
        list: [
          'Board Meeting minutes for all meetings during the year',
          'AGM/EGM notices and minutes',
          'Committee meeting records (Audit, NRC, SRC)',
        ],
      },
      {
        category: 'MCA Filing Records',
        list: [
          'All forms filed with MCA during the year',
          'DIR-12, SH-7, MGT-14, and other filings',
          'ROC approval receipts',
        ],
      },
      {
        category: 'Compliance Documents',
        list: [
          'SEBI filings and stock exchange submissions',
          'FEMA compliance certificates',
          'Statutory registers (up to date)',
        ],
      },
    ],
    compliance: [
      {
        title: 'Applicability of Secretarial Audit',
        desc: 'Secretarial Audit is mandatory for: (1) Listed companies, (2) Public Ltd. with paid-up capital above ₹10 crore or turnover above ₹250 crore, (3) Companies with borrowings above ₹100 crore.',
      },
      {
        title: 'MR-3 Qualifications',
        desc: 'If the CS observes non-compliance during the audit, they must qualify the MR-3 report. Management must provide an explanation for qualifications in the Directors Report.',
      },
      {
        title: 'ICSI Peer Review',
        desc: 'Practicing CS firms issuing Secretarial Audit Reports must undergo ICSI peer review to ensure quality of audit. Peer review is mandatory for listed company audits.',
      },
      {
        title: 'Annual CS Compliance Programme',
        desc: 'Whole-time CS of companies must ensure all secretarial compliance obligations are met throughout the year — board meeting quorum, disclosures, filing deadlines, etc.',
      },
    ],
    faqs: [
      {
        q: 'Who can conduct a Secretarial Audit?',
        a: 'Only a Practicing Company Secretary (PCS) holding a valid Certificate of Practice issued by ICSI can conduct a Secretarial Audit and issue Form MR-3.',
      },
      {
        q: 'What laws are covered in a Secretarial Audit?',
        a: 'Secretarial Audit covers compliance with: Companies Act 2013, SEBI Act and regulations, FEMA, RBI Act (for NBFCs), labour laws, environment laws, competition law, and all sector-specific regulations applicable to the company.',
      },
      {
        q: 'Is Secretarial Audit required for all private companies?',
        a: 'No. Secretarial Audit is not mandatory for private companies unless they are subsidiaries of listed companies or meet other prescribed thresholds. However, private companies may voluntarily get it done.',
      },
      {
        q: 'What is the Annual Secretarial Compliance Report under SEBI LODR?',
        a: 'Listed companies must have a Practicing CS conduct a review of all SEBI regulations compliance and submit the Annual Secretarial Compliance Report to the stock exchange within 60 days of the financial year end (by 30 May).',
      },
      {
        q: 'What happens if a Secretarial Audit is not conducted?',
        a: 'Non-conducting of Secretarial Audit by a company required to do so is an offence under Section 204 of the Companies Act. The company and every officer in default are liable to a fine of up to ₹5 lakh.',
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
