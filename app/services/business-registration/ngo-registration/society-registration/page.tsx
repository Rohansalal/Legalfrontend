'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Users, ShieldCheck, Globe, Heart, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function NGOSocietyRegistrationPage() {
  const data = {
    title: 'Society Registration for NGO',
    description: 'Register a society under the Societies Registration Act, 1860 for your NGO — ideal for member-driven organizations in education, culture, science, and social welfare.',
    heroBadges: ['Societies Registration Act 1860', 'Democratic Structure', '20–30 Days'],
    introTitle: 'Why Register as a Society?',
    introContent: (
      <p>A Registered Society under the Societies Registration Act, 1860 is the preferred NGO structure for organizations that want democratic governance with multiple active members — like alumni associations, cultural organizations, sports clubs, or community welfare bodies. Unlike a Trust (trustee-led) or Section 8 Company (MCA-regulated), a Society is governed by an elected Executive Committee representing the general body of members. It is well-suited for organizations planning to apply for government grants, particularly for educational and social welfare schemes.</p>
    ),
    detailsTitle: 'Advantages of Society Structure for NGO',
    details: [
      { title: 'Democratic Governance', desc: 'Members elect the Executive Committee — ensures participatory and transparent management.', icon: Users },
      { title: 'Multiple Founders', desc: '7+ founding members bring diverse networks, credibility, and shared governance.', icon: ShieldCheck },
      { title: 'Government Grant Eligible', desc: 'Societies are preferred by NITI Aayog, NABARD, and state governments for grants.', icon: Globe },
      { title: 'Tax Exemption Eligible', desc: 'Eligible for 12A income tax exemption and 80G donor deduction after registration.', icon: Heart },
    ],
    requirements: [
      'Minimum 7 founding members from different families', 'Memorandum of Association (MoA)',
      'Rules & Regulations (Bye-laws)', 'Elected executive committee with President, Vice-President, Secretary, Treasurer',
      'PAN Cards of all founding members', 'Address proof of registered office',
      'All members must be adult Indian citizens', 'No income distribution to members',
    ],
    processTitle: 'How to Register a Society as NGO',
    processIntro: 'Society registration is done with the State Registrar of Societies (or Registrar of Firms and Societies in some states).',
    processSteps: [
      { title: 'Hold Founding Meeting', desc: 'Organize a general body meeting of 7+ members. Pass a resolution to form the society and adopt MoA and Rules.', icon: UserCheck },
      { title: 'Draft MoA and Bye-laws', desc: 'Prepare Memorandum of Association (name, objectives, area of operation) and Rules & Regulations (meetings, elections, amendments).', icon: FileSearch },
      { title: 'Elect Executive Committee', desc: 'Elect President, Secretary, and Treasurer from founding members. Pass formal resolution.', icon: Users },
      { title: 'File Application to Registrar', desc: 'Submit Form with MoA, Bye-laws, member list, executive committee list, and affidavit from Secretary.', icon: Globe },
      { title: 'Receive Registration Certificate', desc: 'Registrar issues the Registration Certificate and Society number. NGO is now legally constituted.', icon: FileCheck },
    ],
    processOutro: 'Society registration takes 20–30 days. Once registered, immediately apply for PAN, open bank account, then apply for 12A and 80G.',
    documents: [
      { category: 'Member Documents', list: ['PAN Card of all 7+ members', 'Aadhaar Card', 'Photograph of each member', 'Occupation and address of each member'] },
      { category: 'Society Documents', list: ['Memorandum of Association', 'Rules & Regulations', 'Minutes of founding meeting', 'Affidavit from Secretary'] },
      { category: 'Registered Office', list: ['Rental agreement or ownership deed', 'NOC from landlord', 'Latest utility bill'] },
    ],
    compliance: [
      { title: 'Annual General Meeting', desc: 'Mandatory AGM once a year. Present accounts, elect/re-elect executive committee.' },
      { title: 'Annual List to Registrar', desc: 'File annual list of Executive Committee members with the Registrar of Societies as required by state law.' },
      { title: '12A Income Tax Return', desc: 'File ITR annually after obtaining 12A registration for income tax exemption.' },
      { title: 'DARPAN Registration', desc: 'Register on NITI Aayog\'s DARPAN portal to access government grants and FCRA registration.' },
    ],
    faqs: [
      { q: 'Can a society convert to Section 8 Company?', a: 'Yes. A registered society can convert to a Section 8 Company for higher credibility and better access to CSR funding and FCRA. The process involves winding up the society and incorporating afresh.' },
      { q: 'What is the difference between MoA and Bye-laws?', a: 'The Memorandum of Association states the society\'s name, objectives, and area of operation. The Bye-laws (Rules & Regulations) govern internal operations — meetings, elections, membership, and amendments.' },
      { q: 'Can a society own property?', a: 'Yes. A registered society can own, acquire, hold, and dispose of property in its own name.' },
      { q: 'Is there a maximum number of members?', a: 'There is no maximum limit on members for a registered society. General body can have unlimited members.' },
      { q: 'Do society members have personal liability?', a: 'No. Members of a registered society do not have personal liability for the society\'s debts, provided they act within their authority.' },
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
