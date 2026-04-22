'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function SuccessionCertificatePage() {
  const data = {
    title: 'Succession Certificate',
    description:
      'Obtain a court-issued Succession Certificate under the Indian Succession Act 1925 to legally collect debts, securities, fixed deposits, and movable assets of a deceased person — the gold standard for estate succession in India.',
    heroBadges: ['Civil Court / District Court Issued', 'Indian Succession Act 1925 Sections 370–390', 'Full Legal Force & Payer Protection'],
    introTitle: 'What is a Succession Certificate?',
    introContent: (
      <p>
        A Succession Certificate is a judicial document issued by a Civil Court or District Court under Sections 370 to 390 of the Indian Succession Act, 1925, upon a petition by the legal heirs of a deceased person, authorising the certificate holder(s) to collect and receive the deceased&#39;s debts (money owed to the deceased), securities (shares, bonds, debentures, NSC, KVP, FD certificates), and other movable assets. It is the most authoritative succession document in India for movable assets and is required when: (a) no Will exists (intestate succession); (b) no valid nomination exists; (c) the value of assets is large enough that the holding institution (bank, company, MF house) insists on judicial certification before releasing; or (d) there is actual or potential dispute among heirs. The Succession Certificate is critical because it provides statutory protection to the payer: Section 384 of the Indian Succession Act provides that any payment made by a bank, company, or person to a holder of a Succession Certificate is a full discharge — meaning if the bank pays the certified heirs and a previously unknown heir later claims, the bank is protected from liability. This protection is not available when payments are made on the basis of a Legal Heir Certificate (administrative) alone. The process to obtain a Succession Certificate begins with a petition filed by one or more legal heirs in the Civil Court of the district where the deceased was last residing. The court examines the petition, issues a notice to respondents (other potential heirs), publishes a notice in a newspaper calling for objections from the public (typically once in two newspapers), and if no valid objection is received, grants the certificate after 45 days of the last publication. The court-granted certificate specifies the debts and securities for which the certificate is granted — the holder can then approach banks, companies, and depositories with the certificate to claim the assets. The process typically takes 3–6 months in civil courts with normal caseload, though some High Courts have special fast-track succession benches. Bond/surety is typically required by courts before grant, to cover potential subsequent claims.
      </p>
    ),
    detailsTitle: 'Why a Succession Certificate is the Strongest Succession Document',
    details: [
      {
        title: 'Legal Force of a Court Order',
        desc: 'A Succession Certificate is a court order — not an administrative certificate — giving it the highest legal authority in succession matters. It is enforceable like a civil court decree and cannot be overturned except by a higher court in appeal.',
        icon: ShieldCheck,
      },
      {
        title: 'Statutory Payer Protection',
        desc: 'Under Section 384 of the Indian Succession Act, banks, companies, and depositories that pay on the basis of a valid Succession Certificate are fully discharged from liability — protecting them from future claims by unknown heirs, creditors, or claimants. This is why large institutions insist on it.',
        icon: Zap,
      },
      {
        title: 'Covers All Movable Assets',
        desc: 'A Succession Certificate covers the full spectrum of the deceased\'s movable estate: bank FDs, savings accounts, shares, debentures, mutual funds, bonds, NSC/KVP/PPF/NPS accumulated balances, insurance policy proceeds (when no valid nominee), and outstanding salary/dues.',
        icon: Globe,
      },
      {
        title: 'Resolves Ambiguous Nomination & Joint Holdings',
        desc: 'In cases where nominees are deceased, nominations are disputed, or joint account holders are in conflict, a Succession Certificate issued by the Civil Court provides definitive clarity and eliminates the risk of multiple claims against the institution holding the assets.',
        icon: Award,
      },
    ],
    requirements: [
      'Death certificate of the deceased (original)',
      'Proof of last residence of the deceased (for establishing court jurisdiction)',
      'Details of all debts and securities to be covered under the certificate',
      'Identity and relationship proof of all petitioning legal heirs',
      'Court fee (ad valorem on the value of estate — 2% in most states)',
      'Legal advocate to file the petition before the Civil Court',
    ],
    processTitle: 'How to Obtain a Succession Certificate',
    processIntro:
      'The Succession Certificate petition is a formal court proceeding that requires professional legal representation. Our succession lawyers handle the petition drafting, filing, newspaper publication, hearing representation, and collection of the final certificate.',
    processSteps: [
      {
        title: 'Petition Drafting & Filing',
        desc: 'Our lawyers draft a detailed succession petition under Sections 372–373 of the Indian Succession Act — covering: particulars of the deceased, date and place of death, relationship of petitioners, complete schedule of debts and securities (share accounts, FDs, bank accounts, bonds) and their estimated value.',
        icon: UserCheck,
      },
      {
        title: 'Court Fee Payment & Filing',
        desc: 'Court fee is paid at the prescribed rate (typically 2% of the estate value subject to a ceiling in most states) using a court fee stamp. The petition is filed before the District Judge / Civil Judge (Senior Division) of the district where the deceased ordinarily resided.',
        icon: FileSearch,
      },
      {
        title: 'Newspaper Notice & Citation Period',
        desc: 'The court issues a notice to be published in one or two newspapers of wide circulation — calling on anyone with objection to appear within 45 days. This citation period allows unknown heirs, creditors, and third parties to object. If no valid objection is filed within 45 days of the last publication, the court proceeds to grant the certificate.',
        icon: CheckCircle2,
      },
      {
        title: 'Bond Execution & Certificate Grant',
        desc: 'Before granting the Succession Certificate, the court may require the petitioners to furnish a bond (with or without surety) under Section 376 ensuring they will apply the certificate proceeds properly. Once the bond is executed, the court issues the certified Succession Certificate bearing the court seal.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'A Succession Certificate typically takes 3–6 months from petition filing to certificate grant in a district civil court with a normal docket. Fast-track applications before High Courts or Commercial Courts (for large estates) may be faster.',
    documents: [
      {
        category: 'Deceased\'s Documents',
        list: [
          'Original death certificate from Municipal Corporation or Gram Panchayat',
          'Last known residential address proof of the deceased (Aadhaar / utility bill)',
          'Account statements, share certificates, bond papers, FD receipts of assets to be covered',
        ],
      },
      {
        category: 'Petitioner (Heir) Documents',
        list: [
          'Aadhaar Card and PAN Card of all petitioning heirs',
          'Proof of relationship: marriage certificate (spouse), birth certificate (children), adoption deed (adopted child)',
          'Passport-size photographs of all petitioning heirs',
        ],
      },
      {
        category: 'Court Proceeding Documents',
        list: [
          'Court fee stamps as prescribed (approx. 2% of estate value)',
          'Affidavit of assets listing all debts and securities in the petition schedule',
          'Surety bond / guarantee as directed by court (if required under Section 376)',
        ],
      },
    ],
    compliance: [
      {
        title: 'Use Certificate Within 12 Months',
        desc: 'A Succession Certificate, once granted, should ideally be used within a reasonable time (courts sometimes specify a time limit). Institutions to whom the certificate is presented may query its currency if too old. Present it promptly to all relevant institutions — banks, depositories (CDSL/NSDL), insurance companies, RTO — to claim assets without delay.',
      },
      {
        title: 'Income Tax Clearance for Estate',
        desc: 'The legal heir claiming the deceased\'s estate must ensure all income tax liabilities of the deceased are cleared. The heir should: (a) file the deceased\'s pending ITRs as legal representative; (b) obtain income tax clearance before distributing estate assets; and (c) disclose inherited assets in their own ITR under Schedule AL. Outstanding income tax of the deceased is a recoverable liability from the estate.',
      },
      {
        title: 'Stamp Duty on Succession Certificate',
        desc: 'A Succession Certificate is subject to court fees (paid at filing) in most states. Some states also levy a stamp duty on the certified document itself. This is an estate tax substitute — the court fee is typically 2% of the estate value subject to a ceiling (e.g., Maharashtra caps court fee at &#x20b9;75,000). Legal advice on structuring the estate schedule can optimise court fee outgo.',
      },
      {
        title: 'Distribute Assets Per Applicable Personal Law',
        desc: 'The Succession Certificate authorises collection of assets but does not determine the shares of heirs — that is governed by applicable personal law (Hindu Succession Act, Muslim Personal Law, Indian Succession Act). Upon collecting assets, the holder must distribute them to all heirs in their legally due shares. Wrongful retention by one heir is actionable before the Civil Court.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a Succession Certificate and a Legal Heir Certificate?',
        a: 'A Legal Heir Certificate is an administrative document issued by the Tehsildar/Municipality — it is relatively easy and quick to obtain, but does not carry judicial authority and does not protect the payer (bank/company) from future claims. A Succession Certificate is a court order from the Civil Court — it takes 3–6 months, involves court fees, but carries statutory payer protection under Section 384 of the Indian Succession Act. Large institutions insist on a Succession Certificate for releasing assets above a threshold.',
      },
      {
        q: 'What assets can a Succession Certificate cover?',
        a: 'A Succession Certificate can cover: fixed deposits and savings accounts in banks, shares and debentures, mutual fund units, bonds (NSC, KVP, Government Securities), insurance policy proceeds (without valid nomination), EPF/ESIC dues, outstanding salary/terminal benefits, foreign currency deposits, and any other debt or security owed to the deceased. It does not directly apply to immovable property — land and buildings are transferred through mutation, Will/probate, or family settlement.',
      },
      {
        q: 'Which court has jurisdiction to grant a Succession Certificate?',
        a: 'Under Section 371 of the Indian Succession Act, the Court of the District Judge (Civil Court) of the district in which the deceased ordinarily resided at the time of death has jurisdiction to grant a Succession Certificate. If the deceased resided abroad (NRI), the court of the district where any part of the property is situated has jurisdiction.',
      },
      {
        q: 'Is a Succession Certificate required if there is a nominee?',
        a: 'Nomination does not override succession rights — a nominee is a trustee, not the legal owner. However, in practice, many banks, depository participants, and insurance companies release assets to nominees without insisting on a Succession Certificate if the amount is small. For amounts above the institution&#39;s internal threshold (often &#x20b9;5 lakhs), institutions may still require a Succession Certificate even if a nomination exists, to protect themselves from heir disputes.',
      },
      {
        q: 'Can a Succession Certificate be challenged?',
        a: 'Yes. A Succession Certificate can be challenged by an aggrieved party (an omitted legal heir, a creditor) in the same court or a higher court within the prescribed limitation period. If fraud is proved, the court can revoke the certificate under Section 383 of the Indian Succession Act. The surety bond/guarantee obtained by the court before granting the certificate is meant to cover such eventualities — this is why courts insist on surety before grant.',
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
