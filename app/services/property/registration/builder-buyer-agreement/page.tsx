'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function BuilderBuyerAgreementPage() {
  const data = {
    title: 'Builder Buyer Agreement',
    description:
      'Protect your under-construction property investment with a RERA-compliant registered Builder Buyer Agreement — your strongest legal shield against delayed possession, specification changes, and developer defaults.',
    heroBadges: ['RERA 2016 Mandatory Registration', 'Carpet Area Based Pricing', 'RERA Appellate Tribunal Disputes'],
    introTitle: 'What is a Builder Buyer Agreement?',
    introContent: (
      <p>
        A Builder Buyer Agreement (BBA), also referred to as an Agreement for Sale under Section 13 of the Real Estate (Regulation and Development) Act, 2016 (RERA), is a formal legal contract between a real estate developer (promoter/builder) and a homebuyer for the purchase of a flat, plot, or commercial unit in an under-construction or newly constructed project. Prior to RERA, builder-buyer agreements were often builder-favourable, one-sided documents drafted exclusively by the developer with no regulatory oversight — buyers had little recourse for delayed possession, specification changes, or quality defects. RERA fundamentally changed this: every BBA for a project registered under RERA must itself be registered at the Sub-Registrar&#39;s office, and no promoter can collect more than 10% of the agreed price before executing and registering this agreement. The RERA-mandated BBA must compulsorily mention: (a) carpet area (not super built-up area or saleable area) as the pricing basis; (b) exact possession date with a penalty clause (interest at SBI MCLR + 2% per annum for each month of delay payable to buyer); (c) construction-linked payment schedule; (d) exact specifications of the flat (flooring, fittings, structure); (e) force majeure conditions strictly defined; and (f) the buyer&#39;s right to withdraw from the project and claim a full refund with interest if possession is delayed beyond the agreed date. Under Section 18 of RERA, if the promoter fails to complete or hand over possession by the agreed date, the buyer can claim interest on all amounts paid or seek a full refund with interest. Disputes arising from the BBA are resolved before the RERA Authority (first instance) and RERA Appellate Tribunal (appeal).
      </p>
    ),
    detailsTitle: 'Why a RERA-Compliant Builder Buyer Agreement Matters',
    details: [
      {
        title: 'Carpet Area Pricing Protection',
        desc: 'Under RERA, pricing must be based on carpet area as defined in Section 2(k) — excluding walls, balconies, terraces, and common areas. A RERA-compliant BBA locks the per-square-foot price based on carpet area, preventing builders from later claiming super built-up area charges.',
        icon: ShieldCheck,
      },
      {
        title: 'Possession Date & Delay Interest',
        desc: 'The BBA must specify an exact possession date. If possession is delayed, the builder must pay interest at SBI MCLR + 2% p.a. on all amounts paid by the buyer for every month of delay — a strong financial deterrent against project delays.',
        icon: Zap,
      },
      {
        title: 'RERA Forum Access',
        desc: 'A registered BBA gives the buyer direct access to the state RERA Authority for complaints against the developer — far faster and cheaper than civil court litigation. RERA orders are typically passed within 60 days and are enforceable as civil court decrees.',
        icon: Globe,
      },
      {
        title: 'Quality & Specification Guarantee',
        desc: 'The BBA must include detailed construction specifications. Under Section 14 of RERA, the promoter cannot make any structural or specification changes without 2/3rd consent of allottees. Defects in quality must be rectified free of cost within 5 years of possession.',
        icon: Award,
      },
    ],
    requirements: [
      'RERA registration certificate of the project (mandatory before BBA is signed)',
      'PAN Card and Aadhaar of buyer and authorised signatory of builder',
      'Allotment letter issued by the builder',
      'Payment receipt of booking amount (maximum 10% before agreement)',
      'Approved floor plan of the specific unit showing carpet area',
      'Builder\'s title documents and IOD / CC from local authority',
    ],
    processTitle: 'How to Execute a Builder Buyer Agreement',
    processIntro:
      'A RERA-compliant BBA requires careful review before signing — many builders still include non-RERA-compliant clauses. Our property lawyers review, negotiate, and register your BBA to ensure maximum buyer protection.',
    processSteps: [
      {
        title: 'RERA Project Verification',
        desc: 'Before signing any agreement, we verify the project&#39;s RERA registration on the state RERA portal, check the project completion timeline, review the promoter&#39;s compliance history, and verify that the title of the land has been checked and is clear.',
        icon: UserCheck,
      },
      {
        title: 'BBA Legal Review & Negotiation',
        desc: 'We thoroughly review the builder&#39;s draft BBA for non-RERA-compliant clauses — vague force majeure definitions, one-sided termination rights, super built-up area pricing, inadequate penalty clauses — and negotiate amendments in the buyer&#39;s favour.',
        icon: FileSearch,
      },
      {
        title: 'Stamp Duty & Registration',
        desc: 'We compute stamp duty on the BBA (typically 0.1% in Maharashtra, adjustable against final sale deed stamp duty) and arrange registration at the Sub-Registrar. Both parties must appear or authorise representatives. The registered BBA is the primary document for RERA complaints.',
        icon: CheckCircle2,
      },
      {
        title: 'Post-Agreement Compliance Monitoring',
        desc: 'We track construction progress against the registered timeline, monitor RERA quarterly updates filed by the builder on the RERA portal, and advise the buyer on exercising rights under Section 18 (delay refund/interest) if the builder fails to meet milestones.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'BBA execution and registration takes 7–15 days from the date the parties finalise terms. Under Section 13(2) of RERA, the builder cannot accept more than 10% advance before the BBA is registered.',
    documents: [
      {
        category: 'Buyer Identity & KYC',
        list: [
          'PAN Card and Aadhaar of all buyers (joint purchase requires all co-buyers\' KYC)',
          'Passport-size photographs of buyer(s)',
          'NRI documentation: Passport, OCI Card, PIO Card (for NRI buyers)',
        ],
      },
      {
        category: 'Project & Allotment Documents',
        list: [
          'RERA registration certificate of the project from state RERA portal',
          'Allotment letter issued by the builder with unit details and payment schedule',
          'Approved floor plan showing carpet area of the specific unit',
        ],
      },
      {
        category: 'Payment & Financial Documents',
        list: [
          'Booking amount receipt and bank transfer statement (max 10% before BBA)',
          'Stamp duty payment challan for the BBA',
          'Home loan sanction letter (if buyer is taking a home loan)',
        ],
      },
    ],
    compliance: [
      {
        title: 'RERA Quarterly Progress Updates',
        desc: 'After signing the BBA, buyers should regularly monitor the builder&#39;s quarterly RERA compliance reports filed on the state RERA portal. These reports show construction progress, fund utilisation, and revised completion timelines — early red flags help buyers take timely action.',
      },
      {
        title: 'Demand Linked Payment Verification',
        desc: 'Payments under the BBA must be made only as per the construction-linked payment schedule. Buyers should verify actual construction progress before each payment tranche. Premature payment demands without corresponding construction milestones violate RERA.',
      },
      {
        title: 'GST on Under-Construction Property',
        desc: 'GST at 5% (affordable housing: 1%) is applicable on payments made for under-construction properties under the BBA. GST is not applicable on completed properties (after OC). Buyers should ensure builders issue proper GST invoices and deposit the collected GST with the government.',
      },
      {
        title: '5-Year Structural Defect Warranty',
        desc: 'Under Section 14(3) of RERA, the promoter is obligated to rectify any structural defects, workmanship defects, or quality/provision issues reported by the allottee within 5 years of possession, free of charge. Buyers should document all defects in writing within this period.',
      },
    ],
    faqs: [
      {
        q: 'What happens if the builder delays possession?',
        a: 'Under Section 18 of RERA 2016, if the promoter fails to complete the project or give possession by the agreed date, the buyer has two options: (a) withdraw from the project and claim a full refund of all amounts paid with interest at SBI MCLR + 2% p.a.; or (b) continue in the project and claim monthly interest on all amounts paid at SBI MCLR + 2% until actual possession. Both remedies can be claimed through the RERA Authority.',
      },
      {
        q: 'Can the builder change the layout or specifications after signing the BBA?',
        a: 'No. Under Section 14 of RERA, once the BBA is executed, the promoter cannot make any changes to the structural design, floor plan, or specifications of an individual apartment without the written consent of the individual allottee. Changes to common areas and facilities require written consent of at least 2/3rd of the allottees.',
      },
      {
        q: 'Is GST applicable on the entire BBA consideration?',
        a: 'GST is applicable only on the construction component of the under-construction property, not on the land value. As per GST Council guidance, land is deemed to be 1/3rd of the total consideration, so effective GST is 5% on 2/3rd of the value (i.e., ~3.33% effective rate). For affordable housing (units under &#x20b9;45 lakhs with carpet area &#x60;&#x3c;&#x3e;&#x60; 60 sq.m. in metros, 90 sq.m. elsewhere), GST is 1%.',
      },
      {
        q: 'Can a buyer cancel the BBA and get a refund?',
        a: 'Yes. Under Section 18 of RERA, a buyer can cancel the BBA and claim a full refund (with interest) if the promoter fails to hand over possession by the committed date. If the buyer cancels voluntarily without the builder being at fault, the cancellation charges and refund terms are governed by the BBA itself — RERA mandates that such terms be fair and proportionate.',
      },
      {
        q: 'What is the forum for resolving BBA disputes?',
        a: 'Disputes arising from the BBA can be filed as complaints before the RERA Authority (state-level, e.g., MahaRERA for Maharashtra, HRERA for Haryana). If the order is unsatisfactory, an appeal lies before the RERA Appellate Tribunal. Further appeal on questions of law goes to the High Court. Consumer Forum (NCDRC/SCDRC) also has concurrent jurisdiction for homebuyer complaints under the Consumer Protection Act 2019.',
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
