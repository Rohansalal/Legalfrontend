import type { ServiceContent } from '@/components/leaf-service-page';

export const criminalLawServices: Record<string, ServiceContent> = {
  'fir-registration': {
    title: 'FIR Registration & Police Complaint Assistance',
    description:
      'Legal assistance in lodging First Information Reports, ensuring proper categorization and pursuing remedies when police refuse to register.',
    overview:
      'A First Information Report (FIR) under Section 154 CrPC is the first step in any cognizable criminal case. Where police refuse, statutory remedies under Section 154(3), 156(3) CrPC and writ petition before the High Court are available. We assist in drafting watertight complaints and pursuing every layer of remedy.',
    keyPoints: [
      'Drafting precise FIR with relevant sections',
      'Section 154(3) CrPC representation to SP on refusal',
      'Section 156(3) CrPC application before Magistrate',
      'Writ petition for FIR registration',
      'Lalita Kumari guidelines compliance',
      'Counter-FIR strategy in matrimonial / property disputes',
    ],
    process: [
      { title: 'Complaint Drafting', desc: 'Draft FIR with chronological narrative and applicable sections.' },
      { title: 'Police Station Filing', desc: 'File at jurisdictional police station; obtain copy as per Section 154(2).' },
      { title: 'Escalation', desc: 'On refusal, write to SP under Section 154(3) and approach Magistrate under Section 156(3).' },
      { title: 'Writ Remedy', desc: 'High Court writ if administrative remedies fail.' },
    ],
    faqs: [
      { q: 'What if police refuse to register FIR?', a: 'You can write to SP under Section 154(3); if still no action, file complaint before Magistrate under Section 156(3) directing police to register and investigate.' },
      { q: 'Can I file FIR online?', a: 'Several states allow online FIR filing for non-cognizable offences and certain cognizable offences. For serious crimes physical filing is recommended.' },
    ],
  },
  'criminal-complaint-filing': {
    title: 'Filing Criminal Complaints (Cr.P.C.)',
    description:
      'Filing private criminal complaints before Magistrates under Section 200 CrPC for non-FIR registrable matters or where direct cognizance is sought.',
    overview:
      'A private criminal complaint under Section 200 CrPC empowers any person to set the criminal law in motion before a Magistrate. After examining the complainant on oath, the Magistrate can take cognizance and issue process to the accused. This is the primary route for offences not requiring FIR.',
    keyPoints: [
      'Drafting private complaint with cause of action',
      'Section 200 examination on oath',
      'Section 202 inquiry / direction for police investigation',
      'Issuance of process under Section 204',
      'Trial-ready strategy from complaint stage',
    ],
    process: [
      { title: 'Drafting', desc: 'Draft complaint with chronological facts, witnesses and documents.' },
      { title: 'Filing & Examination', desc: 'Court examines complainant on oath under Section 200.' },
      { title: 'Inquiry / Process', desc: 'Magistrate may order Section 202 inquiry or directly issue process.' },
      { title: 'Trial', desc: 'Case proceeds to summons / warrant trial as per offence category.' },
    ],
    faqs: [
      { q: 'When is private complaint preferable?', a: 'For matrimonial cruelty, defamation, cheque bounce, harassment and where police are unlikely to act effectively.' },
    ],
  },
  'complaint-drafting': {
    title: 'Drafting Complaints — Police, Magistrate & Authorities',
    description:
      'Precision drafting of complaints to police stations, Magistrates, regulatory bodies and ombudsmen — the first defence against any future challenge.',
    overview:
      'A poorly drafted complaint can derail the strongest case at the threshold. We draft complaints with chronology, applicable provisions, party details, evidence inventory and prayer — anticipating defences and ensuring jurisdictional and procedural correctness.',
    keyPoints: [
      'Police complaints (cognizable / non-cognizable)',
      'Magistrate complaints under Section 200 CrPC',
      'Regulatory complaints (SEBI, RBI, IRDAI, CERT-In)',
      'Ombudsman / Lokpal / Lokayukta complaints',
      'Vigilance and CVC complaints',
    ],
    process: [
      { title: 'Briefing', desc: 'Detailed briefing on facts, evidence and intended outcome.' },
      { title: 'Drafting', desc: 'Provision-mapped, evidence-anchored complaint with annexure index.' },
      { title: 'Filing & Follow-up', desc: 'Submission with acknowledgement and follow-up letters.' },
    ],
    faqs: [
      { q: 'Do complaints need to mention legal sections?', a: 'While not strictly mandatory, citing applicable sections sharpens the complaint and pre-empts mis-classification.' },
    ],
  },
  'bail': {
    title: 'Regular & Anticipatory Bail',
    description:
      'Strategic bail applications — anticipatory under Section 438 CrPC and regular under Section 437/439 CrPC — before Sessions Courts and High Courts.',
    overview:
      'Bail is the rule, jail is the exception. We secure anticipatory bail to prevent arrest, regular bail post-arrest, transit bail for cross-border arrests and cancellation defence. Our approach combines statutory grounds, judicial precedents and case-specific equities.',
    keyPoints: [
      'Anticipatory bail under Section 438 CrPC',
      'Regular bail under Section 437 / 439 CrPC',
      'Default / statutory bail under Section 167(2)',
      'Bail in special statutes (PMLA, NDPS, UAPA)',
      'Cancellation of bail defence',
      'Transit / interim bail',
    ],
    process: [
      { title: 'Strategy', desc: 'Map allegations, sections, prior antecedents and likely opposition arguments.' },
      { title: 'Application', desc: 'File before competent court with grounds, precedents and surety details.' },
      { title: 'Arguments', desc: 'Oral arguments emphasizing parity, equities and statutory grounds.' },
      { title: 'Conditions Compliance', desc: 'Compliance with bail conditions; modification if conditions are onerous.' },
    ],
    faqs: [
      { q: 'Can anticipatory bail be granted without filing FIR?', a: 'Yes — anticipatory bail can be granted on apprehension of arrest, even before FIR registration, where reasonable belief of arrest exists.' },
      { q: 'What are typical bail conditions?', a: 'Surety bonds, passport surrender, cooperation with investigation, no contact with witnesses, and periodic reporting to police station.' },
      { q: 'Is PMLA bail harder?', a: 'Yes — Section 45 imposes twin-test (court satisfaction of innocence and no future offence). Recent Supreme Court rulings have refined this in favour of women, sick and minor accused.' },
    ],
  },
  'fir-quashing-appeals': {
    title: 'FIR Quashing & Criminal Appeals (High Court)',
    description:
      'Quashing of FIRs / chargesheets / proceedings under Section 482 CrPC and criminal appeals before the High Court.',
    overview:
      'Section 482 CrPC preserves the inherent power of the High Court to prevent abuse of process and secure the ends of justice. We file quashing petitions where allegations are absurd, do not constitute an offence, are vitiated by bad faith or are amicably settled.',
    keyPoints: [
      'Section 482 CrPC quashing petitions',
      'Quashing on settlement (compoundable & non-compoundable)',
      'Quashing on absence of essential ingredients',
      'Criminal appeals against conviction / acquittal',
      'Revision under Section 397 CrPC',
      'Bhajan Lal categories invocation',
    ],
    process: [
      { title: 'Diagnostic', desc: 'Analyse FIR / chargesheet for legal infirmities, jurisdictional issues and Bhajan Lal categories.' },
      { title: 'Petition', desc: 'Draft petition with annexed FIR, chargesheet and supporting documents.' },
      { title: 'Arguments', desc: 'Oral arguments before High Court relying on State of Haryana v. Bhajan Lal and successor judgments.' },
      { title: 'Order', desc: 'Quashing order results in termination of criminal proceedings.' },
    ],
    faqs: [
      { q: 'Can FIR for serious offences be quashed?', a: 'Yes — even non-compoundable serious offences (Section 498A, etc.) can be quashed where parties have settled, subject to court satisfaction.' },
      { q: 'What is Bhajan Lal?', a: 'Supreme Court judgment laying 7 categories where FIRs may be quashed — including absence of offence, vexatious filings and absurd allegations.' },
    ],
  },
  'arrest-remand-writ': {
    title: 'Arrest, Remand, Appeals & Writ Petitions',
    description:
      'Defence at every critical pre-trial stage — arrest, police custody, judicial custody, criminal appeals and constitutional writs.',
    overview:
      'The first 90 days post-arrest decide most criminal cases. We act swiftly at remand stage to prevent prolonged custody, secure proper legal representation, file habeas corpus where illegality exists, and pursue criminal appeals and constitutional writs at every level.',
    keyPoints: [
      'Remand opposition (police / judicial custody)',
      'Habeas corpus for illegal detention',
      'Section 482 CrPC and Article 226 writ petitions',
      'Criminal appeals before Sessions / High Court / Supreme Court',
      'Special Leave Petitions (Article 136)',
      'Article 32 petitions for fundamental rights violation',
    ],
    process: [
      { title: 'Immediate Response', desc: 'Reach the police station / court within hours; oppose police custody.' },
      { title: 'Bail Strategy', desc: 'Concurrent bail application with remand opposition.' },
      { title: 'Long-term', desc: 'Criminal appeals / writs as required.' },
    ],
    faqs: [
      { q: 'How long can police custody last?', a: 'Maximum 15 days from first remand. Thereafter, only judicial custody, which can extend to 60 / 90 days based on offence category.' },
      { q: 'When is habeas corpus appropriate?', a: 'Where detention is illegal, unconstitutional or in excess of authority — including private custody and unauthorized police detention.' },
    ],
  },
  'contempt-of-court': {
    title: 'Contempt of Courts Act Matters',
    description:
      'Civil and criminal contempt proceedings — initiating actions for non-compliance and defending alleged contemnors.',
    overview:
      'The Contempt of Courts Act, 1971 punishes wilful disobedience of court orders (civil contempt) and conduct that scandalizes or interferes with administration of justice (criminal contempt). Punishment includes imprisonment up to 6 months and fine up to ₹2,000 — but the real consequence is the affront to one\'s record.',
    keyPoints: [
      'Civil contempt petitions for non-compliance of decree / order',
      'Criminal contempt for scandalizing court / publication',
      'Contempt defence — bona fide explanation, apology',
      'Truth as defence under Section 13',
      'Suo motu contempt response',
    ],
    process: [
      { title: 'Notice / Petition', desc: 'Show-cause notice to alleged contemnor; petition before High Court.' },
      { title: 'Reply / Apology', desc: 'Bona fide apology often resolves matter; otherwise full reply on merits.' },
      { title: 'Hearing & Order', desc: 'Court may discharge, accept apology or sentence.' },
    ],
    faqs: [
      { q: 'Is apology a defence?', a: 'A bona fide and unconditional apology is often accepted, especially in first instances and where prejudice is minimal.' },
      { q: 'Can social-media posts be contempt?', a: 'Yes — posts scandalizing the court or substantially interfering with pending proceedings can attract criminal contempt.' },
    ],
  },
  'lookout-circular-cancellation': {
    title: 'Lookout Circular Cancellation',
    description:
      'Quashing of Lookout Circulars (LOCs) issued by BoI / agencies that prevent travel — through writ petitions and representations.',
    overview:
      'A Lookout Circular issued by an agency through Bureau of Immigration can prevent international travel. LOCs issued without compliance with the OM dated 27.10.2010 (and subsequent updates) or without recording reasons are routinely quashed by High Courts as violative of Articles 14 and 21.',
    keyPoints: [
      'Representation to issuing authority',
      'Writ petition under Article 226 for quashing',
      'Interim release / leave to travel applications',
      'Bond and undertaking modifications',
      'CBI / ED LOC challenges',
    ],
    process: [
      { title: 'LOC Verification', desc: 'Confirm LOC details — issuing authority, date, grounds.' },
      { title: 'Representation', desc: 'Letter to issuing authority seeking cancellation / modification.' },
      { title: 'Writ Petition', desc: 'On no response, file writ before High Court for quashing.' },
      { title: 'Travel Permission', desc: 'Interim leave to travel pending final order.' },
    ],
    faqs: [
      { q: 'Why are LOCs commonly issued?', a: 'In bank fraud, FEMA, GST, tax evasion, NDPS and serious criminal cases. Banks routinely request LOCs against borrowers in distress.' },
      { q: 'How fast can LOC be cancelled?', a: 'Where LOC is non-speaking or procedurally defective, High Courts pass favourable interim orders within weeks.' },
    ],
  },
  'warrant-cancellation': {
    title: 'Warrant Cancellation',
    description:
      'Cancellation / recall of arrest warrants, non-bailable warrants and proclamation under Section 82 CrPC.',
    overview:
      'Warrants are issued when accused fail to appear or comply with court orders. We file recall / cancellation applications, surrender with bail, and challenge proclamations under Section 82 CrPC. Quick action prevents asset attachment under Section 83 and absconder declaration.',
    keyPoints: [
      'NBW (non-bailable warrant) cancellation',
      'BW (bailable warrant) compliance and bonds',
      'Surrender with bail strategy',
      'Section 82 proclamation challenge',
      'Section 83 attachment defence',
    ],
    process: [
      { title: 'Warrant Diagnosis', desc: 'Identify type of warrant and underlying default.' },
      { title: 'Recall Application', desc: 'File application with reasons for non-appearance and bond / surety.' },
      { title: 'Personal Appearance', desc: 'Attend court personally where directed; warrant cancelled.' },
    ],
    faqs: [
      { q: 'What if Section 82 proclamation is published?', a: 'Time-bound action is critical — challenge through application before issuing court and writ if needed.' },
    ],
  },
  'murder-abduction-negligence': {
    title: 'Murder, Abduction & Death by Negligence',
    description:
      'Defence and prosecution in murder (Section 302 IPC), culpable homicide (Section 304), abduction (Section 363/365) and death by rash / negligent act (Section 304A).',
    overview:
      'These are some of the most serious offences in the IPC, carrying life imprisonment or death penalty. Our team includes specialists in trial-court advocacy, cross-examination and forensic-evidence challenge — handling matters from sessions trial to Supreme Court appeals.',
    keyPoints: [
      'Section 302 / 304 IPC — murder & culpable homicide',
      'Section 363 / 365 / 366 IPC — abduction & kidnapping',
      'Section 304A IPC — death by negligence',
      'Forensic evidence challenge (FSL, ballistics, DNA)',
      'Eyewitness cross-examination strategy',
      'Last-seen-together and chain-of-circumstances defence',
    ],
    process: [
      { title: 'Case Theory', desc: 'Build defence theory — alibi, self-defence, lack of motive, witness contradictions.' },
      { title: 'Trial', desc: 'Examination, cross-examination and rebuttal evidence.' },
      { title: 'Appeals', desc: 'High Court and Supreme Court appeals on conviction.' },
    ],
    faqs: [
      { q: 'What\'s the difference between Section 302 and 304?', a: 'Section 302 is murder (life / death); Section 304 is culpable homicide not amounting to murder (lower sentence) — depends on intention, knowledge and exceptions like sudden provocation.' },
    ],
  },
  'assault-injury': {
    title: 'Assault, Serious Injury & Personal Violence',
    description:
      'Representation in offences against the human body — hurt (Section 323), grievous hurt (Section 325), acid attack (326A) and related provisions.',
    overview:
      'Assault and injury cases require precise medical-legal analysis — MLC (Medico-Legal Case), nature of injury, weapon used, and intention. We act for victims pursuing strict prosecution and compensation, and for accused defending charges with proportionality and self-defence arguments.',
    keyPoints: [
      'Section 323 / 324 / 325 / 326 IPC representation',
      'Acid attack (Section 326A / 326B) — survivor support',
      'Compensation under Section 357 CrPC',
      'Victim Compensation Scheme (Section 357A)',
      'Medical examination and MLC analysis',
      'Right of private defence (Section 96–106 IPC)',
    ],
    process: [
      { title: 'Medical Records', desc: 'Procure MLC, hospital records, FSL where applicable.' },
      { title: 'Charge Mapping', desc: 'Identify exact provision based on nature of injury and weapon.' },
      { title: 'Trial / Settlement', desc: 'Trial or compounding (where permitted) under Section 320 CrPC.' },
    ],
    faqs: [
      { q: 'Can hurt cases be compounded?', a: 'Yes — many hurt offences are compoundable with court permission under Section 320 CrPC.' },
    ],
  },
  'imprisonment-kidnapping-threats': {
    title: 'False Imprisonment, Kidnapping & Threats',
    description:
      'Representation in wrongful confinement (Section 339-348), kidnapping (363-369) and criminal intimidation (Section 506) IPC.',
    overview:
      'Liberty offences — false imprisonment, wrongful restraint and kidnapping — strike at the core of personal freedom. Criminal intimidation matters often arise in commercial, matrimonial and property disputes. We handle prosecution and defence with care to nuance and motive.',
    keyPoints: [
      'Wrongful restraint and confinement (Section 339-348)',
      'Kidnapping (Section 363-369) — minor and adult',
      'Criminal intimidation (Section 506)',
      'Habeas corpus for illegal confinement',
      'Cross-border kidnapping (Hague reference where applicable)',
    ],
    process: [
      { title: 'Offence Mapping', desc: 'Distinguish wrongful restraint / confinement / kidnapping based on facts.' },
      { title: 'Action', desc: 'FIR / private complaint / habeas corpus as appropriate.' },
      { title: 'Trial', desc: 'Trial with focus on motive, opportunity and corroboration.' },
    ],
    faqs: [
      { q: 'Is consent of minor a defence in kidnapping?', a: 'No — under Section 361 IPC, consent of a minor below 18 (girl) / 16 (boy) does not negate kidnapping where taken from lawful guardian.' },
    ],
  },
  'theft-robbery-burglary': {
    title: 'Theft, Robbery, Burglary & Trespass',
    description:
      'Defence and prosecution in property offences — theft (Section 378), robbery (390), dacoity (391), housebreaking (445) and criminal trespass (441).',
    overview:
      'Property offences range from simple theft to dacoity by armed gangs. Each has distinct ingredients of force, weaponry, number of offenders and time of day. We handle FIR strategy, recovery proceedings, identification parades, and trial with rigorous attention to chain-of-custody of recovered articles.',
    keyPoints: [
      'Section 378-382 IPC — theft variants',
      'Section 390-394 IPC — robbery',
      'Section 391-395 IPC — dacoity',
      'Section 441-462 IPC — trespass and housebreaking',
      'Recovery and identification parade defence',
      'Restoration of stolen property under Section 452 CrPC',
    ],
    process: [
      { title: 'Charge Strategy', desc: 'Map exact provision based on force, weaponry and number of offenders.' },
      { title: 'Trial', desc: 'Test recovery evidence, identification parade and chain of custody.' },
    ],
    faqs: [
      { q: 'How is theft different from robbery?', a: 'Theft involves dishonest taking. Robbery is theft accompanied by use or threat of force, voluntarily and immediately.' },
    ],
  },
  'pocso': {
    title: 'POCSO Child Protection Cases',
    description:
      'Specialized representation in Protection of Children from Sexual Offences Act, 2012 (POCSO) — for survivors and accused with utmost confidentiality.',
    overview:
      'POCSO Act creates child-friendly procedures for sexual offences against minors with reverse burden of proof, in-camera trials and victim support. Cases require sensitivity, swift action and strong forensic evidence handling. We represent survivor families and defend accused with equal diligence and discretion.',
    keyPoints: [
      'POCSO offences and graded sentences',
      'Victim support — Special Court representation',
      'Bail strategy under Section 31 POCSO Act',
      'Reverse-burden of proof navigation (Section 29)',
      'Compensation under Section 33 / 357A CrPC',
      'Confidentiality and identity protection',
    ],
    process: [
      { title: 'Assessment', desc: 'Evaluate evidence, age proof, medical reports, statements under Section 161 / 164.' },
      { title: 'Trial Strategy', desc: 'Special Court trial with child-friendly procedures and screen examination.' },
      { title: 'Compensation / Defence', desc: 'Pursue or defend compensation; argue final sentence.' },
    ],
    faqs: [
      { q: 'Is bail difficult in POCSO?', a: 'Yes — POCSO has stringent provisions and reverse burden, making bail at trial stage difficult except on infirm evidence or close-age consensual relationships.' },
      { q: 'Can the accused be juvenile?', a: 'Yes — Juvenile Justice Act and POCSO interact; juvenile accused face proceedings before JJ Board with focus on reform.' },
    ],
  },
  'rape-sexual-assault': {
    title: 'Rape & Sexual Assault Cases',
    description:
      'Comprehensive representation in rape (Section 376 IPC), sexual harassment (354A), stalking (354D) and other sexual offences with confidentiality.',
    overview:
      'Sexual offence cases require swift action, evidence preservation and survivor support. We represent survivors through FIR, medical examination, statement under Section 164, trial and appeal — and equally defend wrongly accused with rigour, sensitivity and respect for due process.',
    keyPoints: [
      'Section 376 IPC and graded offences',
      'Section 354 / 354A / 354B / 354C / 354D IPC',
      'Section 164 CrPC statement before Magistrate',
      'Medical examination and FSL challenge',
      'Compensation under VC scheme',
      'Identity protection (Section 228A IPC)',
      'Defence in false / consensual cases',
    ],
    process: [
      { title: 'Immediate Steps', desc: 'FIR, medical examination within 24 hours, statement under Section 164.' },
      { title: 'Investigation Monitoring', desc: 'Ensure proper procedure, evidence collection and chargesheet timing.' },
      { title: 'Trial', desc: 'In-camera trial; survivor cross-examination handled sensitively.' },
    ],
    faqs: [
      { q: 'Can the trial be held in camera?', a: 'Yes — Section 327 CrPC mandates in-camera trial for rape and related offences with limited persons present.' },
      { q: 'Is identity of survivor protected?', a: 'Yes — Section 228A IPC criminalizes disclosure of identity of rape survivors and POCSO complainants.' },
    ],
  },
  'child-sex-juvenile': {
    title: 'Child Sex Crimes & Juvenile Justice',
    description:
      'Representation in child sex crimes under POCSO and juvenile-accused proceedings under the Juvenile Justice Act, 2015.',
    overview:
      'Where a juvenile is the accused, proceedings shift from regular criminal courts to Juvenile Justice Boards. The focus is on reform, rehabilitation and social investigation. For heinous offences (16+), the JJB can transfer the case to Children\'s Court for trial as adult.',
    keyPoints: [
      'JJB inquiry and orders',
      'Preliminary assessment for 16-18 age in heinous offences',
      'Children\'s Court trial procedure',
      'Rehabilitation plans and alternatives to incarceration',
      'Bail under JJ Act (right unless against welfare)',
      'Final orders — counselling, probation, observation home',
    ],
    process: [
      { title: 'Apprehension', desc: 'Special Juvenile Police Unit; produce before JJB within 24 hours.' },
      { title: 'Bail / Inquiry', desc: 'Default bail under Section 12; JJB inquiry begins.' },
      { title: 'Final Order', desc: 'JJ Act sentences emphasize reform — counselling, community service, observation home.' },
    ],
    faqs: [
      { q: 'Can a 17-year-old be tried as adult?', a: 'For heinous offences (punishable ≥7 years), the JJB conducts preliminary assessment and may transfer to Children\'s Court for trial as adult.' },
    ],
  },
  'cheque-bounce-ni-act': {
    title: 'Cheque Bounce — NI Act Section 138/142',
    description:
      'Recovery and prosecution under Negotiable Instruments Act, 1881 — Section 138 dishonour cases, Section 142 jurisdiction and Section 148 deposit orders.',
    overview:
      'Cheque dishonour for insufficiency of funds is an offence under Section 138 NI Act with up to 2 years imprisonment and fine up to twice the cheque amount. Strict statutory timelines — 30 days notice from return memo and 30 days for filing — are non-negotiable.',
    keyPoints: [
      'Section 138 statutory notice within 30 days',
      'Complaint within 30 days of failure to pay',
      'Section 142 jurisdiction at payee\'s bank',
      'Summary trial procedure (Section 143)',
      'Section 148 — deposit of 20% in appeal',
      'Compounding under Section 147 / Damodar S. Prabhu guidelines',
    ],
    process: [
      { title: 'Statutory Notice', desc: 'Issue notice within 30 days of bank return memo.' },
      { title: 'Filing', desc: 'File complaint before competent Magistrate within 30 days of payment failure.' },
      { title: 'Trial', desc: 'Summary trial; presumption under Sections 118 and 139 in favour of complainant.' },
      { title: 'Appeal & Compounding', desc: 'Appeal with 20% deposit; compounding at any stage with cost.' },
    ],
    documents: [
      'Original cheque',
      'Bank return memo',
      'Statutory notice and proof of dispatch',
      'Reply (if any) from drawer',
      'Underlying transaction documents',
    ],
    faqs: [
      { q: 'What is the period of limitation?', a: 'Statutory notice: 30 days from return memo. Complaint: 30 days from failure to pay within 15 days of notice. These are mandatory and non-extendable.' },
      { q: 'Is jail certain on conviction?', a: 'Imprisonment up to 2 years is possible but courts often impose fine + compensation. With compounding (Section 147), most cases settle.' },
    ],
  },
  'fraud-cheating-forgery': {
    title: 'Fraud, Cheating, Forgery & Mischief',
    description:
      'Representation in white-collar offences — cheating (Section 415-420), criminal breach of trust (405-409), forgery (463-477A) and mischief (425-440).',
    overview:
      'Economic offences require simultaneous attention to criminal proceedings, civil recovery and regulatory action. We map the dispute across IPC provisions, Companies Act, IBC and SEBI angles — pursuing prosecution where appropriate and defending with thorough document analysis where the case is fundamentally civil dressed in criminal clothing.',
    keyPoints: [
      'Section 415-420 IPC — cheating and inducement',
      'Section 405-409 IPC — criminal breach of trust',
      'Section 463-477A IPC — forgery and counterfeiting',
      'Section 425-440 IPC — mischief',
      'Quashing of civil disputes in criminal garb',
      'Recovery coordination with civil suit',
    ],
    process: [
      { title: 'Diagnostic', desc: 'Identify whether facts disclose criminal offence or civil breach.' },
      { title: 'FIR / Quashing', desc: 'File FIR / private complaint, or move quashing where civil dispute is masquerading.' },
      { title: 'Trial', desc: 'Document-heavy trial; expert opinion on signatures / handwriting.' },
    ],
    faqs: [
      { q: 'When is breach of contract criminal?', a: 'Only where dishonest intention existed at the inception — mere subsequent failure to perform is civil. Supreme Court repeatedly emphasizes this distinction.' },
    ],
  },
  'money-laundering': {
    title: 'Money Laundering',
    description:
      'Defence in PMLA proceedings — ED investigations, Section 50 statements, provisional attachment and Adjudicating Authority / Appellate Tribunal representation.',
    overview:
      'PMLA, 2002 is one of India\'s most stringent statutes. Proceedings are based on a "scheduled offence" (predicate). The ED has powers of arrest, summons, search and asset attachment. Our defence integrates predicate-offence challenge, statement-validity and constitutional arguments.',
    keyPoints: [
      'Pre-investigation legal opinion and protection',
      'Section 50 statement representation and protection',
      'ECIR challenge and predicate-offence analysis',
      'Provisional Attachment Order defence',
      'Adjudicating Authority and Appellate Tribunal',
      'Bail strategy under Section 45 twin-test',
      'Constitutional challenges to PMLA provisions',
    ],
    process: [
      { title: 'Strategy', desc: 'Map predicate offence, scheduled offence linkage and quantum of "proceeds of crime".' },
      { title: 'Investigation Defence', desc: 'Section 50 representation; document production strategy.' },
      { title: 'Attachment', desc: 'Defend PAO before Adjudicating Authority within 180 days.' },
      { title: 'Bail / Appeal', desc: 'Bail under refined twin-test; PMLA Appellate Tribunal and onward.' },
    ],
    faqs: [
      { q: 'Is bail in PMLA possible?', a: 'Yes — but harder. Recent Supreme Court judgments have refined Section 45 twin-test, particularly favourable for women, sick, infirm and minor accused, and emphasized prolonged incarceration concerns.' },
      { q: 'Can ED summon any person?', a: 'Yes — Section 50 powers are broad. Statements are admissible. Legal counsel\'s presence (subject to procedural conditions) is now permitted.' },
    ],
  },
  'cbi-ed-crime-branch': {
    title: 'CBI / ED / Crime Branch Cases',
    description:
      'Specialized defence in central agency investigations — CBI (PC Act, special crimes), ED (PMLA, FEMA) and State Crime Branch / EOW.',
    overview:
      'Cases handled by central / specialized investigating agencies have distinct procedural rigours, sanction requirements and trial fora. We represent public servants, corporates and individuals from search-and-seizure stage through CBI / Special Court trial and high-court appeals.',
    keyPoints: [
      'PC Act, 1988 cases — bribery, illegal gratification',
      'CBI source-information stage advisory',
      'ED PMLA / FEMA proceedings (see Money Laundering)',
      'EOW / Crime Branch fraud cases',
      'Sanction for prosecution challenge (Section 197 CrPC)',
      'Special court trial and CBI appeal',
    ],
    process: [
      { title: 'Stage Identification', desc: 'PE / RC / chargesheet stage and investigation status.' },
      { title: 'Counsel & Search', desc: 'Search and seizure protocol, panchnama scrutiny.' },
      { title: 'Trial', desc: 'CBI / Special Court trial; cross-examination on sanction, voice samples, sting.' },
    ],
    faqs: [
      { q: 'What is a Preliminary Enquiry?', a: 'PE under CBI Manual is a fact-finding stage before formal RC (Regular Case). PE itself is challengeable in High Court if mala fide.' },
      { q: 'Is sanction required to prosecute a public servant?', a: 'Yes — under Section 197 CrPC and Section 19 PC Act for offences in discharge of official duty. Absence of valid sanction is a complete bar.' },
    ],
  },
  'drug-offences': {
    title: 'Drug Offences (NDPS Act)',
    description:
      'Defence in Narcotic Drugs and Psychotropic Substances Act, 1985 cases — quantity-based offences, search and seizure challenges, and bail strategy.',
    overview:
      'NDPS Act is a strict-liability statute with quantum-based punishment (small / intermediate / commercial quantity). Section 37 imposes stringent bail conditions for commercial quantity. Procedural lapses in search, seizure, sample-collection and chain-of-custody are critical defence avenues.',
    keyPoints: [
      'Quantity-based offence categorization',
      'Section 50 NDPS — search compliance',
      'Section 41 / 42 / 43 search procedure',
      'Sample collection and FSL chain-of-custody',
      'Section 37 NDPS bail twin-test',
      'Section 31A — death penalty defences',
    ],
    process: [
      { title: 'Search Audit', desc: 'Examine search panchnama, Section 50 compliance and gazetted-officer presence.' },
      { title: 'Sample Defence', desc: 'Challenge sealing, transmission and FSL chain.' },
      { title: 'Bail / Trial', desc: 'Bail under refined Section 37 jurisprudence; trial with focus on procedure.' },
    ],
    faqs: [
      { q: 'What is "commercial quantity"?', a: 'Quantity specified for each substance in the NDPS Notification — exceeding which Section 37 bail rigours apply and minimum 10-year imprisonment is prescribed.' },
      { q: 'Is Section 50 violation fatal?', a: 'Yes — Supreme Court in Vijaysinh Chandubha Jadeja held that strict compliance with Section 50 is mandatory; violation is generally fatal to prosecution.' },
    ],
  },
  'cyber-crime-data-theft': {
    title: 'Cyber Crimes & Data Theft',
    description:
      'Defence and prosecution in cyber offences under IT Act, 2000 and IPC — hacking, identity theft, online fraud, cyber-stalking and data breach.',
    overview:
      'Cyber crimes span IT Act (Section 43, 65, 66, 66B-F, 67) and IPC (cheating, forgery, criminal intimidation). We represent victims of online fraud, romance scam, identity theft and corporates facing data-breach allegations — combining technical evidence preservation with effective prosecution and defence.',
    keyPoints: [
      'Section 66 IT Act — computer-related offences',
      'Section 66C — identity theft',
      'Section 66D — cheating by personation',
      'Section 66F — cyber terrorism',
      'Section 67 — obscene content / non-consensual intimate imagery',
      'Data theft under Section 43 + IPC 379 / 408',
      'CERT-In incident reporting and DPDP compliance',
    ],
    process: [
      { title: 'Evidence Preservation', desc: 'Screenshots, server logs, hash values; seek Section 65B certificate.' },
      { title: 'FIR / Complaint', desc: 'Cyber crime cell / Section 156(3) where required.' },
      { title: 'Investigation & Trial', desc: 'Forensic image analysis, cross-examination of expert witnesses.' },
    ],
    faqs: [
      { q: 'Where do I report cyber crime?', a: 'cybercrime.gov.in for online complaints; jurisdictional cyber crime police station; State Cyber Crime Cell.' },
      { q: 'What is Section 65B certificate?', a: 'Certificate under Indian Evidence Act for admissibility of electronic records — mandatory in most cyber cases per Anvar P.V. and Arjun Khotkar judgments.' },
    ],
  },
};
