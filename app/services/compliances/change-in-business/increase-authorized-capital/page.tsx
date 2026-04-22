'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function IncreaseAuthorizedCapitalPage() {
  const data = {
    title: 'Increase of Authorized Share Capital',
    description:
      'Expert assistance for increasing authorized share capital — AOA amendment, board resolution, EGM, Form SH-7 filing, stamp duty payment, and ROC approval. Capital increase completed in 7–15 working days.',
    heroBadges: ['SH-7 Filing Experts', 'AOA Amendment', 'Stamp Duty Advisory'],
    introTitle: 'What is Increase of Authorized Capital?',
    introContent: (
      <p>
        Authorized Share Capital (also called Nominal Capital or Registered Capital) is the maximum amount of share capital that a company is authorized to issue under its Memorandum of Association (MOA). The paid-up share capital of a company can never exceed its authorized share capital. When a company wants to raise additional funds through fresh share issuance, it must first increase its authorized capital if the existing limit has been reached. This process involves amending the Capital Clause (Clause V) of the MOA. The procedure under Section 61 of the Companies Act, 2013 requires a Board Resolution and an Ordinary Resolution (or Special Resolution if the AOA mandates it) at an EGM. Form SH-7 must be filed with the ROC within 30 days of passing the resolution, along with payment of additional stamp duty applicable under the Indian Stamp Act.
      </p>
    ),
    detailsTitle: 'Key Aspects of Authorized Capital Increase',
    details: [
      {
        title: 'AOA Amendment — Capital Clause',
        desc: 'Amend the Articles of Association to authorize the increase. Some AOAs restrict capital increase without shareholder approval — our team reviews and advises.',
        icon: FileText,
      },
      {
        title: 'EGM & Resolution',
        desc: 'Pass Ordinary Resolution (or Special Resolution per AOA) at EGM approving the increased authorized capital amount and new share structure.',
        icon: Users,
      },
      {
        title: 'Form SH-7 Filing with ROC',
        desc: 'File Form SH-7 on the MCA portal within 30 days of passing the resolution. Attach EGM minutes, altered MOA/AOA, and stamp duty payment proof.',
        icon: ShieldCheck,
      },
      {
        title: 'Stamp Duty Payment',
        desc: 'Pay additional stamp duty on the increased authorized capital as per rates applicable in the company\'s state of registration. Varies from 0.1% to 0.3% on increase amount.',
        icon: TrendingUp,
      },
    ],
    requirements: [
      'Current Certificate of Incorporation with CIN',
      'Existing MOA showing current authorized capital',
      'Articles of Association (check if Special or Ordinary Resolution required)',
      'Board Resolution to convene EGM',
      'EGM notice (21 days clear notice to all members)',
      'Certified copy of Ordinary/Special Resolution',
      'DSC of authorized director',
      'Stamp duty payment challan',
    ],
    processTitle: 'How to Increase Authorized Capital',
    processIntro:
      'Increasing authorized capital is a structured legal process. Our experts ensure every step is completed correctly and on time.',
    processSteps: [
      {
        title: 'Review MOA & AOA',
        desc: 'Review current authorized capital in MOA and check AOA for conditions on capital increase. Determine if Ordinary or Special Resolution is required.',
        icon: FileSearch,
      },
      {
        title: 'Board Meeting & EGM Notice',
        desc: 'Pass Board Resolution to authorize EGM notice. Dispatch EGM notice with explanatory statement to all shareholders at least 21 clear days before the meeting.',
        icon: UserCheck,
      },
      {
        title: 'Pass Resolution at EGM',
        desc: 'Hold EGM and pass the resolution for increase of authorized capital. Prepare certified minutes. Also pass resolution to amend MOA Capital Clause.',
        icon: FileCheck,
      },
      {
        title: 'Pay Stamp Duty & File SH-7',
        desc: 'Pay applicable stamp duty on the incremental authorized capital. File Form SH-7 with ROC within 30 days. Attach altered MOA and EGM resolution.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'After ROC approval of the capital increase, we assist with issuing new shares through rights issue, preferential allotment, or private placement.',
    documents: [
      {
        category: 'Company Documents',
        list: [
          'Certificate of Incorporation',
          'MOA showing current capital structure',
          'AOA (relevant clauses on capital)',
        ],
      },
      {
        category: 'Resolution Documents',
        list: [
          'Board Resolution (EGM convening)',
          'EGM Notice and Explanatory Statement',
          'Ordinary/Special Resolution certified copy',
        ],
      },
      {
        category: 'Payment & Filing Documents',
        list: [
          'Stamp duty payment receipt',
          'Form SH-7 draft with attachments',
          'Altered MOA reflecting new capital',
        ],
      },
    ],
    compliance: [
      {
        title: 'Authorized vs Paid-Up Capital',
        desc: 'After increasing authorized capital, the company can issue shares up to the new limit. Paid-up capital cannot exceed authorized capital at any time.',
      },
      {
        title: 'Share Allotment Compliance',
        desc: 'Fresh shares can be issued via rights issue (Section 62), preferential allotment (Section 42), or private placement (Section 42). Each has specific compliance requirements.',
      },
      {
        title: 'Stamp Duty Rates',
        desc: 'Stamp duty on authorized capital varies by state. For example, Maharashtra charges ₹1,000 per ₹5 lakh or part thereof on increased capital.',
      },
      {
        title: 'MCA Filing Within 30 Days',
        desc: 'Form SH-7 must be filed within 30 days of passing the resolution. Late filing attracts additional fees of ₹100 per day with no cap.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between authorized and paid-up capital?',
        a: 'Authorized capital is the maximum capital a company is permitted to issue as per its MOA. Paid-up capital is the actual capital that has been subscribed and paid by shareholders. Paid-up capital cannot exceed authorized capital.',
      },
      {
        q: 'Is there a minimum or maximum authorized capital limit?',
        a: 'There is no minimum authorized capital requirement under current law (earlier it was ₹1 lakh for Pvt. Ltd. and ₹5 lakh for Public Ltd.). There is no maximum limit specified.',
      },
      {
        q: 'What stamp duty applies on increased authorized capital?',
        a: 'Stamp duty rates vary by state. On average, it ranges between 0.1% to 0.3% on the incremental authorized capital amount. Some states like Madhya Pradesh charge higher rates.',
      },
      {
        q: 'Can authorized capital be increased multiple times?',
        a: 'Yes. Authorized capital can be increased as many times as required, each time following the same procedure of EGM resolution and SH-7 filing.',
      },
      {
        q: 'How quickly can the capital increase be completed?',
        a: 'After the EGM and payment of stamp duty, Form SH-7 filing with ROC approval typically takes 7–15 working days, depending on MCA processing time.',
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
