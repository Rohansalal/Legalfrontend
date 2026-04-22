'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, Briefcase, Building2 } from 'lucide-react';

export default function FranchiseAgreementPage() {
  const data = {
    title: 'Franchise Agreement Drafting',
    description: 'Comprehensive franchise agreement drafting for franchisors and franchisees in India. Covers territory rights, royalty fee, IP license, quality standards, training obligations, non-compete, and termination — governed by Indian Contract Act, IP laws, and Competition Act.',
    heroBadges: ['IP License & Brand Rights', 'Territory & Royalty Clauses', 'No Separate Franchise Law in India'],
    introTitle: 'What is a Franchise Agreement?',
    introContent: (
      <p>A franchise agreement is a legally binding contract between a franchisor (the brand owner) and a franchisee (the person licensed to operate the business under the brand) that grants the franchisee the right to use the franchisor\'s brand name, business model, intellectual property, proprietary systems, and operational know-how in exchange for a franchise fee and ongoing royalties. India does not have a dedicated Franchise Act — franchise relationships are governed by a combination of the Indian Contract Act 1872 (for the overall agreement), the Trade Marks Act 1999 (for brand licensing), the Copyright Act 1957 (for proprietary systems, manuals, and creative assets), the Competition Act 2002 (to ensure franchise terms don\'t create anti-competitive arrangements), the Foreign Exchange Management Act 1999 (for international franchise arrangements with royalty remittances), and the Income Tax Act 1961 (for TDS on franchise fees and royalties). A franchise agreement must cover: the exact territory granted to the franchisee (exclusive or non-exclusive), the franchise fee (one-time or periodic), the royalty structure (percentage of revenue or fixed monthly fee), training and support obligations of the franchisor, quality and brand standards the franchisee must maintain, intellectual property license (trademark, trade name, operating manual, recipes/formulas, software), the term of the franchise (typically 3–10 years) and renewal rights, termination conditions (both for cause and convenience), non-compete and non-solicitation obligations post-termination, audit rights of the franchisor over franchisee\'s books, and governing law and dispute resolution. Indian courts treat franchise agreements as commercial contracts and enforce them according to their terms.</p>
    ),
    detailsTitle: 'Key Elements of a Franchise Agreement',
    details: [
      { title: 'Territory & Exclusivity Rights', desc: 'Precisely defined exclusive or non-exclusive territory prevents channel conflict between franchisees. Territory clause must specify geographic boundaries, online sales rights, and conditions under which the franchisor can open competing outlets.', icon: Globe },
      { title: 'IP License & Brand Standards', desc: 'The agreement licenses the franchisor\'s trademark, trade dress, operating manuals, software, and recipes — with strict brand standard requirements and audit rights to ensure consistent quality across all franchise locations.', icon: Award },
      { title: 'Fee Structure & Royalty Terms', desc: 'Clearly defines the initial franchise fee, ongoing royalty (% of gross revenue), marketing fund contribution, technology fee, and any minimum performance guarantee obligations of the franchisee.', icon: Briefcase },
      { title: 'Non-Compete & Exit Provisions', desc: 'Post-termination non-compete restricting the franchisee from operating a competing business for 1–2 years within the territory, non-solicitation of customers and employees, and buyback/handback procedures for franchise assets.', icon: ShieldCheck },
    ],
    requirements: [
      'Franchisor\'s brand / trademark registration details',
      'Defined territory for the franchise operation',
      'Fee structure: initial fee, royalty rate, marketing fund percentage',
      'Training and support obligations of the franchisor',
      'Quality standards, audit frequency, and compliance requirements',
      'Term of franchise and conditions for renewal or termination',
    ],
    processTitle: 'How We Draft Your Franchise Agreement',
    processIntro: 'Our business law team drafts franchise agreements that protect the franchisor\'s brand while providing franchisees with the clarity and rights they need to operate successfully.',
    processSteps: [
      { title: 'Franchise Model Assessment', desc: 'We understand the business model (product franchise, business format franchise, or management franchise), the franchise fee structure, IP assets to be licensed, and the specific risks to be addressed for both franchisor and franchisee.', icon: UserCheck },
      { title: 'Drafting Core Provisions', desc: 'We draft all critical provisions: territory, fee/royalty, IP license, training obligations, quality standards, audit rights, reporting requirements, and insurance obligations.', icon: FileSearch },
      { title: 'Protective Clauses & Exit Mechanism', desc: 'We include franchisor-protective clauses (non-compete, brand standard enforcement, early termination for breach) and franchisee-protective clauses (renewal rights, territory protection, exit buyback terms).', icon: CheckCircle2 },
      { title: 'Execution, Stamping & Registration', desc: 'We assist with stamp duty assessment, execution formalities, and advise on whether trademark license recordal with the Trade Marks Registry is advisable to protect against third-party challenges.', icon: FileCheck },
    ],
    processOutro: 'Franchise agreement drafting typically takes 5–10 working days. Master franchise and international franchise agreements may take 10–15 working days due to additional complexity.',
    documents: [
      { category: 'Franchisor Documents', list: ['Trademark registration certificate(s)', 'Company incorporation certificate and PAN', 'Existing franchise disclosure document (FDD) if any'] },
      { category: 'Franchise Terms', list: ['Proposed fee and royalty structure', 'Territory map and boundary definition', 'Training and support program details'] },
      { category: 'Operational Documents', list: ['Operations manual (or draft outline)', 'Brand standards guide', 'Software / technology systems to be licensed to franchisee'] },
    ],
    compliance: [
      { title: 'Trademark License Must Be Recorded', desc: 'A trademark license (including franchise brand licenses) should be recorded with the Trade Marks Registry under Section 49 of the Trade Marks Act 1999. An unrecorded license may be unenforceable against third parties and could allow a licensee to challenge the validity of the trademark.' },
      { title: 'Competition Act Compliance', desc: 'Franchise agreements must not include anti-competitive clauses that violate the Competition Act 2002 — such as price-fixing, market allocation between franchisees, or tying arrangements that force franchisees to buy products exclusively from the franchisor at supra-competitive prices.' },
      { title: 'TDS on Franchise Royalties', desc: 'Royalty payments made to a franchisor are subject to TDS under Section 194J of the Income Tax Act at 10%. For international franchise agreements involving royalty remittances to a foreign franchisor, TDS at 10–25% applies depending on the Double Tax Avoidance Agreement (DTAA) with the country of the foreign franchisor.' },
      { title: 'FEMA Compliance for International Franchise', desc: 'If the franchisor is a foreign entity, royalty and fee remittances require compliance with FEMA 1999 and RBI guidelines. The royalty rate for trademark use must align with RBI\'s automatic approval limits, and filings with the RBI may be required.' },
    ],
    faqs: [
      { q: 'Is there a specific Franchise Act in India?', a: 'No, India does not have a dedicated Franchise Act. Franchise agreements are governed by the Indian Contract Act 1872, Trade Marks Act 1999, Copyright Act 1957, Competition Act 2002, and FEMA 1999 (for international franchises). This makes a well-drafted franchise agreement even more critical, as all rights and obligations must be explicitly documented.' },
      { q: 'What is the difference between a franchise agreement and a license agreement?', a: 'A franchise agreement is a comprehensive arrangement that includes not just IP licensing but also the right to use the franchisor\'s entire business system, brand, training, and support. A license agreement typically grants only specific IP rights (use of a trademark or software) without the full business system and ongoing relationship of a franchise.' },
      { q: 'Can a franchisee terminate the agreement before the term ends?', a: 'Termination rights depend on the agreement. Most franchise agreements allow termination by either party for material breach (after notice and cure period). Franchisees can also exit by mutual consent (buyback), though the franchisor may impose a penalty or require repayment of training costs. Unilateral early termination without cause typically invites a damages claim from the franchisor.' },
      { q: 'What happens to the franchisee\'s investment if the franchisor terminates the agreement?', a: 'The outcome depends on the termination clause and reason for termination. Termination for franchisee\'s breach typically results in no compensation. Termination by the franchisor for convenience may entitle the franchisee to some compensation. Always negotiate a buyback clause and asset ownership rights carefully before signing any franchise agreement.' },
      { q: 'Should a franchisee get the agreement reviewed by a lawyer before signing?', a: 'Absolutely. Many franchise agreements are heavily franchisor-friendly, imposing unlimited obligations on franchisees while giving franchisors broad termination rights. An independent legal review helps identify one-sided clauses, negotiate better terms, and ensures you understand your financial exposure before committing to the franchise fee and investment.' },
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
