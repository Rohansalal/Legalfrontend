'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function LeaseDeedPage() {
  const data = {
    title: 'Lease Deed Registration',
    description:
      'Secure your long-term tenancy or commercial rental with a legally registered Lease Deed under the Transfer of Property Act 1882 and Registration Act 1908.',
    heroBadges: ['Mandatory for Leases Over 12 Months', 'GST Compliance on Commercial Leases', 'Transfer of Property Act 1882'],
    introTitle: 'What is a Lease Deed?',
    introContent: (
      <p>
        A Lease Deed is a legal contract under Sections 105 to 117 of the Transfer of Property Act, 1882 that grants the lessee (tenant) the right to use and enjoy immovable property belonging to the lessor (landlord) for a defined period in exchange for a periodic rent. In India, the Registration Act, 1908 mandates that any lease of immovable property for a term exceeding twelve months — or a lease reserving a yearly rent — must be registered at the Sub-Registrar&#39;s office; failure to register renders such a lease void as evidence of the terms agreed. An unregistered lease deed for more than one year cannot be relied upon in any court to establish tenancy rights. A lease deed is fundamentally different from a Leave and Licence Agreement (commonly used for residential properties in Maharashtra): under a Leave and Licence, no interest in the property is transferred to the licensee, making eviction simpler, whereas a lease creates an interest in the property giving the lessee stronger legal protection. Stamp duty on a lease deed is computed as a percentage of the total rent (and security deposit) over the lease term — this varies by state; for example, Maharashtra charges 0.25% of the total rent plus deposit for a lease up to 5 years, while Karnataka charges 0.5% of the rent for the term. Commercial leases above a certain threshold also attract GST: rental income from commercial property is subject to 18% GST if the lessor&#39;s aggregate turnover exceeds &#x20b9;20 lakhs per annum (&#x20b9;10 lakhs for special category states). The tenant/lessee can claim Input Tax Credit (ITC) on GST paid for commercial leases used in the course of business.
      </p>
    ),
    detailsTitle: 'Why Register Your Lease Deed',
    details: [
      {
        title: 'Legal Enforceability',
        desc: 'A registered lease deed is admissible as evidence in court under Section 107 of the Transfer of Property Act. An unregistered lease exceeding 12 months is unenforceable, leaving both lessor and lessee without legal protection.',
        icon: ShieldCheck,
      },
      {
        title: 'GST & TDS Compliance',
        desc: 'Commercial leases attract 18% GST above the &#x20b9;20L threshold. Additionally, TDS at 10% under Section 194-I is applicable if annual rent exceeds &#x20b9;2.4 lakhs to non-individuals and &#x20b9;50,000/month to individuals/HUFs. Registered deed ensures proper documentation.',
        icon: Zap,
      },
      {
        title: 'Protection for Both Parties',
        desc: 'A registered lease deed clearly records rent, security deposit, lock-in period, maintenance obligations, escalation clause, and sub-letting restrictions — eliminating ambiguity and protecting both lessor&#39;s income and lessee&#39;s occupancy rights.',
        icon: Globe,
      },
      {
        title: 'Enables Bank Loans & Business Registration',
        desc: 'Businesses require a registered lease deed as address proof for GST registration, MSME registration, trade licence, and bank account opening. Many PSU banks and NBFCs accept registered lease deeds as collateral security.',
        icon: Award,
      },
    ],
    requirements: [
      'Title documents of the lessor confirming ownership of the property',
      'PAN Card and Aadhaar of both lessor and lessee',
      'Property tax paid receipts and encumbrance certificate',
      'Draft lease deed with agreed terms: rent, deposit, lock-in period, escalation clause',
      'No-Objection Certificate from housing society (if applicable)',
      'GST registration details of lessor for commercial leases above threshold',
    ],
    processTitle: 'How to Register a Lease Deed in India',
    processIntro:
      'Lease deed registration requires careful drafting of all commercial terms, computation of stamp duty on the lease consideration, and registration at the Sub-Registrar office. Our legal team handles the entire process.',
    processSteps: [
      {
        title: 'Draft the Lease Deed',
        desc: 'Our lawyers draft the lease deed incorporating all critical clauses: lease period, monthly rent, security deposit, escalation, lock-in period, maintenance obligations, permitted use, sub-letting restrictions, and termination notice period.',
        icon: UserCheck,
      },
      {
        title: 'Stamp Duty Computation & Payment',
        desc: 'We calculate stamp duty based on the total lease consideration (rent + deposit) over the lease term as per your state&#39;s Stamp Act and arrange payment through e-stamping, non-judicial stamp paper, or franking.',
        icon: FileSearch,
      },
      {
        title: 'GST & TDS Assessment',
        desc: 'We advise on GST applicability on lease rent, assist the lessor in GST registration if required, and guide the lessee on TDS deduction under Section 194-I and quarterly filing of Form 26Q.',
        icon: CheckCircle2,
      },
      {
        title: 'Sub-Registrar Registration',
        desc: 'Both lessor and lessee (and their authorised representatives) appear at the Sub-Registrar office with original identity documents. The deed is executed, witnessed, and officially registered with a unique registration number.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'Lease deed registration typically takes 5–7 working days from document finalisation and stamp duty payment, subject to Sub-Registrar appointment availability.',
    documents: [
      {
        category: 'Identity & Ownership Proof',
        list: [
          'PAN Card and Aadhaar of lessor and lessee',
          'Property ownership proof: registered sale deed / khata / title document',
          'Passport-size photographs of both parties and two witnesses',
        ],
      },
      {
        category: 'Property & NOC Documents',
        list: [
          'Encumbrance Certificate (Form 15/16) confirming no charge on property',
          'Latest property tax paid receipt',
          'Society NOC or building association NOC (for commercial/residential societies)',
        ],
      },
      {
        category: 'Tax & Compliance Documents',
        list: [
          'Stamp duty payment challan / e-stamp certificate',
          'GST registration certificate of lessor (for commercial leases)',
          'TDS deduction details and Form 26Q filing confirmation',
        ],
      },
    ],
    compliance: [
      {
        title: 'GST Filing on Lease Rent',
        desc: 'Lessors registered under GST must issue a Tax Invoice for each month&#39;s rent, file GSTR-1 and GSTR-3B monthly/quarterly, and deposit 18% GST on commercial lease rent. Non-compliance attracts penalty and interest under the CGST Act 2017.',
      },
      {
        title: 'TDS Deduction by Lessee',
        desc: 'If annual rent exceeds &#x20b9;2.4 lakhs (individuals/HUF: &#x20b9;6 lakhs per annum from FY 2024-25), the lessee must deduct TDS at 10% under Section 194-I, deposit it by the 7th of the following month, and file quarterly TDS returns in Form 26Q.',
      },
      {
        title: 'Lease Renewal & Stamp Duty',
        desc: 'On expiry of the registered lease, a fresh lease deed must be executed and registered with stamp duty on the new term. Holding-over or informal renewals create unregistered tenancy which is legally precarious for both parties.',
      },
      {
        title: 'Eviction & Rent Control Compliance',
        desc: 'Registered lease deeds are subject to state-specific Rent Control Acts (e.g., Maharashtra Rent Control Act 1999, Delhi Rent Control Act 1958). Landlords cannot arbitrarily evict tenants during the lease term without court order; proper notice periods must be followed.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a lease deed and a leave and licence agreement?',
        a: 'A lease deed transfers an interest in the property to the lessee, giving them stronger legal rights including protection under Rent Control Acts. A Leave and Licence agreement merely grants permission to occupy without creating any interest — the licensor can revoke it more easily. In Maharashtra, residential agreements are typically Leave and Licence to simplify eviction; commercial arrangements use lease deeds for longer tenure and legal protection.',
      },
      {
        q: 'Is stamp duty applicable on the security deposit under a lease deed?',
        a: 'Yes. In most states, stamp duty on a lease deed is calculated on the aggregate of total rent for the lease term plus the security deposit amount. For example, in Karnataka, if a 3-year lease involves &#x20b9;50,000/month rent and &#x20b9;3 lakh deposit, stamp duty is computed on (&#x20b9;18 lakh + &#x20b9;3 lakh) = &#x20b9;21 lakh.',
      },
      {
        q: 'What is the penalty for not registering a lease deed for more than 12 months?',
        a: 'An unregistered lease exceeding 12 months is void under Section 107 of the Transfer of Property Act and Section 49 of the Registration Act 1908 — it cannot be used as evidence to prove the specific terms of the lease. Courts may still recognise a month-to-month tenancy, but the tenant loses protection of the agreed long-term terms.',
      },
      {
        q: 'Is GST applicable on residential property lease?',
        a: 'As per the GST Council&#39;s clarification and Notification No. 12/2017, lease/rental of residential property for residential use is exempt from GST. However, if a registered person (company/business) takes a residential property on lease for use as employee accommodation, 18% GST is applicable under reverse charge mechanism (RCM) from the lessee.',
      },
      {
        q: 'Can a lease deed be cancelled or terminated before the expiry date?',
        a: 'A lease deed can be terminated before expiry only as per the termination/exit clause in the deed — typically by serving notice (1–3 months). Termination requires a separate registered Deed of Surrender or Cancellation if the original lease was registered. Unilateral termination by the lessor during the lock-in period exposes them to a damages claim by the lessee.',
      },
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
