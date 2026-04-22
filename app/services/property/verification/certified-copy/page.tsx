'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function CertifiedCopyPage() {
  const data = {
    title: 'Certified Copy of Property Documents',
    description:
      'Obtain an official certified copy of any registered property document — sale deed, agreement, mortgage deed, or will — from the Sub-Registrar\'s office for court proceedings, loans, or lost document replacement.',
    heroBadges: ['Official Sub-Registrar Seal & Signature', 'Admissible in Court', 'Online in Major States'],
    introTitle: 'What is a Certified Copy of a Property Document?',
    introContent: (
      <p>
        A Certified Copy is an official, authenticated copy of a registered document (such as a sale deed, gift deed, mortgage deed, lease deed, agreement to sale, or registered Will) issued by the Sub-Registrar of Assurances bearing the official seal of the registration office and the certifying officer&#39;s signature — certifying that it is a true and accurate copy of the original registered document as preserved in the official register. Certified copies are issued under Section 57 of the Indian Evidence Act, 1872, which makes them admissible in all courts as secondary evidence equivalent to the original document itself. Unlike photocopies, a certified copy carries legal evidentiary weight. Unlike the Index II extract (which only shows the summary of registration), a certified copy reproduces the complete text of the registered document. In India, certified copies are critical in a wide range of situations: (a) when the original property document has been lost, destroyed, or misplaced — the certified copy from the Sub-Registrar can serve as a replacement for all practical purposes; (b) for court proceedings where the original document cannot be produced; (c) for bank loan applications where the bank requires documentary evidence but the original is in the borrower&#39;s custody; (d) for property mutation when the original is not available; (e) for NRIs who need a copy of their India property documents; and (f) for legal heirs who need copies of their deceased parent&#39;s property deeds. One of the most important features is that a certified copy can be obtained by any person — it is not restricted to the parties who originally executed the document. This is because all registered documents are part of the public record. In most major states, certified copy applications can now be submitted online through state registration portals — Karnataka (Kaveri Online), Maharashtra (IGR Maharashtra), Tamil Nadu (TNREGINET) — with digital certified copies issued for recent registrations. For older documents, physical certified copies are obtained from the Sub-Registrar office.
      </p>
    ),
    detailsTitle: 'When You Need a Certified Copy',
    details: [
      {
        title: 'Lost Original Document Replacement',
        desc: 'If the original registered sale deed or property document is lost or destroyed, a certified copy from the Sub-Registrar serves as its legal equivalent for all purposes — mutation, resale, bank loan, court proceedings, and government applications. No other substitute is legally acceptable.',
        icon: ShieldCheck,
      },
      {
        title: 'Court Proceedings & Evidence',
        desc: 'Under Section 57 and 74 of the Indian Evidence Act, a certified copy of a registered document is admissible in court as primary evidence without requiring the original. Courts, tribunals, RERA authorities, and consumer forums accept certified copies for property disputes.',
        icon: Zap,
      },
      {
        title: 'Bank Loan Applications',
        desc: 'Banks sometimes require certified copies of documents in the title chain — particularly for older properties where originals may not be readily available — as part of the property title investigation for home loan or LAP (Loan Against Property) processing.',
        icon: Globe,
      },
      {
        title: 'NRI Document Access',
        desc: 'NRIs holding property in India can obtain certified copies of their property documents remotely through authorised representatives or through online state portals, enabling them to manage property matters without travelling to India.',
        icon: Award,
      },
    ],
    requirements: [
      'Document identification details: registration number, book number, and year of registration',
      'Name of the parties to the document (at least one party\'s name)',
      'Sub-Registrar office where the document was registered',
      'Approximate year of registration (for searching the relevant register)',
      'Applicant\'s identity proof (Aadhaar / PAN) — any person can apply',
      'Prescribed fee for certified copy (varies by state and number of pages)',
    ],
    processTitle: 'How to Obtain a Certified Copy of a Property Document',
    processIntro:
      'Our team obtains certified copies from Sub-Registrar offices across India — both through online portals for recent documents and through physical applications for older records. We handle the entire process on your behalf.',
    processSteps: [
      {
        title: 'Document Identification',
        desc: 'We identify the exact document using available information — registration number, Index II reference, parties\' names, and approximate registration year. For lost documents, we conduct a preliminary search in the Sub-Registrar&#39;s General Index to locate the registration entry.',
        icon: UserCheck,
      },
      {
        title: 'Application Submission',
        desc: 'We submit the certified copy application online (for states with portal access) or in-person at the Sub-Registrar office, providing all identification details, paying the prescribed fee, and specifying the number of pages and number of copies required.',
        icon: FileSearch,
      },
      {
        title: 'Verification & Processing',
        desc: 'The Sub-Registrar office verifies the application against the original register entry. For recent registrations (post-2000 in most states), certified copies are generated from digital scans. For older registrations, certified copies are manually prepared from physical registers.',
        icon: CheckCircle2,
      },
      {
        title: 'Collection & Authentication',
        desc: 'The certified copy is issued with the Sub-Registrar&#39;s official seal and the certifying officer\'s signature on each page. We collect the certified copy on your behalf and courier it to you. Digital certified copies (where available) are provided as PDF with digital signatures.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'Online certified copies through state portals are typically available within 24–72 hours for digitised registrations. Physical certified copies from Sub-Registrar offices take 7–30 days depending on the state, volume of applications, and age of the document.',
    documents: [
      {
        category: 'Application Identification',
        list: [
          'Registration number and book number of the document',
          'Year of registration and name of Sub-Registrar office',
          'Names of the executing parties (seller/buyer/donor/mortgagor)',
        ],
      },
      {
        category: 'Applicant Identity',
        list: [
          'Aadhaar Card or PAN Card of the applicant (any person can apply)',
          'Authorization letter (if applying through a representative)',
          'Power of Attorney (for NRIs applying through Indian representative)',
        ],
      },
      {
        category: 'Fee & Portal Access',
        list: [
          'State portal account credentials (Kaveri / IGR / TNREGINET) for online applications',
          'Prescribed fee per page / per copy as notified by the state government',
          'Application form in the prescribed format (state-specific)',
        ],
      },
    ],
    compliance: [
      {
        title: 'Register FIR for Lost Original',
        desc: 'If the original registered document is lost or stolen (not just misplaced), an FIR must be filed with the local police and a public notice published in a newspaper before the certified copy is used for any transaction or legal purpose. This protects against fraud using the original by an unauthorised person.',
      },
      {
        title: 'Affidavit for Lost Original',
        desc: 'For using a certified copy in lieu of a lost original in property transactions or bank loan applications, an affidavit (sworn on stamp paper before a Notary or Magistrate) stating the circumstances of loss must accompany the certified copy. Some authorities also require an indemnity bond.',
      },
      {
        title: 'Certified Copy Not a Title Document',
        desc: 'A certified copy is evidence of registration and the document\'s contents — it is not a new title document. It proves that the original was registered but does not cure any defect in the original title. All title search, encumbrance check, and due diligence must still be conducted on the basis of the certified copy\'s contents.',
      },
      {
        title: 'Update Bank Records with Certified Copy',
        desc: 'If the original bank-held title document (deposited as mortgage security) is lost, the borrower and bank must jointly apply for a certified copy, register it as a substitute, and update the bank\'s security register. This process requires coordination between the borrower, the Sub-Registrar, and the bank\'s legal department.',
      },
    ],
    faqs: [
      {
        q: 'Who can apply for a certified copy of a registered document?',
        a: 'Any person can apply for a certified copy of a registered document — it is not restricted to the parties who originally executed the document. This is because all registered documents are part of the public record and are indexed in the Sub-Registrar\'s General Index. The applicant need not prove any interest in the property.',
      },
      {
        q: 'Can a certified copy be used if the original is lost?',
        a: 'Yes. Under Section 57 of the Indian Evidence Act, a certified copy of a registered document is admissible in court as primary evidence. For property transactions, mutation, and bank loans, a certified copy accompanied by an FIR report (for theft/loss) and affidavit of loss is accepted as equivalent to the original.',
      },
      {
        q: 'What is the difference between a certified copy and Index II?',
        a: 'Index II is a summary extract from the registration index showing the key details of a registered document — parties, consideration, property description, and registration number. A Certified Copy reproduces the complete text of the registered document exactly as submitted for registration, including all schedules and annexures. For court and bank purposes, a certified copy (not Index II) is required.',
      },
      {
        q: 'How far back can certified copies be obtained?',
        a: 'Certified copies can be obtained for any registered document going back to the time of the Sub-Registrar office&#39;s establishment — in some cases over 100 years. However, for very old documents, the physical registers may be fragile or partially damaged, making reproduction difficult. States have been digitising old records, with Maharashtra having digitised records back to 1985 and Karnataka back to 1976.',
      },
      {
        q: 'Is an e-copy (digital) certified copy legally valid?',
        a: 'Yes. Digital certified copies issued through official state portals (Kaveri, IGR Maharashtra) with the digital signature of the certifying officer are legally valid under the Information Technology Act, 2000 and the Indian Evidence Act. Courts, banks, and government offices accept digitally signed certified copies. However, some older institutions or specific proceedings may still require a physical certified copy — verify in advance.',
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
