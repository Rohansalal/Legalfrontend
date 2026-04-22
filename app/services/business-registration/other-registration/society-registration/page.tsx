'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Users, ShieldCheck, Heart, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck, Building2 } from 'lucide-react';

export default function SocietyRegistrationPage() {
  const data = {
    title: 'Society Registration (NGO)',
    description: 'Register a society under the Societies Registration Act, 1860 for educational, charitable, cultural, or social welfare purposes. Democratic member-based governance.',
    heroBadges: ['Societies Registration Act 1860', 'State-Level Registration', '20–30 Days'],
    introTitle: 'What is a Registered Society?',
    introContent: (
      <p>A Society is a non-profit organization registered under the Societies Registration Act, 1860 (or the respective state act). It is managed by a Governing Body / Executive Committee elected from among its members. Societies are commonly formed for literary, scientific, charitable, educational, cultural, or political purposes. A society must have a minimum of 7 members for registration. Each state has its own Registrar of Societies where the registration is filed.</p>
    ),
    detailsTitle: 'Benefits of Society Registration',
    details: [
      { title: 'Legal Recognition', desc: 'Registered society can sue and be sued, enter contracts, and own property in its name.', icon: ShieldCheck },
      { title: 'Democratic Governance', desc: 'Members elect the executive committee, ensuring participatory management.', icon: Users },
      { title: 'Government Grants', desc: 'Registered societies are eligible to apply for government grants and schemes.', icon: Heart },
      { title: 'Tax Exemption Eligible', desc: 'Can apply for 12A and 80G registration for income tax exemption and donor benefits.', icon: Globe },
    ],
    requirements: [
      'Minimum 7 founding members', 'Society Memorandum of Association (MoA)',
      'Rules & Regulations document', 'List of all members with address and occupation',
      'Elected executive committee with Chairman, Secretary, Treasurer', 'Registered office address',
      'Affidavit and declaration from all members', 'List of activities / objectives',
    ],
    processTitle: 'How to Register a Society in India',
    processIntro: 'Society registration is done at the state level with the respective Registrar of Societies or the state department.',
    processSteps: [
      { title: 'Draft Memorandum of Association', desc: 'Prepare MoA stating society name, registered office, objectives, and area of operations.', icon: FileSearch },
      { title: 'Draft Rules & Regulations', desc: 'Prepare by-laws governing meetings, elections, membership, amendments, and dissolution procedures.', icon: UserCheck },
      { title: 'Prepare Member List', desc: 'Compile a list of all 7+ founding members with name, address, occupation, and signature.', icon: Users },
      { title: 'Submit Application to Registrar', desc: 'File the application with MoA, Rules, member list, and supporting documents to the state Registrar of Societies.', icon: Globe },
      { title: 'Document Verification', desc: 'Registrar verifies all documents. May raise queries or request clarifications.', icon: CheckCircle2 },
      { title: 'Registration Certificate', desc: 'Registrar issues the Registration Certificate upon approval. Society can now operate legally.', icon: FileCheck },
    ],
    processOutro: 'Society registration takes 20–30 working days. Processing time varies by state — Maharashtra and Delhi may be faster than other states.',
    documents: [
      { category: 'Member Documents', list: ['PAN Card of all members', 'Aadhaar Card', 'Photograph of each member', 'Address proof of each member'] },
      { category: 'Society Documents', list: ['Memorandum of Association (MoA)', 'Rules & Regulations / Bye-laws', 'Affidavit of Secretary on stamp paper'] },
      { category: 'Office Address', list: ['Rental Agreement or ownership deed', 'NOC from landlord', 'Latest utility bill'] },
    ],
    compliance: [
      { title: 'Annual General Meeting', desc: 'Mandatory AGM at least once a year. Minutes must be maintained.' },
      { title: 'Renewal / Annual List', desc: 'Most states require filing of annual list of Governing Body members with the Registrar.' },
      { title: 'Income Tax Return', desc: 'File ITR annually. Apply for 12A for income tax exemption.' },
      { title: 'Audited Accounts', desc: 'Annual accounts must be audited and presented at AGM.' },
    ],
    faqs: [
      { q: 'How many members are required to form a society?', a: 'A minimum of 7 members are required to register a society under the Societies Registration Act, 1860.' },
      { q: 'Can a society own property?', a: 'Yes. A registered society can own, sell, or mortgage property in its own name.' },
      { q: 'Is society registration state-specific?', a: 'Yes. Societies are registered under state laws with the respective State Registrar of Societies. Rules and fees vary by state.' },
      { q: 'Can a society convert to Section 8 Company?', a: 'Yes. A registered society can convert to a Section 8 Company for higher credibility and access to CSR funding.' },
      { q: 'What is the difference between a Society and a Trust?', a: 'A Trust is formed by a deed between the settlor and trustees (minimum 2 persons). A Society requires minimum 7 members with democratic governance. Trusts are simpler but societies are preferred for membership-based organizations.' },
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
