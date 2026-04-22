'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function ChangePlacePage() {
  const data = {
    title: 'Change of Registered Office Address',
    description:
      'Professional assistance for changing your company\'s registered office — within the same city (INC-22), within the same state, or to another state (INC-23). Board resolution, EGM, and ROC filing handled end-to-end.',
    heroBadges: ['Within City & State Change', 'Inter-State Transfer', 'INC-22 & INC-23 Experts'],
    introTitle: 'What is Change of Registered Office?',
    introContent: (
      <p>
        The registered office of a company is its official address where all legal and official communication from the government and courts is sent. Under Section 12 of the Companies Act, 2013, every company must have a registered office in India. The procedure for changing the registered office depends on the nature of the change: (1) Within the same city/town/village — requires Board Resolution and Form INC-22; (2) Outside the current city but within the same state — requires Board Resolution, Special Resolution at EGM, MGT-14, and INC-22 (or INC-23 if it involves ROC jurisdiction change); (3) Change to another state — requires Special Resolution, Central Government approval via Regional Director (INC-23), newspaper advertisement, and creditor notices. The most complex case is inter-state change, which involves multiple filings and approvals from the Regional Director.
      </p>
    ),
    detailsTitle: 'Types of Registered Office Change',
    details: [
      {
        title: 'Within Same City — INC-22',
        desc: 'Simple address change within the same city, town, or village. Requires Board Resolution and Form INC-22 filed within 30 days of the change.',
        icon: Building2,
      },
      {
        title: 'Within Same State (Different ROC)',
        desc: 'Change from one ROC jurisdiction to another within the same state. Requires Special Resolution, MGT-14, INC-23 filed with Regional Director.',
        icon: Globe,
      },
      {
        title: 'To Another State — INC-23',
        desc: 'Requires Special Resolution, Regional Director approval via INC-23, newspaper notices in 2 newspapers, creditor objection window, and MOA amendment.',
        icon: TrendingUp,
      },
      {
        title: 'MOA Registered Office Clause',
        desc: 'Changing the state requires amending the MOA (Registered Office clause). Central Government approval through Regional Director is mandatory under Section 13.',
        icon: FileText,
      },
    ],
    requirements: [
      'Current Certificate of Incorporation with existing address',
      'Proof of new registered office (rent agreement or ownership deed)',
      'NOC from the owner of the new premises',
      'Latest utility bill of the new address (not older than 2 months)',
      'Board Resolution approving the address change',
      'Special Resolution (for state change or different ROC jurisdiction)',
      'EGM notice and minutes (for applicable cases)',
      'DSC of authorized director',
    ],
    processTitle: 'How to Change Registered Office Address',
    processIntro:
      'The procedure varies based on the type of change. Our experts advise on the correct approach and handle all filings.',
    processSteps: [
      {
        title: 'Determine Type of Change',
        desc: 'Identify whether the change is within city, within state, or to another state. Each type has different compliance requirements and timelines.',
        icon: FileSearch,
      },
      {
        title: 'Board Meeting & EGM (if required)',
        desc: 'Pass Board Resolution for all changes. For state change or different ROC jurisdiction, also pass Special Resolution at EGM with 21 days clear notice.',
        icon: UserCheck,
      },
      {
        title: 'File MGT-14 & INC-22/INC-23',
        desc: 'File Special Resolution in MGT-14 within 30 days. File Form INC-22 with proof of new address. For state change, file INC-23 with Regional Director.',
        icon: FileCheck,
      },
      {
        title: 'Obtain ROC / RD Approval',
        desc: 'ROC updates records for city/state changes. Regional Director approves inter-state change after considering creditor objections. Fresh COI may be issued.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'After approval, we help update GST registration, bank accounts, PAN/TAN, and all government licenses with the new address.',
    documents: [
      {
        category: 'Address Proof (New Office)',
        list: [
          'Rental Agreement / Lease Deed',
          'Latest electricity or water bill',
          'NOC from owner of the premises',
        ],
      },
      {
        category: 'Resolution Documents',
        list: [
          'Board Resolution for address change',
          'EGM Notice and Special Resolution (if applicable)',
          'MGT-14 filing acknowledgment',
        ],
      },
      {
        category: 'Company Documents',
        list: [
          'Certificate of Incorporation',
          'MOA and AOA',
          'Current address proof on record with MCA',
        ],
      },
    ],
    compliance: [
      {
        title: 'Update GST Registration',
        desc: 'Update the address in GST registration within 15 days of change. If moving to another state, a new GSTIN may be required.',
      },
      {
        title: 'Newspaper Notice for State Change',
        desc: 'For inter-state registered office change, publish notice in a widely circulated English newspaper and a local language newspaper at both old and new state locations.',
      },
      {
        title: 'Creditor Intimation',
        desc: 'Serve individual notices to secured creditors and debenture holders before filing INC-23. Creditor objections must be addressed before Regional Director approval.',
      },
      {
        title: 'Update All Licenses',
        desc: 'Update MSME registration, FSSAI, import-export code, bank accounts, and all other regulatory registrations with the new registered office address.',
      },
    ],
    faqs: [
      {
        q: 'How long does it take to change registered office to another state?',
        a: 'Inter-state registered office change takes 45–90 days as it requires newspaper publication, creditor notice period, and Regional Director approval.',
      },
      {
        q: 'Can the registered office be a residential address?',
        a: 'Yes. A residential address can be used as a registered office as long as the owner provides NOC and a utility bill is available as address proof.',
      },
      {
        q: 'Is a new GSTIN required when moving to another state?',
        a: 'Yes. GST registration is state-specific. When the registered office moves to a new state, a new GSTIN must be obtained in the new state and the old registration must be surrendered or amended.',
      },
      {
        q: 'What is the difference between INC-22 and INC-23?',
        a: 'Form INC-22 is for changing the registered office within the same ROC jurisdiction (typically within the same state). Form INC-23 is for shifting the registered office outside the jurisdiction of the current ROC, including inter-state shifts.',
      },
      {
        q: 'Do we need to amend the MOA for address change?',
        a: 'Only the state name appears in the MOA. If the registered office moves to a different state, the MOA must be amended (State Clause). Within the same state, MOA amendment is not required.',
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
