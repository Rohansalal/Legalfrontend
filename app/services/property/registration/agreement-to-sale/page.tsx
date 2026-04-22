'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function AgreementToSalePage() {
  const data = {
    title: 'Agreement to Sale',
    description:
      'Protect your property transaction with a legally stamped and registered Agreement to Sale — the foundational preliminary contract under the Transfer of Property Act 1882 and RERA 2016.',
    heroBadges: ['RERA Mandatory for Under-Construction', 'Specific Performance Rights', 'Transfer of Property Act 1882'],
    introTitle: 'What is an Agreement to Sale?',
    introContent: (
      <p>
        An Agreement to Sale (also known as a Sale Agreement or Agreement for Sale) is a preliminary contract executed between a seller and a buyer of immovable property that records all agreed terms and conditions of the proposed sale — including the sale consideration, payment schedule, possession date, penalties, and title conditions — before the actual Sale Deed is executed. Governed by Section 54 of the Transfer of Property Act, 1882, an Agreement to Sale creates a contractual obligation on the seller to sell and the buyer to purchase, but does not by itself transfer ownership or title to the property. However, the buyer acquires an &#x201c;equitable interest&#x201d; in the property and can seek specific performance of the agreement in court under the Specific Relief Act, 1963 if the seller defaults. The Agreement to Sale must be stamped (though stamp duty is lower than a full sale deed in most states) and is highly advisable to be registered. Under the Real Estate (Regulation and Development) Act, 2016 (RERA), any Agreement for Sale for the allotment or sale of a plot, flat, or building in a RERA-registered project must be compulsorily registered — failure to register makes the agreement not enforceable under RERA, and the promoter can be penalised under Section 13 of RERA. The RERA agreement must disclose carpet area (not super built-up area), possession date with interest on delay, payment schedule, specifications of construction, and force majeure conditions. Under the Indian Registration Act, 1908, it is now mandatory (per Section 17(1A)) to register agreements to sell that are &#x201c;agreements relating to the sale of immovable property&#x201d; when presented to any court or authority.
      </p>
    ),
    detailsTitle: 'Key Benefits of a Registered Agreement to Sale',
    details: [
      {
        title: 'Legal Right to Specific Performance',
        desc: 'A registered Agreement to Sale entitles the buyer to file a suit for Specific Performance under the Specific Relief Act, 1963 if the seller reneges on the deal — compelling the seller to execute the sale deed as agreed rather than merely returning the advance.',
        icon: ShieldCheck,
      },
      {
        title: 'RERA Protection for Home Buyers',
        desc: 'Under RERA 2016, a registered Agreement for Sale is the trigger document for all buyer rights — including interest on delayed possession at SBI MCLR + 2%, right to withdraw with full refund, and complaint jurisdiction before the RERA Authority.',
        icon: Zap,
      },
      {
        title: 'Locks Sale Price & Terms',
        desc: 'A registered agreement locks the agreed price, carpet area, specifications, and possession date, protecting buyers from builder price revisions, area reductions, or specification downgrades — all of which are prohibited under RERA once the agreement is signed.',
        icon: Globe,
      },
      {
        title: 'Protection Against Third-Party Transfers',
        desc: 'A registered Agreement to Sale puts third parties on notice of the buyer&#39;s prior interest in the property. Courts will prioritise the registered agreement holder over any subsequent buyer who purchases the same property in breach of the first agreement.',
        icon: Award,
      },
    ],
    requirements: [
      'Property title documents and encumbrance certificate',
      'RERA registration number of the project (for new/under-construction properties)',
      'PAN Card and Aadhaar of both parties',
      'Bank statements / proof of payment of token advance / booking amount',
      'Architectural floor plan showing carpet area (mandatory under RERA)',
      'Approved building plan and commencement certificate (for new projects)',
    ],
    processTitle: 'How to Draft and Register an Agreement to Sale',
    processIntro:
      'Drafting a legally sound Agreement to Sale requires careful attention to RERA compliance, payment milestones, penalty clauses, and title representations. Our lawyers ensure every clause protects your interests.',
    processSteps: [
      {
        title: 'Property Due Diligence',
        desc: 'Before drafting the agreement, we conduct a title search, verify RERA registration status of the project, check for encumbrances, and confirm the builder&#39;s right to sell — ensuring the buyer has a clear and marketable title ahead.',
        icon: UserCheck,
      },
      {
        title: 'Draft the Agreement',
        desc: 'Our lawyers draft the Agreement incorporating RERA-compliant clauses: carpet area, possession date, delay interest, payment schedule linked to construction stages, dispute resolution, force majeure, and indemnity clauses.',
        icon: FileSearch,
      },
      {
        title: 'Stamp Duty Payment',
        desc: 'We calculate and arrange payment of stamp duty on the agreement as per your state&#39;s Stamp Act. In Maharashtra, stamp duty is 0.1% of the agreement value; in Karnataka it is 0.5% (capped). We ensure this is adjusted against the full sale deed stamp duty later.',
        icon: CheckCircle2,
      },
      {
        title: 'Registration at Sub-Registrar',
        desc: 'Both parties appear before the Sub-Registrar, execute the agreement, and complete biometric verification. The registered agreement is indexed in public records and a certified copy is provided to both parties.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'The drafting-to-registration process takes 3–7 working days. RERA-registered project agreements must be registered before the builder collects more than 10% of the sale consideration.',
    documents: [
      {
        category: 'Buyer & Seller Identity',
        list: [
          'PAN Card and Aadhaar of buyer and seller/developer',
          'Passport-size photographs of all parties and witnesses',
          'Company/LLP incorporation certificate (for developer entity)',
        ],
      },
      {
        category: 'Property & Project Documents',
        list: [
          'RERA project registration certificate and MahaRERA/state RERA number',
          'Approved floor plan showing carpet area as defined under RERA',
          'Title documents, IOD, OC (for ready properties), or CC (for under-construction)',
        ],
      },
      {
        category: 'Financial & Payment Documents',
        list: [
          'Booking amount receipt / token advance bank transfer statement',
          'Stamp duty payment challan (state-specific)',
          'Payment schedule linked to construction milestones (for under-construction property)',
        ],
      },
    ],
    compliance: [
      {
        title: 'RERA Registration Before 10% Collection',
        desc: 'Under Section 13 of RERA 2016, no promoter can accept more than 10% of the sale consideration without first registering the Agreement for Sale. Violation attracts a penalty equal to 5% of the project cost under Section 61 of RERA.',
      },
      {
        title: 'Stamp Duty Adjustment on Sale Deed',
        desc: 'The stamp duty paid on the Agreement to Sale is deductible/adjustable against the stamp duty payable on the final Sale Deed in most states. Buyers must retain the stamped agreement to claim this adjustment and avoid double stamp duty payment.',
      },
      {
        title: 'Income Tax on Advance Forfeiture',
        desc: 'If the buyer defaults and the seller forfeits the advance money under the agreement, the forfeited amount is taxable in the seller&#39;s hands as &#x201c;Income from Other Sources&#x201d; under Section 56(2)(ix) of the Income Tax Act, 1961.',
      },
      {
        title: 'Limitation Period for Specific Performance',
        desc: 'Under Article 54 of the Limitation Act, 1963, a suit for specific performance of an Agreement to Sale must be filed within three years from the date fixed for performance, or from when the plaintiff learns that performance has been refused. Timely action is critical.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between an Agreement to Sale and a Sale Deed?',
        a: 'An Agreement to Sale is a preliminary contract recording the terms of a proposed sale — it creates obligations but does not transfer title. A Sale Deed is the final, registered document that actually transfers ownership. Under Section 54 of the Transfer of Property Act, title passes only upon execution of a registered sale deed, not upon agreement to sale.',
      },
      {
        q: 'Is it mandatory to register an Agreement to Sale under RERA?',
        a: 'Yes. Section 13 of RERA 2016 mandates that a promoter must execute and register the Agreement for Sale before accepting more than 10% of the project cost. The unregistered agreement is not enforceable under RERA, and the buyer cannot file a complaint with the RERA Authority based on an unregistered agreement.',
      },
      {
        q: 'Can the buyer get a home loan based on an Agreement to Sale?',
        a: 'Many banks and NBFCs disburse home loans for under-construction properties based on a registered Agreement to Sale (combined with the builder&#39;s title documents and RERA registration). The loan disbursement is typically stage-linked based on construction progress as per the payment schedule in the agreement.',
      },
      {
        q: 'What is the stamp duty on an Agreement to Sale in Maharashtra?',
        a: 'In Maharashtra, the stamp duty on an Agreement to Sale for an under-construction flat is 0.1% of the agreement value (sale consideration), subject to a maximum of &#x20b9;10 lakhs. This amount is adjustable when stamp duty is paid on the final Sale Deed or Conveyance Deed at 6% of the property value.',
      },
      {
        q: 'What happens if the seller sells the property to someone else after signing the agreement?',
        a: 'If the seller transfers the property to a third party after signing a registered Agreement to Sale, the original buyer has the right to file a suit for Specific Performance under the Specific Relief Act, 1963 within 3 years. Courts consistently hold that a prior registered Agreement to Sale creates priority rights over subsequent transfers.',
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
