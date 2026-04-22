'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Building2 } from 'lucide-react';

export default function RealEstateAgreementPage() {
  const data = {
    title: 'Real Estate Agreement Drafting',
    description: 'Expert drafting of sale deeds, agreement to sell, construction agreements, development agreements, and RERA-compliant builder-buyer agreements. Covers stamp duty, registration, and property transaction compliance across India.',
    heroBadges: ['RERA 2016 Compliant', 'Sale Deed & Agreement to Sell', 'Stamp Duty 4–7% Guidance'],
    introTitle: 'What are Real Estate Agreements?',
    introContent: (
      <p>Real estate agreements are legally binding documents that govern the transfer, sale, development, and management of immovable property in India. The primary categories include Agreement to Sell (also called Sale Agreement — a precursor to the final sale deed, containing agreed terms, token payment acknowledgement, and timeline for completion), Sale Deed (the final conveyance document transferring ownership of property from seller to buyer — must be compulsorily registered under Section 17 of the Registration Act 1908 with payment of applicable stamp duty of 4–7% of the property value depending on the state), Construction Agreement (between landowner and builder for construction of a building or project), Development Agreement (for joint development between landowner and developer with defined profit-sharing or built-up area allocation), and Property Management Agreement (authorizing a manager to manage property on behalf of the owner). Since the enactment of the Real Estate (Regulation and Development) Act 2016 (RERA), builder-buyer agreements for new residential and commercial projects must be registered with the state RERA authority, builders cannot collect more than 10% of the sale consideration before executing a registered agreement, and allotment letters and agreements must use the state RERA authority\'s prescribed format. Stamp duty on property varies significantly across states: Delhi charges 6% (male) / 4% (female), Maharashtra 6–7%, Karnataka 5%, UP 7%, and Tamil Nadu 7%. Registration charges are typically 1% of the property value. Proper title search before any property transaction is essential to uncover encumbrances, mortgages, and prior ownership disputes.</p>
    ),
    detailsTitle: 'Types of Real Estate Agreements We Draft',
    details: [
      { title: 'Sale Deed & Agreement to Sell', desc: 'Legally compliant sale deeds for residential and commercial properties with complete title verification, encumbrance check, and stamp duty / registration fee calculation before execution.', icon: FileText },
      { title: 'RERA-Compliant Builder-Buyer Agreements', desc: 'Builder-buyer agreements conforming to the Real Estate (Regulation and Development) Act 2016, protecting buyers\' rights, ensuring statutory disclosures, penalty for delay, and allotment schedule compliance.', icon: Building2 },
      { title: 'Development & Construction Agreements', desc: 'Joint development agreements (JDA) with defined built-up area ratios, developer obligations, construction timelines, penalty clauses, and handover conditions — protecting landowners from builder defaults.', icon: ShieldCheck },
      { title: 'Property Management Agreements', desc: 'Comprehensive property management agreements defining scope (rent collection, maintenance, tenant sourcing), management fees (typically 8–10% of rent), liability of manager, accounting obligations, and termination.', icon: Award },
    ],
    requirements: [
      'Complete property description with survey number / flat number / CTS number',
      'Title documents and chain of title (prior sale deeds / property card)',
      'Encumbrance certificate (minimum 13 years) from Sub-Registrar',
      'Sale consideration amount and payment schedule',
      'Buyer and seller PAN Cards (mandatory for transactions above &#8377;50 lakh)',
      'Latest property tax receipts and utility bill (for electricity / water)',
    ],
    processTitle: 'How We Draft Your Real Estate Agreement',
    processIntro: 'Our real estate legal team combines property law expertise with practical knowledge of local registration procedures across all major Indian states.',
    processSteps: [
      { title: 'Title Verification & Document Review', desc: 'We conduct a thorough review of all property documents including title chain, encumbrance certificate, property tax records, and RERA registration status to identify any issues before drafting.', icon: UserCheck },
      { title: 'Agreement Drafting', desc: 'We draft the agreement with all required provisions: property description, consideration, payment schedule, possession conditions, representations and warranties, default remedies, and dispute resolution.', icon: FileSearch },
      { title: 'Stamp Duty Calculation & Payment', desc: 'We calculate the correct stamp duty based on the property\'s circle rate or market value (whichever is higher) as per the applicable state stamp act and arrange e-stamp or franking.', icon: CheckCircle2 },
      { title: 'Sub-Registrar Appointment & Registration', desc: 'We assist with booking the Sub-Registrar appointment, preparing all originals and photocopies, ensuring both parties and two witnesses are present, and completing the registration process.', icon: FileCheck },
    ],
    processOutro: 'Agreement to sell can be prepared within 2–3 days. Registered sale deeds typically take 5–10 working days including Sub-Registrar appointment and stamp duty payment.',
    documents: [
      { category: 'Seller\'s Documents', list: ['Original title documents (sale deed / gift deed / will)', 'Encumbrance certificate (13–30 years)', 'Property tax paid receipts and NOC from society'] },
      { category: 'Buyer\'s Documents', list: ['PAN Card and Aadhaar Card', 'Passport-size photographs', 'Bank statement or loan sanction letter (for financed purchases)'] },
      { category: 'Property Documents', list: ['Approved building plan / occupancy certificate', 'RERA registration certificate (for new projects)', 'Latest utility bill and electricity / water meter details'] },
    ],
    compliance: [
      { title: 'Registration is Mandatory for Sale Deeds', desc: 'Under Section 17 of the Registration Act 1908, sale deeds for immovable property must be compulsorily registered. An unregistered sale deed does not transfer title and is inadmissible as evidence in disputes.' },
      { title: 'Stamp Duty Must Reflect Market Value', desc: 'Stamp duty must be paid on the higher of the actual sale consideration or the government circle rate (guidance value). Under-valuation of the property for stamp duty purposes attracts penalties under the Stamp Act.' },
      { title: 'RERA Registration for New Projects', desc: 'Under RERA 2016, any residential project with 8+ units or 500+ sq.m. plot area must be registered with the state RERA authority. Builders cannot accept more than 10% advance without a registered agreement.' },
      { title: 'TDS on Property Purchase Above ₹50 Lakh', desc: 'Under Section 194-IA of the Income Tax Act, buyers must deduct TDS @ 1% on property purchases above &#8377;50 lakh and deposit it with the government using Form 26QB. Non-compliance attracts interest and penalty.' },
    ],
    faqs: [
      { q: 'What is the difference between an Agreement to Sell and a Sale Deed?', a: 'An Agreement to Sell is a preliminary contract that commits both parties to the transaction but does not transfer ownership. It is typically executed with token money payment. A Sale Deed is the final document that actually transfers ownership of the property and must be registered at the Sub-Registrar\'s office.' },
      { q: 'Is RERA registration mandatory for all real estate projects?', a: 'RERA registration is mandatory for residential projects with 8 or more units or a plot area exceeding 500 sq.m., and for all commercial real estate projects above the same threshold. Projects completed before RERA\'s commencement (May 2017) and those for which completion certificate has been received are exempt.' },
      { q: 'What stamp duty is applicable on property transactions in India?', a: 'Stamp duty varies by state. Common rates: Delhi — 6% (men), 4% (women); Maharashtra — 6–7%; Karnataka — 5.6%; UP — 7%; Tamil Nadu — 7%; Rajasthan — 6%. Registration charges are typically an additional 1% of the property value. Women buyers get stamp duty concessions in most states.' },
      { q: 'Can a sale deed be cancelled after registration?', a: 'A registered sale deed can be cancelled only by a mutual cancellation deed (also to be registered) or by a court order. Unilateral cancellation of a registered sale deed is not valid. Courts grant cancellation in cases of fraud, misrepresentation, or failure of consideration.' },
      { q: 'What is a Joint Development Agreement (JDA) and its tax implications?', a: 'A JDA is an agreement between a landowner and a developer where the landowner contributes land and the developer constructs, and they share the developed property or sale proceeds. For tax purposes, the landowner\'s capital gain is triggered at the time of allotment of developed units (post-Godrej Industries decision), and the developer\'s income is business income. JDAs must be carefully structured to optimize tax.' },
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
