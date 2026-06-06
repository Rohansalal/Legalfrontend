/**
 * Shared blog data — single source of truth for the homepage Legal Insights
 * section, the /blog journal page and the /blog/[slug] article pages.
 */

export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string;
};

/** A single block of article body content. */
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** Human-readable display date, e.g. "May 28, 2026". */
  date: string;
  readTime: string;
  category: string;
  author: BlogAuthor;
  image: string;
  /** Article body, rendered in order on /blog/[slug]. */
  content: ContentBlock[];
  /** Exactly one post should be flagged featured (used as the lead story). */
  featured?: boolean;
};

const img = (id: string, w = 1100) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const AUTHORS = {
  rajesh: { name: 'CA Rajesh Khanna', role: 'Partner — Corporate', avatar: 'https://i.pravatar.cc/100?u=rajesh' },
  meera: { name: 'CA Meera Deshmukh', role: 'Tax Lead', avatar: 'https://i.pravatar.cc/100?u=meera' },
  priya: { name: 'Adv. Priya Nair', role: 'IPR Counsel', avatar: 'https://i.pravatar.cc/100?u=priya' },
  vikram: { name: 'Adv. Vikram Sethi', role: 'Sr. Litigator', avatar: 'https://i.pravatar.cc/100?u=vikram' },
  amit: { name: 'Adv. Amit Verma', role: 'Real Estate', avatar: 'https://i.pravatar.cc/100?u=amit' },
  anjali: { name: 'CS Anjali Rao', role: 'Company Secretary', avatar: 'https://i.pravatar.cc/100?u=anjali' },
} satisfies Record<string, BlogAuthor>;

