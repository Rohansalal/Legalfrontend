'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Home, Users, ShieldCheck, Building2, UserCheck, FileSearch, CheckCircle2, FileCheck, Globe } from 'lucide-react';

export default function RWARegistrationPage() {
  const data = {
    title: 'RWA Registration',
    description: 'Register your Resident Welfare Association (RWA) to manage housing society maintenance, security, amenities, and dispute resolution with legal authority.',
    heroBadges: ['Societies Registration Act', 'State-Level Process', '15–20 Days'],
    introTitle: 'What is an RWA (Resident Welfare Association)?',
    introContent: (
      <p>A Resident Welfare Association (RWA) is a non-profit body formed by residents of a housing colony, apartment complex, or gated community to manage common areas, maintenance, security, and civic amenities. RWAs are typically registered under the Societies Registration Act, 1860 or the respective state housing society laws. A registered RWA has legal authority to collect maintenance charges, enforce bye-laws, represent residents before local authorities, and enter contracts with service providers.</p>
    ),
    detailsTitle: 'Why Register Your RWA?',
    details: [
      { title: 'Legal Authority', desc: 'Registered RWA can collect maintenance, enforce rules, and represent residents legally.', icon: ShieldCheck },
      { title: 'Bank Account Access', desc: 'Open a bank account in the RWA name for transparent financial management.', icon: Home },
      { title: 'Municipal Representation', desc: 'Registered RWA can engage with municipal corporation, utility providers, and government bodies.', icon: Building2 },
      { title: 'Dispute Resolution', desc: 'Legally resolve disputes with builders, municipal bodies, or between residents.', icon: Users },
    ],
    requirements: [
      'Minimum 7 founding resident members', 'Memorandum of Association (MoA)',
      'Bye-laws / Rules & Regulations', 'Elected Governing Body (President, Secretary, Treasurer)',
      'PAN Card of all executive committee members', 'Proof of residential colony / complex',
      'No-objection from builder (for new projects)', 'List of all households with details',
    ],
    processTitle: 'How to Register an RWA',
    processIntro: 'RWA registration follows the same process as society registration under the Societies Registration Act, 1860.',
    processSteps: [
      { title: 'Hold a General Body Meeting', desc: 'Organize a meeting of all interested residents. Pass a resolution to form the RWA and elect office bearers.', icon: Users },
      { title: 'Draft MoA and Bye-laws', desc: 'Prepare the MoA with RWA objectives and bye-laws covering maintenance, disputes, elections, and amendment procedures.', icon: FileSearch },
      { title: 'Prepare Documents', desc: 'Compile member list, identity proofs of office bearers, and address proof of the RWA office.', icon: UserCheck },
      { title: 'Submit Application to Registrar', desc: 'File the application with all documents to the state Registrar of Societies.', icon: Globe },
      { title: 'Registration Certificate', desc: 'Registrar issues Registration Certificate. RWA is now legally recognized.', icon: FileCheck },
    ],
    processOutro: 'RWA registration takes 15–20 working days. Once registered, immediately open a bank account and start formal operations.',
    documents: [
      { category: 'Office Bearer Documents', list: ['PAN Card of President, Secretary, Treasurer', 'Aadhaar Card', 'Photograph', 'Address proof'] },
      { category: 'RWA Documents', list: ['Memorandum of Association', 'Bye-laws', 'Minutes of the founding meeting', 'Member list with signatures'] },
      { category: 'Property Proof', list: ['Society name / address', 'Builder NOC (if applicable)', 'List of flats / houses'] },
    ],
    compliance: [
      { title: 'Annual General Meeting', desc: 'Hold AGM at least once a year. Present annual accounts and elect/re-elect office bearers.' },
      { title: 'Annual List Submission', desc: 'Submit annual list of executive committee members to the Registrar of Societies.' },
      { title: 'Maintenance Accounts', desc: 'Maintain transparent records of all collections, expenditures, and sinking fund.' },
      { title: 'Income Tax (if applicable)', desc: 'If RWA collects more than ₹2.5 Lakhs as maintenance and earns interest income, file ITR.' },
    ],
    faqs: [
      { q: 'Is RWA registration mandatory?', a: 'Registration is not legally mandatory in all states, but a registered RWA has much more legal authority and credibility — it can sue, enter contracts, and open bank accounts.' },
      { q: 'Can an RWA charge maintenance?', a: 'Yes. A registered RWA can set and collect maintenance charges from all residents. These can be enforced legally against defaulters.' },
      { q: 'What is a sinking fund?', a: 'A sinking fund is a mandatory reserve fund maintained by RWAs for long-term capital expenditure like painting, elevator replacement, water tank renovation, etc.' },
      { q: 'Can an RWA take legal action?', a: 'Yes. A registered RWA can file civil cases against residents who default on maintenance, or against the builder for construction defects.' },
      { q: 'Can the builder manage maintenance instead of RWA?', a: 'Builders can manage facilities until the Occupancy Certificate is issued. Post-OC, residents have the right to form and register their own RWA and take over management.' },
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
