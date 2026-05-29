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
    'shipping-litigation-arbitration': {
      title: 'Shipping Litigation & Arbitration',
      description:
        'Representation in admiralty and shipping disputes before the High Courts (admiralty side) and in Indian and international maritime arbitration.',
      overview:
        'Shipping disputes span charter-party breaches, collisions, salvage, demurrage, freight and bunker claims. Admiralty jurisdiction is exercised by designated High Courts under the Admiralty (Jurisdiction and Settlement of Maritime Claims) Act, 2017, while most commercial charter disputes are resolved by arbitration (LMAA, SIAC, ICC or ad hoc). We act for owners, charterers, cargo interests and insurers across litigation and arbitration.',
      keyPoints: [
        'Admiralty suits before designated High Courts',
        'Charter-party and freight / demurrage disputes',
        'LMAA, SIAC and ad hoc maritime arbitration',
        'Collision, salvage and towage claims',
        'Enforcement of maritime awards and decrees',
      ],
      process: [
        { title: 'Case Assessment', desc: 'Review charter party, bills of lading and the dispute clause for forum and law.' },
        { title: 'Proceedings', desc: 'File admiralty suit or commence arbitration; seek interim security.' },
        { title: 'Resolution', desc: 'Award / decree, followed by enforcement against the vessel or assets.' },
      ],
      faqs: [
        { q: 'Which courts have admiralty jurisdiction?', a: 'Designated High Courts of coastal States (e.g., Bombay, Madras, Calcutta, Gujarat) exercise admiralty jurisdiction under the 2017 Act.' },
        { q: 'Is maritime arbitration common?', a: 'Yes — most charter parties provide for arbitration (often LMAA in London or SIAC in Singapore), with awards enforceable in India under the New York Convention.' },
      ],
      relatedServices: [
        { name: 'Ship Arrest or Release', href: '/services/lawyer-services/aviation-maritime/maritime/ship-arrest-release' },
        { name: 'Cargo Claims', href: '/services/lawyer-services/aviation-maritime/maritime/cargo-claims' },
        { name: 'Marine Insurance', href: '/services/lawyer-services/aviation-maritime/maritime/marine-insurance' },
      ],
    },
    'ship-arrest-release': {
      title: 'Ship Arrest or Release',
      description:
        'Urgent ship arrest to secure maritime claims, and prompt release of arrested vessels against security, under the Admiralty Act, 2017.',
      overview:
        'Arresting a vessel is the most effective way to obtain security for a maritime claim — unpaid bunkers, crew wages, cargo damage, charter dues or mortgage default. Under the Admiralty (Jurisdiction and Settlement of Maritime Claims) Act, 2017, a designated High Court can order arrest of the offending or sister ship. We act swiftly for claimants seeking arrest and for owners seeking release against a P&I Club Letter of Undertaking or bank guarantee.',
      keyPoints: [
        'Action in rem and ship arrest for maritime claims',
        'Sister-ship arrest where permitted',
        'Release against P&I LOU / bank guarantee',
        'Wrongful-arrest defence and counter-security',
        'Coordination with port authorities and the Admiralty Marshal',
      ],
      process: [
        { title: 'Claim Verification', desc: 'Confirm a maritime claim and the vessel’s port call / ETA.' },
        { title: 'Arrest Application', desc: 'File an admiralty suit and urgent arrest application before the High Court.' },
        { title: 'Security & Release', desc: 'Negotiate security; vessel released on LOU / guarantee.' },
      ],
      faqs: [
        { q: 'What claims allow ship arrest?', a: 'Maritime claims listed in the Admiralty Act, 2017 — including unpaid wages, bunkers, cargo loss, salvage, mortgage and charter dues.' },
        { q: 'How fast can a ship be arrested?', a: 'Often within hours of filing where the vessel is in port — speed is critical before she sails.' },
      ],
      relatedServices: [
        { name: 'Shipping Litigation & Arbitration', href: '/services/lawyer-services/aviation-maritime/maritime/shipping-litigation-arbitration' },
        { name: 'Preferred Ship Mortgages', href: '/services/lawyer-services/aviation-maritime/maritime/ship-mortgages' },
        { name: 'Cargo Claims', href: '/services/lawyer-services/aviation-maritime/maritime/cargo-claims' },
      ],
    },
    'transportation-agreements': {
      title: 'Transportation Agreements',
      description:
        'Drafting and negotiating contracts of affreightment, charter parties and multimodal transport agreements for sea carriage.',
      overview:
        'Sea transportation runs on carefully drafted contracts — voyage and time charter parties, contracts of affreightment (COA), bills of lading and multimodal transport documents. We draft, review and negotiate these instruments (often on BIMCO-standard forms) to allocate risk on laytime, demurrage, deviation, liability and jurisdiction.',
      keyPoints: [
        'Voyage and time charter parties (BIMCO forms)',
        'Contracts of affreightment (COA)',
        'Bills of lading and sea waybills',
        'Multimodal transport documents',
        'Laytime, demurrage and liability allocation',
      ],
      process: [
        { title: 'Requirement Mapping', desc: 'Understand the trade, route, cargo and commercial terms.' },
        { title: 'Drafting / Review', desc: 'Prepare or vet the contract on suitable standard forms.' },
        { title: 'Negotiation', desc: 'Finalise risk allocation, law and dispute clauses.' },
      ],
      faqs: [
        { q: 'What is a contract of affreightment?', a: 'A COA is an agreement to carry specified quantities of cargo over a period across multiple voyages, distinct from a single voyage charter.' },
        { q: 'Why use BIMCO forms?', a: 'BIMCO standard forms are widely accepted, well-tested and reduce negotiation time while clearly allocating risk.' },
      ],
      relatedServices: [
        { name: 'Cargo Claims', href: '/services/lawyer-services/aviation-maritime/maritime/cargo-claims' },
        { name: 'Ship Sale & Purchase Agreements', href: '/services/lawyer-services/aviation-maritime/maritime/ship-sale-purchase' },
        { name: 'Operation & Maintenance Agreements', href: '/services/lawyer-services/aviation-maritime/maritime/operation-maintenance-agreements' },
      ],
    },
    'ship-building-agreements': {
      title: 'Ship Building Agreements',
      description:
        'Newbuilding contracts for shipyards and buyers — specifications, milestone payments, refund guarantees and delivery terms.',
      overview:
        'A shipbuilding contract governs the construction and delivery of a new vessel, balancing the yard’s and buyer’s interests on specifications, classification, inspection, milestone payments, refund guarantees, delays, liquidated damages and title transfer. We draft and negotiate newbuilding contracts (SAJ, NEWBUILDCON and bespoke forms) and the associated refund-guarantee and supervision agreements.',
      keyPoints: [
        'Newbuilding contracts (SAJ / NEWBUILDCON / bespoke)',
        'Technical specifications and classification',
        'Milestone payment and refund-guarantee structuring',
        'Liquidated damages for delay / deficiency',
        'Inspection, sea trials and delivery / title transfer',
      ],
      process: [
        { title: 'Term Sheet', desc: 'Agree price, spec, schedule and payment milestones.' },
        { title: 'Contract Drafting', desc: 'Draft the build contract, refund guarantee and supervision agreement.' },
        { title: 'Delivery', desc: 'Sea trials, acceptance, protocol of delivery and acceptance, title transfer.' },
      ],
      faqs: [
        { q: 'What is a refund guarantee?', a: 'A bank guarantee protecting the buyer’s pre-delivery instalments if the yard defaults or the contract is cancelled.' },
        { q: 'When does title pass?', a: 'Typically on delivery and acceptance, against the protocol of delivery and acceptance and final payment.' },
      ],
      relatedServices: [
        { name: 'Ship Finance', href: '/services/lawyer-services/aviation-maritime/maritime/ship-finance' },
        { name: 'Ship Sale & Purchase Agreements', href: '/services/lawyer-services/aviation-maritime/maritime/ship-sale-purchase' },
        { name: 'Loan Agreements', href: '/services/lawyer-services/aviation-maritime/maritime/loan-agreements' },
      ],
    },
    'general-average-claims': {
      title: 'General Average & Claims',
      description:
        'General average declarations, adjustment and recovery under the York-Antwerp Rules, with average bonds and guarantees.',
      overview:
        'When a sacrifice or extraordinary expenditure is made to save a maritime adventure (vessel, cargo and freight) from common peril, the loss is shared proportionally by all interests — the principle of general average, adjusted under the York-Antwerp Rules. We advise owners, cargo interests and insurers on GA declarations, securing average bonds and guarantees, working with average adjusters and recovering contributions.',
      keyPoints: [
        'General average declaration and notices',
        'York-Antwerp Rules adjustment',
        'Average bond and average guarantee collection',
        'Coordination with the average adjuster',
        'Recovery and apportionment of contributions',
      ],
      process: [
        { title: 'Declaration', desc: 'Owner declares GA; secure average bonds / guarantees before cargo release.' },
        { title: 'Adjustment', desc: 'Average adjuster computes contributions under the York-Antwerp Rules.' },
        { title: 'Recovery', desc: 'Collect contributions from cargo and other interests / insurers.' },
      ],
      faqs: [
        { q: 'What is general average?', a: 'A maritime-law principle where losses from a deliberate sacrifice to save the common adventure are shared proportionally among ship, cargo and freight.' },
        { q: 'Why is an average bond needed?', a: 'It secures each cargo interest’s GA contribution and is typically required before the cargo is released.' },
      ],
      relatedServices: [
        { name: 'Marine Insurance', href: '/services/lawyer-services/aviation-maritime/maritime/marine-insurance' },
        { name: 'Cargo Claims', href: '/services/lawyer-services/aviation-maritime/maritime/cargo-claims' },
        { name: 'On-Board Fire', href: '/services/lawyer-services/aviation-maritime/maritime/onboard-fire' },
      ],
    },
    'loan-agreements': {
      title: 'Loan Agreements',
      description:
        'Drafting and negotiating ship loan and facility agreements — secured lending, covenants, security packages and syndication.',
      overview:
        'Vessel acquisition and operation are capital-intensive and typically financed through secured loans. We draft and negotiate ship loan and facility agreements for borrowers and lenders, covering drawdown, interest, financial and maintenance covenants, events of default and the security package (mortgage, assignment of earnings and insurances, account pledges) — including syndicated facilities.',
      keyPoints: [
        'Term loan and revolving facility agreements',
        'Security package — mortgage, assignments, pledges',
        'Financial and maintenance covenants',
        'Events of default and enforcement triggers',
        'Syndicated and club-deal documentation',
      ],
      process: [
        { title: 'Term Sheet', desc: 'Agree amount, tenor, pricing, security and covenants.' },
        { title: 'Documentation', desc: 'Draft the facility agreement and the security suite.' },
        { title: 'Closing', desc: 'Conditions precedent, perfection of security and drawdown.' },
      ],
      faqs: [
        { q: 'What security do ship lenders take?', a: 'Typically a ship mortgage plus assignment of earnings and insurances, account pledges and sometimes share security and guarantees.' },
        { q: 'Can foreign lenders finance Indian vessels?', a: 'Yes, subject to FEMA / ECB framework and RBI norms for external commercial borrowing.' },
      ],
      relatedServices: [
        { name: 'Preferred Ship Mortgages', href: '/services/lawyer-services/aviation-maritime/maritime/ship-mortgages' },
        { name: 'Ship Finance', href: '/services/lawyer-services/aviation-maritime/maritime/ship-finance' },
        { name: 'Ship Building Agreements', href: '/services/lawyer-services/aviation-maritime/maritime/ship-building-agreements' },
      ],
    },
    'ship-mortgages': {
      title: 'Preferred Ship Mortgages',
      description:
        'Creation, registration and enforcement of ship mortgages under the Merchant Shipping Act, 1958, with priority advice.',
      overview:
        'A ship mortgage is the principal security for vessel financing. Under the Merchant Shipping Act, 1958, a mortgage of a registered Indian ship (or a share in her) is recorded by the Registrar and ranks in priority by date of registration. We advise lenders and owners on creating, registering, ranking and enforcing ship mortgages, including foreclosure and sale on default.',
      keyPoints: [
        'Mortgage drafting and registration with the Registrar',
        'Priority and ranking of mortgages',
        'Deed of covenant and collateral assignments',
        'Discharge and transfer of mortgages',
        'Enforcement, foreclosure and judicial sale',
      ],
      process: [
        { title: 'Documentation', desc: 'Draft the mortgage and deed of covenant.' },
        { title: 'Registration', desc: 'Record the mortgage with the Registrar of Indian ships for priority.' },
        { title: 'Enforcement', desc: 'On default, enforce through arrest, foreclosure and sale.' },
      ],
      faqs: [
        { q: 'How is a ship mortgage perfected?', a: 'By registration with the Registrar under the Merchant Shipping Act, 1958; priority follows the order of registration.' },
        { q: 'How is a mortgage enforced?', a: 'Through admiralty action — arrest of the vessel, judicial sale and distribution of proceeds by priority.' },
      ],
      relatedServices: [
        { name: 'Loan Agreements', href: '/services/lawyer-services/aviation-maritime/maritime/loan-agreements' },
        { name: 'Ship Finance', href: '/services/lawyer-services/aviation-maritime/maritime/ship-finance' },
        { name: 'Ship Arrest or Release', href: '/services/lawyer-services/aviation-maritime/maritime/ship-arrest-release' },
      ],
    },
    'ship-finance': {
      title: 'Ship Finance',
      description:
        'Structured vessel financing — bank loans, leasing, sale-and-leaseback and export-credit, including FEMA / ECB compliance.',
      overview:
        'Ship finance combines several techniques — secured bank lending, finance and operating leases, sale-and-leaseback, and export-credit-agency support. We structure and document vessel financing for owners, lessors and financiers, integrating the security package with cross-border and FEMA / ECB considerations for Indian borrowers.',
      keyPoints: [
        'Bank loan, lease and sale-and-leaseback structures',
        'Export-credit-agency (ECA) backed financing',
        'Security: mortgage, earnings and insurance assignments',
        'FEMA / ECB compliance for cross-border funding',
        'Refinancing and restructuring',
      ],
      process: [
        { title: 'Structuring', desc: 'Select the optimal financing structure and jurisdiction.' },
        { title: 'Documentation', desc: 'Facility / lease agreements and the security suite.' },
        { title: 'Compliance & Closing', desc: 'ECB filings, security perfection and drawdown.' },
      ],
      faqs: [
        { q: 'What is sale-and-leaseback?', a: 'The owner sells the vessel to a financier and leases it back, releasing capital while retaining use of the ship.' },
        { q: 'Does ship finance involve FEMA?', a: 'Cross-border vessel financing for Indian entities engages FEMA and the ECB framework, requiring careful structuring.' },
      ],
      relatedServices: [
        { name: 'Loan Agreements', href: '/services/lawyer-services/aviation-maritime/maritime/loan-agreements' },
        { name: 'Preferred Ship Mortgages', href: '/services/lawyer-services/aviation-maritime/maritime/ship-mortgages' },
        { name: 'Ship Building Agreements', href: '/services/lawyer-services/aviation-maritime/maritime/ship-building-agreements' },
      ],
    },
    'ship-sale-purchase': {
      title: 'Ship Sale & Purchase Agreements',
      description:
        'Second-hand vessel sale and purchase on the Norwegian Saleform (NSF) — inspection, delivery, deletion and title transfer.',
      overview:
        'The sale and purchase of second-hand tonnage is typically documented on the Norwegian Saleform (NSF / Saleform 2012) or NIPPONSALE. We act for buyers and sellers on the memorandum of agreement, inspection and class records, deposit and escrow, delivery, deletion from the seller’s registry and transfer of clean title — coordinating with financiers and flag states.',
      keyPoints: [
        'Memorandum of Agreement (Norwegian Saleform 2012)',
        'Inspection, class records and condition surveys',
        'Deposit, escrow and payment mechanics',
        'Delivery, deletion certificate and bill of sale',
        'Clean title transfer and flag-state coordination',
      ],
      process: [
        { title: 'MOA', desc: 'Negotiate the memorandum of agreement and deposit terms.' },
        { title: 'Inspection', desc: 'Vessel and class-records inspection; conditions satisfied.' },
        { title: 'Closing', desc: 'Payment, bill of sale, deletion certificate and delivery.' },
      ],
      faqs: [
        { q: 'What is the Norwegian Saleform?', a: 'The most widely used standard contract for the sale and purchase of second-hand ships, currently the Saleform 2012.' },
        { q: 'What is a deletion certificate?', a: 'Proof that the vessel has been deleted from the seller’s flag registry, enabling registration under the buyer’s chosen flag.' },
      ],
      relatedServices: [
        { name: 'Ship Building Agreements', href: '/services/lawyer-services/aviation-maritime/maritime/ship-building-agreements' },
        { name: 'Ship Finance', href: '/services/lawyer-services/aviation-maritime/maritime/ship-finance' },
        { name: 'Ship License', href: '/services/lawyer-services/aviation-maritime/maritime/ship-license' },
      ],
    },
    'operation-maintenance-agreements': {
      title: 'Operation & Maintenance Agreements',
      description:
        'Ship management agreements covering technical, crew and commercial management on SHIPMAN-standard and bespoke terms.',
      overview:
        'Owners frequently outsource vessel operation to professional managers under ship management agreements (commonly BIMCO’s SHIPMAN). These cover technical management, crewing, maintenance, commercial management, budgets, performance standards and liability / indemnity allocation. We draft and negotiate management and O&M agreements for owners and managers.',
      keyPoints: [
        'Technical, crew and commercial management scope',
        'SHIPMAN and bespoke management agreements',
        'Budgets, fees and performance standards',
        'Maintenance, dry-docking and class compliance',
        'Liability, indemnity and insurance allocation',
      ],
      process: [
        { title: 'Scoping', desc: 'Define the management scope and KPIs.' },
        { title: 'Drafting', desc: 'Prepare the management / O&M agreement and budgets.' },
        { title: 'Mobilisation', desc: 'Handover, crewing and ongoing reporting.' },
      ],
      faqs: [
        { q: 'What is SHIPMAN?', a: 'BIMCO’s standard ship management agreement, widely used to engage third-party managers for technical, crew and commercial management.' },
        { q: 'Who is liable for crew negligence?', a: 'Allocation depends on the agreement; managers typically act as agents of the owner with negotiated liability and indemnity provisions.' },
      ],
      relatedServices: [
        { name: 'Transportation Agreements', href: '/services/lawyer-services/aviation-maritime/maritime/transportation-agreements' },
        { name: 'Ship License', href: '/services/lawyer-services/aviation-maritime/maritime/ship-license' },
        { name: 'Marine Insurance', href: '/services/lawyer-services/aviation-maritime/maritime/marine-insurance' },
      ],
    },
    'cargo-claims': {
      title: 'Cargo Claims',
      description:
        'Pursuit and defence of cargo loss, shortage and damage claims under the Hague-Visby Rules and the Carriage of Goods by Sea Act, 1925.',
      overview:
        'Cargo claims arise from loss, shortage, contamination or damage to goods carried by sea. Liability turns on the bill of lading, the Hague / Hague-Visby Rules and the Indian Carriage of Goods by Sea Act, 1925, including package limitation and the strict one-year time bar. We act for cargo interests, carriers, freight forwarders and insurers in pursuing and defending claims.',
      keyPoints: [
        'Cargo loss, shortage and damage claims',
        'Hague / Hague-Visby Rules and COGSA, 1925',
        'Package limitation and time-bar (one year) defence',
        'Survey, evidence and chain-of-custody',
        'Subrogated recovery for cargo insurers',
      ],
      process: [
        { title: 'Notice & Survey', desc: 'Preserve rights with timely notice and a joint survey.' },
        { title: 'Claim / Defence', desc: 'Quantify and pursue, or defend, the claim within the time bar.' },
        { title: 'Recovery', desc: 'Settlement or proceedings; subrogated recovery for insurers.' },
      ],
      faqs: [
        { q: 'What is the time limit for cargo claims?', a: 'Under the Hague-Visby Rules / COGSA, 1925, suit must generally be brought within one year of delivery (or when it should have been delivered).' },
        { q: 'Is the carrier’s liability limited?', a: 'Yes — package or weight-based limitation applies under the Rules, unless the carrier loses the right to limit.' },
      ],
      relatedServices: [
        { name: 'Marine Insurance', href: '/services/lawyer-services/aviation-maritime/maritime/marine-insurance' },
        { name: 'Transportation Agreements', href: '/services/lawyer-services/aviation-maritime/maritime/transportation-agreements' },
        { name: 'Shipping Litigation & Arbitration', href: '/services/lawyer-services/aviation-maritime/maritime/shipping-litigation-arbitration' },
      ],
    },
    'onboard-fire': {
      title: 'On-Board Fire',
      description:
        'Legal response to shipboard fire casualties — investigation, claims, DG Shipping inquiry and insurance recovery.',
      overview:
        'Fire on board is one of the most serious marine casualties, often triggering general average, cargo claims, hull damage and statutory inquiry. We act after a fire incident — coordinating the casualty investigation, the DG Shipping / flag-state inquiry, general-average and cargo claims, and hull, machinery and P&I insurance recovery, while protecting the owner’s and interests’ legal position.',
      keyPoints: [
        'Casualty investigation and evidence preservation',
        'DG Shipping / flag-state inquiry representation',
        'General average and cargo-damage claims',
        'Hull & machinery and P&I claims',
        'Liability allocation and recovery',
      ],
      process: [
        { title: 'Immediate Response', desc: 'Preserve evidence; appoint surveyors; notify insurers.' },
        { title: 'Inquiry & Claims', desc: 'Represent in the statutory inquiry; formulate GA and cargo claims.' },
        { title: 'Recovery', desc: 'Pursue insurance recovery and apportion liability.' },
      ],
      faqs: [
        { q: 'Does a fire trigger general average?', a: 'Often yes — firefighting measures and consequent sacrifices commonly give rise to a general-average act.' },
        { q: 'Is a statutory inquiry mandatory?', a: 'Serious casualties are reportable and may be investigated by the DG Shipping / flag State under the Merchant Shipping Act, 1958.' },
      ],
      relatedServices: [
        { name: 'General Average & Claims', href: '/services/lawyer-services/aviation-maritime/maritime/general-average-claims' },
        { name: 'Marine Insurance', href: '/services/lawyer-services/aviation-maritime/maritime/marine-insurance' },
        { name: 'Cargo Claims', href: '/services/lawyer-services/aviation-maritime/maritime/cargo-claims' },
      ],
    },
    'marine-insurance': {
      title: 'Marine Insurance',
      description:
        'Marine insurance advisory and claims under the Marine Insurance Act, 1963 — hull & machinery, cargo and P&I cover.',
      overview:
        'Marine insurance underpins every maritime venture. Governed by the Marine Insurance Act, 1963, it covers hull and machinery, cargo, freight and liability (P&I). We advise on policy wording, insurable interest, warranties and disclosure, and we pursue and defend claims — including subrogation, average and total-loss disputes — for owners, cargo interests, insurers and P&I clubs.',
      keyPoints: [
        'Hull & machinery, cargo, freight and P&I cover',
        'Policy wording, warranties and disclosure advice',
        'Insurable interest and utmost good faith',
        'Total loss, partial loss and average claims',
        'Subrogation and recovery actions',
      ],
      process: [
        { title: 'Cover Review', desc: 'Review policy wording, warranties and the risk profile.' },
        { title: 'Claim Handling', desc: 'Notify, document and quantify the claim; engage adjusters.' },
        { title: 'Resolution', desc: 'Settlement or proceedings; subrogated recovery.' },
      ],
      faqs: [
        { q: 'Which law governs marine insurance in India?', a: 'The Marine Insurance Act, 1963, modelled on the UK Marine Insurance Act, 1906.' },
        { q: 'What is utmost good faith?', a: 'A marine policy requires full and fair disclosure of material facts; non-disclosure can entitle the insurer to avoid the policy.' },
      ],
      relatedServices: [
        { name: 'Cargo Claims', href: '/services/lawyer-services/aviation-maritime/maritime/cargo-claims' },
        { name: 'General Average & Claims', href: '/services/lawyer-services/aviation-maritime/maritime/general-average-claims' },
        { name: 'On-Board Fire', href: '/services/lawyer-services/aviation-maritime/maritime/onboard-fire' },
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
    'international-trade-customs': {
      title: 'International Trade & Customs Law',
      description:
        'Advisory and disputes across customs, foreign trade and WTO matters — classification, valuation, FTAs, anti-dumping and DGFT.',
      overview:
        'Cross-border trade is governed by the Customs Act, 1962, the Foreign Trade (Development and Regulation) Act, 1992 and India’s WTO and FTA commitments. We advise importers, exporters and manufacturers on tariff classification, valuation, duty exemptions, FTA origin, export incentives, SCOMET and trade-remedy (anti-dumping / safeguard) matters, and represent clients before customs authorities and CESTAT.',
      keyPoints: [
        'Customs classification, valuation and duty disputes',
        'DGFT, FTP incentives and licensing',
        'Free Trade Agreement (FTA) rules of origin',
        'Anti-dumping, countervailing and safeguard matters',
        'SCOMET / export-control compliance',
        'CESTAT and appellate representation',
      ],
      process: [
        { title: 'Assessment', desc: 'Review the transaction, classification and applicable duties / incentives.' },
        { title: 'Compliance / Filing', desc: 'Advisory, licensing or representation before customs / DGFT.' },
        { title: 'Dispute Resolution', desc: 'Reply to show-cause notices; appeal to CESTAT and beyond.' },
      ],
      faqs: [
        { q: 'How are customs disputes appealed?', a: 'Through the departmental appellate hierarchy and then the Customs, Excise and Service Tax Appellate Tribunal (CESTAT), with further appeal to the High Court / Supreme Court on questions of law.' },
        { q: 'What are FTA rules of origin?', a: 'Conditions a product must meet to qualify as originating from an FTA partner country and claim preferential duty rates.' },
      ],
      relatedServices: [
        { name: 'Cross-Border Transactions', href: '/services/lawyer-services/aviation-maritime/international/cross-border-transactions' },
        { name: 'Foreign Decree Validation in India', href: '/services/lawyer-services/aviation-maritime/international/foreign-decree-validation' },
        { name: 'Money Laundering', href: '/services/lawyer-services/aviation-maritime/international/money-laundering' },
      ],
    },
    'citizenship-oci': {
      title: 'Indian Citizenship & OCI Cards',
      description:
        'Citizenship by naturalisation / registration, OCI card application, renewal and surrender under the Citizenship Act, 1955.',
      overview:
        'Indian citizenship and Overseas Citizen of India (OCI) status are governed by the Citizenship Act, 1955 and its rules. We advise on acquisition of citizenship by registration or naturalisation, OCI card issuance, re-issuance and renewal, renunciation of foreign / Indian citizenship and surrender certificates, and represent applicants in queries and appeals before the authorities.',
      keyPoints: [
        'Citizenship by registration and naturalisation',
        'OCI card application, re-issuance and renewal',
        'Renunciation and surrender of citizenship',
        'Documentation and eligibility advisory',
        'Representation in queries, rejections and appeals',
      ],
      process: [
        { title: 'Eligibility', desc: 'Assess the route and residence / documentary requirements.' },
        { title: 'Application', desc: 'Compile and file the citizenship / OCI application.' },
        { title: 'Follow-Through', desc: 'Respond to queries and represent in case of rejection.' },
      ],
      faqs: [
        { q: 'What is an OCI card?', a: 'Overseas Citizen of India status gives lifelong visa-free travel and many residency-like rights, but is not full citizenship and excludes voting and certain offices.' },
        { q: 'Can OCI be cancelled?', a: 'Yes — OCI registration can be cancelled on specified grounds; we represent cardholders in such proceedings.' },
      ],
      relatedServices: [
        { name: 'Visa Applications', href: '/services/lawyer-services/aviation-maritime/international/visa-applications' },
        { name: 'PR & Immigration', href: '/services/lawyer-services/aviation-maritime/international/pr-immigration' },
        { name: 'Passport Issues & Appeals', href: '/services/lawyer-services/aviation-maritime/international/passport-issues-appeals' },
      ],
    },
    'visa-applications': {
      title: 'Visa Applications',
      description:
        'End-to-end support for tourist, business, student, employment and spouse visas — to India and abroad — including FRRO matters.',
      overview:
        'Visa processes are document-intensive and unforgiving of error. We assist individuals and businesses with visa applications across categories — tourist, business, student, employment and spouse / dependent — for travel to India and abroad, including Indian e-visa, FRRO / FRO registration, visa extensions, conversions and refusal responses.',
      keyPoints: [
        'Tourist, business, student, employment and spouse visas',
        'Indian e-visa and FRRO / FRO registration',
        'Visa extension and conversion',
        'Document preparation and sponsorship letters',
        'Refusal review and re-application strategy',
      ],
      process: [
        { title: 'Category & Eligibility', desc: 'Identify the correct visa category and requirements.' },
        { title: 'Application', desc: 'Prepare documents and file the application / registration.' },
        { title: 'Follow-Up', desc: 'Track status, attend interviews and handle any refusal.' },
      ],
      faqs: [
        { q: 'What is FRRO registration?', a: 'Foreigners staying in India beyond a prescribed period must register with the Foreigners Regional Registration Office (FRRO) within the stipulated time.' },
        { q: 'Can a refused visa be re-applied?', a: 'Yes — with a corrected, stronger application addressing the grounds of refusal; we advise on strategy.' },
      ],
      relatedServices: [
        { name: 'PR & Immigration', href: '/services/lawyer-services/aviation-maritime/international/pr-immigration' },
        { name: 'Indian Citizenship & OCI Cards', href: '/services/lawyer-services/aviation-maritime/international/citizenship-oci' },
        { name: 'Marriage with Foreigners & Legal Support', href: '/services/lawyer-services/aviation-maritime/international/marriage-with-foreigners' },
      ],
    },
    'pr-immigration': {
      title: 'PR & Immigration',
      description:
        'Permanent residency and immigration advisory across major destination countries, including documentation and eligibility strategy.',
      overview:
        'Permanent residency and immigration pathways vary widely by country — points-based systems, skilled-migration, investment and family routes. We provide eligibility assessment, documentation strategy and legal support for PR and immigration applications, coordinating with licensed overseas counsel / agents where local representation is required.',
      keyPoints: [
        'Eligibility assessment across PR routes',
        'Skilled, investment and family migration advisory',
        'Documentation and evidence preparation',
        'Coordination with licensed overseas counsel',
        'Refusal / appeal strategy',
      ],
      process: [
        { title: 'Assessment', desc: 'Evaluate profile against target-country PR criteria.' },
        { title: 'Preparation', desc: 'Assemble documentation and the application strategy.' },
        { title: 'Submission & Support', desc: 'File and support through to decision, with overseas counsel as needed.' },
      ],
      faqs: [
        { q: 'Do you guarantee PR approval?', a: 'No lawyer can guarantee a government decision; we maximise eligibility and application quality and manage the process professionally.' },
        { q: 'Is overseas counsel involved?', a: 'For country-specific filings, we coordinate with licensed local counsel / agents in the destination country.' },
      ],
      relatedServices: [
        { name: 'Green Card & Citizenship Cases', href: '/services/lawyer-services/aviation-maritime/international/green-card-citizenship' },
        { name: 'Visa Applications', href: '/services/lawyer-services/aviation-maritime/international/visa-applications' },
        { name: 'Indian Citizenship & OCI Cards', href: '/services/lawyer-services/aviation-maritime/international/citizenship-oci' },
      ],
    },
    'green-card-citizenship': {
      title: 'Green Card & Citizenship Cases',
      description:
        'Advisory and coordination for US green card and citizenship matters — family, employment and investment categories.',
      overview:
        'US permanent residence (green card) and naturalisation follow detailed, category-specific rules — family-sponsored, employment-based (EB), and investment (EB-5) routes, followed by naturalisation. We provide eligibility advisory, documentation strategy and coordination with US-licensed immigration attorneys for filing and representation, helping clients navigate the process from India.',
      keyPoints: [
        'Family-sponsored and employment-based (EB) green cards',
        'Investment (EB-5) route advisory',
        'Naturalisation / citizenship eligibility',
        'Documentation and evidence strategy',
        'Coordination with US-licensed attorneys',
      ],
      process: [
        { title: 'Eligibility', desc: 'Assess the appropriate green-card / citizenship category.' },
        { title: 'Strategy & Documents', desc: 'Build the documentation and filing strategy.' },
        { title: 'Filing Coordination', desc: 'Coordinate filing and representation with US counsel.' },
      ],
      faqs: [
        { q: 'Can an Indian firm file US immigration petitions?', a: 'Filings before USCIS are made through US-licensed attorneys; we provide advisory and coordinate the process for clients in India.' },
        { q: 'What is EB-5?', a: 'A US investment-based green-card category requiring a qualifying investment that creates jobs.' },
      ],
      relatedServices: [
        { name: 'PR & Immigration', href: '/services/lawyer-services/aviation-maritime/international/pr-immigration' },
        { name: 'Visa Applications', href: '/services/lawyer-services/aviation-maritime/international/visa-applications' },
        { name: 'Marriage with Foreigners & Legal Support', href: '/services/lawyer-services/aviation-maritime/international/marriage-with-foreigners' },
      ],
    },
    'passport-issues-appeals': {
      title: 'Passport Issues & Appeals',
      description:
        'Resolution of passport refusal, impounding and police-verification issues, with appeals under the Passports Act, 1967.',
      overview:
        'Passport problems — refusal, impounding, denial due to pending criminal cases, police-verification adverse reports or tatkaal disputes — are governed by the Passports Act, 1967. We assist applicants in resolving these issues, obtaining court permission to travel where cases are pending, and filing appeals and writ petitions against adverse passport-authority action.',
      keyPoints: [
        'Refusal, impounding and revocation matters',
        'Police-verification adverse-report resolution',
        'Court permission to obtain / use a passport in pending cases',
        'Appeals under the Passports Act, 1967',
        'Writ petitions against passport-authority action',
      ],
      process: [
        { title: 'Diagnosis', desc: 'Identify the ground for refusal / impounding.' },
        { title: 'Remedy', desc: 'Representation, court permission or appeal as required.' },
        { title: 'Resolution', desc: 'Obtain the passport or favourable order.' },
      ],
      faqs: [
        { q: 'Can I get a passport with a pending criminal case?', a: 'Often yes — with permission from the court where the case is pending, which we obtain and submit to the passport authority.' },
        { q: 'How is a passport refusal challenged?', a: 'Through an appeal under the Passports Act, 1967, and a writ petition before the High Court where warranted.' },
      ],
      relatedServices: [
        { name: 'Indian Citizenship & OCI Cards', href: '/services/lawyer-services/aviation-maritime/international/citizenship-oci' },
        { name: 'Deportation Cases', href: '/services/lawyer-services/aviation-maritime/international/deportation-cases' },
        { name: 'Blacklisting Removal', href: '/services/lawyer-services/aviation-maritime/international/blacklisting-removal' },
      ],
    },
    'deportation-cases': {
      title: 'Deportation Cases',
      description:
        'Defence against deportation, detention and removal under the Foreigners Act, 1946, including leave-to-remain and appeals.',
      overview:
        'Deportation and removal of foreigners are governed by the Foreigners Act, 1946 and related orders. We represent foreign nationals facing deportation, detention or overstay action — seeking regularisation, exit permits, leave to remain, release from detention and relief before the authorities and High Courts on humanitarian and legal grounds.',
      keyPoints: [
        'Defence against deportation and removal',
        'Overstay regularisation and exit permits',
        'Release from detention centres',
        'Leave-to-remain and humanitarian grounds',
        'Writ petitions and appeals',
      ],
      process: [
        { title: 'Case Review', desc: 'Assess immigration status, the order and available grounds.' },
        { title: 'Representation', desc: 'Make representations to FRRO / MHA; seek interim relief.' },
        { title: 'Relief', desc: 'Regularisation, controlled exit or court relief as appropriate.' },
      ],
      faqs: [
        { q: 'Can deportation be challenged?', a: 'Yes — through representations to the authorities and writ petitions before the High Court on legal and humanitarian grounds.' },
        { q: 'What happens on visa overstay?', a: 'Overstay can attract penalties, deportation and blacklisting; early regularisation and an exit permit reduce consequences.' },
      ],
      relatedServices: [
        { name: 'Blacklisting Removal', href: '/services/lawyer-services/aviation-maritime/international/blacklisting-removal' },
        { name: 'Visa Applications', href: '/services/lawyer-services/aviation-maritime/international/visa-applications' },
        { name: 'Passport Issues & Appeals', href: '/services/lawyer-services/aviation-maritime/international/passport-issues-appeals' },
      ],
    },
    'marriage-with-foreigners': {
      title: 'Marriage with Foreigners & Legal Support',
      description:
        'Legal support for cross-border marriages — registration under the Special Marriage Act, spouse visas and document legalisation.',
      overview:
        'Marriages involving a foreign national raise layered legal needs — solemnisation and registration (often under the Special Marriage Act, 1954), document legalisation / apostille, spouse and dependent visas, and recognition of foreign marriages in India. We provide end-to-end support so the marriage is valid, registered and recognised across jurisdictions, and the spouse’s immigration status is secured.',
      keyPoints: [
        'Marriage registration under the Special Marriage Act, 1954',
        'Recognition of foreign marriages in India',
        'Document legalisation and apostille',
        'Spouse / dependent visa support',
        'Prenuptial and cross-border family advisory',
      ],
      process: [
        { title: 'Advisory', desc: 'Map solemnisation, registration and documentation requirements.' },
        { title: 'Registration', desc: 'Notice, solemnisation and registration; legalisation of documents.' },
        { title: 'Immigration', desc: 'Spouse-visa and status support post-marriage.' },
      ],
      faqs: [
        { q: 'How is a marriage with a foreigner registered in India?', a: 'Commonly under the Special Marriage Act, 1954, with a 30-day notice period and prescribed documentation for the foreign spouse.' },
        { q: 'Is a foreign marriage valid in India?', a: 'A validly solemnised foreign marriage is generally recognised; we advise on documentation and registration for use in India.' },
      ],
      relatedServices: [
        { name: 'Visa Applications', href: '/services/lawyer-services/aviation-maritime/international/visa-applications' },
        { name: 'Foreign Decree Validation in India', href: '/services/lawyer-services/aviation-maritime/international/foreign-decree-validation' },
        { name: 'Indian Citizenship & OCI Cards', href: '/services/lawyer-services/aviation-maritime/international/citizenship-oci' },
      ],
    },
    'foreign-decree-validation': {
      title: 'Foreign Decree Validation in India',
      description:
        'Recognition and enforcement of foreign judgments and decrees in India under Sections 13 and 44A of the Civil Procedure Code.',
      overview:
        'A foreign judgment or decree is not automatically enforceable in India. Under Section 13 CPC it must be conclusive and free of the listed exceptions, and under Section 44A a decree from a notified reciprocating territory can be executed as if passed by an Indian court; others require a fresh suit on the foreign judgment. We advise on recognition, enforcement and defence of foreign decrees — including family, commercial and arbitral matters.',
      keyPoints: [
        'Section 13 CPC conclusiveness analysis',
        'Section 44A execution for reciprocating territories',
        'Fresh suit on a foreign judgment (non-reciprocating)',
        'Foreign divorce / family decree recognition',
        'Defence against enforcement of foreign decrees',
      ],
      process: [
        { title: 'Assessment', desc: 'Check reciprocating-territory status and Section 13 exceptions.' },
        { title: 'Enforcement Route', desc: 'Execution under Section 44A or a fresh suit, as applicable.' },
        { title: 'Proceedings', desc: 'Pursue or defend recognition and enforcement in court.' },
      ],
      faqs: [
        { q: 'Is a foreign divorce valid in India?', a: 'Only if it satisfies Section 13 CPC tests (jurisdiction, merits, natural justice, etc.); otherwise it may not be recognised.' },
        { q: 'What is a reciprocating territory?', a: 'A country notified by the Indian government whose superior-court decrees can be executed in India under Section 44A CPC.' },
      ],
      relatedServices: [
        { name: 'Marriage with Foreigners & Legal Support', href: '/services/lawyer-services/aviation-maritime/international/marriage-with-foreigners' },
        { name: 'Cross-Border Transactions', href: '/services/lawyer-services/aviation-maritime/international/cross-border-transactions' },
        { name: 'International Trade & Customs Law', href: '/services/lawyer-services/aviation-maritime/international/international-trade-customs' },
      ],
    },
    'blacklisting-removal': {
      title: 'Blacklisting Removal',
      description:
        'Removal from immigration / FRRO blacklists and adverse-entry databases, restoring the ability to travel to and from India.',
      overview:
        'A blacklist or adverse entry in immigration databases (FRRO / Bureau of Immigration) can bar a foreign national’s entry, or an Indian national’s exit, often arising from overstay, deportation, visa violations or pending cases. We assess the basis of the listing, make representations to the Bureau of Immigration / MHA / FRRO for deletion, and pursue writ remedies where the listing is unjustified or unexplained.',
      keyPoints: [
        'Identification of the blacklisting authority and ground',
        'Representation to Bureau of Immigration / MHA / FRRO',
        'Deletion / de-listing applications',
        'Writ petitions against unjustified listing',
        'Coordination with overstay / deportation resolution',
      ],
      process: [
        { title: 'Verification', desc: 'Determine the listing authority, reason and category.' },
        { title: 'Representation', desc: 'File a reasoned de-listing representation with supporting documents.' },
        { title: 'Remedy', desc: 'On no / adverse response, pursue a writ petition for removal.' },
      ],
      faqs: [
        { q: 'Why am I blacklisted?', a: 'Common reasons include overstay, prior deportation, visa violations or pending proceedings; we first ascertain the exact basis.' },
        { q: 'Can a blacklist be removed?', a: 'Yes — through representation to the issuing authority and, where needed, a writ petition before the High Court.' },
      ],
      relatedServices: [
        { name: 'Deportation Cases', href: '/services/lawyer-services/aviation-maritime/international/deportation-cases' },
        { name: 'Visa Applications', href: '/services/lawyer-services/aviation-maritime/international/visa-applications' },
        { name: 'Passport Issues & Appeals', href: '/services/lawyer-services/aviation-maritime/international/passport-issues-appeals' },
      ],
    },
  },
};
