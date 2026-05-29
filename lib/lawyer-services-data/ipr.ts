import type { ServiceContent } from '@/components/leaf-service-page';

/**
 * IPR services — Trademark, Copyright and Patent.
 *
 * Governing statutes (special IP laws, unaffected by the 2023 criminal codes):
 *   - Trade Marks Act, 1999 + Trade Marks Rules, 2017
 *   - Copyright Act, 1957 + Copyright Rules, 2013
 *   - Patents Act, 1970 + Patents Rules, 2003 (as amended 2024)
 *
 * Currency notes: the IPAB was abolished by the Tribunals Reforms Act, 2021 —
 * IP appeals now lie to the High Court. The Patents (Amendment) Rules, 2024
 * reduced the Request for Examination window from 48 to 31 months.
 */

export const iprServiceLabels: Record<'trademark' | 'copyright' | 'patent', string> = {
  trademark: 'Trademark',
  copyright: 'Copyright',
  patent: 'Patent',
};

type IPRCategory = 'trademark' | 'copyright' | 'patent';

export const iprServices: Record<IPRCategory, Record<string, ServiceContent>> = {
  trademark: {
    'registration': {
      title: 'Trademark Registration',
      description:
        'Secure exclusive rights to your brand name, logo and tagline with end-to-end trademark registration before the Trade Marks Registry of India.',
      keywords: ['trademark registration India', 'TM-A filing', 'brand name registration', 'logo trademark', 'Trade Marks Act 1999', 'register a trademark'],
      overview:
        'A registered trademark gives you a statutory, ten-year (indefinitely renewable) exclusive right to use your brand mark for the goods or services in the registered class, and the right to sue for infringement. It converts your brand from a contested asset into a defensible one — essential for funding, franchising, licensing and e-commerce onboarding.\n\nUnder the Trade Marks Act, 1999 and the Trade Marks Rules, 2017, registration runs from an availability search and correct classification under the Nice Classification, through filing of Form TM-A, examination, journal publication and the four-month opposition window, to grant of the certificate. We manage the full lifecycle — clearing the mark before you spend on branding, drafting a robust specification, and prosecuting the application through every objection and hearing until the ® is yours.',
      whyChooseUs: [
        { title: 'Clearance Before You Commit', desc: 'A thorough search across all 45 classes so you don’t build a brand on a mark you can’t own.' },
        { title: 'Right Class, Right Spec', desc: 'Precise Nice classification and specification drafting that minimises objections and maximises scope.' },
        { title: 'End-to-End Prosecution', desc: 'Examination replies, hearings and publication tracking handled under one roof until registration.' },
        { title: 'Portfolio Mindset', desc: 'Word + logo strategy and multi-class planning aligned to your real business footprint.' },
      ],
      keyPoints: [
        'Comprehensive availability search across all 45 classes',
        'Filing under correct Nice Classification with a robust specification',
        'Use of the ™ symbol from the filing date',
        'Response to examination reports on Section 9 / 11 grounds',
        'Trademark Journal publication and opposition-window monitoring',
        'Registration certificate with ® entitlement',
        'Multi-class and series-mark filing strategy',
        '10-year protection, renewable indefinitely',
      ],
      process: [
        { title: 'Trademark Search', desc: 'Public search and a clearance opinion confirming availability and objection risk.' },
        { title: 'Filing TM-A', desc: 'Online application with the Registrar; the ™ symbol can be used from this stage.' },
        { title: 'Examination & Response', desc: 'Reply to the examination report within the statutory period; attend a hearing if needed.' },
        { title: 'Journal Publication', desc: 'The mark is advertised in the Trademark Journal; the 4-month opposition window opens.' },
        { title: 'Registration', desc: 'If unopposed, the certificate issues and the ® symbol can be used.' },
      ],
      documents: [
        'Logo / wordmark in high-resolution JPG',
        'Applicant ID proof (PAN, Aadhaar)',
        'Business registration proof (GST, incorporation, etc.)',
        'Power of Attorney (Form TM-48)',
        'User affidavit (if claiming prior use)',
        'MSME / Startup certificate (for fee concession)',
      ],
      statutoryRefs: [
        { name: 'Trade Marks Act, 1999 — Section 18', desc: 'Application for registration of a trademark.' },
        { name: 'Sections 9 & 11', desc: 'Absolute and relative grounds for refusal.' },
        { name: 'Section 25', desc: 'Duration (10 years) and renewal of registration.' },
        { name: 'Trade Marks Rules, 2017', desc: 'Procedure, forms (TM-A) and fees, including startup / MSME concessions.' },
      ],
      pitfalls: [
        { title: 'Wrong Class', desc: 'Filing in the wrong class leaves your actual goods / services unprotected.' },
        { title: 'Descriptive Marks', desc: 'Generic or descriptive marks attract Section 9 objections and weak protection.' },
        { title: 'No Prior Search', desc: 'Skipping clearance risks objection, opposition and wasted branding spend.' },
        { title: 'Missing Deadlines', desc: 'A missed examination-reply deadline can lead to the application being treated as abandoned.' },
      ],
      faqs: [
        { q: 'How long does trademark registration take?', a: 'Typically 12–24 months end-to-end if unopposed. The ™ symbol can be used immediately after filing; ® only after registration.' },
        { q: 'How long is a trademark valid?', a: 'Ten years from the date of application, renewable indefinitely in 10-year blocks.' },
        { q: 'Can I file in multiple classes?', a: 'Yes — a single multi-class application can cover several classes, with a separate fee per class.' },
        { q: 'What does ™ vs ® mean?', a: '™ indicates a claimed but unregistered mark; ® indicates a registered mark — using ® without registration is an offence.' },
        { q: 'Is a startup fee concession available?', a: 'Yes — individuals, startups and MSMEs pay a reduced government fee with the relevant certificate.' },
      ],
      relatedServices: [
        { name: 'Trademark Objection', href: '/services/lawyer-services/ipr-services/trademark/objection' },
        { name: 'Trademark Logo', href: '/services/lawyer-services/ipr-services/trademark/logo' },
        { name: 'Logo Copyright', href: '/services/lawyer-services/ipr-services/copyright/logo' },
      ],
    },
    'objection': {
      title: 'Trademark Objection',
      description:
        'Strategic response to examination reports raised by the Registrar under Sections 9 and 11 of the Trade Marks Act, 1999.',
      keywords: ['trademark objection reply', 'examination report response', 'Section 9 objection', 'Section 11 objection', 'TM examination reply', 'overcome trademark objection'],
      overview:
        'When the Registrar examines a trademark application, an examination report may raise objections on absolute grounds (Section 9 — descriptiveness, lack of distinctiveness) or relative grounds (Section 11 — conflict with earlier marks). A written reply is generally required within 30 days; failure to respond can lead to the application being treated as abandoned.\n\nThe reply is a legal argument, not a formality. We analyse each objection, distinguish cited marks, plead acquired distinctiveness where relevant, and back the response with user affidavits, sales and advertising evidence and judicial precedent — positioning the application to clear examination and move to journal publication.',
      whyChooseUs: [
        { title: 'Ground-by-Ground Rebuttal', desc: 'Each Section 9 / 11 objection answered with tailored argument and authority.' },
        { title: 'Evidence That Persuades', desc: 'User affidavits, sales and advertising proof assembled to show distinctiveness.' },
        { title: 'Precedent-Led Drafting', desc: 'Replies anchored in current Indian and foreign case law.' },
        { title: 'Hearing-Ready', desc: 'If the reply isn’t accepted, we carry the same strategy into the hearing.' },
      ],
      keyPoints: [
        'Analysis of each objection ground (descriptiveness, similarity, deception)',
        'Reasoned reply citing Indian and foreign judgments',
        'Affidavits of user, advertisement and sales evidence',
        'Strategy to amend specification or class to overcome objection',
        'Coordination of the hearing if the reply is not accepted',
        'Acquired-distinctiveness arguments under the proviso to Section 9',
      ],
      process: [
        { title: 'Report Review', desc: 'Detailed analysis of each cited objection and conflicting mark.' },
        { title: 'Evidence Compilation', desc: 'Gather usage evidence, sales figures, advertising spend and testimonials.' },
        { title: 'Draft & File Reply', desc: 'File the written response within the statutory period with affidavits and case law.' },
        { title: 'Hearing Representation', desc: 'Appear before the Hearing Officer if a hearing is fixed.' },
      ],
      statutoryRefs: [
        { name: 'Trade Marks Act, 1999 — Section 9', desc: 'Absolute grounds for refusal and the acquired-distinctiveness proviso.' },
        { name: 'Section 11', desc: 'Relative grounds — conflict with earlier marks.' },
        { name: 'Trade Marks Rules, 2017', desc: 'Timelines and procedure for replying to examination reports.' },
      ],
      pitfalls: [
        { title: 'Missing the 30-Day Window', desc: 'A late reply risks the application being treated as abandoned.' },
        { title: 'Generic Replies', desc: 'Template replies that don’t engage the specific cited marks rarely succeed.' },
        { title: 'No Evidence', desc: 'Asserting distinctiveness without affidavits and usage proof is weak.' },
      ],
      faqs: [
        { q: 'What is the time limit to respond to a trademark objection?', a: 'Generally 30 days from receipt of the examination report; the application risks abandonment if no reply is filed.' },
        { q: 'Can a Section 9 objection be overcome?', a: 'Yes — through evidence of acquired distinctiveness (long use, advertising, market recognition) supported by an affidavit and exhibits.' },
        { q: 'What if my reply is rejected?', a: 'A hearing is fixed where the case can be argued; if still refused, an appeal lies to the High Court.' },
        { q: 'Does replying guarantee acceptance?', a: 'No — but a well-evidenced, precedent-led reply materially improves the odds of clearing examination.' },
      ],
      relatedServices: [
        { name: 'Trademark Hearing', href: '/services/lawyer-services/ipr-services/trademark/hearing' },
        { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
        { name: 'Trademark Opposition', href: '/services/lawyer-services/ipr-services/trademark/opposition' },
      ],
    },
    'hearing': {
      title: 'Trademark Hearing',
      description:
        'Expert representation before the Trademark Hearing Officer to overcome examination objections that survive the written reply.',
      keywords: ['trademark hearing', 'show cause hearing trademark', 'TM hearing representation', 'hearing officer trademark', 'video conference trademark hearing'],
      overview:
        'Where written objections are not accepted, the Registrar fixes a show-cause hearing. This is the decisive oral stage — an attorney appears (now usually by video conference) to argue against each surviving objection with legal grounds, evidence and precedent, seeking acceptance of the mark for journal publication.\n\nSuccess turns on a tight hearing brief and confident advocacy. We prepare an argument map keyed to each objection, index the supporting evidence, and represent you at the hearing — followed by written submissions where the Hearing Officer permits, and clear advice on appeal if the outcome is adverse.',
      whyChooseUs: [
        { title: 'Hearing Brief Craft', desc: 'A structured brief mapping arguments, citations and evidence to each objection.' },
        { title: 'Confident Advocacy', desc: 'Experienced appearance before Hearing Officers, in person or by video.' },
        { title: 'Evidence Index', desc: 'Exhibits organised so the officer can verify distinctiveness and use at a glance.' },
        { title: 'Clear Next Steps', desc: 'Prompt advice on publication or appeal once the order is passed.' },
      ],
      keyPoints: [
        'Hearing brief with case law and an evidence index',
        'Appearance before the Hearing Officer (video / physical)',
        'Oral arguments addressing each surviving objection',
        'Additional written submissions where permitted',
        'Communication of the order and next steps',
        'Appeal advisory to the High Court if refused',
      ],
      process: [
        { title: 'Notice Analysis', desc: 'Review the hearing notice and prior reply to identify weak points.' },
        { title: 'Brief Preparation', desc: 'Compile arguments, citations and evidence exhibits.' },
        { title: 'Appearance', desc: 'Attend the hearing on the scheduled date and argue the case.' },
        { title: 'Outcome', desc: 'If accepted, the mark proceeds to publication; if refused, appeal options are advised.' },
      ],
      statutoryRefs: [
        { name: 'Trade Marks Act, 1999 — Sections 9 & 11', desc: 'Grounds argued at the show-cause hearing.' },
        { name: 'Section 18', desc: 'Acceptance / refusal of the application by the Registrar.' },
        { name: 'Trade Marks Rules, 2017', desc: 'Hearing procedure, adjournments and submissions.' },
      ],
      pitfalls: [
        { title: 'Non-Appearance', desc: 'Failing to appear generally results in refusal as abandoned.' },
        { title: 'Unprepared Brief', desc: 'Arguing without an evidence-backed brief weakens the case.' },
        { title: 'Over-Reliance on Adjournment', desc: 'Adjournments are discretionary and not guaranteed.' },
      ],
      faqs: [
        { q: 'Is appearance mandatory at the hearing?', a: 'Yes — non-appearance generally results in refusal of the application as abandoned.' },
        { q: 'Can the hearing be adjourned?', a: 'One adjournment may be granted on sufficient cause, at the Hearing Officer’s discretion.' },
        { q: 'Are hearings conducted virtually?', a: 'Most trademark hearings are now conducted via video conference, simplifying participation across India.' },
        { q: 'What happens after a successful hearing?', a: 'The mark is accepted and advertised in the Trademark Journal, opening the four-month opposition window.' },
      ],
      relatedServices: [
        { name: 'Trademark Objection', href: '/services/lawyer-services/ipr-services/trademark/objection' },
        { name: 'Trademark Opposition', href: '/services/lawyer-services/ipr-services/trademark/opposition' },
        { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
      ],
    },
    'opposition': {
      title: 'Trademark Opposition',
      description:
        'File or defend opposition proceedings during the 4-month journal publication window to protect or assert trademark rights.',
      keywords: ['trademark opposition', 'Form TM-O', 'oppose trademark', 'counter statement trademark', 'opposition board', 'defend trademark opposition'],
      overview:
        'Once a mark is advertised in the Trademark Journal, any person may oppose its registration within four months by filing a Notice of Opposition (Form TM-O). Opposition is the public’s check on the register — the forum to stop a confusingly similar or wrongly granted mark, and the stage where applicants defend hard-won applications against frivolous challenges.\n\nWe act on both sides: drafting oppositions grounded in prior rights, similarity and likelihood of confusion, and defending applicants through counter-statements, evidence affidavits and hearings before the Opposition Board. Where commercially sensible, we negotiate consent and coexistence agreements to resolve disputes faster than full proceedings.',
      whyChooseUs: [
        { title: 'Both Sides of the Table', desc: 'We file robust oppositions and mount effective defences with equal skill.' },
        { title: 'Strong Pleadings', desc: 'Grounds drafted on prior use, similarity and statutory bars under Sections 9 / 11 / 18.' },
        { title: 'Evidence Discipline', desc: 'Affidavit evidence assembled and filed within the strict timelines.' },
        { title: 'Settlement Strategy', desc: 'Consent and coexistence agreements where they serve your commercial interest.' },
      ],
      keyPoints: [
        'Notice of Opposition (Form TM-O) with detailed grounds',
        'Counter-statement filing within 2 months for applicants',
        'Evidence-stage filings (affidavits, documents)',
        'Hearing representation before the Opposition Board',
        'Consent / coexistence agreements where strategic',
        'Grounds under Sections 9, 11 and 18',
      ],
      process: [
        { title: 'Notice of Opposition', desc: 'Detailed notice citing prior rights, similarity and likelihood of confusion.' },
        { title: 'Counter-Statement', desc: 'The applicant files a counter-statement within 2 months or the application is abandoned.' },
        { title: 'Evidence', desc: 'Both parties file evidence by affidavit with supporting documents.' },
        { title: 'Hearing', desc: 'Oral arguments before the Hearing Officer lead to a final order.' },
      ],
      statutoryRefs: [
        { name: 'Trade Marks Act, 1999 — Section 21', desc: 'Opposition to registration and counter-statement procedure.' },
        { name: 'Sections 9 & 11', desc: 'Absolute and relative grounds available to an opponent.' },
        { name: 'Trade Marks Rules, 2017', desc: 'Form TM-O, evidence stages and timelines.' },
      ],
      pitfalls: [
        { title: 'Missing the 4-Month Window', desc: 'The opposition period cannot be extended; a late notice is not entertained.' },
        { title: 'No Counter-Statement', desc: 'An applicant who fails to file a counter-statement in time loses by default.' },
        { title: 'Weak Evidence', desc: 'Bare assertions of prior use without dated proof rarely prevail.' },
      ],
      faqs: [
        { q: 'What is the opposition window?', a: 'Four months from the date the mark is published in the Trademark Journal — not extendable.' },
        { q: 'Who can file an opposition?', a: 'Any person — not necessarily a prior registrant — with a legitimate ground under Sections 9, 11 or 18.' },
        { q: 'How long does opposition take?', a: 'Typically 18–36 months depending on the evidence stages and hearing schedules.' },
        { q: 'Can an opposition be settled?', a: 'Yes — many oppositions resolve through withdrawal, consent or coexistence agreements.' },
      ],
      relatedServices: [
        { name: 'Trademark Hearing', href: '/services/lawyer-services/ipr-services/trademark/hearing' },
        { name: 'Trademark Infringement', href: '/services/lawyer-services/ipr-services/trademark/infringement' },
        { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
      ],
    },
    'renewal': {
      title: 'Trademark Renewal',
      description:
        'Renew your registered trademark every 10 years to maintain perpetual exclusive rights and avoid removal from the register.',
      keywords: ['trademark renewal', 'Form TM-R', 'renew trademark India', 'trademark expiry', 'restore trademark', 'TM renewal fee'],
      overview:
        'A trademark is the rare asset that can last forever — provided it is renewed. Registration runs for ten years and is renewable indefinitely in ten-year blocks by filing Form TM-R. The renewal application can be filed within six months before expiry, or up to six months after expiry with a surcharge; miss that, and the mark is liable to removal.\n\nWe manage renewals individually and at portfolio scale — tracking expiry dates, filing TM-R on time, handling surcharge filings and obtaining the renewal certificate — so a calendar slip never costs you a brand you’ve spent years building.',
      whyChooseUs: [
        { title: 'Never Miss a Date', desc: 'Expiry tracking and reminders across single marks and whole portfolios.' },
        { title: 'Surcharge Handling', desc: 'Late renewals managed within the grace period before removal.' },
        { title: 'Portfolio Renewals', desc: 'Bulk renewal workflows for businesses with many marks.' },
        { title: 'Certificate Procurement', desc: 'Follow-through to the renewal certificate, not just the filing.' },
      ],
      keyPoints: [
        'Filing Form TM-R within the renewal window',
        'Surcharge filing for late renewals (within the grace period)',
        'Renewal certificate procurement',
        'Calendar reminders for the next 10-year cycle',
        'Bulk renewal handling for portfolios',
        'Restoration advisory if the mark is removed',
      ],
      process: [
        { title: 'Expiry Tracking', desc: 'Identify the expiry date and set the renewal calendar.' },
        { title: 'Form TM-R Filing', desc: 'File the renewal application — pre- or post-expiry with surcharge.' },
        { title: 'Renewal Certificate', desc: 'Receive the certificate; protection extended for the next 10 years.' },
      ],
      statutoryRefs: [
        { name: 'Trade Marks Act, 1999 — Section 25', desc: 'Duration, renewal and the consequences of non-renewal.' },
        { name: 'Trade Marks Rules, 2017', desc: 'Form TM-R, renewal fees and surcharge.' },
      ],
      pitfalls: [
        { title: 'Forgetting Expiry', desc: 'Without tracking, marks lapse and become vulnerable to removal and third-party filings.' },
        { title: 'Relying on Restoration', desc: 'Restoration is a costlier fallback, not a substitute for timely renewal.' },
        { title: 'Outdated Owner Details', desc: 'Stale address-for-service can mean missing the Registry’s renewal notice.' },
      ],
      faqs: [
        { q: 'When can I renew my trademark?', a: 'Within six months before expiry, or up to six months after expiry with a late-fee surcharge.' },
        { q: 'What if I miss the 6-month grace period?', a: 'The mark is liable to be removed from the register; it can then be restored within one year of removal.' },
        { q: 'Is renewal limited in number?', a: 'No — a trademark can be renewed indefinitely in successive 10-year blocks.' },
      ],
      relatedServices: [
        { name: 'Trademark Restoration', href: '/services/lawyer-services/ipr-services/trademark/restoration' },
        { name: 'Trademark Assignment', href: '/services/lawyer-services/ipr-services/trademark/assignment' },
        { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
      ],
    },
    'restoration': {
      title: 'Trademark Restoration',
      description:
        'Restore a removed trademark to the Register within one year of removal under Form TM-13.',
      keywords: ['trademark restoration', 'Form TM-13', 'restore removed trademark', 'reinstate trademark', 'trademark removed from register'],
      overview:
        'If renewal is not filed within the six-month grace period, the trademark is removed from the Register and the brand loses its statutory shield. The law offers a window: within one year of removal, the mark can be restored and renewed by filing Form TM-13 with the prescribed fees and an explanation for the delay.\n\nWe assess eligibility, draft a persuasive restoration application addressing the cause of delay, coordinate any advertisement the Registrar directs, and pursue the restoration order so your mark returns to the Register — subject to third-party rights acquired in the interim.',
      whyChooseUs: [
        { title: 'Eligibility First', desc: 'We confirm the one-year window and the best route before filing.' },
        { title: 'Persuasive Cause', desc: 'A reasoned delay explanation that supports restoration.' },
        { title: 'Registry Coordination', desc: 'Advertisement and procedural follow-through handled end-to-end.' },
        { title: 'Risk Disclosure', desc: 'Clear advice on intervening third-party rights before you invest.' },
      ],
      keyPoints: [
        'Restoration application with a cause-of-delay statement',
        'Filing Form TM-13 with prescribed fees',
        'Coordination with the Registrar for any advertisement',
        'Restoration order procurement',
        'Assessment of intervening third-party rights',
      ],
      process: [
        { title: 'Eligibility Check', desc: 'Confirm that less than one year has lapsed since removal.' },
        { title: 'Form TM-13 Filing', desc: 'File the restoration application with reasons and renewal fees.' },
        { title: 'Order', desc: 'The Registrar passes the restoration order and the mark is reinstated.' },
      ],
      statutoryRefs: [
        { name: 'Trade Marks Act, 1999 — Section 25(4)', desc: 'Restoration and renewal of a removed trademark.' },
        { name: 'Trade Marks Rules, 2017', desc: 'Form TM-13, fees and procedure for restoration.' },
      ],
      pitfalls: [
        { title: 'Crossing One Year', desc: 'After one year from removal, restoration is unavailable and fresh filing is the only route.' },
        { title: 'Ignoring Intervening Rights', desc: 'Marks filed during removal can complicate or limit restored rights.' },
        { title: 'Thin Cause Statement', desc: 'An unexplained delay weakens the restoration request.' },
      ],
      faqs: [
        { q: 'Until when can I restore?', a: 'Within one year from the date of removal. After one year, fresh registration is the only option.' },
        { q: 'Will rights be retroactive?', a: 'Restoration reinstates the mark as if uninterrupted, subject to third-party rights acquired during removal.' },
        { q: 'Is an advertisement required?', a: 'The Registrar may direct advertisement of the restoration; we handle it where required.' },
      ],
      relatedServices: [
        { name: 'Trademark Renewal', href: '/services/lawyer-services/ipr-services/trademark/renewal' },
        { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
        { name: 'Trademark Assignment', href: '/services/lawyer-services/ipr-services/trademark/assignment' },
      ],
    },
    'assignment': {
      title: 'Trademark Assignment',
      description:
        'Transfer ownership of a registered or pending trademark with or without goodwill through a legally enforceable assignment.',
      keywords: ['trademark assignment', 'transfer trademark ownership', 'Form TM-P', 'assignment with goodwill', 'trademark deed', 'recordal of assignment'],
      overview:
        'A trademark assignment transfers proprietary rights from the assignor to the assignee — a routine step in acquisitions, brand sales, restructurings and licensing arrangements. It can be made with goodwill (the business behind the mark moves too) or without goodwill (the mark moves but not the business), each with different drafting and, for assignments without goodwill, advertisement requirements.\n\nWe draft watertight assignment deeds, advise on stamp duty and execution, and — critically — record the change of ownership with the Registrar via Form TM-P. Unrecorded assignments are not admissible as evidence and do not bind third parties, so recordal protects the assignee’s rights and chain of title.',
      whyChooseUs: [
        { title: 'Deed Precision', desc: 'Assignment deeds tailored to with- or without-goodwill transfers and to the deal.' },
        { title: 'Chain of Title', desc: 'Recordal via Form TM-P so ownership is enforceable against the world.' },
        { title: 'Stamp & Execution', desc: 'Correct stamping and execution to avoid future enforceability disputes.' },
        { title: 'Compliance Steps', desc: 'Advertisement handling for assignments without goodwill, where required.' },
      ],
      keyPoints: [
        'Drafting assignment deed (with or without goodwill)',
        'Stamp duty advisory and execution',
        'Recording the assignment via Form TM-P',
        'Advertisement for assignments without goodwill',
        'Updating ownership on the Register',
        'Assignment of pending applications',
      ],
      process: [
        { title: 'Deed Drafting', desc: 'Tailored deed defining marks, classes and consideration.' },
        { title: 'Execution & Stamping', desc: 'Execute on appropriate stamp paper and notarise.' },
        { title: 'Form TM-P Filing', desc: 'Apply to the Registrar for recordal of the change in proprietorship.' },
        { title: 'Public Notice', desc: 'For assignments without goodwill, publish as directed.' },
      ],
      statutoryRefs: [
        { name: 'Trade Marks Act, 1999 — Sections 37–45', desc: 'Assignability, assignment with / without goodwill and registration of assignments.' },
        { name: 'Section 45', desc: 'Recordal of assignments and transmissions on the Register.' },
        { name: 'Trade Marks Rules, 2017', desc: 'Form TM-P and procedure for recordal.' },
      ],
      pitfalls: [
        { title: 'No Recordal', desc: 'Unrecorded assignments don’t bind third parties and aren’t admissible as evidence.' },
        { title: 'Goodwill Ambiguity', desc: 'Failing to specify with / without goodwill creates valuation and scope disputes.' },
        { title: 'Under-Stamping', desc: 'Improper stamping can render the deed unenforceable.' },
      ],
      faqs: [
        { q: 'Can pending applications be assigned?', a: 'Yes — both registered and pending trademarks can be assigned.' },
        { q: 'Is registration of the assignment mandatory?', a: 'It is not strictly mandatory, but unrecorded assignments are not admissible as evidence and bind only the parties.' },
        { q: 'What is assignment without goodwill?', a: 'A transfer of the mark without the underlying business; it requires advertisement as directed by the Registrar.' },
      ],
      relatedServices: [
        { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
        { name: 'Trademark Renewal', href: '/services/lawyer-services/ipr-services/trademark/renewal' },
        { name: 'Trademark Infringement', href: '/services/lawyer-services/ipr-services/trademark/infringement' },
      ],
    },
    'infringement': {
      title: 'Trademark Infringement',
      description:
        'Civil and criminal action against unauthorized use of your registered mark — injunctions, damages and seizure of infringing goods.',
      keywords: ['trademark infringement', 'passing off', 'cease and desist', 'trademark injunction', 'Section 29 Trade Marks Act', 'John Doe order'],
      overview:
        'Using an identical or deceptively similar mark on identical or similar goods or services, without authorisation, is infringement under Section 29 of the Trade Marks Act, 1999. The Act provides powerful civil remedies — permanent and interim injunctions, damages or account of profits, and delivery-up of infringing goods — and criminal penalties of imprisonment up to three years and fine for applying false marks.\n\nWe build enforcement from evidence to decree: documenting the infringing use, issuing a cease-and-desist that often settles the matter, and, where it doesn’t, suing for injunction and damages with applications for ex-parte ad-interim and John Doe / Anton Piller relief. For unregistered marks with goodwill, we pursue the common-law remedy of passing off.',
      whyChooseUs: [
        { title: 'Evidence-Led', desc: 'Admissible proof of infringing use built before the first notice goes out.' },
        { title: 'Fast Interim Relief', desc: 'Ex-parte ad-interim, John Doe and Anton Piller applications to stop harm quickly.' },
        { title: 'Civil + Criminal', desc: 'Parallel civil suits and criminal complaints where strategy demands.' },
        { title: 'Passing-Off Reach', desc: 'Protection for unregistered marks through goodwill-based passing-off actions.' },
      ],
      keyPoints: [
        'Cease & desist notice to the infringer',
        'Civil suit for permanent injunction',
        'Interim / Anton Piller / John Doe orders',
        'Damages and account-of-profits computation',
        'Criminal complaint and raids for false marks',
        'Passing-off action for unregistered marks',
      ],
      process: [
        { title: 'Evidence Collection', desc: 'Document infringing use via purchases, screenshots and market survey.' },
        { title: 'Cease & Desist', desc: 'Issue a legal notice demanding stoppage and damages — many cases settle here.' },
        { title: 'Civil Suit', desc: 'File before the District / High Court seeking injunction and damages.' },
        { title: 'Interim Relief', desc: 'Apply for ex-parte ad-interim injunction and seizure.' },
        { title: 'Trial & Decree', desc: 'Lead evidence, cross-examine and obtain the final decree.' },
      ],
      statutoryRefs: [
        { name: 'Trade Marks Act, 1999 — Section 29', desc: 'What constitutes infringement of a registered trademark.' },
        { name: 'Sections 134 & 135', desc: 'Jurisdiction for suits and the reliefs available (injunction, damages, delivery-up).' },
        { name: 'Sections 103 & 104', desc: 'Criminal penalties for applying false marks and selling infringing goods.' },
      ],
      pitfalls: [
        { title: 'Delay', desc: 'Sitting on infringement weakens the urgency case for an interim injunction.' },
        { title: 'Weak Evidence', desc: 'Without trap purchases and dated proof, interim relief is harder to obtain.' },
        { title: 'Wrong Forum', desc: 'Filing in the wrong court wastes time and limitation.' },
      ],
      faqs: [
        { q: 'Can I sue without registration?', a: 'A registered owner sues for infringement; an unregistered user can sue for passing off based on goodwill.' },
        { q: 'Is criminal action possible?', a: 'Yes — Sections 103 / 104 prescribe up to three years’ imprisonment and fine for false marks and infringing labels.' },
        { q: 'How fast can I stop the infringer?', a: 'Courts can grant ex-parte ad-interim injunctions within days in a strong, well-evidenced case.' },
        { q: 'What is a John Doe order?', a: 'An injunction against unknown / unnamed infringers, useful against widespread or anonymous online infringement.' },
      ],
      relatedServices: [
        { name: 'Trademark Investigation', href: '/services/lawyer-services/ipr-services/trademark/investigation' },
        { name: 'Trademark Opposition', href: '/services/lawyer-services/ipr-services/trademark/opposition' },
        { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
      ],
    },
    'investigation': {
      title: 'Trademark Investigation',
      description:
        'Confidential market and online investigation to gather admissible evidence of counterfeiting, infringement or unauthorized use.',
      keywords: ['trademark investigation', 'counterfeit investigation', 'trap purchase evidence', 'brand protection', 'anti-counterfeiting', 'market survey infringement'],
      overview:
        'Enforcement is only as strong as its evidence. Before a notice or suit, a discreet investigation establishes who is infringing, where, at what scale, and through which supply chain — turning suspicion into court-ready proof. This is the foundation of a successful injunction, criminal raid or Customs recordal.\n\nOur investigators conduct market visits and trap purchases, monitor e-commerce and social platforms, and map manufacturers, distributors and retailers — preserving evidence with proper protocol and chain of custody, and delivering an investigation report ready for annexure in proceedings.',
      whyChooseUs: [
        { title: 'Court-Ready Proof', desc: 'Trap purchases and captures preserved with admissible chain of custody.' },
        { title: 'Online + Offline', desc: 'Marketplace, social-media and physical-market surveillance combined.' },
        { title: 'Supply-Chain Mapping', desc: 'Identification of manufacturer, distributor and retailer for full-chain action.' },
        { title: 'Action Roadmap', desc: 'A strategy memo on civil suit, criminal complaint or Customs recordal.' },
      ],
      keyPoints: [
        'Market survey and trap purchases',
        'Online marketplace and social-media monitoring',
        'Supply-chain identification (maker / distributor / retailer)',
        'Evidence preserved in legally admissible form',
        'Investigation report ready for court annexure',
        'Customs recordal recommendation for border enforcement',
      ],
      process: [
        { title: 'Briefing', desc: 'Define target marks, geography, platforms and suspected entities.' },
        { title: 'Field & Online Investigation', desc: 'Trap purchases, screenshots and listing captures.' },
        { title: 'Reporting', desc: 'Comprehensive report with photographs, invoices and chain of custody.' },
        { title: 'Action Recommendation', desc: 'Strategy memo on civil, criminal or Customs action.' },
      ],
      statutoryRefs: [
        { name: 'Trade Marks Act, 1999 — Section 29', desc: 'Infringement that the investigation aims to evidence.' },
        { name: 'Sections 103 & 104', desc: 'Criminal offences supporting raid and complaint strategy.' },
        { name: 'IPR (Imported Goods) Enforcement Rules, 2007', desc: 'Customs recordal to intercept counterfeit imports.' },
      ],
      pitfalls: [
        { title: 'Broken Chain of Custody', desc: 'Poorly handled evidence can be excluded at trial.' },
        { title: 'Tipping Off', desc: 'Indiscreet inquiries let infringers destroy stock and records.' },
        { title: 'Online-Only Blind Spots', desc: 'Ignoring physical supply chains leaves the source untouched.' },
      ],
      faqs: [
        { q: 'Are trap purchases admissible?', a: 'Yes — with proper protocol and chain of custody, trap-purchase evidence is routinely accepted by Indian courts.' },
        { q: 'Can investigation be done online only?', a: 'For purely digital infringement (e-commerce, social media), online investigation often suffices.' },
        { q: 'How is the evidence used?', a: 'It supports cease-and-desist notices, injunction applications, criminal complaints and Customs recordals.' },
      ],
      relatedServices: [
        { name: 'Trademark Infringement', href: '/services/lawyer-services/ipr-services/trademark/infringement' },
        { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
        { name: 'Trademark Opposition', href: '/services/lawyer-services/ipr-services/trademark/opposition' },
      ],
    },
    'logo': {
      title: 'Trademark Logo',
      description:
        'Specialized trademark registration for graphical logos, device marks and composite marks combining text and design.',
      keywords: ['logo trademark registration', 'device mark', 'composite mark', 'logo registration India', 'colour claim trademark', 'register logo'],
      overview:
        'A logo trademark protects the visual identity of your brand — its design elements, stylisation and (optionally) colours. Filed as a device or composite mark, it complements a wordmark and is often the most recognisable, and most copied, part of a brand. Getting the filing strategy right materially affects the breadth of protection.\n\nWe run image-based clearance, advise on the crucial colour-claim decision (black-and-white for the broadest scope, or specific colours where colour is integral to identity), prepare Registry-grade artwork, and prosecute the device-mark application to registration — frequently alongside a separate wordmark and a copyright filing for layered protection.',
      whyChooseUs: [
        { title: 'Image-Based Clearance', desc: 'Device-mark similarity searches that text searches miss.' },
        { title: 'Colour Strategy', desc: 'Advice on black-and-white vs colour claims to maximise scope.' },
        { title: 'Registry-Grade Artwork', desc: 'High-resolution representation that meets filing standards.' },
        { title: 'Layered Protection', desc: 'Coordinated wordmark, device mark and copyright filings.' },
      ],
      keyPoints: [
        'Logo / device similarity search',
        'Colour-claim strategy (with / without colour limitation)',
        'High-resolution image preparation per Registry standards',
        'Composite-mark filing strategy (logo + word)',
        'Registration certificate and ® usage rights',
        'Coordination with logo copyright registration',
      ],
      process: [
        { title: 'Design Clearance', desc: 'Image-based search to identify pre-existing similar logos.' },
        { title: 'Colour Strategy', desc: 'Decide whether to claim specific colours or file in black-and-white.' },
        { title: 'Filing', desc: 'File the device-mark application with high-quality image and specification.' },
        { title: 'Prosecution & Registration', desc: 'Examination, hearing (if needed), publication and registration.' },
      ],
      documents: [
        'High-resolution logo file (JPG / PNG)',
        'Applicant ID and business proof',
        'Power of Attorney (Form TM-48)',
        'Colour claim details (if any)',
        'User affidavit (if claiming prior use)',
      ],
      statutoryRefs: [
        { name: 'Trade Marks Act, 1999 — Section 2(zb)', desc: 'Definition of a trademark, including device and composite marks.' },
        { name: 'Section 18', desc: 'Application and graphical representation requirements.' },
        { name: 'Trade Marks Rules, 2017', desc: 'Image standards, colour claims and filing procedure.' },
      ],
      pitfalls: [
        { title: 'Colour Over-Claiming', desc: 'Claiming specific colours can narrow protection unnecessarily.' },
        { title: 'Low-Resolution Artwork', desc: 'Poor images cause objections and weak representation on the register.' },
        { title: 'Logo Without Wordmark', desc: 'Relying only on the device leaves the brand name unprotected.' },
      ],
      faqs: [
        { q: 'Should I register colour or black-and-white?', a: 'Black-and-white covers all colour combinations and gives broader protection; colour-specific registration suits brands where colour is integral.' },
        { q: 'Can I register logo and word separately?', a: 'Yes — registering wordmark and device mark separately maximises protection and enforceability.' },
        { q: 'Should I also copyright my logo?', a: 'Yes — copyright protects the artistic design, complementing the trademark’s source-identifier function.' },
      ],
      relatedServices: [
        { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
        { name: 'Logo Copyright', href: '/services/lawyer-services/ipr-services/copyright/logo' },
        { name: 'Trademark Infringement', href: '/services/lawyer-services/ipr-services/trademark/infringement' },
      ],
    },
  },

  copyright: {
    'registration': {
      title: 'Copyright Registration',
      description:
        'Statutory registration of original literary, artistic, musical, dramatic, cinematographic and software works under the Copyright Act, 1957.',
      keywords: ['copyright registration India', 'Form XIV copyright', 'register copyright', 'Copyright Act 1957', 'copyright certificate', 'protect creative work'],
      overview:
        'Copyright arises automatically the moment an original work is created — but registration with the Copyright Office turns an invisible right into provable, enforceable proof of authorship. The certificate is prima facie evidence in court and is invaluable for licensing, assignment, takedowns and international protection.\n\nWe register works across all categories — literary, dramatic, musical, artistic, cinematograph films, sound recordings and software — by filing Form XIV with the statement of particulars, navigating the 30-day mandatory wait and any objections, and securing the certificate and entry in the Register of Copyrights. For most works, protection lasts the author’s lifetime plus 60 years.',
      whyChooseUs: [
        { title: 'Right Category', desc: 'Correct classification of the work — the single biggest driver of smooth registration.' },
        { title: 'NOC Management', desc: 'Joint-author and publisher NOCs procured to pre-empt objections.' },
        { title: 'Objection Handling', desc: 'Examiner queries and discrepancy letters answered with evidence.' },
        { title: 'Enforcement-Ready', desc: 'A certificate structured to support future takedowns and infringement suits.' },
      ],
      keyPoints: [
        'Filing Form XIV with statement of particulars and the work',
        'Diary number issuance and 30-day waiting period',
        'Response to objections and examiner queries',
        'Issuance of the registration certificate',
        'Entry in the Register of Copyrights',
        'Lifetime + 60 years protection for most works',
      ],
      process: [
        { title: 'Work Classification', desc: 'Identify the correct category — literary, artistic, musical, software, cinematograph or sound recording.' },
        { title: 'Filing', desc: 'Submit Form XIV with copies of the work, NOCs where required and the statement of particulars.' },
        { title: 'Examination', desc: 'After 30 days, the examiner reviews and may raise objections.' },
        { title: 'Registration', desc: 'On clearance, the certificate issues and details are entered in the Register.' },
      ],
      documents: [
        'Two copies of the work',
        'Author / owner ID and address proof',
        'NOC from joint authors (if any)',
        'NOC from publisher (if published)',
        'Power of Attorney',
      ],
      statutoryRefs: [
        { name: 'Copyright Act, 1957 — Section 13', desc: 'Works in which copyright subsists.' },
        { name: 'Sections 44 & 45', desc: 'Register of Copyrights and the application for registration.' },
        { name: 'Section 22', desc: 'Term of copyright — lifetime of the author plus 60 years for most works.' },
        { name: 'Copyright Rules, 2013', desc: 'Form XIV, procedure and the 30-day waiting period.' },
      ],
      pitfalls: [
        { title: 'Wrong Category', desc: 'Mis-classifying the work (e.g., dramatic vs literary) causes objections and licensing confusion.' },
        { title: 'Missing NOCs', desc: 'Absent joint-author / publisher NOCs are a leading cause of discrepancy letters.' },
        { title: 'Ownership Gaps', desc: 'No written assignment from freelancers / employees muddies first ownership.' },
      ],
      faqs: [
        { q: 'Is registration mandatory?', a: 'No — copyright is automatic on creation. But registration provides strong evidentiary value in infringement actions.' },
        { q: 'How long does copyright last?', a: 'For most works, the author’s lifetime plus 60 years; for films, sound recordings and corporate works, 60 years from publication.' },
        { q: 'How long does registration take?', a: 'Typically a few months if unobjected, including the mandatory 30-day waiting period.' },
        { q: 'Can software be registered?', a: 'Yes — computer programmes are registrable as literary works, with source-code extracts filed per the rules.' },
      ],
      relatedServices: [
        { name: 'Copyright Objection', href: '/services/lawyer-services/ipr-services/copyright/objection' },
        { name: 'Logo Copyright', href: '/services/lawyer-services/ipr-services/copyright/logo' },
        { name: 'Copyright a Book', href: '/services/lawyer-services/ipr-services/copyright/book' },
      ],
    },
    'objection': {
      title: 'Copyright Objection',
      description:
        'Respond to discrepancy / objection notices issued by the Copyright Office during examination of your application.',
      keywords: ['copyright objection', 'copyright discrepancy letter', 'copyright examination reply', 'copyright NOC', 'third party copyright objection'],
      overview:
        'After the mandatory 30-day wait, the Copyright Office examines an application and may issue a discrepancy or objection letter — questioning authorship or originality, requiring NOCs, or flagging a third-party claim. A prompt, well-documented reply is essential; ignoring it can lead to closure of the application.\n\nWe dissect each objection, assemble the proof the Office needs — dated drafts and files, joint-author consents, publisher NOCs and originality evidence — file a reasoned response, and represent you at any hearing before the Registrar, including where a third party has objected.',
      whyChooseUs: [
        { title: 'Objection Triage', desc: 'Each ground analysed for exactly what document or argument resolves it.' },
        { title: 'Proof of Originality', desc: 'Dated drafts, files and authorship evidence marshalled effectively.' },
        { title: 'NOC Sourcing', desc: 'Joint-author and publisher consents obtained to clear the file.' },
        { title: 'Hearing Defence', desc: 'Representation before the Registrar, including against third-party objectors.' },
      ],
      keyPoints: [
        'Detailed objection analysis',
        'Reasoned reply with supporting evidence',
        'NOC sourcing from co-authors / publishers',
        'Rebuttal of third-party claims with proof of prior creation',
        'Hearing representation if required',
        'Amendment of the application where strategic',
      ],
      process: [
        { title: 'Notice Review', desc: 'Identify each ground and the documentary support required.' },
        { title: 'Evidence & NOC Compilation', desc: 'Gather originality proof, joint-author consents and dated drafts / files.' },
        { title: 'Reply Filing', desc: 'Submit the response with supporting documents.' },
        { title: 'Hearing', desc: 'Appear before the Registrar if a hearing is fixed.' },
      ],
      statutoryRefs: [
        { name: 'Copyright Act, 1957 — Section 45', desc: 'Application for registration and inquiry by the Registrar.' },
        { name: 'Section 13', desc: 'Subsistence and originality requirements challenged at objection.' },
        { name: 'Copyright Rules, 2013', desc: 'Examination, discrepancy and hearing procedure.' },
      ],
      pitfalls: [
        { title: 'Ignoring the Letter', desc: 'No reply within the stated time can lead to the application being closed.' },
        { title: 'No Dated Proof', desc: 'Originality is hard to defend without dated drafts, files or publication records.' },
        { title: 'Unaddressed Third-Party Claim', desc: 'A competing claim left unrebutted can defeat registration.' },
      ],
      faqs: [
        { q: 'What is the time limit to respond?', a: 'Typically 30 days from the discrepancy letter — confirm the exact period in the specific notice.' },
        { q: 'What if a third party objects?', a: 'The objection is heard alongside; you must rebut with documentary proof of authorship and prior creation.' },
        { q: 'Can the application be amended?', a: 'Yes — where strategic, particulars can be amended to resolve the objection.' },
      ],
      relatedServices: [
        { name: 'Copyright Registration', href: '/services/lawyer-services/ipr-services/copyright/registration' },
        { name: 'Artistic Work / Painting Copyright', href: '/services/lawyer-services/ipr-services/copyright/artistic-work' },
        { name: 'Literature / Dramatic Copyright', href: '/services/lawyer-services/ipr-services/copyright/literature-dramatic' },
      ],
    },
    'songs': {
      title: 'Songs Copyright',
      description:
        'Register lyrics and musical composition as a "musical work" — the composer’s and lyricist’s underlying creative right, separate from any recording.',
      keywords: ['song copyright', 'musical work registration', 'lyrics copyright', 'composition copyright', 'IPRS royalties', 'register a song'],
      overview:
        'Every song carries two distinct copyrights: the underlying musical work (the composition and lyrics) and the sound recording (the fixed audio). This service protects the first — the composer’s and lyricist’s creative right — which exists independently of any particular recorded version and is the basis for royalties on covers, performances and sync use.\n\nWe document authorship and any assignment between lyricist, composer and joint authors, register the musical work via Form XIV, and prepare you for royalty collection through copyright societies such as IPRS — so your song earns and is enforceable across every version and platform.',
      whyChooseUs: [
        { title: 'Two-Copyright Clarity', desc: 'Clear separation of musical work and sound recording so nothing is left unprotected.' },
        { title: 'Authorship Documentation', desc: 'Lyricist / composer / joint-author roles and NOCs handled cleanly.' },
        { title: 'Royalty Readiness', desc: 'Guidance on IPRS / PPL membership to monetise the work.' },
        { title: 'Sync-Licence Ready', desc: 'Registration structured for film and advertisement licensing.' },
      ],
      keyPoints: [
        'Lyrics + composition registration as a musical work',
        'Joint-author registration for composer and lyricist',
        'NOCs and assignments between authors',
        'Royalty collection through IPRS / PPL',
        'Sync-licensing readiness for film / ad use',
        'Enforcement basis against unauthorised covers',
      ],
      process: [
        { title: 'Authorship Documentation', desc: 'NOC and assignment between lyricist, composer and joint authors.' },
        { title: 'Filing', desc: 'Form XIV with the lyrics manuscript and musical notation / MIDI.' },
        { title: 'Registration', desc: 'Certificate issued; copyright-society membership recommended for royalties.' },
      ],
      statutoryRefs: [
        { name: 'Copyright Act, 1957 — Section 2(p)', desc: 'Definition of a musical work.' },
        { name: 'Section 13', desc: 'Subsistence of copyright in musical and literary works.' },
        { name: 'Sections 18 & 19', desc: 'Assignment of copyright and mode of assignment.' },
        { name: 'Section 33', desc: 'Copyright societies (e.g., IPRS) for royalty administration.' },
      ],
      pitfalls: [
        { title: 'Confusing the Two Rights', desc: 'Registering only the recording leaves the composition unprotected, and vice versa.' },
        { title: 'No Author NOCs', desc: 'Missing consents between lyricist and composer stall registration.' },
        { title: 'No Society Membership', desc: 'Without IPRS / PPL, performance and broadcast royalties go uncollected.' },
      ],
      faqs: [
        { q: 'What if I only wrote the lyrics?', a: 'Lyrics alone are a literary work; the composition is separately authored by the composer. Both can be co-registered.' },
        { q: 'Do I need to register before releasing?', a: 'Recommended — registration before release strengthens enforcement against unauthorised covers.' },
        { q: 'How do I earn royalties?', a: 'Through membership of copyright societies such as IPRS (musical / literary works), which license and collect on your behalf.' },
      ],
      relatedServices: [
        { name: 'Songs Recording Copyright', href: '/services/lawyer-services/ipr-services/copyright/songs-recording' },
        { name: 'Copyright Registration', href: '/services/lawyer-services/ipr-services/copyright/registration' },
        { name: 'Cinematography Copyright', href: '/services/lawyer-services/ipr-services/copyright/cinematography' },
      ],
    },
    'songs-recording': {
      title: 'Songs Recording Copyright',
      description:
        'Register the sound recording of a song — the producer’s right in the fixed audio embodiment, distinct from the underlying composition.',
      keywords: ['sound recording copyright', 'song recording registration', 'producer copyright', 'PPL royalties', 'master rights', 'register sound recording'],
      overview:
        'The sound recording copyright protects the specific fixed audio — the "master" — and belongs to the producer who finances and arranges the recording. It is separate from the musical work: the same composition can be recorded by different artists, each generating its own sound-recording right.\n\nWe procure the necessary NOCs from the composer, lyricist and performers, register the sound recording under Form XIV in the producer’s name, and set you up for mechanical and performance licensing and royalty collection through PPL / Recorded Music Performance Ltd. — protecting the master against unauthorised reproduction, communication and distribution.',
      whyChooseUs: [
        { title: 'Master-Rights Focus', desc: 'Clean registration of the sound recording in the producer’s name.' },
        { title: 'NOC Chain', desc: 'Consents from composer, lyricist and performers assembled correctly.' },
        { title: 'Royalty Setup', desc: 'PPL / RMPL coordination for performance and broadcast royalties.' },
        { title: 'Licensing Ready', desc: 'Structured for mechanical, sync and streaming licences.' },
      ],
      keyPoints: [
        'Sound recording registration in the producer’s name',
        'NOCs from underlying authors and performers',
        'Mechanical and performance licensing readiness',
        'PPL / RMPL coordination for royalty collection',
        'Protection against unauthorised reproduction and distribution',
        'Distinction from the underlying musical work',
      ],
      process: [
        { title: 'NOC Procurement', desc: 'Obtain NOCs from composer, lyricist, performers and prior assignors.' },
        { title: 'Filing', desc: 'Form XIV under the "sound recording" category with the audio file.' },
        { title: 'Registration', desc: 'Certificate issued; PPL / RMPL membership for royalty collection.' },
      ],
      statutoryRefs: [
        { name: 'Copyright Act, 1957 — Section 2(xx)', desc: 'Definition of a sound recording.' },
        { name: 'Section 13', desc: 'Subsistence of copyright in sound recordings.' },
        { name: 'Section 38 & 38A', desc: 'Performers’ rights and exclusive rights in performances.' },
        { name: 'Section 33', desc: 'Copyright societies (e.g., PPL / RMPL) for sound-recording royalties.' },
      ],
      pitfalls: [
        { title: 'Incomplete NOC Chain', desc: 'Missing performer / author consents undermine the producer’s clean title.' },
        { title: 'Ignoring the Composition', desc: 'The master right alone doesn’t cover the underlying song.' },
        { title: 'No Royalty Membership', desc: 'Broadcast and venue royalties are lost without PPL / RMPL.' },
      ],
      faqs: [
        { q: 'Is sound-recording copyright the same as the composition?', a: 'No — the recording protects only the specific fixed audio; different artists can record the same composition with their own sound-recording rights.' },
        { q: 'Who owns the sound recording?', a: 'The producer who finances and arranges the recording is the first owner, subject to any agreement.' },
        { q: 'How are recording royalties collected?', a: 'Through societies such as PPL / Recorded Music Performance Ltd. for public performance and broadcast.' },
      ],
      relatedServices: [
        { name: 'Songs Copyright', href: '/services/lawyer-services/ipr-services/copyright/songs' },
        { name: 'Cinematography Copyright', href: '/services/lawyer-services/ipr-services/copyright/cinematography' },
        { name: 'Copyright Registration', href: '/services/lawyer-services/ipr-services/copyright/registration' },
      ],
    },
    'artistic-work': {
      title: 'Artistic Work / Painting Copyright',
      description:
        'Register paintings, drawings, sculptures, photographs, architectural drawings and works of artistic craftsmanship as artistic works.',
      keywords: ['artistic work copyright', 'painting copyright', 'photograph copyright', 'sculpture copyright', 'artwork registration', 'moral rights'],
      overview:
        'The Copyright Act protects every original artistic work — paintings, drawings, sculptures, photographs, architectural drawings and works of artistic craftsmanship — irrespective of artistic quality. For artists, galleries and creators, registration provides legally admissible proof of authorship and date of creation, essential for art commerce, exhibitions, licensing and infringement claims.\n\nWe document the work (image, medium, dimensions and date), register it under Form XIV in the artistic-work category, and ensure both economic and moral rights vest correctly — including the author’s inalienable rights of attribution and integrity, which survive even after the economic rights are assigned.',
      whyChooseUs: [
        { title: 'Provenance Proof', desc: 'Dated, admissible evidence of authorship for the art market and courts.' },
        { title: 'Moral-Rights Care', desc: 'Attribution and integrity rights preserved alongside economic rights.' },
        { title: 'Medium-Agnostic', desc: 'Paintings, sculptures, photographs and architectural works all covered.' },
        { title: 'Commerce-Ready', desc: 'Registration structured for licensing, sales and exhibition.' },
      ],
      keyPoints: [
        'Registration for paintings, sculptures and photographs',
        'High-resolution work submission',
        'Dating and authorship establishment',
        'Economic and moral rights vesting',
        'Licensing and assignment readiness',
        'Basis for infringement and plagiarism claims',
      ],
      process: [
        { title: 'Work Documentation', desc: 'High-resolution image, dimensions, medium and date of creation.' },
        { title: 'Filing', desc: 'Form XIV under the artistic-work category with copies of the image.' },
        { title: 'Registration', desc: 'Certificate issued; moral rights protected even after assignment.' },
      ],
      statutoryRefs: [
        { name: 'Copyright Act, 1957 — Section 2(c)', desc: 'Definition of an artistic work.' },
        { name: 'Section 13', desc: 'Subsistence of copyright in artistic works.' },
        { name: 'Section 57', desc: 'Author’s special (moral) rights of attribution and integrity.' },
        { name: 'Copyright Rules, 2013', desc: 'Form XIV and filing procedure for artistic works.' },
      ],
      pitfalls: [
        { title: 'No Date Proof', desc: 'Without an established date of creation, authorship disputes are hard to win.' },
        { title: 'Assuming Moral Rights Transfer', desc: 'Moral rights remain with the author and cannot be assigned away.' },
        { title: 'Commissioned-Work Confusion', desc: 'Ownership of commissioned art needs a clear written agreement.' },
      ],
      faqs: [
        { q: 'Can I register a photograph?', a: 'Yes — photographs are registrable artistic works under Section 2(c).' },
        { q: 'Are moral rights transferable?', a: 'No — the moral rights of integrity and attribution remain with the author and are not assignable.' },
        { q: 'Does artistic quality matter?', a: 'No — copyright protects original artistic works irrespective of their artistic merit.' },
      ],
      relatedServices: [
        { name: 'Logo Copyright', href: '/services/lawyer-services/ipr-services/copyright/logo' },
        { name: 'Copyright Registration', href: '/services/lawyer-services/ipr-services/copyright/registration' },
        { name: 'E-Symbol Copyright', href: '/services/lawyer-services/ipr-services/copyright/e-symbol' },
      ],
    },
    'logo': {
      title: 'Logo Copyright',
      description:
        'Copyright a logo as an "artistic work" — complementary protection alongside trademark registration for stronger enforcement.',
      keywords: ['logo copyright', 'copyright a logo', 'logo artistic work', 'logo protection India', 'dual logo protection', 'logo design ownership'],
      overview:
        'A logo can enjoy two layers of protection at once: copyright in the artistic design (the drawing and its expression) and trademark in its source-identifier function. Copyright registration is the gold-standard complement to a logo trademark — it broadens enforcement to copying that falls outside trademark’s goods/services scope, and clarifies who owns the design.\n\nWe establish authorship (in-house, employee or contractor, with assignment where needed), register the logo as an artistic work under Form XIV, and coordinate it with your trademark filing so the brand’s most recognisable asset is protected from every angle.',
      whyChooseUs: [
        { title: 'Dual Protection', desc: 'Copyright and trademark coordinated for the broadest defensive moat.' },
        { title: 'Ownership Lock-In', desc: 'Freelancer / employee assignments secured so you truly own the design.' },
        { title: 'Broader Enforcement', desc: 'A copyright basis for copying claims beyond trademark scope.' },
        { title: 'Litigation-Ready', desc: 'A registered artistic work that stands up as evidence.' },
      ],
      keyPoints: [
        'Artistic-work registration for the logo design',
        'Author / employer ownership clarity',
        'Assignment from contractors / freelancers',
        'Coexistence with trademark registration',
        'Stronger basis for copying suits beyond trademark scope',
        'Certificate ready for enforcement',
      ],
      process: [
        { title: 'Authorship Establishment', desc: 'Determine if the logo was made in-house, by an employee or contractor; obtain assignment if needed.' },
        { title: 'Filing', desc: 'Form XIV — artistic work with a high-quality logo file.' },
        { title: 'Registration', desc: 'Certificate issued; combine with the trademark for layered protection.' },
      ],
      statutoryRefs: [
        { name: 'Copyright Act, 1957 — Section 2(c)', desc: 'A logo design as an artistic work.' },
        { name: 'Section 17', desc: 'First ownership — including works made by employees and on commission.' },
        { name: 'Sections 18 & 19', desc: 'Assignment of copyright and the required written form.' },
      ],
      pitfalls: [
        { title: 'Freelancer Ownership', desc: 'Without a written assignment, the designer — not you — owns the logo copyright.' },
        { title: 'Trademark Only', desc: 'Relying solely on a trademark misses broader copyright-based protection.' },
        { title: 'Undated Design', desc: 'No record of creation date weakens authorship claims.' },
      ],
      faqs: [
        { q: 'Should I register both copyright and trademark?', a: 'Yes — they protect different aspects, and dual protection is the gold standard for logos.' },
        { q: 'Who owns a logo made by a freelancer?', a: 'By default the freelancer (author). You need a written assignment or commissioning clause to claim ownership.' },
        { q: 'Does copyright cover the brand name in the logo?', a: 'Copyright protects the artistic design; the name as a source identifier is protected by trademark.' },
      ],
      relatedServices: [
        { name: 'Trademark Logo', href: '/services/lawyer-services/ipr-services/trademark/logo' },
        { name: 'Artistic Work / Painting Copyright', href: '/services/lawyer-services/ipr-services/copyright/artistic-work' },
        { name: 'Copyright Registration', href: '/services/lawyer-services/ipr-services/copyright/registration' },
      ],
    },
    'cinematography': {
      title: 'Cinematography Copyright',
      description:
        'Register films, web series, short films, advertisements and cinematographic works in the producer’s name.',
      keywords: ['film copyright', 'cinematograph film registration', 'web series copyright', 'producer copyright', 'OTT licensing', 'anti-piracy film'],
      overview:
        'A cinematograph film is a separate copyright work from its underlying screenplay, music and dialogues, and the law makes the producer its author and first owner, with protection for 60 years from publication. For producers and studios, registration provides clear provenance — the backbone of distribution deals, OTT licensing and anti-piracy enforcement.\n\nWe assemble the chain of NOCs from the writer, director, composer and lead performers, register the film under Form XIV in the producer’s name, and structure the rights for theatrical, TV and streaming exploitation as well as rapid content-takedown action against piracy.',
      whyChooseUs: [
        { title: 'NOC Chain Mastery', desc: 'Writer, director, music and performer consents compiled correctly.' },
        { title: 'Producer-Owner Clarity', desc: 'Registration in the producer’s name with clean underlying-rights chain.' },
        { title: 'Licensing Ready', desc: 'Structured for theatrical, TV and OTT distribution agreements.' },
        { title: 'Anti-Piracy Basis', desc: 'A registered work that supports fast takedowns and John Doe orders.' },
      ],
      keyPoints: [
        'Cinematograph-film registration in the producer’s name',
        'NOC chain from director, writer, music and performers',
        'Streaming / theatrical / TV licensing readiness',
        'Anti-piracy enforcement basis',
        '60-year protection from publication',
        'Coordination with underlying musical and literary works',
      ],
      process: [
        { title: 'NOC Chain', desc: 'Compile NOCs from script writer, director, composer and lead performers.' },
        { title: 'Filing', desc: 'Form XIV under "cinematograph film" with the film copy and NOC bundle.' },
        { title: 'Registration', desc: 'Certificate issued; basis for takedowns and distribution agreements.' },
      ],
      statutoryRefs: [
        { name: 'Copyright Act, 1957 — Section 2(f)', desc: 'Definition of a cinematograph film.' },
        { name: 'Section 17', desc: 'Producer as the author and first owner of the film.' },
        { name: 'Section 26', desc: 'Term of copyright in cinematograph films (60 years from publication).' },
        { name: 'Section 51', desc: 'Infringement and the basis for anti-piracy action.' },
      ],
      pitfalls: [
        { title: 'Broken NOC Chain', desc: 'Missing consents from underlying authors threaten clean title and distribution.' },
        { title: 'Ignoring Underlying Works', desc: 'Film registration doesn’t cover the separate music and screenplay rights.' },
        { title: 'Late Registration', desc: 'Registering only after piracy starts slows enforcement.' },
      ],
      faqs: [
        { q: 'How long is film copyright?', a: '60 years from the calendar year following publication of the film.' },
        { q: 'Does the director own the film?', a: 'No — under Indian law, the producer is the author and first owner of a cinematograph film.' },
        { q: 'Do I separately protect the music?', a: 'Yes — the underlying musical work and sound recording are separate copyrights and should be registered too.' },
      ],
      relatedServices: [
        { name: 'Songs Recording Copyright', href: '/services/lawyer-services/ipr-services/copyright/songs-recording' },
        { name: 'Songs Copyright', href: '/services/lawyer-services/ipr-services/copyright/songs' },
        { name: 'Copyright Registration', href: '/services/lawyer-services/ipr-services/copyright/registration' },
      ],
    },
    'book': {
      title: 'Copyright a Book',
      description:
        'Register manuscripts, novels, non-fiction, academic works and ebooks as literary works under the Copyright Act.',
      keywords: ['book copyright', 'manuscript copyright', 'literary work registration', 'ebook copyright', 'copyright a novel', 'author rights'],
      overview:
        'Books, manuscripts and every original piece of written expression qualify as literary works. For authors and publishers, registration is the cleanest way to establish authorship and date of creation — the decisive evidence in plagiarism and unauthorised-publication disputes, and the foundation for translation, adaptation and publishing deals.\n\nWe register manuscripts, novels, non-fiction, academic works and ebooks under Form XIV, clarify the author–publisher ownership split, and advise on translation and adaptation rights — ideally before publication, so authorship priority and dates are locked in cleanly.',
      whyChooseUs: [
        { title: 'Author–Publisher Clarity', desc: 'Ownership and licensing split documented to avoid later disputes.' },
        { title: 'Pre-Publication Lock-In', desc: 'Authorship and dates secured before the work goes public.' },
        { title: 'Rights Advisory', desc: 'Guidance on translation, adaptation and subsidiary rights.' },
        { title: 'Plagiarism Defence', desc: 'A registered work that anchors infringement and plagiarism claims.' },
      ],
      keyPoints: [
        'Literary-work registration for manuscripts and books',
        'Author + publisher rights clarity',
        'Translation and adaptation rights advisory',
        'Ebook and digital-manuscript coverage',
        'Pre- or post-publication filing',
        'Basis for plagiarism and infringement action',
      ],
      process: [
        { title: 'Manuscript Submission', desc: 'Copies of the manuscript or e-book file.' },
        { title: 'Filing', desc: 'Form XIV under literary work with author / owner details and any publisher NOC.' },
        { title: 'Registration', desc: 'Certificate issued in the author / publisher name as agreed.' },
      ],
      statutoryRefs: [
        { name: 'Copyright Act, 1957 — Section 2(o)', desc: 'Definition of a literary work (includes computer programmes and compilations).' },
        { name: 'Section 13', desc: 'Subsistence of copyright in literary works.' },
        { name: 'Section 22', desc: 'Term — author’s lifetime plus 60 years.' },
      ],
      pitfalls: [
        { title: 'Idea vs Expression', desc: 'Copyright protects expression, not the underlying idea, plot premise or facts.' },
        { title: 'Publisher-Rights Gap', desc: 'Unclear author–publisher terms cause ownership and royalty disputes.' },
        { title: 'No NOC When Published', desc: 'A published work without a publisher NOC can hit objections.' },
      ],
      faqs: [
        { q: 'Should I register before or after publication?', a: 'Either works; pre-publication registration locks in authorship priority and dates cleanly.' },
        { q: 'Does copyright cover ideas in the book?', a: 'No — copyright protects the expression, not the underlying idea, theme or fact.' },
        { q: 'Is an ISBN required?', a: 'No — an ISBN is unrelated to copyright registration.' },
      ],
      relatedServices: [
        { name: 'Literature / Dramatic Copyright', href: '/services/lawyer-services/ipr-services/copyright/literature-dramatic' },
        { name: 'Copyright Registration', href: '/services/lawyer-services/ipr-services/copyright/registration' },
        { name: 'Copyright Objection', href: '/services/lawyer-services/ipr-services/copyright/objection' },
      ],
    },
    'literature-dramatic': {
      title: 'Literature / Dramatic Copyright',
      description:
        'Protect plays, screenplays, scripts, choreographic works and dramatic compositions as separate "dramatic works" under the Act.',
      keywords: ['dramatic work copyright', 'screenplay copyright', 'play copyright', 'script registration', 'choreography copyright', 'register a screenplay'],
      overview:
        'Dramatic works — plays, screenplays, scripts, mime, choreography and dumbshows — are a distinct copyright category from literary works, with their own licensing implications for stage productions, films and adaptations. Correct classification matters: it affects how the work is licensed and enforced.\n\nWe advise on the dramatic-vs-literary classification, register screenplays, scripts and choreography (fixed in notation or recording) under Form XIV, and document stage and adaptation rights — giving writers and choreographers a clean basis for production licences and film options.',
      whyChooseUs: [
        { title: 'Correct Classification', desc: 'Dramatic-vs-literary call made right, since it drives licensing.' },
        { title: 'Screenplay & Script Focus', desc: 'Tailored registration for scripts heading to stage or screen.' },
        { title: 'Choreography Capture', desc: 'Notation or recording filed so movement works are protected.' },
        { title: 'Rights Documentation', desc: 'Stage-production and adaptation rights set out for licensing.' },
      ],
      keyPoints: [
        'Dramatic-work classification advisory',
        'Screenplay / script registration',
        'Choreography registration with notation or recording',
        'Stage and adaptation rights documentation',
        'Joint-author NOC handling',
        'Basis for production licences and film options',
      ],
      process: [
        { title: 'Work Classification', desc: 'Confirm dramatic vs literary classification — relevant for licensing.' },
        { title: 'Filing', desc: 'Form XIV under dramatic work with copies and joint-author NOCs.' },
        { title: 'Registration', desc: 'Certificate issued; basis for stage-production licences and film options.' },
      ],
      statutoryRefs: [
        { name: 'Copyright Act, 1957 — Section 2(h)', desc: 'Definition of a dramatic work (includes choreography fixed in writing).' },
        { name: 'Section 13', desc: 'Subsistence of copyright in dramatic works.' },
        { name: 'Section 14', desc: 'Exclusive rights, including public performance and adaptation.' },
      ],
      pitfalls: [
        { title: 'Mis-Classification', desc: 'Filing a screenplay as literary instead of dramatic affects licensing scope.' },
        { title: 'Unfixed Choreography', desc: 'Choreography not fixed in notation or recording may not be protected.' },
        { title: 'No Adaptation Terms', desc: 'Silent adaptation rights cause disputes when the work moves to film.' },
      ],
      faqs: [
        { q: 'Is a screenplay literary or dramatic?', a: 'Under Indian law, screenplays are typically classified as dramatic works.' },
        { q: 'Can choreography be copyrighted?', a: 'Yes — when fixed in tangible form (notation, video) it qualifies as a dramatic work.' },
        { q: 'Why does the classification matter?', a: 'Dramatic works carry distinct performance and adaptation licensing implications for stage and film.' },
      ],
      relatedServices: [
        { name: 'Copyright a Book', href: '/services/lawyer-services/ipr-services/copyright/book' },
        { name: 'Cinematography Copyright', href: '/services/lawyer-services/ipr-services/copyright/cinematography' },
        { name: 'Copyright Registration', href: '/services/lawyer-services/ipr-services/copyright/registration' },
      ],
    },
    'e-symbol': {
      title: 'E-Symbol Copyright',
      description:
        'Register electronic / digital symbols, emojis, icons and UI graphical elements as artistic works.',
      keywords: ['icon copyright', 'emoji copyright', 'UI design copyright', 'digital symbol registration', 'app icon protection', 'design system copyright'],
      overview:
        'Custom UI elements, app icons, emoji designs and digital symbols are original artistic works under the Copyright Act. For SaaS, app and digital-product businesses, these are core brand assets — and registering them protects a distinctive design language that competitors increasingly copy.\n\nWe inventory your digital assets, group related icons into series where appropriate, register them as artistic works under Form XIV with high-resolution files, and coordinate the filing with your trademark portfolio for visible app marks — giving you litigation-ready proof for the design elements that define your product.',
      whyChooseUs: [
        { title: 'Design-System Coverage', desc: 'Icon sets and symbol libraries registered efficiently as series.' },
        { title: 'Digital-Native', desc: 'Filing tuned to app, SaaS and UI design realities.' },
        { title: 'Portfolio Coordination', desc: 'Aligned with trademark filings for app icons and marks.' },
        { title: 'Litigation-Ready', desc: 'Admissible artistic-work proof for copying disputes.' },
      ],
      keyPoints: [
        'Digital icon and symbol registration',
        'App / UI design-library protection',
        'Series filing for related icon sets',
        'Coordination with trademark for visible app marks',
        'High-resolution digital-file submission',
        'Litigation-ready artistic-work proof',
      ],
      process: [
        { title: 'Asset Inventory', desc: 'List icons, emojis and symbols; group as a series where appropriate.' },
        { title: 'Filing', desc: 'Form XIV — artistic work with high-resolution digital files.' },
        { title: 'Registration', desc: 'Certificate issued; integrate with the trademark portfolio.' },
      ],
      statutoryRefs: [
        { name: 'Copyright Act, 1957 — Section 2(c)', desc: 'Digital symbols and icons as artistic works.' },
        { name: 'Section 13', desc: 'Subsistence of copyright in artistic works.' },
        { name: 'Section 17', desc: 'First ownership, including works by employees and contractors.' },
      ],
      pitfalls: [
        { title: 'No Designer Assignment', desc: 'Contractor-made icons need written assignment to vest ownership in the company.' },
        { title: 'Functional Elements', desc: 'Purely functional UI elements may lack the originality copyright requires.' },
        { title: 'Trademark Gap', desc: 'Visible app marks may also need trademark protection, not just copyright.' },
      ],
      faqs: [
        { q: 'Can I register a set of icons together?', a: 'Yes — a series of related artistic works can be filed together where they form a coherent set.' },
        { q: 'Are emojis protectable?', a: 'Original, custom emoji designs qualify as artistic works; generic or standard glyphs may not.' },
        { q: 'Should app icons also be trademarked?', a: 'Visible, source-identifying app icons benefit from trademark protection in addition to copyright.' },
      ],
      relatedServices: [
        { name: 'Logo Copyright', href: '/services/lawyer-services/ipr-services/copyright/logo' },
        { name: 'Artistic Work / Painting Copyright', href: '/services/lawyer-services/ipr-services/copyright/artistic-work' },
        { name: 'Trademark Logo', href: '/services/lawyer-services/ipr-services/trademark/logo' },
      ],
    },
  },

  patent: {
    'complete-registration': {
      title: 'Patent Complete Registration',
      description:
        'File a complete patent specification with claims to obtain a 20-year exclusive monopoly over your invention in India.',
      keywords: ['patent registration India', 'complete specification', 'patent claims drafting', 'Patents Act 1970', 'request for examination', 'patent grant'],
      overview:
        'A patent grants a 20-year exclusive right to an invention that is new, involves an inventive step and is capable of industrial application. The complete specification — with its claims — is the heart of the patent: it fully discloses the invention and defines the precise scope of the monopoly. Drafting it well is the difference between a strong, enforceable patent and a paper one.\n\nUnder the Patents Act, 1970 (and the Patents Rules, 2003 as amended in 2024), the journey runs from a patentability and freedom-to-operate search, through specification drafting and filing of Forms 1, 2, 3 and 5, to the Request for Examination — now due within 31 months of the priority date under the 2024 amendment — and responses to the examination report, pre-grant opposition and grant. We manage the full prosecution to grant and beyond.',
      whyChooseUs: [
        { title: 'Strong Claims', desc: 'Specifications and claims drafted for both breadth and enforceability.' },
        { title: 'Search-Led Strategy', desc: 'Patentability and freedom-to-operate searches before you invest in filing.' },
        { title: 'Prosecution Depth', desc: 'FER responses, hearings and pre-grant opposition handled rigorously.' },
        { title: 'Lifecycle Care', desc: 'Renewals and statement-of-working compliance after grant.' },
      ],
      keyPoints: [
        'Patentability search and freedom-to-operate opinion',
        'Specification with claims, drawings and abstract',
        'Filing Forms 1, 2, 3 and 5',
        'Request for Examination (Form 18) within 31 months',
        'Response to the First Examination Report (FER)',
        'Pre-grant opposition handling',
        'Grant and 20-year term with annual renewals',
      ],
      process: [
        { title: 'Patentability Search', desc: 'Prior-art search to assess novelty and inventive step.' },
        { title: 'Specification Drafting', desc: 'Detailed description, drawings, claims and abstract.' },
        { title: 'Filing', desc: 'File Form 1, the complete specification (Form 2) and declarations.' },
        { title: 'Examination Request', desc: 'File Form 18 within 31 months; respond to the FER in time.' },
        { title: 'Grant', desc: 'On overcoming objections and any pre-grant opposition, the patent is granted.' },
      ],
      documents: [
        'Detailed description of the invention with drawings',
        'Claims defining the scope of protection',
        'Inventor declaration (Form 5)',
        'Foreign-filing statement (Form 3)',
        'Priority document (if claiming Convention priority)',
        'Power of Attorney (Form 26)',
      ],
      statutoryRefs: [
        { name: 'Patents Act, 1970 — Section 7', desc: 'Application for a patent.' },
        { name: 'Section 10', desc: 'Contents of the specification, including claims.' },
        { name: 'Sections 3 & 4', desc: 'Inventions that are not patentable.' },
        { name: 'Section 53', desc: 'Term of patent — 20 years from filing.' },
        { name: 'Patents (Amendment) Rules, 2024', desc: 'Request for Examination window reduced to 31 months.' },
      ],
      pitfalls: [
        { title: 'Public Disclosure First', desc: 'Disclosing the invention before filing can destroy novelty.' },
        { title: 'Weak Claims', desc: 'Narrow or poorly drafted claims make the patent easy to design around.' },
        { title: 'Missing RFE Deadline', desc: 'Not filing Form 18 within 31 months can lead to the application being treated as withdrawn.' },
        { title: 'Section 3 Subject Matter', desc: 'Filing non-patentable subject matter (e.g., software per se) without careful framing.' },
      ],
      faqs: [
        { q: 'How long does patent grant take?', a: 'Typically 3–5 years from filing, depending on the examination queue and FER complexity.' },
        { q: 'How long is a patent valid?', a: '20 years from the date of filing, subject to annual renewal fees from the third year onwards.' },
        { q: 'What is not patentable in India?', a: 'Sections 3 and 4 exclude discoveries, mere arrangements, mathematical / business methods, computer programmes per se, methods of medical treatment, plants and animals, among others.' },
        { q: 'When must I request examination?', a: 'Within 31 months of the priority date under the Patents (Amendment) Rules, 2024.' },
      ],
      relatedServices: [
        { name: 'Patent Provisional Registration', href: '/services/lawyer-services/ipr-services/patent/provisional-registration' },
        { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
        { name: 'Copyright Registration', href: '/services/lawyer-services/ipr-services/copyright/registration' },
      ],
    },
    'provisional-registration': {
      title: 'Patent Provisional Registration',
      description:
        'Lock in your priority date with a provisional specification while you finalize the complete specification within 12 months.',
      keywords: ['provisional patent', 'provisional specification', 'patent priority date', 'patent filing India', 'convention priority', 'early patent filing'],
      overview:
        'A provisional specification secures the earliest possible filing — your priority date — for an invention that is still being developed. It is the strategic first move: it stakes your claim, deters intervening third-party filings, and buys 12 months to refine the invention, run trials and raise funding before committing to the complete specification.\n\nWithin those 12 months, a complete specification must be filed claiming priority; if it isn’t, the application is deemed abandoned. We draft a provisional that substantively discloses the invention (so the priority is solid), file Forms 1 and 2, and then prepare and file the complete specification — including using the provisional date as the basis for foreign filings under the Paris Convention or PCT.',
      whyChooseUs: [
        { title: 'Priority Secured', desc: 'An early, defensible filing date at lower initial cost.' },
        { title: 'Substantive Disclosure', desc: 'A provisional drafted to genuinely support the later claims.' },
        { title: 'Foreign-Filing Path', desc: 'Convention / PCT strategy built off the provisional date.' },
        { title: 'Deadline Discipline', desc: 'The 12-month complete-spec deadline tracked so priority is never lost.' },
      ],
      keyPoints: [
        'Early priority date at lower initial cost',
        '12-month window to perfect the invention',
        'Substantive disclosure to support later claims',
        'Cannot be granted — must be converted to a complete specification',
        'Basis for Convention / PCT foreign filings',
        'Useful for demos, investor pitches and pre-publication',
      ],
      process: [
        { title: 'Drafting', desc: 'Draft a provisional specification substantively disclosing the invention.' },
        { title: 'Filing', desc: 'File Form 1 and Form 2 (provisional) with the prescribed fees.' },
        { title: 'Complete Specification', desc: 'Within 12 months, file the complete specification claiming priority — non-extendible.' },
      ],
      documents: [
        'Description of the invention (as developed so far)',
        'Drawings / diagrams (if available)',
        'Inventor and applicant details',
        'Power of Attorney (Form 26)',
        'Small-entity / startup certificate (for fee concession)',
      ],
      statutoryRefs: [
        { name: 'Patents Act, 1970 — Section 9', desc: 'Provisional and complete specifications and the 12-month period.' },
        { name: 'Section 11', desc: 'Priority dates of claims.' },
        { name: 'Patents Rules, 2003', desc: 'Forms 1 and 2 and procedure for provisional filing.' },
      ],
      pitfalls: [
        { title: 'Thin Disclosure', desc: 'A provisional that under-discloses cannot support the later claims, weakening priority.' },
        { title: 'Missing the 12 Months', desc: 'No complete specification within 12 months means the application is abandoned.' },
        { title: 'Disclosing Before Filing', desc: 'Public disclosure before the provisional can defeat novelty.' },
      ],
      faqs: [
        { q: 'Can I claim international priority from a provisional?', a: 'Yes — under the Paris Convention / PCT, the provisional date can serve as priority for foreign filings within 12 months.' },
        { q: 'What if I miss the 12-month deadline?', a: 'The application is deemed abandoned; there is limited scope to post-date, but generally a fresh filing is required.' },
        { q: 'Can a provisional be granted as a patent?', a: 'No — it must be followed by a complete specification, which is what proceeds to examination and grant.' },
      ],
      relatedServices: [
        { name: 'Patent Complete Registration', href: '/services/lawyer-services/ipr-services/patent/complete-registration' },
        { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
        { name: 'Copyright Registration', href: '/services/lawyer-services/ipr-services/copyright/registration' },
      ],
    },
  },
};
