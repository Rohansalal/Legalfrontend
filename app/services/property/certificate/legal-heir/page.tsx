'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function LegalHeirPage() {
  const data = {
    title: 'Legal Heir Certificate',
    description:
      'Establish your legal right to inherit property, government dues, pension, and bank accounts of a deceased family member with an official Legal Heir Certificate from the Tehsildar or Municipal Corporation.',
    heroBadges: ['Revenue Authority Issued', 'Property & Bank Succession', 'Distinct from Succession Certificate'],
    introTitle: 'What is a Legal Heir Certificate?',
    introContent: (
      <p>
        A Legal Heir Certificate is an official document issued by the revenue authority — Tehsildar, Revenue Inspector, Sub-Divisional Magistrate, or Municipal Corporation — that formally identifies and establishes the legal heirs of a deceased person for the purpose of claiming the deceased&#39;s movable assets, government dues, service benefits, insurance, pension, gratuity, bank accounts, provident fund, and immovable property. It is an administrative certificate (not a court order) and is used primarily when no Will exists and the deceased&#39;s estate is not complex. The Legal Heir Certificate is the most common succession document for government employees, pensioners, and small property holders in India. The governing law for intestate succession (dying without a Will) in India varies by religion and personal law: Hindus (including Sikhs, Jains, and Buddhists) are governed by the Hindu Succession Act, 1956; Muslims by Muslim Personal Law (Shariat) Application Act, 1937; Christians and Parsis by the Indian Succession Act, 1925. The Legal Heir Certificate is issued in accordance with the applicable personal law — meaning the issuing authority considers the deceased&#39;s religion and identifies heirs accordingly (for example, a Hindu male dying intestate leaves Class I heirs as per Schedule to the Hindu Succession Act: son, daughter, widow, mother, son/daughter of predeceased son etc.). Key uses of the Legal Heir Certificate include: (a) transfer of property — mutation of house/flat/land in the heir&#39;s name; (b) government employee service benefits — family pension, gratuity, LTA, death-cum-retirement gratuity; (c) bank account closure and fund transfer (for accounts without nomination); (d) vehicle transfer in the heir&#39;s name at the RTO; (e) Provident Fund (EPF) and PPF claim; (f) Post Office savings scheme succession; and (g) Demat account transmission. It is important to understand that a Legal Heir Certificate is fundamentally different from a Succession Certificate: the Succession Certificate is a court-issued document (obtained from the Civil Court) that authorises the legal heirs to receive debts and securities (bonds, FDs, etc.) and protects the payer (bank etc.) from future claims — it is used for complex estates, large sums, and when authorities insist on judicial certification.
      </p>
    ),
    detailsTitle: 'Why You Need a Legal Heir Certificate',
    details: [
      {
        title: 'Property Mutation & Transfer',
        desc: 'The Legal Heir Certificate is the foundational document for mutating property in the heirs\' names at the municipal corporation or tehsil office after the owner\'s death. Without it, property tax and revenue records cannot be updated, blocking future sale, loan, or redevelopment.',
        icon: ShieldCheck,
      },
      {
        title: 'Government & PSU Service Benefits',
        desc: 'Family pension, death gratuity, leave encashment, and provident fund (EPFO/GPF) are released by government and PSU employers to the identified legal heirs on the basis of the Legal Heir Certificate — it is the primary document establishing entitlement.',
        icon: Zap,
      },
      {
        title: 'Bank Account Succession',
        desc: 'For bank accounts without nomination or with a minor/deceased nominee, banks require a Legal Heir Certificate (and sometimes a Succession Certificate for larger amounts) before releasing funds to the deceased account holder\'s family — avoiding the deceased\'s account becoming permanently dormant.',
        icon: Globe,
      },
      {
        title: 'Vehicle & Asset Transfer',
        desc: 'The Regional Transport Office (RTO) requires a Legal Heir Certificate for transferring a vehicle from a deceased owner\'s name to the legal heir. Similarly, insurance companies, post offices, and mutual fund companies use the Legal Heir Certificate for succession in the absence of nomination.',
        icon: Award,
      },
    ],
    requirements: [
      'Original death certificate of the deceased from the Municipal Corporation / Gram Panchayat',
      'Proof of relationship with the deceased: marriage certificate, birth certificates',
      'Aadhaar Card, PAN Card, and Voter ID of all identified legal heirs',
      'Address proof: latest utility bill or Aadhaar of the deceased and applicant',
      'Application form in the prescribed state format',
      'Affidavit identifying all legal heirs with their relationship to the deceased',
    ],
    processTitle: 'How to Obtain a Legal Heir Certificate in India',
    processIntro:
      'The Legal Heir Certificate application is submitted to the Tehsildar (sub-district level) or Municipal Corporation and involves verification of death and family relationships. Our team manages the process in all states.',
    processSteps: [
      {
        title: 'Document Collection & Affidavit',
        desc: 'We collect all required documents, verify the deceased\'s personal law (Hindu/Muslim/Christian) to correctly identify legal heirs, and draft a detailed legal heir affidavit identifying all heirs by name, age, address, and relationship to the deceased, executed before a Notary.',
        icon: UserCheck,
      },
      {
        title: 'Application Filing at Tehsil/Municipality',
        desc: 'We file the Legal Heir Certificate application at the Tehsildar&#39;s office (for rural/district matters) or the Municipal Corporation&#39;s Citizen Services Centre (for urban properties) along with the prescribed fee, death certificate, relationship proofs, and heir affidavit.',
        icon: FileSearch,
      },
      {
        title: 'Verification Process',
        desc: 'The revenue officer or municipal official conducts verification — typically a village headman certificate (patwari report in rural areas) or ward officer confirmation (urban areas) — to confirm the deceased&#39;s details and the heirs&#39; claims. This may take 7–21 days.',
        icon: CheckCircle2,
      },
      {
        title: 'Certificate Issuance & Collection',
        desc: 'Upon successful verification, the Legal Heir Certificate is issued with the official seal of the Tehsildar / Municipal Corporation listing all legal heirs. We collect multiple certified copies and assist in distributing them to relevant authorities for succession claims.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'Legal Heir Certificates are typically issued within 15–30 days at the Tehsil level and 20–45 days at Municipal Corporation level. Some states offer expedited processing through online portals (UP, Karnataka, Tamil Nadu) within 7–15 days.',
    documents: [
      {
        category: 'Deceased\'s Identity & Death Proof',
        list: [
          'Original death certificate from Municipal Corporation or Gram Panchayat',
          'Aadhaar Card / PAN Card / Voter ID of the deceased',
          'Service records or EPF account details (for government employee succession)',
        ],
      },
      {
        category: 'Legal Heirs\' Identity Documents',
        list: [
          'Aadhaar Card and PAN Card of each legal heir',
          'Marriage certificate (for spouse), birth certificates (for children), and relationship affidavits',
          'Passport-size photographs of all legal heirs',
        ],
      },
      {
        category: 'Application & Affidavit',
        list: [
          'State-specific prescribed application form for Legal Heir Certificate',
          'Affidavit of legal heirs on stamp paper identifying all heirs by name, age, and relationship',
          'Prescribed fee receipt from the issuing authority',
        ],
      },
    ],
    compliance: [
      {
        title: 'File Deceased\'s Income Tax Return',
        desc: 'After the death of a taxpayer, the legal heir must file the deceased\'s income tax return for the year of death as a &#x201c;legal representative&#x201d; under Section 159 of the Income Tax Act, 1961. The legal heir should also apply for surrender of the deceased\'s PAN after all pending returns are filed.',
      },
      {
        title: 'Succession by Religion-Specific Personal Law',
        desc: 'The heirs identified in the Legal Heir Certificate are determined by the deceased&#39;s religion and applicable personal law. Hindu Succession Act 1956, Muslim Personal Law, or Indian Succession Act 1925 determines the share of each heir. Authorities issue the certificate accordingly — heirs should be aware of their fractional shares in inherited property.',
      },
      {
        title: 'Property Mutation Within Prescribed Time',
        desc: 'After obtaining the Legal Heir Certificate, heirs must apply for property mutation (Dakhil Kharij) at the municipal corporation or tehsil within 3–6 months (varies by state) to update property tax and revenue records in the heirs\' names. Delay causes accumulation of dues in the deceased\'s name and complications in future transactions.',
      },
      {
        title: 'Joint Ownership Documentation for Multiple Heirs',
        desc: 'When multiple legal heirs inherit a single property, they become joint owners. All joint owners must be mutated on the property records. Any future sale, mortgage, or partition of the jointly inherited property requires consent and signature of all co-owners — a family settlement/partition deed is advisable to avoid future disputes.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a Legal Heir Certificate and a Succession Certificate?',
        a: 'A Legal Heir Certificate is an administrative document issued by the revenue authority (Tehsildar/Municipality) identifying the deceased\'s legal heirs for claiming movable assets, government dues, and pension. A Succession Certificate is a judicial document issued by a Civil Court under the Indian Succession Act 1925 (Sections 370–390) authorising heirs to receive debts and securities (bank FDs, bonds, shares). Banks insist on a Succession Certificate for larger amounts or when there is any ambiguity about the heirs.',
      },
      {
        q: 'Can a Legal Heir Certificate be used for immovable property?',
        a: 'Yes, a Legal Heir Certificate is used for property mutation (updating revenue records). However, for actual transfer of immovable property title from the deceased to the heirs — particularly for resale to a third party — a registered Release Deed, Gift Deed, or Family Settlement Deed among the heirs is needed, or a court declaration of title in case of dispute. The Legal Heir Certificate alone does not execute a registered transfer.',
      },
      {
        q: 'How long is a Legal Heir Certificate valid?',
        a: 'A Legal Heir Certificate has no expiry date as an official document. However, banks, government departments, and institutions often ask for a certificate issued within the last 6–12 months to ensure it reflects the current status of heirs (since heirs can themselves pass away). For critical transactions, a fresh certificate may be preferred.',
      },
      {
        q: 'What if an heir is a minor?',
        a: 'If one of the legal heirs is a minor (below 18 years), the Legal Heir Certificate lists the minor&#39;s name with age. For claiming assets on behalf of a minor, a natural guardian (parent) acts as the legal guardian. For substantial inherited assets, a court-appointed Guardian under the Guardians and Wards Act 1890 may be required to manage the minor\'s share until the minor attains majority.',
      },
      {
        q: 'Is the Legal Heir Certificate the same across all states in India?',
        a: 'The purpose and effect of the Legal Heir Certificate is uniform across India, but the issuing authority, application format, fee, and processing time vary by state. In Andhra Pradesh and Telangana, it is issued by the Revenue Divisional Officer. In Tamil Nadu, it is issued by the Tehsildar. In Karnataka, it is called the &#x201c;Ahavars Certificate&#x201d; and is issued by the Tahsildar. Our team is familiar with state-specific procedures across all Indian states.',
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
