'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Briefcase } from 'lucide-react';

export default function MOUPage() {
  const data = {
    title: 'Memorandum of Understanding (MOU) Drafting',
    description: 'Get a professionally drafted MOU for B2B partnerships, joint ventures, government collaborations, and academic tie-ups. Clear scope, obligations, confidentiality, and governing law — with binding and non-binding clauses properly delineated.',
    heroBadges: ['B2B & Government MOUs', 'Binding Clauses Identified', 'Pre-Contract Framework'],
    introTitle: 'What is a Memorandum of Understanding (MOU)?',
    introContent: (
      <p>A Memorandum of Understanding (MOU) is a formal document expressing the mutual intent and agreed framework between two or more parties to enter into a business relationship, collaboration, or transaction — typically before a formal, binding contract is finalized. While an MOU is generally considered non-binding in India (meaning neither party can sue the other solely for failing to execute the final contract), it is an important legal instrument that defines the parameters of the relationship, establishes credibility and commitment, and provides the foundation for drafting the definitive agreement. In India, MOUs are widely used in B2B partnerships (technology, manufacturing, distribution), government-private sector collaborations (PPP projects, CSR initiatives), joint venture exploration (before incorporating a JV company), academic and research collaborations (between universities and industry), and international business tie-ups (where a full agreement is premature). A critical legal nuance is that while the overall MOU may be non-binding, specific clauses within the MOU — such as confidentiality obligations, exclusivity arrangements, governing law, and dispute resolution — can and often are made expressly binding on the parties. Courts in India have upheld the binding nature of such specific clauses within otherwise non-binding MOUs. A well-drafted MOU must clearly define: the identity and role of each party, the scope of the proposed collaboration, obligations and timelines, confidentiality restrictions, exclusivity (if any), conditions precedent to the definitive agreement, governing law (Indian law), dispute resolution (arbitration or specified court jurisdiction), and an expiry date to prevent indefinite open-ended commitments.</p>
    ),
    detailsTitle: 'Why a Well-Drafted MOU Matters',
    details: [
      { title: 'Establishes the Collaboration Framework', desc: 'An MOU clearly defines roles, responsibilities, timelines, and scope before substantial resources are committed — preventing misunderstandings that could derail the collaboration before a formal contract is executed.', icon: Briefcase },
      { title: 'Binding Confidentiality & Exclusivity', desc: 'Even in a non-binding MOU, confidentiality and exclusivity clauses can be expressly made binding — protecting sensitive business information and preventing the counterparty from negotiating with competitors during the MOU period.', icon: ShieldCheck },
      { title: 'Government & Institutional Requirement', desc: 'Many government tenders, university grant applications, CSR fund disbursements, and institutional funding bodies require an MOU between parties as a prerequisite for application or fund release.', icon: Globe },
      { title: 'Reduces Negotiation Timeline', desc: 'A signed MOU demonstrates commitment and significantly reduces the timeline for finalizing the definitive agreement by recording agreed commercial and operational terms that both parties can reference during contract drafting.', icon: Zap },
    ],
    requirements: [
      'Legal names and addresses of all parties to the MOU',
      'Purpose and nature of the proposed collaboration',
      'Scope of work or areas of collaboration',
      'Key obligations and timelines for each party',
      'Confidentiality requirements and exclusivity (if any)',
      'Intended duration of the MOU and conditions for extension',
    ],
    processTitle: 'How We Draft Your MOU',
    processIntro: 'Our legal team drafts MOUs that clearly express the parties\' intent while strategically making key protective clauses (confidentiality, exclusivity) expressly binding.',
    processSteps: [
      { title: 'Understanding the Collaboration Objective', desc: 'We understand the business context, the nature of the relationship being explored, the parties\' respective contributions, and what specific protections each party needs during the pre-contract phase.', icon: UserCheck },
      { title: 'Identifying Binding vs. Non-Binding Provisions', desc: 'We work with you to identify which clauses should be expressly binding (confidentiality, exclusivity, IP protection, cost-sharing for pre-contract work) vs. aspirational/non-binding (final partnership structure, profit sharing).', icon: FileSearch },
      { title: 'MOU Drafting with Clear Structure', desc: 'We draft the MOU with clear recitals (background), defined terms, party obligations, timelines, binding clauses, non-binding intent clauses, confidentiality, governing law, and a sunset clause.', icon: CheckCircle2 },
      { title: 'Review, Negotiation & Execution', desc: 'After review by all parties, we incorporate changes, finalize the language, and assist with execution on appropriate stamp paper if required. We also advise on whether registration is needed.', icon: FileCheck },
    ],
    processOutro: 'Standard MOU drafting is completed within 3–5 working days. Complex multi-party or government-related MOUs may take 7–10 working days due to multiple review cycles.',
    documents: [
      { category: 'Party Details', list: ['Company incorporation certificate and PAN of all parties', 'Authorized signatory details and board resolution', 'Company profile or capability document'] },
      { category: 'Collaboration Details', list: ['Term sheet or email chain recording agreed commercial terms', 'Prior NDA (if already in place)', 'Technical or business proposal for the collaboration'] },
      { category: 'Compliance Requirements', list: ['Industry-specific regulatory approvals required for the collaboration', 'Foreign exchange management requirements (for cross-border MOUs)', 'Sector-specific compliance (SEBI, RBI, DGCA, etc. as applicable)'] },
    ],
    compliance: [
      { title: 'Confidentiality Clauses Must Be Expressly Binding', desc: 'For confidentiality obligations in an MOU to be enforceable, they must be clearly stated as binding on both parties. A generic non-binding MOU without an express confidentiality clause provides no legal protection for shared sensitive information.' },
      { title: 'Stamp Duty for Certain MOU Types', desc: 'While most MOUs do not attract stamp duty, MOUs that contain financial commitments, share transfer terms, or property-related provisions may require stamping under the Indian Stamp Act or relevant state stamp act. Our team advises on stamp duty applicability.' },
      { title: 'MOU Must Have a Definite Expiry', desc: 'An MOU without a sunset (expiry) clause can create open-ended obligations — especially problematic for confidentiality and exclusivity provisions. Always specify the MOU\'s validity period (typically 6–24 months) and the conditions for renewal or termination.' },
      { title: 'Corporate Authorization Required', desc: 'For companies, signing an MOU requires proper board authorization. The signing authority must have the board\'s mandate to execute the MOU. Without authorization, the MOU may be challenged as ultra vires the company\'s delegation of authority.' },
    ],
    faqs: [
      { q: 'Is an MOU legally binding in India?', a: 'An MOU is generally considered non-binding as a whole (expressing intent rather than commitment). However, specific clauses like confidentiality, exclusivity, and governing law that are expressly stated to be binding will be enforced by Indian courts. The non-binding nature refers to the overall obligation to conclude the final agreement.' },
      { q: 'What is the difference between an MOU and a contract?', a: 'An MOU expresses intent and framework without creating legally enforceable obligations to conclude the deal. A contract (or formal agreement) has offer, acceptance, consideration, and the intention to create legal relations — it is fully enforceable. An MOU typically precedes and leads to a contract.' },
      { q: 'Does an MOU need to be registered?', a: 'Most MOUs do not require registration. However, if the MOU contains clauses that amount to an agreement relating to immovable property, or includes a financial commitment exceeding &#8377;100 crore in some states, stamp duty and registration may be required. Always consult a legal expert to assess registration requirements for your specific MOU.' },
      { q: 'Can I walk away from an MOU without penalty?', a: 'Generally yes — the non-binding nature of an MOU means neither party can be sued for declining to enter into the final agreement. However, if you have incurred costs based on the MOU (due diligence, third-party commitments), the other party may have a claim for pre-contractual liability or promissory estoppel in exceptional circumstances.' },
      { q: 'How is an MOU different from a Letter of Intent (LOI)?', a: 'An MOU and an LOI serve similar purposes and are often used interchangeably. In practice, an LOI is slightly more formal and often implies a stronger intent to proceed to the final agreement. An MOU is broader and more commonly used for partnerships and collaborations. Both are typically non-binding unless specific clauses state otherwise.' },
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
