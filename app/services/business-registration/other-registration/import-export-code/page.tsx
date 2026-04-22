'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Globe, ShieldCheck, Zap, TrendingUp, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function ImportExportCodePage() {
  const data = {
    title: 'Import Export Code (IEC) Registration',
    description: "Mandatory 10-digit code issued by DGFT for any business importing or exporting goods and services from India. Get your IEC in 3–5 working days.",
    heroBadges: ['DGFT Issued', 'Lifetime Validity', '3–5 Days'],
    introTitle: 'What is Import Export Code (IEC)?',
    introContent: (
      <p>The Import Export Code (IEC) is a 10-digit business identification number mandatory for every business entity that imports or exports goods and services to/from India. It is issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce. Without an IEC, customs authorities will not allow clearance of any shipment. The IEC is linked to your PAN and has lifetime validity with no renewal requirement. Individuals, companies, LLPs, partnership firms, and proprietorships can all obtain IEC.</p>
    ),
    detailsTitle: 'Why You Need IEC',
    details: [
      { title: 'Customs Clearance', desc: 'Mandatory for clearing import/export shipments through Indian customs.', icon: Globe },
      { title: 'Bank Payments', desc: 'Required for receiving foreign payments via SWIFT and sending payments for imports.', icon: ShieldCheck },
      { title: 'Export Benefits', desc: 'Required to claim export incentives, drawbacks, and MEIS/RODTEP benefits.', icon: TrendingUp },
      { title: 'Lifetime Validity', desc: 'IEC never expires and requires no annual renewal — one-time registration.', icon: Zap },
    ],
    requirements: [
      'PAN Card of business entity', 'Aadhaar Card of authorized signatory',
      'Current bank account in business name', 'Cancelled cheque or bank certificate',
      'Digital Signature Certificate (Class 2/3)', 'Company Registration / Partnership Deed / GST Certificate',
      'Address proof of business', 'Email ID and mobile number',
    ],
    processTitle: 'How to Get IEC Registration',
    processIntro: 'IEC application is filed on the DGFT portal (dgft.gov.in). The process is 100% online.',
    processSteps: [
      { title: 'Register on DGFT Portal', desc: 'Create an account on dgft.gov.in with business PAN and email ID.', icon: UserCheck },
      { title: 'Fill ANF-2A Application', desc: 'Complete the IEC application form with business details, director/proprietor information, and bank details.', icon: FileSearch },
      { title: 'Upload Documents', desc: 'Upload scanned copies of PAN card, address proof, cancelled cheque/bank certificate, and DSC.', icon: Globe },
      { title: 'Pay Application Fee', desc: 'Pay ₹500 application fee via online payment on the DGFT portal.', icon: CheckCircle2 },
      { title: 'IEC Issued', desc: 'DGFT issues the 10-digit IEC number instantly or within 2–3 working days. Certificate downloadable from portal.', icon: FileCheck },
    ],
    processOutro: 'IEC registration is typically completed in 3–5 working days. DGFT processes the application automatically for most cases.',
    documents: [
      { category: 'Business Identity', list: ['PAN Card of Company/LLP/Firm', 'Certificate of Incorporation / GST Certificate', 'Address proof of registered office'] },
      { category: 'Authorized Signatory', list: ['Aadhaar Card', 'PAN Card', 'Digital Signature Certificate (DSC)'] },
      { category: 'Bank Details', list: ['Cancelled cheque of current account', 'Bank certificate with account details', 'IFSC code'] },
    ],
    compliance: [
      { title: 'Annual Update on DGFT Portal', desc: 'Although IEC is lifetime valid, businesses must update/confirm their IEC details annually on the DGFT portal to keep it active.' },
      { title: 'RBI Reporting', desc: 'Payments received in foreign currency must be reported to RBI through your bank within prescribed timelines.' },
      { title: 'Export Documentation', desc: 'Maintain shipping bills, invoices, packing lists, and export realization certificates for each export transaction.' },
      { title: 'DGFT Schemes', desc: 'Avail RODTEP, Advance Authorization, EPCG and other export promotion schemes using your IEC number.' },
    ],
    faqs: [
      { q: 'Is IEC required for service exports?', a: 'Yes, IEC is required for service exports as well, particularly when receiving foreign remittance for services provided to overseas clients.' },
      { q: 'Can an individual get IEC?', a: 'Yes, individuals can get IEC for personal business activities. However, IEC is not required for importing goods for personal use (non-commercial).' },
      { q: 'Is IEC required for e-commerce exports?', a: 'Yes. For exporting goods through e-commerce platforms to foreign buyers, IEC registration is mandatory.' },
      { q: 'Can I have multiple IECs?', a: 'No. Only one IEC is issued per PAN. If you have multiple businesses under the same PAN, they all operate under the same IEC.' },
      { q: 'What is the fee for IEC registration?', a: 'The application fee is ₹500, payable online on the DGFT portal.' },
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
