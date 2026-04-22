'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Globe, ShieldCheck, Heart, FileText, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function FCRAFEMARegistrationPage() {
  const data = {
    title: 'FCRA / FEMA Registration',
    description: 'Enable your NGO to receive foreign donations legally under FCRA. Ensure all foreign exchange transactions comply with FEMA regulations.',
    heroBadges: ['MHA Regulated FCRA', 'RBI Regulated FEMA', '60–90 Days'],
    introTitle: 'What are FCRA and FEMA?',
    introContent: (
      <p>FCRA (Foreign Contribution Regulation Act, 2010) is a central act that regulates the acceptance and utilization of foreign contributions by NGOs, associations, and individuals. Any NGO wishing to receive donations from foreign sources must obtain FCRA registration from the Ministry of Home Affairs (MHA). FEMA (Foreign Exchange Management Act, 1999) governs all foreign exchange transactions in India — imports, exports, remittances, and foreign investments. Businesses and individuals must comply with FEMA rules for any transaction involving foreign currency.</p>
    ),
    detailsTitle: 'Why FCRA & FEMA Compliance Matters',
    details: [
      { title: 'Legal Foreign Funding', desc: 'Without FCRA, receiving any foreign donation — even small amounts — is a criminal offense.', icon: ShieldCheck },
      { title: 'Unlock International Grants', desc: 'FCRA opens access to international foundations, embassies, and bilateral aid programs.', icon: Globe },
      { title: 'FEMA Business Compliance', desc: 'Businesses must comply with FEMA for import payments, export proceeds, and FDI transactions.', icon: FileText },
      { title: 'Avoid Heavy Penalties', desc: 'FCRA violations carry imprisonment up to 5 years; FEMA violations carry fines up to 3x the amount.', icon: Heart },
    ],
    requirements: [
      'FCRA: NGO registered for 3+ years with a proven track record', 'FCRA: Minimum ₹10 Lakhs spent on stated objectives in last 3 years',
      'FCRA: 12A registration and DARPAN registration mandatory', 'FCRA: No political nature of activities',
      'FEMA: Applicable to all businesses with foreign currency transactions', 'FEMA: Compliance with RBI guidelines on current and capital account transactions',
      'SBI FCRA account at SBI New Delhi main branch (mandatory post-2020)', 'Annual FCRA return (Form FC-4) filing',
    ],
    processTitle: 'How to Apply for FCRA Registration',
    processIntro: 'FCRA registration is applied online through the FCRA portal (fcraonline.nic.in) of the Ministry of Home Affairs.',
    processSteps: [
      { title: 'Register on DARPAN Portal', desc: 'Mandatory to first register on the NITI Aayog DARPAN portal and obtain a Unique ID before FCRA application.', icon: UserCheck },
      { title: 'Open SBI FCRA Account', desc: 'Open a dedicated FCRA account at SBI main branch, New Delhi (this is mandatory for all FCRA registrations post-2020).', icon: FileSearch },
      { title: 'Prepare FCRA Application (Form FC-3)', desc: 'Fill Form FC-3A (new registration) on the FCRA portal with NGO details, activities, track record, and bank details.', icon: Globe },
      { title: 'Upload Supporting Documents', desc: 'Attach registration certificate, audited accounts, 12A/80G certificates, annual reports, and police verification forms.', icon: CheckCircle2 },
      { title: 'MHA Background Verification', desc: 'MHA conducts thorough background verification of the NGO, trustees, and activities. Intelligence Bureau may also conduct a check.', icon: FileCheck },
      { title: 'FCRA Registration Certificate', desc: 'MHA issues FCRA Registration Certificate valid for 5 years, renewable before expiry.', icon: FileCheck },
    ],
    processOutro: 'FCRA registration is a thorough process taking 60–90 days or more. MHA scrutinizes applications very carefully.',
    documents: [
      { category: 'NGO Documents', list: ['Registration Certificate', '12A and 80G certificates', 'DARPAN Unique ID', 'Audited accounts (last 3 years)'] },
      { category: 'Activity Proof', list: ['Annual activity reports', 'Expenditure on charitable activities (last 3 years)', 'Photographs of activities'] },
      { category: 'Bank & Office', list: ['SBI FCRA account details', 'Office address proof', 'PAN of NGO and key trustees'] },
    ],
    compliance: [
      { title: 'Annual FC-4 Return', desc: 'File Form FC-4 (annual FCRA return) within 9 months of financial year end on the FCRA portal.' },
      { title: '5-Year Renewal', desc: 'FCRA registration must be renewed (Form FC-3C) at least 6 months before expiry.' },
      { title: 'Separate FCRA Account', desc: 'All foreign contributions must be received only in the designated SBI FCRA bank account — mixing with other accounts is prohibited.' },
      { title: 'Utilization Reporting', desc: 'All foreign funds must be utilized for the stated objectives and reported in FC-4. Prior permission required for transfer to other organizations.' },
    ],
    faqs: [
      { q: 'Can any NGO receive foreign donations without FCRA?', a: 'No. Receiving foreign contributions without FCRA registration is a criminal offense under the FCRA, 2010, punishable with imprisonment and fines.' },
      { q: 'What is the difference between FCRA Registration and Prior Permission?', a: 'FCRA Registration allows recurring foreign contributions. Prior Permission is a one-time approval for receiving a specific foreign contribution for a specific purpose, used by new NGOs (< 3 years old).' },
      { q: 'Can an FCRA-registered NGO use funds for any purpose?', a: 'No. Foreign funds must be used only for the specific purpose mentioned in the FCRA registration. Funds cannot be used for political activities or diverted to other organizations without prior approval.' },
      { q: 'What is FEMA compliance for a company?', a: 'Companies must comply with FEMA for import payments (advance payment, DA/DP), export realization (within 9 months), FDI reporting, and overseas remittances. Violations attract RBI penalties.' },
      { q: 'How often must FCRA accounts be reported?', a: 'The FC-4 annual return must be filed within 9 months of the end of the financial year (i.e., by December 31st). Additionally, any receipt of foreign contribution must be reported within 48 hours on the FCRA portal.' },
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
