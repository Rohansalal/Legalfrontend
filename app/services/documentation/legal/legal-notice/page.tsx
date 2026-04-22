'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale } from 'lucide-react';

export default function LegalNoticePage() {
  const data = {
    title: 'Legal Notice Drafting',
    description: 'Send a professionally drafted legal notice by a qualified advocate before initiating court proceedings. Covers cheque bounce, recovery of dues, property disputes, and more.',
    heroBadges: ['Drafted by Advocates', 'CPC & NI Act Compliant', '30-Day Response Window'],
    introTitle: 'What is a Legal Notice?',
    introContent: (
      <p>A legal notice is a formal written communication sent by one party to another as a precursor to initiating legal proceedings in India. It serves as an official warning, putting the recipient on record that the sender intends to take legal action unless the grievance is resolved within a specified time — typically 30 days. Under Section 80 of the Code of Civil Procedure (CPC), a mandatory 2-month notice is required before filing a suit against the Central or State Government. Legal notices are commonly used for recovery of money dues, cheque dishonour under Section 138 of the Negotiable Instruments Act 1881, property possession disputes, breach of contract, deficiency in services under the Consumer Protection Act 2019, and employment-related disputes. A well-drafted legal notice must clearly state the facts, the legal basis of the claim, the relief sought, and the time given to the recipient to respond. It must be sent via registered post with acknowledgement due (RPAD) or courier with proof of delivery to create a legal record. Drafting must be done by a qualified advocate to ensure accuracy, proper legal citations, and enforceability in Indian courts.</p>
    ),
    detailsTitle: 'Why Send a Legal Notice?',
    details: [
      { title: 'Mandatory Pre-Litigation Step', desc: 'For cheque bounce (Sec 138 NI Act) and government suits (Sec 80 CPC), sending a legal notice is a legal prerequisite before filing court cases.', icon: ShieldCheck },
      { title: 'Creates Legal Record', desc: 'A properly dispatched legal notice via RPAD creates admissible evidence of your intent and demand, strengthening your case in court.', icon: FileText },
      { title: 'Faster Out-of-Court Resolution', desc: 'Most disputes — debt recovery, tenancy issues, consumer complaints — are resolved at the legal notice stage itself, saving time and litigation costs.', icon: Zap },
      { title: 'Wide Applicability', desc: 'Applicable across cheque bounce, loan default, property encroachment, breach of contract, defamation, trademark infringement, and employment matters.', icon: Globe },
    ],
    requirements: [
      'Full name and address of sender (notice issuer)',
      'Full name and address of recipient (noticee)',
      'Details of the dispute / cause of action',
      'Copies of supporting documents (cheques, agreements, invoices)',
      'Amount in dispute or specific relief demanded',
      'Timeline of events with dates',
    ],
    processTitle: 'How to Send a Legal Notice',
    processIntro: 'Our advocate-led process ensures your notice is legally sound, properly formatted, and dispatched with evidence of delivery.',
    processSteps: [
      { title: 'Consultation & Fact Gathering', desc: 'Our legal team reviews your dispute, collects all relevant documents, and assesses the strongest legal grounds for the notice.', icon: UserCheck },
      { title: 'Drafting by Qualified Advocate', desc: 'A qualified advocate drafts the notice citing relevant sections of law (NI Act, CPC, Contract Act, Consumer Protection Act) with clear demands.', icon: FileSearch },
      { title: 'Client Review & Approval', desc: 'You review the draft, suggest any modifications, and give final approval before dispatch.', icon: CheckCircle2 },
      { title: 'Dispatch via RPAD / Courier', desc: 'The notice is sent via Registered Post with Acknowledgement Due (RPAD) or speed post to ensure legal proof of delivery.', icon: FileCheck },
    ],
    processOutro: 'The entire process from consultation to dispatch is typically completed within 1–3 working days.',
    documents: [
      { category: 'Sender Details', list: ['PAN Card / Aadhaar of sender', 'Contact address and email', 'Signed authority letter to advocate'] },
      { category: 'Dispute Documents', list: ['Bounced cheque copies (for Sec 138)', 'Agreement / contract copies', 'Invoices, receipts, or proof of dues'] },
      { category: 'Supporting Evidence', list: ['WhatsApp / email communication records', 'Bank return memo (for cheque bounce)', 'Photos, property documents (for property disputes)'] },
    ],
    compliance: [
      { title: 'Dispatch via RPAD is Mandatory', desc: 'For Section 138 NI Act notices, dispatch must be via registered post or speed post. Courier alone may not satisfy the statutory requirement in all courts.' },
      { title: 'Strict 30-Day Limitation for Cheque Bounce', desc: 'A Section 138 notice must be sent within 30 days of receiving the bank memo of dishonour. Missing this window forfeits your right to prosecute.' },
      { title: 'Two-Month Notice for Govt. Suits', desc: 'Under CPC Section 80, a 2-month notice is mandatory before suing the Central/State Government or a public officer. Non-compliance results in suit dismissal.' },
      { title: 'Keep Proof of Delivery', desc: 'Retain RPAD acknowledgement, postal receipt, and tracking proof as these are critical evidence if the matter proceeds to court.' },
    ],
    faqs: [
      { q: 'Is a legal notice mandatory before filing a court case?', a: 'Not always, but it is mandatory for cheque bounce cases under Section 138 NI Act and suits against the government under Section 80 CPC. In other cases, it is highly advisable as it strengthens your legal position and often resolves disputes without litigation.' },
      { q: 'Can I send a legal notice myself without an advocate?', a: 'Technically yes, but it is strongly discouraged. A notice drafted without proper legal knowledge may lack essential elements, cite wrong sections, or create legal ambiguities that can harm your case in court.' },
      { q: 'What happens if the recipient ignores the legal notice?', a: 'If no response is received within the stipulated period (usually 15–30 days), you can proceed to file the appropriate case in court. The ignored notice itself becomes evidence of wilful default or breach.' },
      { q: 'What is the time limit to send a cheque bounce legal notice?', a: 'Under Section 138 of the NI Act, the legal notice must be sent within 30 days of receiving the dishonour memo from your bank. After the notice, the drawer has 15 days to make payment.' },
      { q: 'How much does legal notice drafting cost?', a: 'Our legal notice drafting and dispatch service is competitively priced. Fees vary based on the complexity of the matter. Contact us for a transparent quote with no hidden charges.' },
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
