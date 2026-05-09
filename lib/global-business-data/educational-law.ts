import type { ServiceContent } from '@/components/leaf-service-page';

export type EduCategory = 'institutional' | 'courses' | 'counseling-admission';

export const educationalLawCategoryMeta: Record<
  EduCategory,
  { label: string; tagline: string }
> = {
  institutional: {
    label: 'University / College / School',
    tagline: 'Legal advisory for educational institutions',
  },
  courses: {
    label: 'Legal Exam Coaching',
    tagline: 'Coaching & preparation for legal entrance and professional exams',
  },
  'counseling-admission': {
    label: 'Counseling, Admission & Training',
    tagline: 'Career guidance, admissions and law-school training',
  },
};

export const educationalLawServices: Record<
  EduCategory,
  Record<string, ServiceContent>
> = {
  institutional: {
    'setup-strategy': {
      title: 'Setup Strategy & Implementation',
      description:
        'End-to-end strategic and legal roadmap for setting up a school, college or university — entity structuring, regulator mapping and rollout.',
      overview:
        'Establishing an educational institution in India is a multi-year, multi-regulator project. We design the right legal entity (society, trust or Section 8 company), map applicable regulators (UGC, AICTE, NMC, BCI, NCTE, CBSE, state boards), and run the implementation through every milestone — from land use change to inauguration.',
      keyPoints: [
        'Entity selection — society / trust / Section 8 company',
        'Regulator and approval roadmap with statutory timelines',
        'Land use, zoning and infrastructure compliance',
        'Promoter MoU, governance and conflict-management framework',
        'Funding strategy — debt, philanthropy, FDI viability',
        'Phased implementation plan with dependency mapping',
      ],
      process: [
        { title: 'Diagnostic & Vision', desc: 'Map promoter intent, scale, geography and target programmes.' },
        { title: 'Structure & Documentation', desc: 'Incorporate entity; draft MoA, AoA, deed, governance manuals.' },
        { title: 'Regulator Pathway', desc: 'File with applicable statutory bodies; track milestones to operational launch.' },
        { title: 'Launch & Stabilization', desc: 'Compliance calendar, board operationalization, first-year audit readiness.' },
      ],
      faqs: [
        { q: 'Society, trust or Section 8 — which is best?', a: 'It depends on tax position, geography, governance comfort and funding strategy. Trusts suit family-controlled institutions; societies suit collegial promoter groups; Section 8 companies suit institutional and grant funding.' },
        { q: 'Can a school be a for-profit?', a: 'Indian school education is largely required to be not-for-profit. Coaching, skill, training and ed-tech enterprises can be for-profit.' },
      ],
    },
    'licenses-approvals': {
      title: 'Licenses & Regulatory Approvals',
      description:
        'Procurement of essential licenses for educational institutions — affiliation, recognition, NOCs, fire, sanitation and statutory permissions.',
      overview:
        'Each layer of education has its own affiliation and recognition framework — CBSE / state board for schools, UGC / state university for colleges, AICTE / NMC / BCI for professional courses. We coordinate the entire stack from state-government essentiality certificates to central regulator approvals.',
      keyPoints: [
        'Essentiality and No-Objection Certificates from state government',
        'CBSE / ICSE / state board affiliation for schools',
        'UGC / state university / private university recognition',
        'AICTE, NMC, BCI, NCTE, COA, INC, PCI approvals (program-specific)',
        'Fire, sanitation, building plan and occupation certificates',
        'NAAC, NBA accreditation readiness',
      ],
      process: [
        { title: 'Application Mapping', desc: 'Identify all applicable approvals and their statutory sequence.' },
        { title: 'File Preparation', desc: 'Compile inspection-ready files — infrastructure, faculty, financials, governance.' },
        { title: 'Inspection & Hearings', desc: 'Coordinate site inspections; respond to deficiency memos.' },
        { title: 'Approval', desc: 'Approval letters, gazette notifications and code allocation.' },
      ],
      faqs: [
        { q: 'How long does CBSE affiliation take?', a: 'Typically 12–18 months from initial application to provisional affiliation, subject to infrastructure readiness and state NOC.' },
      ],
    },
    'regulatory-compliance': {
      title: 'Regulatory Compliance',
      description:
        'Ongoing compliance with education-sector regulators — UGC, AICTE, NMC, BCI, NCTE, NAAC, NBA and state authorities.',
      overview:
        'Education regulators require continuous reporting — annual reports, financial returns, AISHE data, faculty disclosures and self-study reports. Lapses invite show-cause notices, derecognition and admission caps. We build compliance calendars, manage filings and represent institutions in inspections.',
      keyPoints: [
        'Compliance calendar across central & state regulators',
        'AISHE, AIU, UGC online filings',
        'AICTE, NMC, BCI, NCTE annual returns',
        'NAAC / NBA cycle preparedness',
        'Show-cause notice replies and derecognition defence',
        'Mandatory disclosures on website and portals',
      ],
      process: [
        { title: 'Compliance Audit', desc: 'Map all applicable filings, disclosures and inspections.' },
        { title: 'Calendar & SOPs', desc: 'Build calendar; assign owners; set internal due dates.' },
        { title: 'Filings & Inspections', desc: 'Periodic filings, inspection management and corrective actions.' },
      ],
      faqs: [
        { q: 'What if a deadline is missed?', a: 'Late filings are usually permissible with explanation and fee. Repeated lapses risk show-cause notices, admission caps and recognition withdrawal.' },
      ],
    },
    'student-rights-protection': {
      title: 'Student Rights Protection',
      description:
        'Representation of students and parents in unfair expulsion, denial of admission, fee disputes, exam disqualification and ragging incidents.',
      overview:
        'The right to education is fundamental and education regulators have specific student-protection frameworks — UGC anti-ragging regulations, fee regulation acts, and grievance redressal mechanisms. We represent students before institutional ombudsmen, regulators and writ courts.',
      keyPoints: [
        'Wrongful expulsion / rustication challenge',
        'Denial of admission / migration disputes',
        'Fee refund and excess-fee recovery',
        'Anti-ragging UGC Regulations enforcement',
        'Examination malpractice false-allegation defence',
        'Disability-rights advocacy under RPwD Act',
      ],
      process: [
        { title: 'Complaint Mapping', desc: 'Identify the right forum — internal grievance committee, ombudsman, regulator, writ court.' },
        { title: 'Representation', desc: 'Drafting and arguing the matter at chosen forum.' },
        { title: 'Outcome', desc: 'Reinstatement, refund, examination order or compensation.' },
      ],
      faqs: [
        { q: 'Can I challenge wrongful expulsion?', a: 'Yes — through internal grievance redressal, then UGC Ombudsman or writ petition before High Court for violation of natural justice.' },
      ],
    },
    'policy-drafting-review': {
      title: 'Policy Drafting & Review',
      description:
        'Comprehensive drafting and review of institutional policies — anti-ragging, anti-harassment, IP, academic integrity, leave and admission.',
      overview:
        'Robust policies are the first line of defence against disputes and regulatory action. We draft and audit policies for legal compliance, internal coherence and enforceability — covering all UGC / AICTE / POSH / RPwD requirements.',
      keyPoints: [
        'Anti-ragging policy and squad SOPs',
        'POSH (Sexual Harassment) policy and ICC SOPs',
        'Academic integrity / plagiarism policy',
        'IP, technology transfer and consultancy policy',
        'Admission, scholarship and refund policy',
        'Leave, sabbatical and grievance redressal',
      ],
      process: [
        { title: 'Diagnostic', desc: 'Audit existing policies vs regulatory requirement.' },
        { title: 'Drafting', desc: 'Tailored, compliance-mapped policy suite.' },
        { title: 'Implementation', desc: 'Board adoption, training and communication.' },
      ],
      faqs: [
        { q: 'Are POSH policies mandatory?', a: 'Yes — every institution with 10+ employees must have a POSH policy and Internal Committee under the 2013 Act.' },
      ],
    },
    'institutional-governance': {
      title: 'Institutional Governance',
      description:
        'Advisory on board composition, fiduciary duties, succession, conflict-of-interest and statutory committees.',
      overview:
        'Sound governance is non-negotiable for accreditation, donor confidence and dispute resilience. We help boards of trustees / governors structure committees, define authority matrices, manage conflicts and ensure regulatory representation requirements are met.',
      keyPoints: [
        'Board / Governing Council structuring',
        'Charter, bye-laws and authority matrix',
        'Statutory committees — IQAC, Anti-Ragging, ICC, Grievance',
        'Conflict-of-interest and related-party governance',
        'Succession planning for trustees / promoters',
        'Crisis-governance protocols',
      ],
      process: [
        { title: 'Charter Audit', desc: 'Review existing constitutional documents and committee structures.' },
        { title: 'Redesign', desc: 'Update charter, bye-laws and policies.' },
        { title: 'Capacity Building', desc: 'Trustee orientation and ongoing governance support.' },
      ],
      faqs: [
        { q: 'Do regulators dictate board composition?', a: 'For deemed and private universities, UGC mandates specific representations — academic, government and industry — on the governing body.' },
      ],
    },
    'dispute-negotiation': {
      title: 'Dispute Negotiation',
      description:
        'Pre-litigation negotiation, mediation and settlement of disputes involving students, faculty, vendors and regulators.',
      overview:
        'Litigation is expensive and reputation-damaging for educational institutions. We deploy structured negotiation and mediation — leveraging neutral facilitation, conditional offers and confidentiality — to resolve disputes before they escalate.',
      keyPoints: [
        'Faculty and staff exit negotiation',
        'Student fee, examination and disciplinary settlement',
        'Vendor and infrastructure dispute mediation',
        'Inter-institutional MoU / partnership disputes',
        'Pre-litigation legal notice strategy',
      ],
      process: [
        { title: 'Position Map', desc: 'Internal preparation — interests, BATNA, walk-away terms.' },
        { title: 'Negotiation', desc: 'Structured rounds with documentation and confidentiality.' },
        { title: 'Settlement', desc: 'Binding settlement agreement with mutual releases.' },
      ],
      faqs: [
        { q: 'Is settlement enforceable?', a: 'A signed settlement agreement is enforceable as a contract; mediation settlements under the Mediation Act, 2023 have additional enforceability.' },
      ],
    },
    'special-education-advocacy': {
      title: 'Special Education Advocacy',
      description:
        'Rights advocacy for children with disabilities under RPwD Act, RTE Act and inclusive education frameworks.',
      overview:
        'The Rights of Persons with Disabilities Act, 2016 mandates inclusive education with reasonable accommodations. We represent children, parents and special schools to enforce admission, accessibility, curricular adaptation and examination concessions.',
      keyPoints: [
        'RPwD Act, 2016 implementation and enforcement',
        'RTE Act 25% admission for disadvantaged groups',
        'Reasonable accommodation and assistive devices',
        'Examination concessions and scribe permissions',
        'Inclusive curriculum and individualized education',
        'Disability commissioner complaints',
      ],
      process: [
        { title: 'Eligibility', desc: 'Disability certification and educational assessment.' },
        { title: 'Application', desc: 'Admission and accommodation request with documentation.' },
        { title: 'Enforcement', desc: 'Disability commissioner / writ remedy on denial.' },
      ],
      faqs: [
        { q: 'Are private schools bound by RPwD?', a: 'Yes — Section 16 mandates inclusive education for all educational institutions, including private and unaided.' },
      ],
    },
    'accreditation-licensing': {
      title: 'Accreditation & Licensing',
      description:
        'NAAC, NBA, ABET, accreditation and continuous renewal — preparation, evidence packaging and peer-team coordination.',
      overview:
        'Accreditation moves from being optional to mandatory under National Education Policy. NAAC, NBA and program-specific accreditors require detailed self-study reports and peer team visits. We project-manage accreditation cycles with documentation, mock visits and rebuttal support.',
      keyPoints: [
        'NAAC SSR drafting and metric mapping',
        'NBA program-specific accreditation',
        'International accreditation (ABET, AACSB, ACBSP)',
        'Renewal and re-accreditation cycles',
        'Peer team visit hosting protocol',
        'Appeal of grades / outcomes',
      ],
      process: [
        { title: 'Gap Analysis', desc: 'Map current state vs accreditation criteria; identify priority gaps.' },
        { title: 'SSR Drafting', desc: 'Self-Study Report with evidence index.' },
        { title: 'Peer Visit', desc: 'Visit hosting, presentations and rebuttals.' },
        { title: 'Outcome', desc: 'Grade / accreditation; appeal where warranted.' },
      ],
      faqs: [
        { q: 'How long is NAAC accreditation valid?', a: 'NAAC accreditation is valid for 5 years; institutions must apply for re-accreditation before expiry.' },
      ],
    },
    'contract-review': {
      title: 'Contract Review',
      description:
        'Drafting and review of all institutional contracts — faculty, vendor, MoU, technology transfer, leasing and consortium.',
      overview:
        'Educational institutions enter dozens of contracts annually — faculty appointments, vendor SLAs, technology licensing, lab equipment leases, hostel and cafeteria operators. Each carries risk that surfaces years later. We standardize templates and review high-value transactions.',
      keyPoints: [
        'Faculty appointment, tenure and exit contracts',
        'Vendor and AMC agreements',
        'Inter-institutional MoUs (Indian and overseas)',
        'Technology transfer and consultancy agreements',
        'Hostel, cafeteria and BOT operator contracts',
        'Sponsored research and corporate partnerships',
      ],
      process: [
        { title: 'Template Library', desc: 'Build standardized templates for repetitive contracts.' },
        { title: 'Risk Review', desc: 'Customized review for high-value or non-standard contracts.' },
        { title: 'Negotiation', desc: 'Counsel-led negotiation for material clauses.' },
      ],
      faqs: [
        { q: 'Are MoUs binding?', a: 'Generally MoUs are non-binding but specific clauses (confidentiality, exclusivity, IP) often are. Drafting clarity is critical.' },
      ],
    },
    'intellectual-property': {
      title: 'Intellectual Property',
      description:
        'IP creation, ownership, licensing and commercialization frameworks for academic research, courseware and institutional brand.',
      overview:
        'Universities increasingly generate valuable IP — patents from research, copyright in courseware, trademarks in name and logo. Without clear IP policy, ownership disputes between faculty, students, sponsors and institution become inevitable. We design and operationalize IP frameworks.',
      keyPoints: [
        'Institutional IP Policy — ownership and revenue sharing',
        'Patent strategy and faculty disclosures',
        'Courseware and MOOC copyright',
        'Trademark portfolio for institution and programs',
        'Technology transfer and spin-offs',
        'Sponsored research IP terms',
      ],
      process: [
        { title: 'IP Audit', desc: 'Inventory existing IP and disclosures.' },
        { title: 'Policy', desc: 'Comprehensive IP policy with revenue-share matrix.' },
        { title: 'Operations', desc: 'Patent / copyright / trademark filings; TT office support.' },
      ],
      faqs: [
        { q: 'Who owns research IP — faculty or institution?', a: 'Default position varies; a clear written IP policy with revenue-share is essential to avoid disputes.' },
      ],
    },
    'government-grant-compliance': {
      title: 'Government Grant Compliance',
      description:
        'Compliance management for UGC, AICTE, ICAR, ICMR, DST, DBT, RUSA and similar government grants — utilization, reporting and audit.',
      overview:
        'Government grants come with detailed utilization rules, reporting timelines and audit triggers. Misuse or non-compliance can lead to recovery orders, debarment and prosecution. We manage end-to-end grant compliance from sanction to closure.',
      keyPoints: [
        'Sanction letter clause analysis',
        'Utilization Certificate (UC) drafting',
        'Statement of Expenditure (SoE) compilation',
        'CAG and statutory audit handling',
        'Refund and recovery defence',
        'Debarment / black-listing defence',
      ],
      process: [
        { title: 'Onboarding', desc: 'Grant clause map and milestone schedule.' },
        { title: 'Operations', desc: 'Periodic UCs, SoEs and audit responses.' },
        { title: 'Closure', desc: 'Final UC, audit clearance and grant closure.' },
      ],
      faqs: [
        { q: 'What if a grant is questioned?', a: 'Respond with documentary justification within prescribed time. Untimely or weak responses risk recovery orders and prosecution under Section 405 IPC.' },
      ],
    },
    'school-board-advice': {
      title: 'Legal Advice for School Boards',
      description:
        'Continuous in-house counsel role for school boards / managing committees — meetings, decisions, policies and crisis management.',
      overview:
        'School boards make decisions that touch children, parents, faculty and regulators. We act as embedded counsel — attending meetings, drafting minutes, reviewing decisions, vetting communications and providing immediate response in crisis situations.',
      keyPoints: [
        'Board meeting attendance and minute drafting',
        'Decision compliance and risk advisory',
        'Parent and community communication',
        'Crisis management — accidents, incidents, allegations',
        'Faculty / staff discipline advisory',
        'Media and reputation management coordination',
      ],
      process: [
        { title: 'Engagement', desc: 'Define scope, retainer and SLAs.' },
        { title: 'Operations', desc: 'Continuous availability for meetings and queries.' },
        { title: 'Crisis Response', desc: '24×7 advisory for incident management.' },
      ],
      faqs: [
        { q: 'How quickly can counsel respond in a crisis?', a: 'On a retainer model, immediate phone advisory and on-site presence within 24 hours where required.' },
      ],
    },
    'harassment-cases': {
      title: 'Handling Harassment Cases',
      description:
        'POSH compliance, Internal Committee setup, complaint inquiries and representation in harassment / abuse / ragging cases.',
      overview:
        'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 mandates Internal Committees in all institutions with 10+ employees. UGC anti-ragging regulations add further obligations. We help institutions structure compliance, conduct fair inquiries and represent in litigation.',
      keyPoints: [
        'POSH Act, 2013 — policy, ICC and SOPs',
        'Internal Committee training and inquiry support',
        'UGC Anti-Ragging Regulation compliance',
        'Inquiry conduct, documentation and report drafting',
        'Workplace investigation and disciplinary action',
        'Defence in writ / civil / criminal proceedings',
      ],
      process: [
        { title: 'Compliance Architecture', desc: 'Policy, ICC, anti-ragging squad and reporting channels.' },
        { title: 'Inquiry', desc: 'Confidential, fair and time-bound inquiry per statutory framework.' },
        { title: 'Action & Defence', desc: 'Implementation of recommendations; defence in onward proceedings.' },
      ],
      faqs: [
        { q: 'What is the timeline for ICC inquiry?', a: '90 days from receipt of complaint, with action recommendation within 10 days of inquiry completion.' },
        { q: 'Can the accused be suspended?', a: 'Yes — interim relief including suspension, transfer or no-contact orders are available during inquiry.' },
      ],
    },
  },

  courses: {
    'clat-ailet': {
      title: 'CLAT / AILET',
      description:
        'Comprehensive coaching for Common Law Admission Test and All India Law Entrance Test — gateway to NLUs and NLU-Delhi.',
      overview:
        'CLAT and AILET are the most competitive law entrance exams in India. Our integrated programme covers all five sections — English, GK & Current Affairs, Legal Reasoning, Logical Reasoning and Quantitative Techniques — with conceptual foundations, practice and 50+ full-length tests.',
      keyPoints: [
        'Section-wise concept building and practice',
        'Daily current-affairs digest and monthly quizzes',
        'Legal reasoning passages from CLAT-style sources',
        '50+ full-length mocks with sectional analysis',
        'One-on-one mentorship and doubt-clearing',
        'Strategy for NLU choice-filling and counseling',
      ],
      process: [
        { title: 'Diagnostic Test', desc: 'Initial assessment to map strengths and gaps.' },
        { title: 'Foundation', desc: 'Conceptual base across all 5 sections.' },
        { title: 'Practice & Mocks', desc: 'Sectional drills, full mocks and analysis.' },
        { title: 'Final Sprint', desc: 'Speed, accuracy and exam-day strategy.' },
      ],
      faqs: [
        { q: 'When should I start CLAT prep?', a: 'Ideally 12–18 months before the exam. A structured 12-month plan suffices for most candidates.' },
        { q: 'How is AILET different from CLAT?', a: 'AILET (NLU Delhi) is shorter (~70 min, 110 questions in 2024 pattern) with no quant section; emphasis differs from CLAT.' },
      ],
    },
    'judicial-services': {
      title: 'Judicial Services',
      description:
        'Coaching for State Judicial Services Examinations (PCS-J / Higher Judicial Services) — Prelims, Mains and Interview.',
      overview:
        'Judicial Services exams are state-specific 3-stage tests requiring deep substantive law knowledge, drafting skill and interview poise. Our programme covers core Indian laws (CPC, CrPC, IPC, Evidence, Contract, IPR, Constitution), state-specific laws and language papers.',
      keyPoints: [
        'Substantive and procedural law mastery',
        'State-specific local laws and language',
        'Mains-style answer writing with feedback',
        'Mock interviews with retired judges',
        'Latest Supreme Court / High Court judgments',
        'State-wise strategy customization',
      ],
      process: [
        { title: 'Prelims', desc: 'MCQ preparation, daily quizzes and section drills.' },
        { title: 'Mains', desc: 'Subject-wise concepts and weekly answer writing.' },
        { title: 'Interview', desc: 'Mock interview, current legal affairs and personality grooming.' },
      ],
      faqs: [
        { q: 'When can I appear?', a: 'Right after LLB for PCS-J in most states (some require 2-3 years of practice). Higher Judicial Services typically requires 7+ years of practice.' },
      ],
    },
    'civil-services': {
      title: 'Civil Services',
      description:
        'UPSC Civil Services preparation — Prelims, Mains and Interview — with focus on Law Optional and integrated General Studies.',
      overview:
        'UPSC CSE is the gateway to IAS, IPS, IFS and other Group-A services. We offer integrated coaching with comprehensive General Studies (GS-1 to GS-4), Essay, CSAT and Law Optional — for candidates with legal background.',
      keyPoints: [
        'GS Mains 1-4 and Essay paper',
        'CSAT and Prelims-focused training',
        'Law Optional — exhaustive subject-wise coverage',
        'Daily current affairs and answer writing',
        'Mains test series with evaluation',
        'Interview preparation and DAF analysis',
      ],
      process: [
        { title: 'Prelims', desc: 'GS, CSAT, current affairs intensive prep.' },
        { title: 'Mains', desc: 'GS, Essay, Optional with weekly answer writing.' },
        { title: 'Interview', desc: 'DAF-based mock interviews and grooming.' },
      ],
      faqs: [
        { q: 'Is Law a good optional?', a: 'For LLB / LLM candidates, Law is a strong optional with manageable syllabus and high-scoring potential when answers are well-structured with case-law.' },
      ],
    },
    'law-for-ias': {
      title: 'Law for IAS',
      description:
        'Specialized GS Polity, Constitution and Law-Optional preparation tailored for UPSC aspirants from legal backgrounds.',
      overview:
        'Lawyers preparing for UPSC have a distinct advantage in Polity, Constitution, Ethics (legal angle) and Law Optional. Our programme leverages this — sharpening MCQ accuracy, mains structuring and ethics application — while strengthening non-legal GS areas.',
      keyPoints: [
        'GS Paper 2 Polity & Constitution mastery',
        'Ethics (GS-4) — legal lens and case studies',
        'Law Optional — Constitutional, International, IPC, Torts, Contract',
        'Current affairs through legal lens',
        'Bridging non-legal GS subjects',
        'Targeted answer-writing mentorship',
      ],
      process: [
        { title: 'Strengths Audit', desc: 'Map legal advantage; identify GS gaps.' },
        { title: 'Coaching', desc: 'Integrated GS + Optional with answer-writing.' },
        { title: 'Mocks & Mentorship', desc: 'Test series, evaluation and personalized feedback.' },
      ],
      faqs: [
        { q: 'How long does prep take for a lawyer?', a: '12–15 months for a focused legal-background candidate; more if working full-time.' },
      ],
    },
    'law-for-ugc-net': {
      title: 'Law for UGC-NET',
      description:
        'Coaching for UGC NET / JRF in Law — Paper 1 (General) and Paper 2 (Law) for college teaching and PhD eligibility.',
      overview:
        'UGC-NET in Law qualifies candidates for Assistant Professorship and PhD admission across Indian universities. JRF additionally provides a fellowship. Our programme covers Paper 1 (research methodology, teaching aptitude, logical reasoning) and Paper 2 (entire law syllabus).',
      keyPoints: [
        'Paper 1 — research aptitude, teaching, logic, ICT, environment',
        'Paper 2 — Constitutional, Jurisprudence, IPC, Contract, IPR, International',
        'Previous papers analysis and patterning',
        'JRF cut-off targeting strategies',
        'Research methodology in-depth coverage',
        'Mock tests and evaluation',
      ],
      process: [
        { title: 'Foundation', desc: 'Syllabus walk-through and study plan.' },
        { title: 'Practice', desc: 'Weekly tests and revision.' },
        { title: 'Final Sprint', desc: 'Speed tests and previous-paper drills.' },
      ],
      faqs: [
        { q: 'Is JRF possible without coaching?', a: 'Self-study is possible but structured coaching significantly improves accuracy and JRF qualification probability.' },
      ],
    },
    'company-secretary': {
      title: 'Company Secretary',
      description:
        'CS Foundation, Executive and Professional level coaching aligned with ICSI syllabus and exam pattern.',
      overview:
        'The Company Secretary qualification from ICSI requires clearing Foundation, Executive and Professional levels followed by training. Our programme provides classroom and online coaching, ICSI study material decoding, mock tests and viva preparation.',
      keyPoints: [
        'Foundation — Business Environment, Accounting, Economics',
        'Executive — Company Law, Tax, Securities, Cost Accounting',
        'Professional — Governance, IBC, Resolution Strategy, Drafting',
        'ICSI-aligned mock tests and revision capsules',
        'Past-paper analysis and topic priorities',
        'Practical training mentorship',
      ],
      process: [
        { title: 'Level Selection', desc: 'Map current education / exemptions to entry level.' },
        { title: 'Coaching', desc: 'Subject-wise classes with weekly tests.' },
        { title: 'Final Prep', desc: 'Mock exams, revision and exam strategy.' },
      ],
      faqs: [
        { q: 'How long does CS take?', a: '3–5 years end-to-end including training, depending on entry point and pace.' },
      ],
    },
    'patent-agent-exam': {
      title: 'Patent Agent Examination',
      description:
        'Specialized preparation for the Indian Patent Agent Examination conducted by the Indian Patent Office for technical / science graduates.',
      overview:
        'Becoming a registered Patent Agent allows you to file and prosecute patents before the Indian Patent Office. The exam tests Patents Act, 1970, Rules, Manual of Patent Office Procedures and drafting skills. Eligibility requires science / technical degree.',
      keyPoints: [
        'Patents Act, 1970 — exhaustive coverage',
        'Patent Rules, 2003 and amendments',
        'Manual of Patent Office Practice and Procedure',
        'Patent specification drafting practice',
        'Claims drafting and amendment exercises',
        'Mock exams in actual paper format',
      ],
      process: [
        { title: 'Eligibility & Strategy', desc: 'Confirm eligibility; map study plan.' },
        { title: 'Concepts & Drafting', desc: 'Statute mastery and hands-on drafting.' },
        { title: 'Mocks', desc: 'Full-length mocks with feedback.' },
      ],
      faqs: [
        { q: 'Who is eligible?', a: 'Citizens of India with a degree in science, engineering, technology or equivalent and 21+ years of age.' },
      ],
    },
    'trademark-agent-exam': {
      title: 'Trademark Agent Examination',
      description:
        'Coaching for the Trade Marks Agent Examination conducted by the Indian Trademark Registry for prospective trademark agents.',
      overview:
        'Trademark Agent registration allows individuals to act before the Trade Marks Registry on behalf of clients. The exam tests the Trade Marks Act, 1999, Rules, Manual of Trade Marks Practice and procedural drafting.',
      keyPoints: [
        'Trade Marks Act, 1999 and Rules, 2017',
        'Examination, opposition and rectification procedures',
        'Manual of Trade Marks Office Practice',
        'Drafting of TM-A, TM-O, TM-M and replies',
        'Madrid Protocol and international trademark practice',
        'Mock papers with viva preparation',
      ],
      process: [
        { title: 'Eligibility', desc: 'Confirm eligibility (Indian citizen, advocate or graduate).' },
        { title: 'Concepts & Drafting', desc: 'Statute and hands-on form drafting.' },
        { title: 'Mocks', desc: 'Mock papers and viva training.' },
      ],
      faqs: [
        { q: 'Is law degree mandatory?', a: 'No — any graduate (with required age) is eligible. Advocates have a streamlined path.' },
      ],
    },
  },

  'counseling-admission': {
    'career-counseling': {
      title: 'Career Counseling',
      description:
        'One-on-one career counseling for law aspirants, law students and early-career lawyers — entrance exam choice, course selection and career path mapping.',
      overview:
        'Choosing the right entrance, course, university and career path is critical and time-sensitive. Our counselors include practicing lawyers, law professors and admission specialists who guide candidates with personalized assessment and informed roadmaps.',
      keyPoints: [
        'Aptitude and interest assessment',
        'Entrance exam selection (CLAT vs LSAT vs IPU vs DU)',
        'Specialization choice — corporate, litigation, IP, public policy',
        'University ranking and ROI analysis',
        'Internship and clerkship strategy',
        'Long-term career roadmap',
      ],
      process: [
        { title: 'Discovery Session', desc: '90-minute discovery covering background, aspirations and constraints.' },
        { title: 'Roadmap', desc: 'Personalized written roadmap with milestones.' },
        { title: 'Follow-up', desc: 'Quarterly check-ins to recalibrate.' },
      ],
      faqs: [
        { q: 'Who should consider career counseling?', a: 'Class 11/12 students, undergraduates considering law, law students choosing specialization, and early-career lawyers re-evaluating direction.' },
      ],
    },
    'llb-admission': {
      title: 'LLB Admission',
      description:
        'End-to-end admission support for 5-year integrated and 3-year LLB programmes across NLUs, central, state and private law universities.',
      overview:
        'Beyond cracking the entrance, navigating counseling, choice-filling, document verification and waitlist movements is critical to securing the right college. We provide hands-on application support, choice strategy and document compliance.',
      keyPoints: [
        'University shortlisting based on rank and preference',
        'Choice-filling strategy for CLAT / AILET / LSAT counseling',
        'Document compilation and verification',
        'Application essays and SoPs (where applicable)',
        'Waitlist movement tracking',
        'Fee, hostel and migration coordination',
      ],
      process: [
        { title: 'Profile Mapping', desc: 'Rank, preferences, constraints and budget.' },
        { title: 'Choice Strategy', desc: 'Optimal choice-filling order and contingencies.' },
        { title: 'Counseling Round', desc: 'Real-time guidance through counseling rounds.' },
      ],
      faqs: [
        { q: 'Can I change my choices after the first round?', a: 'Most counseling allows upgradation in subsequent rounds; freeze / float / slide options need to be exercised carefully.' },
      ],
    },
    'llm-admission': {
      title: 'LLM Admission',
      description:
        'Admission counseling for LLM programmes (1-year & 2-year) across NLUs, premier Indian universities and select international LLM programmes.',
      overview:
        'LLM specialization choice — Corporate, IP, International, Constitutional, Tax — significantly shapes career trajectory. We help candidates choose specialization, university and country (where applicable) with practical career-outcome lens.',
      keyPoints: [
        'Specialization fit assessment',
        '1-year vs 2-year LLM strategy',
        'NLU-CLAT-PG vs Foreign LLM trade-offs',
        'University shortlisting (India and abroad)',
        'Application — research statement, recommendations, transcripts',
        'Funding and scholarship guidance',
      ],
      process: [
        { title: 'Goals & Specialization', desc: 'Define academic and career goals.' },
        { title: 'University Strategy', desc: 'Shortlist with realistic ranking and reach.' },
        { title: 'Application', desc: 'Documents, essays, recommendations and submission.' },
      ],
      faqs: [
        { q: 'Indian LLM or US / UK LLM?', a: 'Depends on intended career — Indian LLM suits academia / Indian practice; US / UK LLM suits cross-border practice and international careers.' },
      ],
    },
    'phd-admission': {
      title: 'PhD Admission',
      description:
        'PhD admission support across NLUs, central universities and global doctoral programmes — research proposal, university choice and viva preparation.',
      overview:
        'A strong research proposal is the heart of any PhD application. We help candidates identify research questions, refine proposals, identify supervisors and prepare for entrance exams and viva.',
      keyPoints: [
        'Research question identification and literature review',
        'Research proposal drafting',
        'Supervisor identification and outreach',
        'Entrance exam (UGC-NET / NLU-CLAT-PhD / institutional)',
        'Interview / viva preparation',
        'Funding — JRF / fellowships / international scholarships',
      ],
      process: [
        { title: 'Topic Discovery', desc: 'Map research interests with current literature gaps.' },
        { title: 'Proposal Drafting', desc: '15-25 page proposal with methodology and references.' },
        { title: 'Application', desc: 'Targeted applications and supervisor outreach.' },
      ],
      faqs: [
        { q: 'How long is PhD in law?', a: '3–6 years typically. Some integrated MPhil-PhD or direct PhD tracks exist with varied durations.' },
      ],
    },
    'legal-drafting-pleading-training': {
      title: 'Legal Drafting & Pleading Training',
      description:
        'Hands-on training in legal drafting — pleadings, contracts, opinions, notices and writs — for law students and junior lawyers.',
      overview:
        'Drafting is the most under-taught yet critical legal skill. Our programme is hands-on — students draft live, get red-line feedback and iterate. Modules cover civil, criminal, contractual, opinion writing and writs.',
      keyPoints: [
        'Plaint, written statement, replication and rejoinder',
        'Criminal complaint, bail application and quashing petition',
        'Contracts — SPA, SHA, NDA, employment, franchise',
        'Legal opinion writing and memo drafting',
        'Writ petitions and SLPs',
        'In-person red-line feedback and iteration',
      ],
      process: [
        { title: 'Foundations', desc: 'Civil and criminal pleading structure and conventions.' },
        { title: 'Hands-on', desc: 'Live drafting exercises and red-line feedback.' },
        { title: 'Specialization', desc: 'Choose track — corporate, litigation or constitutional.' },
      ],
      faqs: [
        { q: 'Is this online or in-person?', a: 'Both options available. Hybrid (online theory + in-person drafting clinics) is most popular.' },
      ],
    },
    'moot-court-competition': {
      title: 'Moot Court Competition',
      description:
        'Coaching for national and international moot court competitions — Jessup, Vis, NLS, NUJS, Stetson and more — research, drafting and oral advocacy.',
      overview:
        'Moot court success requires research depth, memorial drafting precision and oral advocacy stagecraft. Our coaches — moot finalists and law professors — train teams through propositional analysis, memorial drafting and intensive mock arguments.',
      keyPoints: [
        'Proposition analysis and issue framing',
        'International law / commercial / constitutional research',
        'Memorial drafting with citations and signposting',
        'Oral advocacy — opening, structure, judge management',
        'Mock rounds with cross-bench feedback',
        'Tournament-specific strategy (Jessup, Vis, NLS, etc.)',
      ],
      process: [
        { title: 'Team Onboarding', desc: 'Roles, timeline and proposition deep-dive.' },
        { title: 'Memorial Drafting', desc: 'Iterative drafting with research and red-lines.' },
        { title: 'Oral Practice', desc: 'Multiple mock rounds before tournament.' },
      ],
      faqs: [
        { q: 'How early should we start?', a: '4-6 months before the tournament for premier moots; 2-3 months for shorter circuits.' },
      ],
    },
    'study-abroad': {
      title: 'Study Abroad',
      description:
        'Counseling for overseas legal education — LLB, LLM, JD, MJur, BCL — across UK, US, Australia, Canada, Singapore and EU.',
      overview:
        'Overseas legal education opens international career doors but requires careful country, university and program selection. We help candidates align academic and career goals with the right destination — factoring cost, qualifying-exam pathways (Bar, NCA, FATA) and post-study work options.',
      keyPoints: [
        'Country and university shortlisting',
        'Program comparison — LLB, LLM, JD, MJur, BCL, MSt',
        'Standardized tests — LSAT, GRE, IELTS, TOEFL',
        'Application essays and recommendations',
        'Scholarship and funding strategy',
        'Bar / qualifying-exam pathway in destination',
      ],
      process: [
        { title: 'Goals Mapping', desc: 'Career intent, geography and budget.' },
        { title: 'Application', desc: 'University-wise application with custom essays.' },
        { title: 'Pre-Departure', desc: 'Visa, accommodation, on-arrival support.' },
      ],
      faqs: [
        { q: 'UK or US for legal career?', a: 'Depends on practice intent. UK is faster (1-year LLM, structured Bar route); US JD is 3 years with state-specific Bar.' },
      ],
    },
    'foreign-immigration-visa': {
      title: 'Foreign Immigration & Visa',
      description:
        'Visa, work permit, permanent residency and citizenship advisory — student, work, dependent and PR pathways across major jurisdictions.',
      overview:
        'Immigration matters are paperwork-intensive and rule-rich. We provide comprehensive advisory across student visas, post-study work permits, employer-sponsored work visas, family reunification and permanent residency / citizenship in major destinations.',
      keyPoints: [
        'Student visa (UK Student Route, US F-1, Canada SDS, AU Subclass 500)',
        'Post-study work — UK Graduate Route, US OPT/STEM, Canada PGWP',
        'Work visas — H-1B, L-1, UK Skilled Worker, Canada Express Entry',
        'Family / dependent and partner visas',
        'PR pathways — Express Entry, Skilled Migration, EB-5',
        'Citizenship by descent / investment / naturalization',
      ],
      process: [
        { title: 'Eligibility', desc: 'Assess visa category fit based on profile and purpose.' },
        { title: 'Documentation', desc: 'Compile documents, financials and supporting evidence.' },
        { title: 'Submission & Tracking', desc: 'Application, biometrics, interview and tracking through decision.' },
      ],
      faqs: [
        { q: 'How long does a student visa take?', a: 'UK Student Route: 3 weeks; US F-1: 2-8 weeks; Canada SDS: 4-8 weeks. Plan with buffer for biometrics and interviews.' },
        { q: 'Can I work on a student visa?', a: 'Most countries allow part-time work during studies (typically 20 hours/week) with full-time during breaks. Specifics vary.' },
      ],
    },
  },
};
