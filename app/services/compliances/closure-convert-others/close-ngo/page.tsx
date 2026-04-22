'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function CloseNGOPage() {
  const data = {
    title: 'Close / Dissolve NGO',
    description:
      'Expert NGO dissolution services — Trust closure via court process, Society dissolution by majority resolution, Section 8 Company strike off via STK-2, surrender of 12A/80G registrations, and asset distribution as per charitable objects.',
    heroBadges: ['Trust & Society Dissolution', 'Section 8 STK-2', '12A/80G Surrender'],
    introTitle: 'How to Close or Dissolve an NGO in India?',
    introContent: (
      <p>
        NGOs in India can be registered as one of three types: (1) Trust under the Indian Trusts Act, 1882 or relevant state laws; (2) Society under the Societies Registration Act, 1860; (3) Section 8 Company under the Companies Act, 2013. The dissolution process differs for each type. A Trust cannot be dissolved without the consent of the settlor or through a court order (High Court or Civil Court jurisdiction). A Society can be dissolved by a resolution passed by 3/4th of the members present and entitled to vote, followed by approval from the Registrar of Societies. A Section 8 Company can be struck off using Form STK-2 under Section 248 of the Companies Act if it is defunct. Any remaining assets of an NGO after paying all liabilities must be transferred to another NGO with similar objects — they cannot be distributed to trustees, governing body members, or shareholders. Income tax exemptions under 12A and 80G must be surrendered by intimating the Principal Commissioner of Income Tax.
      </p>
    ),
    detailsTitle: 'NGO Dissolution by Entity Type',
    details: [
      {
        title: 'Trust Dissolution — Court Process',
        desc: 'Trusts are dissolved by the settlor\'s consent, by exhaustion of trust purpose, or through a High Court/Civil Court order. Remaining assets must go to similar charitable entities.',
        icon: Scale,
      },
      {
        title: 'Society Dissolution — 3/4th Resolution',
        desc: 'A Society can be dissolved by a resolution passed by 3/4th of members. Registrar of Societies approval is required. Remaining assets transferred to similar societies.',
        icon: Users,
      },
      {
        title: 'Section 8 Company — STK-2 Strike Off',
        desc: 'Defunct Section 8 Companies can apply for fast track strike off via Form STK-2. All ROC returns and ITR-7 must be current. Section 8 license is also surrendered.',
        icon: FileText,
      },
      {
        title: '12A / 80G Registration Surrender',
        desc: 'Upon dissolution, the NGO must intimate the Principal Commissioner of Income Tax about closure and surrender 12A/80G registrations to prevent misuse.',
        icon: ShieldCheck,
      },
    ],
    requirements: [
      'Trust Deed / Society Registration Certificate / Section 8 COI',
      'Resolution for dissolution (3/4th members for Society)',
      'Court Order (for Trust dissolution)',
      'No Objection from all creditors and beneficiaries',
      'NIL Assets and Liabilities Statement (Section 8)',
      '12A and 80G Certificates for surrender',
      'All ITR-7 / Income Tax returns filed',
      'Asset distribution plan to another NGO',
    ],
    processTitle: 'How to Dissolve an NGO in India',
    processIntro:
      'Our team guides you through the appropriate dissolution route based on your NGO\'s registration type and asset position.',
    processSteps: [
      {
        title: 'Identify Entity Type & Dissolution Route',
        desc: 'Determine if the NGO is a Trust, Society, or Section 8 Company. Select the appropriate dissolution procedure. Check for pending liabilities and FCRA registrations.',
        icon: FileSearch,
      },
      {
        title: 'Pass Resolution & Settle Liabilities',
        desc: 'For Society: Pass 3/4th member resolution. For Section 8: Pass Board Resolution. Settle all outstanding dues — employees, creditors, and government.',
        icon: UserCheck,
      },
      {
        title: 'Transfer Remaining Assets',
        desc: 'Transfer remaining assets to another NGO/charitable body with similar objects. Document the transfer. This is mandatory under Income Tax exemption conditions.',
        icon: FileCheck,
      },
      {
        title: 'File for Dissolution & Surrender Registrations',
        desc: 'File STK-2 (Section 8) / apply to Registrar (Society) / file in Court (Trust). Surrender 12A/80G to PCIT. Cancel GST and FCRA registrations.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We handle FCRA account closure, asset transfer documentation, and income tax intimation for the dissolution of NGOs of all types.',
    documents: [
      {
        category: 'Formation Documents',
        list: [
          'Trust Deed / Society Registration Certificate / COI',
          'All amendments to founding documents',
          'PAN of the NGO',
        ],
      },
      {
        category: 'Financial Documents',
        list: [
          'Latest audited financial statements',
          'Asset inventory and valuation',
          'Liability settlement evidence',
        ],
      },
      {
        category: 'Registration Documents',
        list: [
          '12A and 80G certificates for surrender',
          'FCRA registration certificate (if applicable)',
          'GST registration certificate for cancellation',
        ],
      },
    ],
    compliance: [
      {
        title: 'Asset Transfer to Similar NGO',
        desc: 'All residual assets must be transferred to a similar charitable entity. Personal distribution to trustees/members is illegal and can attract income tax liability.',
      },
      {
        title: 'FCRA Winding Up',
        desc: 'FCRA-registered NGOs must surrender FCRA registration and file a final account with the Ministry of Home Affairs showing utilization of all foreign contributions.',
      },
      {
        title: 'Income Tax Final Return',
        desc: 'File the final ITR-7 for the year of dissolution. Intimate the PCIT about the dissolution and surrender of 12A/80G exemptions.',
      },
      {
        title: 'State Registrar Compliance',
        desc: 'For Societies, the dissolution must be approved by the Registrar of Societies of the relevant state. Formalities vary by state Act (Delhi, Maharashtra, etc.).',
      },
    ],
    faqs: [
      {
        q: 'Can a Trust be dissolved by the trustees without court intervention?',
        a: 'If the Trust Deed contains a specific dissolution clause, trustees may dissolve the trust per those terms. Otherwise, dissolution requires consent of the settlor or a court order from the High Court or Civil Court.',
      },
      {
        q: 'What happens to the assets of a Society when it is dissolved?',
        a: 'After paying all debts and liabilities, the remaining assets of a dissolved Society must be transferred to another registered Society or charitable body with similar objects. Members cannot receive any portion of the assets.',
      },
      {
        q: 'Can a Section 8 Company be converted to a regular company before closure?',
        a: 'No. Section 8 Companies cannot convert to ordinary companies and are specifically prohibited from distributing profits. The only exit is dissolution or strike off.',
      },
      {
        q: 'Is FCRA cancellation required before NGO closure?',
        a: 'Yes. If the NGO holds an FCRA registration, the foreign contribution bank account must be closed with NIL balance and the FCRA registration surrendered to the MHA before final dissolution.',
      },
      {
        q: 'What is the role of the Charity Commissioner in NGO dissolution?',
        a: 'In states like Maharashtra, the Charity Commissioner has oversight over public trusts under the Maharashtra Public Trusts Act. For dissolution of such trusts, permission from the Charity Commissioner or a court is required.',
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
