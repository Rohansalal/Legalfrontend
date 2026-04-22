'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function PvtToPublicPage() {
  const data = {
    title: 'Convert Private Limited to Public Limited Company',
    description:
      'Legal assistance to convert your Private Limited Company to a Public Limited Company — remove private restrictions from AOA, EGM Special Resolution, MGT-14, INC-27, minimum 7 members and 3 directors compliance.',
    heroBadges: ['INC-27 Conversion Experts', 'AOA Amendment', 'SEBI-Ready Structure'],
    introTitle: 'What is Conversion of Pvt. Ltd. to Public Ltd.?',
    introContent: (
      <p>
        Converting a Private Limited Company to a Public Limited Company enables the company to offer its shares to the general public, list on stock exchanges, and have more than 200 shareholders. The conversion process is governed by Section 14 and Section 18 of the Companies Act, 2013. The key steps involve: (1) Removing the private company restrictions from the Articles of Association — specifically, restrictions on share transfer, invitation to public, and the maximum 200-member limit; (2) Ensuring the company has at least 7 members and 3 directors; (3) Passing a Special Resolution at an EGM; (4) Filing Form MGT-14 and Form INC-27 with the ROC. After conversion, the company must comply with all Public Limited Company requirements including appointing a Company Secretary (if capital above ₹10 crore), holding AGM within 6 months, and eventual SEBI compliance if listing is pursued.
      </p>
    ),
    detailsTitle: 'Key Aspects of Pvt. to Public Conversion',
    details: [
      {
        title: 'Remove Private Restrictions from AOA',
        desc: 'Delete the 3 defining restrictions of a private company from AOA: restriction on share transfer, prohibition of public invitation for shares, and 200-member limit.',
        icon: FileText,
      },
      {
        title: 'Minimum 7 Members & 3 Directors',
        desc: 'Before conversion, ensure the company has at least 7 shareholders and 3 directors. Appoint additional members/directors if required.',
        icon: Users,
      },
      {
        title: 'Special Resolution & MGT-14',
        desc: 'Pass Special Resolution at EGM to approve AOA amendment. File Form MGT-14 with ROC within 30 days. The AOA amendment takes effect on ROC approval.',
        icon: ShieldCheck,
      },
      {
        title: 'INC-27 for Conversion',
        desc: 'File Form INC-27 with the ROC for conversion from Private to Public. ROC issues a new Certificate of Incorporation confirming public company status.',
        icon: Award,
      },
    ],
    requirements: [
      'Certificate of Incorporation (Private Limited)',
      'MOA and AOA with private company clauses highlighted',
      'List of all shareholders (minimum 7 required)',
      'List of all directors (minimum 3 required)',
      'Board Resolution for EGM convening',
      'Special Resolution passed at EGM',
      'Amended AOA removing private restrictions',
      'DSC of authorized director',
    ],
    processTitle: 'How to Convert a Pvt. Ltd. to Public Ltd.',
    processIntro:
      'The conversion process requires AOA amendment, member/director scaling, and ROC filing. Our team manages all steps accurately.',
    processSteps: [
      {
        title: 'Review & Amend AOA',
        desc: 'Review the Articles of Association. Remove all three private company restrictions: share transfer restriction, public invitation ban, and 200-member cap.',
        icon: FileSearch,
      },
      {
        title: 'Ensure Minimum 7 Members & 3 Directors',
        desc: 'Verify shareholder and director count. Induct additional members and appoint additional directors if below minimum. File DIR-12 for new director appointments.',
        icon: UserCheck,
      },
      {
        title: 'Pass Special Resolution at EGM',
        desc: 'Hold EGM with minimum 21 days notice. Pass Special Resolution for AOA amendment. Certify minutes. File MGT-14 within 30 days of passing resolution.',
        icon: FileCheck,
      },
      {
        title: 'File INC-27 & Receive New COI',
        desc: 'File Form INC-27 with ROC along with amended AOA, Special Resolution, and evidence of 7 members and 3 directors. ROC issues new Certificate of Incorporation as Public Ltd.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'After conversion, we assist with appointing a Company Secretary, updating GST records, and preparing for SEBI listing requirements if applicable.',
    documents: [
      {
        category: 'Company Documents',
        list: [
          'Certificate of Incorporation (Pvt. Ltd.)',
          'MOA and current AOA',
          'PAN of the company',
        ],
      },
      {
        category: 'Member & Director Documents',
        list: [
          'List of all 7+ shareholders with shareholding',
          'Consent of new members (if inducted)',
          'DIR-12 for newly appointed directors',
        ],
      },
      {
        category: 'MCA Filing Documents',
        list: [
          'Amended AOA (private restrictions removed)',
          'Form MGT-14 with Special Resolution',
          'Form INC-27 for conversion',
        ],
      },
    ],
    compliance: [
      {
        title: 'Company Secretary Appointment',
        desc: 'Public Limited Companies with paid-up capital of ₹10 crore or more must appoint a whole-time Company Secretary under Section 203.',
      },
      {
        title: 'AGM Within 6 Months',
        desc: 'As a Public Limited Company, the AGM must now be held within 6 months of financial year end (30 September), with 21 days clear notice.',
      },
      {
        title: 'SEBI Pre-Listing Compliance',
        desc: 'If the Public Limited Company plans to list, comply with SEBI (ICDR) Regulations, 2018 for IPO — minimum 3-year track record, promoter lock-in, and prospectus requirements.',
      },
      {
        title: 'Higher Board Meeting Standards',
        desc: 'Public companies must adhere to stricter board governance including audit committee requirements and mandatory independent director appointment for prescribed categories.',
      },
    ],
    faqs: [
      {
        q: 'Why would a company convert from Private to Public?',
        a: 'The main reasons are: raising funds from the public through IPO, gaining higher credibility and market visibility, enabling share listing on a stock exchange, or when membership exceeds 200 persons.',
      },
      {
        q: 'What is the minimum number of members for a Public Limited Company?',
        a: 'A Public Limited Company must have at least 7 members (shareholders) and 3 directors. Upon conversion, the company must ensure these minimums are met.',
      },
      {
        q: 'Does name change from "Private Limited" to "Limited" happen automatically?',
        a: 'No. After conversion, the word "Private" must be dropped from the company name. The ROC issues a fresh Certificate of Incorporation with the new name removing "Private" from the suffix.',
      },
      {
        q: 'Is Central Government approval required for this conversion?',
        a: 'No. Conversion from Private to Public Limited only requires a Special Resolution filed with the ROC via MGT-14 and INC-27. Central Government or Regional Director approval is not required.',
      },
      {
        q: 'How long does the conversion process take?',
        a: 'After filing INC-27, the ROC typically processes the conversion in 15–25 working days, subject to document completeness and processing queue.',
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
