'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function GeneralPowerOfAttorneyPage() {
  const data = {
    title: 'General Power of Attorney (GPA) Registration',
    description:
      'Authorise a trusted person to manage your property, finances, and legal affairs in India with a legally registered General Power of Attorney — essential post the Supreme Court\'s Suraj Lamp judgment.',
    heroBadges: ['Mandatory Registration for Property GPA', 'Suraj Lamp SC Judgment 2011', 'NRI & Outstation Owners'],
    introTitle: 'What is a General Power of Attorney (GPA)?',
    introContent: (
      <p>
        A General Power of Attorney (GPA) is a legal document under the Powers of Attorney Act, 1882 by which a person (the Principal) authorises another person (the Attorney or Agent) to act on their behalf in a broad range of matters — including property transactions, banking, investments, legal proceedings, government filings, and business management. A GPA grants wide, general authority across multiple domains, distinguishing it from a Specific Power of Attorney (SPA) which is limited to a single defined act. In the context of immovable property in India, the Supreme Court&#39;s landmark judgment in Suraj Lamp &amp; Industries Pvt. Ltd. v. State of Haryana (2011) 14 SCC 656 fundamentally changed the legal landscape: the Court held that transactions of immovable property carried out through GPA (without a registered sale deed) do not confer legal title and are not valid transfers of ownership. This means that &#x201c;GPA + Agreement to Sale + Will&#x201d; arrangements (previously common in Delhi-NCR to evade stamp duty) are no longer legally valid modes of transferring property title. A registered Sale Deed remains the only valid mode of property transfer. However, a GPA remains essential for legitimate purposes: allowing an NRI, senior citizen, or outstation owner to authorise a local agent to execute a properly registered sale deed on their behalf; managing property through an agent when the principal cannot be physically present; handling bank matters, tax filings, court appearances; and managing rental properties. For any GPA involving immovable property transactions, registration at the Sub-Registrar&#39;s office is mandatory. For non-property matters, notarisation is sufficient. A GPA is automatically revoked upon the principal&#39;s death, insanity, or adjudication as insolvent.
      </p>
    ),
    detailsTitle: 'When and Why a GPA is Essential',
    details: [
      {
        title: 'NRI Property Management',
        desc: 'NRIs and Overseas Citizens of India (OCIs) who own property in India use registered GPAs to authorise a trusted family member or advocate to execute sale deeds, manage tenancies, receive rent, file returns, and handle property disputes on their behalf without travelling to India.',
        icon: ShieldCheck,
      },
      {
        title: 'Valid Property Transaction Authority',
        desc: 'Post Suraj Lamp judgment, a registered GPA from the seller to an agent allows the agent to validly execute a registered sale deed — the sale deed (not the GPA) remains the title transfer document. The GPA merely authorises the execution.',
        icon: Zap,
      },
      {
        title: 'Senior Citizen & Health-Based Authority',
        desc: 'Elderly property owners who are physically unable to attend registration offices can execute a GPA in favour of a trusted family member or legal professional. The attorney can then handle all property, banking, and legal matters on their behalf.',
        icon: Globe,
      },
      {
        title: 'Business & Legal Representation',
        desc: 'A GPA enables a business entity or individual to authorise a representative to appear before courts, tax authorities, RERA, municipal corporations, and government offices — crucial for litigation management, regulatory compliance, and dispute resolution.',
        icon: Award,
      },
    ],
    requirements: [
      'PAN Card and Aadhaar of both Principal (grantor) and Attorney (grantee)',
      'Passport-size photographs of Principal and Attorney',
      'Property documents (for property-related GPA)',
      'Stamp paper of appropriate value (varies by state and type of GPA)',
      'Two witnesses for execution',
      'Original passport and address proof (for NRI GPAs executed abroad)',
    ],
    processTitle: 'How to Execute and Register a GPA in India',
    processIntro:
      'GPA registration for property matters requires careful drafting of powers, execution on stamp paper, and registration at the Sub-Registrar office. For NRIs executing GPA abroad, additional notarisation and apostille is required.',
    processSteps: [
      {
        title: 'Define Scope of Authority',
        desc: 'Our lawyers consult with the Principal to precisely define the powers granted — specific property details, types of transactions authorised, financial limits, time period, and any restrictions. Overly broad GPAs can be misused; overly narrow ones may fail the purpose.',
        icon: UserCheck,
      },
      {
        title: 'Draft & Execute GPA on Stamp Paper',
        desc: 'We draft the GPA incorporating all agreed powers, execute it on non-judicial stamp paper of the requisite value (varies: &#x20b9;100 to &#x20b9;500 by state), and arrange signing by the Principal and two witnesses.',
        icon: FileSearch,
      },
      {
        title: 'Registration at Sub-Registrar (Property GPA)',
        desc: 'For property-related GPAs, we arrange registration at the Sub-Registrar&#39;s office. The Principal must appear in person (or execute before Indian Embassy/Consul abroad for NRI GPAs). The GPA is indexed in public records and assigned a registration number.',
        icon: CheckCircle2,
      },
      {
        title: 'Apostille / Notarisation for NRI GPAs',
        desc: 'If the Principal is abroad, the GPA is executed before a Notary Public and the Indian Consulate / Embassy in the respective country. An Apostille is obtained for countries under the Hague Convention. The GPA is then sent to India and adjudicated (stamped) before use.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'Domestic GPA registration takes 3–5 working days. NRI GPA execution abroad and India-registration typically takes 10–20 days including courier, adjudication, and registration.',
    documents: [
      {
        category: 'Principal & Attorney Identity',
        list: [
          'PAN Card and Aadhaar of Principal and Attorney',
          'Passport for NRI / foreign national executing GPA abroad',
          'Passport-size photographs of Principal, Attorney, and two witnesses',
        ],
      },
      {
        category: 'Property Documents (if applicable)',
        list: [
          'Title deed of property for which power is being granted',
          'Latest property tax receipt and encumbrance certificate',
          'Society share certificate (for cooperative housing society flats)',
        ],
      },
      {
        category: 'Execution & Registration',
        list: [
          'Stamp paper / e-stamp of requisite value',
          'Apostille certificate and Indian Embassy attestation (for NRI GPAs)',
          'Adjudication certificate from Collector (for foreign-executed GPAs before Indian registration)',
        ],
      },
    ],
    compliance: [
      {
        title: 'GPA Does Not Transfer Property Title',
        desc: 'Post Suraj Lamp judgment, a GPA cannot be used as a substitute for a registered sale deed. Any transaction attempting to transfer immovable property solely through a GPA is invalid. The GPA must be used only to authorise the execution of a proper registered sale deed.',
      },
      {
        title: 'Revocation of GPA',
        desc: 'A GPA can be revoked at any time by the Principal by executing a Deed of Revocation and notifying the Attorney. Revocation must be communicated to third parties who may have relied on the GPA. The GPA is automatically revoked on death, insanity, or insolvency of the Principal.',
      },
      {
        title: 'NRI FEMA Compliance',
        desc: 'NRIs using GPAs for property transactions in India must ensure FEMA compliance: funds must be routed through NRE/NRO accounts, TDS must be deducted, and FEMA rules on repatriation of sale proceeds must be followed. The GPA cannot authorise transactions that the Principal themselves cannot legally do.',
      },
      {
        title: 'Annual Account Rendering by Attorney',
        desc: 'An Attorney acting under a GPA has a fiduciary duty and must maintain accounts of all transactions conducted on the Principal&#39;s behalf. Courts have held Attorneys liable for misuse of GPA powers; periodic review of the Attorney&#39;s actions by the Principal is strongly advisable.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a General Power of Attorney and a Specific Power of Attorney?',
        a: 'A General Power of Attorney (GPA) grants broad authority across multiple domains — property, banking, legal, investments. A Specific Power of Attorney (SPA) is limited to a single transaction or purpose — e.g., &#x201c;authorised to sell property at Survey No. 123 only.&#x201d; For NRIs selling a single property in India, an SPA is preferred as it carries lower risk of misuse.',
      },
      {
        q: 'Can a GPA be used to sell property without the owner being present?',
        a: 'Yes, provided the GPA is validly registered and specifically authorises the sale of the property. The Attorney can appear at the Sub-Registrar office and execute and register the sale deed on behalf of the Principal. The sale deed will clearly mention the Attorney&#39;s name and the GPA registration details. The transaction is valid as a property transfer only through the registered sale deed.',
      },
      {
        q: 'Is a notarised GPA valid for property transactions in India?',
        a: 'No. For property transactions in India, a GPA must be registered at the Sub-Registrar&#39;s office — notarisation alone is not sufficient. Post Suraj Lamp judgment and under Section 17 of the Registration Act, a GPA for property matters (sale, mortgage, gift) must be registered to be legally recognised for those transactions.',
      },
      {
        q: 'How is an NRI GPA executed and legalised for use in India?',
        a: 'An NRI must: (1) execute the GPA before a Notary Public in their country of residence; (2) get it apostilled (for Hague Convention countries) or attested by the Indian Embassy/Consulate; (3) send the original to India; (4) have the GPA adjudicated (stamp duty paid) before the Collector in India; and (5) optionally register it at the Sub-Registrar for property matters.',
      },
      {
        q: 'When does a GPA automatically terminate?',
        a: 'A GPA automatically terminates on: (a) death of the Principal; (b) Principal being declared insane or of unsound mind by a court; (c) Principal being adjudicated insolvent; (d) completion of the act for which it was granted (for specific GPAs); (e) revocation by the Principal. A &#x201c;durable&#x201d; power of attorney (which survives incapacity) is not recognised in Indian law as it is in some other countries.',
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
