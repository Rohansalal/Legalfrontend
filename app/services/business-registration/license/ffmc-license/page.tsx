'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Globe, ShieldCheck, TrendingUp, Building2, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function FFMCLicensePage() {
  const data = {
    title: 'FFMC License',
    description: 'Full Fledged Money Changer (FFMC) license from RBI to purchase foreign currency from residents and non-residents and sell to residents for private/business travel.',
    heroBadges: ['RBI Authorized', 'Foreign Exchange Dealer', '60–90 Days'],
    introTitle: 'What is an FFMC License?',
    introContent: (
      <p>A Full Fledged Money Changer (FFMC) is authorized by the Reserve Bank of India (RBI) under the Foreign Exchange Management Act (FEMA), 1999 to deal in foreign currency notes, coins, and travelers' cheques. Unlike an Authorized Dealer (Bank), an FFMC has a limited scope — it can purchase foreign currency from public (tourists, travelers) and sell foreign currency to residents for travel purposes only. FFMC is the most accessible foreign exchange license for private businesses. A single branch license requires minimum net owned funds of ₹25 Lakhs.</p>
    ),
    detailsTitle: 'Types of FFMC Authorization',
    details: [
      { title: 'Single Branch FFMC', desc: 'For one branch location. Minimum NOF ₹25 Lakhs. Ideal for single-location forex businesses.', icon: Building2 },
      { title: 'Multiple Branch FFMC', desc: 'For chain of forex outlets. Minimum NOF ₹50 Lakhs. Can operate multiple branches.', icon: Globe },
      { title: 'Purchase Only', desc: 'Buy foreign currency from the public — tourists can exchange foreign notes for Indian Rupees.', icon: ShieldCheck },
      { title: 'Buy & Sell Authorization', desc: 'Full FFMC can both buy and sell foreign currency for approved purposes like travel.', icon: TrendingUp },
    ],
    requirements: [
      'Company or Firm registered in India', 'Minimum Net Owned Funds (NOF) of ₹25 Lakhs',
      'PAN Card of company and directors/partners', 'Clean CIBIL records for all directors',
      'Audited balance sheets for last 3 years', 'Business plan for forex operations',
      'Premises with safe/vault for currency storage', 'No criminal record for promoters',
    ],
    processTitle: 'How to Get FFMC License from RBI',
    processIntro: 'FFMC license applications are submitted to the Regional Office of RBI in the state where the business is located.',
    processSteps: [
      { title: 'Meet Financial Eligibility', desc: 'Ensure minimum NOF of ₹25L (single branch) or ₹50L (multiple branches) reflected in audited balance sheet.', icon: UserCheck },
      { title: 'Prepare Business Plan', desc: 'Draft business plan covering target locations, anticipated transaction volumes, and compliance procedures.', icon: FileSearch },
      { title: 'Submit Application to RBI', desc: 'File application to the Regional Office of RBI with all financial documents and company details.', icon: Globe },
      { title: 'RBI Due Diligence', desc: 'RBI verifies all documents, checks promoter backgrounds, and may conduct an inspection of proposed premises.', icon: CheckCircle2 },
      { title: 'FFMC Authorization Letter', desc: 'RBI issues the FFMC Authorization Letter specifying the branch(es) and permitted activities.', icon: FileCheck },
    ],
    processOutro: 'FFMC license takes 60–90 days. RBI scrutinizes financial soundness and promoter background very carefully.',
    documents: [
      { category: 'Company Documents', list: ['Certificate of Incorporation', 'MOA & AOA', 'PAN Card', 'Audited balance sheets (last 3 years)'] },
      { category: 'Promoter Documents', list: ['KYC documents of all directors/partners', 'Net worth certificate from CA', 'CIBIL reports', 'Banker\'s references'] },
      { category: 'Business Premises', list: ['Premises ownership/rental proof', 'Safe/vault specifications', 'Security arrangements', 'Location details'] },
    ],
    compliance: [
      { title: 'Monthly RBI Returns', desc: 'Submit monthly returns on forex transactions to RBI Regional Office.' },
      { title: 'Transaction Records', desc: 'Maintain record of every forex transaction with customer identification (Aadhaar/Passport) for 10 years.' },
      { title: 'KYC & AML Compliance', desc: 'Strictly follow KYC and AML guidelines — report suspicious transactions to FIU-India.' },
      { title: 'Annual Renewal', desc: 'FFMC authorization must be renewed annually upon submission of audited accounts and compliance reports.' },
    ],
    faqs: [
      { q: 'What is the difference between FFMC and Authorized Dealer?', a: 'Authorized Dealers (Banks) can deal in the full range of forex transactions. FFMCs can only purchase foreign currency from public and sell for travel — a more limited scope.' },
      { q: 'Can an FFMC deal in crypto or digital currencies?', a: 'No. FFMCs are authorized only for physical foreign currency notes, coins, and travelers\' cheques. Crypto transactions are outside FFMC scope.' },
      { q: 'What is the minimum transaction limit?', a: 'There is no minimum, but per RBI guidelines, transactions above USD 10,000 require additional documentation and reporting.' },
      { q: 'Can I open multiple branches with one FFMC license?', a: 'Single branch FFMC covers only one location. For multiple branches, you need Multiple Branch FFMC authorization with higher NOF of ₹50 Lakhs.' },
      { q: 'Is FFMC license transferable?', a: 'No. The authorization is entity-specific and branch-specific. Any new branch or entity change requires fresh RBI approval.' },
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
