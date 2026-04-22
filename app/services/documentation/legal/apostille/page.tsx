'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale } from 'lucide-react';

export default function ApostillePage() {
  const data = {
    title: 'Apostille (MEA/HRD) Attestation',
    description: 'Get your Indian documents apostilled by the Ministry of External Affairs (MEA) for use in 118+ Hague Convention countries. Complete HRD, SDM, and MEA apostille service.',
    heroBadges: ['Hague Convention Compliant', '118+ Countries Accepted', 'End-to-End Processing'],
    introTitle: 'What is Apostille Attestation?',
    introContent: (
      <p>Apostille is an internationally recognized certificate issued under the Hague Convention of 5 October 1961 (also called the Apostille Convention) that authenticates the origin of a public document for use in any of the 118+ member countries without the need for further embassy or consular attestation. India acceded to the Hague Apostille Convention in 2005, and the Ministry of External Affairs (MEA) is the sole competent authority in India to issue the apostille sticker on documents. Apostille is required for educational documents (degree certificates, mark sheets, school leaving certificates), personal documents (birth certificate, marriage certificate, police clearance certificate), and commercial documents (power of attorney, company registration certificates, GST registration). However, before MEA can apostille a document, it must go through the correct prior-attestation chain: educational documents need attestation by the State Education Department or HRD Ministry; personal documents need notarization or SDM attestation; commercial documents need Chamber of Commerce attestation. Common use cases include overseas employment in UAE, Saudi Arabia, Germany, UK, and USA; higher education abroad; immigration and PR applications; and international business transactions. India now also provides e-Apostille services through the MEA's DigiLocker-based digital apostille system for certain document types.</p>
    ),
    detailsTitle: 'Why You Need Apostille Attestation',
    details: [
      { title: 'Internationally Recognized', desc: 'Apostille is accepted in 118+ Hague Convention member countries including USA, UK, Germany, UAE, Australia, Canada, and more — eliminating the need for country-specific embassy attestation.', icon: Globe },
      { title: 'Mandatory for Overseas Work & Study', desc: 'Most foreign employers, universities, and immigration authorities require apostilled educational and personal documents to verify their authenticity before processing applications.', icon: Award },
      { title: 'Single-Window MEA Authentication', desc: 'Once prior-attestation is complete, MEA\'s apostille sticker provides a universally recognized seal of authenticity, replacing multi-step embassy verifications.', icon: ShieldCheck },
      { title: 'Covers All Document Categories', desc: 'Educational certificates (degree, diploma, marksheet), personal documents (birth, marriage, PCC), and commercial documents (POA, incorporation certificate) are all eligible for apostille.', icon: FileText },
    ],
    requirements: [
      'Original documents to be apostilled (educational, personal, or commercial)',
      'Passport copy of the applicant',
      'Prior state-level attestation (HRD / SDM / Chamber of Commerce)',
      'Destination country name (to confirm Hague Convention membership)',
      'Purpose of apostille (employment, education, immigration, business)',
      'Covering letter mentioning document details and purpose',
    ],
    processTitle: 'How to Get Apostille Attestation in India',
    processIntro: 'The apostille process involves a mandatory chain of prior attestations before MEA issues the final apostille sticker. We manage the entire chain end-to-end.',
    processSteps: [
      { title: 'Document Verification & Classification', desc: 'We classify your documents (educational / personal / commercial) and identify the correct prior-attestation path required before MEA submission.', icon: UserCheck },
      { title: 'State-Level Attestation', desc: 'Educational documents go to the State Education Department or HRD. Personal documents go to Notary or SDM. Commercial documents go to the Chamber of Commerce for attestation.', icon: FileSearch },
      { title: 'MEA Apostille Submission', desc: 'After state-level attestation, we submit documents to the MEA\'s Central Passport Office or Regional Authentication Centre for the apostille sticker.', icon: CheckCircle2 },
      { title: 'Apostille Sticker Issuance & Delivery', desc: 'MEA affixes the official apostille sticker with a unique reference number. We deliver the apostilled documents to you with a verification QR code for authenticity checking.', icon: FileCheck },
    ],
    processOutro: 'The total apostille process typically takes 7–15 working days depending on document type, state of issuance, and current MEA processing timelines.',
    documents: [
      { category: 'Applicant Identity', list: ['Passport (all pages copy)', 'Aadhaar Card', 'Visa / offer letter (for purpose proof)'] },
      { category: 'Educational Documents', list: ['Original degree / diploma / marksheet', 'Board / University seal must be present', 'State HRD attestation (prior to MEA)'] },
      { category: 'Personal & Commercial Documents', list: ['Birth / marriage / PCC certificate with SDM attestation', 'Power of attorney with notarization', 'Company documents with Chamber of Commerce stamp'] },
    ],
    compliance: [
      { title: 'Prior Attestation Chain is Mandatory', desc: 'MEA will not apostille a document without prior state-level attestation. Educational docs need HRD/State Education attestation; personal docs need SDM/Notary; commercial docs need Chamber of Commerce. Skipping any step results in rejection.' },
      { title: 'Only for Hague Convention Countries', desc: 'Apostille is valid only for the 118+ countries that are members of the Hague Convention. For non-member countries (e.g., Qatar, Kuwait, China), standard MEA attestation followed by the respective embassy attestation is required instead.' },
      { title: 'Verify Country-Specific Requirements', desc: 'Some countries (like UAE) have specific requirements for document types and attestation validity periods. Always confirm the destination country\'s embassy requirements before initiating the apostille process.' },
      { title: 'Document Condition Matters', desc: 'Torn, laminated, or damaged original documents may be rejected. Ensure originals are in good condition. If an original is not available, a certified true copy from the issuing authority may be acceptable.' },
    ],
    faqs: [
      { q: 'Is apostille the same as embassy attestation?', a: 'No. Apostille is issued by MEA India under the Hague Convention and is accepted in 118+ member countries without further attestation. Embassy attestation is required for non-Hague countries and involves the destination country\'s embassy in India also stamping the document.' },
      { q: 'Which countries accept apostille from India?', a: 'Countries that are members of the Hague Apostille Convention accept Indian apostille. Major ones include USA, UK, Germany, France, Italy, Australia, Spain, Netherlands, UAE (recently joined), Canada, and many others. Always verify current membership at the HCCH official website.' },
      { q: 'Does apostille have an expiry date?', a: 'The apostille sticker itself does not have an expiry. However, some countries or institutions require the document to have been apostilled recently (e.g., within 6 months). Check the requirements of the destination institution or authority.' },
      { q: 'Can I get apostille for a photocopy of a document?', a: 'Generally, MEA requires original documents or certified true copies issued by the original issuing authority. Photocopies alone are typically not apostilled unless notarized and specifically accepted by the receiving country.' },
      { q: 'What is the difference between HRD attestation and MEA apostille?', a: 'HRD attestation is the state-level verification of educational documents by the State Education Department or HRD Ministry — it is a prerequisite for MEA apostille. MEA apostille is the final international authentication issued by the Ministry of External Affairs that makes the document valid for use in Hague Convention countries.' },
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
