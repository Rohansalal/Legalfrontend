'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function CersaiVerificationPage() {
  const data = {
    title: 'CERSAI Verification',
    description:
      'Search the Central Registry of Securitisation Asset Reconstruction and Security Interest to confirm your property is not mortgaged to any bank or financial institution before purchase.',
    heroBadges: ['SARFAESI Act 2002', 'Central Registry Search', 'Equitable Mortgage Detection'],
    introTitle: 'What is CERSAI and Why is Verification Critical?',
    introContent: (
      <p>
        CERSAI (Central Registry of Securitisation Asset Reconstruction and Security Interest of India) is a central online government registry established under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act) for the purpose of registration of security interests (mortgages and charges) created on immovable and movable properties. It was operationalised in 2011 and is operated as a government company under the Ministry of Finance. All banks, housing finance companies, and financial institutions are mandatorily required to register any mortgage (both equitable mortgage created by deposit of title deeds, and registered mortgage deed) on CERSAI within 30 days of its creation. A CERSAI search is an indispensable part of any property due diligence because: (a) equitable mortgages (created by deposit of title deeds with a bank) are NOT registered at the Sub-Registrar&#39;s office and will NOT appear in a standard Encumbrance Certificate — they appear only on CERSAI; (b) properties used as collateral for multiple loans by the same borrower (multi-banking fraud) are detectable through CERSAI; (c) a CERSAI search confirms that the seller&#39;s title is not pledged as security interest to any lender; and (d) banks use CERSAI to verify no prior charge exists before creating a new mortgage. If a CERSAI search reveals an active security interest on a property you are buying, it means a bank has a charge over that property and can invoke SARFAESI to take possession and sell the property to recover its dues — even from the new buyer who purchased in good faith (in some circumstances). The CERSAI search is available online at cersai.org.in to any person (public search) for a nominal fee of &#x20b9;10 per search — making it one of the most cost-effective due diligence tools available to property buyers in India.
      </p>
    ),
    detailsTitle: 'Why CERSAI Search is Essential Before Property Purchase',
    details: [
      {
        title: 'Detects Equitable Mortgages',
        desc: 'Equitable mortgages (home loans where title deeds are deposited with banks) are not registered at the Sub-Registrar and will not appear in the EC. A CERSAI search is the only way to detect such mortgages — making it a critical supplement to the standard Encumbrance Certificate.',
        icon: ShieldCheck,
      },
      {
        title: 'Prevents Multi-Banking Fraud',
        desc: 'Fraudulent borrowers sometimes pledge the same property as collateral to multiple lenders. CERSAI reveals all registered security interests on a single property — if multiple banks appear as charge holders on the same property, it is a serious red flag requiring immediate investigation.',
        icon: Zap,
      },
      {
        title: 'SARFAESI Protection',
        desc: 'Under SARFAESI Act, a bank with a registered security interest can take possession of and sell a mortgaged property without court intervention. Buying a property with an active CERSAI charge means inheriting this risk. A clean CERSAI record is essential for safe property purchase.',
        icon: Globe,
      },
      {
        title: 'Bank Loan Pre-Sanction Requirement',
        desc: 'All banks and NBFCs mandatorily conduct a CERSAI search before creating a new mortgage on a property being purchased with a home loan. Buyers taking loans should ensure their bank conducts this search — and independent buyers should conduct it themselves to avoid surprises.',
        icon: Award,
      },
    ],
    requirements: [
      'Property details: survey number / plot number / CTS number / door number',
      'State, district, and Sub-Registrar jurisdiction of the property',
      'Name of the current owner / mortgagor (for name-based search)',
      'Asset category: immovable property / movable property (specify)',
      'Registration number of the charge (if available, for direct search)',
      'CERSAI portal login or access through authorised intermediary',
    ],
    processTitle: 'How to Conduct a CERSAI Verification',
    processIntro:
      'CERSAI search is a quick, online process that every property buyer should conduct — but interpreting the results and cross-referencing with EC and title documents requires professional expertise. We handle the search and interpretation.',
    processSteps: [
      {
        title: 'Property & Owner Identification',
        desc: 'We compile the exact property details — survey/CTS/plot number, state, district, and owner&#39;s name — as appearing in the title documents. Accurate identification is critical since CERSAI searches can be done by property details or by the borrower&#39;s name.',
        icon: UserCheck,
      },
      {
        title: 'CERSAI Online Search',
        desc: 'We access the CERSAI portal (cersai.org.in), pay the nominal search fee (&#x20b9;10 per search), and conduct searches both by property details and by the owner&#39;s name to identify all registered security interests. We also search for any Asset Reconstruction Company (ARC) assignments.',
        icon: FileSearch,
      },
      {
        title: 'Results Interpretation',
        desc: 'A clean CERSAI search (no results) confirms no registered security interest exists. If a charge appears, we determine whether it is satisfied (but not removed — banks sometimes forget to release CERSAI charges after loan repayment) or active. We advise on how to proceed in each case.',
        icon: CheckCircle2,
      },
      {
        title: 'Cross-Reference with EC & Title',
        desc: 'We cross-reference CERSAI findings with the Sub-Registrar EC and title documents. Discrepancies (e.g., CERSAI shows active charge but EC shows discharge deed) require further investigation. We provide a consolidated report combining EC + CERSAI + title search findings.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'A CERSAI search is completed online within minutes, but result interpretation and report preparation takes 1–2 working days. We recommend combining CERSAI search with EC and title search for a complete encumbrance picture.',
    documents: [
      {
        category: 'Property Identification',
        list: [
          'Survey number / CTS number / plot number / door number',
          'State, district, taluk, and village/ward details of the property',
          'Latest property tax receipt or encumbrance certificate for reference',
        ],
      },
      {
        category: 'Owner & Charge Details',
        list: [
          'Full name of the property owner / mortgagor as in title documents',
          'PAN of the owner (for name-based CERSAI search accuracy)',
          'Existing charge registration number (if known, from bank documents)',
        ],
      },
      {
        category: 'Supporting Title Documents',
        list: [
          'Registered sale deed (latest) showing ownership',
          'Encumbrance Certificate (Form 15/16) for cross-reference',
          'Any existing NOC or discharge letter from banks (if mortgage is claimed to be repaid)',
        ],
      },
    ],
    compliance: [
      {
        title: 'Demand CERSAI Release After Loan Repayment',
        desc: 'After fully repaying a home loan, the borrower must ensure the bank removes (releases) the CERSAI charge within 30 days of loan closure. Banks are mandated to file a satisfaction of charge on CERSAI upon loan closure. A pending CERSAI charge despite loan repayment can block future sale of the property.',
      },
      {
        title: 'Banks Must Register Within 30 Days',
        desc: 'Under the SARFAESI Act and CERSAI regulations, every lender must register a security interest on CERSAI within 30 days of mortgage creation. Failure to register on time attracts penalties but, critically, also weakens the bank\'s priority claim against subsequent mortgagees who have registered on CERSAI.',
      },
      {
        title: 'ARC Assignments Must Be Verified',
        desc: 'If a property owner&#39;s loan has been assigned to an Asset Reconstruction Company (ARC) like NARCL, ARCIL, or others, this assignment appears on CERSAI. Buyers must check for ARC assignments, which indicate that the original bank has transferred its rights — and the ARC now has SARFAESI enforcement rights over the property.',
      },
      {
        title: 'CERSAI Charges for Movable Assets',
        desc: 'CERSAI also registers security interests on movable property (vehicles, equipment, stock) under SARFAESI. For commercial/industrial property purchases that include plant and machinery, a CERSAI search on movable assets must also be conducted to ensure no charge exists on the equipment being transferred with the property.',
      },
    ],
    faqs: [
      {
        q: 'Can anyone do a CERSAI search or is it restricted?',
        a: 'A public search on CERSAI is available to any person without restriction. The CERSAI portal (cersai.org.in) allows public users to search by property details or borrower name for a nominal fee of &#x20b9;10 per search. This public search capability is one of the most powerful consumer protection tools for property buyers in India.',
      },
      {
        q: 'What does an active CERSAI charge mean when buying a property?',
        a: 'An active CERSAI charge means a bank or financial institution currently holds a registered security interest (mortgage) on the property. The seller must clear this loan and obtain a Release of Charge from the bank before the property can be sold. The buyer should insist on: (a) full loan repayment; (b) bank NOC; (c) Deed of Release registered at Sub-Registrar; and (d) CERSAI charge removed before completing the purchase.',
      },
      {
        q: 'Is CERSAI search a substitute for the Encumbrance Certificate?',
        a: 'No. CERSAI and EC are complementary — not substitutes. EC (from Sub-Registrar) shows registered mortgages (mortgage deed), sale deeds, and other registered transactions. CERSAI shows equitable mortgages (created by deposit of title deeds) and other security interests that are not registered at the Sub-Registrar. A comprehensive encumbrance check requires both EC and CERSAI search.',
      },
      {
        q: 'What is the penalty for a bank not registering on CERSAI?',
        a: 'Under Section 23C of the SARFAESI Act, if a secured creditor fails to register the security interest on CERSAI within the prescribed period (30 days), the security interest cannot be enforced against a subsequent secured creditor who has registered their interest on CERSAI. Additionally, the RBI may impose regulatory penalties on the bank for non-compliance with CERSAI registration requirements.',
      },
      {
        q: 'Does CERSAI apply to agricultural land mortgages?',
        a: 'SARFAESI Act and CERSAI registration apply to mortgages of all immovable property including agricultural land — subject to the caveat that SARFAESI enforcement (taking possession without court order) is not applicable to agricultural land under Section 31(i) of the SARFAESI Act. However, CERSAI registration of the mortgage is still required and the mortgage remains enforceable through civil court proceedings.',
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
