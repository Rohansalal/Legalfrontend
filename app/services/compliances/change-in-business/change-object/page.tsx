'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function ChangeObjectPage() {
  const data = {
    title: 'Change of Object / Business Activity',
    description:
      'Legal assistance for amending the Memorandum of Association (MOA) to change or add business objects — Board Resolution, EGM Special Resolution, MGT-14, INC-27 filing, and ROC approval managed by experts.',
    heroBadges: ['MOA Amendment Experts', 'EGM & Special Resolution', 'INC-27 Filing'],
    introTitle: 'What is Change of Object Clause in MOA?',
    introContent: (
      <p>
        The Objects Clause (Clause III) in the Memorandum of Association (MOA) defines the business activities a company is authorized to carry out. Under the doctrine of ultra vires, any activity not listed in the MOA is legally void. When a company wants to expand into a new business, add new products or services, or discontinue an existing activity, it must amend the Objects Clause through a formal legal process under Section 13 of the Companies Act, 2013. The process requires passing a Special Resolution at an Extraordinary General Meeting (EGM) with 3/4th majority of members present and voting. The Special Resolution must be filed via Form MGT-14 within 30 days. Form INC-27 is then filed to effect the MOA amendment. The ROC approves the change and issues an acknowledgment, after which the company can lawfully engage in the amended activities.
      </p>
    ),
    detailsTitle: 'Key Aspects of Object Clause Change',
    details: [
      {
        title: 'MOA Amendment — Objects Clause',
        desc: 'Amend Clause III of the MOA to add, modify, or remove business objects. The amended MOA must reflect the new objects after ROC approval.',
        icon: FileText,
      },
      {
        title: 'Special Resolution at EGM',
        desc: 'Pass a Special Resolution with 3/4th majority at EGM. 21 days clear notice to all members required with explanatory statement detailing the proposed changes.',
        icon: Users,
      },
      {
        title: 'MGT-14 & INC-27 Filing',
        desc: 'File Special Resolution with ROC via MGT-14 within 30 days. File INC-27 to register the MOA amendment. Attach updated MOA with revised Objects Clause.',
        icon: FileSearch,
      },
      {
        title: 'ROC Approval & Compliance',
        desc: 'ROC reviews and approves the amendment. After approval, the company may commence the new business activity. New licenses may be required for regulated activities.',
        icon: Award,
      },
    ],
    requirements: [
      'Current Certificate of Incorporation and CIN',
      'Existing MOA showing current Objects Clause',
      'Board Resolution authorizing the EGM',
      'EGM notice with explanatory statement (21 days clear notice)',
      'Certified copy of Special Resolution from EGM',
      'DSC of authorized director',
      'Amended MOA with revised Objects Clause (draft)',
      'Updated list of shareholders for dispatch of notice',
    ],
    processTitle: 'How to Change the Objects of a Company',
    processIntro:
      'Changing the business object involves amending the MOA and requires member approval. Our team manages the complete process.',
    processSteps: [
      {
        title: 'Draft Amended Objects Clause',
        desc: 'Our legal team drafts the new or revised Objects Clause for the MOA. The language must be clear, lawful, and aligned with the intended business activities.',
        icon: FileSearch,
      },
      {
        title: 'Board Meeting & EGM Notice',
        desc: 'Hold Board Meeting to approve EGM notice. Dispatch EGM notice with explanatory statement to all members at least 21 clear days before the EGM date.',
        icon: UserCheck,
      },
      {
        title: 'Pass Special Resolution at EGM',
        desc: 'At the EGM, pass the Special Resolution to amend the Objects Clause. Prepare certified EGM minutes. File MGT-14 with ROC within 30 days.',
        icon: FileCheck,
      },
      {
        title: 'File INC-27 & Update MOA',
        desc: 'File Form INC-27 with the amended MOA on the MCA portal. On ROC approval, update MOA records and commence the new business activity.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'Post-amendment, we assist in obtaining any sector-specific licenses required for the new business activity (FSSAI, SEBI, RBI, etc.).',
    documents: [
      {
        category: 'Legal Documents',
        list: [
          'Existing MOA and AOA',
          'Certificate of Incorporation',
          'List of all shareholders with addresses',
        ],
      },
      {
        category: 'Resolution Documents',
        list: [
          'Board Resolution (EGM notice approval)',
          'EGM Notice and Explanatory Statement',
          'Special Resolution certified copy',
        ],
      },
      {
        category: 'MCA Filing Documents',
        list: [
          'Form MGT-14 with Special Resolution',
          'Form INC-27 with amended MOA',
          'DSC of authorized director',
        ],
      },
    ],
    compliance: [
      {
        title: 'Ensure Objects Clause Completeness',
        desc: 'The Objects Clause must include all main business activities and ancillary activities clearly. Ambiguous or overbroad objects may be rejected by the ROC.',
      },
      {
        title: 'Sectoral Licensing Post-Amendment',
        desc: 'Some business activities (banking, insurance, NBFC, pharmaceuticals) require regulatory approvals from RBI, IRDAI, or other bodies before commencing operations.',
      },
      {
        title: 'GST Registration Update',
        desc: 'If the nature of business changes significantly, update the GST registration business description and product/service classification (SAC/HSN codes).',
      },
      {
        title: 'MSME & Other Registrations',
        desc: 'Update MSME Udyam registration and other sector-specific registrations to reflect the new business activity of the company.',
      },
    ],
    faqs: [
      {
        q: 'Can a company carry on activities not listed in the MOA?',
        a: 'No. Under the doctrine of ultra vires, any activity not listed in the Objects Clause of the MOA is legally void. The company must first amend the MOA to include the new activity.',
      },
      {
        q: 'How many objects can be added in one amendment?',
        a: 'There is no restriction on the number of objects that can be added in a single amendment. However, all proposed changes must be included in the Special Resolution passed at the EGM.',
      },
      {
        q: 'Is Central Government approval required for objects change?',
        a: 'No. Unlike name change or registered office state change, amendment of the Objects Clause only requires a Special Resolution filed with the ROC via MGT-14 and INC-27. No Central Government approval is needed.',
      },
      {
        q: 'What is the timeline for objects amendment?',
        a: 'After passing the Special Resolution and filing MGT-14 and INC-27, ROC approval typically takes 7–15 working days, subject to document completeness.',
      },
      {
        q: 'Does adding a new business object require any other licenses?',
        a: 'Depending on the new activity, additional licenses may be required — for example, FSSAI for food businesses, GST registration update, NBFC registration for financial activities, or import-export code for trade.',
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
