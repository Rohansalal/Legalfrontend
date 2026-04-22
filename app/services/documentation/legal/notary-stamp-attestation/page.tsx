'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale } from 'lucide-react';

export default function NotaryStampAttestationPage() {
  const data = {
    title: 'Notary, Stamp & Attestation Services',
    description: 'Complete notarization, document attestation (SDM/HRD/MEA), stamp paper procurement, e-stamping, and franking services for personal, legal, and business documents across India.',
    heroBadges: ['SDM / HRD / MEA Attestation', 'E-Stamping & Franking', 'Pan-India Coverage'],
    introTitle: 'What are Notary, Stamp & Attestation Services?',
    introContent: (
      <p>Notarization, stamp duty, and document attestation are foundational legal requirements in India for validating personal, commercial, and legal documents. Notarization by a Notary Public (appointed under the Notaries Act 1952) is required for affidavits, power of attorney, agreements, and declarations. Stamp duty is a state-subject tax levied on legal instruments including agreements, conveyance deeds, power of attorney, and affidavits under the Indian Stamp Act 1899 and respective state stamp acts — non-payment or under-stamping renders documents inadmissible in court. Attestation by authorities such as Sub-Divisional Magistrate (SDM), Human Resource Development (HRD) Ministry, and Ministry of External Affairs (MEA) is required for educational certificates, birth/marriage certificates, and commercial documents intended for use abroad. E-stamping (through SHCIL portals) and franking (through designated banks) are now accepted alternatives to physical stamp papers in most states. Our end-to-end service covers procurement of correct-value stamp papers, notarization, SDM/HRD/MEA attestation, and courier dispatch, ensuring all documents are legally valid for their intended purpose — whether for domestic courts, government offices, visa applications, or overseas submissions.</p>
    ),
    detailsTitle: 'Services We Cover',
    details: [
      { title: 'Notarization by Notary Public', desc: 'Attestation of affidavits, power of attorney, agreements, declarations, and copies of original documents by a Notary Public appointed under the Notaries Act 1952.', icon: ShieldCheck },
      { title: 'Stamp Paper & E-Stamping', desc: 'Procurement of correct-value non-judicial stamp papers and e-stamp certificates (SHCIL) for agreements, affidavits, and deeds across all Indian states.', icon: FileText },
      { title: 'SDM / HRD Attestation', desc: 'Document attestation by Sub-Divisional Magistrate (SDM) for personal documents and by the State HRD Department for educational certificates prior to MEA or apostille.', icon: Award },
      { title: 'MEA Attestation & Apostille', desc: 'Ministry of External Affairs attestation and Hague Convention apostille for documents to be used in foreign countries — required for visa, immigration, and overseas employment.', icon: Globe },
    ],
    requirements: [
      'Original documents to be notarized or attested',
      'Passport / Aadhaar / PAN for identity proof of applicant',
      'Purpose of attestation (domestic use, visa, overseas employment)',
      'Destination country (for apostille / MEA attestation)',
      'State of issue of document (determines attestation chain)',
      'Passport copy (for personal documents being attested for abroad use)',
    ],
    processTitle: 'How Notary, Stamp & Attestation Works',
    processIntro: 'Our experts assess your document type and destination to determine the exact attestation chain and stamp duty applicable.',
    processSteps: [
      { title: 'Document Assessment', desc: 'We evaluate the type of document (educational, personal, commercial), state of issuance, and destination (domestic / foreign country) to determine the correct attestation path.', icon: UserCheck },
      { title: 'Stamp Paper Procurement / E-Stamping', desc: 'We procure the correct denomination non-judicial stamp paper or generate an e-stamp certificate via SHCIL as required by the applicable state stamp act.', icon: FileSearch },
      { title: 'Notarization / SDM / HRD Attestation', desc: 'Documents are submitted to the Notary Public or SDM office for attestation. Educational documents are first attested by the State HRD Department.', icon: CheckCircle2 },
      { title: 'MEA Attestation / Apostille Stamp', desc: 'After state-level attestation, documents are submitted to MEA for the final apostille sticker or attestation stamp, valid for use in Hague Convention member countries.', icon: FileCheck },
    ],
    processOutro: 'Notarization is typically completed same day. SDM attestation takes 1–3 days. MEA apostille takes 3–7 working days depending on document type.',
    documents: [
      { category: 'Applicant Identity', list: ['Passport (mandatory for apostille)', 'Aadhaar Card', 'PAN Card or Voter ID'] },
      { category: 'Documents for Attestation', list: ['Original certificates / agreements / affidavits', 'Photocopies (2 sets) of all documents', 'Board / university seal on educational certificates'] },
      { category: 'Additional Requirements', list: ['Authorization letter if submitting through representative', 'Visa / job offer letter (for attestation purpose proof)', 'Previous attestation stamps (if re-attestation needed)'] },
    ],
    compliance: [
      { title: 'Correct Stamp Duty Must Be Paid', desc: 'Under-stamped documents are inadmissible as evidence in Indian courts and can be impounded under Section 33 of the Indian Stamp Act. Always verify the applicable stamp duty for the document type and state before execution.' },
      { title: 'Attestation Chain Must Be Followed', desc: 'MEA apostille requires prior state-level attestation (SDM for personal, HRD for educational, Chamber of Commerce for commercial). Skipping any step results in rejection by MEA.' },
      { title: 'Notarization Is Document-Specific', desc: 'Not all documents require notarization. Agreements, affidavits, and POAs typically do. Submission of un-notarized documents where required can result in rejection by courts or government offices.' },
      { title: 'Re-Attestation May Be Required', desc: 'Attestation certificates typically have no expiry but some countries and embassies require attestation done within 3–6 months. Check destination country requirements to avoid re-doing the process.' },
    ],
    faqs: [
      { q: 'What is the difference between notarization and attestation?', a: 'Notarization is certification by a Notary Public under the Notaries Act 1952, confirming the authenticity of signatures and documents for domestic legal purposes. Attestation by SDM, HRD, or MEA is a higher-level government verification required for documents being used officially — especially abroad.' },
      { q: 'Which documents require SDM attestation?', a: 'Personal documents such as birth certificates, marriage certificates, affidavits, and police clearance certificates require SDM attestation before MEA apostille or embassy attestation for use in foreign countries.' },
      { q: 'Is e-stamping valid everywhere in India?', a: 'E-stamping through the Stock Holding Corporation of India Ltd (SHCIL) portal is accepted in most major states including Delhi, Maharashtra, Karnataka, UP, and others. However, a few states still mandate physical stamp papers. Our team verifies state-specific requirements before processing.' },
      { q: 'Can notarized documents be used abroad?', a: 'Notarization alone is generally not sufficient for international use. Documents going abroad typically require state-level attestation followed by MEA apostille (for Hague Convention countries) or embassy attestation (for non-Hague countries).' },
      { q: 'How long does the full attestation process take?', a: 'Notarization: same day. SDM attestation: 1–3 working days. HRD attestation: 3–7 days. MEA apostille: 3–7 working days. The complete chain for overseas documents usually takes 7–15 working days depending on document type and state.' },
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
