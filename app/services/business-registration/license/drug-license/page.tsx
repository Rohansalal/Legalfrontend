'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Award, Globe, Zap, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function DrugLicensePage() {
  const data = {
    title: 'Drug License',
    description: 'Mandatory license for retail, wholesale, or manufacturing of pharmaceutical drugs, medicines, and cosmetics under the Drugs and Cosmetics Act, 1940.',
    heroBadges: ['Drugs & Cosmetics Act 1940', 'State Drug Authority', '30–45 Days'],
    introTitle: 'What is a Drug License?',
    introContent: (
      <p>A Drug License is issued by the State Drug Control Authority (SDCA) under the Drugs and Cosmetics Act, 1940 and Rules, 1945 to any establishment engaged in the manufacture, distribution, sale, or storage of pharmaceutical drugs, medicines, and cosmetics. Any pharmacy (medical shop), wholesale drug distributor, pharmaceutical manufacturer, or importer/exporter of drugs must hold a valid drug license. The license ensures drug safety, proper storage, and qualified supervision by a licensed pharmacist.</p>
    ),
    detailsTitle: 'Types of Drug Licenses',
    details: [
      { title: 'Retail Drug License', desc: 'Form 20 & 21 for retail pharmacy (medical shop) for non-Schedule H/X drugs and Schedule H/X drugs.', icon: ShieldCheck },
      { title: 'Wholesale Drug License', desc: 'Form 20B & 21B for wholesale distribution of drugs to pharmacies, hospitals, and clinics.', icon: Globe },
      { title: 'Manufacturing License', desc: 'Form 25 & 28 for pharmaceutical manufacturing units under CDSCO / State SDCA.', icon: Award },
      { title: 'Import / Export License', desc: 'Central government license for importing/exporting pharmaceutical drugs and active ingredients.', icon: Zap },
    ],
    requirements: [
      'Licensed Pharmacist (D.Pharma/B.Pharma) on staff (for retail)', 'Qualified technical staff for manufacturing',
      'Minimum 10 sq.mt. premises for retail pharmacy', 'Refrigeration facility for cold-chain drugs',
      'PAN Card of business entity', 'Partnership Deed / COI',
      'Premises rental/ownership proof', 'Equipment list',
    ],
    processTitle: 'How to Obtain a Drug License',
    processIntro: 'Drug license applications are filed with the State Drug Controller Office of the respective state.',
    processSteps: [
      { title: 'Appoint Qualified Pharmacist', desc: 'Appoint a registered pharmacist with D.Pharma / B.Pharma degree for retail or qualified technical staff for manufacturing.', icon: UserCheck },
      { title: 'Prepare Premises', desc: 'Ensure proper storage facilities, refrigeration, and minimum area requirements as per Rules 64-65 of D&C Rules.', icon: FileSearch },
      { title: 'Submit Application Forms', desc: 'File Form 19 (application) + Form 20 + Form 21 with the State Drugs Controlling Authority.', icon: Globe },
      { title: 'Premises Inspection', desc: 'Drug Inspector visits and verifies premises, equipment, storage, and qualifications of pharmacist.', icon: CheckCircle2 },
      { title: 'Drug License Certificate', desc: 'State Drug Controller issues the Drug License in Form 20/21. Displays the license number.', icon: FileCheck },
    ],
    processOutro: 'Drug license processing takes 30–45 days. Premises must be fully ready before inspection to avoid rejection.',
    documents: [
      { category: 'Business Documents', list: ['PAN Card', 'GST Certificate', 'Partnership Deed / COI', 'Address proof'] },
      { category: 'Pharmacist / Technical Staff', list: ['D.Pharma/B.Pharma certificate', 'Pharmacist Registration Certificate', 'Experience certificate', 'Appointment letter'] },
      { category: 'Premises', list: ['Ownership deed / rental agreement', 'NOC from landlord', 'Premises layout plan', 'Refrigeration equipment proof'] },
    ],
    compliance: [
      { title: 'Annual Renewal', desc: 'Drug License must be renewed annually (31st December deadline for most states). Late renewal attracts penalty.' },
      { title: 'Record Maintenance', desc: 'Maintain purchase and sale records in prescribed registers (Form 17, Form 20) and make available for inspection.' },
      { title: 'Schedule H/X Control', desc: 'Maintain separate records for Schedule H and Schedule X (narcotic/psychotropic) drugs. Strict quantity controls apply.' },
      { title: 'Qualified Presence', desc: 'A registered pharmacist must be physically present during all business hours. Absence during inspection leads to suspension.' },
    ],
    faqs: [
      { q: 'Is a pharmacist mandatory for a medical shop?', a: 'Yes. A registered pharmacist (D.Pharma or B.Pharma) must be employed and physically present during all business hours for retail drug license.' },
      { q: 'Can I sell medicines online with a drug license?', a: 'Yes, but online pharmacy operations require additional compliance with the Drugs and Cosmetics Act and any state-specific regulations. A physical premise with a valid drug license is required.' },
      { q: 'What is a Schedule H drug?', a: 'Schedule H drugs are prescription-only medicines that can only be sold against a valid prescription from a registered medical practitioner. Examples include antibiotics, steroids, and BP medications.' },
      { q: 'How many licenses does a pharmacy need?', a: 'A retail pharmacy typically needs Form 20 (non-H drugs) and Form 21 (H & H1 drugs). A wholesale outlet needs Form 20B and Form 21B.' },
      { q: 'What is the penalty for selling drugs without a license?', a: 'Imprisonment up to 3 years and/or fine for first offense. Subsequent violations carry heavier penalties under the Drugs and Cosmetics Act.' },
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
