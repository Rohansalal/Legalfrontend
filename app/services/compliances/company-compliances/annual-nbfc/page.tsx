import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';

export const metadata: Metadata = {
  title: 'Annual Compliances for NBFC | Legal Door',
  description:
    'NBFC annual compliances under RBI Master Directions and Companies Act — XBRL filings, statutory returns (ALM, NBS), audit, ROC filings and prudential norms.',
  keywords: [
    'NBFC annual compliance',
    'NBFC statutory returns',
    'ALM return NBFC',
    'NBS-1 NBS-2',
    'NBFC RBI compliance',
    'NBFC ROC filing',
    'XBRL filing NBFC',
  ],
  openGraph: {
    title: 'Annual Compliances for NBFC',
    description: 'End-to-end NBFC compliance under RBI and Companies Act.',
    type: 'website',
    siteName: 'Legal Door',
  },
};

export default function AnnualNBFCPage() {
  return (
    <LeafServicePage
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compliances', href: '/services/compliances' },
        { name: 'Company Compliances', href: '/services/compliances/company-compliances' },
        { name: 'Annual Compliances for NBFC' },
      ]}
      title="Annual Compliances for NBFC"
      description="Non-Banking Financial Companies (NBFCs) face dual regulatory regime — RBI under various Master Directions and MCA under Companies Act, 2013. Annual compliance involves multiple statutory returns, audits, prudential reporting and XBRL filings."
      overview="NBFC compliance is among the most demanding in Indian corporate landscape. Beyond regular Companies Act compliance (annual filings, board / general meetings, audited financials), NBFCs must comply with RBI Master Directions covering capital adequacy, asset classification, provisioning, leverage ratio, KYC / AML, fair practices, IT framework and risk management.

Statutory returns include ALM (Asset-Liability Management) returns (NBS-ALM1, NBS-ALM2), Branch Information Returns (NBS-2), Important Financial Parameters (NBS-1), Returns on Sources & Application of Funds, Statutory Auditors\' Certificate (SAC), Adverse Audit Comments and various event-based filings (changes in shareholding, directors, premises). Reporting categories vary by NBFC type — NBFC-D, NBFC-ND, NBFC-MFI, NBFC-Factor, NBFC-IFC, etc.

Our team handles the full annual compliance calendar — coordinating between auditor, company secretary, and regulatory filings — to ensure no return is missed and no penalty is incurred. We also support Statutory Auditors\' Certificate (SAC), Adverse Audit Comments responses and RBI inspection / audit defence."
      whyChooseUs={[
        { title: 'NBFC Specialist Team', desc: 'CAs and CSs with NBFC compliance focus — not generalists.' },
        { title: 'Calendar-Driven Delivery', desc: 'Quarterly compliance calendar with owner assignment and SLA tracking.' },
        { title: 'XBRL Filing Capability', desc: 'XBRL preparation and validation for AOC-4 NBFC and other XBRL returns.' },
        { title: 'Inspection Defence', desc: 'RBI on-site / off-site inspection responses and remedial action plans.' },
      ]}
      keyPoints={[
        'NBS-1 — Important Financial Parameters (annual)',
        'NBS-2 — Branch Information (quarterly)',
        'NBS-ALM1 / ALM2 — Asset-Liability Management',
        'Statutory Auditors\' Certificate (SAC)',
        'Adverse Audit Comments (AAC)',
        'AOC-4 NBFC (XBRL) — financial statements',
        'MGT-7 — annual return',
        'DPT-3 — return of deposits',
        'CIC reporting (CRILC, fraud reporting)',
        'KYC / AML / FATCA / CRS compliance',
        'IT Risk and IS Audit',
        'Capital adequacy (CRAR) and leverage ratio reporting',
        'Fair Practices Code compliance',
        'Annual report disclosures',
      ]}
      process={[
        { title: 'Compliance Calendar', desc: 'Identify all applicable RBI returns + Companies Act filings for your NBFC type and size.' },
        { title: 'Periodic Returns', desc: 'Monthly / quarterly / annual returns prepared and filed on COSMOS / XBRL platforms.' },
        { title: 'Annual Audit', desc: 'Coordinate with statutory auditor for SAC, AAC and audited financials.' },
        { title: 'Board & General Meetings', desc: 'Convene meetings; minutes drafted; resolutions filed.' },
        { title: 'ROC Filings', desc: 'AOC-4 NBFC (XBRL), MGT-7, DPT-3 within statutory timelines.' },
      ]}
      documents={[
        'Audited financial statements',
        'Statutory Auditors\' Report and SAC',
        'Board minutes and resolutions',
        'KYC / AML policies and updates',
        'IT and risk management policies',
        'Branch and personnel data',
        'Loan / deposit / asset classification details',
      ]}
      statutoryRefs={[
        { name: 'RBI Master Direction — NBFC-Systematically Important Non-Deposit Taking Company', desc: 'Prudential norms for NBFC-ND-SI.' },
        { name: 'RBI Master Direction — Non-Banking Financial Company-Non-Systemically Important Non-Deposit Taking Company', desc: 'For smaller NBFCs.' },
        { name: 'Companies Act, 2013', desc: 'Statutory filings, board / general meetings, audit.' },
        { name: 'RBI Scale Based Regulation (SBR), 2022', desc: 'NBFC categorization into Base, Middle, Upper, Top Layer.' },
      ]}
      pitfalls={[
        { title: 'Missing RBI Returns', desc: 'RBI returns have specific due dates; missing attracts compounding and supervisory action.' },
        { title: 'Wrong NBFC Categorization', desc: 'Compliance varies by category (NBFC-D vs ND, ICC vs MFI). Wrong categorization triggers wrong filings.' },
        { title: 'CRAR / Leverage Below Norms', desc: 'Falling below CRAR norms invites severe RBI action including business restrictions.' },
        { title: 'KYC / AML Lapses', desc: 'KYC / AML deficiencies are RBI inspection findings; significant fines now common.' },
      ]}
      faqs={[
        { q: 'How is NBFC compliance different from regular companies?', a: 'NBFCs face additional RBI compliance — periodic returns, prudential norms, capital adequacy, KYC / AML, fair practices, IT risk — on top of standard Companies Act compliance.' },
        { q: 'What is the SBR framework?', a: 'Scale Based Regulation (2022) categorizes NBFCs into Base, Middle, Upper and Top Layer based on asset size and significance — different compliance intensity for each.' },
        { q: 'What are the major returns?', a: 'NBS-1 (annual financial), NBS-2 (quarterly branch), NBS-ALM (asset-liability), CIC reporting, KYC reports, fraud reporting and audit-related filings.' },
        { q: 'Are there penalties for non-compliance?', a: 'Yes — RBI compounding fees, supervisory action, certificate cancellation in extreme cases. MCA penalties under Companies Act for ROC defaults.' },
      ]}
      relatedServices={[
        { name: 'NBFC Registration', href: '/services/business-registration/company-registration/nbfc-registration' },
        { name: 'Annual Compliances — Pvt. Ltd.', href: '/services/compliances/company-compliances/annual-pvt-ltd' },
        { name: 'CA Audit & Report', href: '/services/compliances/closure-convert-others/ca-audit-report' },
        { name: 'Banking Law & Compliances', href: '/services/lawyer-services/corporate-services/banking-law' },
      ]}
    />
  );
}
