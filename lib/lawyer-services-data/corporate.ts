import type { ServiceContent } from '@/components/leaf-service-page';

export const corporateServices: Record<string, ServiceContent> = {
  'insolvency-bankruptcy': {
    title: 'Insolvency & Bankruptcy',
    description:
      'End-to-end advisory and representation under the Insolvency and Bankruptcy Code, 2016 — for creditors, debtors, resolution professionals and resolution applicants.',
    overview:
      'The IBC consolidates and overhauls the resolution framework for corporate, partnership and individual insolvency. We act for financial and operational creditors, corporate debtors, IRPs/RPs and resolution applicants across CIRP, liquidation, voluntary liquidation and pre-pack proceedings before NCLT and NCLAT.',
    keyPoints: [
      'Section 7 / 9 / 10 admissions before NCLT',
      'Resolution plan drafting and CoC negotiation',
      'Liquidation, voluntary liquidation and asset sale',
      'Avoidance applications (preference, undervalued, fraudulent)',
      'Pre-pack insolvency for MSMEs',
      'Cross-border insolvency advisory',
    ],
    process: [
      { title: 'Default & Demand Notice', desc: 'Issue Section 8 notice (operational) or compile NPA records (financial); assess admissibility.' },
      { title: 'NCLT Application', desc: 'File Section 7 / 9 / 10 application with default proof and proposal of IRP.' },
      { title: 'Admission & CIRP', desc: 'On admission, moratorium triggers; CoC constitutes; resolution plans invited.' },
      { title: 'Resolution / Liquidation', desc: 'Approved plan binds all stakeholders; on no-plan, liquidation order is passed.' },
    ],
    documents: [
      'Demand notice and reply (operational creditor)',
      'Loan documents, default records, NPA classification',
      'Books of account and audited financials',
      'Identity and authorization of authorized representative',
      'Proposed IRP consent (Form 2)',
    ],
    faqs: [
      { q: 'What is the threshold for filing under IBC?', a: 'Default of ₹1 crore or more is required to trigger a corporate insolvency resolution process.' },
      { q: 'How long does CIRP take?', a: 'Statutory timeline is 180 days, extendable to 270 days. With litigation, the outer limit including extensions is 330 days.' },
      { q: 'Can the corporate debtor file?', a: 'Yes — Section 10 allows the corporate debtor itself to file for insolvency on its own default.' },
    ],
  },
  'merger-acquisitions': {
    title: 'Merger & Acquisitions',
    description:
      'Strategic legal counsel through every stage of M&A — diligence, deal structuring, regulatory clearance and post-closing integration.',
    overview:
      'M&A transactions require simultaneous management of corporate, tax, regulatory, employment, IP and contract considerations. We advise buyers, sellers, financial sponsors and target companies across share purchase, asset purchase, mergers, demergers, slump sale and joint ventures.',
    keyPoints: [
      'Legal, regulatory and tax due diligence',
      'Deal structuring (share / asset / merger / slump sale)',
      'SPA, SHA, escrow and ancillary agreement drafting',
      'CCI, RBI, SEBI approvals and FEMA compliance',
      'NCLT / Regional Director processes for schemes',
      'Post-closing integration and warranty claims',
    ],
    process: [
      { title: 'Term Sheet', desc: 'Negotiate non-binding term sheet capturing valuation, structure and key conditions.' },
      { title: 'Due Diligence', desc: 'Comprehensive review of corporate records, contracts, IP, litigation, tax and HR.' },
      { title: 'Definitive Agreements', desc: 'Drafting and negotiating SPA / merger scheme / SHA / escrow.' },
      { title: 'Approvals', desc: 'CCI notification, FEMA, sectoral regulators (SEBI, RBI, etc.) and corporate approvals.' },
      { title: 'Closing & Integration', desc: 'Conditions precedent satisfaction, closing and post-closing covenants.' },
    ],
    faqs: [
      { q: 'When is CCI approval required?', a: 'Where the combination crosses asset / turnover thresholds prescribed under the Competition Act, 2002 — pre-closing notification is mandatory.' },
      { q: 'What is the difference between merger and acquisition?', a: 'In a merger, two companies legally combine; in an acquisition, the buyer acquires shares or assets of the target with the target potentially continuing to exist.' },
      { q: 'How long does NCLT scheme approval take?', a: 'Typically 6–9 months from filing the scheme petition, depending on objections and regulatory inputs.' },
    ],
  },
  'ipo-listing': {
    title: 'IPO Listing & Compliances',
    description:
      'Counsel for Initial Public Offerings on BSE, NSE and SME platforms — DRHP drafting, SEBI clearance, listing and post-listing compliance.',
    overview:
      'IPO is a complex multi-stakeholder process involving merchant bankers, registrars, auditors and legal counsel. We advise issuers and selling shareholders through DRHP/RHP drafting, ICDR Regulations compliance, SEBI clearance, marketing, listing and ongoing LODR compliance.',
    keyPoints: [
      'Pre-IPO restructuring and corporate hygiene',
      'DRHP and RHP drafting under ICDR Regulations',
      'SEBI observations and stock exchange in-principle approval',
      'Underwriting, escrow and bankers agreement drafting',
      'Post-listing LODR compliance and reporting',
      'SME Platform IPO (BSE SME / NSE Emerge)',
    ],
    process: [
      { title: 'Readiness Diagnostic', desc: 'Assess corporate structure, financials, regulatory issues and market readiness.' },
      { title: 'DRHP Drafting', desc: 'Draft DRHP with merchant banker; address SEBI observations.' },
      { title: 'Roadshows & RHP', desc: 'Convert DRHP to RHP with pricing band; conduct roadshows.' },
      { title: 'Issue & Listing', desc: 'Bidding, allotment, refunds and listing on stock exchanges.' },
      { title: 'Post-Listing', desc: 'LODR compliance, board independence, related-party transactions and continuous disclosure.' },
    ],
    faqs: [
      { q: 'What is the eligibility for IPO?', a: 'Profitability route requires net tangible assets, profitability and net worth thresholds; QIB route allows companies not meeting these to list.' },
      { q: 'How long does an IPO take?', a: '6–12 months from DRHP drafting to listing, subject to SEBI clearance and market conditions.' },
    ],
  },
  'banking-law': {
    title: 'Banking Law & Compliances',
    description:
      'Regulatory advisory for banks, NBFCs, fintechs and payment system operators — RBI compliance, lending documentation and recovery.',
    overview:
      'Banking and credit are heavily regulated. We counsel banks, NBFCs, ARCs, payment aggregators, NEO banks and fintech platforms on RBI master directions, loan documentation, securitization, securitisation and reconstruction, recovery proceedings and consumer protection.',
    keyPoints: [
      'NBFC registration, fit-and-proper and capital compliance',
      'Master directions on digital lending, KYC, securitization',
      'Lending documentation, security creation and CERSAI registration',
      'SARFAESI Act and DRT recovery proceedings',
      'Payment Aggregator and Payment Gateway licensing',
      'Card networks, prepaid instruments and BBPS advisory',
    ],
    process: [
      { title: 'Regulatory Mapping', desc: 'Map applicable RBI master directions and licensing requirements.' },
      { title: 'Documentation', desc: 'Draft / review lending agreements, security documents, guarantees and TPA.' },
      { title: 'Compliance Calendar', desc: 'Build compliance calendar — returns, audits, board reporting.' },
      { title: 'Recovery & Litigation', desc: 'SARFAESI notice, DRT proceedings and execution as required.' },
    ],
    faqs: [
      { q: 'Do I need NBFC registration for digital lending?', a: 'Yes — lending from own books requires NBFC license. Pure platform / partner-FLDG models also require regulatory analysis post the 2022 Digital Lending Guidelines.' },
      { q: 'What is SARFAESI?', a: 'Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 — empowers secured lenders to enforce security without court intervention.' },
    ],
  },
  'insurance-law': {
    title: 'Insurance Law & Compliances',
    description:
      'Insurance regulatory, transactional and disputes advisory under the IRDAI framework — for insurers, intermediaries, insurtechs and policyholders.',
    overview:
      'Insurance is regulated by the IRDAI Act and a battery of regulations. We advise insurers, brokers, web aggregators, corporate agents and POSP networks on licensing, product filing, distribution and claims; we also represent policyholders in claim disputes before consumer fora and insurance ombudsman.',
    keyPoints: [
      'IRDAI registration for insurers, brokers and aggregators',
      'Product file-and-use compliance',
      'Distribution agreements, bancassurance and POSP arrangements',
      'Claim drafting, repudiation defence and ombudsman complaints',
      'Reinsurance contract advisory',
      'Insurtech and embedded insurance regulatory advisory',
    ],
    process: [
      { title: 'Licensing', desc: 'Application drafting, fit-and-proper and capital compliance.' },
      { title: 'Product & Distribution', desc: 'File-and-use submissions and distribution structuring.' },
      { title: 'Operations', desc: 'Compliance calendar, returns and inspection management.' },
      { title: 'Disputes', desc: 'Ombudsman, consumer forum, civil court and arbitration.' },
    ],
    faqs: [
      { q: 'Can a non-insurance company sell insurance?', a: 'Only as a registered insurance intermediary (corporate agent / broker / web aggregator / POSP). Pure manufacturing or selling without registration is prohibited.' },
      { q: 'What if my claim is repudiated?', a: 'Options include representation to insurer grievance cell, Insurance Ombudsman (up to ₹50 lakh), consumer forum or civil suit.' },
    ],
  },
  'securities-law': {
    title: 'Securities Law & Compliances',
    description:
      'SEBI regulatory advisory, takeover code, insider trading defence, listing obligations and securities litigation.',
    overview:
      'Indian capital markets are governed by SEBI regulations covering listing, takeovers, insider trading, market manipulation, mutual funds, AIFs and intermediaries. We advise listed companies, promoters, FPIs, fund managers and intermediaries on compliance and represent them in SEBI investigations and SAT appeals.',
    keyPoints: [
      'LODR (Listing Obligations) compliance',
      'Takeover Code and Open Offer advisory',
      'Insider Trading (PIT) compliance and structured digital database',
      'Investigations, settlement and SAT appeals',
      'AIF, PMS, RIA and merchant banker registration',
      'FPI / FVCI structuring and FEMA',
    ],
    process: [
      { title: 'Compliance Audit', desc: 'Map applicable regulations and identify gaps.' },
      { title: 'Documentation & Policies', desc: 'Code of Conduct, UPSI policies, board policies under LODR.' },
      { title: 'Transaction Advisory', desc: 'Open offer, delisting, buy-back and rights issue.' },
      { title: 'Investigation Defence', desc: 'Show-cause replies, settlement, adjudication and SAT appeals.' },
    ],
    faqs: [
      { q: 'When is an open offer triggered?', a: 'Acquisition of 25% or more shareholding, or 5% in any financial year by an existing 25%+ shareholder, triggers a mandatory open offer under SEBI Takeover Regulations.' },
      { q: 'What is UPSI?', a: 'Unpublished Price-Sensitive Information — material information not generally available, the trading on which is prohibited under PIT Regulations.' },
    ],
  },
  'industrial-dispute': {
    title: 'Industrial Dispute',
    description:
      'Representation in conciliation, labour court and industrial tribunal matters — layoffs, retrenchment, lockouts, strikes and union negotiations.',
    overview:
      'Industrial Disputes Act, 1947 (and the new Industrial Relations Code, 2020) governs the relationship between employers and workmen. We act for employers and workmen in conciliation, adjudication before Labour Courts / Industrial Tribunals, writ proceedings and union recognition matters.',
    keyPoints: [
      'Layoff, retrenchment and closure compliance',
      'Standing orders and certification',
      'Conciliation and Section 12 references',
      'Industrial Tribunal and Labour Court adjudication',
      'Settlement and Section 18 agreements',
      'Strike, lockout and unfair labour practice defence',
    ],
    process: [
      { title: 'Dispute Mapping', desc: 'Identify whether it is an individual / collective dispute and the appropriate forum.' },
      { title: 'Conciliation', desc: 'Conciliation officer mediates; if failed, failure report leads to government reference.' },
      { title: 'Adjudication', desc: 'Reference to Labour Court / Tribunal; pleadings, evidence and arguments.' },
      { title: 'Award & Enforcement', desc: 'Award is published; enforcement through court or recovery officer.' },
    ],
    faqs: [
      { q: 'Who is a workman under the IDA?', a: 'A person employed in skilled, unskilled, manual, technical, operational or supervisory work — supervisory only if drawing wages below ₹10,000/month (now revised under codes).' },
      { q: 'When is government permission required for layoff?', a: 'Establishments employing 100 or more workmen require prior government permission for layoff, retrenchment and closure (300+ under the new IR Code).' },
    ],
  },
  'international-trade-customs': {
    title: 'International Trade & Customs Law',
    description:
      'Cross-border trade compliance, customs valuation, anti-dumping duties, FEMA, DGFT and FTA advisory.',
    overview:
      'International trade involves layered regulatory frameworks — Customs Act, Foreign Trade (Development & Regulation) Act, FEMA, GST and FTAs. We advise importers, exporters, manufacturers and trading houses on classification, valuation, duty exemptions, trade remedies and litigation before CESTAT and High Courts.',
    keyPoints: [
      'Tariff classification and customs valuation',
      'IEC, AEO, RoDTEP and EPCG advisory',
      'Anti-dumping, safeguard and countervailing duty proceedings',
      'FEMA inbound / outbound investment compliance',
      'FTA / RTA origin certification and rules-of-origin',
      'CESTAT, AAR and writ litigation',
    ],
    process: [
      { title: 'Mapping', desc: 'Identify applicable HS codes, duties and exemptions.' },
      { title: 'Documentation', desc: 'Import / export documentation, country-of-origin and valuation.' },
      { title: 'Disputes', desc: 'SCN replies, AAR rulings, CESTAT and High Court appeals.' },
    ],
    faqs: [
      { q: 'What is anti-dumping duty?', a: 'Additional duty imposed when goods are imported below normal value causing material injury to domestic industry — investigation by DGTR.' },
      { q: 'Do I need IEC for export?', a: 'Yes — Importer-Exporter Code from DGFT is mandatory for any commercial cross-border trade in goods or services.' },
    ],
  },
};
