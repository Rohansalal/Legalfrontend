'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Users, ShieldCheck, Heart, Calculator, UserCheck, FileSearch, CheckCircle2, FileCheck, Globe } from 'lucide-react';

export default function ESIPFRegistrationPage() {
  const data = {
    title: 'ESI & PF Registration',
    description: 'Mandatory ESIC and EPF registration for all establishments with 10+ employees. Provide your workforce with social security coverage and retirement benefits.',
    heroBadges: ['10+ Employee Threshold', 'ESIC & EPFO Regulated', '7–10 Days'],
    introTitle: 'What are ESI and PF Registrations?',
    introContent: (
      <p>ESI (Employees' State Insurance) is a social security scheme under the ESI Act, 1948 managed by the ESIC. It provides medical care, disability benefits, maternity benefits, and dependent benefits to employees earning ₹21,000/month or less. EPF (Employees' Provident Fund) is a retirement savings scheme under the EPF & MP Act, 1952, managed by EPFO. Both are mandatory for all establishments employing 10+ workers (ESI) or 20+ workers (EPF), though many states and certain industries have lower thresholds.</p>
    ),
    detailsTitle: 'Why ESI & PF Registration is Important',
    details: [
      { title: 'Legal Compliance', desc: 'Avoid prosecution and penalties — non-registration attracts fines up to ₹10,000 per default day.', icon: ShieldCheck },
      { title: 'Employee Welfare', desc: 'Provide comprehensive medical coverage (ESI) and retirement fund (PF) to attract and retain talent.', icon: Heart },
      { title: 'Employer Credibility', desc: 'Employees prefer registered organizations — helps in recruitment and reduces attrition.', icon: Users },
      { title: 'Tax Deduction', desc: "Employer's ESI and PF contributions are deductible business expenses under Income Tax.", icon: Calculator },
    ],
    requirements: [
      'ESIC: Establishment with 10+ employees earning ≤ ₹21,000/month', 'EPF: Establishment with 20+ employees (10+ for certain industries)',
      'PAN Card of the establishment', 'Aadhaar Card of authorized signatory',
      'List of employees with salary details', 'Bank account details of the establishment',
      'Digital Signature Certificate (DSC)', 'Address proof of business premises',
    ],
    processTitle: 'How to Register for ESI and PF',
    processIntro: 'ESI registration is done on the ESIC portal; PF registration on the EPFO Unified Shram Suvidha Portal. Both are fully online.',
    processSteps: [
      { title: 'Register on Shram Suvidha Portal', desc: 'Both ESI and PF registrations are done on the Shram Suvidha Portal (shramsuvidha.gov.in) — register employer first.', icon: UserCheck },
      { title: 'Fill Employer Registration Form', desc: 'Provide business details, PAN, employee count, nature of work, and bank details.', icon: FileSearch },
      { title: 'Upload Supporting Documents', desc: 'Upload PAN card, registration certificate, list of employees, and digital signature.', icon: Globe },
      { title: 'Submit Application', desc: 'Submit the registration application online. The system auto-generates a registration number.', icon: CheckCircle2 },
      { title: 'ESI / PF Code Issued', desc: 'ESIC issues a 17-digit Code Number; EPFO issues a 22-digit Establishment Code. Both are issued within 3–7 days.', icon: FileCheck },
    ],
    processOutro: 'ESI and PF registrations are typically processed in 7–10 working days. Monthly contributions must begin immediately after registration.',
    documents: [
      { category: 'Establishment Documents', list: ['PAN Card', 'Certificate of Incorporation / GST Certificate', 'Address proof of business'] },
      { category: 'Authorized Signatory', list: ['Aadhaar Card', 'PAN Card', 'DSC'] },
      { category: 'Employee Details', list: ['List of employees with salary', 'Employee Aadhaar Cards', 'Bank account details of employees'] },
    ],
    compliance: [
      { title: 'Monthly ESI Contribution', desc: 'Deposit ESI by 15th of every month. Employee: 0.75% of wages; Employer: 3.25% of wages.' },
      { title: 'Monthly PF Contribution', desc: 'Deposit PF by 15th of every month. Employee: 12% of basic+DA; Employer: 12% (8.33% to EPS, 3.67% to EPF).' },
      { title: 'Quarterly / Annual Returns', desc: 'File ECR (Electronic Challan cum Return) monthly and annual PF returns.' },
      { title: 'Employee UAN', desc: 'Activate Universal Account Number (UAN) for each employee to enable PF portability.' },
    ],
    faqs: [
      { q: 'What is the employee ESI contribution rate?', a: 'Employee contributes 0.75% of wages; Employer contributes 3.25% of wages. Employees earning ≤ ₹137/day are exempt from employee contribution but employer still contributes.' },
      { q: 'What is the PF contribution rate?', a: 'Both employee and employer contribute 12% of basic salary + dearness allowance. Of the employer\'s 12%, 8.33% goes to EPS (pension scheme) and 3.67% to EPF.' },
      { q: 'Is ESI/PF applicable to contract workers?', a: 'Yes. If the principal employer engages contract workers through a contractor, the principal employer is responsible for ESI/PF compliance for all contract workers.' },
      { q: 'Can employees opt out of PF?', a: 'Employees earning above ₹15,000/month at the time of joining can opt out of EPF. However, once enrolled, they cannot opt out.' },
      { q: 'What is the threshold for PF registration?', a: 'PF is mandatory for establishments with 20+ employees. Once registered, the obligation continues even if employee count falls below 20.' },
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