export const blogPosts: BlogPost[] = [
  {
    slug: 'private-limited-vs-llp-2026',
    title: 'Private Limited vs LLP: Choosing the Right Structure for Your Business in 2026',
    excerpt:
      'Tax efficiency, compliance load, fundraising potential and liability — a side-by-side breakdown to help founders pick the entity that fits their growth plans.',
    date: 'May 28, 2026',
    readTime: '8 min read',
    category: 'Company Formation',
    author: AUTHORS.rajesh,
    image: img('1521791136064-7986c2920216'),
    featured: true,
    content: [
      { type: 'paragraph', text: 'Choosing between a Private Limited Company and a Limited Liability Partnership (LLP) is one of the first — and most consequential — decisions a founder makes. Both offer limited liability and a separate legal identity, but they differ sharply on compliance, taxation and the ability to raise capital.' },
      { type: 'heading', text: 'Liability & legal identity' },
      { type: 'paragraph', text: 'Both structures shield the personal assets of owners from business debts. A Private Limited Company is owned by shareholders and run by directors, while an LLP is owned and managed by its partners under an LLP agreement.' },
      { type: 'heading', text: 'Compliance load' },
      { type: 'paragraph', text: 'A Private Limited Company carries a heavier compliance burden — board meetings, statutory registers, annual ROC filings and, in many cases, a statutory audit regardless of turnover. An LLP has lighter ongoing requirements and only requires an audit once it crosses prescribed turnover or contribution thresholds.' },
      { type: 'heading', text: 'Raising capital' },
      { type: 'paragraph', text: 'If you plan to raise equity from angels or venture funds, a Private Limited Company is almost always the right choice — investors expect shares, ESOPs and a clean cap table. LLPs cannot issue equity, which makes external fundraising difficult.' },
      { type: 'heading', text: 'Which should you choose?' },
      { type: 'list', items: [
        'Choose a Private Limited Company if you plan to raise funding, issue ESOPs or scale aggressively.',
        'Choose an LLP for professional firms, family businesses or ventures that want lower compliance and pass-through simplicity.',
        'When in doubt, model your 3-year plan first — converting later is possible but costs time and fees.',
      ] },
      { type: 'paragraph', text: 'Our corporate team can model both options against your projected revenue, funding plans and compliance appetite, and handle the entire registration end to end.' },
    ],
  },
  {
    slug: 'gst-filing-2026-compliance-calendar',
    title: 'GST Filing in 2026: Updated Compliance Calendar & Penalties Explained',
    excerpt: 'Key due dates, late-fee structure and the changes every registered business must track this year.',
    date: 'May 22, 2026',
    readTime: '6 min read',
    category: 'Taxation',
    author: AUTHORS.meera,
    image: img('1450101499163-c8848c66ca85'),
    content: [
      { type: 'paragraph', text: 'GST compliance runs on a strict monthly and annual rhythm. Missing a return does not just attract late fees — it can block your input tax credit and, in repeated cases, lead to suspension of your registration.' },
      { type: 'heading', text: 'The core returns to track' },
      { type: 'list', items: [
        'GSTR-1 — outward supplies, filed monthly or quarterly under QRMP.',
        'GSTR-3B — summary return and tax payment, the most critical monthly filing.',
        'GSTR-9 / 9C — annual return and reconciliation for eligible taxpayers.',
      ] },
      { type: 'heading', text: 'Penalties for late filing' },
      { type: 'paragraph', text: 'Late fees accrue per day of delay for each return, subject to a cap, plus interest on any unpaid tax. The bigger cost is usually commercial: buyers may withhold payment if your filings do not reflect in their credit ledger.' },
      { type: 'heading', text: 'How to stay ahead' },
      { type: 'paragraph', text: 'Reconcile your books with the GST portal every month, not just at year-end. A simple internal calendar with reminders three days before each due date eliminates the vast majority of late filings.' },
    ],
  },
  {
    slug: 'trademark-protection-across-borders',
    title: 'Trademark Protection: Securing Your Brand Across 20+ Countries',
    excerpt: 'How the Madrid Protocol and a clear filing strategy keep your brand safe as you expand globally.',
    date: 'May 16, 2026',
    readTime: '7 min read',
    category: 'IP Law',
    author: AUTHORS.priya,
    image: img('1505664194779-8beaceb93744'),
    content: [
      { type: 'paragraph', text: 'A trademark is territorial: a registration in India protects you in India, not abroad. As soon as you sell, market or manufacture across borders, you need a deliberate international filing strategy.' },
      { type: 'heading', text: 'The Madrid Protocol' },
      { type: 'paragraph', text: 'The Madrid System lets you file a single international application, based on your home registration, and designate dozens of member countries. It is faster and cheaper than filing separately in each jurisdiction.' },
      { type: 'heading', text: 'Build a filing roadmap' },
      { type: 'list', items: [
        'Prioritise countries where you sell, manufacture or plan to expand within 2–3 years.',
        'Run clearance searches in each market before filing to avoid conflicts.',
        'Track renewal dates centrally — most marks renew every 10 years.',
      ] },
      { type: 'paragraph', text: 'A protected brand is an asset that compounds in value. Filing early, before disputes arise, is far cheaper than litigating an infringement abroad.' },
    ],
  },
  {
    slug: 'bns-bnss-bsa-new-criminal-codes',
    title: 'BNS, BNSS & BSA: What the New Criminal Codes Mean for You',
    excerpt: 'The 2023 codes replacing the IPC, CrPC and Evidence Act — and the practical changes that matter.',
    date: 'May 9, 2026',
    readTime: '9 min read',
    category: 'Criminal Law',
    author: AUTHORS.vikram,
    image: img('1589216532372-1c2a367900d9'),
    content: [
      { type: 'paragraph', text: 'India has overhauled its criminal justice framework. Three new codes — the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS) and Bharatiya Sakshya Adhiniyam (BSA) — now replace the Indian Penal Code, the Code of Criminal Procedure and the Indian Evidence Act respectively.' },
      { type: 'heading', text: 'What each code governs' },
      { type: 'list', items: [
        'BNS — defines offences and punishments (the former IPC).',
        'BNSS — procedure: arrest, investigation, bail and trial (the former CrPC).',
        'BSA — rules of evidence, including electronic and digital records (the former Evidence Act).',
      ] },
      { type: 'heading', text: 'Practical changes that matter' },
      { type: 'paragraph', text: 'The reforms emphasise time-bound investigation, expanded use of digital evidence and forensic procedure, and victim-centric provisions such as defined timelines for filing charge sheets. Section numbers have changed across the board, so older references must be remapped.' },
      { type: 'heading', text: 'If you are facing a matter' },
      { type: 'paragraph', text: 'The substance of many offences carries over, but the procedure and citations are new. Always work from the current code and section number — relying on the old IPC/CrPC references can cause avoidable errors.' },
    ],
  },
  {
    slug: 'rera-2026-compliance-guide',
    title: 'RERA 2026: A Compliance Guide for Property Buyers & Developers',
    excerpt: 'Registration thresholds, disclosure norms and dispute timelines under the latest RERA guidelines.',
    date: 'May 3, 2026',
    readTime: '6 min read',
    category: 'Property',
    author: AUTHORS.amit,
    image: img('1521587760476-6c12a4b040da'),
    content: [
      { type: 'paragraph', text: 'The Real Estate (Regulation and Development) Act brought transparency and accountability to a sector long marked by delays. Whether you are a buyer or a developer, understanding your rights and obligations under RERA is essential.' },
      { type: 'heading', text: 'For developers' },
      { type: 'list', items: [
        'Register qualifying projects before any advertising or sale.',
        'Maintain the prescribed share of buyer funds in a dedicated project escrow account.',
        'Disclose approvals, timelines and carpet area accurately on the RERA portal.',
      ] },
      { type: 'heading', text: 'For buyers' },
      { type: 'paragraph', text: 'Always verify a project’s RERA registration number before booking. The portal lets you check approvals, the promoter’s track record and the committed completion date — your strongest protection against delays and misrepresentation.' },
      { type: 'heading', text: 'Resolving disputes' },
      { type: 'paragraph', text: 'RERA provides a dedicated adjudication mechanism with defined timelines, generally faster than ordinary civil litigation. Complaints can seek refunds, interest for delay or completion of the project.' },
    ],
  },
  {
    slug: 'digital-contracts-esignatures-india',
    title: 'The Future of Digital Contracts & e-Signatures in India',
    excerpt: 'The legal validity of smart contracts and digital signatures, and how to use them safely in business.',
    date: 'Apr 26, 2026',
    readTime: '5 min read',
    category: 'Technology Law',
    author: AUTHORS.vikram,
    image: img('1454165804606-c3d57bc86b40'),
    content: [
      { type: 'paragraph', text: 'Electronic contracts and digital signatures are legally recognised in India under the Information Technology Act, and they are now the default for fast-moving businesses. Used correctly, they are as enforceable as paper.' },
      { type: 'heading', text: 'What makes an e-contract valid' },
      { type: 'list', items: [
        'Clear offer and acceptance, with a record of who agreed and when.',
        'A reliable signature method — Aadhaar e-Sign or a Digital Signature Certificate (DSC).',
        'A tamper-evident audit trail showing the document was not altered after signing.',
      ] },
      { type: 'heading', text: 'Where caution is needed' },
      { type: 'paragraph', text: 'Certain instruments — such as some property transfers and wills — still require traditional execution and registration. Confirm the requirement for your specific document type before going fully digital.' },
    ],
  },
  {
    slug: 'cross-border-ip-global-expansion',
    title: 'Navigating Cross-Border IP Protection for Global Expansion',
    excerpt: 'Key strategies for protecting your intellectual property when entering international markets.',
    date: 'Apr 19, 2026',
    readTime: '7 min read',
    category: 'Global Business',
    author: AUTHORS.priya,
    image: img('1589994965851-a8f479c573a9'),
    content: [
      { type: 'paragraph', text: 'Expanding abroad multiplies both opportunity and risk for your intellectual property. Trademarks, patents, designs and trade secrets each need a tailored, jurisdiction-aware strategy.' },
      { type: 'heading', text: 'Map your IP before you expand' },
      { type: 'paragraph', text: 'Audit what you own, who owns it, and where it is currently protected. Gaps in ownership or registration are far cheaper to fix before you enter a new market than after a dispute.' },
      { type: 'heading', text: 'Use international frameworks' },
      { type: 'list', items: [
        'Madrid Protocol for trademarks across member countries.',
        'Patent Cooperation Treaty (PCT) for a streamlined multi-country patent process.',
        'Hague System for industrial designs.',
      ] },
      { type: 'paragraph', text: 'Pair registrations with strong contracts — NDAs, assignment clauses and licensing terms — so your rights are enforceable in every market you operate in.' },
    ],
  },
  {
    slug: 'annual-roc-compliance-checklist',
    title: 'Annual ROC Compliance Checklist for Private Limited Companies',
    excerpt: 'Every filing, form and deadline a private company must meet each financial year to stay compliant.',
    date: 'Apr 12, 2026',
    readTime: '6 min read',
    category: 'Compliance',
    author: AUTHORS.anjali,
    image: img('1551836022-d5d88e9218df'),
    content: [
      { type: 'paragraph', text: 'Every Private Limited Company must meet a recurring set of Registrar of Companies (ROC) obligations each financial year — regardless of turnover or activity. Missing them attracts daily penalties and can disqualify directors.' },
      { type: 'heading', text: 'The annual essentials' },
      { type: 'list', items: [
        'AOC-4 — filing of audited financial statements.',
        'MGT-7 / 7A — annual return of the company.',
        'DIR-3 KYC — annual KYC for every director.',
        'Board and Annual General Meetings, with minutes and statutory registers maintained.',
      ] },
      { type: 'heading', text: 'Don’t forget event-based filings' },
      { type: 'paragraph', text: 'Changes in directors, registered office, share capital or charges trigger their own time-bound forms. These are separate from the annual cycle and are easy to overlook.' },
      { type: 'heading', text: 'Stay penalty-free' },
      { type: 'paragraph', text: 'A simple compliance calendar — owned by your company secretary or advisor — keeps every deadline visible and prevents the daily late fees that build up silently.' },
    ],
  },
];

/** The lead story (first post flagged featured, else the most recent). */
export const featuredPost: BlogPost = blogPosts.find((p) => p.featured) ?? blogPosts[0];

/** All posts except the featured lead, newest first (input order). */
export const recentPosts: BlogPost[] = blogPosts.filter((p) => p !== featuredPost);

/** Look up a single post by slug. */
export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Up to `limit` other posts, preferring the same category. */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = blogPosts.filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

/** Canonical link for a post. */
export function blogHref(post: BlogPost): string {
  return `/blog/${post.slug}`;
}
