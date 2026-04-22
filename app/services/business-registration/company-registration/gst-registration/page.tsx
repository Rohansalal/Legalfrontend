'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Calculator, ShieldCheck, Zap, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck, Building2 } from 'lucide-react';

export default function GSTRegistrationPage() {
  const data = {
    title: 'GST Registration for Company & Firm',
    description: 'Mandatory GST registration for businesses with turnover exceeding ₹20 Lakhs (₹10L in special category states). Get your GSTIN in 3–5 working days.',
    heroBadges: ['Mandatory for ₹20L+ Turnover', '3–5 Days Process', 'Input Tax Credit Benefits'],
    introTitle: 'What is GST Registration?',
    introContent: (
      <p>Goods and Services Tax (GST) is a unified indirect tax levied on supply of goods and services across India. Any business with an aggregate turnover exceeding ₹20 Lakhs per year (₹10 Lakhs for special category states) must mandatorily register under GST. E-commerce operators, inter-state suppliers, and certain other businesses must register regardless of turnover. A GSTIN (GST Identification Number) — a 15-digit unique number — is issued upon successful registration.</p>
    ),
    detailsTitle: 'Why GST Registration is Critical',
    details: [
      { title: 'Legal Compliance', desc: 'Avoid penalties up to ₹25,000 and prosecution for non-registration after crossing threshold.', icon: ShieldCheck },
      { title: 'Input Tax Credit', desc: 'Claim credit on GST paid on purchases, reducing your overall tax outflow significantly.', icon: Calculator },
      { title: 'Inter-State Trade', desc: 'GSTIN is mandatory for selling goods or services across state borders.', icon: Globe },
      { title: 'Business Credibility', desc: 'GSTIN on invoices increases trust with clients, especially corporate buyers.', icon: Building2 },
    ],
    requirements: [
      'PAN card of business / proprietor / partners / directors', 'Aadhaar card of authorized signatory',
      'Proof of business registration (COI / Partnership Deed)', 'Bank account statement / cancelled cheque',
      'Address proof of business premises', 'Electricity bill / Rent agreement',
      'Digital Signature (for companies)', 'Letter of Authorization for signatory',
    ],
    processTitle: 'GST Registration Process',
    processIntro: 'GST registration is done on the GSTN portal (gst.gov.in) and is fully online.',
    processSteps: [
      { title: 'Generate TRN (Temporary Reference Number)', desc: 'Submit Part A of REG-01 with PAN, mobile, and email. A TRN is generated for completing the application.', icon: UserCheck },
      { title: 'Fill Part B of GST REG-01', desc: 'Login with TRN and fill complete business details, promoter info, and business nature.', icon: FileSearch },
      { title: 'Upload Supporting Documents', desc: 'Upload identity proof, address proof, bank details, and business registration certificate.', icon: CheckCircle2 },
      { title: 'Application Review by Tax Officer', desc: 'GST officer reviews within 7 working days. May raise queries via REG-03 if clarification needed.', icon: FileCheck },
      { title: 'GSTIN Issued', desc: 'Upon approval, GSTIN and GST Registration Certificate (REG-06) are issued instantly on the portal.', icon: Globe },
    ],
    processOutro: 'GST registration is typically completed in 3–5 working days for straightforward applications. Complex cases with queries may take up to 15 days.',
    documents: [
      { category: 'Business Identity', list: ['PAN of Business / Entity', 'PAN of Proprietor / Partners / Directors', 'Aadhaar of Authorized Signatory'] },
      { category: 'Business Address', list: ['Electricity bill (latest)', 'Rental Agreement (if rented)', 'Own property: property tax receipt or deed'] },
      { category: 'Bank & Registration', list: ['Cancelled cheque or bank statement', 'Certificate of Incorporation / Partnership Deed', 'Board Resolution / Authorization Letter'] },
    ],
    compliance: [
      { title: 'Monthly / Quarterly GST Returns', desc: 'File GSTR-1 (outward supplies) monthly or quarterly and GSTR-3B (summary return) monthly.' },
      { title: 'Annual Return (GSTR-9)', desc: 'File annual consolidated return by December 31st each year.' },
      { title: 'E-Invoicing', desc: 'Mandatory for businesses with turnover exceeding ₹5 Crores — generate IRN for every invoice.' },
      { title: 'Input Tax Credit Reconciliation', desc: 'Reconcile ITC claimed in GSTR-3B with GSTR-2A/2B monthly to avoid notices.' },
    ],
    faqs: [
      { q: 'Is GST registration mandatory for all businesses?', a: 'No. GST is mandatory only if your aggregate turnover exceeds ₹20 Lakhs (₹10 Lakhs in special category states). However, inter-state sellers, e-commerce sellers, and certain other businesses must register regardless of turnover.' },
      { q: 'Can I have multiple GSTINs?', a: 'Yes. If your business operates in multiple states, you need a separate GSTIN for each state. Within a state, one GSTIN per PAN is issued.' },
      { q: 'What is a composite scheme?', a: 'Small businesses with turnover up to ₹1.5 Crores can opt for the composition scheme and pay GST at a flat rate (1–5%) instead of regular rates.' },
      { q: 'What happens if I don't register for GST?', a: 'Non-registration attracts a penalty of 10% of tax due or ₹10,000 (whichever is higher). For deliberate evasion, penalties can be 100% of tax.' },
      { q: 'How long is the GST registration certificate valid?', a: 'GST registration is valid until it is cancelled. Regular taxpayers do not need to renew registration.' },
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
