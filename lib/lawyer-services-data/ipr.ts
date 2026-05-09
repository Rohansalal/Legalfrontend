import type { ServiceContent } from '@/components/leaf-service-page';

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
        'Secure exclusive rights to your brand name, logo and tagline with end-to-end trademark registration before the Trademark Registry of India.',
      overview:
        'Trademark registration grants you a 10-year exclusive right (renewable) to use your brand mark within the registered class. We handle availability search, classification, drafting, filing of Form TM-A and follow-through until the registration certificate is issued.',
      keyPoints: [
        'Comprehensive trademark availability search across all 45 classes',
        'Filing under correct Nice Classification with proper specification',
        'Response to examination reports and objections (if any)',
        'Publication monitoring in Trademark Journal for opposition window',
        'Issuance of registration certificate with ® symbol entitlement',
      ],
      process: [
        { title: 'Trademark Search', desc: 'Free public search and detailed clearance opinion to confirm availability and minimize objection risk.' },
        { title: 'Filing TM-A', desc: 'Application filed online with the Registrar; you can use the ™ symbol from this stage.' },
        { title: 'Examination & Response', desc: 'Respond to examination report within statutory time; attend hearing if needed.' },
        { title: 'Journal Publication', desc: 'Mark advertised in Trademark Journal; 4-month opposition window opens.' },
        { title: 'Registration', desc: 'If unopposed, registration certificate issues; ® symbol can be used on the mark.' },
      ],
      documents: [
        'Logo / wordmark in JPG (high resolution)',
        'Applicant ID proof (PAN, Aadhaar)',
        'Business registration proof (GST, Incorporation, etc.)',
        'Power of Attorney (Form TM-48)',
        'User affidavit (if claiming prior use)',
        'MSME / Startup certificate (for fee concession)',
      ],
      faqs: [
        { q: 'How long does trademark registration take?', a: 'Typically 12–24 months end-to-end. The ™ symbol can be used immediately after filing; ® only after registration.' },
        { q: 'How long is a trademark valid?', a: 'A registered trademark is valid for 10 years from the date of application and is renewable indefinitely in 10-year blocks.' },
        { q: 'Can I file in multiple classes?', a: 'Yes. Each class requires a separate fee but the same application can include multiple classes (multi-class application).' },
        { q: 'What does ™ vs ® mean?', a: '™ indicates a claimed but unregistered mark; ® indicates a registered mark with statutory protection — using ® without registration is an offence.' },
      ],
    },
    'objection': {
      title: 'Trademark Objection',
      description:
        'Strategic response to examination reports raised by the Registrar under Sections 9 and 11 of the Trade Marks Act, 1999.',
      overview:
        'When the Registrar raises objections in the examination report — typically on absolute (Section 9) or relative (Section 11) grounds — a written reply is mandatory within 30 days. We draft a reasoned legal reply with judicial precedents, evidence of distinctiveness and user proof to overcome the objection.',
      keyPoints: [
        'Analysis of each objection ground (descriptiveness, similarity, deception)',
        'Drafting reasoned reply citing Indian and foreign judgments',
        'Affidavits of user, advertisement and sales evidence',
        'Coordinating hearing if reply is not accepted',
        'Strategy to amend specification or class to overcome objection',
      ],
      process: [
        { title: 'Examination Report Review', desc: 'Detailed analysis of each cited objection and conflicting marks.' },
        { title: 'Evidence Compilation', desc: 'Gather usage evidence, sales figures, advertisement spend and customer testimonials.' },
        { title: 'Draft & File Reply', desc: 'File written response within 30 days with annexed affidavits and case law.' },
        { title: 'Hearing Representation', desc: 'Appear before the Hearing Officer if a hearing is fixed and argue the case.' },
      ],
      faqs: [
        { q: 'What is the time limit to respond to a trademark objection?', a: '30 days from receipt of the examination report. Extension is generally not granted; the application risks abandonment otherwise.' },
        { q: 'Can a Section 9 objection be overcome?', a: 'Yes — through evidence of acquired distinctiveness (long use, advertising, market recognition) supported by an affidavit and exhibits.' },
        { q: 'What if my reply is rejected?', a: 'A hearing is fixed where you can argue. If still rejected, you can appeal to the IPAB / High Court.' },
      ],
    },
    'hearing': {
      title: 'Trademark Hearing',
      description:
        'Expert representation before the Trademark Hearing Officer to overcome examination objections that survive the written reply.',
      overview:
        'When written objections are not accepted, the Registrar fixes a "show-cause hearing". An attorney appears (now mostly via video conference) to argue against each objection citing legal grounds, evidence and precedents to secure acceptance for journal publication.',
      keyPoints: [
        'Hearing brief preparation with case law and evidence index',
        'Appearance before Hearing Officer (video / physical)',
        'Oral arguments addressing each objection',
        'Filing additional written submissions if required',
        'Communication of order and next steps',
      ],
      process: [
        { title: 'Hearing Notice Analysis', desc: 'Review the hearing notice and prior reply to identify weak points.' },
        { title: 'Brief Preparation', desc: 'Compile a hearing brief with arguments, citations and evidence exhibits.' },
        { title: 'Appearance', desc: 'Attend hearing on the scheduled date and argue the case.' },
        { title: 'Outcome', desc: 'If accepted, the mark proceeds to journal publication; if refused, appeal options are advised.' },
      ],
      faqs: [
        { q: 'Is appearance mandatory at the hearing?', a: 'Yes. Non-appearance generally results in refusal of the application as abandoned.' },
        { q: 'Can the hearing be adjourned?', a: 'One adjournment may be granted on sufficient cause but is at the Hearing Officer\'s discretion.' },
        { q: 'Are hearings conducted virtually?', a: 'Most trademark hearings are now conducted via video conference, simplifying participation across India.' },
      ],
    },
    'opposition': {
      title: 'Trademark Opposition',
      description:
        'File or defend opposition proceedings during the 4-month journal publication window to protect or assert trademark rights.',
      overview:
        'After publication in the Trademark Journal, any aggrieved person may oppose registration within 4 months by filing Form TM-O. We handle both sides — filing oppositions for trademark owners and defending applicants against frivolous oppositions through counter-statements and evidence.',
      keyPoints: [
        'Drafting Notice of Opposition (Form TM-O) with grounds',
        'Counter-statement filing within 2 months for applicants',
        'Evidence stage filings (affidavits, documents)',
        'Hearing representation before Opposition Board',
        'Settlement and consent agreements where strategic',
      ],
      process: [
        { title: 'Notice of Opposition', desc: 'Detailed notice citing prior rights, similarity and likelihood of confusion.' },
        { title: 'Counter-Statement', desc: 'Applicant files counter-statement within 2 months or application is deemed abandoned.' },
        { title: 'Evidence', desc: 'Both parties file evidence by way of affidavit with supporting documents.' },
        { title: 'Hearing', desc: 'Oral arguments before the Hearing Officer leading to a final order.' },
      ],
      faqs: [
        { q: 'What is the opposition window?', a: 'Four months from the date the mark is published in the Trademark Journal. Extension is not permitted.' },
        { q: 'Who can file an opposition?', a: 'Any person — not necessarily a prior trademark holder — can oppose if they have a legitimate ground under Sections 9, 11 or 18.' },
        { q: 'How long does opposition take?', a: 'Typically 18–36 months depending on evidence stages and hearing schedules.' },
      ],
    },
    'renewal': {
      title: 'Trademark Renewal',
      description:
        'Renew your registered trademark every 10 years to maintain perpetual exclusive rights and avoid removal from the register.',
      overview:
        'A trademark is renewable indefinitely in 10-year blocks. Renewal application (Form TM-R) must be filed within 6 months before expiry — or with surcharge up to 6 months after — failing which the mark is removed and may be restored only within 1 year.',
      keyPoints: [
        'Filing Form TM-R within renewal window',
        'Surcharge filing for late renewals',
        'Renewal certificate procurement',
        'Calendar reminders for next 10-year cycle',
        'Bulk renewal handling for portfolios',
      ],
      process: [
        { title: 'Expiry Tracking', desc: 'Identify expiry date and mark renewal calendar.' },
        { title: 'Form TM-R Filing', desc: 'File renewal application with prescribed fee — pre or post-expiry with surcharge.' },
        { title: 'Renewal Certificate', desc: 'Receive renewal certificate; protection extended for next 10 years.' },
      ],
      faqs: [
        { q: 'When can I renew my trademark?', a: 'Within 6 months before expiry, or up to 6 months after expiry with a late-fee surcharge.' },
        { q: 'What if I miss the 6-month grace period?', a: 'The mark is removed from the register. You can apply for restoration within 1 year of removal.' },
      ],
    },
    'restoration': {
      title: 'Trademark Restoration',
      description:
        'Restore a removed trademark to the Register within one year of removal under Form TM-13.',
      overview:
        'If renewal is not filed within the 6-month grace period, the trademark is removed from the Register. The mark can be restored within 1 year of removal by filing Form TM-13 along with renewal fees and explaining the cause for delay.',
      keyPoints: [
        'Drafting restoration application with cause statement',
        'Filing Form TM-13 with prescribed fees',
        'Coordinating with Registrar for advertisement',
        'Restoration order procurement',
      ],
      process: [
        { title: 'Eligibility Check', desc: 'Confirm that less than 1 year has lapsed since removal.' },
        { title: 'Form TM-13 Filing', desc: 'File restoration application with reasons and renewal fees.' },
        { title: 'Order', desc: 'Registrar passes restoration order; mark is reinstated on the Register.' },
      ],
      faqs: [
        { q: 'Until when can I restore?', a: 'Within 1 year from the date of removal. After 1 year, fresh registration is the only option.' },
        { q: 'Will rights be retroactive?', a: 'Yes — restoration places the mark back on the Register as if uninterrupted, subject to third-party rights acquired during removal.' },
      ],
    },
    'assignment': {
      title: 'Trademark Assignment',
      description:
        'Transfer ownership of a registered or pending trademark with or without goodwill through a legally enforceable assignment.',
      overview:
        'Trademark assignment transfers the proprietary rights from the assignor to the assignee. It can be with goodwill (for identical / similar goods) or without goodwill (for different goods). Recording the assignment with the Registrar via Form TM-P is mandatory to bind third parties.',
      keyPoints: [
        'Drafting assignment deed (with or without goodwill)',
        'Stamp duty advisory and execution',
        'Recording assignment via Form TM-P',
        'Advertisement requirements for assignments without goodwill',
        'Updating ownership on the Register',
      ],
      process: [
        { title: 'Deed Drafting', desc: 'Tailored assignment deed defining marks, classes and consideration.' },
        { title: 'Execution & Stamping', desc: 'Execute on appropriate stamp paper and notarize.' },
        { title: 'Form TM-P Filing', desc: 'Apply to Registrar for recordal of change in proprietorship.' },
        { title: 'Public Notice', desc: 'For assignments without goodwill, publish in newspapers as directed.' },
      ],
      faqs: [
        { q: 'Can pending applications be assigned?', a: 'Yes — both registered and pending trademarks can be assigned.' },
        { q: 'Is registration of the assignment mandatory?', a: 'It is not strictly mandatory but unrecorded assignments are not admissible as evidence and bind only the parties.' },
      ],
    },
    'infringement': {
      title: 'Trademark Infringement',
      description:
        'Civil and criminal action against unauthorized use of your registered mark — injunctions, damages and seizure of infringing goods.',
      overview:
        'Use of an identical or deceptively similar mark on identical or similar goods/services without permission constitutes infringement. The Trade Marks Act provides civil remedies (injunction, damages, account of profits, delivery-up) and criminal penalties (imprisonment up to 3 years and fine).',
      keyPoints: [
        'Cease & desist notice to infringer',
        'Civil suit for permanent injunction',
        'Interim / Anton Piller / John Doe orders',
        'Damages and account of profits computation',
        'Criminal complaint and police raids under Section 103/104',
      ],
      process: [
        { title: 'Evidence Collection', desc: 'Document infringing use through purchases, screenshots and market survey.' },
        { title: 'Cease & Desist', desc: 'Issue legal notice demanding stoppage and damages — many cases settle here.' },
        { title: 'Civil Suit', desc: 'File suit before District Court / High Court seeking injunction and damages.' },
        { title: 'Interim Relief', desc: 'Apply for ex-parte ad-interim injunction and asset seizure.' },
        { title: 'Trial & Decree', desc: 'Lead evidence, cross-examine and obtain final decree.' },
      ],
      faqs: [
        { q: 'Can I sue without registration?', a: 'A registered owner can sue for infringement; an unregistered user can sue for passing off based on goodwill.' },
        { q: 'Is criminal action possible?', a: 'Yes — Sections 103/104 of the Act prescribe up to 3 years imprisonment and fine for infringing labels and applying false marks.' },
      ],
    },
    'investigation': {
      title: 'Trademark Investigation',
      description:
        'Confidential market and online investigation to gather evidence of counterfeiting, infringement or unauthorized use.',
      overview:
        'A successful infringement action depends on robust evidence. Our investigators conduct discreet market visits, test purchases, online surveillance and supply-chain mapping to document infringing activity in admissible form for court proceedings.',
      keyPoints: [
        'Market survey and trap purchases',
        'Online marketplace monitoring',
        'Supply-chain identification (manufacturer / distributor / retailer)',
        'Evidence preservation in legally admissible form',
        'Investigation report ready for court annexure',
      ],
      process: [
        { title: 'Briefing', desc: 'Define target marks, geography, online platforms and suspected entities.' },
        { title: 'Field & Online Investigation', desc: 'Trap purchases, screenshots, social media and listing captures.' },
        { title: 'Reporting', desc: 'Comprehensive investigation report with photographs, invoices and chain of custody.' },
        { title: 'Action Recommendation', desc: 'Strategy memo on civil suit, criminal complaint or Customs recordal.' },
      ],
      faqs: [
        { q: 'Are trap purchases admissible?', a: 'Yes — when conducted with proper protocol and chain of custody, trap purchase evidence is routinely accepted by Indian courts.' },
        { q: 'Can investigation be done online only?', a: 'For purely digital infringement (e-commerce, social media), online investigation often suffices.' },
      ],
    },
    'logo': {
      title: 'Trademark Logo',
      description:
        'Specialized trademark registration for graphical logos, device marks and composite marks combining text and design.',
      overview:
        'A logo trademark protects the visual representation of your brand — colors, design elements and stylization. We file device marks under the appropriate class with proper colour claim and graphical representation as per Form TM-A requirements.',
      keyPoints: [
        'Logo design clearance and similarity search',
        'Colour claim strategy (with / without colour limitation)',
        'High-resolution image preparation per Registry standards',
        'Composite mark filing strategy (logo + word)',
        'Registration certificate and ® usage rights',
      ],
      process: [
        { title: 'Design Clearance', desc: 'Image-based similarity search to identify pre-existing similar logos.' },
        { title: 'Colour Strategy', desc: 'Decide whether to claim specific colours or file in black-and-white for broader scope.' },
        { title: 'Filing', desc: 'File device-mark application with high-quality image and class specification.' },
        { title: 'Prosecution & Registration', desc: 'Examination, hearing (if needed), publication and registration.' },
      ],
      faqs: [
        { q: 'Should I register colour or black-and-white?', a: 'Black-and-white registration covers all colour combinations and gives broader protection. Colour-specific registration is appropriate when colour is integral to brand identity.' },
        { q: 'Can I register logo and word separately?', a: 'Yes — registering wordmark and device mark separately maximizes protection and enforceability.' },
      ],
    },
  },

  copyright: {
    'registration': {
      title: 'Copyright Registration',
      description:
        'Statutory registration of original literary, artistic, musical, dramatic, cinematographic and software works under the Copyright Act, 1957.',
      overview:
        'While copyright subsists automatically upon creation, registration with the Copyright Office provides prima facie evidence of authorship in court and is invaluable for enforcement, licensing and international protection.',
      keyPoints: [
        'Filing Form XIV with statement of particulars and works',
        'Diary number issuance and 30-day waiting period',
        'Response to objections (if any) and examiner queries',
        'Issuance of registration certificate',
        'Lifetime + 60 years protection (for most works)',
      ],
      process: [
        { title: 'Work Classification', desc: 'Identify the correct category — literary, artistic, musical, software, cinematograph or sound recording.' },
        { title: 'Filing', desc: 'Submit Form XIV online with two copies of the work, NOC where required and statement of particulars.' },
        { title: 'Examination', desc: 'After 30 days, examiner reviews and may raise objections.' },
        { title: 'Registration', desc: 'On clearance, certificate is issued and details are entered in the Register of Copyrights.' },
      ],
      documents: [
        'Two copies of the work',
        'Author / owner ID and address proof',
        'NOC from joint authors (if any)',
        'NOC from publisher (if work is published)',
        'Power of Attorney',
      ],
      faqs: [
        { q: 'Is registration mandatory?', a: 'No — copyright is automatic on creation. But registration provides strong evidentiary value in infringement actions.' },
        { q: 'How long does copyright last?', a: 'For most works, the lifetime of the author plus 60 years. For cinematograph films, sound recordings and corporate works, 60 years from publication.' },
      ],
    },
    'objection': {
      title: 'Copyright Objection',
      description:
        'Respond to discrepancy / objection notices issued by the Copyright Office during examination of your application.',
      overview:
        'After the 30-day mandatory wait, an examiner may raise objections about authorship, originality, scope, NOC requirements or third-party claims. A timely, well-supported reply is critical to avoid abandonment.',
      keyPoints: [
        'Detailed objection analysis',
        'Drafting reasoned reply with evidence',
        'NOC sourcing from co-authors / publishers',
        'Hearing representation if required',
        'Amendment of application where strategic',
      ],
      process: [
        { title: 'Objection Notice Review', desc: 'Identify each ground and assess required documentary support.' },
        { title: 'Evidence & NOC Compilation', desc: 'Gather originality proof, joint-author consents and dated drafts/files.' },
        { title: 'Reply Filing', desc: 'Submit response with supporting documents.' },
        { title: 'Hearing', desc: 'Appear before the Registrar if hearing is fixed.' },
      ],
      faqs: [
        { q: 'What is the time limit to respond?', a: 'Typically 30 days from the discrepancy letter — confirm in the specific notice.' },
        { q: 'What if a third party objects?', a: 'Their objection is heard alongside; you must rebut with documentary proof of authorship and prior creation.' },
      ],
    },
    'songs': {
      title: 'Songs Copyright',
      description:
        'Register lyrics and musical composition as a "musical work" — the composer / lyricist\'s underlying creative right separate from any recording.',
      overview:
        'A song has two distinct copyrights — the underlying musical work (composition + lyrics) and the sound recording. We register the musical work in the composer / lyricist\'s name to protect the song independent of any specific recorded version.',
      keyPoints: [
        'Lyrics + notation registration as musical work',
        'Joint-author registration for composer / lyricist',
        'Royalty collection through IPRS / PPL',
        'Sync-licensing readiness for film/ad use',
      ],
      process: [
        { title: 'Authorship Documentation', desc: 'NOC and assignment between lyricist, composer and any joint authors.' },
        { title: 'Filing', desc: 'Form XIV with lyrics manuscript and musical notation / midi.' },
        { title: 'Registration', desc: 'Certificate issued in author / owner name; copyright society membership recommended.' },
      ],
      faqs: [
        { q: 'What if I only wrote the lyrics?', a: 'Lyrics alone are a literary work. The musical composition is separately authored by the composer. Both can be co-registered.' },
        { q: 'Do I need to register before releasing?', a: 'Recommended — registration before release strengthens enforcement against unauthorized covers.' },
      ],
    },
    'songs-recording': {
      title: 'Songs Recording Copyright',
      description:
        'Register the sound recording of a song — the producer\'s right in the fixed audio embodiment, distinct from the underlying composition.',
      overview:
        'The sound recording copyright belongs to the producer who finances and arranges the recording. It protects the specific recorded version against unauthorized reproduction, communication and distribution.',
      keyPoints: [
        'Sound recording registration in producer\'s name',
        'Mechanical and performance licensing readiness',
        'NOCs from underlying authors and performers',
        'PPL / IPRS coordination for royalty collection',
      ],
      process: [
        { title: 'NOC Procurement', desc: 'Obtain NOCs from composer, lyricist, performers and any prior assignors.' },
        { title: 'Filing', desc: 'Form XIV under "sound recording" category with audio file.' },
        { title: 'Registration', desc: 'Certificate issued; PPL / Recorded Music Performance Ltd. membership for royalty collection.' },
      ],
      faqs: [
        { q: 'Is sound recording copyright same as composition?', a: 'No — the recording protects only the specific fixed audio. Different artists can record the same composition with their own sound recording rights.' },
      ],
    },
    'artistic-work': {
      title: 'Artistic Work / Painting Copyright',
      description:
        'Register paintings, drawings, sculptures, photographs, architectural drawings and works of artistic craftsmanship as artistic works.',
      overview:
        'The Copyright Act protects all original artistic works — irrespective of artistic quality. Registration provides legally admissible proof of authorship and date of creation, critical for art commerce, exhibitions and infringement claims.',
      keyPoints: [
        'Registration for paintings, sculptures, photographs',
        'High-resolution work submission',
        'Dating and authorship establishment',
        'Moral and economic rights vesting',
      ],
      process: [
        { title: 'Work Documentation', desc: 'High-resolution image, dimensions, medium and date of creation.' },
        { title: 'Filing', desc: 'Form XIV under artistic work category with two copies of the image.' },
        { title: 'Registration', desc: 'Certificate issued; moral rights protected even after assignment.' },
      ],
      faqs: [
        { q: 'Can I register a photograph?', a: 'Yes — photographs are registrable artistic works under Section 2(c).' },
        { q: 'Are moral rights transferable?', a: 'No — moral rights of integrity and attribution remain with the author and are not assignable.' },
      ],
    },
    'logo': {
      title: 'Logo Copyright',
      description:
        'Copyright a logo as an "artistic work" — complementary protection alongside trademark registration for stronger enforcement.',
      overview:
        'A logo can simultaneously enjoy trademark and copyright protection. Copyright protects the artistic expression (drawing, design); trademark protects the source identifier function. We recommend both for maximum protection.',
      keyPoints: [
        'Artistic work registration for logo design',
        'Author / employer ownership clarity',
        'Coexistence with trademark registration',
        'Stronger basis for copying suits beyond trademark scope',
      ],
      process: [
        { title: 'Authorship Establishment', desc: 'Determine if logo was made in-house, by employee or by contractor; obtain assignment if needed.' },
        { title: 'Filing', desc: 'Form XIV — artistic work with high-quality logo file.' },
        { title: 'Registration', desc: 'Certificate issued; combine with trademark for layered protection.' },
      ],
      faqs: [
        { q: 'Should I register both copyright and trademark?', a: 'Yes — they protect different aspects and dual protection is the gold standard for logos.' },
        { q: 'Who owns logo made by a freelancer?', a: 'By default the freelancer (author). You must obtain a written assignment or commissioning clause to claim ownership.' },
      ],
    },
    'cinematography': {
      title: 'Cinematography Copyright',
      description:
        'Register films, web series, short films, advertisements and cinematographic works in the producer\'s name.',
      overview:
        'A cinematograph film is a separate work from its underlying screenplay, music and dialogues. Copyright vests in the producer for 60 years from publication. Registration provides clear provenance for distribution, OTT licensing and infringement enforcement.',
      keyPoints: [
        'Cinematograph film registration in producer\'s name',
        'NOC chain from director, writer, music and performers',
        'Streaming / theatrical / TV licensing readiness',
        'Anti-piracy enforcement basis',
      ],
      process: [
        { title: 'NOC Chain', desc: 'Compile NOCs from script writer, director, music composer, lead performers.' },
        { title: 'Filing', desc: 'Form XIV under "cinematograph film" with the film copy and NOC bundle.' },
        { title: 'Registration', desc: 'Certificate issued; basis for content takedown and distribution agreements.' },
      ],
      faqs: [
        { q: 'How long is film copyright?', a: '60 years from the calendar year following publication of the film.' },
        { q: 'Does the director own the film?', a: 'No — under Indian law, the producer is the author and first owner of a cinematograph film.' },
      ],
    },
    'book': {
      title: 'Copyright a Book',
      description:
        'Register manuscripts, novels, non-fiction, academic works and ebooks as literary works under the Copyright Act.',
      overview:
        'Books, manuscripts and any original written expression qualify as literary works. Registration is highly recommended before publication to establish authorship and date of creation — invaluable in plagiarism disputes.',
      keyPoints: [
        'Literary work registration for manuscripts and books',
        'Author + publisher rights clarity',
        'ISBN coordination not required for registration',
        'Translation and adaptation rights advisory',
      ],
      process: [
        { title: 'Manuscript Submission', desc: 'Two copies of the manuscript or e-book file.' },
        { title: 'Filing', desc: 'Form XIV under literary work with author / owner details and any publisher NOC.' },
        { title: 'Registration', desc: 'Certificate issued in author / publisher name as agreed.' },
      ],
      faqs: [
        { q: 'Should I register before or after publication?', a: 'Either is fine. Pre-publication registration locks in priority and dates of authorship cleanly.' },
        { q: 'Does copyright cover ideas in the book?', a: 'No — copyright protects expression, not the underlying idea, theme or fact.' },
      ],
    },
    'literature-dramatic': {
      title: 'Literature / Dramatic Copyright',
      description:
        'Protect plays, screenplays, scripts, choreographic works and dramatic compositions as separate "dramatic works" under the Act.',
      overview:
        'Dramatic works include plays, screenplays, mime, choreography and dumbshows. They are distinct from literary works and have specific licensing implications for stage productions, films and adaptations.',
      keyPoints: [
        'Dramatic work classification advisory',
        'Screenplay / script registration',
        'Choreography registration with notation or recording',
        'Stage and adaptation rights documentation',
      ],
      process: [
        { title: 'Work Classification', desc: 'Confirm dramatic vs literary classification — relevant for licensing.' },
        { title: 'Filing', desc: 'Form XIV under dramatic work with two copies and NOCs from joint authors.' },
        { title: 'Registration', desc: 'Certificate issued; basis for stage production licenses and film options.' },
      ],
      faqs: [
        { q: 'Is a screenplay literary or dramatic?', a: 'Under Indian law, screenplays are typically classified as dramatic works.' },
        { q: 'Can choreography be copyrighted?', a: 'Yes — when fixed in tangible form (notation, video) it qualifies as a dramatic work.' },
      ],
    },
    'e-symbol': {
      title: 'E-Symbol Copyright',
      description:
        'Register electronic / digital symbols, emojis, icons and UI graphical elements as artistic works.',
      overview:
        'Custom UI elements, app icons, emoji designs and digital symbols qualify as artistic works under the Copyright Act. Registration is critical for SaaS, app and digital-product businesses to protect brand-distinctive design language.',
      keyPoints: [
        'Digital icon and symbol registration',
        'App / UI design library protection',
        'Coordinated with trademark for visible app marks',
        'Litigation-ready artistic-work proof',
      ],
      process: [
        { title: 'Asset Inventory', desc: 'List icons, emojis and symbols to be registered; group as a series where appropriate.' },
        { title: 'Filing', desc: 'Form XIV — artistic work with high-resolution digital files.' },
        { title: 'Registration', desc: 'Certificate issued; integrate with trademark portfolio.' },
      ],
      faqs: [
        { q: 'Can I register a set of icons together?', a: 'Yes — series of related artistic works can be filed as a single application where they form a coherent set.' },
      ],
    },
  },

  patent: {
    'complete-registration': {
      title: 'Patent Complete Registration',
      description:
        'File a complete patent specification with claims to obtain a 20-year exclusive monopoly over your invention in India.',
      overview:
        'A complete specification fully discloses the invention with claims defining the scope of protection. Once granted (after examination and any opposition), the patent grants a 20-year exclusive right from the priority date.',
      keyPoints: [
        'Patentability search and freedom-to-operate opinion',
        'Drafting specification with claims, drawings and abstract',
        'Filing Form 1, 2, 3, 5 and required forms',
        'Request for examination (Form 18) within 48 months',
        'Pre-grant opposition handling',
        'Grant and 20-year term',
      ],
      process: [
        { title: 'Patentability Search', desc: 'Prior-art search to assess novelty and inventive step.' },
        { title: 'Specification Drafting', desc: 'Detailed description, drawings, claims and abstract.' },
        { title: 'Filing', desc: 'File Form 1, complete specification (Form 2), declarations and statements.' },
        { title: 'Examination Request', desc: 'File Form 18 within 48 months; respond to FER within 6 months.' },
        { title: 'Grant', desc: 'On overcoming objections and pre-grant opposition (if any), patent is granted.' },
      ],
      documents: [
        'Detailed description of invention with drawings',
        'Claims defining scope of protection',
        'Inventor declaration (Form 5)',
        'Statement of working (Form 27, post-grant)',
        'Priority document (if claiming Convention priority)',
        'POA in Form 26',
      ],
      faqs: [
        { q: 'How long does patent grant take?', a: 'Typically 3–5 years from filing, depending on examination queue and FER complexity.' },
        { q: 'How long is patent valid?', a: '20 years from the date of filing, subject to annual renewal fees from the 3rd year onwards.' },
        { q: 'What is not patentable in India?', a: 'Section 3 lists non-patentable subjects — discoveries, mere arrangement, mathematical methods, business methods, computer programs per se, plants and animals, methods of medical treatment.' },
      ],
    },
    'provisional-registration': {
      title: 'Patent Provisional Registration',
      description:
        'Lock in your priority date with a provisional specification while you finalize the complete specification within 12 months.',
      overview:
        'A provisional specification establishes the earliest filing (priority) date for an invention that is still under development. Within 12 months, a complete specification must be filed — failing which the application is deemed abandoned. The provisional protects you against intervening third-party filings.',
      keyPoints: [
        'Early priority date secured at lower initial cost',
        '12-month window to perfect the invention and file complete specification',
        'Cannot be granted as a patent — must be converted',
        'Useful for pre-publication, demos and investor pitches',
      ],
      process: [
        { title: 'Drafting', desc: 'Draft a provisional specification disclosing the invention substantively.' },
        { title: 'Filing', desc: 'File Form 1 + Form 2 (provisional) with prescribed fees.' },
        { title: 'Complete Specification', desc: 'Within 12 months, file complete specification claiming priority — non-extendible.' },
      ],
      faqs: [
        { q: 'Can I claim international priority from provisional?', a: 'Yes — under Paris Convention / PCT, the provisional date can serve as priority for foreign filings within 12 months.' },
        { q: 'What if I miss the 12-month deadline?', a: 'The application is deemed abandoned. There is limited scope to convert via post-dating but generally fresh filing is required.' },
      ],
    },
  },
};
