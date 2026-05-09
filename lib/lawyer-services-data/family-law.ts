import type { ServiceContent } from '@/components/leaf-service-page';

export const familyLawServices: Record<string, ServiceContent> = {
  'family-dispute': {
    title: 'Family Dispute',
    description:
      'Mediation, negotiation and litigation across inheritance, partition, joint family property, business succession and intra-family disputes.',
    overview:
      'Family disputes often blend emotion with complex legal questions of title, succession and shareholding. We approach each matter with discretion — preferring negotiated settlement and family-arrangement deeds where possible, and litigating firmly in the partition / declaration suit when needed.',
    keyPoints: [
      'Partition suits and preliminary / final decrees',
      'Family arrangement and settlement deeds',
      'HUF dissolution and succession planning',
      'Shareholder oppression and mismanagement (family-owned cos.)',
      'Recovery of streedhan and personal assets',
      'Mediation and out-of-court settlement',
    ],
    process: [
      { title: 'Diagnostic', desc: 'Assess legal rights, asset map, parties involved and likely outcome of litigation vs settlement.' },
      { title: 'Negotiation', desc: 'Structured family meeting with counsel; family arrangement memorandum.' },
      { title: 'Litigation', desc: 'If settlement fails, file partition / declaration / injunction suit before competent civil court.' },
      { title: 'Decree & Implementation', desc: 'Mutation, transfer and physical division of assets per decree.' },
    ],
    faqs: [
      { q: 'Is a registered family settlement necessary?', a: 'A family arrangement need not be registered if it is a memorandum recording an oral settlement. But where it itself creates rights in immovable property, registration becomes necessary.' },
      { q: 'How long does a partition suit take?', a: 'Typically 3–7 years through preliminary and final decree, faster with mediation referrals.' },
    ],
  },
  'mutual-divorce': {
    title: 'Mutual Divorce',
    description:
      'Joint petition for divorce by mutual consent under Section 13B of the Hindu Marriage Act / Section 28 SMA — the fastest, dignified path to dissolve a marriage.',
    overview:
      'Mutual divorce requires both spouses to agree that the marriage has irretrievably broken down. The court grants divorce after two motions separated by a 6-month cooling period (often waived by Supreme Court precedent). Maintenance, alimony, custody and asset division are settled in a comprehensive MoU.',
    keyPoints: [
      'Drafting comprehensive Mutual Consent Settlement (MCS)',
      'First motion (admission) and Section 13B(1) petition',
      'Second motion (statement) and decree under Section 13B(2)',
      'Cooling-off period waiver application (where eligible)',
      'Custody, maintenance and alimony documentation',
      'Streedhan / property handover memorandum',
    ],
    process: [
      { title: 'Settlement Drafting', desc: 'Negotiate and document terms — alimony, custody, visitation, asset division.' },
      { title: 'First Motion', desc: 'Joint petition filed; both parties record statement before court.' },
      { title: 'Cooling Period', desc: '6-month statutory pause; can be waived by court in exceptional cases.' },
      { title: 'Second Motion', desc: 'Both parties reaffirm consent; court grants divorce decree.' },
    ],
    documents: [
      'Marriage certificate and wedding photos',
      'Aadhaar and PAN of both parties',
      'Address proof of one-year separate residence',
      'Salary slips / IT returns (for maintenance computation)',
      'List of assets and liabilities',
      'Custody plan (if children involved)',
    ],
    faqs: [
      { q: 'Can the 6-month cooling period be waived?', a: 'Yes — the Supreme Court in Amardeep Singh v. Harveen Kaur (2017) clarified that the period is directory and can be waived where parties have lived apart for over 18 months and reconciliation is impossible.' },
      { q: 'How long does mutual divorce take?', a: 'With cooling-period waiver, as fast as 2–4 months. Without waiver, around 8–12 months.' },
      { q: 'Is presence required at both motions?', a: 'Yes — both spouses must appear (in person or via video conference where permitted) at first and second motions.' },
    ],
  },
  'contested-divorce': {
    title: 'Contested Divorce',
    description:
      'Divorce on grounds of cruelty, desertion, adultery, conversion, mental disorder or other grounds under Section 13 HMA / SMA / personal laws.',
    overview:
      'When mutual consent is not possible, divorce must be obtained on statutory grounds. We litigate cases of cruelty (physical, mental, financial), desertion (continuous 2 years), adultery, conversion, and other grounds — through full evidence-based trial in the family court.',
    keyPoints: [
      'Detailed fact-mapping and ground identification',
      'Petition drafting under Section 13 HMA / SMA / 27 SMA',
      'Interim relief (maintenance pendente lite, custody, residence)',
      'Cross-examination and evidence strategy',
      'Counter-claims and counter-cases (DV, Section 498A defence)',
      'Final decree and execution',
    ],
    process: [
      { title: 'Pre-litigation', desc: 'Evidence gathering — communications, medical records, witness identification.' },
      { title: 'Petition & Interim Relief', desc: 'File petition with applications for interim maintenance, custody and residence.' },
      { title: 'Trial', desc: 'Examination-in-chief, cross-examination of both sides; documentary evidence.' },
      { title: 'Final Arguments & Decree', desc: 'Written submissions, oral arguments and final judgment.' },
    ],
    faqs: [
      { q: 'How long does contested divorce take?', a: 'Typically 3–5 years at trial-court level, with appeals it may extend further.' },
      { q: 'What is the burden of proof?', a: 'On the petitioner — to prove the alleged ground on a preponderance of probabilities (civil standard).' },
      { q: 'Can I file mutual divorce later?', a: 'Yes — parties often convert contested to mutual divorce after partial settlement; we encourage this where possible to save time.' },
    ],
  },
  'child-custody-visitation': {
    title: 'Child Custody & Visitation',
    description:
      'Custody petitions, guardianship orders, visitation rights and welfare-of-child advocacy under Guardians and Wards Act and personal laws.',
    overview:
      'In Indian custody law, the welfare of the child is paramount. We represent mothers, fathers and guardians in custody proceedings before family courts, including interim custody, visitation, holiday arrangements and overseas travel consent.',
    keyPoints: [
      'Permanent and interim custody petitions',
      'Visitation schedule and holiday arrangements',
      'Guardianship under Guardians and Wards Act',
      'Overseas travel and passport disputes',
      'Cross-border / Hague Convention (limited) custody',
      'Modification of existing custody orders',
    ],
    process: [
      { title: 'Welfare Assessment', desc: 'Evaluate factors: child\'s age, parental capacity, education, environment.' },
      { title: 'Petition', desc: 'File before family court with welfare report and supporting evidence.' },
      { title: 'Interim Order', desc: 'Court typically grants interim custody / visitation pending final decision.' },
      { title: 'Trial & Final Order', desc: 'Evidence and (where appropriate) child interaction with judge.' },
    ],
    faqs: [
      { q: 'Does mother always get custody?', a: 'No — Indian courts apply welfare-of-child standard. Custody of children below 5 is generally with mother but father can be granted custody where mother\'s circumstances do not serve welfare.' },
      { q: 'Can a teenage child decide?', a: 'Courts give significant weight to the wishes of children above 9–12 years, depending on maturity and circumstances.' },
    ],
  },
  'alimony-maintenance': {
    title: 'Alimony & Maintenance',
    description:
      'Maintenance under Section 125 CrPC, HMA Section 24/25, Special Marriage Act, DV Act and personal laws — interim and permanent claims.',
    overview:
      'Multiple statutes provide maintenance — Section 125 CrPC (summary), HMA Section 24 (pendente lite) and Section 25 (permanent alimony), Domestic Violence Act, Muslim Women Act and others. We strategize the appropriate forum and quantum based on income, status and standard of living.',
    keyPoints: [
      'Interim maintenance pendente lite',
      'Permanent alimony — lump sum or monthly',
      'Section 125 CrPC summary maintenance',
      'Maintenance under PWDVA',
      'Variation and enhancement applications',
      'Execution and recovery of arrears',
    ],
    process: [
      { title: 'Income Analysis', desc: 'Map respondent\'s income — salary, business, assets, lifestyle indicators.' },
      { title: 'Application', desc: 'File interim and permanent applications with affidavit of income and expenses.' },
      { title: 'Order & Recovery', desc: 'On non-payment, file recovery / execution and warrant of arrest under Section 125(3) CrPC.' },
    ],
    faqs: [
      { q: 'Can a working wife claim maintenance?', a: 'Yes — what matters is whether her income is sufficient to maintain the standard of living she is entitled to. Working women routinely receive maintenance where there is a substantial gap.' },
      { q: 'Is one-time alimony better than monthly?', a: 'Depends on circumstances. Lump sum closes future liability; monthly maintenance retains flexibility for variation. We advise based on individual case factors.' },
    ],
  },
  'dowry': {
    title: 'Dowry',
    description:
      'Dowry Prohibition Act and Section 498A IPC — both prosecution of dowry harassment and defence of falsely accused respondents.',
    overview:
      'Dowry harassment is a criminal offence under the Dowry Prohibition Act, 1961 and Section 498A IPC. We represent victims pursuing prosecution and recovery of streedhan, and equally defend wrongly accused husbands and in-laws including quashing under Section 482 CrPC where allegations are baseless.',
    keyPoints: [
      'FIR under Section 498A IPC + Dowry Prohibition Act',
      'Recovery of streedhan and dowry articles',
      'Anticipatory bail for falsely accused',
      'Quashing under Section 482 CrPC for false cases',
      'Compensation under Section 357 CrPC',
      'Supreme Court guidelines (Arnesh Kumar) compliance',
    ],
    process: [
      { title: 'Strategy', desc: 'Determine prosecution / defence approach; quantify articles and witnesses.' },
      { title: 'FIR / Bail', desc: 'File complaint or apply for anticipatory / regular bail.' },
      { title: 'Trial / Quashing', desc: 'Trial in case of prosecution; quashing petition where false case.' },
    ],
    faqs: [
      { q: 'Is Section 498A non-bailable?', a: 'Yes, it is cognizable and non-bailable, but anticipatory and regular bail are routinely granted especially after Arnesh Kumar guidelines.' },
      { q: 'Can streedhan be recovered after divorce?', a: 'Yes — streedhan remains the wife\'s absolute property and recovery action lies regardless of marital status.' },
    ],
  },
  'domestic-violence': {
    title: 'Domestic Violence',
    description:
      'Comprehensive relief under the Protection of Women from Domestic Violence Act, 2005 — protection, residence, monetary and custody orders.',
    overview:
      'PWDVA, 2005 is a civil-criminal hybrid that provides quick relief to women in domestic relationships against physical, sexual, verbal, emotional and economic abuse. We file Domestic Incident Reports, application before Magistrate and obtain protection, residence and monetary orders.',
    keyPoints: [
      'Application under Section 12 before Magistrate',
      'Protection Orders (no contact, no harm)',
      'Residence Orders (right to reside in shared household)',
      'Monetary Relief (maintenance, medical, loss of earnings)',
      'Custody and compensation orders',
      'Prosecution for breach of orders',
    ],
    process: [
      { title: 'DIR & Application', desc: 'Domestic Incident Report through Protection Officer; file Section 12 application.' },
      { title: 'Interim Order', desc: 'Magistrate routinely grants ex-parte interim relief at first hearing.' },
      { title: 'Final Order', desc: 'After evidence, comprehensive final order covering all reliefs.' },
    ],
    faqs: [
      { q: 'Who can file under DV Act?', a: 'Any woman in a domestic relationship — wife, sister, mother, live-in partner, daughter — facing domestic violence by the respondent.' },
      { q: 'What is "shared household"?', a: 'A household where the aggrieved person lives or has lived in a domestic relationship — even if not owned by her or her husband (per recent Supreme Court rulings).' },
    ],
  },
  'injunction-against-spouse': {
    title: 'Injunction Against Spouse',
    description:
      'Restraining orders, anti-harassment injunctions and protective court directions — civil and criminal remedies.',
    overview:
      'Multiple remedies exist for protecting a spouse from harassment, threats or interference — civil suit for permanent / temporary injunction, protection orders under DV Act, Section 144 CrPC orders and quia timet injunctions.',
    keyPoints: [
      'Permanent and temporary injunction suits',
      'Ex-parte ad-interim injunction at first hearing',
      'Section 144 CrPC orders for breach of peace',
      'PWDVA Protection Orders',
      'Anti-suit injunctions for parallel litigation',
    ],
    process: [
      { title: 'Threat Assessment', desc: 'Identify nature of threat — physical, financial, defamatory, custody-related.' },
      { title: 'Forum Selection', desc: 'Civil court for property / personal liberty; criminal forum for breach of peace.' },
      { title: 'Application', desc: 'File suit / application with affidavit and request ad-interim ex-parte order.' },
    ],
    faqs: [
      { q: 'What evidence is needed for injunction?', a: 'Prima facie case, balance of convenience and irreparable injury — supported by affidavit, communications, medical records or witness statements.' },
    ],
  },
  'foreign-divorce-decree': {
    title: 'Execution of Foreign Divorce Decree',
    description:
      'Recognition and enforcement of overseas divorce decrees in Indian courts under Section 13 CPC and personal laws.',
    overview:
      'A foreign divorce decree is recognized in India only if it satisfies Section 13 CPC tests — inter alia, jurisdictional competence, merits-based decision, opportunity to be heard and consonance with Indian law. We file declaration / execution proceedings to give the foreign decree effect in India.',
    keyPoints: [
      'Section 13 CPC viability assessment',
      'Declaratory suit for recognition of foreign decree',
      'Mutation of marital status in records',
      'Conflict-of-laws analysis where domicile is disputed',
      'Coordination of overseas record retrieval',
    ],
    process: [
      { title: 'Assessment', desc: 'Test foreign decree against Section 13 CPC criteria.' },
      { title: 'Declaratory Suit', desc: 'File before competent civil court with certified foreign decree and translations.' },
      { title: 'Decree', desc: 'Indian decree declares foreign decree binding; mutation in records.' },
    ],
    faqs: [
      { q: 'Is a US divorce decree automatically valid in India?', a: 'No — it must independently satisfy Section 13 CPC. Indian Supreme Court in Y. Narasimha Rao laid down the framework.' },
    ],
  },
  'transfer-of-matrimonial-cases': {
    title: 'Transfer of Matrimonial Cases',
    description:
      'Transfer petitions before Supreme Court and High Courts to move matrimonial matters across jurisdictions on grounds of inconvenience, safety or fairness.',
    overview:
      'When a spouse is unable to attend matrimonial proceedings in another state due to distance, safety, child-care or financial reasons, a transfer petition can be filed under Section 25 CPC (Supreme Court) or Section 24 CPC (High Court). Indian courts liberally grant transfers in favour of women.',
    keyPoints: [
      'Section 25 CPC transfer petition before Supreme Court',
      'Section 24 CPC transfer before High Court',
      'Convenience and balance-of-hardship arguments',
      'Pendency of multiple cases consolidation',
      'Video-conference appearance applications',
    ],
    process: [
      { title: 'Petition', desc: 'Draft petition citing grounds, distance, safety, custody concerns.' },
      { title: 'Notice & Reply', desc: 'Court issues notice; opposite party files counter-affidavit.' },
      { title: 'Hearing & Order', desc: 'On merits, court orders transfer of pending case to chosen jurisdiction.' },
    ],
    faqs: [
      { q: 'Are transfers always granted to wives?', a: 'No — courts evaluate on a case-by-case basis, but historically grant transfers liberally in favour of women due to mobility, safety and child-care considerations.' },
      { q: 'What if multiple cases are pending in different states?', a: 'A consolidated transfer petition can be filed before the Supreme Court to bring all matrimonial cases to one jurisdiction.' },
    ],
  },
};
