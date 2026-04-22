'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale } from 'lucide-react';

export default function LegalContractPage() {
  const data = {
    title: 'Legal Contract Drafting',
    description: 'Get watertight legal contracts drafted under the Indian Contract Act 1872. Service agreements, consulting contracts, vendor agreements, freelance contracts — all with indemnity, liability, and dispute resolution clauses.',
    heroBadges: ['Indian Contract Act 1872', 'Dispute Resolution Clauses', 'Customized for Your Business'],
    introTitle: 'What is a Legal Contract?',
    introContent: (
      <p>A legal contract is a legally enforceable agreement between two or more parties that creates mutual obligations recognized and enforced by law. In India, contracts are primarily governed by the Indian Contract Act 1872, which defines the essential elements of a valid contract: a lawful offer, unqualified acceptance, lawful consideration, capacity of parties to contract (18+ years, of sound mind, not disqualified by law), free consent (free from coercion, undue influence, fraud, misrepresentation, or mistake), and a lawful object and consideration. Common types of legal contracts in the Indian business context include service agreements (between service provider and client), consulting contracts (independent contractor engagements), freelance agreements (for creative, IT, and professional services), vendor or supplier contracts (for procurement of goods and services), employment contracts (though often governed by labor law), and non-disclosure agreements (NDAs). A well-drafted contract should include clear scope of work, payment terms and schedule, intellectual property ownership clauses, confidentiality obligations, representations and warranties, limitation of liability and indemnity provisions, term and termination conditions (including termination for cause and convenience), force majeure clause, governing law (typically Indian law), and dispute resolution mechanism (arbitration under the Arbitration and Conciliation Act 1996, or civil court jurisdiction). Contracts for specific values or types (sale deeds, leases over 11 months, insurance) require stamping or registration under applicable law.</p>
    ),
    detailsTitle: 'Key Benefits of a Professionally Drafted Contract',
    details: [
      { title: 'Legally Enforceable Protection', desc: 'A properly drafted contract under the Indian Contract Act 1872 is enforceable in Indian courts, protecting you from breach, non-payment, scope creep, and IP theft.', icon: ShieldCheck },
      { title: 'Clear Scope & Payment Terms', desc: 'Eliminates ambiguity by precisely defining deliverables, milestones, payment schedule, penalties for delay, and revision limits — preventing future disputes.', icon: FileText },
      { title: 'IP & Confidentiality Protection', desc: 'Ensures all intellectual property created during the engagement belongs to the correct party and restricts disclosure of sensitive business information to third parties.', icon: Award },
      { title: 'Dispute Resolution Without Litigation', desc: 'Arbitration and mediation clauses under the Arbitration and Conciliation Act 1996 enable faster, cost-effective dispute resolution outside of overloaded civil courts.', icon: Scale },
    ],
    requirements: [
      'Full legal names and addresses of all contracting parties',
      'Nature and scope of the contract (services, supply, consulting)',
      'Payment terms, amounts, and schedule',
      'Duration of contract and renewal conditions',
      'Specific IP ownership, confidentiality, and non-compete requirements',
      'Preferred dispute resolution method (arbitration / court jurisdiction)',
    ],
    processTitle: 'How We Draft Your Legal Contract',
    processIntro: 'Our contract drafting process is structured to capture your business needs precisely and translate them into legally sound, enforceable contract language.',
    processSteps: [
      { title: 'Requirement Briefing', desc: 'We conduct a detailed briefing to understand the nature of the engagement, parties involved, commercial terms, specific risks to be addressed, and any industry-specific compliance needs.', icon: UserCheck },
      { title: 'Contract Structure & Drafting', desc: 'Our legal team drafts the contract with all essential clauses: scope, payment, IP ownership, indemnity, limitation of liability, termination, governing law, and arbitration.', icon: FileSearch },
      { title: 'Review & Negotiation Support', desc: 'We share the draft for your review, incorporate feedback, and if needed, assist with negotiating specific terms with the counterparty or reviewing the counterparty\'s draft.', icon: CheckCircle2 },
      { title: 'Final Execution & Stamp Duty', desc: 'We assist with finalizing the execution formalities — physical or e-signature, correct stamp paper where required, and advise on registration if the contract type mandates it.', icon: FileCheck },
    ],
    processOutro: 'Standard contract drafting is completed within 2–5 working days. Complex multi-party or high-value contracts may take 5–10 working days.',
    documents: [
      { category: 'Party Details', list: ['Company incorporation certificate / individual PAN', 'Registered address of all parties', 'Authorized signatory details and board resolution (for companies)'] },
      { category: 'Commercial Terms', list: ['Scope of work or services description', 'Payment schedule, milestones, and amounts', 'Delivery timelines and performance metrics'] },
      { category: 'Special Requirements', list: ['Existing NDA or confidentiality agreements', 'Prior contracts to be superseded', 'Industry-specific compliance requirements (e.g., IT Act, SEBI, FSSAI)'] },
    ],
    compliance: [
      { title: 'Stamping Requirements', desc: 'Certain contracts (indemnity bonds, loan agreements, service agreements above threshold values) require payment of stamp duty under the Indian Stamp Act 1899. An unstamped contract cannot be produced as evidence in court without paying the deficit stamp duty and penalty.' },
      { title: 'Registration for Specific Contracts', desc: 'Contracts involving immovable property (sale deeds, leases over 11 months, development agreements) must be registered under the Registration Act 1908. Failure to register renders them inadmissible as evidence for the immovable property.' },
      { title: 'TDS Deduction on Payments', desc: 'Payments under service agreements and consulting contracts may attract TDS under Sections 194C, 194J of the Income Tax Act. Ensure TDS is deducted at applicable rates (1–10%) to avoid notices from the Income Tax Department.' },
      { title: 'Digital Signatures Are Legally Valid', desc: 'Contracts executed with valid Digital Signature Certificates (DSC) are legally valid under the Information Technology Act 2000. However, certain documents (wills, power of attorney, negotiable instruments) specifically require physical signatures under Indian law.' },
    ],
    faqs: [
      { q: 'Is a verbal agreement legally valid in India?', a: 'A verbal contract is technically valid under the Indian Contract Act 1872 if all essential elements are present. However, proving its terms in court is extremely difficult. For any significant business engagement, a written contract is essential.' },
      { q: 'What happens if a party breaches the contract?', a: 'Under the Indian Contract Act, the innocent party can claim remedies including damages (compensation for loss), specific performance (court order to perform), or injunction (restraining order). The breaching party must compensate for all losses arising naturally from the breach or that were in the contemplation of both parties at the time of contracting.' },
      { q: 'Does every business contract need stamp duty?', a: 'Not all contracts require stamp paper. General service agreements, consulting letters, and MoUs may not require stamping unless they are specifically listed as stampable instruments under the Indian Stamp Act or state stamp acts. Our team advises on stamp duty applicability for each contract type.' },
      { q: 'What is the limitation period for contract disputes in India?', a: 'Under the Limitation Act 1963, a suit for breach of contract must be filed within 3 years from the date of breach or the date when the right to sue accrues. For contracts under the Arbitration Act, limitation periods as specified in the Limitation Act apply to arbitration proceedings as well.' },
      { q: 'Can a contract be signed electronically in India?', a: 'Yes. Under the Information Technology Act 2000, electronic signatures using valid DSCs or Aadhaar-based e-signatures are legally valid for most contracts. However, documents like wills, powers of attorney, promissory notes, bills of exchange, and negotiable instruments cannot be electronically executed.' },
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
