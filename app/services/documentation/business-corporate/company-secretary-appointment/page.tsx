'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Briefcase } from 'lucide-react';

export default function CompanySecretaryAppointmentPage() {
  const data = {
    title: 'Appointment of Company Secretary',
    description: 'Complete documentation for appointing a Company Secretary (CS) as Key Managerial Personnel under the Companies Act 2013. Covers Board resolution, Form MR-1 ROC filing, scope of compliance, and whole-time vs. practising CS requirements.',
    heroBadges: ['Companies Act 2013 Compliant', 'Form MR-1 ROC Filing', 'KMP Appointment Process'],
    introTitle: 'What is the Appointment of a Company Secretary?',
    introContent: (
      <p>A Company Secretary (CS) is a Key Managerial Personnel (KMP) under Section 2(51) and Section 203 of the Companies Act 2013 — a professional responsible for ensuring the company\'s compliance with statutory and regulatory requirements, advising the Board on corporate governance, and acting as the primary interface between the company, its shareholders, and regulatory authorities including the MCA, SEBI, RBI, and stock exchanges. Under Section 203 of the Companies Act 2013, the appointment of a whole-time Company Secretary is mandatory for every listed company and every other public company with a paid-up share capital of &#8377;10 crore or more. For private limited companies, a whole-time CS is mandatory if the paid-up share capital is &#8377;5 crore or more (as per the Companies (Appointment and Remuneration of Managerial Personnel) Rules 2014). Smaller companies that are not required to appoint a whole-time CS can engage a Company Secretary in Practice (CS in practice) for secretarial audit (mandatory for listed companies and certain others under Section 204) and periodic compliance certifications. The process for appointing a CS involves passing a Board resolution, issuing the appointment letter, and filing Form MR-1 with the ROC within 30 days of the appointment. The CS\'s responsibilities under the Companies Act include: maintaining statutory registers, filing ROC returns (AOC-4, MGT-7, MGT-14, etc.), managing board and general meeting procedures, issuing share certificates, SEBI compliance for listed entities, and providing secretarial audit report in Form MR-3.</p>
    ),
    detailsTitle: 'Key Responsibilities of a Company Secretary',
    details: [
      { title: 'Statutory Compliance & ROC Filings', desc: 'CS manages all ROC filings (annual returns MGT-7, financial statements AOC-4, resolutions MGT-14, charge registrations), ensuring zero-default compliance with MCA portal deadlines to avoid penalties.', icon: FileText },
      { title: 'Board & General Meeting Governance', desc: 'Manages the complete lifecycle of Board meetings, committee meetings, and AGM/EGM — drafting notices, agenda, resolutions, and minutes in compliance with Companies Act and Secretarial Standards (SS-1 and SS-2).', icon: ShieldCheck },
      { title: 'SEBI & Stock Exchange Compliance', desc: 'For listed companies, the CS is responsible for SEBI LODR compliance — quarterly filings, insider trading policy, related party transaction disclosures, corporate governance report, and stock exchange intimations.', icon: Globe },
      { title: 'Secretarial Audit & Certifications', desc: 'CS in practice conducts secretarial audit under Section 204 for listed and large companies, issues Annual Secretarial Compliance Report for listed entities, and certifies various compliance documents for MCA and other regulators.', icon: Award },
    ],
    requirements: [
      'Company name, CIN, and paid-up capital (determines whether CS is mandatory)',
      'CS candidate details: name, ICSI membership number, and certificate of practice (if applicable)',
      'Date of proposed appointment',
      'Whether whole-time CS (employee) or CS in practice (consultant)',
      'Remuneration / professional fee agreed',
      'Scope of responsibilities and compliance areas to be managed',
    ],
    processTitle: 'How to Appoint a Company Secretary',
    processIntro: 'Our corporate compliance team manages the complete CS appointment process — from Board resolution drafting to Form MR-1 filing with the ROC within the 30-day statutory deadline.',
    processSteps: [
      { title: 'Eligibility & Applicability Assessment', desc: 'We determine whether your company is mandatorily required to appoint a whole-time CS (based on paid-up capital and listing status) or can engage a CS in practice, and identify any applicable exemptions.', icon: UserCheck },
      { title: 'Board Resolution Drafting', desc: 'We draft the Board resolution for CS appointment in the prescribed format under the Companies Act, including all required recitals (eligibility confirmation, remuneration approval, designation as KMP).', icon: FileSearch },
      { title: 'Appointment Letter Preparation', desc: 'We prepare the CS appointment / engagement letter covering designation, scope of responsibilities, remuneration, notice period, reporting structure, and specific compliance obligations under the Companies Act and SEBI regulations (if applicable).', icon: CheckCircle2 },
      { title: 'Form MR-1 Filing with ROC', desc: 'We file Form MR-1 (Return of Appointment of Managing Director, Whole-time Director, Manager, and Company Secretary) with the ROC within 30 days of the Board resolution approving the CS appointment.', icon: FileCheck },
    ],
    processOutro: 'CS appointment documentation and MR-1 filing are completed within 3–7 working days of receiving the Board resolution date and CS\'s details.',
    documents: [
      { category: 'Company Documents', list: ['Certificate of Incorporation and CIN', 'Current paid-up capital details', 'Existing KMP list and MCA master data'] },
      { category: 'CS Candidate Documents', list: ['ICSI Associate / Fellow membership certificate', 'Certificate of Practice (for CS in practice)', 'PAN Card and Aadhaar Card of the CS'] },
      { category: 'Board Authorization', list: ['Board meeting notice and agenda', 'Signed Board resolution for CS appointment', 'Digital signatures of authorized directors for MCA filing'] },
    ],
    compliance: [
      { title: 'Form MR-1 Must Be Filed Within 30 Days', desc: 'Under Rule 3 of the Companies (Appointment and Remuneration of Managerial Personnel) Rules 2014, Form MR-1 must be filed with the ROC within 30 days of the CS\'s appointment. Late filing attracts additional fees and potential ROC notice for non-compliance.' },
      { title: 'Mandatory CS for ₹5 Crore+ Private Companies', desc: 'Private limited companies with paid-up capital of &#8377;5 crore or more must mandatorily appoint a whole-time Company Secretary. Non-compliance attracts penalties under Section 203(5) of the Companies Act — company and every officer in default can be penalized.' },
      { title: 'Secretarial Audit Obligation', desc: 'Listed companies, unlisted public companies with paid-up capital of &#8377;50 crore+, and public companies with turnover of &#8377;250 crore+ must obtain a Secretarial Audit Report in Form MR-3 from a CS in practice, annexed to the Board\'s Report every financial year.' },
      { title: 'CS Cessation Must Also Be Filed', desc: 'When a CS vacates office (resignation, removal, death), Form MR-1 must be filed again to record the cessation, and the reason for cessation must be disclosed. For listed companies, stock exchange intimation is also required within 24 hours of CS cessation.' },
    ],
    faqs: [
      { q: 'Is it mandatory for a private limited company to appoint a Company Secretary?', a: 'Yes, but only if the private limited company has a paid-up share capital of &#8377;5 crore or more. Private limited companies below this threshold are not required to appoint a whole-time CS, but may engage a CS in practice for secretarial audit and compliance certifications.' },
      { q: 'What is the difference between a whole-time CS and a CS in practice?', a: 'A whole-time Company Secretary (CS employed by the company) is a full-time employee who serves as KMP, manages ongoing compliance, and is directly responsible to the Board. A Company Secretary in Practice (CS with a certificate of practice) is an independent professional who provides secretarial services on a consultancy basis and can conduct secretarial audits and issue compliance certificates.' },
      { q: 'What are Secretarial Standards and are they mandatory?', a: 'Secretarial Standards (SS-1 on Meetings of the Board of Directors and SS-2 on General Meetings) are issued by the ICSI and are mandatory for all companies under Section 118(10) of the Companies Act 2013. Non-compliance with Secretarial Standards can render board and general meeting proceedings procedurally defective.' },
      { q: 'Can a director also serve as a Company Secretary?', a: 'Under the Companies Act 2013, a whole-time CS can hold the designation of KMP but cannot simultaneously be a Director of the same company. The Act separates the roles of Director (governance) and CS (compliance officer) to maintain independence. The same individual cannot hold both roles simultaneously in most cases.' },
      { q: 'What is the penalty for not appointing a Company Secretary when mandatory?', a: 'Under Section 203(5) of the Companies Act 2013, if a company required to appoint a whole-time CS fails to do so, the company and every director / officer in default can be penalized with a fine of &#8377;1 lakh, and a further fine of &#8377;500 per day for each day the contravention continues after the first offense. Repeated non-compliance attracts higher penalties under Section 454.' },
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
