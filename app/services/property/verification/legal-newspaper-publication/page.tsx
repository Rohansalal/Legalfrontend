'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function LegalNewspaperPublicationPage() {
  const data = {
    title: 'Legal Publication in Newspaper',
    description:
      'Publish legally required property and document-related public notices in English and vernacular newspapers — compliant with SARFAESI, lost document procedures, and court requirements across India.',
    heroBadges: ['English & Vernacular Newspapers', 'SARFAESI & Court Compliance', 'Affidavit + Clippings Package'],
    introTitle: 'What is Legal Publication in Newspaper?',
    introContent: (
      <p>
        Legal newspaper publication (also referred to as a &#x201c;public notice&#x201d; or &#x201c;legal notice in newspaper&#x201d;) is the practice of publishing a formal notice in one or more newspapers of wide circulation to inform the general public of a specific legal event, transaction, or loss — creating a public record and providing constructive notice to any person who may have an interest in the matter. In India, such publications serve multiple critical legal purposes and are mandatorily required in several scenarios. Under the SARFAESI Act, 2002, banks must publish a notice in two newspapers (one English and one regional language) before taking possession of secured assets or conducting a public auction — this gives the public (including prospective buyers) notice of the distress sale. For lost property documents (original sale deed, share certificate, title deed), publishing a public notice in a newspaper is the standard practice before obtaining a certified copy or obtaining a fresh loan — it puts any potential fraudster (who may have found the original) on notice that the document is lost, and provides a public record that the original&#39;s subsequent use without the owner&#39;s knowledge is not authorised. For lost share certificates of cooperative housing societies, the society requires a newspaper notice before issuing a duplicate certificate. Other common uses include: property disputes and claims (constructive notice), name change notifications (alongside gazette notification), change of business address, partnership dissolution notices, and court-directed public notices for summons against defendants whose address is unknown (Order V Rule 20 CPC — service by substituted service/publication). Publications must generally be made in at least two newspapers — one widely circulated English newspaper and one regional language (vernacular) newspaper in the area where the property is located or the event occurred. Affidavits sworn before a Notary or First Class Magistrate, along with original newspaper clippings, are typically submitted to the relevant authority (Sub-Registrar, society, bank, or court) as proof of publication.
      </p>
    ),
    detailsTitle: 'Key Uses of Legal Newspaper Publication',
    details: [
      {
        title: 'Lost Document Public Notice',
        desc: 'Publishing a notice for a lost property document (sale deed, share certificate, title deed) in English and regional newspapers is the legally required step before applying for a certified copy substitute, duplicate share certificate, or bank loan without original documents.',
        icon: ShieldCheck,
      },
      {
        title: 'SARFAESI Auction Notice',
        desc: 'Banks enforcing SARFAESI security must publish auction notices in two newspapers before the auction date. The notice must appear at least 30 days before the auction, giving prospective buyers and the borrower advance notice — failure to publish invalidates the auction.',
        icon: Zap,
      },
      {
        title: 'Court-Directed Substituted Service',
        desc: 'When a defendant in a property case cannot be located for personal service of summons, courts order &#x201c;substituted service&#x201d; — publication of the summons in a newspaper. This constitutes valid service under Order V Rule 20 of CPC, enabling the case to proceed.',
        icon: Globe,
      },
      {
        title: 'Constructive Notice of Property Claims',
        desc: 'Publishing a public notice about a property dispute, pending sale objection, or ownership claim provides constructive notice to all future purchasers and encumbrancers — protecting the claimant&#39;s interest against subsequent purchasers who take with notice of the claim.',
        icon: Award,
      },
    ],
    requirements: [
      'Draft of the notice content in English (lawyer-drafted, factually precise)',
      'Regional language translation of the notice',
      'Identification of circulation area (city, district, state) for newspaper selection',
      'Names of newspapers to be approached (must have wide circulation in the area)',
      'Purpose of publication (lost document, SARFAESI, court notice, etc.)',
      'Affidavit to be executed after publication (notarised on stamp paper)',
    ],
    processTitle: 'How to Publish a Legal Notice in Newspapers',
    processIntro:
      'Legal newspaper publications require accurate drafting, selection of appropriate newspapers with adequate circulation, and collection of clippings for submission to authorities. Our team handles the complete publication and affidavit process.',
    processSteps: [
      {
        title: 'Draft the Public Notice',
        desc: 'Our lawyers draft the public notice with precise, factually accurate content covering: the description of the lost document / property / transaction, the notifying party&#39;s full details, the nature of the notice (lost document, auction, dispute), and the relevant date/timeline.',
        icon: UserCheck,
      },
      {
        title: 'Newspaper Selection & Booking',
        desc: 'We identify and book space in appropriate newspapers — typically one leading English daily (Times of India, Hindustan Times, Indian Express) and one leading regional language daily (Maharashtra Times, Lokmat, Eenadu, Dinamalar, Dainik Bhaskar as applicable to the state/region).',
        icon: FileSearch,
      },
      {
        title: 'Publication & Clipping Collection',
        desc: 'The notice is published as booked. We collect the original newspaper copies and cut out the published notice (newspaper clippings). These clippings are authenticated and preserved for submission to the relevant authority.',
        icon: CheckCircle2,
      },
      {
        title: 'Affidavit Preparation & Notarisation',
        desc: 'We prepare an affidavit on stamp paper recording: the fact of publication, newspaper names and dates, copy of the notice published, and the deponent&#39;s sworn statement. The affidavit is executed before a Notary Public or First Class Judicial Magistrate and submitted to the Sub-Registrar, society, bank, or court as required.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'The complete newspaper publication process — drafting, booking, publication, clipping, and affidavit — takes 5–10 working days. Express/same-day publication is available in most cities for urgent matters.',
    documents: [
      {
        category: 'Notice Content Documents',
        list: [
          'Details of the lost document: type, registration number, year, parties (for lost document notice)',
          'Loan account details and property description (for SARFAESI bank notices)',
          'Court case number and petitioner/respondent details (for court-directed publications)',
        ],
      },
      {
        category: 'Publisher Requirements',
        list: [
          'Identity proof of the notice publisher (Aadhaar / PAN)',
          'Address proof for correspondence with newspaper (for bills and receipts)',
          'Payment instrument for newspaper publication charges',
        ],
      },
      {
        category: 'Post-Publication Documentation',
        list: [
          'Original newspaper clippings from both English and vernacular newspapers',
          'Publisher&#39;s certificate / release order from newspaper confirming publication date and edition',
          'Notarised affidavit of publication on stamp paper for submission to authorities',
        ],
      },
    ],
    compliance: [
      {
        title: 'Two-Newspaper Requirement',
        desc: 'For most legal purposes in India, publication in a single newspaper is insufficient. At minimum, one English newspaper and one regional language newspaper — both with circulation in the relevant district/state — must carry the notice. For SARFAESI auctions, the newspapers are specified in the bank\'s security enforcement rules and must be complied with strictly.',
      },
      {
        title: 'SARFAESI Auction Publication Timeline',
        desc: 'Under the Security Interest (Enforcement) Rules, 2002, the bank must publish the auction notice at least 30 days before the auction date. The notice must contain: property details, reserve price, auction date, place and time, and the secured creditor&#39;s details. Non-compliance with publication requirements can invalidate the auction.',
      },
      {
        title: 'Affidavit Submission Deadline',
        desc: 'After publication, the affidavit of publication must be submitted to the relevant authority promptly — typically within 7–15 days of publication. For court proceedings, the affidavit is filed in the court record. For Sub-Registrar applications, it accompanies the certified copy request. Timely filing prevents procedural delays.',
      },
      {
        title: 'Retention of Original Newspaper Clippings',
        desc: 'The original newspaper clippings must be preserved permanently as proof of publication. In legal proceedings, photocopies are generally not accepted as proof — the original clipping (or a certified copy of the relevant newspaper page from the newspaper office) must be produced. Digital newspaper publications must be supplemented with print copies for legal purposes.',
      },
    ],
    faqs: [
      {
        q: 'In which newspapers must a property-related legal notice be published?',
        a: 'For lost document notices and general property matters, one leading English daily newspaper and one leading regional language newspaper circulating in the district/area where the property is located are required. The choice of specific newspapers is not mandated by law for these cases — but for SARFAESI notices, banks follow their internal approved newspapers list, and courts may specify particular newspapers for substituted service.',
      },
      {
        q: 'What documents must accompany a lost document notice submission?',
        a: 'For submitting a lost document notice to a Sub-Registrar (for certified copy application), society (for duplicate share certificate), or bank, you typically need: (a) original newspaper clippings (both newspapers); (b) publisher&#39;s certificate from each newspaper; (c) notarised affidavit of loss on stamp paper; and (d) a police complaint / FIR report for stolen/lost documents. Some banks additionally require an indemnity bond.',
      },
      {
        q: 'Can the legal notice be published online/digitally instead of in print?',
        a: 'For court-mandated publications and official legal purposes in India, print newspaper publication is still the standard requirement. While many newspapers have digital editions, courts and official authorities typically require print newspaper clippings as proof. Some courts have recently allowed publication in widely circulated online newspapers for substituted service — but this varies by court and case.',
      },
      {
        q: 'How much does a legal newspaper publication cost?',
        a: 'Publication charges depend on the size of the notice (column centimetres) and the newspaper&#39;s rate card. For a standard lost document notice (3–5 lines), English newspaper charges range from &#x20b9;500–&#x20b9;5,000 per insertion depending on the publication. Vernacular newspapers are typically cheaper. SARFAESI auction notices (larger in size) cost &#x20b9;5,000–&#x20b9;25,000 per newspaper. Our package includes drafting, publication in both newspapers, and notarised affidavit.',
      },
      {
        q: 'Is newspaper publication required for a lost Aadhaar or PAN card?',
        a: 'Newspaper publication is not legally required for lost Aadhaar or PAN cards — these can be re-issued online through UIDAI and NSDL/UTI portals respectively. Newspaper publication is specifically required for lost property-related documents (registered sale deed, share certificate, title deed, GPA) and in situations mandated by law (SARFAESI, court orders, company documents). Your lawyer can advise on whether a specific document loss requires newspaper publication.',
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
