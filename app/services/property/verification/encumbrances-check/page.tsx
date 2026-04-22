'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function EncumbrancesCheckPage() {
  const data = {
    title: 'Encumbrances Check (EC)',
    description:
      'Verify all registered charges, mortgages, and transactions on a property with an official Encumbrance Certificate from the Sub-Registrar — a mandatory step before any property purchase or bank loan.',
    heroBadges: ['Form 15 & Form 16 EC', 'Online via State Portals', 'Bank Loan & Mutation Prerequisite'],
    introTitle: 'What is an Encumbrance Certificate (EC)?',
    introContent: (
      <p>
        An Encumbrance Certificate (EC) is an official document issued by the Sub-Registrar of Assurances that records all registered transactions — mortgages (equitable and registered), sale deeds, gift deeds, lease deeds, partition deeds, court decrees, and any other charges or liens — on a specific property for a specified period. The EC is extracted from the government&#39;s registration database (Index II / General Index) and lists every document that has been registered in relation to the property during the requested search period. It comes in two forms: Form 15 (if any registered transactions exist during the period) and Form 16 (Nil Encumbrance Certificate, if no transactions are found — meaning the property has not been bought, sold, or mortgaged in the specified period). The EC is a critical document for: (a) verifying whether a property is currently mortgaged to any bank or financial institution; (b) confirming that the current seller has acquired the property through a legitimate registered transfer; (c) detecting whether any court-ordered attachment or charge exists on the property; (d) being presented to banks as part of the home loan application dossier; and (e) applying for property mutation at the municipal corporation or tehsil office, where the revenue officer verifies the EC to ensure no outstanding claims exist before updating records. In Karnataka, the EC is available online through the Kaveri portal (kaveri.karnataka.gov.in); in Maharashtra, through the IGR Maharashtra (igrmaharashtra.gov.in); in Tamil Nadu through the TNREGINET portal; and in Andhra Pradesh / Telangana through the IGRS AP/TS portals. Despite online availability, an EC only reflects &#x201c;registered&#x201d; transactions — unregistered transactions (which are void for immovable property but may still reflect in unrecorded possession changes) and CERSAI-registered equitable mortgages (which must be separately checked) may not appear in an EC.
      </p>
    ),
    detailsTitle: 'Why Encumbrance Certificate is Indispensable',
    details: [
      {
        title: 'Reveals Hidden Mortgages',
        desc: 'An EC is the primary tool to detect whether a property is mortgaged to a bank. If a seller has taken a home loan but not disclosed it, the EC will show the registered mortgage. Buying a mortgaged property without clearing the loan can result in the bank enforcing SARFAESI rights against the new owner.',
        icon: ShieldCheck,
      },
      {
        title: 'Confirms Ownership Chain',
        desc: 'An EC shows every registered sale, gift, or inheritance of the property for the requested period — allowing the buyer to verify the seller\'s ownership and the continuity of the title chain without individually searching each transaction in the registration index.',
        icon: Zap,
      },
      {
        title: 'Bank Loan Mandatory Requirement',
        desc: 'All banks, housing finance companies, and NBFCs require an EC for the full duration of the property\'s ownership (or at least 30 years) as part of the home loan approval process. An EC covering only a few years is insufficient; banks insist on a complete chain-of-ownership EC.',
        icon: Globe,
      },
      {
        title: 'Mutation & Tax Transfer',
        desc: 'Municipal corporations and tehsil offices require an EC as part of the mutation application to verify no existing charge prevents the transfer of revenue records. An EC is particularly critical for inherited property mutations where no sale deed exists.',
        icon: Award,
      },
    ],
    requirements: [
      'Exact property details: survey number / plot number / CTS number / door number',
      'Name(s) of the property owner(s) for the search period',
      'The period for which the EC is required (typically 30 years)',
      'State and Sub-Registrar jurisdiction of the property',
      'Registration details of the latest deed (for efficient search)',
      'Application form and nominal fee as prescribed by the Sub-Registrar\'s office',
    ],
    processTitle: 'How to Obtain an Encumbrance Certificate',
    processIntro:
      'Obtaining a comprehensive EC requires identifying the correct Sub-Registrar jurisdiction and requesting a search covering the full ownership period. Our team obtains ECs from all states, both online and offline.',
    processSteps: [
      {
        title: 'Identify Sub-Registrar Jurisdiction',
        desc: 'Every property falls under the jurisdiction of a specific Sub-Registrar office based on its location. We identify the correct Sub-Registrar office and the relevant General Index or property index for your property type (urban/rural, residential/commercial).',
        icon: UserCheck,
      },
      {
        title: 'Submit EC Application',
        desc: 'We submit the EC application (online through state portals like Kaveri, IGR Maharashtra, TNREGINET, or in-person for states without portals) specifying the exact property details and the search period required, along with the prescribed fee.',
        icon: FileSearch,
      },
      {
        title: 'Search Period Verification',
        desc: 'For property purchase, we request an EC going back 30 years minimum. For mutation of a recently inherited property, a shorter period may suffice. We verify that the EC period covers all transactions relevant to the ownership chain.',
        icon: CheckCircle2,
      },
      {
        title: 'EC Interpretation & Advice',
        desc: 'Once received, we interpret the EC entries — identifying each transaction, verifying that mortgages are cleared (discharge deeds registered), flagging any unexplained or concerning entries, and advising the buyer on next steps including CERSAI search.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'Online ECs are available within 24–72 hours through state portals. Offline EC applications at Sub-Registrar offices typically take 3–15 working days depending on the state and workload.',
    documents: [
      {
        category: 'Property Identification',
        list: [
          'Survey number / CTS number / plot number / door number of the property',
          'Taluk, district, and Sub-Registrar office jurisdiction details',
          'Latest property tax receipt or khata for exact identification',
        ],
      },
      {
        category: 'Ownership Reference Documents',
        list: [
          'Registered sale deed (most recent) for cross-reference with EC entries',
          'Mutation certificate or khata showing current owner\'s name',
          'Previous EC (if available) to confirm continuity of the new EC period',
        ],
      },
      {
        category: 'Application & Fee',
        list: [
          'Duly filled EC application form (state-specific format)',
          'Prescribed fee: typically &#x20b9;200–&#x20b9;2,000 depending on state and period',
          'Online portal credentials or Sub-Registrar office acknowledgment slip',
        ],
      },
    ],
    compliance: [
      {
        title: 'Supplement EC with CERSAI Search',
        desc: 'An EC from the Sub-Registrar only reflects registered mortgage deeds. Equitable mortgages (created by deposit of title deeds, common with bank loans) are registered on CERSAI, not at the Sub-Registrar. A comprehensive encumbrance check must include both the EC from the Sub-Registrar and a CERSAI search.',
      },
      {
        title: 'Verify Mortgage Discharge Entries',
        desc: 'If the EC shows a registered mortgage deed, verify that a corresponding Deed of Discharge or Release has been registered. An undischarged mortgage entry is a major red flag — the bank may still have a charge on the property despite the seller claiming the loan is fully repaid.',
      },
      {
        title: 'EC for Entire Ownership Period',
        desc: 'Banks and buyers should insist on an EC covering the entire period from the property\'s first registration (or at least 30 years). A short-period EC may miss old encumbrances. In practice, most banks insist on an EC from the property\'s origin or at least from the year the first registered transaction appears.',
      },
      {
        title: 'Annual EC Update for Mortgaged Properties',
        desc: 'If a property is used as collateral for a running bank loan, the bank typically requests an updated EC annually to ensure no new charges have been created on the same property. Property owners with multiple loans must be vigilant as creating a second charge without the first lender&#39;s NOC violates loan covenants.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between Form 15 and Form 16 EC?',
        a: 'Form 15 (Encumbrance Certificate) is issued when one or more registered transactions exist on the property during the requested search period — it lists all registered deeds including sales, mortgages, gifts, and court orders. Form 16 (Nil Encumbrance Certificate) is issued when no registered transaction is found during the period — indicating the property has not been transacted or mortgaged during that time.',
      },
      {
        q: 'Does an Encumbrance Certificate show court attachments?',
        a: 'An EC shows only transactions registered at the Sub-Registrar&#39;s office. Court attachments (under Order XXI CPC or Income Tax Act) may be registered at the Sub-Registrar as a lis pendens notice, in which case they appear in the EC. However, not all court orders are registered — a separate court record search is necessary for a complete picture.',
      },
      {
        q: 'Can I get an EC for any state online?',
        a: 'Online EC availability varies by state. Karnataka (Kaveri portal), Maharashtra (IGR Maharashtra), Tamil Nadu (TNREGINET), Andhra Pradesh (IGRS AP), and Telangana (IGRS TS) offer online EC applications. States like UP, Bihar, Rajasthan, and Madhya Pradesh still largely require in-person applications at Sub-Registrar offices, though some districts have partial online access.',
      },
      {
        q: 'Does a Nil EC (Form 16) guarantee clear title?',
        a: 'No. A Nil EC only means no transaction was registered at the Sub-Registrar for that period — it does not guarantee clear title. There may be: unregistered possession disputes, revenue record discrepancies, court cases, CERSAI-registered equitable mortgages, or government acquisition notifications that are not reflected in the EC. A Nil EC is a necessary but not sufficient condition for clear title.',
      },
      {
        q: 'What is the fee for obtaining an Encumbrance Certificate?',
        a: 'EC fees vary by state and search period. In Karnataka, the online fee is &#x20b9;25 per year of search through Kaveri. In Maharashtra, the fee is approximately &#x20b9;300 for online access through IGR portal. Offline EC applications at Sub-Registrar offices typically cost &#x20b9;200–&#x20b9;500 for short periods and more for longer searches. Urgent/priority processing may attract additional fees.',
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
