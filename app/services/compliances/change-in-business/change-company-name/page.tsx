'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function ChangeCompanyNamePage() {
  const data = {
    title: 'Change Company Name',
    description:
      'Complete assistance for changing your registered company name — Board Resolution, EGM, Special Resolution, RUN form for name availability, MGT-14, INC-24 filing, and ROC approval. Name change in 15–25 working days.',
    heroBadges: ['RUN Name Availability Check', 'MCA INC-24 Filing', 'End-to-End Process'],
    introTitle: 'What is a Company Name Change?',
    introContent: (
      <p>
        A company registered under the Companies Act, 2013 can change its name at any time by following the prescribed legal procedure. The name change requires an Extraordinary General Meeting (EGM) and approval by a Special Resolution (majority of at least 3/4th of votes cast). Before filing with the ROC, the proposed new name must be checked for availability and reserved using the RUN (Reserve Unique Name) form on the MCA portal. Once the EGM is conducted and the Special Resolution is passed, Form MGT-14 must be filed with the ROC within 30 days of passing the resolution. The Central Government approval (through INC-24) is also required as per Section 13 of the Companies Act. The ROC then issues a fresh Certificate of Incorporation reflecting the new name. All statutory documents, bank accounts, contracts, and licenses must be updated with the new name post-approval.
      </p>
    ),
    detailsTitle: 'Key Steps in Company Name Change',
    details: [
      {
        title: 'Name Availability via RUN',
        desc: 'Search and reserve the new company name using the RUN (Reserve Unique Name) form on the MCA portal before initiating the formal change process.',
        icon: FileSearch,
      },
      {
        title: 'Board & EGM Resolutions',
        desc: 'Pass Board Resolution to call an EGM. At the EGM, pass a Special Resolution (at least 3/4th majority) to approve the name change.',
        icon: Users,
      },
      {
        title: 'MGT-14 & INC-24 Filing',
        desc: 'File Special Resolution in Form MGT-14 within 30 days. File Form INC-24 for Central Government approval of the name change as required under Section 13.',
        icon: FileText,
      },
      {
        title: 'Fresh Certificate of Incorporation',
        desc: 'On approval, the ROC issues a fresh Certificate of Incorporation with the new name. Update all documents, contracts, and bank accounts accordingly.',
        icon: Award,
      },
    ],
    requirements: [
      'Current Certificate of Incorporation',
      'MOA and AOA of the company',
      'Board Resolution approving the EGM notice',
      'EGM Notice sent to all members with 21 days clear notice',
      'Special Resolution passed at EGM (3/4th majority)',
      'RUN form approval (proposed new name reserved)',
      'DSC of authorized director for MCA filing',
      'No-objection for use of sensitive words (if any)',
    ],
    processTitle: 'How to Change a Company Name',
    processIntro:
      'The name change process involves board approval, member consent, MCA filing, and ROC certificate — our team handles every step.',
    processSteps: [
      {
        title: 'Reserve New Name via RUN',
        desc: 'Search the MCA portal for name availability. File the RUN form with up to 2 alternative names. Name is reserved for 20 days upon approval.',
        icon: FileSearch,
      },
      {
        title: 'Board Meeting & EGM Notice',
        desc: 'Hold Board Meeting to approve EGM notice. Send EGM notice to all members with at least 21 clear days notice, stating the proposed name change.',
        icon: UserCheck,
      },
      {
        title: 'Pass Special Resolution at EGM',
        desc: 'At the EGM, obtain Special Resolution approving the name change. Prepare and certify the minutes. File MGT-14 within 30 days.',
        icon: FileCheck,
      },
      {
        title: 'File INC-24 & Receive New COI',
        desc: 'Submit Form INC-24 with all documents to the ROC. On approval, receive fresh Certificate of Incorporation with new name. Update all statutory records.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'After receiving the new COI, we assist you in updating bank accounts, GST registration, PAN/TAN, and other regulatory records.',
    documents: [
      {
        category: 'Company Documents',
        list: [
          'Certificate of Incorporation (current name)',
          'MOA and AOA',
          'PAN of the company',
        ],
      },
      {
        category: 'Resolution Documents',
        list: [
          'Board Resolution for EGM',
          'EGM Notice and Attendance Register',
          'Certified copy of Special Resolution',
        ],
      },
      {
        category: 'MCA Filing Documents',
        list: [
          'RUN form approval acknowledgment',
          'Form MGT-14 (Special Resolution filing)',
          'Form INC-24 with supporting documents',
        ],
      },
    ],
    compliance: [
      {
        title: 'Update GST Registration',
        desc: 'After name change, file GST amendment application within 15 days to update the business name in GSTIN records.',
      },
      {
        title: 'Update Bank & Financial Records',
        desc: 'Intimate all banks, financial institutions, lenders, and investment accounts about the name change with a copy of the new Certificate of Incorporation.',
      },
      {
        title: 'Update Contracts & Licenses',
        desc: 'Revise all existing contracts, agreements, licenses (FSSAI, MSME, import-export code, etc.) to reflect the new company name.',
      },
      {
        title: 'Update Statutory Registers',
        desc: 'Update MOA, AOA, letterheads, rubber stamps, and all statutory registers to reflect the new company name after ROC approval.',
      },
    ],
    faqs: [
      {
        q: 'How long does it take to change a company name?',
        a: 'The name change process typically takes 15–25 working days from the date of filing INC-24, subject to ROC processing time and document completeness.',
      },
      {
        q: 'Is Central Government approval required for name change?',
        a: 'Yes. Under Section 13 of the Companies Act, 2013, any change to the name clause of MOA requires Central Government approval, filed via Form INC-24.',
      },
      {
        q: 'Can I change the company name to anything I want?',
        a: 'No. The new name must be unique, not identical or similar to an existing company or trademark. Certain words like "Bank", "Insurance", "National", "Government" require prior regulatory approval.',
      },
      {
        q: 'Does name change affect the CIN of the company?',
        a: 'No. The Corporate Identification Number (CIN) does not change when the company name changes. Only the name portion is updated while the company\'s legal identity and history remain intact.',
      },
      {
        q: 'What happens to existing contracts after a name change?',
        a: 'Existing contracts remain valid. The company as a legal entity continues to be bound by old contracts. However, it is advisable to issue formal addendums to major contracts reflecting the new name.',
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
