'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Briefcase } from 'lucide-react';

export default function AuditorAppointmentLetterPage() {
  const data = {
    title: 'Auditor Appointment Letter Drafting',
    description: 'Professionally drafted auditor appointment letters for statutory auditors under Section 139 of the Companies Act 2013. Includes ADT-1 filing guidance, AGM resolution, scope of audit, fee, and independence declaration.',
    heroBadges: ['Section 139 Companies Act 2013', 'ADT-1 ROC Filing', 'First Auditor & AGM Appointment'],
    introTitle: 'What is an Auditor Appointment Letter?',
    introContent: (
      <p>An auditor appointment letter is the formal written communication issued by a company to a Chartered Accountant (CA) firm or individual CA, conveying the appointment as the company\'s statutory auditor after the required board or shareholder resolution has been passed, and confirming the terms and conditions of the audit engagement. Under Section 139 of the Companies Act 2013, every company must appoint a statutory auditor: the first auditor must be appointed by the Board of Directors within 30 days of incorporation (or by shareholders in an EGM if the board fails to act within 30 days); subsequent auditors are appointed at the Annual General Meeting (AGM) for a term of up to 5 consecutive years (for companies other than those requiring mandatory audit firm rotation). The appointment of a statutory auditor must be filed with the Registrar of Companies (ROC) in Form ADT-1 within 15 days of the AGM or Board resolution. The auditor appointment letter must include: the name and registration number of the auditor, the company details, the period and term of appointment (from the conclusion of the current AGM to the conclusion of the next/fifth AGM as applicable), the scope of the statutory audit (balance sheet, profit & loss, consolidated accounts), the audit fee and billing arrangement, the auditor\'s responsibilities under the Companies Act and applicable auditing standards, the company\'s obligations to provide access and assistance, the auditor\'s independence declaration (confirming no disqualification under Section 141), and the applicable quality control and reporting standards. The engagement letter (which the auditor firm reciprocates) and the appointment letter together form the formal audit engagement documentation required under SA 210 (Terms of Audit Engagements) issued by ICAI.</p>
    ),
    detailsTitle: 'Key Requirements for Auditor Appointment',
    details: [
      { title: 'Section 139 Compliance', desc: 'First auditor appointed by Board within 30 days of incorporation. Subsequent auditors appointed at AGM for up to 5 years. Listed companies and certain others must rotate audit firms every 5 years under Section 139(2).', icon: ShieldCheck },
      { title: 'ADT-1 Filing with ROC', desc: 'Form ADT-1 must be filed with the ROC within 15 days of AGM where the auditor is appointed. The filing must include the auditor\'s consent letter and the Board/shareholder resolution. Late filing attracts additional fees.', icon: FileText },
      { title: 'Auditor Independence Declaration', desc: 'The appointment letter must confirm that the appointed auditor is not disqualified under Section 141 of the Companies Act 2013 — covering independence from the company, absence of financial interest, and no familial relationship with key managerial personnel.', icon: Award },
      { title: 'Scope & Audit Fee Documentation', desc: 'The appointment letter formalizes the agreed scope (statutory audit only, or including tax audit, transfer pricing, certifications) and the audit fee — preventing future disputes about scope of work and fee revisions.', icon: Briefcase },
    ],
    requirements: [
      'Company name, CIN, and registered office address',
      'Auditor / CA firm name and ICAI registration number',
      'Date and type of resolution (Board resolution for first auditor, AGM resolution for subsequent)',
      'Audit period and term of appointment',
      'Agreed audit fee and billing schedule',
      'Specific scope of audit (standalone, consolidated, XBRL filing requirements)',
    ],
    processTitle: 'How We Draft Your Auditor Appointment Letter',
    processIntro: 'Our corporate compliance team drafts auditor appointment letters that are fully compliant with Companies Act 2013, ICAI standards, and ROC filing requirements.',
    processSteps: [
      { title: 'Verify Appointment Eligibility', desc: 'We verify that the proposed auditor is not disqualified under Section 141 of the Companies Act 2013 and has provided the required consent and certificate of eligibility under Section 139(1).', icon: UserCheck },
      { title: 'Board / AGM Resolution Preparation', desc: 'We draft the Board resolution (for first auditor appointment) or the AGM ordinary resolution (for subsequent appointments) in the prescribed format, including all required recitals under the Companies Act.', icon: FileSearch },
      { title: 'Appointment Letter Drafting', desc: 'We draft the formal auditor appointment letter covering term, scope, fee, access to records, independence declaration, reporting standards, and the auditor\'s consent — aligned with ICAI Engagement Standard SA 210.', icon: CheckCircle2 },
      { title: 'ADT-1 Filing with ROC', desc: 'We prepare and file Form ADT-1 with the ROC within the 15-day statutory deadline, attaching the appointment letter, board/AGM resolution, and auditor\'s consent and eligibility certificate.', icon: FileCheck },
    ],
    processOutro: 'Auditor appointment documentation and ADT-1 filing are completed within 3–5 working days of receiving all required information and documents.',
    documents: [
      { category: 'Company Documents', list: ['Certificate of incorporation and CIN', 'MCA master data extract', 'Last filed annual return and financial statements'] },
      { category: 'Board / AGM Resolution', list: ['Board meeting or AGM notice', 'Draft resolution for auditor appointment', 'Minutes of the meeting where appointment was made'] },
      { category: 'Auditor Documents', list: ['CA firm registration certificate / individual ICAI membership', 'Auditor\'s consent letter under Section 139(1)', 'Auditor\'s certificate of eligibility under Section 141'] },
    ],
    compliance: [
      { title: 'ADT-1 Must Be Filed Within 15 Days', desc: 'Form ADT-1 must be filed with ROC within 15 days of the AGM or Board meeting where the auditor was appointed. Filing after the due date attracts additional fees under the Companies Act Rules and could result in ROC notices for non-compliance.' },
      { title: 'Mandatory Audit Firm Rotation for Listed Companies', desc: 'Under Section 139(2), listed companies and other specified categories (public companies with paid-up capital &#8377;10 crore+, certain unlisted public companies) must mandatorily rotate their audit firms every 5 consecutive years. Individual auditors must be rotated every 5 years for all companies.' },
      { title: 'Disqualification Check is Mandatory', desc: 'Before appointment, verify that the proposed auditor or audit firm is not disqualified under Section 141 — covering financial interest in the company, business relationships, employment of company relatives, and conviction records. Appointment of a disqualified auditor is an offence under the Companies Act.' },
      { title: 'Auditor\'s Consent and Eligibility Certificate', desc: 'The auditor must provide a written consent to act as auditor and a certificate confirming eligibility under Section 141 before the appointment letter is issued. Without this, the appointment is not complete for ROC filing purposes.' },
    ],
    faqs: [
      { q: 'Who appoints the first auditor of a company?', a: 'Under Section 139(6) of the Companies Act 2013, the first auditor of a company other than a government company must be appointed by the Board of Directors within 30 days from the date of incorporation. If the Board fails to appoint, the shareholders must appoint the first auditor in an Extraordinary General Meeting (EGM) within 90 days of the Board\'s failure.' },
      { q: 'What is the term of a statutory auditor\'s appointment?', a: 'For a company other than those requiring mandatory rotation, a statutory auditor is appointed to hold office from the conclusion of one AGM to the conclusion of the next AGM (1 year term). The appointment is typically ratified at each AGM, and the auditor can hold office for up to 5 consecutive years (individual) or 10 years (audit firm with rotation of audit partners) without mandatory change.' },
      { q: 'Is audit firm rotation mandatory for all companies?', a: 'Mandatory rotation under Section 139(2) applies to listed companies, unlisted public companies with paid-up capital of &#8377;10 crore or more, all companies with public borrowings from banks / financial institutions of &#8377;50 crore or more. Private companies and unlisted public companies below the threshold are exempt from mandatory rotation.' },
      { q: 'What happens if ADT-1 is not filed within 15 days?', a: 'Late filing of ADT-1 attracts additional filing fees as prescribed under the Companies (Registration Offices and Fees) Rules. Persistent non-compliance could trigger ROC scrutiny. The appointment itself remains valid but the company faces regulatory non-compliance. It is best to file within the statutory period.' },
      { q: 'Can the same auditor be reappointed for more than 5 years?', a: 'For companies subject to mandatory rotation, an individual auditor or audit firm cannot hold office for more than 5 consecutive years (individual) or 10 years (firm). After the maximum term, they are eligible for reappointment only after a cooling-off period of 5 years. For companies not subject to mandatory rotation, reappointment beyond 5 years is permissible.' },
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
