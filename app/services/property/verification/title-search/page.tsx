'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function TitleSearchPage() {
  const data = {
    title: 'Title Search & Verification',
    description:
      'Establish clear and marketable property title with a comprehensive 30-year title search by experienced property lawyers — your primary shield against fraud, encumbrances, and future disputes.',
    heroBadges: ['30+ Years Chain of Ownership', 'Sub-Registrar & Revenue Records', 'Lawyer\'s Title Certificate'],
    introTitle: 'What is Title Search & Verification?',
    introContent: (
      <p>
        Title Search is the systematic legal examination of all historical ownership records, registered documents, revenue records, and public filings related to a parcel of immovable property, going back a minimum of 30 years (and ideally back to the origin of the property) to establish that the current seller has a clear, absolute, and marketable title — free from encumbrances, litigation, fraud, and claims of third parties. In India, title search is conducted by a property lawyer at multiple levels: (a) Sub-Registrar&#39;s office — examining all registered deeds (sale, mortgage, gift, lease, will, partition, court decree) in the General Index and Index of Properties to establish the chain of ownership; (b) Revenue records — examination of 7/12 extracts (Maharashtra), Khatauni/Khata (UP, Karnataka), Jamabandi (Punjab, Haryana, Himachal Pradesh), Record of Rights (RoR) to verify revenue ownership, occupancy status, and encumbrances; (c) Court records — search at district courts and High Court for any pending litigation, injunctions, lis pendens, or attachment orders on the property; (d) Government acquisition notices — check with the local authority, collector&#39;s office, NHAI, NMRDA, and other bodies for any land acquisition, reservation, or government purchase notifications. After completing the search, the lawyer issues a Title Search Certificate (also called a Legal Opinion or Legal Due Diligence Report) that summarises: the chain of title, persons entitled to sell, nature of the interest (freehold/leasehold), encumbrances found, and the lawyer&#39;s opinion on whether the title is clear. This certificate is required by banks for home loan sanction, by RERA authorities, and by sophisticated property buyers before committing large amounts. Title insurance is also available in India (from National Insurance, New India Assurance, and specialised insurers) to cover losses arising from title defects not discovered during search.
      </p>
    ),
    detailsTitle: 'Why Title Search is Non-Negotiable',
    details: [
      {
        title: 'Detects Hidden Encumbrances',
        desc: 'Title search uncovers registered mortgages, charges, liens, court attachments, and government acquisition notices that may not be visible on the property\'s surface. Buying a mortgaged property without clearing the charge can lead to the bank enforcing SARFAESI action against the new buyer.',
        icon: ShieldCheck,
      },
      {
        title: 'Establishes Seller\'s Authority to Sell',
        desc: 'Title search verifies that the seller is the registered owner with an unbroken chain of title going back 30+ years — detecting missing links, fraudulent transfers, disputed inheritance, or benami transactions that could invalidate the entire purchase.',
        icon: Zap,
      },
      {
        title: 'Bank Loan Pre-Requisite',
        desc: 'All scheduled banks and NBFCs mandatorily require a property lawyer\'s title search report (legal opinion) before sanctioning home loans. The title certificate is the bank\'s primary basis for deciding whether the property is acceptable as mortgage security.',
        icon: Globe,
      },
      {
        title: 'Litigation & Dispute Free Ownership',
        desc: 'Title search includes a court case search to detect pending property disputes, injunctions, and lis pendens. Purchasing a disputed property exposes the buyer to years of litigation and potential loss of the property — title search is the only way to detect and avoid this.',
        icon: Award,
      },
    ],
    requirements: [
      'Property address and complete survey number / plot number / CTS / Gat number',
      'Name of the current owner as appearing in the latest registered document',
      'Any available previous title documents (at least the most recent sale deed)',
      'Municipal property tax receipt for property identification',
      'State and district of the property (for accessing correct Sub-Registrar records)',
      'Approximate vintage of ownership (when the property was first acquired)',
    ],
    processTitle: 'How Title Search & Verification is Conducted',
    processIntro:
      'Title search is a multi-source document examination process requiring expertise in property law, revenue records, and court searches. Our experienced property lawyers conduct exhaustive searches across all relevant offices.',
    processSteps: [
      {
        title: 'Sub-Registrar Records Search',
        desc: 'Our lawyers visit (or access via state portals like IGR Maharashtra, Kaveri Karnataka) the Sub-Registrar\'s office to search all registered documents — by seller name, property address, and survey/plot number — going back 30+ years and extract certified copies of key documents in the chain.',
        icon: UserCheck,
      },
      {
        title: 'Revenue & Land Records Verification',
        desc: 'We verify 7/12 extracts, property card, Khata, Jamabandi, and other state-specific revenue records at the Taluk/Tehsil/Revenue Office to confirm that revenue ownership matches registered ownership and to check for agricultural restrictions, government reservations, or NA conversion status.',
        icon: FileSearch,
      },
      {
        title: 'Court Case & Litigation Search',
        desc: 'We conduct a search at the district civil court and High Court (as appropriate) for any pending or disposed suits, injunctions, attachment orders, or lis pendens (pending litigation notice) registered against the property or the owner.',
        icon: CheckCircle2,
      },
      {
        title: 'Title Certificate Issuance',
        desc: 'After completing the multi-source search, our lawyer issues a comprehensive Title Search Certificate with opinion on: (a) marketability of title; (b) encumbrances found; (c) documents missing in chain; (d) risks identified; and (e) conditions/actions needed before purchase.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'A standard 30-year title search report is completed in 5–10 working days. Comprehensive searches for large commercial properties or properties with complex ownership history may take 15–20 days.',
    documents: [
      {
        category: 'Property Identification Documents',
        list: [
          'Survey number / plot number / CTS number / Gat number of the property',
          'Latest registered sale deed or title document in the seller\'s name',
          'Municipal property tax receipt or Khata extract for identification',
        ],
      },
      {
        category: 'Revenue & Ownership Records',
        list: [
          '7/12 extract (Maharashtra) or ROR / Khatauni / Jamabandi as applicable',
          'Property card (Milkat Patrika) from City Survey Office',
          'NA (Non-Agricultural) order (for plots) and ULC clearance (if applicable)',
        ],
      },
      {
        category: 'Encumbrance & Court Search',
        list: [
          'Encumbrance Certificate (Form 15 or Form 16) from Sub-Registrar for the search period',
          'CERSAI search certificate for the property',
          'Court search report from district court records',
        ],
      },
    ],
    compliance: [
      {
        title: 'Update Title Search Before Each Transaction',
        desc: 'A title search report has a limited validity — new transactions, charges, or litigation can be registered at any time. Always obtain a fresh title search report immediately before executing the final sale deed, not just at the time of agreement, to capture any new encumbrances in the intervening period.',
      },
      {
        title: 'Verify RERA Project Registration',
        desc: 'For under-construction properties, title search must be supplemented with RERA registration verification on the state portal. A RERA-registered project has already undergone title scrutiny by the RERA authority — but independent verification remains advisable for large investments.',
      },
      {
        title: 'Title Insurance as Additional Protection',
        desc: 'Even after a thorough title search, latent defects (forged documents, undisclosed heirs, court orders not yet registered) can surface later. Title insurance policies available from Indian insurers cover financial loss arising from such undiscovered defects for an annual premium of 0.1%–0.5% of property value.',
      },
      {
        title: 'Government Acquisition Notification Check',
        desc: 'Title search must include a verification with the District Collector, NHAI, Metro Rail Corporation, City Development Authority, and local body for any land acquisition notification or reservation for public purpose. Properties under Section 4/6 of Land Acquisition Act or under DP Reservations have restricted resale value.',
      },
    ],
    faqs: [
      {
        q: 'Why is a 30-year title search recommended?',
        a: 'Under the Limitation Act, 1963, the limitation period to challenge a title based on adverse possession is 12 years for private property. A 30-year search provides a comfortable buffer well beyond this limitation period, ensuring no viable claim exists against the property. Banks typically insist on a minimum 30-year search before granting loans.',
      },
      {
        q: 'Can I conduct a title search myself?',
        a: 'While Sub-Registrar records are technically public, interpreting the chain of title, identifying breaks in ownership, understanding encumbrances, and linking revenue records with registered documents requires legal expertise. A title search by a non-lawyer may miss critical documents or misinterpret records — always use an experienced property lawyer for this purpose.',
      },
      {
        q: 'What does &#x201c;clear title&#x201d; mean?',
        a: '&#x201c;Clear title&#x201d; means the property has: an unbroken chain of registered ownership going back at least 30 years; no registered mortgages, charges, or liens outstanding; no government acquisition or reservation; no pending court cases or injunctions; and revenue records consistent with registered ownership. A property with clear title can be safely purchased and used as loan collateral.',
      },
      {
        q: 'Does title search cover RERA violations or builder defaults?',
        a: 'A standard title search covers historical registered documents and revenue records. For new under-construction projects, RERA compliance check (separate from title search) covers: project registration status, promoter\'s past project track record, RERA quarterly compliance, and complaints against the builder on the RERA portal. We recommend both title search AND RERA compliance check for new project purchases.',
      },
      {
        q: 'How is title search done for agricultural land being converted to non-agricultural use?',
        a: 'Agricultural land title search additionally involves: (a) verification of 7/12 extract, Khatauni, and crop records at the Patwari/Tehsil level; (b) confirming that NA conversion (Non-Agricultural Use Order) has been obtained from the Collectorate; (c) checking land use zoning in the Development Plan/Town Planning Scheme; (d) verifying no tribal land restrictions (in tribal belt areas) or land ceiling violations under Urban Land Ceiling Act (where still applicable).',
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
