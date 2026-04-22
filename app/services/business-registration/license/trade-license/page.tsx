'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Building2, ShieldCheck, Zap, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function TradeLicensePage() {
  const data = {
    title: 'Trade License',
    description: 'Municipal trade license to legally operate any trade or business from a premises. Issued by local municipal authority — mandatory for all commercial establishments in India.',
    heroBadges: ['Municipal Authority', 'City-Specific', '7–15 Days'],
    introTitle: 'What is a Trade License?',
    introContent: (
      <p>A Trade License is a legal permission granted by the local municipal authority (Municipal Corporation, Municipality, or Gram Panchayat) to carry on a specific trade or business from a premises within its jurisdiction. It ensures that the business activity does not create nuisance, health hazards, or violate zoning regulations in the area. It is one of the first licenses a business should obtain — banks, GST registration, and other licenses often require a valid trade license as proof of business establishment.</p>
    ),
    detailsTitle: 'Why Trade License is Essential',
    details: [
      { title: 'Mandatory Compliance', desc: 'Operating without a trade license attracts fines and municipal action including business closure.', icon: ShieldCheck },
      { title: 'Bank Account Opening', desc: 'Banks require trade license as proof of business address and legitimacy for current account opening.', icon: Building2 },
      { title: 'GST Registration Support', desc: 'Trade license strengthens your GST registration application as business address proof.', icon: Zap },
      { title: 'Business Credibility', desc: 'Trade license demonstrates compliance with local laws — builds trust with customers and vendors.', icon: Globe },
    ],
    requirements: [
      'Application to local municipal authority', 'Business name and nature of trade/activity',
      'Address of business premises', 'Identity proof of proprietor/partners/directors',
      'Ownership deed or rental agreement of premises', 'No objection from building owner',
      'Previous trade license (for renewal)', 'Fee payment receipt',
    ],
    processTitle: 'How to Get a Trade License',
    processIntro: 'Trade license is obtained from the local Municipal Corporation or municipality. Many cities offer online applications.',
    processSteps: [
      { title: 'Determine Applicable Authority', desc: 'Identify your local municipal authority — MCGM (Mumbai), BBMP (Bangalore), NDMC (Delhi), etc.', icon: UserCheck },
      { title: 'Fill Application Form', desc: 'Fill the trade license application form online or offline with business details and nature of trade.', icon: FileSearch },
      { title: 'Upload / Submit Documents', desc: 'Attach identity proof, premises proof, rental agreement, and photographs.', icon: Globe },
      { title: 'Pay Municipal Fee', desc: 'Pay the prescribed annual fee (varies by city, type of business, and premises area).', icon: CheckCircle2 },
      { title: 'Inspection (if required)', desc: 'Municipal inspector may visit premises to verify the nature of trade and compliance with zoning rules.', icon: Building2 },
      { title: 'Trade License Certificate', desc: 'Municipal authority issues the trade license. Display prominently at business premises.', icon: FileCheck },
    ],
    processOutro: 'Trade license typically takes 7–15 working days for new applications. Renewals are usually faster (3–7 days).',
    documents: [
      { category: 'Identity Proof', list: ['PAN Card of proprietor/directors', 'Aadhaar Card', 'Passport size photograph'] },
      { category: 'Business Premises', list: ['Rental agreement or ownership deed', 'NOC from landlord', 'Building completion/occupancy certificate'] },
      { category: 'Business Details', list: ['Nature of business / trade', 'List of goods or services', 'List of employees (if applicable)'] },
    ],
    compliance: [
      { title: 'Annual Renewal', desc: 'Trade license must be renewed annually (April 1st typically) by paying the renewal fee to the municipal authority.' },
      { title: 'Display Requirements', desc: 'Trade license certificate must be displayed prominently at the main entrance of the business premises.' },
      { title: 'Change Notification', desc: 'Any change in business name, address, or nature of trade must be intimated to the municipal authority.' },
      { title: 'Compliance with Zoning', desc: 'Business activities must comply with city zoning regulations — residential areas may have restrictions.' },
    ],
    faqs: [
      { q: 'Is trade license required for home-based businesses?', a: 'Yes, in many cities home-based businesses also require a trade license. However, for purely online/service businesses without clients visiting the premises, some municipalities may have relaxed norms.' },
      { q: 'What is the fee for a trade license?', a: 'Trade license fees vary by city, type of trade, number of employees, and premises area. Typical range: ₹500–₹10,000 per year for small businesses.' },
      { q: 'Can I operate without a trade license?', a: 'Municipal authorities can impose fines, seal premises, and take legal action against businesses operating without a valid trade license.' },
      { q: 'Is trade license the same as Shop & Establishment License?', a: 'No. Trade license is issued by the municipal authority for any trade/business. Shop & Establishment license is issued under state labour laws and regulates employment conditions in commercial establishments.' },
      { q: 'How many trade licenses does a business need?', a: 'One trade license per business premises. If you have branches in different locations, each location needs a separate trade license from that area\'s municipal authority.' },
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
