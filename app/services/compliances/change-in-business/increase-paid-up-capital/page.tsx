import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';

export const metadata: Metadata = {
  title: 'Increase Paid-up Capital of Company | Legal Door',
  description:
    'Increase paid-up share capital through right issue, private placement, ESOP exercise or conversion of loans — Companies Act compliant with PAS-3, MGT-14 filings.',
  keywords: [
    'increase paid-up capital',
    'right issue paid up capital',
    'private placement India',
    'PAS-3 filing',
    'paid up vs authorized capital',
    'share capital increase',
  ],
  openGraph: {
    title: 'Increase Paid-up Capital of Company',
    description: 'Right issue, private placement and other routes to increase paid-up share capital.',
    type: 'website',
    siteName: 'Legal Door',
  },
};

export default function IncreasePaidUpCapitalPage() {
  return (
    <LeafServicePage
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compliances', href: '/services/compliances' },
        { name: 'Change in Business', href: '/services/compliances/change-in-business' },
        { name: 'Increase Paid-up Capital' },
      ]}
      title="Increase Paid-up Capital of Company"
      description="Increase paid-up share capital through right issue (Section 62(1)(a)), private placement (Section 42), bonus issue, ESOP exercise or conversion of loans into equity — with full Companies Act, 2013 compliance."
      overview="Paid-up share capital is the amount of authorized capital that has actually been subscribed and paid for by shareholders. Increasing paid-up capital is essential when the company needs to bring fresh equity for working capital, expansion, debt reduction or investor onboarding — but only up to the limit of authorized capital (which itself can be increased separately).

Routes to increase paid-up capital include: (a) Right Issue under Section 62(1)(a) — offer to existing shareholders proportionate to holding; (b) Private Placement under Section 42 — offer to identified persons via Letter of Offer; (c) ESOP exercise — issuance to employees on stock-option exercise; (d) Bonus Issue — capitalization of free reserves; (e) Conversion — convert preference shares, debentures, or loans into equity.

Each route has distinct procedural requirements — board approvals, shareholder resolutions, valuation reports, MCA filings (PAS-3, MGT-14, SH-7), stamp duty, and post-allotment compliance. We handle the entire workflow — strategy, documentation, filings and post-issue mutation."
      whyChooseUs={[
        { title: 'Route Strategy', desc: 'Right issue vs private placement vs bonus — chosen based on shareholders, valuation, tax.' },
        { title: 'Valuation Coordination', desc: 'Registered valuer reports for non-cash issues, premium calculations.' },
        { title: 'MCA Filings Bundle', desc: 'PAS-3, MGT-14, SH-7 and other filings within statutory timelines.' },
        { title: 'Investor / FEMA Coordination', desc: 'Where foreign investors involved — FC-GPR, FEMA pricing guidelines.' },
      ]}
      keyPoints={[
        'Right Issue under Section 62(1)(a)',
        'Private Placement under Section 42',
        'Bonus Issue from free reserves',
        'ESOP exercise (Sweat equity / employee stock options)',
        'Conversion of preference shares / debentures / loans',
        'Valuation report by Registered Valuer (Section 247)',
        'PAS-3 (Return of Allotment) within 30 days',
        'MGT-14 (special resolutions) within 30 days',
        'SH-7 if authorized capital also increases',
        'FC-GPR for foreign investments',
        'Stamp duty on share certificates (State-specific)',
        'Pre-emption rights waiver where applicable',
      ]}
      process={[
        { title: 'Authorization Check', desc: 'Verify authorized capital headroom; if insufficient, increase authorized capital first (Section 61, SH-7).' },
        { title: 'Route Selection', desc: 'Right issue / private placement / bonus / ESOP based on objective and stakeholders.' },
        { title: 'Board & Shareholder Approval', desc: 'Pass board resolution; convene EGM if shareholder approval needed.' },
        { title: 'Allotment & Filing', desc: 'Receive subscription money; allot shares; file PAS-3 within 30 days.' },
        { title: 'Statutory Compliance', desc: 'Issue share certificates; update Register of Members; stamp duty payment.' },
      ]}
      documents={[
        'Notice of Board / EGM',
        'Special / ordinary resolution',
        'Letter of Offer (right issue / private placement)',
        'Valuation report (where applicable)',
        'Subscription forms and applications',
        'Share certificates',
        'Updated Register of Members',
        'PAS-3, MGT-14, SH-7 forms',
      ]}
      statutoryRefs={[
        { name: 'Companies Act, 2013 — Section 62', desc: 'Right issue and ESOPs; pre-emptive rights of existing shareholders.' },
        { name: 'Section 42', desc: 'Private placement of securities.' },
        { name: 'Section 61 + SH-7', desc: 'Increase of authorized share capital.' },
        { name: 'Section 247', desc: 'Registered Valuer required for valuation.' },
        { name: 'Companies (Share Capital and Debentures) Rules, 2014', desc: 'Procedural rules.' },
      ]}
      pitfalls={[
        { title: 'Authorized Capital Cap', desc: 'Cannot allot beyond authorized capital. Increase authorized first (Section 61).' },
        { title: 'Right Issue Pricing', desc: 'For listed companies, SEBI ICDR pricing applies. Unlisted: face value or higher; below face value not permitted unless preference shares.' },
        { title: 'Private Placement Limit', desc: '50 persons in a financial year (excluding QIBs and employees). More needs public offer.' },
        { title: 'Late PAS-3', desc: 'PAS-3 beyond 30 days attracts late filing fees and may invalidate allotment in extreme cases.' },
      ]}
      faqs={[
        { q: 'What is the difference between authorized and paid-up capital?', a: 'Authorized capital is the maximum capital the company can issue per its MoA. Paid-up capital is what has actually been subscribed and paid for. Paid-up cannot exceed authorized.' },
        { q: 'Is right issue mandatory before private placement?', a: 'Generally yes — Section 62 mandates pre-emptive rights to existing shareholders before non-shareholder allotment. Exception: private placement under Section 62(1)(c) with special resolution.' },
        { q: 'Can I issue shares at premium?', a: 'Yes — most issuances are at premium, particularly for established companies. Premium amount goes to Securities Premium Account with restricted use.' },
        { q: 'What if shares are issued below fair value?', a: 'For close-held companies, Section 56(2)(viib) treats premium below fair value as taxable income. DPIIT-recognized startups have angel tax exemption.' },
        { q: 'How long does the process take?', a: 'Right issue: 3-4 weeks (notice + offer period + allotment). Private placement: 4-6 weeks. Bonus issue: 2-3 weeks. ESOP exercise: variable.' },
      ]}
      relatedServices={[
        { name: 'Increase Authorized Capital', href: '/services/compliances/change-in-business/increase-authorized-capital' },
        { name: 'Share Transfer', href: '/services/compliances/change-in-business/share-transfer' },
        { name: 'Fund Raising', href: '/services/compliances/change-in-business/fund-raising' },
        { name: 'Dematerialization of Shares', href: '/services/compliances/change-in-business/dematerialization-of-shares' },
      ]}
    />
  );
}
