'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function SaleDeedPage() {
  const data = {
    title: 'Sale Deed Registration',
    description:
      'Legally transfer immovable property ownership with a properly executed and registered Sale Deed under the Transfer of Property Act 1882 and Registration Act 1908.',
    heroBadges: ['Transfer of Property Act 1882', 'Sub-Registrar Registration', 'TDS & Stamp Duty Compliance'],
    introTitle: 'What is a Sale Deed?',
    introContent: (
      <p>
        A Sale Deed is the primary and most conclusive legal document that transfers absolute ownership of immovable property from a seller to a buyer in India. Governed by the Transfer of Property Act, 1882 and executed under the Registration Act, 1908, the Sale Deed must be executed on non-judicial stamp paper of the appropriate value, signed by both the seller and buyer in the presence of at least two witnesses, and mandatorily registered at the office of the Sub-Registrar of Assurances within four months of execution. The stamp duty payable varies by state — typically ranging from 4% to 7% of the property's market value or circle rate (whichever is higher) — with concessions often available for women buyers (e.g., 1% lower in Delhi and Uttar Pradesh). Under Section 194-IA of the Income Tax Act, 1961, the buyer is required to deduct TDS at 1% of the sale consideration if the property value exceeds &#x20b9;50 lakhs and remit it via Form 26QB within 30 days of the month-end in which deduction was made. An unregistered sale deed has no legal validity to transfer property title and is inadmissible as evidence in court for immovable property transactions exceeding &#x20b9;100 in value. After registration, the buyer should apply for mutation (Dakhil Kharij) at the municipal corporation or tehsil office to update revenue records.
      </p>
    ),
    detailsTitle: 'Why Sale Deed Registration is Critical',
    details: [
      {
        title: 'Legal Title Transfer',
        desc: 'A registered Sale Deed is the only document that conclusively transfers ownership of immovable property — unregistered transfers have no legal standing under Section 54 of the Transfer of Property Act.',
        icon: ShieldCheck,
      },
      {
        title: 'Stamp Duty & TDS Compliance',
        desc: 'Avoid penalties by correctly computing state-specific stamp duty (4%–7%) and deducting 1% TDS under Section 194-IA for properties exceeding &#x20b9;50 lakhs, filed via Form 26QB.',
        icon: Zap,
      },
      {
        title: 'Protection Against Future Disputes',
        desc: 'Registered sale deeds are indexed in public records at the Sub-Registrar office, making the transaction traceable, searchable, and legally binding against third parties and future buyers.',
        icon: Globe,
      },
      {
        title: 'RERA & Loan Eligibility',
        desc: 'Banks and financial institutions require a registered sale deed for home loan disbursement; under RERA 2016, it is the foundational ownership document for any redevelopment or resale.',
        icon: Award,
      },
    ],
    requirements: [
      'Original title documents and previous sale deed/chain of title',
      'Property valuation report or circle rate certificate for stamp duty computation',
      'PAN card of both buyer and seller (mandatory for TDS under Section 194-IA)',
      'Aadhaar card and passport-size photographs of all parties and witnesses',
      'Encumbrance Certificate (Form 15/16) confirming no existing charges on property',
      'Property tax paid receipts up to date and No-Objection Certificate (if applicable)',
    ],
    processTitle: 'How to Register a Sale Deed in India',
    processIntro:
      'Sale deed registration is a multi-step process that involves document preparation, stamp duty payment, appointment at the Sub-Registrar office, and post-registration formalities. Our legal experts handle each stage end-to-end.',
    processSteps: [
      {
        title: 'Draft the Sale Deed',
        desc: 'Our lawyers draft the sale deed incorporating all agreed terms — consideration amount, property schedule, representations, indemnities, and possession clause — in compliance with the Transfer of Property Act 1882.',
        icon: UserCheck,
      },
      {
        title: 'Stamp Duty Calculation & Payment',
        desc: 'We compute the correct stamp duty based on the property value or government circle rate (whichever is higher) and arrange payment through authorised bank challan, e-stamping portal, or franking machine as required by your state.',
        icon: FileSearch,
      },
      {
        title: 'TDS Deduction & Form 26QB Filing',
        desc: 'If consideration exceeds &#x20b9;50 lakhs, we assist the buyer in deducting 1% TDS, filing Form 26QB on the TRACES portal, and issuing Form 16B to the seller within 15 days of TDS payment.',
        icon: CheckCircle2,
      },
      {
        title: 'Sub-Registrar Appointment & Registration',
        desc: 'We schedule and accompany all parties to the Sub-Registrar of Assurances. Both parties and two witnesses appear in person (or via PoA), biometrics are captured, and the deed is stamped, scanned, and registered in the official register.',
        icon: FileCheck,
      },
      {
        title: 'Post-Registration Mutation',
        desc: 'After receiving the registered deed, we assist with filing the mutation application at the municipal corporation or tehsil office to update property tax records and revenue register in the buyer\'s name.',
        icon: Home,
      },
    ],
    processOutro:
      'The entire sale deed registration process typically takes 7–15 working days from the date of document collection, subject to Sub-Registrar appointment availability and state-specific procedures.',
    documents: [
      {
        category: 'Identity & Address Proof',
        list: [
          'PAN Card of buyer and seller (mandatory)',
          'Aadhaar Card / Passport / Voter ID of all parties',
          'Passport-size photographs of buyer, seller, and two witnesses',
        ],
      },
      {
        category: 'Property Title Documents',
        list: [
          'Previous registered sale deed / chain of title documents (30 years)',
          'Encumbrance Certificate (Form 15 or Form 16) from Sub-Registrar',
          'Latest property tax paid receipt and municipal khata/patta certificate',
        ],
      },
      {
        category: 'Financial & Compliance Documents',
        list: [
          'Stamp duty payment challan / e-stamp certificate',
          'Form 26QB challan (TDS payment proof) if property value exceeds &#x20b9;50 lakhs',
          'Bank draft / RTGS confirmation for sale consideration',
        ],
      },
    ],
    compliance: [
      {
        title: 'Mutation Within 3 Months',
        desc: 'After registration, the buyer must apply for mutation (Dakhil Kharij) at the local municipal corporation or tehsil within 3 months to update property tax records. Delay attracts pendency and can complicate future transactions.',
      },
      {
        title: 'Capital Gains Tax Filing',
        desc: 'The seller must report the sale in their Income Tax Return for the relevant assessment year, compute Short-Term or Long-Term Capital Gains, and pay applicable tax. Exemptions under Sections 54, 54EC, and 54F may apply.',
      },
      {
        title: 'Form 16B Issuance to Seller',
        desc: 'The buyer (deductor) must issue Form 16B — the TDS certificate — to the seller within 15 days from the due date of filing Form 26QB. Non-issuance attracts a penalty of &#x20b9;100 per day under Section 272A.',
      },
      {
        title: 'Safe Custody of Registered Deed',
        desc: 'The original registered sale deed must be kept safely as it is the primary ownership proof. A certified copy can be obtained from the Sub-Registrar office if the original is lost, but prevention is strongly advised.',
      },
    ],
    faqs: [
      {
        q: 'Is stamp duty the same across all states in India?',
        a: 'No. Stamp duty on sale deeds varies by state — it ranges from 4% to 7% of the property market value or circle rate. Maharashtra charges 6%, Delhi 6%, Karnataka 5%, and Tamil Nadu 7%. Many states offer 1%–2% concession for women buyers.',
      },
      {
        q: 'What is the penalty for not registering a sale deed?',
        a: 'An unregistered sale deed cannot transfer title to immovable property and is inadmissible as evidence in court for ownership claims. Under Section 77 of the Registration Act 1908, the registering officer can also levy a penalty of up to 10 times the registration fee for late registration.',
      },
      {
        q: 'Can a sale deed be executed by a Power of Attorney holder?',
        a: 'Yes, a duly registered General Power of Attorney (GPA) holder can execute and register a sale deed on behalf of the seller or buyer. However, post the Supreme Court judgment in Suraj Lamp & Industries v. State of Haryana (2011), a GPA by itself does not transfer title — a registered sale deed remains mandatory.',
      },
      {
        q: 'What is the time limit to register a sale deed after execution?',
        a: 'Under Section 23 of the Registration Act 1908, a document must be presented for registration within 4 months of execution. If the deadline is missed, an application for condonation of delay can be filed with the Sub-Registrar by paying a fine up to 10 times the registration fee, with a maximum grace period of an additional 4 months.',
      },
      {
        q: 'Is TDS applicable if the property is sold below &#x20b9;50 lakhs?',
        a: 'No. TDS under Section 194-IA is applicable only when the sale consideration exceeds &#x20b9;50 lakhs. For agricultural land in rural areas, TDS under 194-IA does not apply regardless of the sale value.',
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
