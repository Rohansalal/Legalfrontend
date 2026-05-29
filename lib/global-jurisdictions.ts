/**
 * Global Business — jurisdiction content model.
 *
 * Single source of truth for the Global Business mega-menu, the region landing
 * pages, and the per-jurisdiction company-formation pages. Content is modelled
 * on the companyvista.com page structure (entity types → benefits → process →
 * requirements → what's included → FAQ).
 *
 * Generic sections (process, what's included, base requirements, fallback FAQs)
 * live at the region level so individual jurisdictions only carry what is
 * genuinely specific to them (entity types, selling points, timeline, notes).
 */

export type RegionKey =
  | 'americas'
  | 'europe'
  | 'asia-pacific'
  | 'middle-east'
  | 'offshore';

export interface Entity {
  /** Short label, e.g. "LLC" */
  name: string;
  /** Expanded name, e.g. "Limited Liability Company" */
  full?: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Jurisdiction {
  slug: string;
  name: string;
  /** Flag emoji used as a lightweight visual marker. */
  flag: string;
  region: RegionKey;
  /** Sub-group within a region (used for UAE free zones vs mainland). */
  group?: 'freezones' | 'mainland';
  /** Shown under the H1. */
  tagline: string;
  /** Headline turnaround, e.g. "7–14 business days". */
  timeline: string;
  /** Entity / licence types available in this jurisdiction. */
  entities: Entity[];
  /** 3–4 jurisdiction-specific selling points ("Why <country>"). */
  highlights: string[];
  /** Extra documents/requirements beyond the region defaults. */
  requirements?: string[];
  /** Jurisdiction-specific FAQs (fall back to region FAQs when omitted). */
  faqs?: Faq[];
}

export interface Region {
  key: RegionKey;
  name: string;
  slug: RegionKey;
  /** lucide-react icon name, resolved in the page component. */
  icon: string;
  /** Short menu/landing description. */
  blurb: string;
  /** Longer intro paragraph for the region landing page. */
  intro: string;
  /** General benefits of incorporating in the region. */
  benefits: Benefit[];
  /** Fallback FAQs used when a jurisdiction has none of its own. */
  faqs: Faq[];
}

/* ─── Shared sections ──────────────────────────────────────────────────── */

export const FORMATION_PROCESS: ProcessStep[] = [
  {
    title: 'Consultation & Structure',
    description:
      'We review your goals and recommend the right entity type, jurisdiction and ownership structure for your business.',
  },
  {
    title: 'Name Reservation',
    description:
      'We check availability and reserve your company name in line with local naming rules and trademark checks.',
  },
  {
    title: 'Document Preparation',
    description:
      'We draft and collate the incorporation documents — KYC, constitution/articles, registers and forms — for accurate filing.',
  },
  {
    title: 'Registration & Tax Setup',
    description:
      'We file with the authorities, obtain your certificate of incorporation and register for the relevant tax IDs.',
  },
  {
    title: 'Banking & Compliance',
    description:
      'We assist with corporate bank account opening and set you up for ongoing filings, renewals and compliance.',
  },
];

export const WHATS_INCLUDED: string[] = [
  'Company name check & reservation',
  'Preparation & filing of incorporation documents',
  'Certificate of incorporation',
  'Registered office / registered agent (where required)',
  'Tax / company identification number',
  'Corporate bank account assistance',
  'Dedicated formation specialist',
  'Compliance & renewal reminders',
];

export const BASE_REQUIREMENTS: string[] = [
  'Valid passport copy for each shareholder / director',
  'Proof of residential address (utility bill or bank statement)',
  'Completed KYC form & business background details',
  'Proposed company name & main business activity',
];

/* ─── Regions ──────────────────────────────────────────────────────────── */

export const REGIONS: Region[] = [
  {
    key: 'americas',
    name: 'Americas',
    slug: 'americas',
    icon: 'Globe',
    blurb: 'USA, Canada, Mexico & Latin American / Caribbean structures.',
    intro:
      'Establish your business presence across North, Central and South America — from a US LLC or C-Corp to tax-efficient Caribbean IBCs — with expert guidance on the optimal structure for your goals.',
    benefits: [
      { title: 'Access to Major Markets', description: 'Direct access to the United States and fast-growing Latin American consumer markets.' },
      { title: 'Global Credibility', description: 'A registered company in the Americas adds instant recognition and trust with clients and investors.' },
      { title: 'Flexible Structures', description: 'Choose from LLCs, corporations, IBCs and partnerships to match your tax and liability needs.' },
      { title: 'Investor & Banking Access', description: 'Easier access to venture capital, payment processors and international banking.' },
    ],
    faqs: [
      { q: 'Can a non-resident register a company in the Americas?', a: 'Yes. Most jurisdictions allow 100% foreign ownership and do not require you to be a resident or citizen to own or direct the company.' },
      { q: 'Do I need to travel to incorporate?', a: 'No. The entire formation process can be completed remotely with scanned documents and electronic signatures.' },
      { q: 'How long does formation take?', a: 'Most entities are formed within 5–14 business days depending on the jurisdiction and state.' },
    ],
  },
  {
    key: 'europe',
    name: 'Europe',
    slug: 'europe',
    icon: 'Landmark',
    blurb: 'UK, Germany, Switzerland, Netherlands, Estonia & more.',
    intro:
      'Set up in Europe to access the single market, world-class banking and strong legal protection — whether you need a UK Ltd, a German GmbH, a Dutch BV or a fully digital Estonian company.',
    benefits: [
      { title: 'Single Market Access', description: 'Trade across the EU/EEA and beyond from a respected European base.' },
      { title: 'Strong Legal Framework', description: 'Stable, transparent regulation and robust protection for shareholders and IP.' },
      { title: 'Banking & Fintech', description: 'Access to mature banking, EMIs and payment infrastructure across the continent.' },
      { title: 'Tax Treaty Network', description: 'Extensive double-tax treaty networks reduce withholding and double taxation.' },
    ],
    faqs: [
      { q: 'Which European country is best for a startup?', a: 'It depends on your model — the UK and Estonia are popular for fast, low-cost digital setups, while the Netherlands and Germany suit trading and holding structures. We advise based on your goals.' },
      { q: 'Can I incorporate remotely in Europe?', a: 'Yes for many jurisdictions (e.g. UK, Estonia). Some, such as Germany and Switzerland, may require notarisation, which we help arrange.' },
      { q: 'Do I need a local director?', a: 'Most countries do not require a resident director, though a local registered office or address is usually needed.' },
    ],
  },
  {
    key: 'asia-pacific',
    name: 'Asia-Pacific',
    slug: 'asia-pacific',
    icon: 'Building2',
    blurb: 'Singapore, Hong Kong, India, Australia & Southeast Asia.',
    intro:
      'Tap into the world’s fastest-growing region. From Singapore and Hong Kong holding companies to operating entities in India, Australia and across ASEAN — we handle formation, compliance and banking end to end.',
    benefits: [
      { title: 'Gateway to Growth Markets', description: 'A base in Asia-Pacific connects you to the largest and fastest-growing economies in the world.' },
      { title: 'Competitive Tax Regimes', description: 'Low headline rates and territorial taxation in hubs like Singapore and Hong Kong.' },
      { title: 'Business-Friendly Setup', description: 'Streamlined, largely online incorporation in leading jurisdictions.' },
      { title: 'Trade & Logistics Hub', description: 'Proximity to major manufacturing, shipping and supply-chain networks.' },
    ],
    faqs: [
      { q: 'Is Singapore or Hong Kong better for a holding company?', a: 'Both are excellent. Singapore offers a strong treaty network and substance options; Hong Kong offers simple territorial taxation and access to mainland China. We help you choose.' },
      { q: 'Can foreigners own 100% of the company?', a: 'Yes in most APAC hubs, including Singapore, Hong Kong and Australia. Some sectors and countries have local shareholding rules we will flag in advance.' },
      { q: 'Is a local director required?', a: 'Some jurisdictions (e.g. Singapore, Australia) require at least one resident director — we can provide a qualified nominee director service.' },
    ],
  },
  {
    key: 'middle-east',
    name: 'Middle East',
    slug: 'middle-east',
    icon: 'Briefcase',
    blurb: 'UAE free zones (IFZA, RAKEZ, ADGM, DIFC) & GCC mainland.',
    intro:
      'Launch in the UAE and wider GCC with 0% personal income tax, 100% foreign ownership and world-class infrastructure — across cost-effective free zones and full-access mainland licences.',
    benefits: [
      { title: '0% Personal Income Tax', description: 'No personal income tax and highly competitive corporate tax in the UAE and GCC.' },
      { title: '100% Foreign Ownership', description: 'Own your company outright in free zones — and now most mainland activities too.' },
      { title: 'Strategic Location', description: 'A bridge between Europe, Asia and Africa with world-class logistics and connectivity.' },
      { title: 'Residency Visas', description: 'Company formation can unlock investor and employee residence visas for you and your team.' },
    ],
    faqs: [
      { q: 'Free zone or mainland — which should I choose?', a: 'Free zones are ideal for 100% ownership, lower cost and international trade; mainland is best if you need to trade directly within the UAE market or bid for government contracts. We match the licence to your activity.' },
      { q: 'Do I need a physical office?', a: 'Many free zones allow flexi-desk or virtual office options, while mainland licences may require physical space depending on activity.' },
      { q: 'Is corporate tax applicable?', a: 'The UAE applies a 9% corporate tax above a profit threshold, with qualifying free-zone income potentially at 0%. We advise on your specific situation.' },
    ],
  },
  {
    key: 'offshore',
    name: 'Offshore',
    slug: 'offshore',
    icon: 'ShieldCheck',
    blurb: 'BVI, Cayman, Mauritius, Seychelles & Caribbean IBCs.',
    intro:
      'Tax-neutral, privacy-focused structures for holding, investment and international trade — formed in the world’s most reputable offshore financial centres with strong legal frameworks.',
    benefits: [
      { title: 'Tax Neutrality', description: 'Zero or near-zero corporate, capital gains and withholding tax in leading offshore centres.' },
      { title: 'Confidentiality', description: 'Strong privacy protections for beneficial owners within compliant, well-regulated frameworks.' },
      { title: 'Asset Protection', description: 'Robust legal structures favoured for holding companies, funds and family offices.' },
      { title: 'Fast & Flexible', description: 'Quick incorporation, minimal local presence requirements and flexible governance.' },
    ],
    faqs: [
      { q: 'Are offshore companies legal?', a: 'Yes. Offshore companies are entirely legal structuring tools when used transparently and reported correctly in line with your home-country tax obligations.' },
      { q: 'Which offshore jurisdiction is best?', a: 'BVI and Cayman are top choices for funds and holding; Seychelles and Mauritius are popular for cost-effective trading and treaty access. We recommend based on your use case.' },
      { q: 'Do offshore companies need to file accounts?', a: 'Requirements vary, but most now require basic record-keeping and, where applicable, economic substance compliance. We manage this for you.' },
    ],
  },
];

export function getRegion(key: string): Region | undefined {
  return REGIONS.find((r) => r.slug === key);
}

/* ─── Jurisdictions ────────────────────────────────────────────────────── */

export const JURISDICTIONS: Jurisdiction[] = [
  /* ── Americas ─────────────────────────────────────────────────────────── */
  {
    slug: 'usa', name: 'United States', flag: '🇺🇸', region: 'americas',
    tagline: 'Form a US LLC or Corporation and access the world’s largest market — 100% remotely.',
    timeline: '7–14 business days',
    entities: [
      { name: 'LLC', full: 'Limited Liability Company', description: 'Flexible management and pass-through taxation with full liability protection — the most popular choice for founders.' },
      { name: 'C-Corp', full: 'C Corporation', description: 'Standard corporation for startups raising venture capital or planning an IPO; can issue multiple share classes.' },
      { name: 'S-Corp', full: 'S Corporation', description: 'Pass-through taxation for eligible US-owned businesses, avoiding corporate double taxation.' },
      { name: 'Non-Profit', full: '501(c)(3) Organization', description: 'Tax-exempt structure for charitable, educational and healthcare missions.' },
    ],
    highlights: [
      'Access to the world’s largest consumer market and capital pool',
      'No US residency required — foreigners can own and direct the company',
      'Delaware, Wyoming & Nevada offer fast, founder-friendly incorporation',
      'Stripe, PayPal and US banking access for global payments',
    ],
    requirements: ['US registered agent (included)', 'EIN from the IRS (we obtain this for you)'],
    faqs: [
      { q: 'Which state should I incorporate in?', a: 'Delaware is preferred by startups and investors; Wyoming and Nevada are popular for low fees and privacy. We recommend based on your business.' },
      { q: 'Do I need an SSN to form a US company?', a: 'No. Non-residents do not need an SSN — we obtain an EIN (federal tax ID) for your company directly from the IRS.' },
      { q: 'Can I open a US bank account remotely?', a: 'Yes. We work with fintech and banking partners that allow non-resident founders to open USD business accounts.' },
    ],
  },
  {
    slug: 'canada', name: 'Canada', flag: '🇨🇦', region: 'americas',
    tagline: 'Incorporate federally or provincially and operate in a stable, AAA-rated economy.',
    timeline: '5–10 business days',
    entities: [
      { name: 'Federal Corporation', description: 'Incorporate under the CBCA to operate and protect your name across all provinces.' },
      { name: 'Provincial Corporation', description: 'Incorporate in a single province (e.g. Ontario, BC) for local operations.' },
      { name: 'LLP', full: 'Limited Liability Partnership', description: 'Used by professionals and partnerships seeking liability protection.' },
    ],
    highlights: [
      'Stable, highly-rated economy with strong banking',
      'Gateway to the USMCA / North American market',
      'Attractive R&D and startup incentives (SR&ED)',
      'Strong international reputation and treaty network',
    ],
  },
  {
    slug: 'mexico', name: 'Mexico', flag: '🇲🇽', region: 'americas',
    tagline: 'Set up an S. de R.L. or S.A. and tap into Latin America’s second-largest economy.',
    timeline: '2–4 weeks',
    entities: [
      { name: 'S. de R.L.', full: 'Sociedad de Responsabilidad Limitada', description: 'LLC-equivalent with limited liability — ideal for SMEs and foreign subsidiaries.' },
      { name: 'S.A.', full: 'Sociedad Anónima', description: 'Corporation structure suited to larger businesses and capital raising.' },
      { name: 'S.A.P.I.', full: 'S.A. Promotora de Inversión', description: 'Investment-friendly corporation favoured by startups and VC-backed companies.' },
    ],
    highlights: [
      'USMCA access and nearshoring manufacturing hub',
      'Large domestic consumer market',
      'Competitive labour and operating costs',
      'Strong trade links across the Americas',
    ],
  },
  {
    slug: 'panama', name: 'Panama', flag: '🇵🇦', region: 'americas',
    tagline: 'Use Panama’s territorial tax system for international business and holding structures.',
    timeline: '5–10 business days',
    entities: [
      { name: 'S.A.', full: 'Sociedad Anónima', description: 'Popular corporation for international business, trading and holding companies.' },
      { name: 'IBC', full: 'International Business Corporation', description: 'Tax-efficient offshore structure for global operations.' },
      { name: 'Foundation', full: 'Private Interest Foundation', description: 'Used for asset protection, estate planning and wealth structuring.' },
    ],
    highlights: [
      'Territorial taxation — foreign-sourced income is not taxed',
      'US dollar economy and major financial centre',
      'Strong privacy and asset-protection framework',
      'Strategic logistics hub via the Panama Canal',
    ],
  },
  {
    slug: 'belize', name: 'Belize', flag: '🇧🇿', region: 'americas',
    tagline: 'Fast, cost-effective IBCs and LLCs for international trade and investment.',
    timeline: '2–5 business days',
    entities: [
      { name: 'IBC', full: 'International Business Company', description: 'Widely used, low-cost structure for international trade and investment.' },
      { name: 'LLC', full: 'Limited Liability Company', description: 'Flexible members-managed structure with strong asset protection.' },
    ],
    highlights: [
      'Quick, affordable incorporation',
      'No minimum capital requirement',
      'English-speaking, common-law jurisdiction',
      'Strong confidentiality framework',
    ],
  },
  {
    slug: 'barbados', name: 'Barbados', flag: '🇧🇧', region: 'americas',
    tagline: 'A reputable, treaty-rich Caribbean base for international business.',
    timeline: '1–3 weeks',
    entities: [
      { name: 'IBC', full: 'International Business Company', description: 'Favoured for international business, e-commerce and services.' },
      { name: 'SRL', full: 'Society with Restricted Liability', description: 'Flexible LLC-style entity popular for cross-border structuring.' },
      { name: 'Regular Company', description: 'Standard resident company for local and international operations.' },
    ],
    highlights: [
      'Extensive double-taxation treaty network',
      'Reputable, well-regulated jurisdiction',
      'Low corporate tax rates',
      'Strong professional services infrastructure',
    ],
  },
  {
    slug: 'dominica', name: 'Dominica', flag: '🇩🇲', region: 'americas',
    tagline: 'Affordable IBCs for international business structuring in the Caribbean.',
    timeline: '3–7 business days',
    entities: [
      { name: 'IBC', full: 'International Business Company', description: 'Popular, low-cost structure for international business and asset holding.' },
      { name: 'LLC', full: 'Limited Liability Company', description: 'Flexible structure with limited liability for members.' },
    ],
    highlights: [
      'Low-cost, fast incorporation',
      'Strong confidentiality protections',
      'No tax on foreign-sourced income',
      'English-speaking common-law system',
    ],
  },
  {
    slug: 'chile', name: 'Chile', flag: '🇨🇱', region: 'americas',
    tagline: 'Form an SpA and access one of Latin America’s most stable economies.',
    timeline: '1–3 weeks',
    entities: [
      { name: 'SpA', full: 'Sociedad por Acciones', description: 'Flexible corporation favoured by startups and investors — single shareholder allowed.' },
      { name: 'SRL', full: 'Sociedad de Responsabilidad Limitada', description: 'Limited liability company suited to SMEs.' },
      { name: 'S.A.', full: 'Sociedad Anónima', description: 'Corporation structure for larger companies and capital raising.' },
    ],
    highlights: [
      'One of Latin America’s most stable, open economies',
      'Startup-friendly SpA structure',
      'Strong treaty network and trade agreements',
      'Gateway to the wider Latin American market',
    ],
  },

  /* ── Europe ───────────────────────────────────────────────────────────── */
  {
    slug: 'uk', name: 'United Kingdom', flag: '🇬🇧', region: 'europe',
    tagline: 'Form a UK Ltd in days — a trusted, low-cost gateway to global business.',
    timeline: '1–3 business days',
    entities: [
      { name: 'Ltd', full: 'Private Limited Company', description: 'The standard UK company — fast, low-cost and globally respected.' },
      { name: 'LLP', full: 'Limited Liability Partnership', description: 'Partnership with limited liability, popular with professional firms.' },
      { name: 'PLC', full: 'Public Limited Company', description: 'For larger businesses that intend to offer shares to the public.' },
    ],
    highlights: [
      'Incorporate in as little as 24 hours',
      'Globally trusted "Ltd" status',
      'No residency requirement for directors',
      'Access to UK banking and fintech',
    ],
  },
  {
    slug: 'germany', name: 'Germany', flag: '🇩🇪', region: 'europe',
    tagline: 'Establish a GmbH or UG at the heart of the European single market.',
    timeline: '2–4 weeks',
    entities: [
      { name: 'GmbH', full: 'Gesellschaft mit beschränkter Haftung', description: 'Germany’s standard limited liability company (€25,000 capital).' },
      { name: 'UG', full: 'Unternehmergesellschaft', description: '"Mini-GmbH" that can be started with €1 capital — ideal for startups.' },
      { name: 'AG', full: 'Aktiengesellschaft', description: 'Stock corporation for larger businesses and public listings.' },
    ],
    highlights: [
      'Europe’s largest economy and consumer market',
      'Strong engineering, manufacturing and tech ecosystem',
      'Highly credible base for EU operations',
      'Access to EU funding and grants',
    ],
    requirements: ['Notarised incorporation (we coordinate the notary)'],
  },
  {
    slug: 'switzerland', name: 'Switzerland', flag: '🇨🇭', region: 'europe',
    tagline: 'Form a GmbH or AG in a premier, stable financial jurisdiction.',
    timeline: '2–4 weeks',
    entities: [
      { name: 'GmbH', full: 'Gesellschaft mit beschränkter Haftung', description: 'Limited liability company (CHF 20,000 capital) for SMEs.' },
      { name: 'AG', full: 'Aktiengesellschaft', description: 'Stock corporation (CHF 100,000 capital) for larger and holding companies.' },
    ],
    highlights: [
      'World-leading financial and banking centre',
      'Political and economic stability',
      'Attractive cantonal tax regimes',
      'Strong reputation for holding and IP structures',
    ],
  },
  {
    slug: 'netherlands', name: 'Netherlands', flag: '🇳🇱', region: 'europe',
    tagline: 'Set up a Dutch BV — a leading hub for trade and holding companies.',
    timeline: '1–2 weeks',
    entities: [
      { name: 'BV', full: 'Besloten Vennootschap', description: 'Private limited company — the standard, flexible Dutch entity.' },
      { name: 'NV', full: 'Naamloze Vennootschap', description: 'Public limited company for larger businesses and listings.' },
    ],
    highlights: [
      'Premier EU logistics and trade gateway',
      'Excellent participation-exemption holding regime',
      'Extensive double-tax treaty network',
      'English widely used in business and banking',
    ],
  },
  {
    slug: 'estonia', name: 'Estonia', flag: '🇪🇪', region: 'europe',
    tagline: 'Launch a fully digital EU company via e-Residency — 100% online.',
    timeline: '1–5 business days',
    entities: [
      { name: 'OÜ', full: 'Osaühing (Private Limited Company)', description: 'Estonia’s digital-first limited company — manage everything online.' },
      { name: 'AS', full: 'Aktsiaselts', description: 'Public limited company for larger ventures.' },
    ],
    highlights: [
      'World-leading e-Residency digital company management',
      '0% tax on reinvested (undistributed) profits',
      'Fully remote incorporation and administration',
      'Trusted EU jurisdiction for digital businesses',
    ],
  },
  {
    slug: 'poland', name: 'Poland', flag: '🇵🇱', region: 'europe',
    tagline: 'Form a Sp. z o.o. in one of the EU’s fastest-growing economies.',
    timeline: '1–3 weeks',
    entities: [
      { name: 'Sp. z o.o.', full: 'Spółka z ograniczoną odpowiedzialnością', description: 'Poland’s popular limited liability company (PLN 5,000 capital).' },
      { name: 'S.A.', full: 'Spółka Akcyjna', description: 'Joint-stock company for larger businesses and capital raising.' },
    ],
    highlights: [
      'One of the EU’s fastest-growing economies',
      'Competitive operating and labour costs',
      'Strong access to the EU single market',
      'Growing tech and outsourcing hub',
    ],
  },
  {
    slug: 'cyprus', name: 'Cyprus', flag: '🇨🇾', region: 'europe',
    tagline: 'A low-tax EU jurisdiction ideal for holding and trading companies.',
    timeline: '1–2 weeks',
    entities: [
      { name: 'Private Limited', full: 'Private Company Limited by Shares', description: 'The standard Cyprus company — popular for trading and services.' },
      { name: 'Holding Company', description: 'Tax-efficient holding structure leveraging Cyprus’s EU treaty network.' },
    ],
    highlights: [
      '12.5% corporate tax — among the lowest in the EU',
      'Strong holding-company and IP-box regimes',
      'Extensive double-tax treaty network',
      'English common-law based legal system',
    ],
  },
  {
    slug: 'georgia', name: 'Georgia', flag: '🇬🇪', region: 'europe',
    tagline: 'Low-tax, fast incorporation at the crossroads of Europe and Asia.',
    timeline: '1–3 business days',
    entities: [
      { name: 'LLC', full: 'Limited Liability Company', description: 'The most common, flexible structure for local and foreign businesses.' },
      { name: 'JSC', full: 'Joint Stock Company', description: 'For larger businesses and capital raising.' },
      { name: 'Free Zone Company', description: 'Entity in a Free Industrial Zone with significant tax exemptions.' },
    ],
    highlights: [
      'Very low taxes and easy compliance',
      'Fast, low-cost incorporation',
      'Strategic location between Europe and Asia',
      'Free Industrial Zones with tax exemptions',
    ],
  },

  /* ── Asia-Pacific ─────────────────────────────────────────────────────── */
  {
    slug: 'singapore', name: 'Singapore', flag: '🇸🇬', region: 'asia-pacific',
    tagline: 'Form a Pte Ltd in Asia’s premier business and financial hub.',
    timeline: '1–3 business days',
    entities: [
      { name: 'Pte Ltd', full: 'Private Limited Company', description: 'Singapore’s standard company — credible, tax-efficient and scalable.' },
      { name: 'Subsidiary', description: 'Locally incorporated subsidiary of a foreign parent company.' },
      { name: 'Branch', full: 'Branch Office', description: 'Extension of a foreign company registered to operate in Singapore.' },
    ],
    highlights: [
      'One of the world’s easiest places to do business',
      'Low, territorial corporate tax with startup exemptions',
      'Premier gateway to Asian markets',
      'World-class banking and legal system',
    ],
    requirements: ['At least one resident director (nominee director service available)'],
  },
  {
    slug: 'hongkong', name: 'Hong Kong', flag: '🇭🇰', region: 'asia-pacific',
    tagline: 'Set up a Hong Kong company with simple, territorial taxation.',
    timeline: '1–5 business days',
    entities: [
      { name: 'Private Limited', full: 'Private Company Limited by Shares', description: 'The standard, flexible Hong Kong company.' },
      { name: 'Branch', full: 'Branch Office', description: 'Registered presence for a foreign parent company.' },
    ],
    highlights: [
      'Territorial tax — foreign-sourced profits not taxed',
      'Gateway to mainland China',
      'Free flow of capital and world-class banking',
      'Simple, low-cost compliance',
    ],
  },
  {
    slug: 'thailand', name: 'Thailand', flag: '🇹🇭', region: 'asia-pacific',
    tagline: 'Establish a Thai Limited Company or BOI-promoted business.',
    timeline: '2–4 weeks',
    entities: [
      { name: 'Limited Company', full: 'Private Limited Company', description: 'The standard structure for doing business in Thailand.' },
      { name: 'BOI Company', description: 'Board of Investment-promoted company with foreign ownership and tax incentives.' },
    ],
    highlights: [
      'Strategic ASEAN manufacturing and tourism hub',
      'BOI incentives allow up to 100% foreign ownership',
      'Large domestic market and skilled workforce',
      'Competitive operating costs',
    ],
  },
  {
    slug: 'malaysia', name: 'Malaysia', flag: '🇲🇾', region: 'asia-pacific',
    tagline: 'Form an Sdn Bhd or a tax-efficient Labuan company.',
    timeline: '1–2 weeks',
    entities: [
      { name: 'Sdn Bhd', full: 'Sendirian Berhad', description: 'Malaysia’s private limited company — the standard local entity.' },
      { name: 'Labuan Company', description: 'Low-tax international company in the Labuan financial centre.' },
    ],
    highlights: [
      'Cost-effective ASEAN base',
      'Labuan offers a 3% / fixed low-tax regime',
      'Strong infrastructure and English usage',
      'Gateway to Southeast Asian markets',
    ],
  },
  {
    slug: 'india', name: 'India', flag: '🇮🇳', region: 'asia-pacific',
    tagline: 'Enter the world’s most populous market with a Private Limited or LLP.',
    timeline: '2–4 weeks',
    entities: [
      { name: 'Private Limited', full: 'Private Limited Company', description: 'The preferred structure for startups and foreign subsidiaries.' },
      { name: 'LLP', full: 'Limited Liability Partnership', description: 'Flexible partnership with limited liability and lighter compliance.' },
      { name: 'Subsidiary / Branch', description: 'Wholly-owned subsidiary or branch office of a foreign company.' },
    ],
    highlights: [
      'Access to the world’s most populous consumer market',
      'Fast-growing economy and digital ecosystem',
      'Large, skilled, English-speaking workforce',
      '100% FDI permitted in most sectors',
    ],
  },
  {
    slug: 'srilanka', name: 'Sri Lanka', flag: '🇱🇰', region: 'asia-pacific',
    tagline: 'Form a company in a strategic Indian Ocean trade location.',
    timeline: '1–3 weeks',
    entities: [
      { name: 'Private Limited', full: 'Private Limited Company', description: 'The standard structure for local and foreign-owned businesses.' },
      { name: 'BOI Company', description: 'Board of Investment company with incentives for qualifying investors.' },
    ],
    highlights: [
      'Strategic Indian Ocean shipping location',
      'BOI incentives for foreign investors',
      'Competitive labour costs',
      'Growing services and export sectors',
    ],
  },
  {
    slug: 'philippines', name: 'Philippines', flag: '🇵🇭', region: 'asia-pacific',
    tagline: 'Set up a corporation or OPC in a fast-growing ASEAN economy.',
    timeline: '2–4 weeks',
    entities: [
      { name: 'Domestic Corporation', description: 'Standard corporation for doing business in the Philippines.' },
      { name: 'OPC', full: 'One Person Corporation', description: 'Single-stockholder corporation with limited liability.' },
      { name: 'Branch', full: 'Branch Office', description: 'Registered presence for a foreign parent company.' },
    ],
    highlights: [
      'Large, young, English-speaking workforce',
      'Leading global BPO and outsourcing hub',
      'Fast-growing domestic consumer market',
      'PEZA incentives for qualifying export businesses',
    ],
  },
  {
    slug: 'australia', name: 'Australia', flag: '🇦🇺', region: 'asia-pacific',
    tagline: 'Form a Pty Ltd in a stable, high-income Asia-Pacific economy.',
    timeline: '2–5 business days',
    entities: [
      { name: 'Pty Ltd', full: 'Proprietary Limited Company', description: 'Australia’s standard private company structure.' },
      { name: 'Public Company', description: 'For larger businesses that may raise capital from the public.' },
    ],
    highlights: [
      'Stable, high-income, AAA-rated economy',
      'Gateway to Asia-Pacific markets',
      'Strong legal and banking systems',
      'Transparent, business-friendly regulation',
    ],
    requirements: ['At least one resident director (nominee director service available)'],
  },
  {
    slug: 'new-zealand', name: 'New Zealand', flag: '🇳🇿', region: 'asia-pacific',
    tagline: 'Incorporate quickly in one of the world’s easiest places to do business.',
    timeline: '1–3 business days',
    entities: [
      { name: 'Ltd', full: 'Limited Company', description: 'New Zealand’s standard, easy-to-run company structure.' },
    ],
    highlights: [
      'Consistently ranked easiest place to start a business',
      'Fast, fully online incorporation',
      'Stable economy and transparent regulation',
      'Strong international reputation',
    ],
    requirements: ['At least one director resident in NZ or Australia (nominee available)'],
  },

  /* ── Middle East — Free Zones ─────────────────────────────────────────── */
  {
    slug: 'shams', name: 'SHAMS Free Zone', flag: '🇦🇪', region: 'middle-east', group: 'freezones',
    tagline: 'Sharjah Media City — an affordable, fast UAE free-zone setup.',
    timeline: '2–4 business days',
    entities: [
      { name: 'FZ-LLC', full: 'Free Zone Limited Liability Company', description: 'Single or multi-shareholder free-zone company.' },
      { name: 'Professional Licence', description: 'For consultants, freelancers and service providers.' },
      { name: 'Trading Licence', description: 'For import, export and general trading activities.' },
    ],
    highlights: [
      'One of the UAE’s most affordable free zones',
      '100% foreign ownership and profit repatriation',
      '0% personal income tax',
      'Flexible packages with visa options',
    ],
  },
  {
    slug: 'ifza', name: 'IFZA', flag: '🇦🇪', region: 'middle-east', group: 'freezones',
    tagline: 'International Free Zone Authority, Dubai — cost-effective and fast.',
    timeline: '2–3 business days',
    entities: [
      { name: 'Professional', full: 'Professional Licence', description: 'For consultants and service professionals — legal, accounting, design, IT.' },
      { name: 'Trading', full: 'Commercial / Trading Licence', description: 'Import/export, wholesale, retail and e-commerce.' },
      { name: 'Industrial', full: 'Industrial Licence', description: 'Manufacturing, assembly, packaging and fabrication.' },
      { name: 'Service', full: 'Service Licence', description: 'Consultancy, marketing, IT and training services.' },
    ],
    highlights: [
      'One of Dubai’s most cost-effective free zones',
      '100% foreign ownership, no local sponsor',
      'Combine up to 3 business activities per licence',
      'Flexi-desk and virtual office options',
    ],
  },
  {
    slug: 'rakez', name: 'RAKEZ', flag: '🇦🇪', region: 'middle-east', group: 'freezones',
    tagline: 'Ras Al Khaimah Economic Zone — flexible free-zone and non-free-zone licences.',
    timeline: '3–5 business days',
    entities: [
      { name: 'FZ-LLC', full: 'Free Zone Company', description: '100% foreign-owned free-zone entity for trading, services and industry.' },
      { name: 'Industrial Licence', description: 'For manufacturing and industrial operations with low-cost facilities.' },
      { name: 'Educational / Media', description: 'Specialised licences for education, media and professional activities.' },
    ],
    highlights: [
      'Cost-competitive across trading, services and industry',
      'Access to low-cost warehousing and land',
      '100% foreign ownership and tax efficiency',
      'Strong manufacturing and industrial infrastructure',
    ],
  },
  {
    slug: 'spc', name: 'SPC Free Zone', flag: '🇦🇪', region: 'middle-east', group: 'freezones',
    tagline: 'Sharjah Publishing City — fast, flexible and budget-friendly.',
    timeline: '1–3 business days',
    entities: [
      { name: 'Commercial Licence', description: 'For trading and a wide range of commercial activities.' },
      { name: 'Professional Licence', description: 'For consultants, freelancers and service providers.' },
      { name: 'General Trading', description: 'Broad licence covering multiple trading activities.' },
    ],
    highlights: [
      'Same-day / next-day licence issuance available',
      'Hundreds of activities under one licence',
      '100% foreign ownership',
      'Affordable packages with visa eligibility',
    ],
  },
  {
    slug: 'meydan', name: 'Meydan Free Zone', flag: '🇦🇪', region: 'middle-east', group: 'freezones',
    tagline: 'A premium, central Dubai free zone with a prestigious address.',
    timeline: '2–4 business days',
    entities: [
      { name: 'Commercial Licence', description: 'Trading and commercial activities from a prime Dubai location.' },
      { name: 'Service / Professional', description: 'Consultancy and professional service activities.' },
      { name: 'E-Commerce Licence', description: 'Dedicated licence for online trading businesses.' },
    ],
    highlights: [
      'Prestigious central Dubai business address',
      '100% foreign ownership and 0% personal income tax',
      'Fast digital setup with flexi-desk options',
      'Strong banking and visa support',
    ],
  },
  {
    slug: 'adgm', name: 'ADGM', flag: '🇦🇪', region: 'middle-east', group: 'freezones',
    tagline: 'Abu Dhabi Global Market — a top-tier international financial centre.',
    timeline: '1–3 weeks',
    entities: [
      { name: 'Private Company Ltd', description: 'Standard ADGM company under English common law.' },
      { name: 'SPV', full: 'Special Purpose Vehicle', description: 'Holding and structuring vehicle for assets and investments.' },
      { name: 'Financial Firm', description: 'Regulated entity for asset management, fintech and financial services.' },
    ],
    highlights: [
      'English common-law jurisdiction with its own courts',
      'Premier hub for finance, fintech and asset management',
      'Highly credible for funds, SPVs and holding structures',
      '0% tax on qualifying activities',
    ],
  },
  {
    slug: 'difc', name: 'DIFC', flag: '🇦🇪', region: 'middle-east', group: 'freezones',
    tagline: 'Dubai International Financial Centre — the region’s leading financial hub.',
    timeline: '2–4 weeks',
    entities: [
      { name: 'Private Company Ltd', description: 'Standard DIFC company under English common law.' },
      { name: 'SPV / Holding', description: 'Holding and special-purpose vehicles for structuring.' },
      { name: 'Regulated Financial Firm', description: 'DFSA-regulated entity for banking, funds and financial services.' },
    ],
    highlights: [
      'The Middle East’s leading financial centre',
      'Independent English common-law courts',
      'Global hub for banking, funds and fintech',
      'Strong reputation with international banks',
    ],
  },

  /* ── Middle East — Mainland ───────────────────────────────────────────── */
  {
    slug: 'dubai-mainland', name: 'Dubai Mainland', flag: '🇦🇪', region: 'middle-east', group: 'mainland',
    tagline: 'Trade anywhere in the UAE with a Dubai (DED) mainland licence.',
    timeline: '3–7 business days',
    entities: [
      { name: 'LLC', full: 'Limited Liability Company', description: 'The standard mainland company — now with up to 100% foreign ownership for most activities.' },
      { name: 'Sole Establishment', description: 'Single-owner professional or service business.' },
      { name: 'Branch', full: 'Branch of a Foreign Company', description: 'Registered branch of an overseas parent company.' },
    ],
    highlights: [
      'Trade directly across the entire UAE market',
      '100% foreign ownership for most activities',
      'Eligible for UAE government contracts',
      'No restriction on number of visas (subject to space)',
    ],
  },
  {
    slug: 'abudhabi-mainland', name: 'Abu Dhabi Mainland', flag: '🇦🇪', region: 'middle-east', group: 'mainland',
    tagline: 'Set up in the UAE capital with full market access.',
    timeline: '3–7 business days',
    entities: [
      { name: 'LLC', full: 'Limited Liability Company', description: 'Standard Abu Dhabi mainland company with up to 100% foreign ownership for most activities.' },
      { name: 'Sole Establishment', description: 'Single-owner professional business.' },
      { name: 'Branch', description: 'Registered branch of a foreign or UAE company.' },
    ],
    highlights: [
      'Direct access to the UAE’s capital and its economy',
      '100% foreign ownership for most activities',
      'Eligible for government and oil & gas contracts',
      'Strong infrastructure and incentives',
    ],
  },
  {
    slug: 'qatar-mainland', name: 'Qatar Mainland', flag: '🇶🇦', region: 'middle-east', group: 'mainland',
    tagline: 'Enter the Qatari market via mainland or QFC structures.',
    timeline: '2–4 weeks',
    entities: [
      { name: 'LLC', full: 'Limited Liability Company', description: 'Standard Qatari company — up to 100% foreign ownership now permitted in many sectors.' },
      { name: 'QFC Entity', full: 'Qatar Financial Centre Entity', description: '100% foreign-owned company under the QFC’s English common-law framework.' },
    ],
    highlights: [
      'One of the world’s highest GDP-per-capita economies',
      'Up to 100% foreign ownership in many sectors',
      'QFC offers common-law structuring and 0% tax options',
      'Major infrastructure and energy opportunities',
    ],
  },
  {
    slug: 'bahrain-mainland', name: 'Bahrain Mainland', flag: '🇧🇭', region: 'middle-east', group: 'mainland',
    tagline: 'A cost-effective, open GCC base with 100% foreign ownership.',
    timeline: '1–3 weeks',
    entities: [
      { name: 'WLL', full: 'With Limited Liability Company', description: 'Bahrain’s standard limited liability company.' },
      { name: 'BSC', full: 'Bahrain Shareholding Company', description: 'Joint-stock company for larger businesses.' },
      { name: 'Branch', description: 'Registered branch of a foreign company.' },
    ],
    highlights: [
      '100% foreign ownership across most sectors',
      'Low setup and operating costs in the GCC',
      'Gateway to the Saudi market',
      'Well-established financial services sector',
    ],
  },

  /* ── Offshore ─────────────────────────────────────────────────────────── */
  {
    slug: 'british-virgin-islands', name: 'British Virgin Islands', flag: '🇻🇬', region: 'offshore',
    tagline: 'The world’s most popular offshore jurisdiction for BCs.',
    timeline: '2–5 business days',
    entities: [
      { name: 'BC', full: 'Business Company', description: 'The flagship BVI structure — flexible, tax-neutral and globally recognised.' },
      { name: 'SPV / Holding', description: 'Widely used for holding, joint ventures and investment structuring.' },
    ],
    highlights: [
      'The world’s leading offshore incorporation jurisdiction',
      '0% corporate, capital gains and withholding tax',
      'Strong privacy and flexible governance',
      'Globally recognised by banks and investors',
    ],
  },
  {
    slug: 'cayman-islands', name: 'Cayman Islands', flag: '🇰🇾', region: 'offshore',
    tagline: 'The premier jurisdiction for funds, holding and investment vehicles.',
    timeline: '7–10 business days',
    entities: [
      { name: 'Exempted Company', description: 'Zero-tax company for asset holding, funds and global trading; high privacy.' },
      { name: 'LLC', full: 'Limited Liability Company', description: 'Flexible member-managed structure for JVs, private equity and family offices.' },
    ],
    highlights: [
      '0% corporate, income and capital gains tax',
      'World-leading hub for investment funds',
      'Strong privacy and reputable regulation',
      'Trusted by global financial institutions',
    ],
  },
  {
    slug: 'mauritius', name: 'Mauritius', flag: '🇲🇺', region: 'offshore',
    tagline: 'A treaty-rich gateway for investment into Africa and Asia.',
    timeline: '1–3 weeks',
    entities: [
      { name: 'GBC', full: 'Global Business Company', description: 'Tax-resident company benefiting from Mauritius’s extensive treaty network.' },
      { name: 'Authorised Company', description: 'Non-resident company for international business outside Mauritius.' },
      { name: 'Domestic Company', description: 'Standard company for local and regional operations.' },
    ],
    highlights: [
      'Gateway for investment into Africa and India',
      'Extensive double-tax treaty network',
      'Low effective tax rates for GBCs',
      'Reputable, well-regulated financial centre',
    ],
  },
  {
    slug: 'seychelles', name: 'Seychelles', flag: '🇸🇨', region: 'offshore',
    tagline: 'Fast, low-cost IBCs for international trade and holding.',
    timeline: '1–3 business days',
    entities: [
      { name: 'IBC', full: 'International Business Company', description: 'Fast, low-cost, tax-neutral company for international business.' },
      { name: 'CSL', full: 'Special Licence Company', description: 'Treaty-access company for more substantial international structuring.' },
    ],
    highlights: [
      'Very fast and affordable incorporation',
      '0% tax on foreign-sourced income',
      'Strong confidentiality framework',
      'Flexible, minimal-reporting structures',
    ],
  },
  {
    slug: 'dominica', name: 'Dominica', flag: '🇩🇲', region: 'offshore',
    tagline: 'Affordable, confidential IBCs in the Caribbean.',
    timeline: '3–7 business days',
    entities: [
      { name: 'IBC', full: 'International Business Company', description: 'Low-cost, tax-neutral company for international business and holding.' },
    ],
    highlights: [
      'Low-cost, straightforward incorporation',
      'Strong confidentiality protections',
      'No tax on foreign-sourced income',
      'Stable, English-speaking common-law jurisdiction',
    ],
  },
  {
    slug: 'antigua-and-barbuda', name: 'Antigua & Barbuda', flag: '🇦🇬', region: 'offshore',
    tagline: 'A reputable Caribbean base for international business companies.',
    timeline: '3–7 business days',
    entities: [
      { name: 'IBC', full: 'International Business Company', description: 'Tax-neutral company for international trade, holding and investment.' },
    ],
    highlights: [
      'Reputable, well-regulated jurisdiction',
      '0% tax on foreign-sourced income',
      'Strong privacy and asset protection',
      'English-speaking common-law system',
    ],
  },
];

/* ─── Lookup helpers ───────────────────────────────────────────────────── */

/** Full URL path segments after /services/global-business for a jurisdiction. */
export function jurisdictionPath(j: Jurisdiction): string[] {
  return j.group ? [j.region, j.group, j.slug] : [j.region, j.slug];
}

/** Public href for a jurisdiction page. */
export function jurisdictionHref(j: Jurisdiction): string {
  return '/services/global-business/' + jurisdictionPath(j).join('/');
}

/** Public href for a region landing page. */
export function regionHref(key: RegionKey): string {
  return '/services/global-business/' + key;
}

/** Resolve a jurisdiction from catch-all slug segments. */
export function findJurisdiction(slug: string[]): Jurisdiction | undefined {
  const path = slug.join('/');
  return JURISDICTIONS.find((j) => jurisdictionPath(j).join('/') === path);
}

/** All jurisdictions in a region (optionally filtered by group). */
export function jurisdictionsByRegion(
  key: RegionKey,
  group?: 'freezones' | 'mainland',
): Jurisdiction[] {
  return JURISDICTIONS.filter(
    (j) => j.region === key && (group ? j.group === group : true),
  );
}
