'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Building2, ShieldCheck, Globe, Users, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function PoliticalPartyRegistrationPage() {
  const data = {
    title: 'Political Party Registration',
    description: 'Register your political party with the Election Commission of India (ECI). Gain legal recognition, contest elections, and build a legitimate democratic platform.',
    heroBadges: ['Election Commission of India', 'National / State Level', '60–90 Days'],
    introTitle: 'What is a Registered Political Party?',
    introContent: (
      <p>A Political Party is registered with the Election Commission of India (ECI) under Section 29A of the Representation of the People Act, 1951. Registration is not mandatory to contest elections, but registered parties enjoy significant benefits: allotment of reserved/common symbol, access to electoral rolls, and potential recognition as a State or National Party. The ECI scrutinizes the party's constitution, objectives, and commitment to democratic principles and the Constitution of India.</p>
    ),
    detailsTitle: 'Benefits of Registering a Political Party',
    details: [
      { title: 'Electoral Symbol', desc: 'Registered parties get a common electoral symbol allotted by ECI for all elections.', icon: Globe },
      { title: 'Legal Recognition', desc: 'Party can operate legally, open bank accounts, and contest elections under a recognized name.', icon: ShieldCheck },
      { title: 'Income Tax Exemption', desc: 'Registered political parties are fully exempt from income tax on voluntary contributions.', icon: Building2 },
      { title: 'Free Airtime', desc: 'Recognized national/state parties receive free airtime on Doordarshan and AIR during elections.', icon: Users },
    ],
    requirements: [
      'Minimum 100 founding members', 'Party Constitution / Bye-laws',
      'Declaration of adherence to the Indian Constitution and democratic principles', 'Commitment to secularism and democratic principles',
      'Name and symbol not similar to existing recognized parties', 'Affidavit signed by party president/secretary',
      'PAN Card of key office bearers', 'Details of proposed party headquarters',
    ],
    processTitle: 'How to Register a Political Party with ECI',
    processIntro: 'Political party registration is handled exclusively by the Election Commission of India (ECI), New Delhi.',
    processSteps: [
      { title: 'Prepare Party Constitution', desc: 'Draft a comprehensive party constitution covering objectives, membership, office bearers, election procedures, funds management, and dissolution.', icon: FileSearch },
      { title: 'Founding Member Meeting', desc: 'Hold a formal meeting with 100+ founding members. Pass a resolution to form the party and apply for registration.', icon: Users },
      { title: 'Submit Application to ECI', desc: 'File Form 1 (as prescribed by ECI) with party constitution, member list, affidavits, and supporting documents.', icon: UserCheck },
      { title: 'Publication in National Newspaper', desc: 'Publish a notice of application for registration in a national newspaper and submit proof to ECI.', icon: Globe },
      { title: 'ECI Review Process', desc: 'ECI scrutinizes party name, symbol, constitution, and objectives. May invite objections from the public.', icon: CheckCircle2 },
      { title: 'Registration Certificate', desc: 'ECI issues the Registration Certificate upon satisfaction with all requirements.', icon: FileCheck },
    ],
    processOutro: 'Political party registration takes 60–90 days. ECI reviews very carefully — incomplete applications or objections can delay the process significantly.',
    documents: [
      { category: 'Party Documents', list: ['Party Constitution / Bye-laws', 'Application Form 1', 'List of 100+ founding members with signatures', 'Resolution passed in founding meeting'] },
      { category: 'Office Bearer Documents', list: ['PAN Card of President, Secretary, Treasurer', 'Aadhaar Card', 'Address proof of all key office bearers'] },
      { category: 'Additional', list: ['Affidavit on stamp paper by President/Secretary', 'Newspaper publication proof', 'Party headquarters address proof'] },
    ],
    compliance: [
      { title: 'Annual Contribution Report', desc: 'Submit annual contribution report to ECI. Contributions above ₹20,000 must be reported with donor details.' },
      { title: 'Audit of Accounts', desc: 'Annual accounts must be audited by a qualified CA and submitted to ECI and Income Tax Department.' },
      { title: 'Electoral Bond Compliance', desc: 'Maintain proper records of Electoral Bond redemptions and report to ECI.' },
      { title: 'Party Election', desc: 'Hold internal party elections as per party constitution to maintain democratic functioning.' },
    ],
    faqs: [
      { q: 'Is it mandatory to register a political party to contest elections?', a: 'No. Candidates can contest as independents or under unrecognized parties. But registration provides significant benefits including electoral symbols and legal protection.' },
      { q: 'What is the difference between a Registered and Recognized party?', a: 'All recognized parties are registered, but not all registered parties are recognized. Recognition (State/National) is granted by ECI based on vote percentage and seats won in elections.' },
      { q: 'Are donations to political parties tax-exempt?', a: 'Contributions to registered political parties are fully exempt from income tax under Section 13A. Donor companies can claim 100% deduction under Section 80GGB.' },
      { q: 'Can a party be deregistered?', a: 'Yes. ECI can deregister a party for violating the Constitution, failing to contest elections, or non-compliance with ECI norms.' },
      { q: 'What is an Electoral Trust?', a: 'An Electoral Trust is a non-profit company that receives corporate contributions and distributes them to registered political parties as per ECI-approved schemes.' },
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
