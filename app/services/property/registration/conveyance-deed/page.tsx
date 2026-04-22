'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function ConveyanceDeedPage() {
  const data = {
    title: 'Conveyance Deed Registration',
    description:
      'Secure absolute legal ownership of your flat or housing society property by obtaining the Conveyance Deed from the builder — mandatory under RERA 2016 and the Maharashtra Ownership Flats Act.',
    heroBadges: ['RERA 2016 Mandatory', 'Builder Obligation Within 3 Months', 'Society Self-Redevelopment Rights'],
    introTitle: 'What is a Conveyance Deed?',
    introContent: (
      <p>
        A Conveyance Deed is the final and most conclusive legal document that transfers absolute ownership (title) of land and building from the original owner (developer, builder, or government authority) to the purchasing entity — typically a Cooperative Housing Society, Apartment Owners&#39; Association, or an individual flat buyer. It is fundamentally different from the individual flat Sale Deed, which only transfers a flat unit; the Conveyance Deed transfers the underlying land and common areas of the entire building/complex. In Maharashtra, the Conveyance Deed is mandatory under the Maharashtra Ownership Flats (Regulation of the Promotion of Construction, Sale, Management and Transfer) Act, 1963 (MOFA) and is now further reinforced by the Real Estate (Regulation and Development) Act, 2016 (RERA). Under RERA, a promoter (builder) is legally obligated to execute the registered Conveyance Deed in favour of the cooperative housing society, apartment owners&#39; association, or competent authority within three months of obtaining the Occupancy Certificate (OC). Failure to do so exposes the builder to penalties under RERA. Without a conveyance deed, the housing society: (a) cannot legally own the land; (b) cannot apply for redevelopment or raise loans against the property; (c) does not receive property tax demands in its name; and (d) cannot execute Development Control Regulations (DCR) for FSI consumption. This is an extremely prevalent issue across Mumbai, Pune, and other Maharashtra cities, with thousands of societies still awaiting conveyance from builders — a situation that can be addressed through Deemed Conveyance under the MOFA (Amendment) Act 2008.
      </p>
    ),
    detailsTitle: 'Why Conveyance Deed is Indispensable',
    details: [
      {
        title: 'Complete Legal Ownership',
        desc: 'The Conveyance Deed transfers ownership of the plot of land and entire building structure — not just individual flats. Without it, the society or flat owners are effectively tenants on the builder&#39;s land, with no legal ownership of the ground beneath their homes.',
        icon: ShieldCheck,
      },
      {
        title: 'Enables Self-Redevelopment',
        desc: 'A housing society can apply for self-redevelopment (under the MahaRERA and Maharashtra government schemes) only after receiving the conveyance deed. It is mandatory for consuming additional FSI and TDR — potentially adding hundreds of crores in value.',
        icon: Zap,
      },
      {
        title: 'Deemed Conveyance Under MOFA',
        desc: 'If a builder refuses or delays executing the conveyance deed, the society can apply for &#x201c;Deemed Conveyance&#x201d; under the Maharashtra Ownership Flats Act (Amendment) 2008. The District Deputy Registrar (DDR) then executes the conveyance as deemed authority.',
        icon: Globe,
      },
      {
        title: 'Loan & Legal Standing',
        desc: 'Banks require conveyance deed for approving large loans to housing societies. Without conveyance, societies cannot raise funds for repairs, redevelopment, or infrastructure — limiting their financial and legal autonomy.',
        icon: Award,
      },
    ],
    requirements: [
      'All registered individual flat sale deeds of the building/complex',
      'Occupancy Certificate (OC) issued by the local authority (BMC/PMC/NMMC etc.)',
      'Society registration certificate (7/12 extract equivalent: Index II)',
      'Building plan approval and commencement certificate from local authority',
      'Latest property tax receipts in the builder&#39;s name (or society name)',
      'List of all flat owners and share certificates issued by the society',
    ],
    processTitle: 'How to Obtain Conveyance Deed for Housing Society',
    processIntro:
      'Obtaining the conveyance deed involves both negotiation with the builder and, if necessary, the formal deemed conveyance process before the District Deputy Registrar. Our lawyers specialise in both routes.',
    processSteps: [
      {
        title: 'Document Audit & Title Verification',
        desc: 'We conduct a thorough title search of the builder&#39;s ownership of the land — checking 7/12 extracts, property card, NA (Non-Agricultural) order, ULC clearance, IOD, OC, and all encumbrances at the Sub-Registrar office.',
        icon: UserCheck,
      },
      {
        title: 'Legal Notice to Builder',
        desc: 'Our lawyers send a formal legal notice to the builder citing their obligation under Section 11(4)(f) of RERA 2016 and the MOFA to execute the conveyance deed within 3 months of OC and demand compliance within 30 days.',
        icon: FileSearch,
      },
      {
        title: 'Deemed Conveyance Application (if Required)',
        desc: 'If the builder fails to respond or refuses, we file the Deemed Conveyance application before the District Deputy Registrar with all supporting documents. The DDR verifies and issues the Sanad (order) authorising registration.',
        icon: CheckCircle2,
      },
      {
        title: 'Registration of Conveyance Deed',
        desc: 'Once the builder (or DDR as deemed authority) executes the deed, we arrange registration at the Sub-Registrar office. Stamp duty at the applicable rate is paid on the land value; the society receives the registered deed.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'Conveyance deed registration through builder consent takes 30–60 days; the Deemed Conveyance process before the DDR typically takes 6–18 months depending on document completeness and hearing schedule.',
    documents: [
      {
        category: 'Society & Building Documents',
        list: [
          'Society registration certificate under Maharashtra Co-operative Societies Act',
          'Occupancy Certificate from BMC/PMC/NMMC or relevant authority',
          'Building plan approval, IOD, and commencement certificate',
        ],
      },
      {
        category: 'Title & Revenue Records',
        list: [
          'Property card (Milkat Patrika) and 7/12 extract of the land',
          'NA (Non-Agricultural Land) order and ULC clearance (if applicable)',
          'Encumbrance Certificate and Index II from Sub-Registrar',
        ],
      },
      {
        category: 'Flat Owner & Tax Documents',
        list: [
          'List of all flat owners with registered sale deed numbers',
          'Share certificates issued by the society to all members',
          'Latest property tax receipts paid to local authority',
        ],
      },
    ],
    compliance: [
      {
        title: 'RERA Complaint for Builder Non-Compliance',
        desc: 'If the builder fails to execute the conveyance deed after OC, the society or any flat owner can file a complaint with the RERA Authority under Section 31 of RERA 2016. The builder can be penalised up to 10% of the project cost for non-compliance.',
      },
      {
        title: 'Property Tax in Society Name',
        desc: 'After conveyance, the society must apply to the local authority (BMC/PMC) for property tax assessment transfer from the builder&#39;s name to the society&#39;s name. This affects the property tax computation and demand notices.',
      },
      {
        title: 'Annual Society Returns Post-Conveyance',
        desc: 'Once the conveyance deed is registered, the society must file annual returns with the Registrar of Co-operative Societies, maintain audited accounts, and comply with Maharashtra Co-operative Societies Act 1960 governance requirements.',
      },
      {
        title: 'Stamp Duty on Conveyance',
        desc: 'In Maharashtra, stamp duty on a conveyance deed is 5% (plus local body surcharge) of the land value. However, if all individual flat sale deeds have already borne full stamp duty, a set-off/exemption may be available. Legal advice is essential to avoid double taxation.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between a Sale Deed and a Conveyance Deed?',
        a: 'A Sale Deed transfers ownership of a specific flat/unit to an individual buyer. A Conveyance Deed transfers the entire land and building (including common areas) from the builder to the housing society or apartment owners&#39; association as a whole. Both are necessary — individual flat owners need their sale deeds; the society needs the conveyance deed for collective land ownership.',
      },
      {
        q: 'What is Deemed Conveyance and how does it work in Maharashtra?',
        a: 'Deemed Conveyance (under MOFA Amendment Act 2008) allows a housing society to obtain the conveyance deed directly from the government (District Deputy Registrar) when the builder refuses or delays execution. The society files an application with the DDR with all title documents, pays stamp duty, and upon the DDR&#39;s order, the conveyance is registered without the builder&#39;s signature.',
      },
      {
        q: 'Is conveyance deed required for a builder floor / independent house?',
        a: 'For individual plots or independent houses where the buyer directly purchases land and constructs, the Sale Deed itself transfers the land title, making a separate conveyance deed unnecessary. Conveyance deed is specifically relevant for multi-unit residential complexes and cooperative housing societies where a common builder sells individual units.',
      },
      {
        q: 'What happens if the builder has taken a loan against the land?',
        a: 'If the builder has mortgaged the land to a bank, a No-Objection Certificate (NOC) and Deed of Release from the bank is mandatory before executing the conveyance deed. This is a common complication — our lawyers conduct a CERSAI search and Sub-Registrar encumbrance check to identify any such charges before proceeding.',
      },
      {
        q: 'Can a society apply for FSI benefits without a conveyance deed?',
        a: 'No. A cooperative housing society must possess the registered conveyance deed to apply for FSI (Floor Space Index) benefits, TDR (Transfer of Development Rights), or self-redevelopment under Maharashtra government schemes. Without conveyance, the society has no legal title to the land and cannot utilise development rights.',
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
