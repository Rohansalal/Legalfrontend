'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function PermissionToMortgagePage() {
  const data = {
    title: 'Permission to Mortgage (PTM)',
    description:
      'Obtain the legally required No-Objection and Permission to Mortgage (PTM) from your cooperative housing society before availing a home loan — mandatory under Maharashtra Co-operative Societies Act.',
    heroBadges: ['Maharashtra Co-op Societies Act', '3-Month Society Deadline', 'Bank Home Loan Prerequisite'],
    introTitle: 'What is Permission to Mortgage (PTM)?',
    introContent: (
      <p>
        Permission to Mortgage (PTM) is a formal No-Objection Certificate issued by a Cooperative Housing Society to one of its members, permitting that member to mortgage their flat/unit to a bank or financial institution as security for a loan. PTM is governed primarily by Section 29(1) of the Maharashtra Co-operative Societies Act, 1960 (MCS Act) and the corresponding provisions of other state Co-operative Societies Acts. When a member of a cooperative housing society takes a home loan (or Loan Against Property), the bank requires the society&#39;s formal no-objection because the society has a superior lien on the flat under the MCS Act — meaning the society&#39;s claim for outstanding maintenance dues takes precedence over the bank&#39;s mortgage in some circumstances. Without the PTM, many banks (particularly PSU banks and large private sector banks with cautious legal departments) will refuse to disburse the loan, as the mortgage without PTM may be legally challenged later. Under Section 29(1) of the MCS Act, a member has the right to mortgage their flat to a housing finance institution (defined to include banks approved by the State Government) without necessarily requiring the society&#39;s prior consent — however, the member must inform the society and the society must record the mortgage. In practice, banks interpret this broadly and require a formal PTM letter. The society cannot unreasonably withhold or delay the PTM — it must respond within 3 months of the member&#39;s application. An unreasonable refusal or undue delay entitles the member to approach the Registrar of Co-operative Societies or the Co-operative Court for relief. The PTM letter typically confirms: (a) the member is in good standing with no outstanding dues; (b) the society has no objection to the member mortgaging the flat; (c) the bank&#39;s security interest is noted in the society&#39;s records; and (d) the society will not exercise any prior lien over the flat without notifying the bank.
      </p>
    ),
    detailsTitle: 'Why PTM is Essential for Your Home Loan',
    details: [
      {
        title: 'Bank Loan Disbursement Gateway',
        desc: 'Most banks and housing finance companies (HFCs) require the PTM letter from the cooperative society before disbursing the home loan amount. Without PTM, the bank\'s mortgage over a society flat may be legally incomplete, making the lender unwilling to disburse.',
        icon: ShieldCheck,
      },
      {
        title: 'Protects Bank\'s Security Interest',
        desc: 'PTM formally records the bank\'s mortgage in the society\'s books, ensuring the society acknowledges the bank\'s charge. This prevents the society from later selling the flat under its lien for dues arrears without notifying the bank first.',
        icon: Zap,
      },
      {
        title: 'Confirms Member\'s Good Standing',
        desc: 'The PTM process triggers a dues verification by the society — confirming the member has no pending maintenance arrears, special levy dues, or repair fund contributions. This gives the bank confidence in the borrower\'s property status.',
        icon: Globe,
      },
      {
        title: 'Legal Right Against Unreasonable Refusal',
        desc: 'The law protects members against societies that unreasonably withhold PTM. If a society fails to grant PTM within 3 months without valid reason, the member can approach the Registrar of Co-operative Societies, the Divisional Joint Registrar, or the Co-operative Court for a mandatory order.',
        icon: Award,
      },
    ],
    requirements: [
      'Society membership details and share certificate copy',
      'Formal PTM application letter addressed to the society',
      'Bank sanction letter mentioning the loan amount and property details',
      'Proof of no-dues: latest maintenance receipt and society dues clearance',
      'Copy of registered sale deed / Agreement to Sale (for bank\'s reference in PTM application)',
      'Aadhaar and PAN of the member applying for PTM',
    ],
    processTitle: 'How to Obtain Permission to Mortgage from Your Society',
    processIntro:
      'The PTM process requires a well-drafted application to the society, coordination with the bank\'s legal department, and — if the society is uncooperative — escalation to the Registrar of Co-operative Societies. Our team handles end-to-end.',
    processSteps: [
      {
        title: 'Draft PTM Application to Society',
        desc: 'We draft a formal PTM application letter to the society committee identifying the bank, loan amount, property details, and requesting permission under Section 29(1) of the MCS Act. The application includes supporting documents: bank sanction letter, sale deed copy, and KYC.',
        icon: UserCheck,
      },
      {
        title: 'Dues Clearance Verification',
        desc: 'We verify that all outstanding maintenance dues, special levies, and repair fund contributions are cleared before the application — as societies use dues outstanding as a ground to withhold PTM. A dues clearance certificate is obtained from the society accountant.',
        icon: FileSearch,
      },
      {
        title: 'Society Committee Approval',
        desc: 'The society committee reviews the application at the next Managing Committee meeting (typically monthly). Upon approval, the society issues the PTM letter confirming no-objection to the mortgage and recording the bank\'s charge in the society\'s mortgage register.',
        icon: CheckCircle2,
      },
      {
        title: 'PTM Letter to Bank & Mortgage Registration',
        desc: 'The PTM letter is submitted to the bank&#39;s legal department. The bank then proceeds with home loan disbursement and creates the equitable mortgage by depositing title deeds. The bank registers the mortgage on CERSAI within 30 days.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'PTM issuance typically takes 30–45 days depending on the society\'s committee meeting schedule. Expedited PTM (in emergency) may be arranged through urgent application and correspondence with the society committee.',
    documents: [
      {
        category: 'PTM Application Documents',
        list: [
          'Formal PTM application letter to society committee',
          'Bank\'s home loan sanction letter with loan amount and terms',
          'Proposed mortgage deed or equitable mortgage details',
        ],
      },
      {
        category: 'Member & Property Documents',
        list: [
          'Society share certificate in the member\'s name',
          'Registered Sale Deed / Gift Deed proving ownership',
          'Latest maintenance receipts showing no dues outstanding',
        ],
      },
      {
        category: 'Identity & Compliance',
        list: [
          'Aadhaar Card and PAN Card of the member',
          'Society membership register extract confirming membership',
          'Dues clearance certificate from society accountant',
        ],
      },
    ],
    compliance: [
      {
        title: 'Inform Society Before Mortgage Creation',
        desc: 'Under Section 29(1) of the MCS Act, while the member has a right to mortgage to an approved housing finance institution, the society must be formally informed about the mortgage. Failure to inform can technically give the society grounds to contest the bank\'s priority — always obtain PTM before creating the mortgage.',
      },
      {
        title: 'Bank Must Note Society\'s Lien Position',
        desc: 'The bank should acknowledge in its mortgage acceptance that the society retains a superior lien for outstanding dues under Section 31 of the MCS Act. This is standard practice in well-drafted home loan sanction letters for society flats.',
      },
      {
        title: 'CERSAI Registration After Mortgage',
        desc: 'Once the equitable mortgage is created (title deeds deposited with the bank), the bank is mandated to register the security interest on CERSAI within 30 days. The member should confirm this registration and obtain the CERSAI certificate for their records.',
      },
      {
        title: 'PTM Renewal on Loan Balance Transfer',
        desc: 'If the member transfers the home loan to another bank (balance transfer), a fresh PTM may be required from the society for the new lender. The old bank&#39;s mortgage must be discharged (CERSAI release), and the new bank obtains a fresh PTM and creates a new mortgage. This is a common oversight during balance transfers.',
      },
    ],
    faqs: [
      {
        q: 'Can a housing society refuse to grant PTM?',
        a: 'A society can legitimately refuse PTM only on valid grounds — such as outstanding dues by the member. It cannot refuse PTM on arbitrary grounds. Under Section 29(1) of the MCS Act, a member\'s right to mortgage to an approved housing finance institution cannot be unreasonably restricted. If refused without valid reason, the member can file a complaint before the Registrar of Co-operative Societies or approach the Co-operative Court.',
      },
      {
        q: 'Is PTM required if I take a loan from a non-bank financial institution?',
        a: 'PTM under Section 29(1) of the MCS Act is specifically for mortgages to &#x201c;housing finance institutions&#x201d; as approved by the State Government (which includes banks, HFCs registered with NHB, and approved NBFCs). For other lenders not on the approved list, the member may technically need the society\'s full consent under general co-operative principles. Always check the society&#39;s bye-laws and take legal advice for non-standard lenders.',
      },
      {
        q: 'Does the society have a superior lien over the bank\'s mortgage?',
        a: 'Under Section 31 of the Maharashtra Co-operative Societies Act, the society has a first charge on the property for recovery of all dues — meaning the society\'s lien for outstanding maintenance dues technically takes precedence over the bank\'s mortgage. In practice, this lien covers only the specific outstanding dues, not the entire property value, and banks factor this in when granting PTM-based loans.',
      },
      {
        q: 'What if I create a mortgage without PTM?',
        a: 'Creating a mortgage on a society flat without PTM is technically valid as between the member and the bank, but creates risks: (a) the society may invoke its superior lien for dues; (b) in case of default, the bank\'s SARFAESI enforcement rights on a society flat without PTM may be legally challenged; (c) the bank may face difficulties in selling the mortgaged flat to a third party at auction. Most informed lenders will not disburse without PTM.',
      },
      {
        q: 'Does PTM expire and need renewal?',
        a: 'A PTM letter does not have an automatic expiry. However, banks typically require a fresh PTM if: the member changes banks (balance transfer), the loan amount is significantly enhanced (top-up loan), or the PTM was issued more than 3–6 months ago and the bank requires current confirmation. Societies generally issue fresh PTMs upon request without issue if no new dues have accumulated.',
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
