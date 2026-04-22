'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Heart, ShieldCheck, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function AYUSHLicensePage() {
  const data = {
    title: 'AYUSH License',
    description: 'License from the Ministry of AYUSH for manufacturing, selling, or distributing Ayurveda, Yoga, Unani, Siddha, and Homeopathy (AYUSH) products and medicines.',
    heroBadges: ['Ministry of AYUSH', 'State Drug Authority', '30–60 Days'],
    introTitle: 'What is an AYUSH License?',
    introContent: (
      <p>The AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, Homeopathy) license is issued by the respective State Drug Control Authority or the Ministry of AYUSH for businesses engaged in manufacturing, distribution, or retail sale of traditional medicine products. It is governed under the Drugs and Cosmetics Act, 1940 (for Ayurvedic, Siddha, and Unani drugs) and the Homoeopathy Central Council Act, 1973. The license ensures product safety, quality standards, and proper manufacturing practices.</p>
    ),
    detailsTitle: 'Types of AYUSH Licenses',
    details: [
      { title: 'Manufacturing License', desc: 'For businesses manufacturing Ayurveda, Unani, Siddha, or Homeopathy products.', icon: Award },
      { title: 'Wholesale License', desc: 'For wholesale distributors of licensed AYUSH products.', icon: Globe },
      { title: 'Retail License', desc: 'For retail pharmacies and stores selling AYUSH medicines.', icon: ShieldCheck },
      { title: 'Export License', desc: 'For businesses exporting AYUSH products to international markets.', icon: Heart },
    ],
    requirements: [
      'Qualified Ayurvedic / BAMS / BUMS physician as technical person-in-charge', 'Manufacturing premises with GMP (Good Manufacturing Practices) compliance',
      'Adequate laboratory for quality testing', 'List of products to be manufactured/sold',
      'Manufacturing premises ownership/rental documents', 'Equipment list',
      'Source of raw material details', 'Identity and qualification proof of technical staff',
    ],
    processTitle: 'How to Obtain AYUSH License',
    processIntro: 'AYUSH license applications are submitted to the respective State Drug Controller / State AYUSH Department.',
    processSteps: [
      { title: 'Identify License Type and Authority', desc: 'Determine whether you need State AYUSH Drug Control license or Central license (for national distribution).', icon: UserCheck },
      { title: 'Premises Preparation', desc: 'Ensure manufacturing premises comply with GMP standards — layout, equipment, and quality control lab.', icon: FileSearch },
      { title: 'Appoint Technical Staff', desc: 'Appoint qualified BAMS/BUMS doctor or Pharmacy graduate as technical director.', icon: Globe },
      { title: 'Submit Application', desc: 'File Form 24D (for ASU drugs) with complete documentation to the State Drug Authority.', icon: CheckCircle2 },
      { title: 'Premises Inspection', desc: 'Drug Inspector visits and inspects the manufacturing facility. Issues report to licensing authority.', icon: Award },
      { title: 'AYUSH License Issued', desc: 'State Drug Authority issues the manufacturing / wholesale / retail license after satisfactory inspection.', icon: FileCheck },
    ],
    processOutro: 'AYUSH license takes 30–60 days. Premises inspection is the key milestone — ensure GMP compliance before inspection.',
    documents: [
      { category: 'Applicant Documents', list: ['PAN Card', 'Address proof', 'Photograph', 'Qualification certificates'] },
      { category: 'Premises Documents', list: ['Ownership/rental deed', 'Layout plan of premises', 'Equipment list', 'GMP compliance certificate'] },
      { category: 'Technical Staff', list: ['Qualification certificates of technical staff', 'Appointment letter', 'Experience certificates'] },
    ],
    compliance: [
      { title: 'GMP Compliance', desc: 'Maintain Good Manufacturing Practices (GMP) at all times — premises, equipment, and staff standards.' },
      { title: 'License Renewal', desc: 'AYUSH manufacturing licenses must be renewed every 5 years. Retail/wholesale typically annually.' },
      { title: 'Product Quality Testing', desc: 'All batches must be tested in an approved laboratory before dispatch.' },
      { title: 'Label Compliance', desc: 'All AYUSH product labels must comply with Drugs and Cosmetics Act rules — ingredients, dosage, batch number, expiry.' },
    ],
    faqs: [
      { q: 'Is a doctor required to get an AYUSH license?', a: 'Yes. For a manufacturing license, a qualified BAMS (Ayurveda), BUMS (Unani), or BHMS (Homeopathy) doctor must be appointed as the technical person-in-charge.' },
      { q: 'Can I sell AYUSH products online without a license?', a: 'No. Online sale of AYUSH medicines requires the same license as physical retail. Marketplaces like Amazon and Flipkart require license proof for AYUSH product listings.' },
      { q: 'What is the difference between AYUSH license and FSSAI?', a: 'FSSAI covers food products (including herbal supplements). AYUSH license covers traditional medicinal preparations classified as drugs under the Drugs and Cosmetics Act.' },
      { q: 'Can a company without manufacturing facilities get AYUSH license?', a: 'Yes. You can obtain a "loan license" to manufacture products in someone else\'s licensed facility, or get a wholesale/retail license for distribution only.' },
      { q: 'Is GMP certification mandatory for AYUSH?', a: 'Yes. GMP certification is mandatory for AYUSH drug manufacturing units. Products without GMP compliance cannot be sold in India or exported.' },
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
