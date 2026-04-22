'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Phone, ShieldCheck, Globe, MessageSquare, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function TelemarketingRegistrationPage() {
  const data = {
    title: 'Telemarketing Registration',
    description: 'Register your business as a telemarketer (Principal Entity) with TRAI / TRAI DLT platform for compliant marketing calls, SMS, and WhatsApp Business messaging.',
    heroBadges: ['TRAI DLT Platform', 'Blockchain Verified', '7–15 Days'],
    introTitle: 'What is Telemarketing Registration?',
    introContent: (
      <p>Under TRAI's (Telecom Regulatory Authority of India) Digital Ledger Technology (DLT) framework, every business wishing to send commercial SMS, calls, or WhatsApp Business messages must register as a Principal Entity on the DLT platform. Without DLT registration, telecom operators will block your messages and calls. You must register your sender headers (e.g., "VM-LGLDR"), message templates, and opt for a consent management framework. This is mandatory for all businesses running promotional and transactional SMS/call campaigns.</p>
    ),
    detailsTitle: 'Why DLT Telemarketing Registration is Essential',
    details: [
      { title: 'TRAI Compliance', desc: 'Mandatory for all commercial communications — fines up to ₹2 Lakhs per violation.', icon: ShieldCheck },
      { title: 'Message Deliverability', desc: 'Only DLT-registered templates are delivered. Unregistered messages are blocked by telcos.', icon: MessageSquare },
      { title: 'Brand Recognition', desc: 'Use your registered sender header ID (e.g., VM-COMPNY) for instant brand recognition.', icon: Globe },
      { title: 'WhatsApp Business', desc: 'DLT registration is required for WhatsApp Business API with approved message templates.', icon: Phone },
    ],
    requirements: [
      'Business PAN Card', 'GST registration certificate',
      'Company registration certificate (COI / Partnership Deed)', 'Email ID and phone number of authorized signatory',
      'List of SMS headers to be registered', 'Message templates (transactional, promotional, service)',
      'Consent management process documentation', 'Digital Signature (for corporate applicants)',
    ],
    processTitle: 'How to Register on TRAI DLT Platform',
    processIntro: 'DLT registration is done through one of the major telecom operator DLT portals (Jio, Airtel, Vi, BSNL, MTNL).',
    processSteps: [
      { title: 'Choose a DLT Operator', desc: 'Register on any one telecom operator\'s DLT platform (Jio DLT, Airtel DLT, Vi DLT, etc.) — inter-operability is automatic.', icon: UserCheck },
      { title: 'Register as Principal Entity', desc: 'Create account and register as a Principal Entity (business entity) with company documents.', icon: FileSearch },
      { title: 'Add Headers', desc: 'Register your 6-character SMS sender headers (e.g., LGLDR for LegalDoor) — separate headers for transactional and promotional.', icon: Globe },
      { title: 'Register Message Templates', desc: 'Submit all SMS/call script templates for approval. Templates must be specific — variable fields should be minimal and defined.', icon: CheckCircle2 },
      { title: 'Consent Framework', desc: 'Set up consent mechanism (opt-in records) for promotional messages. Scrub DND numbers regularly.', icon: Phone },
      { title: 'Go Live', desc: 'Once headers and templates are approved by TRAI, start your compliant marketing campaigns.', icon: FileCheck },
    ],
    processOutro: 'DLT registration takes 7–15 days. Template approval can be ongoing as you add new campaigns.',
    documents: [
      { category: 'Business Identity', list: ['PAN Card of Business', 'GST Certificate', 'Certificate of Incorporation', 'Address proof'] },
      { category: 'Registration Details', list: ['List of SMS headers needed', 'Draft message templates', 'Consent collection mechanism description'] },
      { category: 'Authorized Signatory', list: ['PAN and Aadhaar of signatory', 'Authorization letter', 'Email and mobile for OTP'] },
    ],
    compliance: [
      { title: 'DND Scrubbing', desc: 'Before every bulk SMS or call campaign, scrub your recipient list against NDNC (National Do Not Call) registry.' },
      { title: 'Template Compliance', desc: 'Use only approved templates — sending messages outside approved templates is a TRAI violation.' },
      { title: 'Consent Records', desc: 'Maintain digital records of customer consent (opt-in) for at least 3 years.' },
      { title: 'TRAI Complaint Resolution', desc: 'Respond to TRAI complaints within 24 hours. Recurring violations lead to header blacklisting.' },
    ],
    faqs: [
      { q: 'Is DLT registration mandatory for WhatsApp Business?', a: 'Yes. To use WhatsApp Business API for marketing messages, your business must be DLT-registered and use WhatsApp-approved message templates.' },
      { q: 'What are the SMS header types?', a: 'Transactional headers (6 characters, for OTPs and service messages), Promotional headers (for marketing), and Service/Implicit consent headers. Each requires separate TRAI approval.' },
      { q: 'What happens if I send SMS without DLT registration?', a: 'Your messages will be blocked by telecom operators. Continued violations can lead to blacklisting of your number and TRAI penalties up to ₹2 Lakhs per violation.' },
      { q: 'Can one DLT registration cover multiple businesses?', a: 'No. Each business entity (separate PAN/GST) requires its own DLT registration. A group of companies must have separate registrations.' },
      { q: 'What is a telemarketer vs. principal entity?', a: 'A Principal Entity (PE) is the business whose product/service is being promoted. A Telemarketer (TM) is the company making the calls/sending SMS on behalf of the PE. Both must be separately registered on DLT.' },
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
