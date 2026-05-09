import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';

export const metadata: Metadata = {
  title: 'Startup India Registration (DPIIT Recognition) | Legal Door',
  description:
    'DPIIT Startup India recognition under Department for Promotion of Industry and Internal Trade — eligibility, application, certificate, tax benefits and government schemes.',
  keywords: [
    'Startup India registration',
    'DPIIT recognition',
    'Startup India certificate',
    'Section 80-IAC tax exemption',
    'Startup India scheme',
    'angel tax exemption startup',
  ],
  openGraph: {
    title: 'Startup India Registration (DPIIT Recognition)',
    description: 'DPIIT Startup India recognition with tax benefits and scheme access.',
    type: 'website',
    siteName: 'Legal Door',
  },
};

export default function StartupIndiaRegistrationPage() {
  return (
    <LeafServicePage
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Business Registration', href: '/services/business-registration' },
        { name: 'Registration', href: '/services/business-registration/other-registration' },
        { name: 'Startup India Registration' },
      ]}
      title="Startup India Registration (DPIIT Recognition)"
      description="DPIIT Startup India recognition unlocks tax holidays under Section 80-IAC, angel tax exemption (Section 56(2)(viib)), self-certification under labour and environmental laws, fast-track patent / trademark and access to government tenders and funding schemes."
      overview="Startup India is the flagship Government of India initiative to nurture and promote startups. Recognition is granted by the Department for Promotion of Industry and Internal Trade (DPIIT) under the Ministry of Commerce. Eligible entities (Pvt Ltd, LLP, Partnership) less than 10 years old with turnover under ₹100 crore can apply if they are working towards innovation, development or improvement of products / processes / services.

Once recognized, startups can avail Section 80-IAC tax holiday (3 years out of first 10), angel tax exemption under Section 56(2)(viib), self-certification under 9 labour laws and 3 environmental laws, fast-track patent / trademark with up to 80% rebate, and access to Fund of Funds for Startups (FFS) and various State / Central schemes.

We handle DPIIT recognition application, supporting documentation, IMB (Inter-Ministerial Board) certification for Section 80-IAC, angel tax exemption applications and ongoing DPIIT compliance — typically completed in 7-30 days for recognition, longer for downstream tax benefits."
      whyChooseUs={[
        { title: 'Recognition + Tax Benefits', desc: 'Beyond DPIIT recognition — we handle 80-IAC IMB certification and angel tax exemption.' },
        { title: 'Pitch & Innovation Story', desc: 'Strong narrative on innovation / scalability — critical for DPIIT and IMB approval.' },
        { title: 'Scheme Mapping', desc: 'Map your startup to applicable Central and State schemes (FFS, MUDRA, CGSS, State Innovation Funds).' },
        { title: 'IP Fast-Track', desc: 'Patent / Trademark fast-track with 80% rebate (patent) and 50% rebate (trademark).' },
      ]}
      keyPoints={[
        'DPIIT recognition under Startup India scheme',
        'Eligible entities: Pvt Ltd, LLP, Partnership (< 10 years, < ₹100 crore turnover)',
        'Innovation / scalability requirement',
        'Section 80-IAC tax holiday (3 of 10 years)',
        'Angel tax exemption — Section 56(2)(viib)',
        'Self-certification — 9 labour + 3 environmental laws',
        'Fast-track patent (80% rebate) and trademark (50% rebate)',
        'Government tender exemption (turnover, prior experience)',
        'Fund of Funds for Startups (FFS) eligibility',
        'State Innovation Mission integration',
      ]}
      process={[
        { title: 'Eligibility & Strategy', desc: 'Confirm eligibility; structure innovation / scalability narrative.' },
        { title: 'DPIIT Application', desc: 'Apply on startupindia.gov.in with company details, brief description, supporting documents.' },
        { title: 'Recognition Certificate', desc: 'DPIIT issues recognition certificate (typically 7-30 days).' },
        { title: 'Tax Benefits (Optional)', desc: 'Apply to IMB for Section 80-IAC certification; separate application for angel tax exemption.' },
        { title: 'Scheme Access', desc: 'Apply for FFS-led funds, State schemes, fast-track IP.' },
      ]}
      documents={[
        'Certificate of Incorporation / Partnership Deed',
        'PAN of entity',
        'Founders / partners details and identity',
        'Brief about innovation / scalability (max 1500 words)',
        'Website / pitch deck / patent details (if any)',
        'Authorization letter signed by authorized representative',
      ]}
      statutoryRefs={[
        { name: 'Startup India Action Plan, 2016', desc: 'Government framework establishing Startup India.' },
        { name: 'DPIIT Notification G.S.R. 127(E) (Feb 2019)', desc: 'Definition and benefits framework.' },
        { name: 'Income Tax Act — Section 80-IAC', desc: 'Tax holiday for eligible startups.' },
        { name: 'Income Tax Act — Section 56(2)(viib)', desc: 'Angel tax exemption for DPIIT-recognized startups.' },
      ]}
      pitfalls={[
        { title: 'Weak Innovation Narrative', desc: 'Generic descriptions ("we run a SaaS company") get rejected. Specific innovation / scalability details are essential.' },
        { title: '10-Year Cliff Missed', desc: 'Recognition lapses after 10 years from incorporation; 80-IAC must be claimed before this.' },
        { title: 'Turnover Threshold Crossed', desc: 'When turnover crosses ₹100 crore, recognition / scheme benefits stop.' },
        { title: 'IMB Certification Missed', desc: 'Section 80-IAC requires separate IMB certification — DPIIT recognition alone is not enough.' },
      ]}
      faqs={[
        { q: 'How long does DPIIT recognition take?', a: 'Typically 7-30 days from application submission, faster with strong documentation. Tax benefits (80-IAC IMB) take additional 3-6 months.' },
        { q: 'Is recognition mandatory for startups?', a: 'No — DPIIT recognition is optional. But for tax benefits, government schemes, fast-track IP and tender exemptions, recognition is essential.' },
        { q: 'What is Angel Tax exemption?', a: 'Section 56(2)(viib) treats premium received by closely-held companies above fair value as taxable income. DPIIT-recognized startups receiving funding from accredited investors can claim exemption.' },
        { q: 'Can a foreign-owned company be recognized?', a: 'Eligible if incorporated in India and meets all criteria. Foreign ownership doesn\'t disqualify but specific FEMA rules on inbound investment apply.' },
        { q: 'How is Section 80-IAC claimed?', a: 'Apply to Inter-Ministerial Board (IMB) for certification post-DPIIT recognition. On approval, claim 100% deduction in any 3 consecutive years out of first 10 years from incorporation.' },
        { q: 'Are sole proprietorships eligible?', a: 'No — only Pvt Ltd, LLP and Partnership firms are eligible.' },
      ]}
      relatedServices={[
        { name: 'Private Ltd. Company Registration', href: '/services/business-registration/company-registration/private-limited-company' },
        { name: 'LLP Registration', href: '/services/business-registration/company-registration/llp-registration' },
        { name: 'ITR for Companies', href: '/services/business-registration/taxation/itr-companies' },
        { name: 'Tax Planning — Corporate', href: '/services/business-registration/taxation/tax-planning-corporate' },
        { name: 'Trademark Registration', href: '/services/lawyer-services/ipr-services/trademark/registration' },
      ]}
    />
  );
}
