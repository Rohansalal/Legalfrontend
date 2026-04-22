'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, Building2, Users } from 'lucide-react';

export default function JointVentureAgreementPage() {
  const data = {
    title: 'Joint Venture Agreement Drafting',
    description: 'Expert drafting of Joint Venture (JV) agreements for incorporated and contractual JVs in India. Covers capital contribution, profit sharing, governance, IP ownership, exit mechanism, liability, and dispute resolution.',
    heroBadges: ['Incorporated & Contractual JV', 'Profit Sharing & Exit Mechanism', 'Indian & Cross-Border JVs'],
    introTitle: 'What is a Joint Venture Agreement?',
    introContent: (
      <p>A joint venture (JV) agreement is a legal arrangement between two or more independent business entities that agree to collaborate on a specific project, business activity, or market entry while each retaining their separate legal identities. In India, joint ventures are a common structure for foreign companies entering the Indian market with a local partner, for large infrastructure and construction projects, for technology tie-ups between domestic companies, and for resource-sharing arrangements between complementary businesses. Indian joint ventures can take two primary forms: an incorporated joint venture (where a new company is formed under the Companies Act 2013 specifically for the JV, with both parties as shareholders) or a contractual joint venture (where parties collaborate under a contractual arrangement without forming a new legal entity, governed entirely by the JV agreement). The JV agreement must comprehensively address: capital contribution (cash, IP, property, human resources) and ownership ratio, management structure and governance (board composition, voting rights, reserved matters requiring unanimous consent), profit and loss sharing (aligned with ownership or separately negotiated), intellectual property ownership (pre-existing IP stays with the original party; jointly developed IP ownership and licensing must be defined), exit mechanisms (put option, call option, drag-along, right of first refusal, tag-along), liability allocation between the JV parties, dispute resolution (arbitration under ICC or LCIA is common for international JVs, domestic arbitration for domestic ones), governing law, and conditions for dissolution or wind-up of the JV. For foreign joint ventures, FEMA 1999, RBI regulations, and sector-specific FDI policy compliance are critical additional requirements.</p>
    ),
    detailsTitle: 'Key Elements of a Joint Venture Agreement',
    details: [
      { title: 'Governance & Decision Making', desc: 'Board composition, quorum requirements, reserved matters (decisions requiring unanimous or supermajority consent), deadlock resolution mechanism, and day-to-day management authority of the JV entity.', icon: Building2 },
      { title: 'Capital Contribution & Profit Sharing', desc: 'Detailed provisions for initial and ongoing capital contribution obligations, ownership percentage, dividend policy, profit/loss sharing ratio, and treatment of JV entity\'s retained earnings.', icon: Award },
      { title: 'IP Ownership & License', desc: 'Clearly define ownership of pre-existing IP brought into the JV (background IP) vs. IP jointly developed (foreground IP). License-back rights, restrictions on use post-JV, and IP ownership on dissolution must be addressed.', icon: ShieldCheck },
      { title: 'Exit Mechanisms & Termination', desc: 'Put and call options, right of first refusal (ROFR), tag-along and drag-along rights, buyout valuation methodology (NAV, EBITDA multiple, independent valuation), and winding-up / dissolution procedures.', icon: Globe },
    ],
    requirements: [
      'Legal names and details of all JV parties',
      'Business objectives and scope of the joint venture',
      'Capital contribution amounts and form (cash, IP, property, services)',
      'Ownership / equity stake of each party',
      'Governance structure: board composition, voting, reserved matters',
      'Exit conditions: preferred exit mechanism and valuation method',
    ],
    processTitle: 'How We Draft Your Joint Venture Agreement',
    processIntro: 'Our corporate law team combines deep transactional experience with knowledge of Indian JV regulations to draft agreements that protect each party\'s interests while enabling effective collaboration.',
    processSteps: [
      { title: 'JV Structure & Regulatory Assessment', desc: 'We determine whether an incorporated or contractual JV structure is appropriate, assess sector-specific regulations (FDI policy, FEMA for cross-border JVs), and identify all required regulatory approvals.', icon: UserCheck },
      { title: 'Term Sheet to Agreement', desc: 'We convert the agreed commercial term sheet into comprehensive JV agreement language, capturing all deal terms including contributions, governance, distributions, IP, and exit with legal precision.', icon: FileSearch },
      { title: 'Ancillary Agreements', desc: 'We draft ancillary agreements typically accompanying a JV agreement: shareholders\' agreement (for incorporated JV), technical services / license agreement, management services agreement, and secondment agreement for personnel.', icon: CheckCircle2 },
      { title: 'Execution & Regulatory Filings', desc: 'We assist with stamp duty, execution formalities, and if applicable, RBI reporting requirements under FEMA for cross-border JVs, or MCA filings for incorporated JVs under the Companies Act 2013.', icon: FileCheck },
    ],
    processOutro: 'JV agreement drafting takes 7–15 working days for domestic JVs. Cross-border JVs with FEMA / FDI compliance requirements may take 15–25 working days.',
    documents: [
      { category: 'Party Details', list: ['Company incorporation certificate and MOA/AOA', 'Audited financials (last 3 years)', 'Board resolution authorizing JV and authorized signatory'] },
      { category: 'JV Terms', list: ['Agreed term sheet or LOI', 'Capital contribution schedule', 'Business plan for the JV entity'] },
      { category: 'IP & Asset Details', list: ['List of IP / technology to be contributed to JV', 'Valuation report for non-cash contributions', 'Existing license agreements for IP being brought into the JV'] },
    ],
    compliance: [
      { title: 'FDI Policy & FEMA Compliance for International JVs', desc: 'Foreign investment in Indian JVs must comply with the FDI Policy and FEMA 1999. Equity investments in most sectors are under the automatic route, but some sectors (defense, broadcasting, pharma) require government approval. FC-GPR reporting to RBI is mandatory within 30 days of receipt of foreign investment.' },
      { title: 'Competition Act Scrutiny for Large JVs', desc: 'JVs that exceed the CCI threshold (combined asset value above &#8377;2,000 crore or combined turnover above &#8377;6,000 crore in India) require prior approval from the Competition Commission of India (CCI) before implementation. Failure to notify attracts significant penalties.' },
      { title: 'Tax Structure Must Be Optimized Upfront', desc: 'The JV structure has significant tax implications — incorporated JVs are taxed as companies (25–30%), while contractual JVs may be taxed as AOP/BOI or partnership. Profit repatriation, withholding tax on dividends, and capital gains on exit must be modeled before finalizing the structure.' },
      { title: 'Stamp Duty on JV Agreement', desc: 'JV agreements, particularly those involving contribution of immovable property or share transfers, attract stamp duty under the Indian Stamp Act or state stamp acts. The stamp duty implication of asset contributions must be assessed before finalizing the contribution mechanism.' },
    ],
    faqs: [
      { q: 'What is the difference between a joint venture and a partnership?', a: 'A joint venture is typically formed for a specific project or limited purpose, with each party retaining its independent legal identity. A partnership is a long-term business relationship governed by the Indian Partnership Act 1932, where partners share profits and losses from the overall business. A JV can be structured as a partnership, company, or contractual arrangement.' },
      { q: 'Does a joint venture in India need RBI approval?', a: 'For domestic JVs between Indian entities, no RBI approval is needed. For JVs involving foreign investment (foreign entity as a JV partner), investments in most sectors are under the automatic route (no prior approval needed) but require post-investment filing with RBI. Restricted sectors require Government approval before the JV investment is made.' },
      { q: 'What is a deadlock provision in a JV agreement?', a: 'A deadlock occurs when JV partners cannot agree on a matter requiring unanimous or supermajority consent, potentially paralyzing the JV. Deadlock provisions define what happens: escalation to senior management, mediation, Russian roulette/shotgun mechanism (either party can offer to buy the other at a named price), or compulsory dissolution.' },
      { q: 'Who owns IP developed jointly within the JV?', a: 'Ownership of jointly developed IP must be defined in the JV agreement. If not defined, the Patents Act and Copyright Act have default rules (co-ownership for patents, joint authorship for copyright) that may not align with commercial expectations. The JV agreement should specify: whether the JV entity, one party, or both parties jointly own the IP, and the license-back rights of each party.' },
      { q: 'How is a JV dissolved?', a: 'A JV can be dissolved by mutual agreement, expiry of the term, achievement of the JV\'s purpose, or following the exercise of exit rights (buy-sell, put/call). For incorporated JVs, dissolution requires a formal winding-up process under the Companies Act 2013. The JV agreement should define the order of asset distribution on dissolution (priority waterfall).' },
    ],
  };

  return (
    <main>
      <Navbar />
      <ServiceTemplate {...data} />
      <CTASection />
      <Footer />
    </main>
  );
}
