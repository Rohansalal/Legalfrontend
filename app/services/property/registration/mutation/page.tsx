'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function MutationPage() {
  const data = {
    title: 'Property Mutation (Dakhil Kharij)',
    description:
      'Update land and revenue records in the new owner\'s name after property purchase, inheritance, or gift through the official Mutation (Dakhil Kharij) process at the municipal or tehsil office.',
    heroBadges: ['Revenue Record Update', 'Essential for Property Tax Transfer', 'Municipal & Rural Both Covered'],
    introTitle: 'What is Property Mutation (Dakhil Kharij)?',
    introContent: (
      <p>
        Property Mutation, known as &#x201c;Dakhil Kharij&#x201d; in Hindi-speaking states and by other names across India (e.g., &#x201c;Khata Transfer&#x201d; in Karnataka, &#x201c;Naam Mantaran&#x201d; in Maharashtra, &#x201c;Pokkuvaravu&#x201d; in Tamil Nadu, &#x201c;Naamfar&#x201d; in West Bengal), is the administrative process of updating government land and revenue records to reflect the name of the new owner after a property transaction — whether by sale, gift, inheritance, court order, or partition. It is crucial to understand that mutation does NOT confer ownership — only a registered Sale Deed, Gift Deed, or Court Decree transfers ownership. However, mutation is essential for: (a) paying property tax in the new owner&#39;s name (municipalities will not accept tax from a non-mutated owner); (b) applying for electricity or water connection transfer; (c) obtaining utility services and government benefits linked to the property; (d) future resale — banks and buyers require a clear mutation record; and (e) applying for agricultural loans or kisan credit in rural areas where land records are the primary security. In urban areas, mutation is done at the Municipal Corporation or Urban Local Body (ULB); in rural areas, it is processed at the Tehsil or Revenue Court (Patwari level). The process varies significantly by state — some states (like Andhra Pradesh, Karnataka, and Telangana) have online mutation portals, while others still require in-person applications. Mutation of inherited property additionally requires the death certificate and legal heir certificate of the deceased. Mutation must be applied within a specified time (varies by state; typically 3–6 months of registration) to avoid pendency and penalty.
      </p>
    ),
    detailsTitle: 'Why Property Mutation is Essential',
    details: [
      {
        title: 'Property Tax in New Owner\'s Name',
        desc: 'Mutation is mandatory for the municipal corporation to issue property tax demands in the new owner\'s name. Without mutation, the property tax continues in the previous owner&#39;s name, creating confusion, disputes, and potential tax arrears liability for the new owner.',
        icon: ShieldCheck,
      },
      {
        title: 'Required for Future Sale',
        desc: 'Banks and buyers demand clear mutation records before processing home loans or purchase. An unmutated property raises red flags about ownership and can stall loan approval, delaying or killing a future transaction.',
        icon: Zap,
      },
      {
        title: 'Utility Transfer & Government Benefits',
        desc: 'Transfer of electricity, water, and gas connections to the new owner requires a mutation certificate. Agricultural property mutation enables kisan credit cards, crop insurance (PM Fasal Bima Yojana), and government land records — all linked to the official revenue record.',
        icon: Globe,
      },
      {
        title: 'Inheritance & Succession Clarity',
        desc: 'For inherited properties, mutation officially records the legal heirs as the new owners in government records. This is critical for avoiding future succession disputes, especially when multiple heirs are involved or the property is rural agricultural land.',
        icon: Award,
      },
    ],
    requirements: [
      'Registered sale deed / gift deed / court decree (proof of transfer)',
      'Death certificate and legal heir certificate (for inheritance mutation)',
      'Latest property tax paid receipt',
      'Identity proof (Aadhaar / PAN) of new owner',
      'Encumbrance Certificate confirming no pending charges',
      'Application form as prescribed by the respective municipal corporation / tehsil',
    ],
    processTitle: 'How to Apply for Property Mutation in India',
    processIntro:
      'The mutation process differs for urban municipal properties and rural revenue/agricultural land. Our team handles both, navigating state-specific portals and offline procedures to ensure timely record update.',
    processSteps: [
      {
        title: 'Document Preparation & Application',
        desc: 'We compile all required documents — registered transfer deed, identity proof, tax receipts, death certificate (for inheritance) — and prepare the mutation application form as required by the relevant authority (municipal corporation or tehsil).',
        icon: UserCheck,
      },
      {
        title: 'Application Filing',
        desc: 'The mutation application is filed at the municipal corporation&#39;s property tax department (urban) or the Tehsil/Patwari office (rural) along with prescribed fees. In states with online portals (Karnataka&#39;s Kaveri, AP&#39;s Meebhoomi), we handle online filing.',
        icon: FileSearch,
      },
      {
        title: 'Objection Period & Verification',
        desc: 'The authority typically issues a public notice and provides a 15–30 day window for any objections from third parties. The records officer may physically inspect the property or verify title documents before approving the mutation.',
        icon: CheckCircle2,
      },
      {
        title: 'Mutation Entry & Certificate',
        desc: 'Upon approval, the revenue/municipal record is updated with the new owner&#39;s name. A Mutation Certificate (Dakhil Kharij Order) is issued. In rural areas, the 7/12 extract (Maharashtra) or ROR is updated with the new owner&#39;s name.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'Urban mutation at municipal corporations typically takes 15–30 days; rural/revenue mutation at tehsil offices can take 30–90 days depending on the state and objections received.',
    documents: [
      {
        category: 'Transfer Documents',
        list: [
          'Registered Sale Deed / Gift Deed / Will / Court Decree (certified copy)',
          'Index II from Sub-Registrar confirming registration',
          'Partition deed or family settlement deed (for partition mutations)',
        ],
      },
      {
        category: 'Identity & Heir Documents',
        list: [
          'Aadhaar Card and PAN Card of new owner(s)',
          'Death Certificate of the previous owner (for inherited property)',
          'Legal Heir Certificate or Surviving Member Certificate (for succession mutations)',
        ],
      },
      {
        category: 'Property & Tax Records',
        list: [
          'Latest property tax paid receipt in previous owner\'s name',
          'Current encumbrance certificate (Form 15/16) from Sub-Registrar',
          'Municipal khata / 7/12 extract / land record in the previous owner\'s name',
        ],
      },
    ],
    compliance: [
      {
        title: 'Apply Within 3–6 Months of Registration',
        desc: 'Most states require mutation to be applied within 3–6 months of the property transfer. Delays can result in accumulation of property tax under the old owner&#39;s name, penalties for late mutation, and complications in future transactions.',
      },
      {
        title: 'Property Tax Liability Transfer',
        desc: 'After mutation, all future property tax demands are issued in the new owner&#39;s name. The new owner is responsible for clearing any arrears from the date of mutation. Pre-mutation arrears are typically the seller&#39;s responsibility but are often negotiated in the sale deed.',
      },
      {
        title: 'Annual Property Tax Payment',
        desc: 'Once mutated, the new owner must pay annual property tax to the municipal corporation or panchayat on or before the due date to avoid interest (typically 1–2% per month on unpaid tax) and penalty. Online payment is available in most cities.',
      },
      {
        title: 'Re-Verification on Subsequent Transfer',
        desc: 'When the mutated property is subsequently sold or transferred, a fresh mutation must be applied in the next owner\'s name. Mutation certificates are property-specific and person-specific — they do not automatically transfer with the property on resale.',
      },
    ],
    faqs: [
      {
        q: 'Does mutation give legal ownership of property?',
        a: 'No. Mutation does not confer legal ownership. It only updates the administrative revenue/municipal records for tax purposes. Ownership of immovable property is transferred only by a registered Sale Deed, Gift Deed, or court order. However, mutation is essential for practical administration of the property and is required by banks, government bodies, and future buyers.',
      },
      {
        q: 'What is the difference between urban mutation and rural mutation?',
        a: 'Urban mutation is done at the Municipal Corporation or Urban Local Body and updates the property tax register (khata/property card). Rural mutation is done at the Tehsil/Revenue Court level and updates the Record of Rights (7/12 extract, ROR, jamabandi). Rural mutation also affects agricultural land records and kisan credit card entitlements.',
      },
      {
        q: 'Can a property be sold without mutation?',
        a: 'Yes, technically a property can be sold (sale deed executed and registered) even without mutation of the previous purchase. However, banks may refuse home loans if mutation is not up to date, buyers may insist on mutation before purchase, and municipality may not accept tax payments from the latest buyer in an unmutated chain.',
      },
      {
        q: 'What is the mutation fee?',
        a: 'Mutation fees vary by state and property type. Urban mutation fees in major cities range from &#x20b9;500 to &#x20b9;5,000 depending on the property value. Rural mutation fees are typically nominal (&#x20b9;100–&#x20b9;1,000). Some states also charge a percentage of the property value as mutation fee (e.g., Bihar charges 2% of stamp duty paid).',
      },
      {
        q: 'Is mutation required for inherited property?',
        a: 'Yes, absolutely. When a property owner dies without a registered sale deed transfer, the legal heirs must apply for mutation based on the death certificate and legal heir certificate (or probate if there is a will). This updates revenue records and enables heirs to pay property tax, apply for loans, or sell the property.',
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
