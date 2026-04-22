'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale } from 'lucide-react';

export default function RentLeaseAgreementPage() {
  const data = {
    title: 'Rent / Lease Agreement Drafting',
    description: 'Get a legally sound rent or lease agreement drafted by legal experts. Covers Leave & License agreements, lease deeds, and commercial tenancy — compliant with state-specific stamp duty and Registration Act 1908.',
    heroBadges: ['State Stamp Duty Compliant', 'Registration Act 1908', 'Leave & License / Lease Covered'],
    introTitle: 'What is a Rent / Lease Agreement?',
    introContent: (
      <p>A rent or lease agreement is a legally binding written contract between a landlord (lessor) and a tenant (lessee) that governs the terms of occupancy of a property. In India, rental agreements are primarily governed by the Registration Act 1908 and state-specific Rent Control Acts (such as the Delhi Rent Control Act, Maharashtra Rent Control Act, and Tamil Nadu Buildings (Lease and Rent Control) Act). A key legal rule in India is that any lease or rent agreement for a period exceeding 11 months must be compulsorily registered at the Sub-Registrar's office under Section 17 of the Registration Act 1908 — unregistered agreements for more than 11 months are not admissible as evidence in court. This is why most residential rent agreements in India are made for an 11-month term with a renewal clause, avoiding mandatory registration while remaining legally valid. However, Leave and License agreements (most common in Maharashtra) are distinct from lease agreements — a licensee has no right of exclusive possession and the licensor can terminate with proper notice, making eviction easier. Stamp duty on rent agreements varies significantly by state: Maharashtra charges 0.25% of the total rent for the term (plus deposit), while Delhi has a flat &#8377;50–500 stamp duty. A well-drafted agreement must clearly specify rent amount, security deposit, notice period, maintenance responsibilities, lock-in period, permitted use, and dispute resolution mechanism to protect both parties.</p>
    ),
    detailsTitle: 'Why a Properly Drafted Agreement Matters',
    details: [
      { title: 'Legal Enforceability', desc: 'A properly stamped and registered rent agreement is admissible as evidence in court. It protects landlords from unlawful occupation and tenants from arbitrary eviction.', icon: ShieldCheck },
      { title: 'Clarity on Terms & Obligations', desc: 'Prevents future disputes by clearly defining rent escalation (typically 5–10% p.a.), maintenance responsibility, pet/guest policies, subletting restrictions, and property condition at handover.', icon: FileText },
      { title: 'Mandatory for Address Proof', desc: 'A registered rent agreement is accepted as valid address proof for Aadhaar update, bank account opening, GST registration, and passport applications.', icon: Award },
      { title: 'Protects Security Deposit', desc: 'Clearly documenting security deposit amount, refund timeline, and deduction conditions protects tenants from wrongful withholding by landlords.', icon: Zap },
    ],
    requirements: [
      'Full names and addresses of landlord and tenant(s)',
      'Complete property address and description',
      'Agreed monthly rent, security deposit, and payment due date',
      'Agreement duration (commencement and end date)',
      'Notice period for termination (typically 1–3 months)',
      'PAN card of both landlord and tenant (mandatory for rent above &#8377;50,000/month)',
    ],
    processTitle: 'How to Draft & Register a Rent Agreement',
    processIntro: 'Our legal team drafts a comprehensive, state-compliant rent agreement and manages stamp duty payment and registration if required.',
    processSteps: [
      { title: 'Consultation & Requirement Gathering', desc: 'We understand the property details, tenancy terms, special conditions, and state of the property to draft a tailored agreement that protects both parties.', icon: UserCheck },
      { title: 'Agreement Drafting', desc: 'Our legal team drafts a comprehensive rent agreement covering all key clauses: rent, deposit, notice period, lock-in, maintenance, permitted alterations, and dispute resolution.', icon: FileSearch },
      { title: 'Stamp Duty Payment', desc: 'We calculate and arrange payment of the correct stamp duty as per the applicable state Stamp Act — via e-stamp certificate, physical stamp paper, or franking as required.', icon: CheckCircle2 },
      { title: 'Execution & Registration (if required)', desc: 'Both parties sign the agreement in the presence of two witnesses. If the term exceeds 11 months, we assist with Sub-Registrar appointment and registration.', icon: FileCheck },
    ],
    processOutro: 'A standard 11-month rent agreement can be prepared and executed within 1–2 days. Registered lease deeds take 3–5 working days including Sub-Registrar appointment.',
    documents: [
      { category: 'Landlord Documents', list: ['PAN Card and Aadhaar Card', 'Property ownership documents (sale deed / property tax receipt)', 'Passport-size photograph'] },
      { category: 'Tenant Documents', list: ['PAN Card and Aadhaar Card', 'Passport-size photograph', 'Address proof (if different from rented property)'] },
      { category: 'Property & Agreement Details', list: ['Complete property address with survey/flat number', 'Agreed rent, deposit, and tenure details', 'Utility meter numbers (electricity, water, gas)'] },
    ],
    compliance: [
      { title: 'Registration Mandatory for 12+ Months', desc: 'Under Section 17 of the Registration Act 1908, any lease exceeding 11 months must be registered at the Sub-Registrar\'s office. Unregistered leases for longer periods cannot be used as evidence in court.' },
      { title: 'Stamp Duty Must Be Paid Before Execution', desc: 'Stamp duty is payable before or at the time of signing the agreement. An under-stamped agreement can be impounded and a penalty of up to 10x the deficit duty may be levied under the Stamp Act.' },
      { title: 'TDS on Rent Exceeding ₹50,000/Month', desc: 'Under Section 194-IB of the Income Tax Act, individuals and HUFs paying rent exceeding &#8377;50,000 per month must deduct TDS @ 5% and deposit with the government. Failure attracts penalties.' },
      { title: 'Periodic Renewal & Rent Revision', desc: 'If continuing beyond the agreement term, formally renew with a new agreement reflecting revised rent. Holdover tenancy without a fresh agreement can lead to legal complications under state rent control laws.' },
    ],
    faqs: [
      { q: 'Is an 11-month rent agreement legally valid without registration?', a: 'Yes. Under the Registration Act 1908, agreements for 11 months or less are not required to be registered. An unregistered 11-month agreement on correct stamp paper is legally valid and enforceable, and is accepted as address proof by government authorities.' },
      { q: 'What is the difference between a lease and a Leave & License agreement?', a: 'A lease transfers a right of exclusive possession to the tenant for a fixed period, giving tenant stronger rights under Rent Control Acts. A Leave & License only grants a personal privilege to occupy without exclusive possession, making the licensor\'s right to eviction much stronger. Leave & License is more common in Maharashtra.' },
      { q: 'What happens if rent agreement stamp duty is not paid?', a: 'An under-stamped rent agreement cannot be produced as evidence in court and is liable to be impounded. The authority can demand the unpaid stamp duty plus a penalty of up to 10 times the deficit under the Indian Stamp Act.' },
      { q: 'Is a rent agreement mandatory for Aadhaar address update?', a: 'A registered rent agreement is accepted as valid address proof for Aadhaar. Some UIDAI centers also accept notarized or 11-month rent agreements. Check the latest UIDAI guidelines for current acceptable documents.' },
      { q: 'Can a landlord evict a tenant before the agreement expires?', a: 'A landlord cannot evict a tenant before the agreement term without a valid legal reason and proper notice as specified in the agreement and applicable state Rent Control Act. Forcible eviction without due process is illegal and actionable.' },
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
