'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function DematerializationOfSharesPage() {
  const data = {
    title: 'Dematerialization of Shares',
    description:
      'Mandatory demat compliance for private limited companies under Companies Act amendment 2023 — ISIN allotment, Registrar & Transfer Agent engagement, NSDL/CDSL connectivity, and physical-to-demat conversion assistance.',
    heroBadges: ['ISIN Allotment Experts', 'NSDL & CDSL Connectivity', 'Private Co. Demat Compliance'],
    introTitle: 'What is Dematerialization of Shares?',
    introContent: (
      <p>
        Dematerialization (Demat) is the process of converting physical share certificates into electronic form held in a Demat account maintained by a Depository Participant (DP) with NSDL (National Securities Depository Limited) or CDSL (Central Depository Services Limited). The MCA amendment in October 2023 under Companies (Prospectus and Allotment of Securities) Second Amendment Rules, 2023 made it mandatory for all private limited companies (other than small companies and government companies) to facilitate dematerialization of their securities. The company must obtain an ISIN (International Securities Identification Number) for each class of securities. It must also appoint a Registrar and Transfer Agent (RTA) registered with SEBI. Existing physical share holders must convert their shares to demat form before any transfer or new issuance is effected. This was previously only applicable to listed companies and public companies.
      </p>
    ),
    detailsTitle: 'Key Requirements for Share Dematerialization',
    details: [
      {
        title: 'ISIN Allotment',
        desc: 'Apply to NSDL or CDSL for ISIN for each class of securities. ISIN is the unique identifier for the company\'s shares in the depository system.',
        icon: Globe,
      },
      {
        title: 'SEBI-Registered RTA Appointment',
        desc: 'Appoint a SEBI-registered Registrar and Transfer Agent (RTA) for processing demat requests, maintaining records, and interfacing with depositories.',
        icon: UserCheck,
      },
      {
        title: 'Tripartite Agreement',
        desc: 'Execute a Tripartite Agreement between the company, RTA, and the Depository (NSDL or CDSL) to establish the framework for demat services.',
        icon: FileText,
      },
      {
        title: 'Physical Share Conversion',
        desc: 'Existing shareholders must submit physical share certificates along with DRF (Demat Request Form) to their Depository Participant for conversion to demat form.',
        icon: ShieldCheck,
      },
    ],
    requirements: [
      'Certificate of Incorporation and PAN of the company',
      'List of all shareholders and their shareholding details',
      'Physical share certificates to be dematerialized',
      'DSC of authorized director for ISIN application',
      'Board Resolution for dematerialization of shares',
      'Agreement with SEBI-registered RTA',
      'Connectivity application to NSDL or CDSL',
      'Current Register of Members (MGT-1)',
    ],
    processTitle: 'How to Dematerialize Company Shares',
    processIntro:
      'The demat process for private companies involves regulatory filings, depository registration, and shareholder coordination. Our team manages it end-to-end.',
    processSteps: [
      {
        title: 'Obtain ISIN from NSDL/CDSL',
        desc: 'Apply to NSDL or CDSL for ISIN allotment. Submit company details, share capital structure, and board resolution. ISIN allotted within 7–10 working days.',
        icon: FileSearch,
      },
      {
        title: 'Appoint RTA & Execute Tripartite Agreement',
        desc: 'Engage a SEBI-registered Registrar & Transfer Agent. Execute tripartite agreement between the company, RTA, and the depository to enable demat processing.',
        icon: UserCheck,
      },
      {
        title: 'Intimate Shareholders',
        desc: 'Notify all shareholders about the mandatory demat requirement. Assist them with opening Demat accounts (if not existing) and submitting DRF to their DP.',
        icon: FileCheck,
      },
      {
        title: 'Process DRF & Update Records',
        desc: 'The RTA processes Demat Request Forms. Physical shares are cancelled and credited to shareholders\' Demat accounts. Update the register of members.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We coordinate with shareholders, DPs, RTAs, and depositories to ensure 100% dematerialization compliance for your company.',
    documents: [
      {
        category: 'Company Documents',
        list: [
          'Certificate of Incorporation',
          'PAN of the company',
          'Board Resolution for demat compliance',
        ],
      },
      {
        category: 'Shareholder Documents',
        list: [
          'Physical share certificates',
          'Demat Request Form (DRF) from each shareholder',
          'Demat account details of shareholders',
        ],
      },
      {
        category: 'Depository Documents',
        list: [
          'ISIN application form',
          'Tripartite agreement (Company, RTA, Depository)',
          'RTA appointment letter',
        ],
      },
    ],
    compliance: [
      {
        title: 'Mandatory for Private Companies (Non-Small)',
        desc: 'As per the 2023 amendment, all private limited companies except small companies and government companies must comply with mandatory demat of securities.',
      },
      {
        title: 'No Transfer Without Demat',
        desc: 'No transfer of securities in a private company subject to demat rules can be effected unless shares are held in demat form. Physical transfers are no longer valid.',
      },
      {
        title: 'New Issue in Demat Only',
        desc: 'All new securities issued after the demat compliance deadline must be in electronic (demat) form only. Physical share certificates cannot be issued.',
      },
      {
        title: 'Annual Reconciliation',
        desc: 'Maintain reconciliation between the physical share register and the depository records at all times. Discrepancies must be resolved with the RTA promptly.',
      },
    ],
    faqs: [
      {
        q: 'Is dematerialization mandatory for all private companies?',
        a: 'As per the October 2023 amendment, all private companies other than small companies (paid-up capital below ₹4 crore and turnover below ₹40 crore) are required to comply with dematerialization.',
      },
      {
        q: 'What is a small company under the Companies Act?',
        a: 'A small company is one whose paid-up share capital does not exceed ₹4 crore and whose turnover does not exceed ₹40 crore as per the latest amended thresholds under the Companies Act, 2013.',
      },
      {
        q: 'What is an ISIN and why is it needed?',
        a: 'ISIN (International Securities Identification Number) is a 12-character alphanumeric code that uniquely identifies a security. Every class of shares requires a separate ISIN for demat credit in depository accounts.',
      },
      {
        q: 'Can a shareholder refuse to dematerialize?',
        a: 'For companies covered under the mandatory demat rules, shares can only be transferred or new shares can only be issued in demat form. A shareholder\'s refusal does not exempt the company from compliance.',
      },
      {
        q: 'How long does the dematerialization process take?',
        a: 'The entire process — ISIN allotment, RTA appointment, tripartite agreement, and physical-to-demat conversion — typically takes 30–60 days depending on shareholder cooperation.',
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
