'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale } from 'lucide-react';

export default function AffidavitPage() {
  const data = {
    title: 'Affidavit Drafting & Notarization',
    description: 'Get a professionally drafted affidavit on the correct stamp paper value, signed before a Notary Public or Magistrate. Used for name change, income proof, lost documents, and more.',
    heroBadges: ['State-Specific Stamp Paper', 'Notary / Magistrate Attestation', 'Same-Day Service Available'],
    introTitle: 'What is an Affidavit?',
    introContent: (
      <p>An affidavit is a voluntary, sworn written statement of facts made by a deponent (the person making the affidavit) on a non-judicial stamp paper and signed before an authorized official such as a Notary Public, Magistrate, or Oath Commissioner. In India, affidavits carry significant legal weight and are used across a wide range of purposes including name change or spelling correction, address proof declaration, income declaration for Below Poverty Line (BPL) certificates or scholarship applications, loss of original document (passport, marksheet, driving licence), proof of relationship, property ownership declaration, residential status declaration, and court proceedings. The stamp paper value for an affidavit varies by state — for example, in Delhi and Maharashtra it is typically &#8377;10 to &#8377;100, while some states mandate &#8377;20 or higher. Using the incorrect stamp paper value or failing to appear before the notary in person can render the affidavit invalid. Our experts ensure the affidavit is drafted in precise legal language, on the correct stamp paper, and properly attested to hold up in government offices and courts across India.</p>
    ),
    detailsTitle: 'Key Uses of an Affidavit in India',
    details: [
      { title: 'Name Change & Correction', desc: 'Affidavits are the primary document for declaring a name change or correcting spelling discrepancies in Aadhaar, PAN, passport, or educational certificates.', icon: FileText },
      { title: 'Lost Document Declaration', desc: 'Declare loss of passport, marksheet, driving licence, or property documents to apply for duplicates from issuing authorities.', icon: ShieldCheck },
      { title: 'Income & Residence Proof', desc: 'Used as income or residence declarations for scholarships, EWS certificates, BPL applications, and government scheme eligibility.', icon: Award },
      { title: 'Court & Legal Proceedings', desc: 'Affidavits serve as sworn evidence in civil suits, High Court writ petitions, family court matters, and summary proceedings before tribunals.', icon: Scale },
    ],
    requirements: [
      'Deponent\'s full name and address',
      'Purpose and subject matter of the affidavit',
      'State where the affidavit is to be used (determines stamp paper value)',
      'PAN / Aadhaar / Passport of deponent for identity verification',
      'Supporting documents (if any) to be annexed',
      'Personal presence for signing before Notary (mandatory)',
    ],
    processTitle: 'How to Get an Affidavit Drafted & Notarized',
    processIntro: 'Our streamlined process ensures your affidavit is accurate, state-compliant, and notarized within the same day in most cases.',
    processSteps: [
      { title: 'Share Purpose & Details', desc: 'Provide us the purpose of the affidavit, deponent details, and the state where it will be used so we determine the correct stamp paper value.', icon: UserCheck },
      { title: 'Draft Preparation', desc: 'Our legal team drafts the affidavit in proper legal language with all required recitals, deponent\'s oath, and annexures if applicable.', icon: FileSearch },
      { title: 'Review & Stamp Paper Procurement', desc: 'You review and approve the draft. We procure the correct value non-judicial stamp paper (physical or e-stamp as per state norms).', icon: CheckCircle2 },
      { title: 'Signing Before Notary / Magistrate', desc: 'The deponent signs the affidavit in person before a Notary Public or Magistrate who affixes their seal and signature, completing the attestation.', icon: FileCheck },
    ],
    processOutro: 'Most affidavits are completed within the same day. Court affidavits requiring Magistrate attestation may take 1–2 working days.',
    documents: [
      { category: 'Deponent Identity', list: ['Aadhaar Card (original for Notary verification)', 'PAN Card', 'Passport or Voter ID'] },
      { category: 'Purpose-Specific Documents', list: ['FIR copy (for lost document affidavit)', 'Old and new name proof (for name change affidavit)', 'Income documents or ration card (for income/BPL affidavit)'] },
      { category: 'Annexures (if applicable)', list: ['Copy of lost document (if available)', 'Gazette notification (for name change, if already published)', 'Previous affidavit (if amending an earlier one)'] },
    ],
    compliance: [
      { title: 'Correct Stamp Paper Value is Mandatory', desc: 'Using an incorrect stamp paper denomination renders the affidavit legally defective. Stamp duty values vary by state — Delhi uses &#8377;10, Maharashtra &#8377;100 for most affidavits. Always verify with the accepting authority.' },
      { title: 'Personal Appearance is Non-Negotiable', desc: 'The deponent must physically appear before the Notary or Magistrate for signing and identification. Affidavits signed in absentia or with a proxy are invalid.' },
      { title: 'Notarization vs. Magistrate Attestation', desc: 'For general purposes (address proof, income), notarization suffices. For court-use affidavits, attestation by a First Class Judicial Magistrate may be specifically required. Confirm with the court or authority.' },
      { title: 'Cross-State Use May Require Re-Attestation', desc: 'An affidavit notarized in one state may need additional attestation if used in another state or for central government submissions. Check requirements of the accepting authority before use.' },
    ],
    faqs: [
      { q: 'What is the correct stamp paper value for an affidavit in India?', a: 'Stamp paper values vary by state and purpose. Common values are &#8377;10, &#8377;20, &#8377;50, or &#8377;100. For example, most general affidavits in Delhi are on &#8377;10 stamp paper, while Maharashtra typically requires &#8377;100. Always confirm with the authority where the affidavit will be submitted.' },
      { q: 'Can an affidavit be used as address proof?', a: 'Yes. A self-declaration affidavit is accepted as address proof by many government departments, banks, and courts, especially when official documents like utility bills are unavailable.' },
      { q: 'Is it mandatory to physically visit a Notary for affidavit attestation?', a: 'Yes. The Notary Public (or Magistrate) must physically verify your identity and witness your signature. There is no provision for online notarization under the Notaries Act 1952 in India currently.' },
      { q: 'Can the same affidavit be used multiple times?', a: 'An original notarized affidavit is a single-use document. However, you can take certified true copies from the Notary or submit photocopies with self-attestation, depending on the accepting authority\'s requirements.' },
      { q: 'What is the difference between an affidavit and a declaration?', a: 'An affidavit is a sworn statement made under oath before an authorized official (Notary/Magistrate) and is legally admissible in court. A declaration is a written statement not necessarily made under oath and may not carry the same evidentiary weight.' },
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
