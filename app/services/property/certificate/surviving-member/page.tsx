'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function SurvivingMemberPage() {
  const data = {
    title: 'Surviving Member Certificate',
    description:
      'Obtain the official Surviving Member Certificate (Surviving Family Members Certificate) from the Tehsildar or Municipal Corporation for property succession, pension, insurance, and bank account transfer after the death of a family member.',
    heroBadges: ['Tehsildar / Municipal Authority', '1–2 Week Issuance', 'Society Flat Succession'],
    introTitle: 'What is a Surviving Member Certificate?',
    introContent: (
      <p>
        A Surviving Member Certificate (also called a Surviving Family Members Certificate or Family Members Certificate) is an official document issued by the revenue authority — Tehsildar, Naib Tehsildar, Sub-Divisional Magistrate (SDM), or Municipal Corporation (in urban areas) — that identifies all the living family members of a deceased person as on the date of the certificate. It is different from the Legal Heir Certificate in focus and purpose: while both identify the family of the deceased, the Surviving Member Certificate specifically establishes who among the legal heirs is currently alive — which is especially relevant when one of the named heirs may also have died subsequent to the primary deceased. In cooperative housing society flat transfers (particularly in Maharashtra), the society bye-laws typically require a Surviving Member Certificate along with the death certificate, registered nomination form (if any), and other succession documents before processing the transfer of share certificate and flat to the heirs of the deceased member. The Surviving Member Certificate is also used for: claiming family pension from government/PSU employers (EPF, NPS, pension from Central/State Government departments); insurance claims where the policy was not assigned and there is no nomination; bank account succession (joint or single-holder accounts); vehicle transfer; and government welfare scheme benefits in the name of the deceased&#39;s family. The certificate is issued relatively quickly — within 1–2 weeks at the tehsil level, and within 2–4 weeks at the Municipal Corporation level — making it faster than a Legal Heir Certificate (which takes longer due to more extensive verification) and far faster than a Succession Certificate (which requires a court process). The application requires submission of the death certificate of the deceased, proof of family relationship, a family tree affidavit, and identity proofs of all surviving family members listed in the certificate.
      </p>
    ),
    detailsTitle: 'When You Need a Surviving Member Certificate',
    details: [
      {
        title: 'Society Flat Succession',
        desc: 'Maharashtra cooperative housing societies require a Surviving Member Certificate (along with death certificate and nomination form) to process transfer of the deceased member&#39;s share certificate and flat occupancy rights to the surviving spouse, children, or heirs under MCS Act provisions.',
        icon: ShieldCheck,
      },
      {
        title: 'Family Pension & Government Benefits',
        desc: 'Government, PSU, and EPF pension authorities require a Surviving Member Certificate to identify eligible family pensioners — particularly to confirm that the claimant is alive and that no other surviving family member has a prior or equal claim to the pension benefit.',
        icon: Zap,
      },
      {
        title: 'Bank Account & Insurance Claims',
        desc: 'Banks require a Surviving Member Certificate to identify all living family members of a deceased account holder before transferring a joint account or acting on a succession claim. LIC and general insurance companies also require it for policy claims without nomination.',
        icon: Globe,
      },
      {
        title: 'Property Tax & Utility Transfer',
        desc: 'Municipal corporations and utility providers (electricity, water, gas) accept the Surviving Member Certificate along with the death certificate as basis for transferring property tax, electricity, and water connection records from the deceased owner\'s name to the surviving heir&#39;s name.',
        icon: Award,
      },
    ],
    requirements: [
      'Death certificate of the deceased (original) from the Municipal Corporation / Gram Panchayat',
      'Proof of family relationship: marriage certificate, birth certificates of children',
      'Family tree affidavit sworn by a close family member before Notary',
      'Identity proof (Aadhaar / PAN) of all surviving family members to be named in the certificate',
      'Address proof of the applicant and the deceased\'s last residence',
      'Passport-size photographs of all surviving family members',
    ],
    processTitle: 'How to Obtain a Surviving Member Certificate',
    processIntro:
      'The process differs slightly between municipal corporations (urban areas) and tehsil offices (rural/sub-urban areas) but involves the same core documents. Our team manages the entire application and follow-up.',
    processSteps: [
      {
        title: 'Compile Required Documents',
        desc: 'We compile all required documents: original death certificate, marriage/birth certificates establishing family relationship, Aadhaar and PAN of all surviving family members, and draft a family tree affidavit for execution before a Notary.',
        icon: UserCheck,
      },
      {
        title: 'Draft & Execute Family Tree Affidavit',
        desc: 'We draft the family tree affidavit identifying: (a) the deceased\'s full name, date of death, and last address; (b) complete list of all surviving family members with their relationship, age, and address. The affidavit is executed on stamp paper before a Notary or Judicial Magistrate.',
        icon: FileSearch,
      },
      {
        title: 'Application Submission',
        desc: 'We submit the Surviving Member Certificate application to the Tehsildar (rural/district-level) or the Municipal Corporation&#39;s Citizen Services Center (urban), along with prescribed fee, all documents, and the family tree affidavit. In some states, online applications are accepted through the Seva Kendra or Jan Seva Kendra portals.',
        icon: CheckCircle2,
      },
      {
        title: 'Verification & Certificate Collection',
        desc: 'The revenue officer or municipal official may conduct a verification (field inquiry or document verification at the office) before issuing the certificate. We follow up and collect the certificate, then assist in submitting it to the society, bank, pension authority, or insurance company as required.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'Surviving Member Certificates are typically issued within 7–14 working days at tehsil offices and 15–30 working days at municipal corporation level. Delays can occur if family relationships require additional verification.',
    documents: [
      {
        category: 'Deceased\'s Documents',
        list: [
          'Original death certificate from Municipal Corporation or Gram Panchayat',
          'Aadhaar Card / PAN Card / Voter ID of the deceased',
          'Last known address proof of the deceased',
        ],
      },
      {
        category: 'Family Relationship Proof',
        list: [
          'Marriage certificate of surviving spouse',
          'Birth certificates of all surviving children',
          'Family tree affidavit on stamp paper sworn by a family member before Notary',
        ],
      },
      {
        category: 'Surviving Members\' Documents',
        list: [
          'Aadhaar Card and PAN Card of all surviving family members listed in the certificate',
          'Passport-size photographs of all surviving members',
          'Application form in prescribed format (state/municipality specific)',
        ],
      },
    ],
    compliance: [
      {
        title: 'Submit to Society Within Prescribed Period',
        desc: 'After obtaining the Surviving Member Certificate, the heir must submit it to the cooperative housing society along with the death certificate and transfer application within the period prescribed by the society bye-laws (typically 6 months of death) to avoid the society treating the flat as unclaimed.',
      },
      {
        title: 'Update All Financial Records',
        desc: 'The Surviving Member Certificate should be used to update all financial records of the deceased: bank accounts, Demat accounts, EPF nominations, insurance policies, Post Office savings, NSC/KVP bonds. Delay in updating can lead to accounts becoming dormant and unclaimed property transfer to the government.',
      },
      {
        title: 'Income Tax Return for Deceased',
        desc: 'The legal heir (identified in the Surviving Member Certificate) must file the deceased&#39;s income tax return for the year of death (and any unfiled prior years) as a &#x201c;legal representative&#x201d; under Section 159 of the Income Tax Act. This is mandatory before the estate assets can be distributed or liquidated.',
      },
      {
        title: 'Property Mutation After Certificate',
        desc: 'After obtaining the Surviving Member Certificate, the heir must apply for property mutation at the municipal corporation or tehsil to update revenue records in the heir&#39;s name. The Surviving Member Certificate is one of the key documents required for this mutation application.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a Surviving Member Certificate and a Legal Heir Certificate?',
        a: 'A Surviving Member Certificate identifies all living family members of the deceased and confirms who is alive among the heirs. A Legal Heir Certificate establishes who the legal heirs of the deceased are for the purpose of claiming the deceased\'s estate — it focuses on the right to inherit, not just who is alive. For cooperative society flat transfers and pension claims, the Surviving Member Certificate is typically used; for bank account succession and government dues, the Legal Heir Certificate is used.',
      },
      {
        q: 'Can a Surviving Member Certificate be obtained for a deceased NRI?',
        a: 'Yes. If an NRI dies and has property or assets in India, the surviving family members in India can obtain a Surviving Member Certificate from the Tehsildar or Municipal Corporation in the district where the deceased was last resident in India or where the property is located. The same documents (death certificate, relationship proofs, family tree affidavit) are required.',
      },
      {
        q: 'How many copies of the Surviving Member Certificate should I obtain?',
        a: 'Obtain multiple certified copies (at least 5–10) of the Surviving Member Certificate from the issuing authority at the time of collection, as it will be required for multiple purposes simultaneously: society flat transfer, bank account closure, pension claim, insurance claim, property mutation, Demat account transfer, and income tax filings. Getting additional copies later requires a fresh application process.',
      },
      {
        q: 'Is a family tree affidavit different from a Surviving Member Certificate?',
        a: 'Yes. A Family Tree Affidavit is a document you self-execute (sworn before a Notary) listing the family members — it is prepared by the family, not the government. A Surviving Member Certificate is an official government-issued document from the Tehsildar / Municipal Corporation after verification — it carries official authority and is accepted by courts, banks, societies, and government authorities as official proof. The affidavit is typically submitted as supporting evidence for the government to issue the Certificate.',
      },
      {
        q: 'What happens if there is a dispute between heirs about who the surviving members are?',
        a: 'If heirs dispute the family composition (e.g., one heir claims to be unrecognised or excluded), the Tehsildar / Municipal Corporation may conduct a field inquiry or hold a hearing before issuing the certificate. In cases of genuine dispute, the matter may need to be resolved through a Family Court or Civil Court declaration before the certificate is issued. Cooperative societies, banks, and pension authorities will typically wait for a court order before distributing disputed assets.',
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
