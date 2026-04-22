'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale } from 'lucide-react';

export default function TerminationLetterPage() {
  const data = {
    title: 'Termination Letter Drafting',
    description: 'Get legally sound termination letters for employees drafted by HR law experts. Compliant with the Industrial Disputes Act, Standing Orders, and show-cause process — minimizing labor court risk.',
    heroBadges: ['Industrial Disputes Act Compliant', 'Show Cause Process Covered', 'Labor Court Risk Minimized'],
    introTitle: 'What is a Termination Letter?',
    introContent: (
      <p>A termination letter is the employer\'s formal written communication to an employee ending the employment relationship. In India, employee termination is one of the most legally sensitive HR actions, governed by multiple overlapping laws including the Industrial Disputes Act 1947, the Industrial Employment (Standing Orders) Act 1946, the Shops and Commercial Establishments Acts of respective states, the Payment of Gratuity Act 1972, the Employees\' Provident Funds Act 1952, and in some cases, the Payment of Wages Act 1936. Under the Industrial Disputes Act, "workmen" (non-managerial employees) in establishments with 50–99 employees require 1-month notice (or pay in lieu) for retrenchment; establishments with 100+ employees additionally require government permission before retrenchment — failure to obtain this permission makes the retrenchment illegal. For dismissal on grounds of misconduct, a mandatory domestic inquiry (show cause notice, inquiry hearing, and inquiry report) must precede the termination — skipping this process renders the termination procedurally defective even if the misconduct is genuine, exposing the employer to labor court claims of wrongful termination with reinstatement orders and back wages. A legally valid termination letter must clearly state: the reason for termination (misconduct, redundancy, performance, probation failure), the effective date, the notice period being provided or notice pay being offered, details of the final settlement (salary, leave encashment, gratuity if applicable), instructions for return of company property, and whether the employee is being placed on garden leave during the notice period.</p>
    ),
    detailsTitle: 'Key Aspects of Lawful Termination',
    details: [
      { title: 'Natural Justice & Show Cause Process', desc: 'For misconduct-based termination, the employer must issue a show cause notice, conduct a domestic inquiry with opportunity to be heard, and receive an inquiry report before issuing the termination letter — any shortcut is legally risky.', icon: Scale },
      { title: 'Industrial Disputes Act Compliance', desc: 'Workmen\'s termination must comply with notice/pay-in-lieu requirements under Section 25F. Establishments with 100+ employees need government permission under Section 25O before retrenchment.', icon: ShieldCheck },
      { title: 'Final Settlement Documentation', desc: 'The termination letter must initiate the full and final settlement process: pending salary, leave encashment, gratuity (if 5+ years), PF withdrawal / transfer, and issuance of relieving and experience certificates.', icon: FileText },
      { title: 'Probation Period Termination', desc: 'Termination during probation carries lower legal risk but still requires the notice period specified in the appointment letter and an evidence trail showing performance inadequacy to defend against wrongful termination claims.', icon: Zap },
    ],
    requirements: [
      'Employee\'s full name, designation, employee ID, and department',
      'Reason for termination (misconduct / redundancy / performance / probation)',
      'Date of termination and notice period or notice pay details',
      'Show cause and inquiry process records (for misconduct termination)',
      'Final settlement calculation details',
      'List of company assets to be returned',
    ],
    processTitle: 'How We Draft a Legally Compliant Termination Letter',
    processIntro: 'Our HR law team ensures that every termination letter is preceded by the correct legal process and worded to minimize the risk of successful legal challenge by the terminated employee.',
    processSteps: [
      { title: 'Case Assessment & Legal Review', desc: 'We review the employee\'s category (workman vs. manager), the grounds for termination, the prior process followed (show cause, inquiry), and applicable laws to determine the correct procedure.', icon: UserCheck },
      { title: 'Process Compliance Check', desc: 'We verify that the required pre-termination process has been completed: show cause notice issued, employee given opportunity to respond, domestic inquiry conducted (for misconduct), and inquiry findings documented.', icon: FileSearch },
      { title: 'Termination Letter Drafting', desc: 'We draft the termination letter citing the correct legal basis, summarizing the inquiry findings (if misconduct), stating the effective date, notice/pay-in-lieu details, and final settlement entitlements.', icon: CheckCircle2 },
      { title: 'Final Settlement & Delivery Guidance', desc: 'We prepare the full and final settlement computation, advise on PF/gratuity obligations, and guide on the proper delivery of the termination letter (in person + email + RPAD) to create a documented legal record.', icon: FileCheck },
    ],
    processOutro: 'Termination letter drafting takes 2–5 working days, depending on the complexity of the grounds for termination and the completeness of the prior legal process.',
    documents: [
      { category: 'Employee Records', list: ['Appointment letter and employment contract', 'Show cause notice and employee\'s reply (for misconduct cases)', 'Domestic inquiry report and findings'] },
      { category: 'Performance / Conduct Records', list: ['Performance improvement plan (PIP) documentation', 'Warning letters and HR communication records', 'Attendance and leave records (for abandonment cases)'] },
      { category: 'Settlement Documents', list: ['Leave balance statement', 'Salary account details for final payment', 'List of company assets issued to employee'] },
    ],
    compliance: [
      { title: 'Domestic Inquiry is Non-Negotiable for Misconduct', desc: 'Terminating an employee for misconduct without a proper domestic inquiry (show cause, inquiry, findings) is procedurally defective. Indian labor courts routinely reinstate wrongfully terminated workmen with full back wages when natural justice principles have been violated.' },
      { title: 'Government Permission for Mass Retrenchment', desc: 'Establishments with 100 or more workmen must obtain prior permission from the appropriate government under Section 25O of the Industrial Disputes Act before any retrenchment or closure. Failure to obtain permission makes retrenchment illegal and actionable.' },
      { title: 'Gratuity Must Be Paid Even on Termination', desc: 'Employees with 5+ years of service are entitled to gratuity under the Payment of Gratuity Act 1972 even if terminated (except for termination due to wilful damage to property or violent misconduct, as specified in the Act). Withholding gratuity is an offence.' },
      { title: 'PF Settlement Must Be Initiated Promptly', desc: 'After termination, the employer must update the EPF portal with the exit date to enable the employee to withdraw or transfer PF. Delay in this process attracts complaints to the EPFO and potential penalties under the EPF Act.' },
    ],
    faqs: [
      { q: 'Can a company terminate an employee without a reason in India?', a: 'For "workmen" under the Industrial Disputes Act (non-supervisory, non-managerial employees earning below threshold), termination without valid reason constitutes retrenchment requiring notice/compensation. For managers and those above the workman threshold, at-will termination per contract terms is possible, though courts look at reasonable cause to prevent misuse.' },
      { q: 'What is the difference between termination and retrenchment?', a: 'Termination is ending employment for cause (misconduct, performance). Retrenchment is termination for economic reasons (surplus workforce, business restructuring) — it requires retrenchment compensation of 15 days\' average pay for each completed year of service under Section 25F of the Industrial Disputes Act.' },
      { q: 'Can an employer terminate an employee during probation without notice?', a: 'Termination during probation generally requires the notice period stated in the appointment letter (usually 15–30 days). However, courts have in some cases applied labor protections to probationary employees if they have been employed for extended periods. Probationary termination letters should always provide the contractual notice period.' },
      { q: 'What is garden leave and when is it used?', a: 'Garden leave is a period during which an employee under notice is asked not to attend work but continues to receive their full salary and benefits. It is commonly used for senior employees with access to sensitive information to prevent them from working for a competitor during the notice period while honoring the employment contract.' },
      { q: 'Can a terminated employee claim reinstatement in India?', a: 'Workmen (non-managerial employees) who have been illegally terminated can claim reinstatement with full back wages before the Industrial Tribunal or Labor Court under the Industrial Disputes Act. Courts grant reinstatement when procedural requirements (show cause, domestic inquiry) have not been followed or when the termination is found to be mala fide.' },
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
