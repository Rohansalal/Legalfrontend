'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Briefcase } from 'lucide-react';

export default function OfferAppointmentLetterPage() {
  const data = {
    title: 'Offer Letter & Appointment Letter Drafting',
    description: 'Get legally compliant offer letters and appointment letters drafted for your employees. Covers CTC structure, probation, notice period, confidentiality, and compliance with Indian labor laws.',
    heroBadges: ['Labor Law Compliant', 'CTC Breakup Included', 'Probation & Notice Period Covered'],
    introTitle: 'What are Offer Letters and Appointment Letters?',
    introContent: (
      <p>An offer letter and an appointment letter serve distinct but related functions in the Indian employment lifecycle. An offer letter is issued by an employer to a selected candidate before the candidate formally accepts the position — it outlines the key terms of employment (designation, CTC, location, joining date, and any conditions precedent to final appointment) and invites the candidate to accept. While an offer letter creates a legal expectation, it is generally not considered a fully binding employment contract until countersigned by the candidate. An appointment letter, on the other hand, is issued after the candidate accepts the offer and joins the organization — it is the formal, binding employment agreement that governs the entire employment relationship. In India, appointment letters must comply with the applicable Central or State Industrial Employment (Standing Orders) Act, the Payment of Wages Act 1936, the Minimum Wages Act 1948, the Shops and Establishments Act of the respective state, and the Industrial Disputes Act 1947. A legally sound appointment letter must include: designation and department, detailed CTC breakup (basic salary, HRA, special allowance, PF, gratuity, variable pay, ESOPs if any), joining date, work location, probation period (typically 3–6 months), notice period during and after probation (typically 30–90 days), working hours and weekly off, leave entitlements, confidentiality and data protection obligations, IP assignment clause (all work-related IP belongs to the employer), non-solicitation during employment, code of conduct reference, and termination conditions. Many companies also attach a Confidentiality and Non-Disclosure Agreement as an annexure to the appointment letter.</p>
    ),
    detailsTitle: 'Why Proper Offer & Appointment Letters Matter',
    details: [
      { title: 'Legally Binding Employment Terms', desc: 'A signed appointment letter is a legally binding contract under the Indian Contract Act 1872. Clear terms protect both employer and employee from disputes over salary, notice period, and termination.', icon: ShieldCheck },
      { title: 'Labor Law Compliance', desc: 'Appointment letters must align with state Shops & Establishments Act, Industrial Disputes Act, and Minimum Wages Act requirements. Non-compliant letters expose employers to labor court claims and penalties.', icon: FileText },
      { title: 'CTC Transparency Prevents Disputes', desc: 'A detailed CTC breakup (gross salary, deductions, variable components, benefits) prevents future disputes over actual take-home salary, PF contributions, and performance bonus eligibility.', icon: Award },
      { title: 'IP & Confidentiality Protection', desc: 'Properly drafted IP assignment and confidentiality clauses protect the company\'s trade secrets, client data, and proprietary technology from being misused by departing employees.', icon: Briefcase },
    ],
    requirements: [
      'Candidate\'s full name, designation, and department',
      'CTC structure including all components (basic, HRA, PF, gratuity, variable)',
      'Joining date and work location',
      'Probation period duration and conditions for confirmation',
      'Notice period during probation and post-confirmation',
      'Applicable state (determines Shops & Establishments Act applicability)',
    ],
    processTitle: 'How We Draft Your Offer & Appointment Letters',
    processIntro: 'Our HR legal team creates customized, labor-law-compliant employment letters that protect your organization\'s interests while setting clear expectations for employees.',
    processSteps: [
      { title: 'Employer & Role Briefing', desc: 'We understand your organization\'s HR policies, industry sector, applicable state labor laws, CTC structure, and specific clauses needed (non-compete, IP assignment, confidentiality).', icon: UserCheck },
      { title: 'Template Creation or Customization', desc: 'We draft a comprehensive offer / appointment letter template covering all statutory requirements and commercial terms. Existing templates are reviewed and updated for legal compliance.', icon: FileSearch },
      { title: 'CTC Structuring & Tax Optimization', desc: 'We ensure the CTC breakup is optimally structured for tax efficiency (maximizing HRA, LTA, food coupons, leave encashment, NPS contributions) while remaining legally compliant.', icon: CheckCircle2 },
      { title: 'Review, Finalization & Delivery', desc: 'You review the drafts, we incorporate feedback, and deliver final templates in Word/PDF format ready for HR use — along with a guidance note on legally required disclosures.', icon: FileCheck },
    ],
    processOutro: 'Standard offer and appointment letter templates are delivered within 2–3 working days. Full HR documentation bundles (standing orders, HR manual, employment contracts) take 5–10 days.',
    documents: [
      { category: 'Employer Details', list: ['Company incorporation certificate and PAN', 'HR policy document or existing employment letter templates', 'State of operations (for Shops & Establishments Act compliance)'] },
      { category: 'Employee / Role Details', list: ['Designation and job description', 'CTC structure and breakup details', 'Location, reporting manager, and department'] },
      { category: 'Compliance Requirements', list: ['Applicable minimum wage notification for the state and category', 'PF and ESI registration details', 'POSH policy reference (mandatory for 10+ employee companies)'] },
    ],
    compliance: [
      { title: 'Shops & Establishments Act Compliance', desc: 'Every state has its own Shops and Commercial Establishments Act that prescribes maximum working hours, minimum leave entitlements, overtime rules, and appointment letter requirements. Letters must reflect the state-specific provisions for the work location.' },
      { title: 'PF & ESI Deductions Must Be Reflected', desc: 'For establishments covered under the EPF Act (20+ employees) and ESI Act (10+ employees), the appointment letter\'s CTC breakup must accurately reflect PF (12% of basic) and ESI (0.75% of gross) deductions to avoid payroll disputes.' },
      { title: 'Probation Terms Must Be Clear', desc: 'The probation period, confirmation process, and notice period during probation (usually 15–30 days, lower than post-confirmation notice) must be explicitly stated. Ambiguous probation terms can lead to labor court complications on termination during probation.' },
      { title: 'Offer Letter Is Not a Full Contract', desc: 'An offer letter alone does not replace a proper appointment letter. Relying only on offer letters without issuing appointment letters after joining exposes employers to disputes about terms and conditions of employment, especially regarding notice periods and termination.' },
    ],
    faqs: [
      { q: 'Is an offer letter legally binding in India?', a: 'An offer letter creates a legal expectation but is typically not a fully binding employment contract until the candidate signs and returns it AND joins the company. However, if an employer withdraws an offer letter after acceptance, the candidate may have a claim for damages for loss of opportunity (especially if they resigned from a previous job).' },
      { q: 'What should a CTC breakup include?', a: 'A complete CTC breakup should include basic salary (typically 40–50% of CTC), HRA (40–50% of basic), special allowance, PF employer contribution (12% of basic), gratuity provisioning (4.81% of basic), variable / performance bonus, LTA, medical allowance, food coupons, and any ESOP grants. The difference between gross salary, CTC, and take-home must be clearly explained.' },
      { q: 'Can an employer change the terms in the appointment letter after it is signed?', a: 'No. A signed appointment letter is a binding contract. Any material change in terms (designation downgrade, salary reduction, location transfer) requires the employee\'s written consent and typically a new amendment letter or addendum. Unilateral changes can be treated as constructive dismissal.' },
      { q: 'What is the legally required notice period in India?', a: 'There is no single mandated notice period — it depends on the employment contract, applicable Standing Orders (under the Industrial Employment Standing Orders Act 1946), and the Shops and Establishments Act of the state. Typical ranges: 30 days during probation, 60–90 days post-confirmation. Notice pay in lieu of notice is usually permitted.' },
      { q: 'Is an IP assignment clause in an appointment letter enforceable?', a: 'Yes. An IP assignment clause stating that all work-related intellectual property created by the employee belongs to the employer is enforceable under the Copyright Act 1957 (employer owns copyright in work made under employment) and Patent Act 1970. Explicit assignment language in the appointment letter reinforces this statutory position.' },
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
