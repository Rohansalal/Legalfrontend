import type { ServiceContent } from '@/components/leaf-service-page';

export const aviationMaritimeLabels: Record<'aviation' | 'maritime' | 'international', string> = {
  aviation: 'Aviation License & Approval',
  maritime: 'Maritime Law',
  international: 'International Law',
};

type AvMarCategory = 'aviation' | 'maritime' | 'international';

export const aviationMaritimeServices: Record<AvMarCategory, Record<string, ServiceContent>> = {
  aviation: {
    'aircraft-sale-purchase-leasing': {
      title: 'Sale, Purchase & Leasing of Aircraft',
      description:
        'End-to-end legal counsel on commercial and private aircraft transactions — purchase, sale, dry / wet lease, sale-and-leaseback and financing.',
      overview:
        'Aircraft transactions involve cross-border title transfer, deregistration, Cape Town Convention filings, financing securities and DGCA registration. We advise lessors, lessees, financiers and operators on documentation, risk allocation and regulatory clearances.',
      keyPoints: [
        'Aircraft Sale & Purchase Agreements (ASPA)',
        'Dry / wet lease and ACMI documentation',
        'Cape Town Convention IDERA and IR registration',
        'DGCA deregistration and registration (CA-1)',
        'Financing security: mortgage, security trust',
        'Tax structuring (GST / customs / withholding)',
      ],
      process: [
        { title: 'Term Sheet & LOI', desc: 'Negotiate commercial terms — price, lease rate, delivery condition.' },
        { title: 'Documentation', desc: 'Drafting ASPA / Lease, security and financing agreements.' },
        { title: 'Cape Town Filings', desc: 'IDERA filing and IR registration on the International Registry.' },
        { title: 'DGCA Process', desc: 'Deregistration of seller / former lessee and re-registration.' },
        { title: 'Closing', desc: 'Bills of sale, technical acceptance, escrow release and delivery.' },
      ],
      faqs: [
        { q: 'What is an IDERA?', a: 'Irrevocable Deregistration and Export Request Authorization — a Cape Town instrument allowing the lessor / financier to deregister and export the aircraft on default, with DGCA cooperation mandated within 5 working days.' },
        { q: 'Are aircraft transactions taxable?', a: 'Yes — GST, customs duty (on import) and withholding tax implications need careful structuring; concessions exist for scheduled airlines.' },
      ],
    },
    'airline-startup-certification': {
      title: 'Airline Start-ups, Certification & Aircraft Finance',
      description:
        'Legal and regulatory roadmap for new airline ventures — from NOC and AOP to fleet financing and route allocation.',
      overview:
        'Setting up a scheduled or non-scheduled airline in India involves multi-stage approvals — NOC, Aerodrome Operator Permit (AOP), Air Operator Certificate (AOC), security clearance, traffic rights and aircraft financing. We provide a coordinated workstream covering all approvals.',
      keyPoints: [
        'No Objection Certificate (NOC) from MoCA',
        'Aerodrome Operator Permit and AOC certification',
        'Security clearance and FDI compliance',
        'Aircraft financing and lease documentation',
        'Route allocation and slot procurement',
        'Operations Manual review and CAR compliance',
      ],
      process: [
        { title: 'Feasibility & FDI', desc: 'Structure ownership within FDI caps; prepare business plan for NOC.' },
        { title: 'NOC & AOP', desc: 'File NOC application; complete pre-AOC steps including hangar, MEL, manuals.' },
        { title: 'AOC Certification', desc: 'Five-phase DGCA process — application, document evaluation, demonstration, inspection, certification.' },
        { title: 'Operations', desc: 'Route allocation, slot acquisition and traffic rights for international.' },
      ],
      faqs: [
        { q: 'How long does AOC certification take?', a: 'Typically 18–36 months from NOC to AOC depending on fleet readiness, manual approvals and demonstration flights.' },
        { q: 'What is the FDI cap for airlines?', a: 'Up to 49% under automatic route for scheduled airlines; up to 100% for NRIs; over 49% requires government approval.' },
      ],
    },
    'dgca': {
      title: 'DGCA Compliances & Approval',
      description:
        'Comprehensive Directorate General of Civil Aviation compliance, licensing and approval representation across CARs and operational matters.',
      overview:
        'DGCA is the principal regulator for civil aviation safety and operations. We assist operators, MROs, training organizations and personnel with CAR compliance, Show Cause replies, license issuance, renewal, suspension defence and DGCA litigation.',
      keyPoints: [
        'CAR compliance audits and gap analysis',
        'Operator, MRO, ATO and DOA certifications',
        'License issuance, renewal and reinstatement',
        'Show Cause Notice replies and personal hearings',
        'Suspension / cancellation defence',
        'High Court writ petitions against DGCA action',
      ],
      process: [
        { title: 'Engagement', desc: 'Identify the specific approval, issue or proceeding involved.' },
        { title: 'Documentation', desc: 'Compile manuals, audit reports, training records and compliance evidence.' },
        { title: 'Submission & Hearing', desc: 'File with DGCA; appear in pre-decisional hearing if scheduled.' },
        { title: 'Approval / Appeal', desc: 'Receive approval; on adverse order, file appeal or writ petition.' },
      ],
      faqs: [
        { q: 'How are DGCA orders challenged?', a: 'Through statutory appeal under the Aircraft Act / Rules where available, or by writ petition under Article 226 before the High Court.' },
      ],
    },
    'aera': {
      title: 'AERA Compliances & Approval',
      description:
        'Airports Economic Regulatory Authority (AERA) tariff determination, consultative process and appellate representation.',
      overview:
        'AERA regulates aeronautical tariffs at major airports. We represent airport operators, airlines, ground handlers and concessionaires in tariff determination, multi-year tariff orders, consultation submissions and TDSAT appeals.',
      keyPoints: [
        'Tariff determination consultation papers and submissions',
        'WACC, RAB and traffic forecast challenges',
        'Cross-subsidization and dual-till advisory',
        'TDSAT (Telecom Disputes Settlement and Appellate Tribunal) appeals',
        'Concession and revenue-share agreements',
      ],
      process: [
        { title: 'Stakeholder Submissions', desc: 'File consultation paper responses with technical and legal arguments.' },
        { title: 'Hearing', desc: 'Appear at AERA stakeholder consultation.' },
        { title: 'Order & Appeal', desc: 'Final tariff order; appeal to TDSAT within prescribed time.' },
      ],
      faqs: [
        { q: 'Who can challenge AERA orders?', a: 'Any aggrieved person — airport operator, airline, passenger associations — can file an appeal before TDSAT.' },
      ],
    },
    'aai': {
      title: 'AAI Compliances & Approval',
      description:
        'Airports Authority of India compliance, concession agreements, land allotment and operational disputes.',
      overview:
        'AAI manages a substantial portion of Indian airports and provides ATC services across all airports. We advise on AAI concession agreements, land licenses, fuel station / hangar allotments, route navigation charges and contractual disputes.',
      keyPoints: [
        'AAI concession and license agreement drafting',
        'Hangar / land allotment representation',
        'Route Navigation Facility Charges (RNFC) advisory',
        'Bid documentation and PPP contract review',
        'Dispute resolution and arbitration',
      ],
      process: [
        { title: 'Documentation Review', desc: 'Identify obligations, payment terms and termination triggers.' },
        { title: 'Compliance & Renewals', desc: 'Track milestones, renewals and option windows.' },
        { title: 'Dispute Resolution', desc: 'Notice, conciliation and arbitration as per contract dispute clause.' },
      ],
      faqs: [
        { q: 'Are AAI agreements arbitrable?', a: 'Most AAI commercial contracts contain arbitration clauses under the Arbitration and Conciliation Act, 1996.' },
      ],
    },
    'bcas': {
      title: 'BCAS Compliances & Approval',
      description:
        'Bureau of Civil Aviation Security (BCAS) approval for aviation security training, screening agencies and regulated agents.',
      overview:
        'BCAS regulates civil aviation security in India under the National Civil Aviation Security Programme. We assist airlines, ground handlers, regulated agents (cargo) and security training institutes with BCAS approvals, audits and security manual certification.',
      keyPoints: [
        'Regulated Agent (RA) and Known Consignor approval',
        'Security training institute certification',
        'Security manual approval',
        'BCAS audit response and corrective action plans',
        'AVSEC personnel certification',
      ],
      process: [
        { title: 'Application Drafting', desc: 'Compile security manuals, infrastructure and personnel records.' },
        { title: 'Inspection', desc: 'BCAS conducts on-site inspection; address findings.' },
        { title: 'Approval / Renewal', desc: 'Approval certificate issued; track renewal cycle.' },
      ],
      faqs: [
        { q: 'Who is a Regulated Agent?', a: 'A cargo agent approved by BCAS to apply security controls to consignments tendered for carriage by air.' },
      ],
    },
    'icao': {
      title: 'ICAO Regulations & Advisory',
      description:
        'International Civil Aviation Organization (ICAO) standards and recommended practices (SARPs) advisory and audit support.',
      overview:
        'ICAO sets international civil aviation standards. We advise on Annex SARPs implementation, USOAP audits, State Action Plans, deviations from SARPs and engagement with ICAO regional offices.',
      keyPoints: [
        'SARPs gap analysis vs national regulations',
        'USOAP audit preparation and CAP submission',
        'Deviation filings to ICAO',
        'State letter / proposal responses',
        'Cross-border aviation environmental advisory (CORSIA)',
      ],
      process: [
        { title: 'Mapping', desc: 'Cross-walk Annex SARPs with CARs / Aircraft Rules and identify gaps.' },
        { title: 'Documentation', desc: 'Update manuals, regulations and procedures to align with ICAO.' },
        { title: 'Engagement', desc: 'Coordinate with DGCA / MoCA on ICAO interactions.' },
      ],
      faqs: [
        { q: 'Are ICAO SARPs binding?', a: 'Standards are binding subject to State filing of differences; Recommended Practices are advisory but widely adopted.' },
      ],
    },
    'iata': {
      title: 'IATA License & Advisory',
      description:
        'International Air Transport Association (IATA) accreditation, BSP, IATA Travel Agency Programme and operational compliance.',
      overview:
        'IATA accreditation enables travel agents and airlines to participate in the BSP (Billing and Settlement Plan) and access global distribution. We advise applicants and accredited agents on financial criteria, BSP compliance, default actions and reinstatement.',
      keyPoints: [
        'IATA TIDS / BSP accreditation application',
        'Financial criteria and bank guarantees',
        'BSP default and reinstatement representation',
        'Cargo Agency Programme (CASS) advisory',
        'Travel Agent Handbook compliance',
      ],
      process: [
        { title: 'Eligibility & Application', desc: 'Confirm financial readiness; file accreditation application.' },
        { title: 'Bank Guarantee', desc: 'Provide BG as per IATA risk parameters.' },
        { title: 'Activation', desc: 'BSP activation and operational onboarding.' },
      ],
      faqs: [
        { q: 'What if my BSP is suspended?', a: 'Suspension follows non-remittance or default. Reinstatement requires payment, fresh BG and curing of underlying default — we represent agents through this process.' },
      ],
    },
    'aero-sports': {
      title: 'Aero-Sports License & Advisory',
      description:
        'Licensing and regulatory advisory for aero-sports — paragliding, hot-air ballooning, gliding and microlight aviation.',
      overview:
        'Aero-sports activities are regulated under DGCA CAR Section 7 — Series A, B and C and operate under the Aero Club / Federation framework. We assist clubs, schools and operators with licensing, instructor approval and event clearances.',
      keyPoints: [
        'Aero club registration and DGCA approval',
        'Instructor and pilot licensing',
        'Aerodrome / launch site approval',
        'Insurance and liability advisory',
        'Event-specific clearances',
      ],
      process: [
        { title: 'Setup', desc: 'Club / school registration with appropriate apex body.' },
        { title: 'DGCA Approval', desc: 'CAR-compliant operations manual and approval.' },
        { title: 'Operations', desc: 'Pilot certification, insurance and event clearances.' },
      ],
      faqs: [
        { q: 'Do paragliders need DGCA license?', a: 'Paragliders are non-mechanical flight and self-regulated by certified clubs / federations under DGCA oversight.' },
      ],
    },
    'drone': {
      title: 'Drone Registration & Advisory',
      description:
        'UAS registration on Digital Sky platform, RPAS pilot licensing and drone operations advisory under the Drone Rules, 2021.',
      overview:
        'The Drone Rules, 2021 simplified India\'s UAS regulatory framework. Operators must register drones on Digital Sky, obtain Unique Identification Number (UIN), comply with airspace restrictions (Green / Yellow / Red zones) and obtain Remote Pilot Certificate where applicable.',
      keyPoints: [
        'Drone categorization (Nano / Micro / Small / Medium / Large)',
        'Digital Sky registration and UIN',
        'Remote Pilot Certificate (RPC) facilitation',
        'Type Certification and Quality Conformance',
        'Airspace / zone permissions',
        'BVLOS and beyond visual line-of-sight advisory',
      ],
      process: [
        { title: 'Categorization', desc: 'Classify drone by weight and use case; identify applicable approvals.' },
        { title: 'Digital Sky Registration', desc: 'Manufacturer / importer / owner registration on platform.' },
        { title: 'Operations', desc: 'Flight permissions, RPC, geo-fencing and event clearances.' },
      ],
      faqs: [
        { q: 'Do I need a license for a hobby drone?', a: 'Nano drones (≤250g) for non-commercial use are largely exempt; all others require registration and applicable permissions.' },
        { q: 'Is BVLOS allowed?', a: 'Permitted under specific approvals via Drone Certification Scheme and BVLOS sandbox initiatives.' },
      ],
    },
    'pilot-training': {
      title: 'Pilot Training, License & Advisory',
      description:
        'Approved Training Organization (ATO) certification, CPL / ATPL licensing and pilot career legal advisory.',
      overview:
        'Pilot licensing is governed by Aircraft Rules, 1937 and CAR Section 7. We advise individual pilots, ATOs and FTOs on licensing, foreign license conversion (FATA), CPL/ATPL exam compliance and disciplinary representation before DGCA.',
      keyPoints: [
        'ATO / FTO certification and renewal',
        'CPL, ATPL, type-rating and instrument-rating licensing',
        'Foreign license conversion (FATA)',
        'Medical disqualification appeals',
        'Disciplinary action and license suspension defence',
      ],
      process: [
        { title: 'Eligibility', desc: 'Verify hours, medical, exams and prerequisites.' },
        { title: 'Filing', desc: 'License / endorsement application with DGCA.' },
        { title: 'Approval / Appeal', desc: 'License issuance; appeal in case of refusal.' },
      ],
      faqs: [
        { q: 'How do I convert a foreign CPL to Indian CPL?', a: 'File application with DGCA and clear conversion exams (Air Regulations, Air Navigation, Aviation Meteorology) and a flying-skill check.' },
      ],
    },
  },
  maritime: {
    'ship-license': {
      title: 'Ship License',
      description:
        'Ship registration under the Merchant Shipping Act, 1958 — Indian flag, crew licensing, charter parties and statutory certifications.',
      overview:
        'Ship licensing in India involves registration under the Merchant Shipping Act with the Mercantile Marine Department / DG Shipping, IMO numbering, classification society certificates and operational licenses for coastal / international trade.',
      keyPoints: [
        'Indian-flag ship registration (Provisional / Permanent)',
        'Coasting Licence and General Trading Licence',
        'Manning, RFC and Continuous Synopsis Record',
        'Charter party / BIMCO contract advisory',
        'P&I, hull and machinery insurance review',
        'Port state control and detention defence',
      ],
      process: [
        { title: 'Eligibility', desc: 'Confirm Indian-citizen / Indian-company ownership criteria under Section 21.' },
        { title: 'Registration', desc: 'File with Registrar (MMD), survey, classification and IMO number.' },
        { title: 'Operations', desc: 'Crew licensing, statutory certificates and operational permits.' },
      ],
      faqs: [
        { q: 'Can foreign-owned ships fly Indian flag?', a: 'Generally only Indian citizens / companies satisfying ownership criteria can register under Indian flag — limited exceptions for bareboat charter-cum-demise.' },
      ],
    },
  },
  international: {
    'cross-border-transactions': {
      title: 'Cross-Border Transactions',
      description:
        'Legal counsel for international commercial transactions — FEMA, ODI / FDI, ECB, structuring and dispute resolution.',
      overview:
        'Cross-border deals require simultaneous management of FEMA, sectoral caps, tax treaties, jurisdiction and enforceability. We advise multinationals, Indian groups and individuals on inbound and outbound transactions, financing, M&A and intra-group structuring.',
      keyPoints: [
        'FEMA inbound (FDI) and outbound (ODI) compliance',
        'External Commercial Borrowings (ECB) framework',
        'Cross-border M&A structuring',
        'Tax treaty (DTAA) analysis and PE risk',
        'International commercial arbitration (SIAC, LCIA, ICC)',
        'Enforcement of foreign awards in India',
      ],
      process: [
        { title: 'Structuring', desc: 'Identify optimal jurisdiction, holding structure and treaty benefits.' },
        { title: 'Documentation', desc: 'Cross-border SPA, SHA, license and financing agreements.' },
        { title: 'Compliance', desc: 'FEMA filings, RBI approvals where needed and audit-trail.' },
      ],
      faqs: [
        { q: 'Does FEMA require RBI approval for outward investment?', a: 'Most outward investments are under automatic route subject to Overseas Investment Rules, 2022; certain sectors and amounts require RBI approval.' },
      ],
    },
    'money-laundering': {
      title: 'Money Laundering (International)',
      description:
        'Defence in cross-border PMLA proceedings — Enforcement Directorate, FATF, MLA and cross-border asset attachment.',
      overview:
        'PMLA proceedings often have international dimensions — Letters Rogatory, Mutual Legal Assistance Treaties (MLAT), foreign asset attachment and FATF compliance. We represent individuals and corporates in ED investigations, attachment proceedings and adjudication.',
      keyPoints: [
        'Pre-arrest legal opinion and protection',
        'ED investigation defence and ECIR challenge',
        'Provisional attachment and Adjudicating Authority',
        'PMLA Appellate Tribunal and High Court appeals',
        'MLAT / LR coordination for cross-border matters',
        'AML compliance program advisory',
      ],
      process: [
        { title: 'Strategy', desc: 'Map allegations, predicate offence, scheduled offence linkage.' },
        { title: 'Investigation', desc: 'Representation in ED summons, statements under Section 50.' },
        { title: 'Attachment', desc: 'Defend Provisional Attachment Order before Adjudicating Authority within 180 days.' },
        { title: 'Appeal', desc: 'PMLA Appellate Tribunal and onward appeal to High Court.' },
      ],
      faqs: [
        { q: 'Is bail in PMLA twin-test still applicable?', a: 'Yes — Section 45 twin conditions apply. Recent Supreme Court decisions have refined their application particularly for women, sick and minor accused.' },
      ],
    },
  },
};
