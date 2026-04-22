'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Briefcase } from 'lucide-react';

export default function ResignationLetterPage() {
  const data = {
    title: 'Resignation Letter Drafting',
    description: 'Get a professionally drafted resignation letter that protects your notice period compliance, final settlement, PF/gratuity claims, and future employment references. Legally sound and professionally worded.',
    heroBadges: ['Notice Period Compliant', 'PF & Gratuity Protected', 'Professional & Dispute-Free'],
    introTitle: 'What is a Resignation Letter?',
    introContent: (
      <p>A resignation letter is a formal written notice submitted by an employee to their employer declaring the intention to terminate employment, typically specifying the notice period being served and the last working day. In India, while no law mandates a specific resignation letter format, the terms of resignation are governed by the employment contract (appointment letter), applicable Standing Orders under the Industrial Employment (Standing Orders) Act 1946, and state Shops and Establishments Acts. A proper resignation letter is not merely a formality — it is a critical document that protects the employee\'s legal and financial interests in multiple ways. It establishes the start of the notice period (e.g., 30/60/90 days), which is crucial for calculating the last working day and preventing disputes about notice pay deductions. It creates a clear paper trail that prevents the employer from later denying receipt of resignation or claiming the employee abandoned their duties — which could jeopardize the issuance of a relieving letter. A properly resigned employee is entitled to full and final settlement including pending salary, earned leave encashment, performance bonus (pro-rated as per policy), and Employee Provident Fund (EPF) withdrawal or transfer. Employees with 5+ years of continuous service are entitled to gratuity under the Payment of Gratuity Act 1972 — a proper resignation protects this entitlement. The resignation letter must be sent to the appropriate authority (HR department and reporting manager), via email with read receipt and a physical copy where possible, to create unimpeachable evidence of the resignation date and terms.</p>
    ),
    detailsTitle: 'Why a Proper Resignation Letter Matters',
    details: [
      { title: 'Protects Notice Period Rights', desc: 'A dated resignation letter establishes the exact start of the notice period, preventing employers from disputing the last working day or deducting excess notice pay from the final settlement.', icon: ShieldCheck },
      { title: 'Ensures Full & Final Settlement', desc: 'Proper resignation creates a legal right to receive pending salary, leave encashment, performance bonus (as per policy), and initiation of PF transfer or withdrawal within the statutory timeline.', icon: Award },
      { title: 'Secures Gratuity Entitlement', desc: 'Employees with 5+ years of continuous service are entitled to gratuity under the Payment of Gratuity Act 1972 (15 days\' salary for each year). A proper resignation letter protects this statutory right.', icon: FileText },
      { title: 'Maintains Professional Relationships', desc: 'A professionally worded resignation letter preserves the employer-employee relationship, ensuring a positive relieving letter and reference — critical for future employment and background verification checks.', icon: Briefcase },
    ],
    requirements: [
      'Employee\'s full name, designation, and employee ID',
      'Date of resignation submission',
      'Notice period duration as per appointment letter',
      'Proposed last working day',
      'Brief reason for resignation (optional but professional)',
      'Commitment to complete handover of duties and pending work',
    ],
    processTitle: 'How We Draft Your Resignation Letter',
    processIntro: 'Our HR legal team drafts resignation letters that are professionally worded, legally precise, and structured to protect your employment rights and future references.',
    processSteps: [
      { title: 'Review Employment Contract Terms', desc: 'We review your appointment letter to identify the correct notice period, any service bond obligations, notice pay provisions, and any clauses related to early departure conditions.', icon: UserCheck },
      { title: 'Assess Special Situations', desc: 'We evaluate any special circumstances: service bond period, counter-offer handling, immediate resignation vs. notice period serving, garden leave provisions, or ongoing project handover requirements.', icon: FileSearch },
      { title: 'Draft the Resignation Letter', desc: 'We draft a formal, professional resignation letter specifying the resignation date, notice period, proposed last working day, and commitment to a smooth handover — avoiding any language that could be used against you.', icon: CheckCircle2 },
      { title: 'Dispatch Guidance & Documentation', desc: 'We advise on the best method of submission (email with read receipt + physical copy), maintaining evidence of delivery, and follow-up procedures to ensure the employer acknowledges the resignation in writing.', icon: FileCheck },
    ],
    processOutro: 'Resignation letter drafting is completed within 24 hours of consultation. Complex situations involving service bonds or disputed notice periods may require additional legal consultation.',
    documents: [
      { category: 'Employee Documents', list: ['Appointment letter or employment contract', 'Latest salary slip', 'Employee ID and joining date details'] },
      { category: 'Employment Terms Reference', list: ['Notice period clause from appointment letter', 'Service bond agreement (if any)', 'Leave balance statement (for earned leave encashment)'] },
      { category: 'Special Circumstances', list: ['Medical certificate (for resignation due to health reasons)', 'New offer letter (for reference if notice waiver is being requested)', 'Any existing disputes or grievances documentation'] },
    ],
    compliance: [
      { title: 'Notice Period Must Be Honored', desc: 'Under the employment contract and applicable Standing Orders, the employee must serve the contractually specified notice period or pay notice pay in lieu. Abandoning employment without serving notice can result in withholding of relieving letter, experience certificate, and final settlement.' },
      { title: 'Service Bond Obligations', desc: 'If an employee has signed a service bond (training bond or retention bond), leaving before the bond period may require paying the bond amount. Review bond terms carefully — courts have in some cases held excessive bond amounts as unenforceable under the Indian Contract Act.' },
      { title: 'PF Withdrawal / Transfer Timeline', desc: 'After resignation, the PF account must be either transferred to the new employer\'s PF trust/EPFO account within 30 days of joining, or withdrawn using Form 19 + 10C (after 2 months of unemployment). Delay in PF transfer initiation by the employer is actionable.' },
      { title: 'Gratuity Must Be Paid Within 30 Days', desc: 'Under the Payment of Gratuity Act 1972, the employer must pay gratuity within 30 days of the last working day for eligible employees (5+ years service). Delayed payment attracts interest at the prescribed rate. File Form I to claim gratuity if not proactively paid.' },
    ],
    faqs: [
      { q: 'Can I resign without serving the full notice period?', a: 'Yes, but you may need to pay notice pay in lieu of the unserved notice period (typically calculated as salary for the remaining notice days). Some employers accept mutual separation with an early release. The enforceability of notice pay recovery depends on your employment contract and the state\'s Shops and Establishments Act.' },
      { q: 'What happens if my employer refuses to accept my resignation?', a: 'An employer cannot legally prevent you from resigning. Resignation becomes effective when it is submitted to the appropriate authority in accordance with your employment contract. Even if the employer doesn\'t formally accept it, the notice period clock starts from the date of submission with evidence of delivery.' },
      { q: 'Am I entitled to gratuity if I resign before 5 years?', a: 'Generally, gratuity requires 5 years of continuous service under the Payment of Gratuity Act. However, if termination (other than for misconduct) occurs, even 4 years and 240 days is considered as 5 years by some courts. Resignation before 5 years forfeits gratuity entitlement.' },
      { q: 'Can the employer withhold my experience letter if I resign?', a: 'No. A relieving letter and experience certificate are an employee\'s right upon completion of the notice period and proper handover. Withholding these documents without legal justification is a form of harassment and can be challenged legally. In severe cases, courts have ordered employers to issue these documents.' },
      { q: 'Should I mention the reason for resignation in the letter?', a: 'Mentioning a reason is professional but not legally required. Keep it neutral — "pursuing a new opportunity" or "personal reasons" is standard. Avoid writing anything negative about the employer, colleagues, or management in the resignation letter as it could be used against you if there\'s a dispute about the full and final settlement or background verification.' },
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
