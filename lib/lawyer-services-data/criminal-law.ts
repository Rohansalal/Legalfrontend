import type { ServiceContent } from '@/components/leaf-service-page';

/**
 * Criminal Law services.
 *
 * Legal references use India's new criminal codes (in force from 1 July 2024):
 *   - BNS  — Bharatiya Nyaya Sanhita, 2023 (replaces the IPC)
 *   - BNSS — Bharatiya Nagarik Suraksha Sanhita, 2023 (replaces the CrPC)
 *   - BSA  — Bharatiya Sakshya Adhiniyam, 2023 (replaces the Indian Evidence Act)
 * Special statutes that were NOT replaced (NI Act, NDPS Act, PMLA, POCSO Act,
 * JJ Act, IT Act, PC Act, Contempt of Courts Act) retain their own numbering.
 */
export const criminalLawServices: Record<string, ServiceContent> = {
  'fir-registration': {
    title: 'FIR Registration & Police Complaint Assistance',
    description:
      'Legal assistance in lodging First Information Reports under Section 173 BNSS — correct sectioning, Zero FIR / e-FIR, and statutory remedies when police refuse to register.',
    keywords: ['FIR registration', 'Section 173 BNSS', 'Zero FIR', 'e-FIR', 'police complaint lawyer', 'Section 175(3) BNSS', 'FIR refusal remedy'],
    overview:
      'The First Information Report under Section 173 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 is the foundation of every cognizable criminal case. The new code modernises the process — Zero FIR (registration at any police station regardless of jurisdiction) and electronic FIR (e-FIR) are now expressly recognised, and the informant is entitled to a free copy of the FIR.\n\nThe quality of an FIR shapes the entire investigation and trial. A vague, mis-sectioned or delayed FIR weakens even a strong case; a precise, chronological FIR with the correct BNS provisions sets the prosecution on solid footing. Where the Station House Officer refuses to register a cognizable offence, layered statutory remedies exist — escalation to the Superintendent of Police under Section 173(4) BNSS, an application to the Magistrate under Section 175(3) BNSS directing registration and investigation, and ultimately a writ petition before the High Court.\n\nWe draft watertight FIRs and complaints, ensure correct categorisation under the BNS, and pursue every layer of remedy when the police drag their feet — including counter-FIR strategy in matrimonial and property disputes where cross-allegations are common.',
    whyChooseUs: [
      { title: 'Precision Sectioning', desc: 'FIRs drafted with the exact BNS provisions so investigation cannot be derailed by mis-classification.' },
      { title: 'Escalation Expertise', desc: 'We know the 173(4) → 175(3) → writ ladder and pursue it relentlessly when police refuse.' },
      { title: 'Rapid Response', desc: 'Time-critical drafting and filing — delay in an FIR is itself used against complainants at trial.' },
      { title: 'Counter-FIR Strategy', desc: 'Defensive and offensive strategy where cross-FIRs arise in family or commercial disputes.' },
    ],
    keyPoints: [
      'Drafting precise FIR with correct BNS sections',
      'Zero FIR registration across jurisdictions',
      'e-FIR / online complaint assistance',
      'Section 173(4) BNSS escalation to Superintendent of Police on refusal',
      'Section 175(3) BNSS application before Magistrate',
      'Writ petition before High Court for FIR registration',
      'Lalita Kumari guidelines compliance (mandatory registration)',
      'Free FIR copy enforcement for the informant',
      'Counter-FIR strategy in matrimonial / property disputes',
    ],
    process: [
      { title: 'Complaint Drafting', desc: 'Draft FIR with chronological narrative and applicable BNS sections.' },
      { title: 'Police Station Filing', desc: 'File at the jurisdictional (or any, via Zero FIR) police station and secure the free FIR copy.' },
      { title: 'Escalation', desc: 'On refusal, write to the SP under Section 173(4) BNSS and apply to the Magistrate under Section 175(3) BNSS.' },
      { title: 'Writ Remedy', desc: 'High Court writ under Article 226 if administrative remedies fail.' },
    ],
    documents: [
      'Identity proof of the complainant',
      'Chronological account of the incident with dates, places and persons',
      'Any documentary / electronic evidence (messages, CCTV, photos)',
      'Names and addresses of witnesses (if known)',
      'Medical records / injury reports (where applicable)',
      'Prior correspondence or complaints (if any)',
    ],
    statutoryRefs: [
      { name: 'Section 173 BNSS, 2023', desc: 'Information in cognizable cases — registration of FIR, Zero FIR and e-FIR.' },
      { name: 'Section 173(4) BNSS, 2023', desc: 'Remedy to the Superintendent of Police where the SHO refuses to register.' },
      { name: 'Section 175(3) BNSS, 2023', desc: 'Magistrate’s power to direct registration and investigation.' },
      { name: 'Lalita Kumari v. Govt. of U.P. (2014)', desc: 'Registration of FIR is mandatory when information discloses a cognizable offence.' },
    ],
    pitfalls: [
      { title: 'Delay in Filing', desc: 'Unexplained delay between the incident and the FIR is routinely exploited by the defence — explain any delay in the FIR itself.' },
      { title: 'Vague Allegations', desc: 'An FIR without specific roles, dates and acts invites quashing and weak investigation.' },
      { title: 'Wrong Sections', desc: 'Mis-sectioning under the BNS can downgrade a serious offence or attract bail too easily.' },
      { title: 'Ignoring Escalation Windows', desc: 'Failing to escalate refusal promptly to the SP / Magistrate lets evidence disappear.' },
    ],
    faqs: [
      { q: 'What if the police refuse to register an FIR?', a: 'You can escalate to the Superintendent of Police under Section 173(4) BNSS; if there is still no action, apply to the Magistrate under Section 175(3) BNSS to direct registration and investigation, and approach the High Court by writ if needed.' },
      { q: 'What is a Zero FIR?', a: 'A Zero FIR can be registered at any police station irrespective of where the offence occurred; it is later transferred to the police station having jurisdiction. The BNSS now expressly recognises it.' },
      { q: 'Can I file an FIR online?', a: 'Yes — the BNSS recognises electronic FIRs (e-FIR). For serious offences, the e-FIR generally must be signed within three days, and physical verification may follow.' },
      { q: 'Am I entitled to a copy of the FIR?', a: 'Yes — the informant is entitled to a free copy of the FIR, and FIRs (except in sensitive categories) are also uploaded for access.' },
      { q: 'What is a counter-FIR?', a: 'A counter-FIR is an FIR lodged by the opposite party arising from the same incident. In matrimonial and property disputes, strategy around counter-FIRs and their consolidation is critical.' },
    ],
    relatedServices: [
      { name: 'Filing Criminal Complaints (BNSS)', href: '/services/lawyer-services/criminal-law/criminal-complaint-filing' },
      { name: 'Drafting Complaints — Police, Magistrate & Authorities', href: '/services/lawyer-services/criminal-law/complaint-drafting' },
      { name: 'FIR Quashing & Criminal Appeals (High Court)', href: '/services/lawyer-services/criminal-law/fir-quashing-appeals' },
    ],
  },

  'criminal-complaint-filing': {
    title: 'Filing Criminal Complaints (BNSS)',
    description:
      'Filing private criminal complaints before Magistrates under Section 223 BNSS for non-FIR matters or where direct cognizance is sought.',
    keywords: ['private criminal complaint', 'Section 223 BNSS', 'complaint before Magistrate', 'Section 225 BNSS inquiry', 'Section 227 BNSS process', 'criminal complaint lawyer'],
    overview:
      'A private criminal complaint under Section 223 of the BNSS, 2023 empowers any person to set the criminal law in motion directly before a Magistrate, without depending on the police. After examining the complainant (and witnesses) on oath, the Magistrate may take cognizance and issue process to the accused. This is the primary route for offences where the police are unlikely to act, or where direct cognizance is strategically preferable.\n\nA significant change under the BNSS is that, before taking cognizance on a complaint against a person, the Magistrate must give the proposed accused an opportunity of being heard — making the drafting and evidentiary foundation of the complaint even more important. Where further verification is needed, the Magistrate may postpone process and hold an inquiry, or direct a police investigation, under Section 225 BNSS.\n\nWe draft trial-ready complaints with a clear cause of action, mapped provisions and an evidence inventory — anticipating defences from the threshold so the complaint survives the new hearing requirement and proceeds to process under Section 227 BNSS.',
    whyChooseUs: [
      { title: 'Trial-Ready From Day One', desc: 'Complaints drafted with evidence, witnesses and provisions so they withstand scrutiny at the cognizance stage.' },
      { title: 'BNSS Hearing Navigation', desc: 'Prepared for the new requirement of hearing the accused before cognizance on a complaint.' },
      { title: 'Strategic Routing', desc: 'We advise when a private complaint beats an FIR — and when to combine both routes.' },
      { title: 'Sworn-Statement Preparation', desc: 'Complainant and witnesses prepared for examination on oath under Section 223 BNSS.' },
    ],
    keyPoints: [
      'Drafting private complaint with a clear cause of action',
      'Examination of complainant on oath under Section 223 BNSS',
      'Opportunity of hearing to the accused before cognizance (BNSS)',
      'Section 225 BNSS inquiry or direction for police investigation',
      'Issuance of process under Section 227 BNSS',
      'Summons / warrant trial strategy by offence category',
      'Use for cruelty, defamation, cheque bounce and harassment matters',
    ],
    process: [
      { title: 'Drafting', desc: 'Draft the complaint with chronological facts, witnesses, documents and mapped BNS provisions.' },
      { title: 'Filing & Examination', desc: 'The Magistrate examines the complainant on oath under Section 223 BNSS.' },
      { title: 'Inquiry / Hearing', desc: 'Section 225 BNSS inquiry or police direction; the proposed accused is heard before cognizance.' },
      { title: 'Process & Trial', desc: 'On satisfaction, the Magistrate issues process under Section 227 BNSS and the case proceeds to trial.' },
    ],
    documents: [
      'Detailed complaint with chronology of events',
      'List of witnesses with addresses',
      'Documentary and electronic evidence',
      'Identity and address proof of the complainant',
      'Records of any prior police complaint / FIR refusal',
    ],
    statutoryRefs: [
      { name: 'Section 223 BNSS, 2023', desc: 'Examination of the complainant — taking cognizance on a private complaint.' },
      { name: 'Section 225 BNSS, 2023', desc: 'Postponement of issue of process; inquiry or police investigation.' },
      { name: 'Section 227 BNSS, 2023', desc: 'Issue of process (summons / warrant) to the accused.' },
      { name: 'Section 210 BNSS, 2023', desc: 'Cognizance of offences by Magistrates.' },
    ],
    pitfalls: [
      { title: 'Weak Cause of Action', desc: 'A complaint that does not disclose all ingredients of the offence is dismissed at the threshold.' },
      { title: 'Unprepared Sworn Statement', desc: 'Contradictions between the complaint and the Section 223 examination sink the case early.' },
      { title: 'Ignoring the Accused’s Hearing', desc: 'Under the BNSS the accused may be heard before cognizance — drafting must anticipate that defence.' },
      { title: 'Civil Dispute in Criminal Garb', desc: 'Dressing a purely civil dispute as a crime invites dismissal and quashing.' },
    ],
    faqs: [
      { q: 'When is a private complaint preferable to an FIR?', a: 'For cruelty, defamation, cheque bounce, harassment and matters where the police are unlikely to act effectively, or where the complainant wants direct control over the prosecution.' },
      { q: 'Does the accused get a hearing before cognizance?', a: 'Under the BNSS, the Magistrate must give the proposed accused an opportunity of being heard before taking cognizance on a complaint — a notable change from the earlier regime.' },
      { q: 'Can the Magistrate order a police investigation on my complaint?', a: 'Yes — under Section 225 BNSS the Magistrate may, instead of issuing process, direct an inquiry or a police investigation to verify the complaint.' },
      { q: 'What happens after process is issued?', a: 'The case proceeds as a summons or warrant trial depending on the offence, with framing of notice / charge, evidence and arguments.' },
    ],
    relatedServices: [
      { name: 'FIR Registration & Police Complaint Assistance', href: '/services/lawyer-services/criminal-law/fir-registration' },
      { name: 'Drafting Complaints — Police, Magistrate & Authorities', href: '/services/lawyer-services/criminal-law/complaint-drafting' },
      { name: 'Cheque Bounce — NI Act Section 138/142', href: '/services/lawyer-services/criminal-law/cheque-bounce-ni-act' },
    ],
  },

  'complaint-drafting': {
    title: 'Drafting Complaints — Police, Magistrate & Authorities',
    description:
      'Precision drafting of complaints to police, Magistrates, regulators and ombudsmen — the first defence against any future challenge, mapped to the BNS / BNSS.',
    keywords: ['complaint drafting lawyer', 'legal complaint drafting', 'Magistrate complaint Section 223 BNSS', 'regulatory complaint', 'police complaint drafting', 'ombudsman complaint'],
    overview:
      'A poorly drafted complaint can derail the strongest case at the very threshold. Whether the forum is a police station, a Magistrate under Section 223 BNSS, a regulator (SEBI, RBI, IRDAI, CERT-In) or an ombudsman / Lokpal / Lokayukta, the complaint must carry a clear chronology, the correct provisions, precise party details, an evidence inventory and a focused prayer.\n\nGood drafting anticipates the defence. It pins down dates, roles and the dishonest intention or statutory breach in question, closes jurisdictional and limitation loopholes, and indexes every annexure so the adjudicator can follow the narrative. Under the new codes, correct sectioning under the BNS and procedural alignment with the BNSS are essential — the wrong section can downgrade an offence or attract premature relief to the accused.\n\nWe draft complaints across criminal, regulatory and quasi-judicial forums with provision-mapping, evidence anchoring and procedural precision — and follow up to ensure they are taken on record and acted upon.',
    whyChooseUs: [
      { title: 'Provision-Mapped Drafting', desc: 'Every allegation tied to a specific BNS / statutory provision so the complaint cannot be brushed aside.' },
      { title: 'Defence Anticipation', desc: 'We draft to pre-empt the likely defences and quashing arguments before they arise.' },
      { title: 'Multi-Forum Fluency', desc: 'Police, Magistrate, SEBI, RBI, IRDAI, CERT-In, ombudsman, Lokpal / Lokayukta and vigilance.' },
      { title: 'Evidence Indexing', desc: 'Annexure index and chain-of-evidence so the file reads itself.' },
    ],
    keyPoints: [
      'Police complaints (cognizable / non-cognizable)',
      'Magistrate complaints under Section 223 BNSS',
      'Regulatory complaints (SEBI, RBI, IRDAI, CERT-In)',
      'Ombudsman / Lokpal / Lokayukta complaints',
      'Vigilance and CVC complaints',
      'Jurisdiction and limitation verification',
      'Evidence inventory and annexure indexing',
      'Focused, enforceable prayer clauses',
    ],
    process: [
      { title: 'Briefing', desc: 'Detailed briefing on facts, evidence and the intended outcome.' },
      { title: 'Drafting', desc: 'Provision-mapped, evidence-anchored complaint with annexure index and prayer.' },
      { title: 'Filing & Follow-up', desc: 'Submission with acknowledgement, and follow-up letters to ensure action.' },
    ],
    documents: [
      'Statement of facts with dates and parties',
      'All supporting documents and electronic evidence',
      'Identity / authorisation of the complainant',
      'Details of the forum / authority and jurisdiction',
      'Records of prior complaints or correspondence',
    ],
    statutoryRefs: [
      { name: 'Section 223 BNSS, 2023', desc: 'Complaints to a Magistrate and examination of the complainant.' },
      { name: 'Section 173 / 174 BNSS, 2023', desc: 'Information in cognizable and non-cognizable cases to the police.' },
      { name: 'Bharatiya Nyaya Sanhita, 2023', desc: 'Substantive offences to be correctly invoked in the complaint.' },
      { name: 'Sector regulators (SEBI / RBI / IRDAI Acts)', desc: 'Statutory complaint and grievance frameworks before regulators.' },
    ],
    pitfalls: [
      { title: 'Missing Ingredients', desc: 'Omitting an essential ingredient of the offence makes the complaint vulnerable to dismissal.' },
      { title: 'Wrong Forum / Jurisdiction', desc: 'Filing before the wrong authority or court wastes limitation and invites rejection.' },
      { title: 'Overstatement', desc: 'Exaggerated or unprovable allegations damage credibility and aid the defence.' },
      { title: 'No Evidence Index', desc: 'Unindexed annexures and a rambling narrative dilute even a strong complaint.' },
    ],
    faqs: [
      { q: 'Do complaints need to cite legal sections?', a: 'While not always strictly mandatory, citing the correct BNS / statutory provisions sharpens the complaint and pre-empts mis-classification by the authority.' },
      { q: 'Can one complaint go to multiple forums?', a: 'Yes — criminal, regulatory and civil tracks can run in parallel where appropriate; we structure each complaint to the specific forum’s requirements.' },
      { q: 'How important is the prayer clause?', a: 'Very — a focused, enforceable prayer tells the adjudicator exactly what relief is sought and avoids vague or unworkable outcomes.' },
      { q: 'What if the authority does not respond?', a: 'We pursue follow-up, escalation and, where available, statutory appeals or writ remedies for inaction.' },
    ],
    relatedServices: [
      { name: 'FIR Registration & Police Complaint Assistance', href: '/services/lawyer-services/criminal-law/fir-registration' },
      { name: 'Filing Criminal Complaints (BNSS)', href: '/services/lawyer-services/criminal-law/criminal-complaint-filing' },
      { name: 'Fraud, Cheating, Forgery & Mischief', href: '/services/lawyer-services/criminal-law/fraud-cheating-forgery' },
    ],
  },

  'bail': {
    title: 'Regular & Anticipatory Bail',
    description:
      'Strategic bail applications — anticipatory under Section 482 BNSS and regular under Section 480/483 BNSS — before Sessions Courts and High Courts.',
    keywords: ['anticipatory bail Section 482 BNSS', 'regular bail Section 483 BNSS', 'default bail Section 187 BNSS', 'bail lawyer', 'PMLA bail Section 45', 'NDPS bail Section 37'],
    overview:
      'Bail is the rule and jail the exception. Under the BNSS, 2023 the bail architecture is renumbered: anticipatory bail (to prevent arrest) is under Section 482, bail in non-bailable offences before the Magistrate is under Section 480, and the special powers of the Sessions Court and High Court are under Section 483. Default / statutory bail — where the investigation is not completed within the statutory period — flows from Section 187 BNSS.\n\nThe BNSS also introduces relief for undertrials: Section 479 allows release of a first-time offender who has undergone one-third of the maximum sentence (and others who have completed half), addressing prolonged incarceration. In special statutes, however, stricter regimes apply — Section 45 PMLA imposes a twin-test, and Section 37 NDPS Act bars bail for commercial-quantity offences unless the court is satisfied of innocence and no future offence.\n\nWe build bail strategy from statutory grounds, binding precedent and case-specific equities — anticipatory bail to forestall arrest, regular bail post-arrest, transit and interim bail for cross-border arrests, and a robust defence against bail-cancellation petitions.',
    whyChooseUs: [
      { title: 'Stage-Specific Strategy', desc: 'Anticipatory, regular, transit, interim and default bail — the right application at the right moment.' },
      { title: 'Special-Statute Mastery', desc: 'PMLA Section 45 and NDPS Section 37 twin-tests argued with the latest Supreme Court refinements.' },
      { title: 'Parity & Equities', desc: 'We marshal parity with co-accused, custody period and personal equities for the strongest case.' },
      { title: 'Cancellation Defence', desc: 'Firm defence against bail-cancellation petitions and onerous-condition modification.' },
    ],
    keyPoints: [
      'Anticipatory bail under Section 482 BNSS',
      'Regular bail under Section 480 / 483 BNSS',
      'Default / statutory bail under Section 187 BNSS',
      'Undertrial release under Section 479 BNSS',
      'Bail in special statutes (PMLA Section 45, NDPS Section 37, UAPA)',
      'Transit and interim bail for cross-border arrests',
      'Bail-cancellation defence',
      'Modification of onerous bail conditions',
    ],
    process: [
      { title: 'Strategy', desc: 'Map allegations, BNS sections, antecedents and likely opposition arguments.' },
      { title: 'Application', desc: 'File before the competent court with grounds, precedents and surety details.' },
      { title: 'Arguments', desc: 'Oral arguments emphasising parity, equities and statutory grounds.' },
      { title: 'Conditions Compliance', desc: 'Compliance with conditions and modification of onerous terms where needed.' },
    ],
    documents: [
      'Copy of FIR / complaint and sections invoked',
      'Arrest memo / notice (if any)',
      'Antecedents and any prior bail orders',
      'Surety and address-proof details',
      'Medical / personal-equity documents (illness, age, dependents)',
    ],
    statutoryRefs: [
      { name: 'Section 482 BNSS, 2023', desc: 'Anticipatory bail — direction for release on apprehension of arrest.' },
      { name: 'Section 480 & 483 BNSS, 2023', desc: 'Regular bail before Magistrate and special powers of Sessions / High Court.' },
      { name: 'Section 187 BNSS, 2023', desc: 'Custody and default bail on non-completion of investigation in time.' },
      { name: 'Section 479 BNSS, 2023', desc: 'Maximum detention of undertrials and first-time-offender release.' },
      { name: 'Section 45 PMLA / Section 37 NDPS Act', desc: 'Stringent twin-test bail conditions in special statutes.' },
    ],
    pitfalls: [
      { title: 'Ignoring Default Bail', desc: 'Missing the indefeasible right to default bail under Section 187 BNSS when investigation is delayed.' },
      { title: 'Underestimating Twin-Test', desc: 'PMLA / NDPS bail needs the twin-test satisfied — a generic application fails.' },
      { title: 'Onerous Conditions', desc: 'Accepting unworkable conditions (passport surrender, heavy sureties) without seeking modification.' },
      { title: 'Breach of Conditions', desc: 'Contact with witnesses or non-cooperation triggers cancellation of bail.' },
    ],
    faqs: [
      { q: 'Can anticipatory bail be granted before an FIR is filed?', a: 'Yes — anticipatory bail under Section 482 BNSS can be granted on a reasonable apprehension of arrest, even before an FIR is registered.' },
      { q: 'What is default bail under the BNSS?', a: 'If the investigation is not completed within the statutory period (e.g., 60 or 90 days depending on the offence), the accused has an indefeasible right to be released on default bail under Section 187 BNSS.' },
      { q: 'Is bail harder under PMLA?', a: 'Yes — Section 45 PMLA imposes a twin-test (the court must be satisfied the accused is not guilty and unlikely to offend again). Recent Supreme Court rulings have refined this, especially for women, the sick and the infirm.' },
      { q: 'What are typical bail conditions?', a: 'Surety bonds, cooperation with investigation, no contact with witnesses, periodic reporting and sometimes passport surrender. Onerous conditions can be challenged for modification.' },
      { q: 'Does the BNSS help long-pending undertrials?', a: 'Yes — Section 479 BNSS allows release of first-time offenders after one-third of the maximum sentence (and others after half), subject to exceptions.' },
    ],
    relatedServices: [
      { name: 'Arrest, Remand, Appeals & Writ Petitions', href: '/services/lawyer-services/criminal-law/arrest-remand-writ' },
      { name: 'Warrant Cancellation', href: '/services/lawyer-services/criminal-law/warrant-cancellation' },
      { name: 'Money Laundering', href: '/services/lawyer-services/criminal-law/money-laundering' },
    ],
  },

  'fir-quashing-appeals': {
    title: 'FIR Quashing & Criminal Appeals (High Court)',
    description:
      'Quashing of FIRs, chargesheets and proceedings under Section 528 BNSS, plus criminal appeals and revisions before the High Court.',
    keywords: ['FIR quashing Section 528 BNSS', 'quashing petition', 'criminal appeal High Court', 'Bhajan Lal categories', 'revision Section 438 442 BNSS', 'quashing on settlement'],
    overview:
      'Section 528 of the BNSS, 2023 preserves the inherent power of the High Court to prevent abuse of the process of any court and to secure the ends of justice — the successor to the well-known inherent jurisdiction used for quashing. Through it, the High Court can quash an FIR, chargesheet or entire proceeding where the allegations, even if taken at face value, do not constitute an offence, are absurd or inherently improbable, are actuated by malice, or where the parties have amicably settled.\n\nThe guiding framework remains the seven categories laid down in State of Haryana v. Bhajan Lal — still good law under the new codes. For compoundable and many non-compoundable offences (including matrimonial cruelty), the Supreme Court permits quashing on the basis of a genuine settlement, subject to the court’s satisfaction that it is not against the public interest.\n\nWe combine quashing petitions with criminal appeals against conviction or acquittal and revisions under Sections 438 (Sessions) and 442 (High Court) BNSS — diagnosing the legal infirmities in the prosecution and pressing them at the right forum.',
    whyChooseUs: [
      { title: 'Bhajan Lal Diagnostics', desc: 'We test every FIR / chargesheet against the seven Bhajan Lal categories before filing.' },
      { title: 'Settlement Quashing', desc: 'Quashing secured on genuine settlements, including non-compoundable matrimonial matters.' },
      { title: 'Appeal & Revision Craft', desc: 'Conviction / acquittal appeals and revisions argued with sharp grounds and record analysis.' },
      { title: 'High Court Advocacy', desc: 'Experienced High Court counsel for oral arguments on inherent-jurisdiction petitions.' },
    ],
    keyPoints: [
      'Section 528 BNSS quashing petitions',
      'Quashing on settlement (compoundable & non-compoundable)',
      'Quashing for absence of essential ingredients',
      'Criminal appeals against conviction / acquittal',
      'Revision under Sections 438 / 442 BNSS',
      'Bhajan Lal categories invocation',
      'Stay of proceedings pending quashing',
    ],
    process: [
      { title: 'Diagnostic', desc: 'Analyse the FIR / chargesheet for legal infirmities, jurisdiction and Bhajan Lal categories.' },
      { title: 'Petition', desc: 'Draft the petition annexing FIR, chargesheet and supporting documents.' },
      { title: 'Arguments', desc: 'Oral arguments before the High Court relying on Bhajan Lal and successor judgments.' },
      { title: 'Order', desc: 'A quashing order terminates the proceedings; appeals / revisions pursued as needed.' },
    ],
    documents: [
      'Copy of FIR / chargesheet and the order under challenge',
      'Settlement deed / compromise (where applicable)',
      'Documents demonstrating absence of offence or malice',
      'Trial-court record (for appeals / revisions)',
      'Identity and authorisation of the petitioner',
    ],
    statutoryRefs: [
      { name: 'Section 528 BNSS, 2023', desc: 'Inherent powers of the High Court to quash and prevent abuse of process.' },
      { name: 'Section 438 & 442 BNSS, 2023', desc: 'Powers of revision of the Sessions Court and the High Court.' },
      { name: 'Section 415 BNSS, 2023', desc: 'Appeals from convictions.' },
      { name: 'State of Haryana v. Bhajan Lal (1992)', desc: 'Seven categories where criminal proceedings may be quashed.' },
    ],
    pitfalls: [
      { title: 'Disputed Facts', desc: 'Quashing is not a mini-trial — raising hotly disputed facts that need evidence usually fails.' },
      { title: 'Delayed Petition', desc: 'Filing after the chargesheet or framing of charge reduces the chances of quashing.' },
      { title: 'Sham Settlements', desc: 'Settlements perceived as coerced or against public interest will not lead to quashing.' },
      { title: 'Wrong Remedy', desc: 'Confusing appeal, revision and quashing — each has distinct scope and limitation.' },
    ],
    faqs: [
      { q: 'Can an FIR for a serious offence be quashed?', a: 'Yes — even certain non-compoundable serious offences can be quashed on a genuine settlement or absence of ingredients, subject to the High Court’s satisfaction under Section 528 BNSS.' },
      { q: 'What are the Bhajan Lal categories?', a: 'Seven situations identified by the Supreme Court — including where the allegations do not make out an offence, are absurd, or are filed with malice — in which courts may quash criminal proceedings.' },
      { q: 'What is the difference between appeal and revision?', a: 'An appeal is a full re-hearing on facts and law against conviction / acquittal; a revision (Sections 438 / 442 BNSS) is a narrower supervisory remedy to correct illegality or impropriety.' },
      { q: 'Can the High Court stay proceedings while hearing a quashing petition?', a: 'Yes — interim stay of investigation or trial can be granted in appropriate cases pending the quashing petition.' },
    ],
    relatedServices: [
      { name: 'FIR Registration & Police Complaint Assistance', href: '/services/lawyer-services/criminal-law/fir-registration' },
      { name: 'Arrest, Remand, Appeals & Writ Petitions', href: '/services/lawyer-services/criminal-law/arrest-remand-writ' },
      { name: 'Regular & Anticipatory Bail', href: '/services/lawyer-services/criminal-law/bail' },
    ],
  },

  'arrest-remand-writ': {
    title: 'Arrest, Remand, Appeals & Writ Petitions',
    description:
      'Defence at every critical pre-trial stage — arrest, police / judicial custody under Section 187 BNSS, criminal appeals and constitutional writs.',
    keywords: ['remand lawyer', 'Section 187 BNSS custody', 'habeas corpus', 'criminal appeal', 'writ petition Article 226', 'arrest rights', 'SLP Article 136'],
    overview:
      'The first days after arrest often decide a criminal case. We act immediately at the remand stage to resist unnecessary police custody, secure proper legal representation, and enforce the accused’s rights — including the safeguards around arrest and the production of the arrested person before a Magistrate within 24 hours under the BNSS and Article 22 of the Constitution.\n\nUnder Section 187 BNSS, the structure of custody has changed: the 15 days of police custody need not be taken at the outset and can be sought in parts within the first 40 or 60 days of detention (depending on the offence) — a development that demands vigilant, stage-by-stage opposition. Where detention is illegal or in excess of authority, a writ of habeas corpus lies; where rights are violated, Articles 226 and 32 are available.\n\nWe handle the full pre-trial and appellate spectrum — remand opposition, habeas corpus, criminal appeals before the Sessions Court, High Court and Supreme Court, Special Leave Petitions under Article 136, and constitutional writs.',
    whyChooseUs: [
      { title: 'Rapid Remand Response', desc: 'Counsel at the police station / court within hours to resist police custody.' },
      { title: 'Custody-Structure Vigilance', desc: 'We track the new part-wise police-custody regime under Section 187 BNSS to prevent overreach.' },
      { title: 'Constitutional Remedies', desc: 'Habeas corpus, Article 226 / 32 writs and SLPs under Article 136 when rights are breached.' },
      { title: 'Full Appellate Reach', desc: 'Appeals from the trial court up to the Supreme Court with sharp record analysis.' },
    ],
    keyPoints: [
      'Remand opposition (police / judicial custody)',
      'Enforcement of arrest safeguards and 24-hour production',
      'Section 187 BNSS custody-structure vigilance',
      'Habeas corpus for illegal detention',
      'Writ petitions under Articles 226 and 32',
      'Criminal appeals before Sessions / High Court / Supreme Court',
      'Special Leave Petitions under Article 136',
    ],
    process: [
      { title: 'Immediate Response', desc: 'Reach the police station / court within hours and oppose police custody.' },
      { title: 'Bail Strategy', desc: 'Concurrent bail application alongside remand opposition.' },
      { title: 'Constitutional Remedy', desc: 'Habeas corpus / writ where detention or process is illegal.' },
      { title: 'Appeals', desc: 'Criminal appeals and SLPs as the case progresses.' },
    ],
    documents: [
      'Arrest memo and grounds of arrest',
      'Remand application / order',
      'FIR and sections invoked',
      'Medical examination report of the arrestee',
      'Details of family / surety for bail',
    ],
    statutoryRefs: [
      { name: 'Section 187 BNSS, 2023', desc: 'Procedure when investigation cannot be completed in 24 hours; custody structure.' },
      { name: 'Sections 35–58 BNSS, 2023', desc: 'Arrest, rights of the arrested person and production before a Magistrate.' },
      { name: 'Article 22, Constitution of India', desc: 'Protection against arrest and detention, including 24-hour production.' },
      { name: 'Articles 226 & 32, Constitution of India', desc: 'Writ jurisdiction of the High Courts and the Supreme Court (habeas corpus).' },
    ],
    pitfalls: [
      { title: 'Silence at Remand', desc: 'Not opposing the first remand effectively often leads to avoidable police custody.' },
      { title: 'Missing Arrest Illegalities', desc: 'Overlooking defects in arrest grounds / procedure forfeits a strong habeas corpus point.' },
      { title: 'Delay in Appeal', desc: 'Missing appeal limitation hardens an adverse order.' },
      { title: 'Wrong Forum', desc: 'Choosing the wrong appellate / writ forum wastes time and limitation.' },
    ],
    faqs: [
      { q: 'How long can police custody last under the BNSS?', a: 'Police custody is capped at 15 days, but under Section 187 BNSS it need not be taken at the outset and may be sought in parts within the first 40 or 60 days of detention depending on the offence, after which only judicial custody continues.' },
      { q: 'Within what time must an arrested person be produced before a Magistrate?', a: 'Within 24 hours of arrest (excluding travel time), as mandated by the BNSS and Article 22 of the Constitution.' },
      { q: 'When is habeas corpus appropriate?', a: 'Where detention is illegal, unconstitutional or in excess of authority — including private custody and unauthorised police detention.' },
      { q: 'What is a Special Leave Petition?', a: 'An SLP under Article 136 lets the Supreme Court grant special leave to appeal from any judgment or order — the apex discretionary remedy in criminal matters.' },
    ],
    relatedServices: [
      { name: 'Regular & Anticipatory Bail', href: '/services/lawyer-services/criminal-law/bail' },
      { name: 'FIR Quashing & Criminal Appeals (High Court)', href: '/services/lawyer-services/criminal-law/fir-quashing-appeals' },
      { name: 'Warrant Cancellation', href: '/services/lawyer-services/criminal-law/warrant-cancellation' },
    ],
  },

  'contempt-of-court': {
    title: 'Contempt of Courts Act Matters',
    description:
      'Civil and criminal contempt under the Contempt of Courts Act, 1971 — initiating actions for wilful disobedience and defending alleged contemnors.',
    keywords: ['contempt of court', 'civil contempt', 'criminal contempt', 'Contempt of Courts Act 1971', 'contempt defence', 'wilful disobedience court order'],
    overview:
      'The Contempt of Courts Act, 1971 protects the authority and dignity of the courts. Civil contempt punishes wilful disobedience of a judgment, decree, direction or undertaking; criminal contempt covers conduct that scandalises the court, prejudices a pending proceeding, or interferes with the administration of justice. Punishment can extend to simple imprisonment up to six months and a fine up to ₹2,000 — but the lasting consequence is the stain on one’s record and credibility.\n\nProceedings are unusual: the standard of proof is high, the disobedience must be wilful (not a bona fide misunderstanding), and a sincere, unconditional apology is often accepted. Since 2006, truth is a valid defence under Section 13 if it is in the public interest and bona fide. Suo motu contempt — initiated by the court itself — calls for an especially measured response.\n\nWe both initiate contempt petitions to enforce orders that are being flouted, and defend alleged contemnors with bona fide explanations, compliance affidavits and, where appropriate, a properly tendered apology.',
    whyChooseUs: [
      { title: 'Enforcement That Bites', desc: 'Contempt petitions framed to compel compliance with orders being wilfully ignored.' },
      { title: 'Measured Defence', desc: 'Bona fide explanation, compliance and a correctly tendered apology to defuse exposure.' },
      { title: 'Truth-as-Defence', desc: 'Section 13 public-interest truth defence pleaded where the facts support it.' },
      { title: 'Suo Motu Handling', desc: 'Calibrated responses to court-initiated contempt, including media / social-media matters.' },
    ],
    keyPoints: [
      'Civil contempt for non-compliance of decree / order / undertaking',
      'Criminal contempt for scandalising the court or publication',
      'Contempt defence — bona fide explanation and apology',
      'Truth as a defence under Section 13',
      'Suo motu contempt response',
      'Compliance affidavits and purge of contempt',
    ],
    process: [
      { title: 'Notice / Petition', desc: 'Show-cause notice to the alleged contemnor; petition before the High Court / Supreme Court.' },
      { title: 'Reply / Apology', desc: 'A bona fide apology often resolves the matter; otherwise, a full reply on merits.' },
      { title: 'Hearing & Order', desc: 'The court may discharge, accept the apology, or sentence.' },
    ],
    documents: [
      'Copy of the order / undertaking allegedly disobeyed',
      'Evidence of non-compliance or the offending conduct / publication',
      'Correspondence demonstrating wilfulness (or its absence)',
      'Compliance documents (for defence)',
    ],
    statutoryRefs: [
      { name: 'Contempt of Courts Act, 1971 — Section 2', desc: 'Definitions of civil and criminal contempt.' },
      { name: 'Section 12, Contempt of Courts Act, 1971', desc: 'Punishment — up to 6 months imprisonment and / or fine up to ₹2,000.' },
      { name: 'Section 13, Contempt of Courts Act, 1971', desc: 'Truth as a defence and the requirement of substantial interference.' },
      { name: 'Articles 129 & 215, Constitution of India', desc: 'Contempt powers of the Supreme Court and High Courts as courts of record.' },
    ],
    pitfalls: [
      { title: 'Treating It Lightly', desc: 'Ignoring a contempt notice or delaying compliance hardens the court’s view.' },
      { title: 'Conditional Apology', desc: 'A grudging or conditional apology is often rejected; it must be unconditional and sincere.' },
      { title: 'Confusing Disobedience', desc: 'Bona fide misunderstanding is not contempt — but it must be properly explained on affidavit.' },
      { title: 'Social-Media Overreach', desc: 'Posts scandalising the court or prejudicing pending matters can attract criminal contempt.' },
    ],
    faqs: [
      { q: 'Is an apology a defence?', a: 'A bona fide, unconditional apology is often accepted, especially in first instances and where prejudice to the administration of justice is minimal.' },
      { q: 'Can social-media posts amount to contempt?', a: 'Yes — posts that scandalise the court or substantially interfere with a pending proceeding can attract criminal contempt.' },
      { q: 'What is the maximum punishment?', a: 'Under Section 12, simple imprisonment up to six months and / or a fine up to ₹2,000; the court may also accept an apology and discharge.' },
      { q: 'Is truth a valid defence?', a: 'Yes — since the 2006 amendment, truth is a defence under Section 13 if it is bona fide and in the public interest.' },
    ],
    relatedServices: [
      { name: 'Arrest, Remand, Appeals & Writ Petitions', href: '/services/lawyer-services/criminal-law/arrest-remand-writ' },
      { name: 'FIR Quashing & Criminal Appeals (High Court)', href: '/services/lawyer-services/criminal-law/fir-quashing-appeals' },
      { name: 'Drafting Complaints — Police, Magistrate & Authorities', href: '/services/lawyer-services/criminal-law/complaint-drafting' },
    ],
  },

  'lookout-circular-cancellation': {
    title: 'Lookout Circular Cancellation',
    description:
      'Quashing of Lookout Circulars (LOCs) issued through the Bureau of Immigration that prevent travel — via representations and writ petitions under Article 226.',
    keywords: ['lookout circular cancellation', 'LOC quashing', 'Bureau of Immigration LOC', 'leave to travel petition', 'LOC writ petition', 'CBI ED LOC challenge'],
    overview:
      'A Lookout Circular (LOC) issued by an authorised agency through the Bureau of Immigration can stop a person from leaving the country. LOCs are governed by Office Memoranda of the Ministry of Home Affairs (the foundational OM dated 27.10.2010 and subsequent updates), which require issuance only by competent authorities, for specified reasons, and with periodic review.\n\nCourts routinely interfere where an LOC is issued mechanically, without recording reasons, without authority, or in a purely commercial / civil dispute that does not justify curtailing the fundamental right to travel under Articles 19 and 21. Banks frequently request LOCs against borrowers in default — a practice High Courts have repeatedly scrutinised. Relief ranges from outright quashing to conditional permission to travel on an undertaking or bond.\n\nWe verify the LOC’s basis, make focused representations to the issuing authority, and — where there is no response or the LOC is legally infirm — file writ petitions under Article 226 for cancellation, along with interim applications for leave to travel.',
    whyChooseUs: [
      { title: 'LOC Forensics', desc: 'We trace the issuing authority, date and grounds to expose non-speaking or unauthorised LOCs.' },
      { title: 'Two-Track Relief', desc: 'Representation to the authority and a writ petition in parallel to compress timelines.' },
      { title: 'Travel-Now Applications', desc: 'Interim leave-to-travel orders on undertaking / bond while the petition is pending.' },
      { title: 'Agency Experience', desc: 'CBI, ED and bank-driven LOCs challenged on settled constitutional grounds.' },
    ],
    keyPoints: [
      'Representation to the issuing authority',
      'Writ petition under Article 226 for quashing',
      'Interim leave-to-travel / release applications',
      'Bond and undertaking modifications',
      'CBI / ED / bank-driven LOC challenges',
      'Periodic-review and non-speaking-order grounds',
    ],
    process: [
      { title: 'LOC Verification', desc: 'Confirm the LOC details — issuing authority, date and grounds.' },
      { title: 'Representation', desc: 'Letter to the issuing authority seeking cancellation or modification.' },
      { title: 'Writ Petition', desc: 'On no response, file a writ before the High Court for quashing.' },
      { title: 'Travel Permission', desc: 'Seek interim leave to travel pending the final order.' },
    ],
    documents: [
      'Copy / details of the LOC (where available)',
      'Passport and travel itinerary / purpose',
      'FIR / case details underlying the LOC',
      'Proof of roots (property, family, employment) to counter flight risk',
      'Any prior representation and the authority’s response',
    ],
    statutoryRefs: [
      { name: 'MHA Office Memoranda on LOCs (from 27.10.2010)', desc: 'Framework for issuance, competent authorities and periodic review of LOCs.' },
      { name: 'Article 21, Constitution of India', desc: 'Right to travel abroad as part of personal liberty.' },
      { name: 'Article 226, Constitution of India', desc: 'High Court writ jurisdiction to quash an illegal LOC.' },
      { name: 'Passports Act, 1967', desc: 'Statutory scheme governing travel documents and restrictions.' },
    ],
    pitfalls: [
      { title: 'Discovering the LOC at the Airport', desc: 'Many learn of an LOC only when stopped at immigration — pre-emptive verification avoids this.' },
      { title: 'No Roots Evidence', desc: 'Failing to show strong ties to India undermines a leave-to-travel application.' },
      { title: 'Ignoring the Underlying Case', desc: 'An LOC challenge must engage with the criminal / recovery matter behind it.' },
      { title: 'Skipping Representation', desc: 'Going straight to court without a representation can draw an adverse comment on maintainability.' },
    ],
    faqs: [
      { q: 'Why are LOCs commonly issued?', a: 'In bank fraud, FEMA, GST, tax-evasion, NDPS and serious criminal cases. Banks routinely request LOCs against borrowers in default.' },
      { q: 'How quickly can an LOC be cancelled?', a: 'Where an LOC is non-speaking or procedurally defective, High Courts often pass favourable interim orders within weeks, allowing travel on conditions.' },
      { q: 'Can I travel while challenging the LOC?', a: 'Yes — courts frequently grant interim leave to travel on an undertaking, bond or deposit pending final adjudication.' },
      { q: 'Can a bank get an LOC against me?', a: 'Public-sector banks can request LOCs in certain economic-interest cases, but courts have curtailed mechanical issuance in purely civil recovery disputes.' },
    ],
    relatedServices: [
      { name: 'Warrant Cancellation', href: '/services/lawyer-services/criminal-law/warrant-cancellation' },
      { name: 'Money Laundering', href: '/services/lawyer-services/criminal-law/money-laundering' },
      { name: 'CBI / ED / Crime Branch Cases', href: '/services/lawyer-services/criminal-law/cbi-ed-crime-branch' },
    ],
  },

  'warrant-cancellation': {
    title: 'Warrant Cancellation',
    description:
      'Cancellation / recall of arrest warrants, non-bailable warrants and proclamation under Section 84 BNSS, with attachment defence under Section 85 BNSS.',
    keywords: ['warrant cancellation', 'NBW recall', 'non-bailable warrant', 'Section 84 BNSS proclamation', 'Section 85 BNSS attachment', 'surrender with bail'],
    overview:
      'Warrants are issued when an accused fails to appear or comply with court directions. A bailable warrant can be cleared by furnishing a bond; a non-bailable warrant (NBW) is more serious and calls for prompt recall or surrender with bail. If the accused remains absent, the court may publish a proclamation under Section 84 BNSS requiring appearance, followed by attachment of property under Section 85 BNSS and, ultimately, a declaration as a proclaimed offender.\n\nSpeed matters. A warrant recall application backed by a credible explanation for non-appearance and an offer of bond / surety can prevent escalation; once a proclamation or attachment is in motion, the remedies become harder and time-bound. We pair recall applications with bail strategy so the accused does not exchange a warrant for custody.\n\nWe diagnose the type of warrant and the underlying default, file recall / cancellation applications, arrange surrender with simultaneous bail, and challenge proclamations and attachments before the issuing court and, where necessary, the High Court.',
    whyChooseUs: [
      { title: 'Fast Recall', desc: 'Time-critical recall applications to stop escalation to proclamation and attachment.' },
      { title: 'Surrender + Bail', desc: 'Coordinated surrender with a simultaneous bail application to avoid custody.' },
      { title: 'Proclamation Defence', desc: 'Section 84 proclamation and Section 85 attachment challenged before it hardens.' },
      { title: 'Default Diagnosis', desc: 'We identify exactly why the warrant issued and cure the underlying default.' },
    ],
    keyPoints: [
      'Non-bailable warrant (NBW) cancellation / recall',
      'Bailable warrant compliance and bonds',
      'Surrender with simultaneous bail strategy',
      'Section 84 BNSS proclamation challenge',
      'Section 85 BNSS attachment defence',
      'Prevention of proclaimed-offender declaration',
    ],
    process: [
      { title: 'Warrant Diagnosis', desc: 'Identify the type of warrant and the underlying default.' },
      { title: 'Recall Application', desc: 'File with reasons for non-appearance, plus bond / surety.' },
      { title: 'Personal Appearance', desc: 'Attend court where directed; the warrant is cancelled and bail secured.' },
    ],
    documents: [
      'Copy of the warrant / order (if available)',
      'Explanation and proof for the non-appearance (medical, travel, notice gap)',
      'Surety and bond details',
      'Case papers showing the underlying proceeding',
    ],
    statutoryRefs: [
      { name: 'Section 84 BNSS, 2023', desc: 'Proclamation for a person absconding.' },
      { name: 'Section 85 BNSS, 2023', desc: 'Attachment of the property of an absconder.' },
      { name: 'Sections 72–83 BNSS, 2023', desc: 'Issue, form and execution of warrants of arrest.' },
      { name: 'Section 480 / 483 BNSS, 2023', desc: 'Bail to accompany surrender / recall.' },
    ],
    pitfalls: [
      { title: 'Ignoring an NBW', desc: 'A non-bailable warrant left unaddressed quickly leads to proclamation and attachment.' },
      { title: 'Surrender Without Bail', desc: 'Surrendering without a ready bail application risks immediate custody.' },
      { title: 'No Explanation', desc: 'A recall application without a credible reason for absence is unlikely to succeed.' },
      { title: 'Delay on Proclamation', desc: 'Once Section 84 / 85 steps begin, the timelines are strict and unforgiving.' },
    ],
    faqs: [
      { q: 'What is the difference between a bailable and a non-bailable warrant?', a: 'A bailable warrant can be satisfied by furnishing a bond; a non-bailable warrant authorises arrest and requires recall or surrender with bail.' },
      { q: 'What if a Section 84 proclamation has been published?', a: 'Time-bound action is critical — we challenge it through an application before the issuing court and, if needed, a writ, and move to prevent attachment under Section 85 BNSS.' },
      { q: 'Can I get bail at the time of surrender?', a: 'Yes — we coordinate surrender with a simultaneous bail application so you are not taken into custody.' },
      { q: 'Why was a warrant issued against me?', a: 'Usually for non-appearance or non-compliance with a court direction; we diagnose the exact default and cure it in the recall application.' },
    ],
    relatedServices: [
      { name: 'Regular & Anticipatory Bail', href: '/services/lawyer-services/criminal-law/bail' },
      { name: 'Arrest, Remand, Appeals & Writ Petitions', href: '/services/lawyer-services/criminal-law/arrest-remand-writ' },
      { name: 'Lookout Circular Cancellation', href: '/services/lawyer-services/criminal-law/lookout-circular-cancellation' },
    ],
  },

  'murder-abduction-negligence': {
    title: 'Murder, Abduction & Death by Negligence',
    description:
      'Defence and prosecution in murder (Section 103 BNS), culpable homicide (Section 105), abduction / kidnapping (Sections 137–140) and death by negligence (Section 106 BNS).',
    keywords: ['murder case lawyer Section 103 BNS', 'culpable homicide Section 105 BNS', 'death by negligence Section 106 BNS', 'abduction Section 138 BNS', 'sessions trial defence', 'forensic evidence challenge'],
    overview:
      'Offences against life are the gravest in the Bharatiya Nyaya Sanhita, 2023. Murder is defined in Section 101 and punished under Section 103 BNS (death or life imprisonment); culpable homicide not amounting to murder is punished under Section 105. Causing death by a rash or negligent act falls under Section 106 BNS, which also carries an enhanced punishment for hit-and-run cases where the driver flees without reporting. Abduction and kidnapping are dealt with under Sections 137 to 140 BNS, including aggravated forms such as kidnapping for ransom.\n\nThese matters are tried before the Sessions Court and turn on intention versus knowledge, the chain of circumstances, last-seen-together evidence, motive and forensic proof (post-mortem, FSL, ballistics, DNA). The difference between Section 103 and Section 105 — often the difference between a life sentence and a far lighter term — usually rests on the exceptions to murder, such as grave and sudden provocation or exceeding the right of private defence.\n\nOur team handles these cases from the sessions trial to Supreme Court appeals — building the defence theory, rigorously challenging forensic and eyewitness evidence, and, for victims’ families, ensuring effective prosecution and compensation.',
    whyChooseUs: [
      { title: 'Sessions-Trial Specialists', desc: 'Seasoned trial advocates in murder and homicide matters before Sessions Courts.' },
      { title: 'Forensic Challenge', desc: 'Rigorous scrutiny of post-mortem, FSL, ballistics and DNA evidence and chain of custody.' },
      { title: 'Charge Calibration', desc: 'Arguing the murder / culpable-homicide distinction and statutory exceptions decisively.' },
      { title: 'Appeals to the Top', desc: 'Conviction and acquittal appeals carried through the High Court and Supreme Court.' },
    ],
    keyPoints: [
      'Section 101 / 103 BNS — murder definition and punishment',
      'Section 105 BNS — culpable homicide not amounting to murder',
      'Section 106 BNS — death by negligence and hit-and-run',
      'Sections 137–140 BNS — kidnapping and abduction (incl. ransom)',
      'Forensic evidence challenge (FSL, ballistics, DNA, post-mortem)',
      'Eyewitness cross-examination strategy',
      'Last-seen-together and chain-of-circumstances defence',
      'Exceptions to murder (provocation, private defence)',
    ],
    process: [
      { title: 'Case Theory', desc: 'Build the defence theory — alibi, private defence, lack of motive, witness contradictions.' },
      { title: 'Trial', desc: 'Examination, cross-examination and rebuttal evidence before the Sessions Court.' },
      { title: 'Appeals', desc: 'High Court and Supreme Court appeals against conviction or acquittal.' },
    ],
    documents: [
      'FIR, chargesheet and statements of witnesses',
      'Post-mortem and medical reports',
      'FSL / ballistics / DNA reports',
      'Site plan, seizure memos and CCTV (if any)',
      'Alibi and defence-witness material',
    ],
    statutoryRefs: [
      { name: 'Section 101 & 103 BNS, 2023', desc: 'Definition of murder and punishment for murder.' },
      { name: 'Section 105 BNS, 2023', desc: 'Punishment for culpable homicide not amounting to murder.' },
      { name: 'Section 106 BNS, 2023', desc: 'Causing death by negligence, including the hit-and-run provision.' },
      { name: 'Sections 137–140 BNS, 2023', desc: 'Kidnapping, abduction and kidnapping for ransom.' },
      { name: 'Section 63 BSA, 2023', desc: 'Admissibility of electronic evidence (CCTV, call records) at trial.' },
    ],
    pitfalls: [
      { title: 'Conceding the Charge', desc: 'Failing to press the murder / culpable-homicide distinction can needlessly attract a life sentence.' },
      { title: 'Unchallenged Forensics', desc: 'Accepting FSL / post-mortem findings without scrutiny of chain of custody and methodology.' },
      { title: 'Weak Cross-Examination', desc: 'Not exposing contradictions in eyewitness and last-seen evidence.' },
      { title: 'Ignoring Exceptions', desc: 'Overlooking grave-and-sudden-provocation or private-defence exceptions to murder.' },
    ],
    faqs: [
      { q: 'What is the difference between Section 103 and Section 105 BNS?', a: 'Section 103 punishes murder (death or life imprisonment); Section 105 punishes culpable homicide not amounting to murder (a lesser sentence). The distinction turns on intention, knowledge and the statutory exceptions such as sudden provocation.' },
      { q: 'What punishment applies to hit-and-run?', a: 'Death by a rash or negligent act is punished under Section 106 BNS, with an enhanced term where the driver causes death and flees without reporting to the police or a Magistrate.' },
      { q: 'Does a minor’s consent matter in kidnapping?', a: 'No — taking a minor from lawful guardianship without the guardian’s consent is kidnapping under the BNS regardless of the minor’s consent.' },
      { q: 'Can a murder conviction be appealed?', a: 'Yes — convictions can be appealed to the High Court and onward to the Supreme Court, including by Special Leave Petition under Article 136.' },
    ],
    relatedServices: [
      { name: 'Assault, Serious Injury & Personal Violence', href: '/services/lawyer-services/criminal-law/assault-injury' },
      { name: 'False Imprisonment, Kidnapping & Threats', href: '/services/lawyer-services/criminal-law/imprisonment-kidnapping-threats' },
      { name: 'Regular & Anticipatory Bail', href: '/services/lawyer-services/criminal-law/bail' },
    ],
  },

  'assault-injury': {
    title: 'Assault, Serious Injury & Personal Violence',
    description:
      'Representation in offences against the body — hurt (Section 115 BNS), grievous hurt (Section 117), dangerous-weapon hurt (118) and acid attack (Section 124 BNS).',
    keywords: ['assault case lawyer', 'hurt Section 115 BNS', 'grievous hurt Section 117 BNS', 'acid attack Section 124 BNS', 'private defence', 'victim compensation BNSS'],
    overview:
      'Offences against the human body under the Bharatiya Nyaya Sanhita, 2023 are graded by the nature of the injury, the weapon used and the intention behind the act. Voluntarily causing hurt is punished under Section 115 BNS; grievous hurt under Section 117; causing hurt or grievous hurt by dangerous weapons or means under Section 118; and the grave offence of voluntarily causing grievous hurt by acid is under Section 124 BNS, with survivor-focused provisions.\n\nThese cases are won and lost on medical-legal detail — the Medico-Legal Case (MLC) record, the nature and seat of injuries, the weapon, and whether the act was intentional or in exercise of the right of private defence (Sections 34–44 BNS). Victims can pursue strict prosecution along with compensation; the accused can defend on proportionality, sudden fight and private defence.\n\nWe act for victims seeking prosecution and compensation, and for the accused defending charges — with close attention to the medical evidence, the correct grading of the offence and the availability of compounding under Section 359 BNSS.',
    whyChooseUs: [
      { title: 'Medical-Legal Analysis', desc: 'MLC and injury reports analysed to fix the correct grade of offence.' },
      { title: 'Private-Defence Advocacy', desc: 'Right-of-private-defence and sudden-fight defences built on the facts.' },
      { title: 'Survivor Support', desc: 'Acid-attack and serious-injury survivors guided on compensation and treatment.' },
      { title: 'Compounding Strategy', desc: 'Settlement and compounding under Section 359 BNSS where the law permits.' },
    ],
    keyPoints: [
      'Section 115 / 117 / 118 BNS — hurt, grievous hurt and dangerous-weapon hurt',
      'Section 124 BNS — acid attack and survivor support',
      'Compensation orders under Section 395 BNSS',
      'Victim Compensation Scheme under Section 396 BNSS',
      'Medical examination and MLC analysis',
      'Right of private defence (Sections 34–44 BNS)',
      'Compounding under Section 359 BNSS where permitted',
    ],
    process: [
      { title: 'Medical Records', desc: 'Procure the MLC, hospital records and FSL reports where applicable.' },
      { title: 'Charge Mapping', desc: 'Identify the exact BNS provision based on the injury and weapon.' },
      { title: 'Trial / Settlement', desc: 'Trial, or compounding under Section 359 BNSS where the offence is compoundable.' },
    ],
    documents: [
      'MLC and hospital / treatment records',
      'FIR and statements',
      'Photographs of injuries and the weapon (if seized)',
      'Witness details',
      'Medical bills (for compensation claims)',
    ],
    statutoryRefs: [
      { name: 'Section 115 & 117 BNS, 2023', desc: 'Voluntarily causing hurt and grievous hurt.' },
      { name: 'Section 118 BNS, 2023', desc: 'Voluntarily causing hurt / grievous hurt by dangerous weapons or means.' },
      { name: 'Section 124 BNS, 2023', desc: 'Voluntarily causing grievous hurt by use of acid.' },
      { name: 'Sections 34–44 BNS, 2023', desc: 'The right of private defence of body and property.' },
      { name: 'Sections 395 & 396 BNSS, 2023', desc: 'Compensation orders and the Victim Compensation Scheme.' },
    ],
    pitfalls: [
      { title: 'Wrong Injury Grading', desc: 'Treating grievous hurt as simple hurt (or vice versa) distorts both prosecution and defence.' },
      { title: 'Ignoring Private Defence', desc: 'Failing to plead the right of private defence where the facts support it.' },
      { title: 'No Compensation Claim', desc: 'Victims often miss the compensation route under Sections 395 / 396 BNSS.' },
      { title: 'Late Medical Examination', desc: 'Delayed or incomplete MLC weakens the link between the injury and the incident.' },
    ],
    faqs: [
      { q: 'Can hurt cases be compounded?', a: 'Yes — many hurt offences are compoundable, with court permission where required, under Section 359 BNSS.' },
      { q: 'What is the difference between hurt and grievous hurt?', a: 'Hurt (Section 115 BNS) covers bodily pain, disease or infirmity; grievous hurt (Section 117 BNS) covers specified serious injuries such as fractures, loss of sight / hearing or endangering life.' },
      { q: 'What compensation can a victim get?', a: 'Courts can order the convict to pay compensation under Section 395 BNSS, and victims can also claim under the Victim Compensation Scheme administered under Section 396 BNSS.' },
      { q: 'Is acid attack treated more seriously?', a: 'Yes — Section 124 BNS treats acid attacks as a grave offence with stringent punishment and a focus on survivor compensation and treatment.' },
    ],
    relatedServices: [
      { name: 'Murder, Abduction & Death by Negligence', href: '/services/lawyer-services/criminal-law/murder-abduction-negligence' },
      { name: 'False Imprisonment, Kidnapping & Threats', href: '/services/lawyer-services/criminal-law/imprisonment-kidnapping-threats' },
      { name: 'Rape & Sexual Assault Cases', href: '/services/lawyer-services/criminal-law/rape-sexual-assault' },
    ],
  },

  'imprisonment-kidnapping-threats': {
    title: 'False Imprisonment, Kidnapping & Threats',
    description:
      'Representation in wrongful restraint / confinement (Sections 126–127 BNS), kidnapping (Sections 137–140 BNS) and criminal intimidation (Section 351 BNS).',
    keywords: ['wrongful confinement Section 127 BNS', 'kidnapping Section 137 BNS', 'criminal intimidation Section 351 BNS', 'false imprisonment lawyer', 'habeas corpus', 'threat charges'],
    overview:
      'Liberty offences strike at the core of personal freedom. The Bharatiya Nyaya Sanhita, 2023 punishes wrongful restraint under Section 126 and wrongful confinement under Section 127; kidnapping and abduction, including aggravated forms, under Sections 137 to 140; and criminal intimidation under Section 351 BNS. Threat-related allegations frequently arise in commercial, matrimonial and property disputes, where the line between a genuine offence and an exaggerated complaint must be carefully drawn.\n\nWhere a person is being illegally confined, a writ of habeas corpus is the swift constitutional remedy alongside criminal action. In kidnapping matters, the focus is on lawful guardianship, the age of the victim, consent (which is no defence for a minor) and the purpose — ransom, marriage or coercion — which determines the gravity.\n\nWe handle both prosecution and defence with attention to motive, opportunity and corroboration — securing release through habeas corpus, framing precise complaints, and defending against threat allegations that are really civil or personal disputes dressed up as crime.',
    whyChooseUs: [
      { title: 'Liberty-First Action', desc: 'Immediate habeas corpus and criminal action where someone is illegally confined.' },
      { title: 'Offence Precision', desc: 'Careful distinction between restraint, confinement and kidnapping on the facts.' },
      { title: 'Threat-Case Defence', desc: 'Robust defence where intimidation allegations are exaggerated dispute tactics.' },
      { title: 'Guardianship Focus', desc: 'Lawful-custody and age analysis that decides kidnapping matters.' },
    ],
    keyPoints: [
      'Sections 126–127 BNS — wrongful restraint and confinement',
      'Sections 137–140 BNS — kidnapping and abduction',
      'Section 351 BNS — criminal intimidation',
      'Habeas corpus for illegal confinement',
      'Lawful guardianship and minor-consent analysis',
      'Cross-border kidnapping considerations',
    ],
    process: [
      { title: 'Offence Mapping', desc: 'Distinguish wrongful restraint / confinement / kidnapping on the facts.' },
      { title: 'Action', desc: 'FIR, private complaint or habeas corpus, as appropriate.' },
      { title: 'Trial', desc: 'Trial focused on motive, opportunity and corroboration.' },
    ],
    documents: [
      'FIR / complaint and statements',
      'Evidence of confinement or threat (messages, recordings, witnesses)',
      'Age and guardianship proof (in kidnapping cases)',
      'Call detail records / location evidence',
    ],
    statutoryRefs: [
      { name: 'Sections 126 & 127 BNS, 2023', desc: 'Wrongful restraint and wrongful confinement.' },
      { name: 'Sections 137–140 BNS, 2023', desc: 'Kidnapping, abduction and aggravated forms (ransom, etc.).' },
      { name: 'Section 351 BNS, 2023', desc: 'Criminal intimidation and threats.' },
      { name: 'Article 226 / 32, Constitution of India', desc: 'Habeas corpus for illegal confinement.' },
    ],
    pitfalls: [
      { title: 'Mislabelling the Offence', desc: 'Confusing restraint, confinement and kidnapping changes the gravity and bail position.' },
      { title: 'Relying on Minor’s Consent', desc: 'A minor’s consent is no defence to kidnapping from lawful guardianship.' },
      { title: 'Weak Threat Evidence', desc: 'Criminal-intimidation cases need contemporaneous, corroborated proof of the threat.' },
      { title: 'Delay in Habeas Corpus', desc: 'Delay in moving for habeas corpus prolongs illegal confinement.' },
    ],
    faqs: [
      { q: 'Is a minor’s consent a defence in kidnapping?', a: 'No — taking a minor out of the keeping of a lawful guardian without consent is kidnapping under the BNS regardless of the minor’s consent.' },
      { q: 'When is wrongful confinement made out?', a: 'When a person is wrongfully restrained in such a manner as to prevent them from proceeding beyond certain limits — punishable under Section 127 BNS.' },
      { q: 'What proof is needed for criminal intimidation?', a: 'Evidence of a threat to cause harm with intent to alarm or compel — messages, recordings and witnesses strengthen a Section 351 BNS case.' },
      { q: 'Can I get someone released from illegal confinement quickly?', a: 'Yes — a writ of habeas corpus before the High Court or Supreme Court is the swift remedy, alongside a criminal complaint.' },
    ],
    relatedServices: [
      { name: 'Murder, Abduction & Death by Negligence', href: '/services/lawyer-services/criminal-law/murder-abduction-negligence' },
      { name: 'Assault, Serious Injury & Personal Violence', href: '/services/lawyer-services/criminal-law/assault-injury' },
      { name: 'Arrest, Remand, Appeals & Writ Petitions', href: '/services/lawyer-services/criminal-law/arrest-remand-writ' },
    ],
  },

  'theft-robbery-burglary': {
    title: 'Theft, Robbery, Burglary & Trespass',
    description:
      'Defence and prosecution in property offences — theft (Section 303 BNS), snatching (304), robbery (309), dacoity (310) and criminal trespass / housebreaking (Sections 329–331 BNS).',
    keywords: ['theft Section 303 BNS', 'snatching Section 304 BNS', 'robbery Section 309 BNS', 'dacoity Section 310 BNS', 'criminal trespass Section 329 BNS', 'property offence lawyer'],
    overview:
      'Property offences in the Bharatiya Nyaya Sanhita, 2023 run from simple theft to armed dacoity. Theft is defined and punished under Section 303 BNS; the new code introduces a distinct offence of snatching under Section 304. Robbery — theft or extortion with the use or threat of force — is under Section 309, and dacoity (robbery by five or more persons) is under Section 310. Criminal trespass, house-trespass and housebreaking are dealt with under Sections 329 to 331 BNS.\n\nEach offence has distinct ingredients — dishonest intention, the use or threat of force, the number of offenders and the time and manner of entry — which decide both the charge and the sentence. Trials turn heavily on the recovery of stolen articles, identification (including test identification parades) and an unbroken chain of custody from seizure to court.\n\nWe handle FIR strategy, recovery and identification-parade defence, and trial advocacy with rigorous attention to the chain of custody — and, for victims, the restoration of property under the BNSS.',
    whyChooseUs: [
      { title: 'Charge Precision', desc: 'Correct mapping across theft, snatching, robbery and dacoity decides the bail and sentence.' },
      { title: 'Recovery Scrutiny', desc: 'Forensic testing of recovery memos, seals and chain of custody.' },
      { title: 'Identification Defence', desc: 'Test-identification-parade and dock-identification weaknesses pressed at trial.' },
      { title: 'Property Restoration', desc: 'Restoration of seized / stolen property to rightful owners under the BNSS.' },
    ],
    keyPoints: [
      'Section 303 BNS — theft',
      'Section 304 BNS — snatching',
      'Section 309 BNS — robbery',
      'Section 310 BNS — dacoity',
      'Sections 329–331 BNS — criminal trespass and housebreaking',
      'Recovery and identification-parade defence',
      'Chain-of-custody scrutiny of recovered articles',
      'Restoration of property to the owner',
    ],
    process: [
      { title: 'Charge Strategy', desc: 'Map the exact BNS provision based on force, weaponry and number of offenders.' },
      { title: 'Trial', desc: 'Test the recovery evidence, identification parade and chain of custody.' },
    ],
    documents: [
      'FIR, seizure / recovery memos and statements',
      'Inventory and valuation of stolen property',
      'Test-identification-parade records',
      'CCTV / electronic evidence',
      'Ownership proof of the property (for restoration)',
    ],
    statutoryRefs: [
      { name: 'Section 303 & 304 BNS, 2023', desc: 'Theft and the new offence of snatching.' },
      { name: 'Section 309 BNS, 2023', desc: 'Robbery and its punishment.' },
      { name: 'Section 310 BNS, 2023', desc: 'Dacoity (robbery by five or more persons).' },
      { name: 'Sections 329–331 BNS, 2023', desc: 'Criminal trespass, house-trespass and housebreaking.' },
      { name: 'Section 63 BSA, 2023', desc: 'Admissibility of CCTV and electronic records.' },
    ],
    pitfalls: [
      { title: 'Tainted Recovery', desc: 'Recoveries with broken seals or a weak chain of custody can be excluded at trial.' },
      { title: 'Suggestive Identification', desc: 'Improper test-identification parades undermine the prosecution.' },
      { title: 'Wrong Offence', desc: 'Charging robbery as theft (or vice versa) affects bail, sentence and trial strategy.' },
      { title: 'No Property Claim', desc: 'Victims often fail to seek timely restoration of recovered property.' },
    ],
    faqs: [
      { q: 'How is theft different from robbery?', a: 'Theft (Section 303 BNS) is dishonest taking without consent; robbery (Section 309 BNS) is theft or extortion accompanied by the use or threat of force.' },
      { q: 'What is snatching under the new code?', a: 'Snatching is now a distinct offence under Section 304 BNS, recognising the sudden, forceful seizure of movable property (such as chain or phone snatching).' },
      { q: 'When does robbery become dacoity?', a: 'When five or more persons conjointly commit or attempt robbery, the offence is dacoity under Section 310 BNS, which carries a heavier punishment.' },
      { q: 'Can I get my stolen property back?', a: 'Yes — the court can order restoration of recovered property to the rightful owner under the BNSS, subject to the property being produced and ownership established.' },
    ],
    relatedServices: [
      { name: 'Fraud, Cheating, Forgery & Mischief', href: '/services/lawyer-services/criminal-law/fraud-cheating-forgery' },
      { name: 'Assault, Serious Injury & Personal Violence', href: '/services/lawyer-services/criminal-law/assault-injury' },
      { name: 'Regular & Anticipatory Bail', href: '/services/lawyer-services/criminal-law/bail' },
    ],
  },

  'pocso': {
    title: 'POCSO Child Protection Cases',
    description:
      'Specialized representation under the Protection of Children from Sexual Offences Act, 2012 (POCSO) — for survivors and the accused, with utmost confidentiality.',
    keywords: ['POCSO lawyer', 'POCSO Act 2012', 'child protection case', 'Special Court POCSO', 'POCSO bail Section 31', 'reverse burden Section 29 POCSO'],
    overview:
      'The Protection of Children from Sexual Offences Act, 2012 (POCSO) creates child-friendly procedures for sexual offences against minors, including in-camera trials before Special Courts, recording of the child’s statement in a sensitive manner, and time-bound trial. It carries a reverse burden of proof under Section 29 (a presumption against the accused for certain offences) and Section 30 (presumption of culpable mental state), making strong, careful evidence handling essential.\n\nPOCSO operates alongside the Bharatiya Nyaya Sanhita, 2023, and where the accused is a juvenile, it interacts with the Juvenile Justice Act, 2015. The Act mandates support persons, identity protection and compensation under Section 33(8) read with the Victim Compensation Scheme. Given the sensitivity, both prosecution and defence demand discretion, speed and precision.\n\nWe represent survivor families and defend the accused with equal diligence — managing age determination, medical and forensic evidence, statement recording, bail strategy under the stringent POCSO framework, and compensation, always with strict confidentiality.',
    whyChooseUs: [
      { title: 'Child-Sensitive Practice', desc: 'Procedures handled with the sensitivity that POCSO and the Special Courts require.' },
      { title: 'Evidence Rigour', desc: 'Age proof, medical and forensic evidence and statement recording managed meticulously.' },
      { title: 'Reverse-Burden Navigation', desc: 'Section 29 / 30 presumptions met or rebutted with focused evidence.' },
      { title: 'Strict Confidentiality', desc: 'Identity protection and discretion throughout the proceedings.' },
    ],
    keyPoints: [
      'POCSO offences and graded sentences',
      'Special Court representation for survivors',
      'Bail strategy under the stringent POCSO framework',
      'Reverse burden of proof (Sections 29 & 30 POCSO)',
      'Compensation under Section 33(8) POCSO and the Victim Compensation Scheme',
      'Confidentiality and identity protection',
      'Interface with the Juvenile Justice Act, 2015',
    ],
    process: [
      { title: 'Assessment', desc: 'Evaluate evidence, age proof, medical reports and statements recorded under the BNSS.' },
      { title: 'Trial Strategy', desc: 'Special Court trial with child-friendly procedures and screened examination.' },
      { title: 'Compensation / Defence', desc: 'Pursue or defend compensation; argue the final sentence.' },
    ],
    documents: [
      'FIR and statements (including the child’s statement)',
      'Age-proof documents (birth certificate, school records, ossification report)',
      'Medical examination and forensic reports',
      'Support-person and counselling records',
      'Any electronic evidence',
    ],
    statutoryRefs: [
      { name: 'POCSO Act, 2012 — Sections 3–14', desc: 'Definitions and graded sexual offences against children.' },
      { name: 'Section 29 & 30 POCSO Act', desc: 'Presumption as to certain offences and of culpable mental state.' },
      { name: 'Section 33 & 35 POCSO Act', desc: 'Special Court procedure, child-friendly trial and compensation.' },
      { name: 'BNSS, 2023 (statement recording & trial)', desc: 'Recording of statements and procedure applied alongside POCSO.' },
    ],
    pitfalls: [
      { title: 'Disputed Age Proof', desc: 'Weak or contradictory age evidence is decisive — both sides must address it early.' },
      { title: 'Underestimating Reverse Burden', desc: 'The Section 29 / 30 presumptions shift the evidentiary onus and require a planned response.' },
      { title: 'Identity Disclosure', desc: 'Any disclosure of the child’s identity is itself an offence and must be scrupulously avoided.' },
      { title: 'Delayed Medical Examination', desc: 'Late or improper medical examination weakens the forensic record.' },
    ],
    faqs: [
      { q: 'Is bail difficult in POCSO cases?', a: 'Yes — POCSO has stringent provisions and a reverse burden, making bail difficult except where the evidence is weak or in close-in-age consensual situations, and even then only on careful judicial scrutiny.' },
      { q: 'Can the accused be a juvenile?', a: 'Yes — where the accused is a child, the Juvenile Justice Act, 2015 applies, and for heinous offences the Juvenile Justice Board may, after preliminary assessment, transfer the matter to the Children’s Court.' },
      { q: 'Is the child’s identity protected?', a: 'Yes — POCSO and the BNS strictly protect the identity of the child, and disclosure is a punishable offence.' },
      { q: 'Is the child examined in open court?', a: 'No — POCSO mandates a child-friendly, in-camera procedure, often with screens or video, so the child is not confronted directly by the accused.' },
    ],
    relatedServices: [
      { name: 'Rape & Sexual Assault Cases', href: '/services/lawyer-services/criminal-law/rape-sexual-assault' },
      { name: 'Child Sex Crimes & Juvenile Justice', href: '/services/lawyer-services/criminal-law/child-sex-juvenile' },
      { name: 'Regular & Anticipatory Bail', href: '/services/lawyer-services/criminal-law/bail' },
    ],
  },

  'rape-sexual-assault': {
    title: 'Rape & Sexual Assault Cases',
    description:
      'Comprehensive representation in rape (Section 64 BNS), sexual harassment (Section 75), stalking (Section 78) and related offences — with confidentiality and due process.',
    keywords: ['rape case lawyer Section 64 BNS', 'sexual assault', 'sexual harassment Section 75 BNS', 'stalking Section 78 BNS', 'in-camera trial Section 366 BNSS', 'Section 183 BNSS statement'],
    overview:
      'Sexual offences under the Bharatiya Nyaya Sanhita, 2023 are defined in Section 63 (rape) and punished under Section 64, with aggravated forms and gang rape under Sections 65 to 70. Allied offences include assault to outrage modesty (Section 74), sexual harassment (Section 75), disrobing (Section 76), voyeurism (Section 77) and stalking (Section 78). The disclosure of a victim’s identity is itself an offence under Section 72 BNS.\n\nThese cases require swift, sensitive action — timely medical examination, preservation of forensic evidence, and recording of the victim’s statement before a Magistrate under Section 183 BNSS. The trial is held in camera under Section 366 BNSS, and the victim is examined with care and dignity. Equally, due process protects the wrongly accused, and false or consensual-relationship cases must be defended with rigour and sensitivity.\n\nWe represent survivors through every stage — FIR, medical examination, statement, trial and appeal, with compensation — and defend the accused with respect for the presumption of innocence and a careful test of the prosecution evidence.',
    whyChooseUs: [
      { title: 'Survivor-Centred', desc: 'Sensitive, time-critical support through FIR, medical examination, statement and trial.' },
      { title: 'Evidence Preservation', desc: 'Forensic and medical evidence preserved and tested for integrity.' },
      { title: 'Confidentiality', desc: 'Identity protection under Section 72 BNS at every step.' },
      { title: 'Balanced Defence', desc: 'Rigorous, dignified defence of the wrongly accused, including in false / consensual cases.' },
    ],
    keyPoints: [
      'Section 63 / 64 BNS — rape and punishment',
      'Sections 65–70 BNS — aggravated forms and gang rape',
      'Sections 74–78 BNS — outraging modesty, harassment, voyeurism, stalking',
      'Section 183 BNSS statement before a Magistrate',
      'In-camera trial under Section 366 BNSS',
      'Medical examination and forensic challenge',
      'Identity protection under Section 72 BNS',
      'Compensation under the Victim Compensation Scheme',
    ],
    process: [
      { title: 'Immediate Steps', desc: 'FIR, medical examination at the earliest, and statement under Section 183 BNSS.' },
      { title: 'Investigation Monitoring', desc: 'Ensure proper procedure, evidence collection and timely chargesheet.' },
      { title: 'Trial', desc: 'In-camera trial under Section 366 BNSS; the victim is examined sensitively.' },
    ],
    documents: [
      'FIR and the victim’s statement',
      'Medical examination and forensic / FSL reports',
      'Section 183 BNSS statement record',
      'Electronic evidence (messages, call records)',
      'Treatment and counselling records',
    ],
    statutoryRefs: [
      { name: 'Section 63 & 64 BNS, 2023', desc: 'Definition of rape and punishment.' },
      { name: 'Sections 74–78 BNS, 2023', desc: 'Outraging modesty, sexual harassment, voyeurism and stalking.' },
      { name: 'Section 72 BNS, 2023', desc: 'Prohibition on disclosing the identity of the victim.' },
      { name: 'Section 183 BNSS, 2023', desc: 'Recording of the victim’s statement by a Magistrate.' },
      { name: 'Section 366 BNSS, 2023', desc: 'In-camera trial for sexual offences.' },
    ],
    pitfalls: [
      { title: 'Delayed Medical Examination', desc: 'Late examination risks loss of crucial forensic evidence.' },
      { title: 'Identity Disclosure', desc: 'Disclosing the victim’s identity is itself an offence under Section 72 BNS.' },
      { title: 'Unmonitored Investigation', desc: 'Procedural lapses by the investigating agency can derail a genuine case.' },
      { title: 'Ignoring Electronic Evidence', desc: 'Messages and call records require proper preservation and a Section 63 BSA certificate.' },
    ],
    faqs: [
      { q: 'Can the trial be held in camera?', a: 'Yes — Section 366 BNSS mandates an in-camera trial for rape and related offences, with only authorised persons present.' },
      { q: 'Is the victim’s identity protected?', a: 'Yes — Section 72 BNS criminalises disclosure of the identity of victims of certain sexual offences (and POCSO complainants).' },
      { q: 'Where is the victim’s statement recorded?', a: 'A statement can be recorded by a Magistrate under Section 183 BNSS, and for certain offences by a woman Magistrate / officer, to preserve its evidentiary value.' },
      { q: 'How is a false case defended?', a: 'Through careful scrutiny of contradictions, medical and forensic evidence, electronic records and the surrounding circumstances, while respecting the dignity of all parties and the presumption of innocence.' },
    ],
    relatedServices: [
      { name: 'POCSO Child Protection Cases', href: '/services/lawyer-services/criminal-law/pocso' },
      { name: 'Child Sex Crimes & Juvenile Justice', href: '/services/lawyer-services/criminal-law/child-sex-juvenile' },
      { name: 'Assault, Serious Injury & Personal Violence', href: '/services/lawyer-services/criminal-law/assault-injury' },
    ],
  },

  'child-sex-juvenile': {
    title: 'Child Sex Crimes & Juvenile Justice',
    description:
      'Representation in child sexual offences under POCSO and juvenile-accused proceedings under the Juvenile Justice (Care and Protection of Children) Act, 2015.',
    keywords: ['juvenile justice lawyer', 'JJ Act 2015', 'juvenile bail Section 12', 'preliminary assessment Section 15 JJ Act', 'Children’s Court', 'child in conflict with law'],
    overview:
      'Where a juvenile (a child below 18) is the accused, proceedings move from the regular criminal courts to the Juvenile Justice Board (JJB) under the Juvenile Justice (Care and Protection of Children) Act, 2015. The focus shifts from punishment to reform, rehabilitation and social reintegration, guided by a social investigation report. For heinous offences (punishable with seven years or more) allegedly committed by a child aged 16 to 18, the JJB conducts a preliminary assessment under Section 15 and may transfer the case to the Children’s Court for trial as an adult.\n\nBail for a child in conflict with law is the norm under Section 12 of the JJ Act — the child must ordinarily be released unless release would expose the child to danger or defeat the ends of justice. These cases run alongside POCSO where the offence is sexual, demanding sensitivity for both the child victim and the child accused.\n\nWe represent children in conflict with law and victim families alike — managing JJB inquiries, preliminary assessments, bail, rehabilitation plans and, where transfer occurs, Children’s Court trials, always centred on the child’s welfare and the law.',
    whyChooseUs: [
      { title: 'JJ-Act Expertise', desc: 'Deep familiarity with JJB procedure, preliminary assessment and Children’s Court trials.' },
      { title: 'Welfare-Centred', desc: 'Strategy built around reform, rehabilitation and the best interest of the child.' },
      { title: 'Bail as the Norm', desc: 'Section 12 bail pursued promptly for the child in conflict with law.' },
      { title: 'POCSO Interface', desc: 'Coordinated handling where POCSO and the JJ Act overlap.' },
    ],
    keyPoints: [
      'Juvenile Justice Board inquiry and orders',
      'Preliminary assessment under Section 15 JJ Act (16–18, heinous offences)',
      'Children’s Court trial procedure on transfer',
      'Bail under Section 12 JJ Act (release as the norm)',
      'Rehabilitation and alternatives to incarceration',
      'Final orders — counselling, probation, special / observation home',
      'Interface with POCSO for child victims',
    ],
    process: [
      { title: 'Apprehension', desc: 'Production before the JJB / Child Welfare Police Officer at the earliest.' },
      { title: 'Bail / Inquiry', desc: 'Bail under Section 12 JJ Act; the JJB inquiry begins with a social investigation report.' },
      { title: 'Final Order', desc: 'Reform-oriented orders — counselling, community service or placement, or transfer for trial.' },
    ],
    documents: [
      'Age-proof documents of the child',
      'FIR / complaint and statements',
      'Social investigation report',
      'School / counselling and family-background records',
      'Medical reports (where applicable)',
    ],
    statutoryRefs: [
      { name: 'Juvenile Justice Act, 2015 — Section 12', desc: 'Bail to a person who is apparently a child.' },
      { name: 'Section 15 JJ Act, 2015', desc: 'Preliminary assessment in heinous offences for children aged 16–18.' },
      { name: 'Section 18 & 19 JJ Act, 2015', desc: 'Orders of the JJB and the Children’s Court.' },
      { name: 'POCSO Act, 2012', desc: 'Applies where the underlying offence is sexual.' },
    ],
    pitfalls: [
      { title: 'Disputed Age', desc: 'Age determination is decisive — gaps in age proof can change the entire forum.' },
      { title: 'Treating It as a Regular Trial', desc: 'JJ-Act procedure differs fundamentally from a regular criminal trial.' },
      { title: 'Missing Section 12 Bail', desc: 'Not pressing bail as the norm keeps a child in avoidable custody.' },
      { title: 'Ignoring Rehabilitation', desc: 'Failing to engage with the social investigation and rehabilitation plan harms outcomes.' },
    ],
    faqs: [
      { q: 'Can a 17-year-old be tried as an adult?', a: 'For heinous offences (punishable with seven years or more), the JJB conducts a preliminary assessment under Section 15 JJ Act and may transfer the case to the Children’s Court for trial as an adult.' },
      { q: 'Is bail easier for a juvenile?', a: 'Yes — under Section 12 JJ Act, release is the norm for a child in conflict with law unless it would expose the child to danger or defeat the ends of justice.' },
      { q: 'How is age determined?', a: 'Primarily by the birth certificate or school records, and if unavailable, by an ossification or other medical test, as provided under the JJ Act.' },
      { q: 'What orders can the JJB pass?', a: 'Reform-oriented orders such as counselling, community service, probation, or placement in a special / observation home — incarceration in a regular prison is avoided.' },
    ],
    relatedServices: [
      { name: 'POCSO Child Protection Cases', href: '/services/lawyer-services/criminal-law/pocso' },
      { name: 'Rape & Sexual Assault Cases', href: '/services/lawyer-services/criminal-law/rape-sexual-assault' },
      { name: 'Regular & Anticipatory Bail', href: '/services/lawyer-services/criminal-law/bail' },
    ],
  },

  'cheque-bounce-ni-act': {
    title: 'Cheque Bounce — NI Act Section 138/142',
    description:
      'Recovery and prosecution under the Negotiable Instruments Act, 1881 — Section 138 dishonour, Section 142 jurisdiction, summary trial and Section 148 deposit in appeal.',
    keywords: ['cheque bounce case', 'Section 138 NI Act', 'Section 142 NI Act', 'cheque dishonour lawyer', 'Section 148 NI Act appeal', 'Section 147 compounding'],
    overview:
      'Dishonour of a cheque for insufficiency of funds is an offence under Section 138 of the Negotiable Instruments Act, 1881, punishable with imprisonment up to two years or a fine up to twice the cheque amount, or both. The Negotiable Instruments Act is a special statute that was not replaced by the new criminal codes, so its sections continue unchanged — though the trial procedure draws on the BNSS as the general procedural law.\n\nThe statutory timeline is strict and non-extendable: a demand notice must be issued within 30 days of receiving the bank’s return memo, and the complaint must be filed within 30 days of the drawer’s failure to pay within 15 days of the notice. Jurisdiction lies, under Section 142, where the payee’s bank branch is situated. The trial is summary in nature under Section 143, with presumptions in the complainant’s favour under Sections 118 and 139.\n\nWe handle the entire cycle — statutory notice, complaint, summary trial, interim compensation, appeals with the mandatory deposit under Section 148, and compounding under Section 147 in line with the Damodar S. Prabhu guidelines.',
    whyChooseUs: [
      { title: 'Timeline Discipline', desc: 'We protect the strict, non-extendable 30-day notice and filing windows.' },
      { title: 'Presumption Leverage', desc: 'Sections 118 / 139 presumptions used to the complainant’s advantage — or rebutted in defence.' },
      { title: 'Interim & Appeal Deposits', desc: 'Interim compensation and the Section 148 appeal deposit handled correctly.' },
      { title: 'Settlement Craft', desc: 'Compounding under Section 147 with cost as per Damodar S. Prabhu.' },
    ],
    keyPoints: [
      'Section 138 statutory notice within 30 days of the return memo',
      'Complaint within 30 days of the failure to pay',
      'Section 142 jurisdiction at the payee’s bank branch',
      'Summary trial procedure under Section 143',
      'Presumptions in favour of the holder (Sections 118 & 139)',
      'Interim compensation pending trial',
      'Section 148 — deposit of 20% on appeal',
      'Compounding under Section 147 / Damodar S. Prabhu guidelines',
    ],
    process: [
      { title: 'Statutory Notice', desc: 'Issue the demand notice within 30 days of the bank return memo.' },
      { title: 'Filing', desc: 'File the complaint before the competent Magistrate within 30 days of the failure to pay.' },
      { title: 'Trial', desc: 'Summary trial with the statutory presumptions in the complainant’s favour.' },
      { title: 'Appeal & Compounding', desc: 'Appeal with the 20% deposit; compounding available at any stage with cost.' },
    ],
    documents: [
      'Original dishonoured cheque',
      'Bank return / dishonour memo',
      'Statutory demand notice and proof of dispatch / service',
      'Reply (if any) from the drawer',
      'Underlying transaction / liability documents',
    ],
    statutoryRefs: [
      { name: 'Section 138 NI Act, 1881', desc: 'Dishonour of cheque for insufficiency of funds — offence and punishment.' },
      { name: 'Section 142 NI Act, 1881', desc: 'Cognizance and territorial jurisdiction at the payee’s bank branch.' },
      { name: 'Section 143 & 143A NI Act, 1881', desc: 'Summary trial and interim compensation.' },
      { name: 'Sections 147 & 148 NI Act, 1881', desc: 'Compounding of the offence and the 20% deposit on appeal.' },
      { name: 'Sections 118 & 139 NI Act, 1881', desc: 'Presumptions in favour of the holder of the cheque.' },
    ],
    pitfalls: [
      { title: 'Missing the Notice Window', desc: 'The 30-day notice and 30-day filing periods are mandatory and cannot be extended.' },
      { title: 'Wrong Jurisdiction', desc: 'Filing outside the payee’s-bank jurisdiction under Section 142 invites dismissal.' },
      { title: 'Defective Notice', desc: 'A vague demand notice that does not specify the cheque and amount can be fatal.' },
      { title: 'Ignoring Compounding', desc: 'Not exploring Section 147 compounding prolongs litigation that could settle.' },
    ],
    faqs: [
      { q: 'What is the limitation period?', a: 'A statutory notice must be sent within 30 days of the bank return memo; the complaint must be filed within 30 days of the drawer’s failure to pay within 15 days of the notice. These periods are mandatory.' },
      { q: 'Is jail certain on conviction?', a: 'Imprisonment up to two years is possible, but courts often impose a fine and compensation. With compounding under Section 147, most cases settle.' },
      { q: 'Where do I file the complaint?', a: 'Under Section 142, before the court where the payee’s bank branch (in which the cheque was presented) is situated.' },
      { q: 'Do I have to deposit money to appeal a conviction?', a: 'Yes — under Section 148, the appellate court generally directs the appellant to deposit a minimum of 20% of the fine / compensation.' },
      { q: 'Did the new criminal codes change cheque bounce law?', a: 'No — the Negotiable Instruments Act, 1881 is a special statute and was not replaced; its sections continue, with the BNSS supplying general procedure.' },
    ],
    relatedServices: [
      { name: 'Fraud, Cheating, Forgery & Mischief', href: '/services/lawyer-services/criminal-law/fraud-cheating-forgery' },
      { name: 'Filing Criminal Complaints (BNSS)', href: '/services/lawyer-services/criminal-law/criminal-complaint-filing' },
      { name: 'Drafting Complaints — Police, Magistrate & Authorities', href: '/services/lawyer-services/criminal-law/complaint-drafting' },
    ],
  },

  'fraud-cheating-forgery': {
    title: 'Fraud, Cheating, Forgery & Mischief',
    description:
      'Representation in white-collar offences — cheating (Section 318 BNS), criminal breach of trust (Section 316), forgery (Sections 336–340) and mischief (Section 324 BNS).',
    keywords: ['cheating Section 318 BNS', 'criminal breach of trust Section 316 BNS', 'forgery Section 336 BNS', 'mischief Section 324 BNS', 'white collar crime lawyer', 'economic offence defence'],
    overview:
      'Economic offences require coordinated attention across criminal, civil and regulatory tracks. Under the Bharatiya Nyaya Sanhita, 2023, cheating is punished under Section 318 (with cheating and dishonestly inducing delivery of property under Section 318(4)); criminal breach of trust under Section 316; forgery and related offences under Sections 336 to 340 (including forgery for cheating and use of a forged document as genuine); and mischief under Section 324.\n\nThe central legal question in most of these cases is whether the dispute is genuinely criminal or a civil breach dressed in criminal clothing. Criminal liability for cheating requires a dishonest or fraudulent intention existing at the very inception of the transaction — a mere subsequent failure to perform a contract is civil. We map the dispute across the BNS, the Companies Act, the IBC and SEBI angles, and pursue prosecution where appropriate while defending civil disputes that are wrongly criminalised.\n\nFrom FIR and complaint strategy to document-heavy trials with handwriting and signature expert evidence, and quashing where the case is essentially civil, we handle the full spectrum.',
    whyChooseUs: [
      { title: 'Civil-or-Criminal Diagnosis', desc: 'We test at the outset whether the facts disclose a crime or a civil breach.' },
      { title: 'Document Forensics', desc: 'Handwriting, signature and document examination handled with expert evidence.' },
      { title: 'Multi-Track Coordination', desc: 'Criminal prosecution aligned with civil recovery, IBC and regulatory action.' },
      { title: 'Quashing Where Apt', desc: 'Quashing of civil disputes masquerading as crime under Section 528 BNSS.' },
    ],
    keyPoints: [
      'Section 318 BNS — cheating and dishonest inducement',
      'Section 316 BNS — criminal breach of trust',
      'Sections 336–340 BNS — forgery, forged valuable security and use of forged documents',
      'Section 324 BNS — mischief',
      'Quashing of civil disputes in criminal garb (Section 528 BNSS)',
      'Recovery coordination with civil suit / IBC',
      'Expert evidence on signatures and handwriting',
    ],
    process: [
      { title: 'Diagnostic', desc: 'Identify whether the facts disclose a criminal offence or a civil breach.' },
      { title: 'FIR / Quashing', desc: 'File an FIR / complaint, or move to quash where a civil dispute is masquerading as crime.' },
      { title: 'Trial', desc: 'Document-heavy trial with expert opinion on signatures and handwriting.' },
    ],
    documents: [
      'Agreements, invoices and transaction records',
      'Disputed / forged documents and specimen signatures',
      'Bank statements and money trail',
      'Correspondence showing intention at inception',
      'Company / regulatory filings (where relevant)',
    ],
    statutoryRefs: [
      { name: 'Section 318 BNS, 2023', desc: 'Cheating and dishonestly inducing delivery of property.' },
      { name: 'Section 316 BNS, 2023', desc: 'Criminal breach of trust (including by public servant / banker).' },
      { name: 'Sections 336–340 BNS, 2023', desc: 'Forgery, forgery for cheating, forged valuable security and use of forged documents.' },
      { name: 'Section 324 BNS, 2023', desc: 'Mischief.' },
      { name: 'Section 528 BNSS, 2023', desc: 'Quashing of proceedings that are essentially civil disputes.' },
    ],
    pitfalls: [
      { title: 'Criminalising a Contract', desc: 'A mere breach of contract without dishonest intention at inception is civil, not criminal.' },
      { title: 'Weak Money Trail', desc: 'Economic-offence cases require a clear, documented money trail.' },
      { title: 'No Expert Evidence', desc: 'Forgery allegations without handwriting / document expert evidence often fail.' },
      { title: 'Missing the Quashing Window', desc: 'Delay in seeking quashing of a civil-dressed-as-criminal case hardens the proceeding.' },
    ],
    faqs: [
      { q: 'When is a breach of contract criminal?', a: 'Only where a dishonest or fraudulent intention existed at the very inception of the transaction. A mere subsequent failure to perform is a civil matter, as the Supreme Court has repeatedly held.' },
      { q: 'What is the difference between cheating and criminal breach of trust?', a: 'Cheating (Section 318 BNS) involves deception inducing delivery of property; criminal breach of trust (Section 316 BNS) involves dishonest misappropriation of property that was lawfully entrusted.' },
      { q: 'How is forgery proved?', a: 'Through the disputed document, specimen signatures / handwriting and expert (FSL) opinion, supported by the surrounding circumstances and intent under Sections 336–340 BNS.' },
      { q: 'Can a false economic-offence FIR be quashed?', a: 'Yes — where the dispute is fundamentally civil, the High Court can quash the proceedings under Section 528 BNSS.' },
    ],
    relatedServices: [
      { name: 'Cheque Bounce — NI Act Section 138/142', href: '/services/lawyer-services/criminal-law/cheque-bounce-ni-act' },
      { name: 'Money Laundering', href: '/services/lawyer-services/criminal-law/money-laundering' },
      { name: 'Cyber Crimes & Data Theft', href: '/services/lawyer-services/criminal-law/cyber-crime-data-theft' },
    ],
  },

  'money-laundering': {
    title: 'Money Laundering',
    description:
      'Defence in PMLA proceedings — ED investigations, Section 50 statements, provisional attachment, and Adjudicating Authority / Appellate Tribunal representation.',
    keywords: ['PMLA lawyer', 'money laundering defence', 'ED investigation', 'Section 50 PMLA statement', 'provisional attachment PMLA', 'PMLA bail Section 45', 'ECIR'],
    overview:
      'The Prevention of Money-Laundering Act, 2002 (PMLA) is among India’s most stringent statutes and is a special law unaffected by the new criminal codes. Money laundering under Section 3 is built on a "scheduled offence" (the predicate offence) — without proceeds of crime traceable to a scheduled offence, the PMLA edifice does not stand. The Enforcement Directorate (ED) has wide powers of summons, statements under Section 50, search, seizure, arrest under Section 19 and provisional attachment of property under Section 5.\n\nDefence is multi-layered: challenging the predicate / scheduled-offence linkage and the ECIR, testing the validity and voluntariness of Section 50 statements, defending the provisional attachment before the Adjudicating Authority within the statutory timeline, and pursuing bail under the Section 45 twin-test. The Supreme Court has, in recent years, refined these provisions — particularly bail for women, the sick, the infirm and where incarceration is prolonged.\n\nWe represent individuals and corporates from the pre-investigation stage through ED proceedings, the Adjudicating Authority, the Appellate Tribunal and constitutional challenges — integrating predicate-offence strategy with statement protection and asset defence.',
    whyChooseUs: [
      { title: 'Predicate-First Strategy', desc: 'We attack the scheduled-offence and proceeds-of-crime linkage at the root.' },
      { title: 'Section 50 Protection', desc: 'Summons response and statement strategy that safeguards your rights.' },
      { title: 'Asset Defence', desc: 'Provisional-attachment defence before the Adjudicating Authority within the timeline.' },
      { title: 'Twin-Test Bail', desc: 'Bail argued on the refined Section 45 jurisprudence and prolonged-incarceration grounds.' },
    ],
    keyPoints: [
      'Pre-investigation legal opinion and protection',
      'Section 50 PMLA statement representation',
      'ECIR challenge and predicate / scheduled-offence analysis',
      'Provisional Attachment Order defence (Section 5)',
      'Adjudicating Authority and Appellate Tribunal representation',
      'Bail strategy under the Section 45 twin-test',
      'Arrest defence under Section 19 PMLA',
      'Constitutional challenges to PMLA provisions',
    ],
    process: [
      { title: 'Strategy', desc: 'Map the predicate offence, scheduled-offence linkage and the quantum of proceeds of crime.' },
      { title: 'Investigation Defence', desc: 'Section 50 representation and a calibrated document-production strategy.' },
      { title: 'Attachment', desc: 'Defend the provisional attachment before the Adjudicating Authority within 180 days.' },
      { title: 'Bail / Appeal', desc: 'Bail under the refined twin-test; onward to the PMLA Appellate Tribunal.' },
    ],
    documents: [
      'ED summons / notice and the ECIR (if available)',
      'Details of the predicate / scheduled offence',
      'Financial records and money-trail documents',
      'Provisional Attachment Order and property documents',
      'Statements already recorded and correspondence with the ED',
    ],
    statutoryRefs: [
      { name: 'Section 3 & 4 PMLA, 2002', desc: 'Offence of money laundering and punishment.' },
      { name: 'Section 5 PMLA, 2002', desc: 'Provisional attachment of property involved in money laundering.' },
      { name: 'Section 19 & 50 PMLA, 2002', desc: 'Power to arrest and to summon / record statements.' },
      { name: 'Section 45 PMLA, 2002', desc: 'Twin-test conditions for bail in money-laundering offences.' },
    ],
    pitfalls: [
      { title: 'Ignoring the Predicate', desc: 'Without a sustainable scheduled offence, the PMLA case can be challenged at its foundation.' },
      { title: 'Unguarded Section 50 Statements', desc: 'Statements to the ED are admissible — an unprepared statement can be damaging.' },
      { title: 'Missing the Attachment Timeline', desc: 'Failing to contest the provisional attachment before the Adjudicating Authority in time.' },
      { title: 'Generic Bail Application', desc: 'A bail plea that does not engage the Section 45 twin-test is unlikely to succeed.' },
    ],
    faqs: [
      { q: 'Is bail in PMLA possible?', a: 'Yes — though harder. The Section 45 twin-test must be satisfied, but recent Supreme Court judgments have refined it, particularly for women, the sick, the infirm and where incarceration is prolonged.' },
      { q: 'Can the ED summon any person?', a: 'Yes — Section 50 powers are broad and statements recorded are admissible. The presence of counsel, subject to procedural conditions, has been recognised.' },
      { q: 'What is the role of the predicate offence?', a: 'Money laundering is dependent on a scheduled (predicate) offence generating proceeds of crime; the strength of the PMLA case is tied to the predicate.' },
      { q: 'Did the new criminal codes change the PMLA?', a: 'No — the PMLA is a special statute and was not replaced. Its provisions continue, with the BNSS supplying general procedure where the PMLA is silent.' },
    ],
    relatedServices: [
      { name: 'CBI / ED / Crime Branch Cases', href: '/services/lawyer-services/criminal-law/cbi-ed-crime-branch' },
      { name: 'Fraud, Cheating, Forgery & Mischief', href: '/services/lawyer-services/criminal-law/fraud-cheating-forgery' },
      { name: 'Lookout Circular Cancellation', href: '/services/lawyer-services/criminal-law/lookout-circular-cancellation' },
    ],
  },

  'cbi-ed-crime-branch': {
    title: 'CBI / ED / Crime Branch Cases',
    description:
      'Specialized defence in central-agency investigations — CBI (PC Act, special crimes), ED (PMLA, FEMA) and State Crime Branch / EOW matters.',
    keywords: ['CBI case lawyer', 'ED defence', 'Crime Branch case', 'PC Act 1988', 'sanction Section 218 BNSS', 'EOW fraud case', 'preliminary enquiry CBI'],
    overview:
      'Cases handled by central and specialised investigating agencies carry distinct procedural rigours, sanction requirements and trial fora. The CBI investigates corruption under the Prevention of Corruption Act, 1988 and notified special crimes; the ED handles PMLA and FEMA matters; and State Crime Branch / Economic Offences Wing (EOW) units deal with large frauds. These agencies operate under their own manuals and special-court systems, alongside the BNSS as the general procedural law.\n\nA recurring and decisive issue is sanction for prosecution. For offences by public servants in the discharge of official duty, valid prior sanction is required under Section 218 BNSS and, for corruption offences, under Section 19 of the PC Act — its absence can be a complete bar. Equally important are the legality of the preliminary enquiry / regular case, the search-and-seizure protocol, and the integrity of evidence such as voice samples and sting recordings.\n\nWe represent public servants, corporates and individuals from the source-information and search stage through CBI / Special Court trial and High Court appeals, with close attention to sanction, procedure and evidence.',
    whyChooseUs: [
      { title: 'Sanction Scrutiny', desc: 'We test the validity of prosecution sanction — often the decisive defence.' },
      { title: 'Search Protocol Audit', desc: 'Panchnama, seizure and search legality examined for procedural lapses.' },
      { title: 'Special-Court Advocacy', desc: 'Experienced before CBI / Special Courts and in PC Act trials.' },
      { title: 'Stage-Early Engagement', desc: 'Advice from the PE / source-information stage, before a regular case crystallises.' },
    ],
    keyPoints: [
      'PC Act, 1988 cases — bribery and illegal gratification',
      'CBI source-information / preliminary-enquiry stage advisory',
      'ED PMLA / FEMA proceedings (see Money Laundering)',
      'EOW / Crime Branch fraud cases',
      'Sanction for prosecution — Section 218 BNSS / Section 19 PC Act',
      'Search, seizure and panchnama scrutiny',
      'Special Court trial and appeals',
    ],
    process: [
      { title: 'Stage Identification', desc: 'Identify the stage — preliminary enquiry, regular case or chargesheet — and the investigation status.' },
      { title: 'Counsel & Search', desc: 'Search-and-seizure protocol and panchnama scrutiny.' },
      { title: 'Trial', desc: 'Special Court trial with cross-examination on sanction, voice samples and sting evidence.' },
    ],
    documents: [
      'Summons / notice and any FIR / RC / ECIR',
      'Search and seizure memos / panchnama',
      'Sanction order (or proof of its absence)',
      'Official records relevant to the alleged duty',
      'Financial and money-trail documents',
    ],
    statutoryRefs: [
      { name: 'Prevention of Corruption Act, 1988', desc: 'Bribery and illegal gratification offences investigated by the CBI.' },
      { name: 'Section 19 PC Act, 1988', desc: 'Previous sanction necessary for prosecution under the PC Act.' },
      { name: 'Section 218 BNSS, 2023', desc: 'Sanction for prosecution of judges and public servants.' },
      { name: 'PMLA, 2002 / FEMA, 1999', desc: 'Statutes administered by the Enforcement Directorate.' },
    ],
    pitfalls: [
      { title: 'Ignoring Sanction', desc: 'Overlooking a defective or absent prosecution sanction forfeits a complete bar to trial.' },
      { title: 'Unchallenged Search', desc: 'Failing to scrutinise the panchnama and search procedure for illegalities.' },
      { title: 'Late Engagement', desc: 'Waiting until chargesheet stage forgoes opportunities at the PE / source stage.' },
      { title: 'Weak Evidence Challenge', desc: 'Not testing voice samples, sting recordings and their Section 63 BSA certification.' },
    ],
    faqs: [
      { q: 'What is a Preliminary Enquiry?', a: 'A fact-finding stage under the CBI Manual before a formal Regular Case (RC) is registered. A mala fide PE can be challenged before the High Court.' },
      { q: 'Is sanction required to prosecute a public servant?', a: 'Yes — for acts in the discharge of official duty, valid prior sanction is required under Section 218 BNSS and Section 19 of the PC Act; its absence can be a complete bar.' },
      { q: 'Where are CBI / PC Act cases tried?', a: 'Before designated CBI / Special Courts, with appeals to the High Court and onward to the Supreme Court.' },
      { q: 'How are ED and CBI matters different?', a: 'The CBI investigates corruption and notified offences (often under the PC Act); the ED handles money laundering (PMLA) and foreign-exchange (FEMA) matters — with overlapping facts in many cases.' },
    ],
    relatedServices: [
      { name: 'Money Laundering', href: '/services/lawyer-services/criminal-law/money-laundering' },
      { name: 'Fraud, Cheating, Forgery & Mischief', href: '/services/lawyer-services/criminal-law/fraud-cheating-forgery' },
      { name: 'Lookout Circular Cancellation', href: '/services/lawyer-services/criminal-law/lookout-circular-cancellation' },
    ],
  },

  'drug-offences': {
    title: 'Drug Offences (NDPS Act)',
    description:
      'Defence in Narcotic Drugs and Psychotropic Substances Act, 1985 cases — quantity-based offences, search-and-seizure challenges and bail under Section 37.',
    keywords: ['NDPS lawyer', 'NDPS Act 1985', 'commercial quantity', 'Section 37 NDPS bail', 'Section 50 NDPS search', 'drug case defence', 'FSL chain of custody'],
    overview:
      'The Narcotic Drugs and Psychotropic Substances Act, 1985 (NDPS) is a strict, special statute — unaffected by the new criminal codes — with punishment graded by quantity: small, intermediate (more than small but less than commercial) and commercial. For commercial quantity, Section 37 imposes stringent twin conditions for bail, and minimum sentences are severe. Section 31A even provides for the death penalty for certain repeat offences.\n\nBecause the stakes are so high, procedural compliance is the heart of NDPS defence. Section 50 (the right to be searched before a Magistrate or gazetted officer), Sections 41–43 (search and seizure procedure), and the sealing, sampling and chain-of-custody of contraband to the Forensic Science Laboratory are all fertile grounds. The Supreme Court has held strict compliance with Section 50 to be mandatory, and breaches are generally fatal to the prosecution.\n\nWe build NDPS defence around a forensic audit of the search and seizure, sample-handling challenges and bail strategy under the refined Section 37 jurisprudence — for both the accused and, where relevant, monitoring of fair investigation.',
    whyChooseUs: [
      { title: 'Procedure-First Defence', desc: 'Section 50 and 41–43 compliance audited line by line — often the case turns here.' },
      { title: 'Chain-of-Custody Challenge', desc: 'Sealing, sampling and FSL-transmission scrutinised for breaks and discrepancies.' },
      { title: 'Quantity Strategy', desc: 'Accurate quantity categorisation that decides sentence and bail.' },
      { title: 'Section 37 Bail', desc: 'Bail argued on the refined twin-test and procedural-lapse grounds.' },
    ],
    keyPoints: [
      'Quantity-based offence categorisation (small / intermediate / commercial)',
      'Section 50 NDPS — right to search before a Magistrate / gazetted officer',
      'Sections 41 / 42 / 43 NDPS — search procedure',
      'Sample collection and FSL chain of custody',
      'Section 37 NDPS bail twin-test',
      'Section 31A — death-penalty defences',
      'Conscious-possession and knowledge defence',
    ],
    process: [
      { title: 'Search Audit', desc: 'Examine the search, Section 50 compliance and the presence of a gazetted officer.' },
      { title: 'Sample Defence', desc: 'Challenge the sealing, sampling and transmission to the FSL.' },
      { title: 'Bail / Trial', desc: 'Bail under the refined Section 37 jurisprudence; trial focused on procedure.' },
    ],
    documents: [
      'FIR / seizure documents and search memos',
      'Section 50 notice and compliance record',
      'Sealing, sampling and FSL forwarding documents',
      'FSL report and chain-of-custody records',
      'Arrest memo and recovery details',
    ],
    statutoryRefs: [
      { name: 'NDPS Act, 1985 — Sections 20–27', desc: 'Quantity-based offences and punishment for drugs and psychotropic substances.' },
      { name: 'Section 37 NDPS Act, 1985', desc: 'Stringent twin-test conditions for bail in commercial-quantity cases.' },
      { name: 'Sections 41–43 & 50 NDPS Act, 1985', desc: 'Search, seizure and the right to be searched before a Magistrate / gazetted officer.' },
      { name: 'Section 31A NDPS Act, 1985', desc: 'Enhanced punishment, including the death penalty for certain repeat offences.' },
    ],
    pitfalls: [
      { title: 'Ignoring Section 50', desc: 'Strict compliance with Section 50 is mandatory; overlooking a breach forgoes a strong defence.' },
      { title: 'Weak Chain-of-Custody Challenge', desc: 'Not testing sealing, sampling and FSL transmission lets tainted evidence stand.' },
      { title: 'Wrong Quantity', desc: 'Mis-categorising the quantity affects both the sentence and the Section 37 bail bar.' },
      { title: 'Conceding Conscious Possession', desc: 'Failing to contest knowledge / conscious possession where the facts allow.' },
    ],
    faqs: [
      { q: 'What is "commercial quantity"?', a: 'The quantity specified for each substance in the NDPS notification; exceeding it triggers the Section 37 bail rigours and minimum mandatory imprisonment, typically ten years or more.' },
      { q: 'Is a Section 50 violation fatal?', a: 'Generally yes — the Supreme Court has held that strict compliance with Section 50 is mandatory, and a violation is usually fatal to the prosecution in personal-search cases.' },
      { q: 'How difficult is NDPS bail?', a: 'For commercial quantity, bail is hard because Section 37 requires the court to be satisfied of innocence and that the accused is unlikely to offend again; procedural lapses and quantity often become the route to bail.' },
      { q: 'Did the new criminal codes change the NDPS Act?', a: 'No — the NDPS Act, 1985 is a special statute and was not replaced; the BNSS supplies general procedure where the NDPS Act is silent.' },
    ],
    relatedServices: [
      { name: 'Regular & Anticipatory Bail', href: '/services/lawyer-services/criminal-law/bail' },
      { name: 'Arrest, Remand, Appeals & Writ Petitions', href: '/services/lawyer-services/criminal-law/arrest-remand-writ' },
      { name: 'CBI / ED / Crime Branch Cases', href: '/services/lawyer-services/criminal-law/cbi-ed-crime-branch' },
    ],
  },

  'cyber-crime-data-theft': {
    title: 'Cyber Crimes & Data Theft',
    description:
      'Defence and prosecution in cyber offences under the IT Act, 2000 and the BNS — hacking, identity theft, online fraud, cyber-stalking and data breach.',
    keywords: ['cyber crime lawyer', 'IT Act 2000', 'Section 66 IT Act', 'identity theft Section 66C', 'data theft', 'Section 63 BSA certificate', 'online fraud defence'],
    overview:
      'Cyber crimes are prosecuted under the Information Technology Act, 2000 (a special statute, unaffected by the new criminal codes) read with the Bharatiya Nyaya Sanhita, 2023 for the underlying cheating, forgery or intimidation. Key IT Act provisions include Section 43 (damage to computer systems with civil liability), Section 66 (computer-related offences), Section 66C (identity theft), Section 66D (cheating by personation using a computer resource), Section 66F (cyber terrorism) and Section 67 (publishing obscene / sexually explicit material).\n\nThe decisive evidentiary issue in almost every cyber case is the admissibility of electronic records, which now requires a certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (the successor to the well-known electronic-records certificate). Evidence preservation — screenshots, server logs, hash values and metadata — must be done correctly at the outset. Incident reporting to CERT-In and compliance with the Digital Personal Data Protection Act, 2023 add a regulatory layer for organisations.\n\nWe represent victims of online fraud, identity theft, romance scams and non-consensual imagery, and corporates facing data-breach allegations — combining technical evidence preservation with effective prosecution and defence.',
    whyChooseUs: [
      { title: 'Digital Evidence Craft', desc: 'Correct preservation — hash values, logs, metadata — and Section 63 BSA certification.' },
      { title: 'IT Act + BNS Mapping', desc: 'Charges mapped across the IT Act and the BNS for the strongest case.' },
      { title: 'Rapid Takedown & Reporting', desc: 'Swift action via the cybercrime portal, intermediaries and CERT-In reporting.' },
      { title: 'Corporate Data-Breach Defence', desc: 'DPDP Act compliance and breach-response advisory for organisations.' },
    ],
    keyPoints: [
      'Section 66 IT Act — computer-related offences',
      'Section 66C IT Act — identity theft',
      'Section 66D IT Act — cheating by personation',
      'Section 66F IT Act — cyber terrorism',
      'Section 67 IT Act — obscene / non-consensual intimate imagery',
      'Data theft under Section 43 IT Act with BNS theft / breach-of-trust',
      'Section 63 BSA certificate for electronic records',
      'CERT-In incident reporting and DPDP Act, 2023 compliance',
    ],
    process: [
      { title: 'Evidence Preservation', desc: 'Capture screenshots, server logs and hash values; obtain the Section 63 BSA certificate.' },
      { title: 'FIR / Complaint', desc: 'Report via the cybercrime portal / cyber cell, with Section 175(3) BNSS where needed.' },
      { title: 'Investigation & Trial', desc: 'Forensic image analysis and cross-examination of expert witnesses.' },
    ],
    documents: [
      'Screenshots, chat logs and transaction records',
      'Server / access logs and metadata with hash values',
      'Bank statements (for online-fraud trails)',
      'Section 63 BSA certificate for electronic records',
      'Device details and forensic images',
    ],
    statutoryRefs: [
      { name: 'IT Act, 2000 — Sections 43, 65, 66', desc: 'Damage to computer systems and computer-related offences.' },
      { name: 'Sections 66C, 66D & 66F IT Act, 2000', desc: 'Identity theft, cheating by personation and cyber terrorism.' },
      { name: 'Section 67 IT Act, 2000', desc: 'Publishing or transmitting obscene / sexually explicit material.' },
      { name: 'Section 63 BSA, 2023', desc: 'Admissibility of electronic records and the required certificate.' },
      { name: 'Digital Personal Data Protection Act, 2023', desc: 'Data-protection obligations and breach consequences for organisations.' },
    ],
    pitfalls: [
      { title: 'No Section 63 BSA Certificate', desc: 'Electronic evidence without the proper certificate can be held inadmissible.' },
      { title: 'Poor Evidence Preservation', desc: 'Failing to capture logs, metadata and hash values early lets evidence be lost or disputed.' },
      { title: 'Delay in Reporting', desc: 'Delay in reporting online fraud reduces the chance of freezing / recovering funds.' },
      { title: 'Ignoring DPDP Obligations', desc: 'Organisations overlooking breach-notification and DPDP duties face added liability.' },
    ],
    faqs: [
      { q: 'Where do I report a cyber crime?', a: 'On the national cybercrime portal (cybercrime.gov.in), at the jurisdictional cyber-crime police station, or the State Cyber Crime Cell; for financial fraud, immediate reporting helps freeze funds.' },
      { q: 'What is the Section 63 BSA certificate?', a: 'It is the certificate required under the Bharatiya Sakshya Adhiniyam, 2023 for the admissibility of electronic records — the successor to the earlier electronic-evidence certificate, and mandatory in most cyber cases.' },
      { q: 'Is identity theft a separate offence?', a: 'Yes — Section 66C of the IT Act specifically punishes identity theft (fraudulent use of another’s electronic signature, password or unique identification feature).' },
      { q: 'Did the new criminal codes replace the IT Act?', a: 'No — the IT Act, 2000 is a special statute and continues; cyber offences are charged under it read with the BNS, and electronic evidence is now certified under Section 63 BSA.' },
    ],
    relatedServices: [
      { name: 'Fraud, Cheating, Forgery & Mischief', href: '/services/lawyer-services/criminal-law/fraud-cheating-forgery' },
      { name: 'Money Laundering', href: '/services/lawyer-services/criminal-law/money-laundering' },
      { name: 'Drafting Complaints — Police, Magistrate & Authorities', href: '/services/lawyer-services/criminal-law/complaint-drafting' },
    ],
  },
};
