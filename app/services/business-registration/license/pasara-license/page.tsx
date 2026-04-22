'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Users, Building2, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function PASARALicensePage() {
  const data = {
    title: 'PASARA License',
    description: 'Private Security Agencies Regulation Act (PASARA) license for operating a private security agency in India. Mandatory under the PASARA Act, 2005.',
    heroBadges: ['PASARA Act 2005', 'State Home Ministry', '30–60 Days'],
    introTitle: 'What is a PASARA License?',
    introContent: (
      <p>The Private Security Agencies (Regulation) Act, 2005 (PASARA) regulates private security agencies in India. Any company or firm providing security guard services, bouncers, personal security officers, event security, or cash-in-transit services must obtain a PASARA license from the State Controlling Authority (typically the state Home Department). PASARA aims to regulate the hiring, training, and conduct of private security personnel. Security agencies cannot operate without this license — it is a criminal offense under the Act.</p>
    ),
    detailsTitle: 'Who Needs PASARA License?',
    details: [
      { title: 'Security Guard Agencies', desc: 'Companies providing security guards to factories, housing societies, offices, and institutions.', icon: ShieldCheck },
      { title: 'Personal Security Officers', desc: 'Agencies providing PSO services to corporates, politicians, or high-net-worth individuals.', icon: Users },
      { title: 'Event Security', desc: 'Firms providing security services for events, concerts, conferences, and public gatherings.', icon: Building2 },
      { title: 'Cash-in-Transit (CIT)', desc: 'Specialized agencies transporting cash and valuables between banks, ATMs, and businesses.', icon: Globe },
    ],
    requirements: [
      'Company or firm registered in India', 'Director/proprietor aged 18–65 years with no criminal record',
      'Police clearance certificate for all directors/partners', 'Training infrastructure for security personnel',
      'Minimum 25 square meter office area', 'Uniform standards for security guards',
      'PAN Card of entity and directors', 'State-specific PASARA registration fee payment',
    ],
    processTitle: 'How to Obtain PASARA License',
    processIntro: 'PASARA license applications are filed with the respective state\'s Controlling Authority (usually the Additional Director General of Police or Home Department).',
    processSteps: [
      { title: 'Register Your Company', desc: 'Ensure your security agency is properly incorporated as Pvt Ltd, LLP, or registered firm before applying.', icon: UserCheck },
      { title: 'Police Clearance', desc: 'Obtain police clearance certificates for all directors, partners, and key managerial staff from local police.', icon: FileSearch },
      { title: 'Prepare Application', desc: 'Fill PASARA Form A (application for license) with company details, director backgrounds, and service categories.', icon: Globe },
      { title: 'Submit to Controlling Authority', desc: 'Submit physical application to the State Controlling Authority along with all documents and fees.', icon: CheckCircle2 },
      { title: 'Inspection and Verification', desc: 'Controlling Authority inspects premises and verifies documents. May interview directors.', icon: ShieldCheck },
      { title: 'PASARA License Issued', desc: 'License issued for the state with specific conditions. Valid for 5 years, renewable.', icon: FileCheck },
    ],
    processOutro: 'PASARA license takes 30–60 days. Multi-state operations require separate licenses from each state Controlling Authority.',
    documents: [
      { category: 'Company Documents', list: ['Certificate of Incorporation / Partnership Deed', 'PAN Card', 'GST Registration', 'Address proof of office'] },
      { category: 'Director / Proprietor', list: ['PAN Card', 'Aadhaar Card', 'Police clearance certificate', 'No-criminal record affidavit'] },
      { category: 'Operational Documents', list: ['Training curriculum for security staff', 'Uniform specifications', 'List of clients (if any existing)', 'Emergency response plan'] },
    ],
    compliance: [
      { title: 'Security Guard Training', desc: 'All deployed security personnel must undergo 160 hours of training as prescribed by PASARA.' },
      { title: 'Minimum Wage Compliance', desc: 'Security guards must be paid minimum wages as prescribed by state government for the security industry.' },
      { title: '5-Year License Renewal', desc: 'PASARA license must be renewed every 5 years. File renewal application 60 days before expiry.' },
      { title: 'Police Reporting', desc: 'Report any criminal activity involving security personnel to police immediately. Maintain character rolls for all guards.' },
    ],
    faqs: [
      { q: 'Is PASARA license required for a single security guard?', a: 'Yes. Even if you deploy just one security guard for commercial purposes, you need a PASARA license.' },
      { q: 'Can I use the same PASARA license across multiple states?', a: 'No. PASARA licenses are state-specific. For operations in multiple states, obtain separate licenses from each state\'s Controlling Authority.' },
      { q: 'What training is mandatory for security guards?', a: 'PASARA mandates 160 hours of training covering physical fitness, first aid, fire fighting, legal knowledge, and professional conduct.' },
      { q: 'Can a foreigner own a security agency?', a: 'No. PASARA agencies must be owned by Indian citizens. Foreign nationals cannot hold PASARA licenses or own security agencies in India.' },
      { q: 'What are the penalties for operating without PASARA?', a: 'Operating without a license is punishable with imprisonment up to 1 year and/or fine up to ₹25,000 under PASARA, 2005.' },
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
