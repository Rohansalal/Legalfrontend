'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Building2, Rocket, ShieldCheck, Zap, UserCheck, Globe, FileSearch, PenTool, CheckCircle2, FileCheck } from 'lucide-react';

export default function PrivateLimitedCompanyPage() {
  const data = {
    title: 'Private Limited Company Registration',
    description: "India's most popular business structure for startups. Enjoy limited liability, separate legal entity status, and easy access to venture capital funding.",
    heroBadges: ['100% Digital Process', 'Govt. Certified Experts', '7–10 Days Turnaround'],
    introTitle: 'What is a Private Limited Company?',
    introContent: (
      <p>A Private Limited Company (Pvt Ltd) is a separate legal entity registered under the Companies Act, 2013. It offers limited liability to its shareholders, restricts share transfers, and is the preferred structure for startups and SMEs seeking credibility, investment, and operational control. Minimum 2 directors and 2 shareholders are required.</p>
    ),
    detailsTitle: 'Key Benefits of Private Limited Company',
    details: [
      { title: 'Limited Liability', desc: 'Personal assets of shareholders are fully protected from business debts and losses.', icon: ShieldCheck },
      { title: 'Separate Legal Entity', desc: 'The company is a distinct person in the eyes of law — can own assets, sue, and be sued.', icon: Building2 },
      { title: 'Raise Funding', desc: 'Most preferred structure for VCs, Angel Investors, and institutional lenders.', icon: Rocket },
      { title: 'Perpetual Succession', desc: 'Company continues to exist irrespective of change in ownership or death of directors.', icon: Zap },
    ],
    requirements: [
      'Minimum 2 Directors (max 15)', 'Minimum 2 Shareholders (max 200)',
      'At least 1 Indian Resident Director', 'Unique company name (SPICe+ approval)',
      'Registered Office address in India', 'Digital Signature Certificate (DSC)',
      'Director Identification Number (DIN)', 'No minimum paid-up capital required',
    ],
    processTitle: 'How to Register a Private Limited Company',
    processIntro: 'Registration is governed by the Companies Act, 2013 and filed through the MCA (Ministry of Corporate Affairs) portal.',
    processSteps: [
      { title: 'Obtain Digital Signature Certificate (DSC)', desc: 'All proposed directors must obtain a Class 3 DSC for electronic signing of MCA forms.', icon: UserCheck },
      { title: 'Name Approval via SPICe+ Part A', desc: 'Submit up to 2 preferred company names through MCA SPICe+ for approval.', icon: FileSearch },
      { title: 'Prepare Incorporation Documents', desc: 'Draft Memorandum of Association (MOA), Articles of Association (AOA), and collect KYC documents.', icon: PenTool },
      { title: 'File SPICe+ Part B with AGILE-PRO', desc: 'Submit the full incorporation form with director details, share capital, and registered office.', icon: Globe },
      { title: 'PAN, TAN & Bank Account', desc: 'PAN and TAN are automatically allotted. Open a current bank account in the company name.', icon: CheckCircle2 },
      { title: 'Certificate of Incorporation', desc: 'RoC issues the COI with Corporate Identification Number (CIN) upon approval.', icon: FileCheck },
    ],
    processOutro: 'The entire registration process typically takes 7–10 working days, subject to MCA processing time and document completeness.',
    documents: [
      { category: 'Director Identity', list: ['PAN Card of all Directors', 'Aadhaar Card of all Directors', 'Passport size photographs', 'Voter ID / Passport / Driving Licence'] },
      { category: 'Address Proof', list: ['Bank statement (latest 2 months)', 'Electricity / Gas bill', 'Mobile / Telephone bill'] },
      { category: 'Registered Office', list: ['Rental Agreement (if rented)', 'Property deed (if owned)', 'Latest utility bill', "Owner's NOC"] },
    ],
    compliance: [
      { title: 'Annual ROC Filing', desc: 'File AOC-4 (financials) and MGT-7 (annual return) every year with MCA.' },
      { title: 'Statutory Audit', desc: 'Appoint a Chartered Accountant auditor within 30 days of incorporation.' },
      { title: 'Board Meetings', desc: 'Hold at least 4 board meetings per year with proper minutes.' },
      { title: 'Income Tax Return', desc: 'File ITR-6 annually by September 30th. Maintain books of accounts.' },
    ],
    faqs: [
      { q: 'How many directors are required for a Pvt Ltd?', a: 'Minimum 2 directors are required. At least one must be a resident of India (stayed 182+ days in the previous year).' },
      { q: 'Is physical presence required?', a: 'No. The entire process is 100% online. You can register from anywhere in India.' },
      { q: 'Can a foreigner be a director?', a: 'Yes. Foreign nationals can be directors. However, at least one director must be an Indian resident.' },
      { q: 'What is the minimum capital required?', a: 'There is no minimum paid-up capital requirement as of 2015. You can start with even ₹1.' },
      { q: 'How long does registration take?', a: 'Typically 7–10 working days from the date of document submission, subject to MCA approval.' },
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
