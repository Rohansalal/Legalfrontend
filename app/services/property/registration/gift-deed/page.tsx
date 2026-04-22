'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function GiftDeedPage() {
  const data = {
    title: 'Gift Deed Registration',
    description:
      'Transfer immovable property to a loved one without monetary consideration through a legally registered Gift Deed under Section 122–123 of the Transfer of Property Act 1882.',
    heroBadges: ['Transfer of Property Act 1882', 'Stamp Duty Concession for Relatives', 'Income Tax Exemption Planning'],
    introTitle: 'What is a Gift Deed?',
    introContent: (
      <p>
        A Gift Deed is a legal instrument under Sections 122 to 129 of the Transfer of Property Act, 1882 that enables a property owner (donor) to voluntarily transfer immovable property to another person (donee) without any monetary consideration (i.e., free of cost). For such a gift to be legally valid, it must be made voluntarily, without coercion, accepted by the donee, and mandatorily registered at the Sub-Registrar&#39;s office under Section 123 of the Act — an unregistered gift deed for immovable property is void and transfers no title whatsoever. Stamp duty is the most significant cost factor: most Indian states offer a substantial concession for gifts among blood relatives (spouse, children, parents, siblings). In Maharashtra, for instance, a gift deed among family members attracts only &#x20b9;200 as stamp duty, whereas Karnataka charges 0.5% (minimum &#x20b9;1,000). For gifts to non-relatives, full market-value stamp duty applies. From an income tax perspective, gifts received from specified relatives (as defined under Section 56(2)(x) of the Income Tax Act, 1961) are fully exempt from tax regardless of value. Gifts to non-relatives are taxed as &#x201c;Income from Other Sources&#x201d; in the donee&#39;s hands if the aggregate value exceeds &#x20b9;50,000 in a financial year. Capital gains tax implications arise for the donor only if the gift is treated as a deemed transfer; however, gifts among specified relatives are exempt from capital gains under Section 47(iii). The donee assumes the original cost of acquisition and holding period for future capital gains calculation.
      </p>
    ),
    detailsTitle: 'Key Benefits of Gift Deed Registration',
    details: [
      {
        title: 'Tax-Efficient Wealth Transfer',
        desc: 'Gifting property to specified relatives is exempt from both capital gains tax (Section 47(iii)) and income tax (Section 56(2)(x)), making it one of the most tax-efficient methods of intergenerational wealth transfer in India.',
        icon: ShieldCheck,
      },
      {
        title: 'Minimal Stamp Duty for Family Transfers',
        desc: 'Most states offer drastically reduced stamp duty for gifts between blood relatives — as low as &#x20b9;200 fixed in Maharashtra and 0.5% in Karnataka — saving lakhs compared to a regular sale deed.',
        icon: Zap,
      },
      {
        title: 'Immediate Ownership Transfer',
        desc: 'Unlike a Will, a gift deed transfers ownership immediately during the donor&#39;s lifetime, avoiding probate delays and succession disputes. The donee gets full ownership rights upon registration and acceptance.',
        icon: Globe,
      },
      {
        title: 'Legal Protection Against Revocation',
        desc: 'Once a gift deed is registered and accepted, it is irrevocable (except under specific conditions of fraud, undue influence, or donor&#39;s pre-condition). This provides security to the donee and finality to the transfer.',
        icon: Award,
      },
    ],
    requirements: [
      'Original title documents of the property being gifted (sale deed, khata, etc.)',
      'PAN Card and Aadhaar of both donor and donee',
      'Relationship proof between donor and donee (for stamp duty concession)',
      'Encumbrance Certificate (Form 15/16) confirming no mortgage or charge on property',
      'Property tax paid receipts up to date',
      'Passport-size photographs of donor, donee, and two witnesses',
    ],
    processTitle: 'How to Register a Gift Deed in India',
    processIntro:
      'Gift deed registration involves drafting, stamp duty payment at the applicable rate (concessional for relatives), appointment at Sub-Registrar office, and post-registration mutation. Our team ensures a smooth and legally compliant transfer.',
    processSteps: [
      {
        title: 'Verify Relationship & Tax Implications',
        desc: 'Our lawyers confirm whether the donee qualifies as a &#x201c;specified relative&#x201d; under Section 56(2)(x) and Section 47(iii) of the Income Tax Act to determine tax exemptions and applicable stamp duty concession.',
        icon: UserCheck,
      },
      {
        title: 'Draft the Gift Deed',
        desc: 'We draft a comprehensive gift deed mentioning the donor&#39;s absolute right to gift, property schedule, acceptance clause by donee, and any conditions (e.g., donor retaining life interest). The deed is drafted on non-judicial stamp paper.',
        icon: FileSearch,
      },
      {
        title: 'Stamp Duty Payment',
        desc: 'We compute and arrange payment of applicable stamp duty — concessional rate for relatives, full market-value rate for non-relatives — through e-stamping or authorised franking as required by your state.',
        icon: CheckCircle2,
      },
      {
        title: 'Sub-Registrar Registration',
        desc: 'Both donor, donee, and two witnesses appear at the Sub-Registrar office. Biometric verification is done, the deed is signed, thumb-impressed, and officially registered in the Sub-Registrar&#39;s books.',
        icon: FileCheck,
      },
      {
        title: 'Mutation of Property Records',
        desc: 'Post-registration, we assist with mutation of property records at the municipal corporation or tehsil office so that property tax and revenue records are updated in the donee&#39;s name.',
        icon: Home,
      },
    ],
    processOutro:
      'Gift deed registration typically takes 5–10 working days from document collection, subject to Sub-Registrar appointment availability in your city/district.',
    documents: [
      {
        category: 'Identity & Relationship Proof',
        list: [
          'PAN Card of donor and donee (mandatory)',
          'Aadhaar Card / Passport / Voter ID of all parties',
          'Relationship proof: birth certificate, marriage certificate, family tree affidavit',
        ],
      },
      {
        category: 'Property Documents',
        list: [
          'Original title deed (registered sale deed / prior gift deed / will)',
          'Encumbrance Certificate (Form 15 or Form 16) from Sub-Registrar',
          'Latest property tax receipt and khata/patta certificate',
        ],
      },
      {
        category: 'Registration & Compliance',
        list: [
          'Stamp duty payment challan / e-stamp certificate',
          'No-Objection Certificate from housing society (if flat in a cooperative society)',
          'Valuation certificate from registered valuer (for non-relative gifts)',
        ],
      },
    ],
    compliance: [
      {
        title: 'Donee Must File Income Tax Return',
        desc: 'The donee receiving gifted property must disclose it in their ITR under Schedule AL (Assets and Liabilities) and, for non-relative gifts exceeding &#x20b9;50,000, report it under &#x201c;Income from Other Sources&#x201d; for the year of receipt.',
      },
      {
        title: 'Mutation Within 3 Months',
        desc: 'The donee must apply for property mutation (Dakhil Kharij) at the municipal corporation or tehsil office within 3 months of registration to update revenue records and property tax obligations in their name.',
      },
      {
        title: 'Capital Gains on Future Sale',
        desc: 'When the donee later sells the gifted property, capital gains are computed using the donor&#39;s original cost of acquisition and holding period (including the donor&#39;s period) — this is crucial for Long-Term Capital Gains (LTCG) computation.',
      },
      {
        title: 'Society Share Certificate Transfer',
        desc: 'For gifted flats in cooperative housing societies, the donee must submit the registered gift deed to the society and apply for transfer of share certificate and membership — society transfer charges are capped by state rules.',
      },
    ],
    faqs: [
      {
        q: 'Can a gift deed be revoked after registration?',
        a: 'A registered and accepted gift deed is generally irrevocable. Under Section 126 of the Transfer of Property Act, a gift can be revoked only if: (a) both donor and donee agreed at the time of the gift that it would be revocable on a specific event; or (b) the gift was made under fraud, coercion, or undue influence. Courts have consistently upheld the irrevocability of registered gift deeds absent such grounds.',
      },
      {
        q: 'What is the stamp duty for gifting property to a son in Maharashtra?',
        a: 'In Maharashtra, a gift deed executed in favour of a blood relative (spouse, children, grandchildren, parents, siblings) attracts a fixed stamp duty of &#x20b9;200, irrespective of the property value. Registration charges of &#x20b9;200 also apply. This is significantly lower than the 6% stamp duty applicable on a regular sale deed.',
      },
      {
        q: 'Is capital gains tax applicable on gifting property to a relative?',
        a: 'No. Under Section 47(iii) of the Income Tax Act, 1961, a gift of property to a relative (as defined in Section 56(2)(x)) is not treated as a &#x201c;transfer&#x201d; and hence no capital gains tax arises in the donor&#39;s hands. The donee inherits the donor&#39;s original cost and acquisition date for future capital gains purposes.',
      },
      {
        q: 'Who qualifies as a &#x201c;relative&#x201d; for gift tax exemption?',
        a: 'Under the Explanation to Section 56(2)(x), &#x201c;relative&#x201d; means: spouse, sibling, sibling of spouse, sibling of either parent, lineal ascendant or descendant of the individual, their spouse, or spouse of any of the above. Gifts among these persons are fully exempt from income tax regardless of value.',
      },
      {
        q: 'Can an NRI gift property in India to a resident Indian?',
        a: 'Yes. An NRI can gift immovable property in India to a person resident in India (relative) subject to FEMA regulations. The gift deed must be registered. However, NRIs cannot gift agricultural land, plantation property, or farmhouse. RBI general permission covers such gifts to close relatives; otherwise prior RBI approval is needed.',
      },
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
