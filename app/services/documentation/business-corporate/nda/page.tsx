'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale } from 'lucide-react';

export default function NDAPage() {
  const data = {
    title: 'Non-Disclosure Agreement (NDA) Drafting',
    description: 'Protect your confidential business information with a professionally drafted NDA (Confidentiality Agreement). Covers unilateral and mutual NDAs — enforceable under Indian Contract Act with injunction and damages remedies.',
    heroBadges: ['Unilateral & Mutual NDA', 'Indian Contract Act Enforceable', 'Injunction + Damages Remedies'],
    introTitle: 'What is a Non-Disclosure Agreement (NDA)?',
    introContent: (
      <p>A Non-Disclosure Agreement (NDA), also called a Confidentiality Agreement (CA) or Secrecy Agreement, is a legally binding contract under the Indian Contract Act 1872 in which one or both parties agree to keep certain specified information confidential and not disclose it to third parties without authorization. NDAs are essential in virtually every business context where sensitive information is shared: technology and software development (sharing source code, product roadmaps, technical architecture with vendors or partners), mergers and acquisitions (sharing financials, client lists, intellectual property during due diligence), employment relationships (protecting trade secrets, customer data, and proprietary processes from current and departing employees), investor-founder discussions (sharing business plans, financial projections, and product demos with potential investors), and franchise or licensing arrangements (sharing proprietary systems, recipes, and operational know-how). In India, NDAs can be unilateral (one-way — only one party discloses, only the recipient is bound) or mutual (both parties disclose and both are bound). Key drafting elements include: a precise definition of what constitutes "confidential information" (and clear carve-outs for information already in the public domain, independently developed information, and information received from third parties), permitted disclosures (to employees, advisors, courts), the duration of the confidentiality obligation (during the term and typically 2–5 years post-term), the remedies for breach (injunctive relief under Section 55 of the Specific Relief Act 1963 and damages), and the governing law and jurisdiction. Indian courts regularly grant injunctions for NDA breaches where monetary compensation would be inadequate, making a well-drafted NDA a powerful legal tool.</p>
    ),
    detailsTitle: 'Why You Need a Professionally Drafted NDA',
    details: [
      { title: 'Protects Trade Secrets & Business IP', desc: 'An NDA legally prevents recipients from disclosing or using your trade secrets, customer lists, technical know-how, financial data, product plans, and proprietary processes for any unauthorized purpose.', icon: ShieldCheck },
      { title: 'Injunction Remedy for Breach', desc: 'Indian courts grant injunctions under the Specific Relief Act 1963 to stop ongoing NDA breaches — particularly when monetary compensation is inadequate to address the harm from disclosure of sensitive technical or business information.', icon: Scale },
      { title: 'Pre-Deal Protection in M&A & Investments', desc: 'NDAs are essential before any M&A due diligence, investor pitch, or partnership negotiation — protecting your financials, product IP, and client information from being used by the counterparty if the deal does not proceed.', icon: Award },
      { title: 'Employee & Vendor Confidentiality', desc: 'NDAs with employees (often embedded in appointment letters) and vendors / contractors protect sensitive business information from being shared with competitors, misused for personal benefit, or taken when the relationship ends.', icon: FileText },
    ],
    requirements: [
      'Names and addresses of the disclosing and receiving parties',
      'Nature of the confidential information to be protected',
      'Purpose for which the information is being shared',
      'Duration of the NDA (typically 2–5 years)',
      'Whether NDA should be unilateral or mutual',
      'Specific carve-outs or permitted disclosure requirements',
    ],
    processTitle: 'How We Draft Your NDA',
    processIntro: 'Our team drafts NDAs tailored to your specific situation — whether for a one-time transaction, an ongoing commercial relationship, or employment — with enforceable provisions under Indian law.',
    processSteps: [
      { title: 'Assess Information & Risk Profile', desc: 'We understand the type of information being shared, the parties involved, the commercial context, and the specific risks — to determine whether a unilateral or mutual NDA is appropriate and what protections are critical.', icon: UserCheck },
      { title: 'Define Confidential Information Precisely', desc: 'We carefully draft the definition of "confidential information" to be comprehensive enough to capture all sensitive information while including appropriate carve-outs (public domain, independently developed, court-ordered disclosure).', icon: FileSearch },
      { title: 'Draft Obligations, Term & Remedies', desc: 'We include detailed confidentiality obligations, permitted use restrictions, return/destruction of materials on termination, duration of obligations post-relationship, and express remedies (injunction, damages, specific performance).', icon: CheckCircle2 },
      { title: 'Review & Execution', desc: 'Both parties review the NDA, we incorporate any agreed changes, and assist with execution — on letterhead for simple NDAs or on stamp paper if the NDA includes financial obligations or specific performance commitments.', icon: FileCheck },
    ],
    processOutro: 'Standard NDA drafting is completed within 1–3 working days. Complex NDAs for M&A transactions or technology licensing may take 3–5 working days.',
    documents: [
      { category: 'Party Details', list: ['Company incorporation certificate / individual PAN', 'Authorized signatory details', 'Nature of business of both parties'] },
      { category: 'Information to Be Protected', list: ['Description of confidential information categories', 'Any existing confidentiality policies or previous NDAs', 'Technology or IP documentation overview'] },
      { category: 'Context & Purpose', list: ['Nature of the business relationship or transaction', 'Duration of the engagement', 'Specific concerns or incidents that necessitate the NDA'] },
    ],
    compliance: [
      { title: 'NDA Alone Does Not Protect Trade Secrets', desc: 'An NDA is a contractual remedy — it does not create an automatic property right in confidential information. India does not have a standalone Trade Secrets Act, making a comprehensive NDA the primary (and often only) legal protection available for confidential business information.' },
      { title: 'Duration of Obligation Must Be Reasonable', desc: 'Indian courts may decline to enforce perpetual or unreasonably long confidentiality obligations. A clear, defined duration (2–5 years post-disclosure) is enforceable. Trade secrets and technical know-how may justify longer periods.' },
      { title: 'Employee NDAs Need Specific Attention', desc: 'NDAs with employees must be carefully drafted to avoid conflicting with their right to use skills acquired during employment. An NDA cannot prevent an employee from using general skills and knowledge gained through experience — it can only restrict disclosure of specific confidential information.' },
      { title: 'Stamp Duty May Apply', desc: 'NDAs that contain financial commitments, guarantee obligations, or are executed as part of a larger stamped transaction may require stamp duty payment. Standalone confidentiality agreements generally do not require stamping under most state stamp acts.' },
    ],
    faqs: [
      { q: 'Is an NDA enforceable in India?', a: 'Yes. NDAs are enforceable under the Indian Contract Act 1872. Indian courts grant injunctions to prevent ongoing breaches of confidentiality obligations and award damages for harm caused by breach. The key is having a clearly defined scope of confidential information and a specific, reasonable duration.' },
      { q: 'What is the difference between a unilateral and mutual NDA?', a: 'In a unilateral NDA, only one party (the disclosing party) shares confidential information and only the other party (the recipient) has confidentiality obligations. In a mutual NDA, both parties share confidential information and both are bound by confidentiality obligations — common in joint ventures, partnerships, and M&A negotiations.' },
      { q: 'Can an NDA prevent an ex-employee from working for a competitor?', a: 'An NDA restricts disclosure and use of specific confidential information — it does not prevent an ex-employee from working for a competitor. A separate non-compete clause (subject to limitations under Section 27 of the Indian Contract Act) would be needed for that purpose, and even then, it has limited enforceability in India post-employment.' },
      { q: 'Does an NDA need to be notarized or registered?', a: 'Generally, NDAs do not require notarization or registration in India. A signed NDA on company letterhead or plain paper (or stamp paper if preferred) is legally valid and enforceable. Notarization may be useful for evidence purposes but is not legally required for enforceability.' },
      { q: 'What should I do if the other party breaches the NDA?', a: 'Immediately document the breach (gather evidence of disclosure or unauthorized use), send a legal notice to the breaching party demanding immediate cessation and damages. If the breach is ongoing or threatens irreparable harm, file for an urgent injunction before the High Court or Commercial Court. Simultaneously evaluate your damages claim for losses caused by the breach.' },
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
