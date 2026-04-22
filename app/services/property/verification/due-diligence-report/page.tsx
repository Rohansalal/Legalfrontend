'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function DueDiligenceReportPage() {
  const data = {
    title: 'Property Due Diligence Report',
    description:
      'Get a comprehensive legal due diligence report before any property investment — covering title, RERA compliance, zoning, litigation, NOCs, and regulatory approvals across all authorities.',
    heroBadges: ['Comprehensive Multi-Authority Search', 'HNI & NRI Investment Protection', 'Commercial & Residential Properties'],
    introTitle: 'What is a Property Due Diligence Report?',
    introContent: (
      <p>
        A Property Due Diligence Report is a comprehensive legal and regulatory investigation of an immovable property conducted by a team of experienced property lawyers and technical experts before a significant property transaction — purchase, investment, development, or mortgage. Unlike a basic title search (which examines only registered ownership documents), a full due diligence report covers a far broader canvas: title search (30+ years), encumbrance certificate, CERSAI mortgage search, RERA registration status and compliance (for new projects), land use and zoning verification against the Development Plan/Master Plan, building plan approval and Occupation Certificate (OC) status, court case search (district court, High Court, NCLT, DRT), outstanding property tax and utility dues, No-Objection Certificates (NOCs) from statutory bodies (Municipal Corporation, Airport Authority, Fire Department, Coastal Regulation Zone Authority for coastal properties), environmental compliance (for industrial/commercial properties), society/apartment NOC, and any pending government acquisition or reservation. A comprehensive due diligence report is particularly critical for: high-net-worth individual (HNI) buyers investing crores in premium residential properties; Non-Resident Indian (NRI) buyers who cannot personally verify the property; corporate real estate transactions (office spaces, warehouses, manufacturing units); bulk purchase of land for development or commercial projects; and institutional real estate investment (REITs, FDI in real estate). The report concludes with a risk assessment — categorising risks as High, Medium, or Low — and a list of conditions precedent to be fulfilled before completing the transaction. Typically prepared by a senior property lawyer or law firm, the report takes 7–21 days and costs between &#x20b9;15,000 to &#x20b9;5 lakhs depending on property size and complexity.
      </p>
    ),
    detailsTitle: 'What a Property Due Diligence Report Covers',
    details: [
      {
        title: 'Complete Title & Ownership Verification',
        desc: '30+ year title search at Sub-Registrar, CERSAI mortgage check, revenue record verification (7/12, Khata, RoR), ULC/ULCA compliance, court case search — establishing the seller\'s clear and marketable title before any commitment is made.',
        icon: ShieldCheck,
      },
      {
        title: 'RERA & Regulatory Compliance',
        desc: 'For new/under-construction projects, we verify RERA registration, quarterly compliance updates, builder\'s financial health, past project delivery track record, and MahaRERA/state RERA grievance history — protecting buyers from investing in non-compliant projects.',
        icon: Zap,
      },
      {
        title: 'Land Use, Zoning & Planning Permissions',
        desc: 'We verify the property\'s land use zone against the Development Plan/Master Plan (residential/commercial/industrial/green zone/reservation), building plan approval, commencement certificate, occupancy certificate, and compliance with DCR/FSI norms to ensure legal and permissible use.',
        icon: Globe,
      },
      {
        title: 'NOC & Statutory Clearance Verification',
        desc: 'We check NOCs from: Municipal Corporation (building plan, fire NOC, lift NOC), Airport Authority of India (height clearance in flight zones), CRZ Authority (coastal properties), Environment Department (commercial/industrial), State Pollution Control Board, and Heritage Conservation Authority (for listed structures).',
        icon: Award,
      },
    ],
    requirements: [
      'Complete property address, survey/plot/CTS number, and registration details',
      'All available title documents — sale deed, agreement, allotment letter, share certificate',
      'RERA project registration number (for under-construction properties)',
      'Builder/developer name and CIN/LLPIN (for corporate sellers)',
      'Purpose of acquisition (residential, commercial, redevelopment) to tailor the due diligence scope',
      'Timeline for transaction completion (to determine urgency and depth of search)',
    ],
    processTitle: 'How Property Due Diligence is Conducted',
    processIntro:
      'Our due diligence process is systematic and multi-layered — combining legal research, physical site verification, government records search, and regulatory compliance analysis into a single comprehensive report.',
    processSteps: [
      {
        title: 'Scope Definition & Document Collection',
        desc: 'We define the due diligence scope based on property type (residential/commercial/agricultural/industrial), transaction value, and buyer requirements. We collect all available title documents from the seller and issue a checklist of additional documents needed from government offices.',
        icon: UserCheck,
      },
      {
        title: 'Multi-Authority Records Search',
        desc: 'Our team simultaneously conducts searches at: Sub-Registrar (title search, EC), Revenue Office (7/12, Khata, RoR), Municipal Corporation (building approvals, OC, property tax), District Court and High Court (litigation search), CERSAI (mortgage search), and RERA portal (project compliance).',
        icon: FileSearch,
      },
      {
        title: 'Regulatory & NOC Verification',
        desc: 'We verify all required NOCs and statutory approvals — building plan sanction, fire NOC, lift NOC, environmental clearance, CRZ compliance, AAI height clearance (where applicable), and confirm whether the Occupancy Certificate is valid and the building is used as per approved plan.',
        icon: CheckCircle2,
      },
      {
        title: 'Report Preparation & Risk Assessment',
        desc: 'We compile findings into a detailed report with: summary of title, list of documents reviewed, encumbrances found, regulatory gaps, litigation risks, and a risk-graded checklist of conditions precedent. The report clearly identifies deal-breakers versus manageable issues.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'Standard due diligence reports are completed in 7–10 working days. Complex commercial or large-acreage properties may take 15–21 days. Express due diligence (3–5 days) is available at premium.',
    documents: [
      {
        category: 'Title & Registration Documents',
        list: [
          'All registered title documents in the chain of ownership (30+ years)',
          'Encumbrance Certificate (Form 15/16) for the full search period',
          'CERSAI search certificate and any bank NOC/discharge deed',
        ],
      },
      {
        category: 'Regulatory & Approval Documents',
        list: [
          'Building plan approval (IOD/Sanction Plan) and Commencement Certificate',
          'Occupancy Certificate (OC) from municipal authority',
          'RERA project registration certificate and quarterly compliance reports',
        ],
      },
      {
        category: 'Revenue & Tax Records',
        list: [
          '7/12 extract / Khata / RoR / property card as applicable to the state',
          'NA order and ULC clearance (for plots and agricultural land)',
          'Latest property tax, water tax, and utility bills paid receipts',
        ],
      },
    ],
    compliance: [
      {
        title: 'Conditions Precedent Must Be Fulfilled',
        desc: 'A due diligence report typically lists conditions precedent — actions or documents the seller must provide before the transaction is completed. These may include: clearing outstanding mortgages, obtaining missing NOCs, updating mutation records, or resolving title gaps. Never proceed to registration without fulfilling all material conditions.',
      },
      {
        title: 'RERA Ongoing Monitoring for Under-Construction',
        desc: 'For under-construction properties, due diligence is not a one-time exercise. Buyers should monitor the builder\'s quarterly RERA compliance reports (filed on the state portal every quarter) throughout the construction period to detect project delays, financial stress, or regulatory violations early.',
      },
      {
        title: 'Environmental Compliance for Commercial/Industrial',
        desc: 'For commercial or industrial properties, environmental due diligence must include: Environmental Impact Assessment (EIA) clearance, State Pollution Control Board consent to operate/establish, hazardous waste compliance, and groundwater extraction NOC. Non-compliance can lead to closure orders and criminal liability under the Environment Protection Act 1986.',
      },
      {
        title: 'Annual Compliance Audit for Large Portfolios',
        desc: 'Corporate real estate portfolios and institutional investors should conduct periodic (annual) due diligence audits of their portfolio properties to identify: expired NOCs, changed zoning regulations, new government acquisition proposals, RERA compliance status of under-construction assets, and regulatory changes affecting land use.',
      },
    ],
    faqs: [
      {
        q: 'Is due diligence necessary even for RERA-registered projects?',
        a: 'Yes. RERA registration means the builder has declared certain details — title, approvals, completion date — to the RERA authority. However, RERA registration does not guarantee clear title or absence of litigation. An independent due diligence verifies the accuracy of the RERA declarations, checks builder&#39;s financial health, reviews actual approval documents, and gives the buyer independent professional opinion beyond the self-declarations on the RERA portal.',
      },
      {
        q: 'What is the cost of a property due diligence report in India?',
        a: 'Cost varies by complexity: for standard residential properties, a basic due diligence report costs &#x20b9;15,000–&#x20b9;50,000. For premium residential or commercial properties (above &#x20b9;2 crores), comprehensive due diligence costs &#x20b9;50,000–&#x20b9;2 lakhs. For large land parcels (10 acres or more) or bulk purchases, the fee can range from &#x20b9;2–&#x20b9;10 lakhs depending on the number of properties and the depth of investigation required.',
      },
      {
        q: 'What does &#x201c;conditions precedent&#x201d; in a due diligence report mean?',
        a: 'Conditions precedent (CPs) are specific actions or deliverables that the seller must fulfil before the buyer is obligated to complete the transaction. Examples: seller must provide a bank NOC for mortgage discharge, seller must obtain an updated mutation certificate, seller must get a fire NOC for the building. CPs protect the buyer from proceeding on an incomplete or defective title.',
      },
      {
        q: 'Can due diligence be done for inherited property?',
        a: 'Yes, and it is particularly important for inherited property. Due diligence on inherited property additionally covers: validity of the Will or succession order, probate (where applicable), mutation in heirs&#39; names, verification that all legal heirs are accounted for (to prevent a forgotten heir from challenging the sale later), and estate duty compliance (though estate duty was abolished in India in 1985, some older properties may have residual compliance issues).',
      },
      {
        q: 'Is property due diligence applicable to NRI property purchases?',
        a: 'Absolutely, and it is even more critical for NRI buyers who cannot physically verify the property. Due diligence for NRI purchases additionally covers: FEMA compliance (type of property permissible for NRI purchase), RBI guidelines for fund remittance, TDS compliance on sale proceeds, and repatriation restrictions on sale proceeds through NRE vs. NRO accounts. Our NRI-specific due diligence package covers all these additional FEMA/RBI dimensions.',
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
