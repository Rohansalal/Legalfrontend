'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Briefcase } from 'lucide-react';

export default function NOCPage() {
  const data = {
    title: 'No Objection Certificate (NOC) Drafting',
    description: 'Get professionally drafted No Objection Certificates (NOC) for vehicle transfer, employer NOC for visa/education, landlord NOC, society NOC, and name change NOC — on letterhead with proper signing and stamping.',
    heroBadges: ['All NOC Types Covered', 'Letterhead & Stamp Format', 'Legally Compliant Drafting'],
    introTitle: 'What is a No Objection Certificate (NOC)?',
    introContent: (
      <p>A No Objection Certificate (NOC) is a legal document issued by an individual, organization, institution, or government authority stating that the issuing party has no objection to a specific stated action, transaction, or proceeding. NOCs are widely used across legal, administrative, financial, and immigration contexts in India. Common types of NOCs include NOC for vehicle transfer (issued by the RTO in the seller\'s state when a vehicle is being transferred to another state — mandatory under the Motor Vehicles Act 1988), NOC from employer (required by employees for higher education admissions abroad, visa applications, and professional registrations — stating the employer has no objection to the employee pursuing the specified activity), NOC from landlord (required when a tenant wishes to use rented premises for business registration, GST registration, or other official purposes — the landlord states they have no objection to the specified use), NOC from housing society (required from the cooperative housing society for property transactions, home renovation, additional constructions, or change of use within the society premises), and NOC for name change (issued by a previous institution or authority acknowledging no objection to the name change process). An NOC must be on the issuing party\'s official letterhead or appropriate stamp paper, clearly identify the issuing party, the receiving party, the specific action being consented to, the effective date, authorized signature, and official seal or stamp. Without a proper NOC format, documents are routinely rejected by embassies, government offices, banks, and courts.</p>
    ),
    detailsTitle: 'Key Types of NOC We Draft',
    details: [
      { title: 'Employer NOC for Visa & Education', desc: 'Formal employer NOC for embassy visa applications, foreign university admissions, government examinations, and professional license applications — drafted on company letterhead with designation and HR seal.', icon: Briefcase },
      { title: 'Landlord / Society NOC', desc: 'Landlord NOC for GST registration, business address proof, property renovation, and change of use. Housing society NOC for property sale, structural modifications, and parking allocation.', icon: ShieldCheck },
      { title: 'Vehicle Transfer NOC (RTO)', desc: 'NOC from the registering RTO authority when transferring a vehicle to another state — required for re-registration. We assist with the application process and drafting of supporting documents.', icon: FileText },
      { title: 'Name Change NOC', desc: 'NOC from previous educational institutions, employers, or authorities acknowledging no objection to name change, supporting the gazette notification and document update process.', icon: Award },
    ],
    requirements: [
      'Full name and designation of the NOC issuing party',
      'Full name and identification details of the NOC receiver',
      'Specific purpose or action being consented to',
      'Official letterhead of the issuing organization (if applicable)',
      'Date and place of issuance',
      'Authorized signatory details and organization seal/stamp',
    ],
    processTitle: 'How to Get Your NOC Drafted',
    processIntro: 'Our team drafts NOCs in the exact format required by the authority or institution to which it will be submitted, avoiding rejection due to format issues.',
    processSteps: [
      { title: 'Identify NOC Type & Recipient Authority', desc: 'We determine the specific type of NOC required, the authority to which it will be submitted (embassy, RTO, bank, government office), and the exact format or language they expect.', icon: UserCheck },
      { title: 'Information Gathering', desc: 'We collect all required details: issuing party information, receiver\'s details, specific purpose, any reference numbers, and supporting documents to be mentioned.', icon: FileSearch },
      { title: 'NOC Drafting in Correct Format', desc: 'We draft the NOC in legally sound, precise language on the appropriate format — company letterhead, stamp paper, or authority-specific template — ensuring all required elements are present.', icon: CheckCircle2 },
      { title: 'Signing, Stamping & Delivery', desc: 'We assist with obtaining the authorized signature, official seal/stamp, and if required, notarization of the NOC. The final document is delivered in both soft copy and hard copy formats.', icon: FileCheck },
    ],
    processOutro: 'Most NOCs are drafted and ready for signing within 1–2 working days. Complex organizational NOCs requiring board approval may take 3–5 working days.',
    documents: [
      { category: 'Issuing Party Details', list: ['Company letterhead or stamp paper', 'Authorized signatory\'s designation and contact', 'Company registration number / PAN (for corporate NOCs)'] },
      { category: 'Receiver / Beneficiary Details', list: ['Full name and employee/student ID of receiver', 'Purpose of NOC (visa type, course name, property address)', 'Supporting ID documents of receiver'] },
      { category: 'Purpose-Specific Documents', list: ['Vehicle RC copy (for vehicle transfer NOC)', 'Rent agreement (for landlord NOC)', 'Visa application form or admission letter (for employer NOC)'] },
    ],
    compliance: [
      { title: 'NOC Must Be on Letterhead / Stamp Paper', desc: 'An NOC without proper letterhead or stamp paper may be rejected by embassies, RTO, or courts. Most authorities require NOCs on the issuing organization\'s official letterhead with authorized seal. Some NOCs (landlord NOC, individual NOC) require notarization on stamp paper.' },
      { title: 'Authorized Signatory Must Sign', desc: 'For corporate NOCs (employer, society, bank), only an authorized signatory (HR Manager, MD, Society Secretary) can issue valid NOCs. Unauthorized signatories can result in the NOC being challenged or rejected.' },
      { title: 'RTO NOC Has Validity Period', desc: 'An RTO NOC for vehicle transfer is valid for 6 months from the date of issue. If the vehicle is not re-registered in the new state within this period, a fresh NOC must be obtained from the issuing RTO.' },
      { title: 'Embassy NOC Requirements Vary by Country', desc: 'Different embassies have different formats, language requirements, and attestation norms for employer NOCs. UK, USA, Schengen, and other country-specific requirements must be verified before drafting the NOC for visa purposes.' },
    ],
    faqs: [
      { q: 'Is an NOC a legally binding document?', a: 'An NOC is a declaration of non-objection and is legally significant in the context for which it is issued. While it may not be a contract, an NOC can create legal obligations — for example, a landlord who issues an NOC for business use cannot later object to the stated use during the NOC period.' },
      { q: 'What is the difference between an NOC and a consent letter?', a: 'An NOC declares that the issuing party has "no objection" to a specific action. A consent letter affirmatively "consents" or "agrees" to something. While the two terms are often used interchangeably, technically an NOC is passive (no objection) while a consent letter is affirmative.' },
      { q: 'Does an employer NOC need to be on stamp paper?', a: 'Employer NOCs for visa or education purposes are typically on company letterhead — not stamp paper. However, if the NOC contains any financial commitment or guarantee, or if specifically required by the embassy or institution, it may need to be on stamp paper and notarized.' },
      { q: 'Can a landlord refuse to give an NOC for GST registration?', a: 'A landlord cannot be legally compelled to give an NOC for business use if the original rent agreement was for residential purposes only. However, for mixed or commercial properties, the landlord is generally obligated to cooperate. If refused, an alternative address must be used for GST registration.' },
      { q: 'How long is an employer NOC valid?', a: 'There is no standard legal validity period for employer NOCs. The accepting authority (embassy, university) typically requires it to be recent — usually not more than 3–6 months old at the time of submission. Check with the relevant authority for their specific recency requirements.' },
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
