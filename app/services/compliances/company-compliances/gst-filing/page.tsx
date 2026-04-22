'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function GSTFilingPage() {
  const data = {
    title: 'GST Return Filing Services',
    description:
      'End-to-end GST return filing — GSTR-1, GSTR-3B, GSTR-9, GSTR-9C, ITC reconciliation, and late fee minimization. Expert GST compliance for businesses, traders, manufacturers, and service providers across India.',
    heroBadges: ['GSTR-1 & GSTR-3B Experts', 'ITC Reconciliation', 'Zero Late Fees'],
    introTitle: 'What is GST Return Filing?',
    introContent: (
      <p>
        Every GST-registered business in India must file regular GST returns as prescribed under the Central Goods and Services Tax (CGST) Act, 2017. The primary monthly/quarterly returns are GSTR-1 (outward supplies), GSTR-3B (summary return with tax payment), and for composition dealers, GSTR-4. Annual returns include GSTR-9 (annual return) and GSTR-9C (reconciliation statement) for taxpayers with aggregate turnover above ₹5 crore. Non-filing or late filing of GST returns attracts a late fee of ₹50 per day (₹20 per day for nil return) with a maximum cap of ₹10,000 per return. Additionally, interest at 18% per annum is levied on unpaid tax liability. ITC (Input Tax Credit) reconciliation between GSTR-2B and purchase records is critical to ensure there is no excess ITC claim that may attract departmental notices.
      </p>
    ),
    detailsTitle: 'GST Return Types & Obligations',
    details: [
      {
        title: 'GSTR-1 — Outward Supply',
        desc: 'Monthly (turnover above ₹5 crore) or quarterly (QRMP scheme) filing of all outward supplies — invoice-wise for B2B and summary for B2C.',
        icon: FileText,
      },
      {
        title: 'GSTR-3B — Summary Return',
        desc: 'Monthly/quarterly summary return declaring total outward supplies, ITC claimed, and net tax paid. Due on 20th of the following month.',
        icon: TrendingUp,
      },
      {
        title: 'GSTR-9 & GSTR-9C Annual Return',
        desc: 'Annual consolidation of all monthly returns. GSTR-9C is a reconciliation of GSTR-9 with audited financial statements, mandatory for turnover above ₹5 crore.',
        icon: ShieldCheck,
      },
      {
        title: 'ITC Reconciliation',
        desc: 'Reconcile Input Tax Credit claimed in GSTR-3B with GSTR-2B auto-populated data. Identify mismatches to avoid ITC reversals and departmental action.',
        icon: Scale,
      },
    ],
    requirements: [
      'GSTIN (GST Registration Number)',
      'Sales invoices and debit/credit notes for the period',
      'Purchase invoices and import documents',
      'E-way bill details (if applicable)',
      'Bank statements for cross-verification',
      'Previous GSTR-2B for ITC reconciliation',
      'HSN-wise summary of outward and inward supplies',
      'RCM (Reverse Charge) transaction details',
    ],
    processTitle: 'How We Handle Your GST Return Filing',
    processIntro:
      'Our GST experts handle the complete monthly, quarterly, and annual GST compliance cycle with accuracy and on-time filing.',
    processSteps: [
      {
        title: 'Data Collection & Invoice Reconciliation',
        desc: 'Collect all sales and purchase invoices. Reconcile with GSTR-2B auto-populated ITC data. Identify mismatches and resolve with suppliers.',
        icon: FileSearch,
      },
      {
        title: 'Prepare & File GSTR-1',
        desc: 'Upload invoice-wise data for B2B, B2C, exports, and credit notes in GSTR-1 before the due date (11th of following month for monthly filers).',
        icon: UserCheck,
      },
      {
        title: 'Compute Tax Liability & File GSTR-3B',
        desc: 'Calculate net GST liability (output tax minus eligible ITC). Pay any tax due via the GST portal and file GSTR-3B by the 20th of the month.',
        icon: FileCheck,
      },
      {
        title: 'File Annual Return GSTR-9 / GSTR-9C',
        desc: 'Consolidate all monthly returns into GSTR-9 by 31 December. Prepare GSTR-9C reconciliation statement (for eligible taxpayers) certified by CA.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We provide monthly reconciliation reports and flag any ITC mismatches before filing so you never face surprise tax demands.',
    documents: [
      {
        category: 'Sales Documents',
        list: [
          'GST tax invoices issued during the period',
          'Credit notes and debit notes',
          'E-commerce sales data (if applicable)',
        ],
      },
      {
        category: 'Purchase Documents',
        list: [
          'Purchase invoices from GST-registered vendors',
          'Import documents (IGST paid on imports)',
          'RCM invoices (where applicable)',
        ],
      },
      {
        category: 'Compliance Records',
        list: [
          'Previous GSTR-3B filed returns',
          'GSTR-2B auto-generated ITC statement',
          'GST challan payment history',
        ],
      },
    ],
    compliance: [
      {
        title: 'E-Invoicing Compliance',
        desc: 'Businesses with aggregate turnover above ₹5 crore must generate e-invoices through the IRP portal for all B2B transactions. Non-compliance invalidates ITC for buyers.',
      },
      {
        title: 'E-Way Bill for Goods Movement',
        desc: 'Generate e-way bills for consignments of goods exceeding ₹50,000 in value before transportation. Penalties apply for movement without e-way bills.',
      },
      {
        title: 'ITC Reconciliation with GSTR-2B',
        desc: 'ITC can only be claimed up to the amount appearing in GSTR-2B. Excess claims are subject to reversal with interest under Rule 86B and Section 50.',
      },
      {
        title: 'GST Annual Audit',
        desc: 'GSTR-9C (reconciliation statement) must be self-certified for turnover above ₹5 crore. It reconciles annual returns with audited financial statements.',
      },
    ],
    faqs: [
      {
        q: 'What is the due date for GSTR-1 and GSTR-3B?',
        a: 'GSTR-1 is due on the 11th of the following month for monthly filers. GSTR-3B is due on the 20th of the following month. Quarterly filers under QRMP have different dates.',
      },
      {
        q: 'What is the late fee for not filing GST returns?',
        a: 'Late fee is ₹50 per day (₹25 CGST + ₹25 SGST) for returns with tax liability, and ₹20 per day (₹10 CGST + ₹10 SGST) for nil returns, subject to a maximum of ₹10,000 per return.',
      },
      {
        q: 'Is GSTR-9 mandatory for all GST taxpayers?',
        a: 'GSTR-9 is mandatory for regular taxpayers with aggregate annual turnover above ₹2 crore. It has been made optional for those with turnover below ₹2 crore. GSTR-9C is mandatory above ₹5 crore.',
      },
      {
        q: 'What is the QRMP scheme?',
        a: 'The Quarterly Return Monthly Payment (QRMP) scheme allows small taxpayers with annual turnover up to ₹5 crore to file GSTR-1 and GSTR-3B quarterly while paying GST monthly through a fixed amount or self-assessment challan.',
      },
      {
        q: 'What happens if GSTR-1 is not filed?',
        a: 'If GSTR-1 is not filed, the buyer cannot see your invoices in their GSTR-2B and cannot claim Input Tax Credit. This creates a business relationship risk in addition to late fees and penalties.',
      },
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
