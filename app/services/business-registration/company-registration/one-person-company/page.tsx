'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { UserCheck, ShieldCheck, Zap, Building2, FileSearch, PenTool, CheckCircle2, FileCheck, Users } from 'lucide-react';

export default function OnePersonCompanyPage() {
  const data = {
    title: 'One Person Company (OPC) Registration',
    description: "India's only company structure for solo entrepreneurs — run a full company with limited liability, without needing any co-founder or partner.",
    heroBadges: ['Single Director', 'Limited Liability', '7–10 Days Process'],
    introTitle: 'What is a One Person Company (OPC)?',
    introContent: (
      <p>A One Person Company (OPC) is introduced under the Companies Act, 2013 (Section 2(62)) to enable a single person to incorporate a company. Unlike a sole proprietorship, OPC provides limited liability, separate legal entity, and perpetual succession. Only one shareholder and one director are needed (can be the same person). A nominee must be appointed who takes over if the sole member dies or becomes incapacitated.</p>
    ),
    detailsTitle: 'Key Advantages of OPC',
    details: [
      { title: 'Solo Entrepreneur Friendly', desc: 'Run a complete company structure with you as the only shareholder and director.', icon: UserCheck },
      { title: 'Limited Liability', desc: 'Personal assets are protected. Liability is limited to your capital contribution.', icon: ShieldCheck },
      { title: 'Less Compliance', desc: 'Annual General Meeting not mandatory. Less filings compared to Pvt Ltd.', icon: Zap },
      { title: 'Separate Legal Entity', desc: 'OPC can own assets, enter contracts, and sue/be sued in its own name.', icon: Building2 },
    ],
    requirements: [
      'Only 1 Shareholder (natural person, Indian citizen)', 'Only 1 Director (can be same as shareholder)',
      'Mandatory Nominee appointment', 'Indian Resident (stayed 120+ days in India)',
      'Digital Signature Certificate (DSC)', 'Director Identification Number (DIN)',
      'Unique company name', 'Registered Office Address',
    ],
    processTitle: 'How to Register a One Person Company',
    processIntro: 'OPC registration process follows the same MCA SPICe+ route as Private Limited Company with minor variations.',
    processSteps: [
      { title: 'Obtain DSC and DIN', desc: 'The sole director must obtain a Class 3 DSC and Director Identification Number.', icon: UserCheck },
      { title: 'Choose Company Name', desc: 'Submit company name on SPICe+ Part A for MCA approval. Name must end with "(OPC) Private Limited".', icon: FileSearch },
      { title: 'Appoint Nominee', desc: 'Identify a nominee (Indian citizen) who will take over in case the sole member is incapacitated. Nominee gives consent in Form INC-3.', icon: Users },
      { title: 'Draft MOA and AOA', desc: 'Prepare Memorandum and Articles of Association for OPC structure.', icon: PenTool },
      { title: 'File SPICe+ Part B', desc: 'Submit full incorporation form with single director, nominee, and office details.', icon: CheckCircle2 },
      { title: 'Certificate of Incorporation', desc: 'RoC issues COI. OPC is now a separate legal entity with its own CIN.', icon: FileCheck },
    ],
    processOutro: 'OPC registration takes 7–10 working days. Note: An OPC must mandatorily convert to a Private Limited Company once paid-up capital exceeds ₹50 Lakhs or turnover exceeds ₹2 Crores.',
    documents: [
      { category: 'Director / Member', list: ['PAN Card', 'Aadhaar Card', 'Passport size photograph', 'Address proof (bank statement / utility bill)'] },
      { category: 'Nominee', list: ['PAN Card of Nominee', 'Aadhaar Card of Nominee', 'Consent letter in Form INC-3'] },
      { category: 'Registered Office', list: ['Rental Agreement or ownership deed', 'Latest utility bill', "NOC from landlord"] },
    ],
    compliance: [
      { title: 'Annual Financial Statements', desc: 'OPC must file financial statements (AOC-4) with MCA annually.' },
      { title: 'Annual Return', desc: 'File MGT-7A (simplified form for OPC) with RoC every year.' },
      { title: 'Income Tax Return', desc: 'File ITR-6 annually. OPC is taxed at the same rate as any company (22% + surcharge).' },
      { title: 'Mandatory Conversion', desc: 'Convert to Pvt Ltd if turnover exceeds ₹2 Crores or paid-up capital exceeds ₹50 Lakhs.' },
    ],
    faqs: [
      { q: 'Who can form an OPC?', a: 'Only a natural person who is an Indian citizen and resident of India (stayed 120+ days in the previous year) can form an OPC.' },
      { q: 'Can an OPC have more than one director?', a: 'Yes. While there can only be 1 shareholder, you can appoint up to 15 directors in an OPC.' },
      { q: 'What happens to OPC if the sole member dies?', a: 'The nominee appointed at the time of registration automatically takes over as the sole member of the OPC.' },
      { q: 'When must an OPC convert to Pvt Ltd?', a: 'Mandatory conversion is required when paid-up capital exceeds ₹50 Lakhs or average annual turnover exceeds ₹2 Crores for 3 consecutive years.' },
      { q: 'Can an OPC be converted voluntarily?', a: 'Yes, an OPC can voluntarily convert to a Pvt Ltd company after 2 years from the date of incorporation.' },
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
