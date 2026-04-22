'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function TransferOfMemorandumPage() {
  const data = {
    title: 'Transfer of Memorandum (TM)',
    description:
      'Complete the society-level flat transfer process with a Transfer of Memorandum — the essential document for cooperative housing society membership transfer in Maharashtra and other states.',
    heroBadges: ['Maharashtra Co-operative Societies Act', 'Society Membership Transfer', 'Share Certificate Transfer'],
    introTitle: 'What is a Transfer of Memorandum (TM)?',
    introContent: (
      <p>
        A Transfer of Memorandum (TM) is an internal society document used by cooperative housing societies to officially record the transfer of a flat or unit from one member to another within the society&#39;s books. It is governed primarily by the Maharashtra Co-operative Societies Act, 1960 (MCS Act) and the Model Bye-Laws of the cooperative housing society. The TM is distinct from the registered Sale Deed (which is a legal document registered at the Sub-Registrar&#39;s office and establishes legal ownership) — the TM is the society&#39;s internal record that transfers society membership, share certificate, and the right to occupy the flat as a member of the society. Without the TM being processed, the new buyer (transferee) cannot be formally admitted as a member of the society — meaning they cannot vote at AGMs, cannot get a No-Objection Certificate (NOC) from the society, and may face difficulties in property tax mutation and utility transfers. The TM process involves: (a) the outgoing member (transferor/seller) submitting a formal application to the society along with the registered sale deed; (b) the incoming member (transferee/buyer) submitting their membership application, KYC documents, and the prescribed society transfer charges (premium); (c) the society committee approving the transfer within 3 months; (d) transfer of share certificate from the seller to the buyer; and (e) updating the society&#39;s membership register and property register. Under Section 29 of the MCS Act, society transfer charges (premium) are capped by the state — in Maharashtra, the maximum transfer charge for residential flats is &#x20b9;25,000 (revised periodically). Any amount charged beyond this cap is illegal and recoverable. The TM must be processed within 3 months of the society receiving a complete application, failing which the society is deemed to have given its approval under the MCS Act.
      </p>
    ),
    detailsTitle: 'Why Transfer of Memorandum is Critical',
    details: [
      {
        title: 'Society Membership Rights',
        desc: 'The TM is the only mechanism by which the buyer becomes an official member of the cooperative housing society — entitling them to voting rights at AGMs, access to society facilities, and protection under the MCS Act and society bye-laws.',
        icon: ShieldCheck,
      },
      {
        title: 'Share Certificate Transfer',
        desc: 'A cooperative society flat comes with share certificates representing the member&#39;s stake in the society. The TM triggers the transfer of these share certificates from the seller&#39;s name to the buyer&#39;s name — essential for future sale, loan, or redevelopment.',
        icon: Zap,
      },
      {
        title: 'NOC for Mortgage / Resale',
        desc: 'Banks require the share certificate in the buyer&#39;s name (post-TM) before disbursing home loans. Future resale also requires the share certificate. Without TM, the buyer cannot obtain the society NOC needed for both loan and resale purposes.',
        icon: Globe,
      },
      {
        title: 'Capped Transfer Charges — Legal Protection',
        desc: 'The MCS Act caps society transfer charges at &#x20b9;25,000 for residential flats. The TM process legally documents these charges, protecting buyers from societies illegally demanding higher premiums.',
        icon: Award,
      },
    ],
    requirements: [
      'Registered Sale Deed (certified copy) from Sub-Registrar',
      'Completed society transfer application form (as per society bye-laws)',
      'KYC documents of new member: Aadhaar, PAN, photograph',
      'Original share certificate of the selling member',
      'No-Objection Certificate from the society (required before sale deed in some societies)',
      'Bank clearance for any housing loan of the selling member (if property was mortgaged)',
    ],
    processTitle: 'How to Complete the Transfer of Memorandum Process',
    processIntro:
      'The TM process runs parallel to and after the Sub-Registrar registration of the sale deed. Our team coordinates between the seller, buyer, and society to ensure timely completion of all transfer formalities.',
    processSteps: [
      {
        title: 'Submit Transfer Application to Society',
        desc: 'We prepare and submit the formal transfer application to the society committee with certified copies of the registered sale deed, KYC of the transferee, share certificate, and a covering letter requesting membership transfer.',
        icon: UserCheck,
      },
      {
        title: 'Payment of Transfer Charges',
        desc: 'We advise on legally permissible transfer charges (capped at &#x20b9;25,000 for residential under MCS Act) and assist in making the payment. We also advise against paying any illegal premium demanded beyond the statutory cap.',
        icon: FileSearch,
      },
      {
        title: 'Society Committee Approval',
        desc: 'The society committee reviews the application, verifies no outstanding dues from the seller, and approves the membership transfer. Under Section 22 of the MCS Act, the society must admit the transferee as a member if documents are complete; refusal must be with written reasons.',
        icon: CheckCircle2,
      },
      {
        title: 'Share Certificate & Register Update',
        desc: 'Upon approval, the society cancels the seller&#39;s share certificate and issues a new share certificate in the buyer&#39;s name. The society&#39;s membership register and property register are updated accordingly. A TM letter/order is issued to the new member.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'The TM process should be completed within 3 months of the society receiving a complete transfer application. Unreasonable refusal or delay entitles the buyer to approach the Co-operative Court or District Deputy Registrar.',
    documents: [
      {
        category: 'Transfer Application Documents',
        list: [
          'Registered Sale Deed (certified copy from Sub-Registrar)',
          'Duly filled society transfer application form (per bye-laws)',
          'Board Resolution of company/LLP (if buyer is a corporate entity)',
        ],
      },
      {
        category: 'Member KYC & Share Documents',
        list: [
          'Aadhaar Card, PAN Card, and recent passport-size photograph of new member',
          'Original share certificate in the seller\'s name for cancellation',
          'Society membership register extract showing seller as current member',
        ],
      },
      {
        category: 'NOC & Clearance Documents',
        list: [
          'No-Objection Certificate from society (if obtained before sale)',
          'Bank NOC / Release letter if property was mortgaged to a bank',
          'Society dues clearance certificate showing no maintenance arrears from seller',
        ],
      },
    ],
    compliance: [
      {
        title: 'Society Maintenance Dues Clearance',
        desc: 'Before the TM is processed, the selling member must clear all outstanding maintenance dues, special levies, water charges, and any other society dues. The society can legitimately withhold TM processing until dues are fully paid. New members inherit the property free of any arrears post-clearance.',
      },
      {
        title: 'Annual Membership Renewal',
        desc: 'Once admitted as a member via TM, the new member must participate in the society&#39;s Annual General Meeting (AGM), pay annual subscriptions, and comply with society bye-laws. Non-participation or default may result in membership suspension under the MCS Act.',
      },
      {
        title: 'NOC for Mortgage / PTM',
        desc: 'After TM completion and share certificate transfer, if the new member wishes to mortgage the flat to a bank, they must obtain a Permission to Mortgage (PTM) from the society. The society must grant PTM within 3 months under Section 29(1) of the MCS Act.',
      },
      {
        title: 'Property Tax Mutation Post-TM',
        desc: 'The TM completion does not automatically update municipal property tax records. The new member must separately apply for property mutation at the municipal corporation using the TM letter, share certificate, and registered sale deed to update tax records in their name.',
      },
    ],
    faqs: [
      {
        q: 'Is a TM required even if the sale deed is already registered?',
        a: 'Yes. The registered Sale Deed establishes legal ownership but does not make the buyer a member of the cooperative housing society. For a society flat, the TM is the separate society-level process that confers membership rights, share certificate, and occupancy recognition within the society. Both documents are essential.',
      },
      {
        q: 'Can a housing society refuse to process the TM?',
        a: 'A society can refuse TM only on valid grounds — such as outstanding dues from the seller or incomplete documentation. It cannot refuse based on the buyer\'s religion, caste, or occupation. Under Section 22 of the MCS Act, failure to decide within 90 days of a complete application is deemed approval. The buyer can approach the Co-operative Court for a mandatory injunction.',
      },
      {
        q: 'What is the maximum transfer charge a society can levy?',
        a: 'Under Maharashtra Government Circular, the maximum transfer charge (premium) for residential cooperative housing society flats is &#x20b9;25,000. Commercial society properties may have different caps. Any amount demanded beyond this cap is illegal and can be recovered by the member by filing a complaint with the Registrar of Co-operative Societies.',
      },
      {
        q: 'What happens if the seller has outstanding maintenance dues?',
        a: 'The society can withhold processing of the TM until all outstanding maintenance dues, special levies, and repair fund contributions of the selling member are fully cleared. In practice, this is handled during the sale negotiation — the seller provides a dues clearance certificate to the buyer at the time of sale deed execution.',
      },
      {
        q: 'Can an NRI purchase a society flat and get TM done?',
        a: 'Yes, an NRI (Non-Resident Indian) or OCI (Overseas Citizen of India) can purchase a residential property in a cooperative housing society in India (subject to FEMA/RBI guidelines) and undergo the TM process. NRI buyers may need to execute the transfer application through a Power of Attorney holder in India if they cannot be physically present.',
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
