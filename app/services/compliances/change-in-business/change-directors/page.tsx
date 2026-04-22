'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function ChangeDirectorsPage() {
  const data = {
    title: 'Change of Directors',
    description:
      'Expert assistance for appointment and resignation of directors — DIR-12 filing, DIR-11 resignation intimation, DIN application, board resolution, and ROC compliance. All changes processed within 7–10 working days.',
    heroBadges: ['DIR-12 & DIR-11 Experts', 'DIN Application', 'MCA Board Change Filing'],
    introTitle: 'What is Change of Directors in a Company?',
    introContent: (
      <p>
        Directors are the key management personnel of a company who are responsible for its governance and operations. The Companies Act, 2013 provides a detailed framework for appointment, resignation, and removal of directors. Any change in the board of directors — whether appointment, resignation, removal, or casual vacancy — must be intimated to the Registrar of Companies (ROC) through Form DIR-12 within 30 days of the change. When a director resigns, the resigning director can also file DIR-11 directly with the ROC as a safeguard. Before appointment, the incoming director must have a Director Identification Number (DIN) under Section 154 of the Act. Disqualification under Section 164 can prevent a person from being appointed as a director. The company must update the Register of Directors (Form MBP-1) and the statutory register within 7 days of the change.
      </p>
    ),
    detailsTitle: 'Key Aspects of Director Changes',
    details: [
      {
        title: 'Appointment of Director',
        desc: 'New directors can be appointed by the Board (additional director) or at an AGM. DIR-12 must be filed within 30 days. New director must have DIN and consent in DIR-2.',
        icon: UserCheck,
      },
      {
        title: 'Resignation of Director',
        desc: 'Director can resign by submitting written resignation to the company. Company must file DIR-12. Resigned director can independently file DIR-11 to intimate ROC.',
        icon: FileText,
      },
      {
        title: 'DIN Requirement',
        desc: 'Every director must have a unique Director Identification Number (DIN) obtained via the MCA portal. DIN must be active — DIR-3 KYC must be filed annually.',
        icon: ShieldCheck,
      },
      {
        title: 'Removal of Director',
        desc: 'A director can be removed by shareholders via Special Resolution at EGM under Section 169. 28 days notice required. Board cannot remove a director appointed by shareholders.',
        icon: Scale,
      },
    ],
    requirements: [
      'Board Resolution for appointment or accepting resignation',
      'Consent to Act as Director — Form DIR-2 (for new director)',
      'DIN of incoming director (or DIN application documents)',
      'Declaration under Section 164 (disqualification declaration)',
      'Written resignation letter (for resigning director)',
      'DSC of company authorized signatory',
      'PAN and Aadhaar of incoming director',
      'Address proof of incoming director',
    ],
    processTitle: 'How to Appoint or Remove a Director',
    processIntro:
      'Every director change — appointment, resignation, or removal — must be formally executed and filed with the ROC within 30 days.',
    processSteps: [
      {
        title: 'Obtain DIN for New Director',
        desc: 'If the incoming director does not have a DIN, apply for one via the MCA portal using PAN, Aadhaar, and photograph. DIN is allotted within 1–3 working days.',
        icon: FileSearch,
      },
      {
        title: 'Pass Board Resolution',
        desc: 'Hold a Board Meeting to formally appoint the new director or accept the resignation. Record minutes and obtain DIR-2 consent letter from new director.',
        icon: UserCheck,
      },
      {
        title: 'File DIR-12 with ROC',
        desc: 'File Form DIR-12 with the ROC within 30 days of the change. Attach Board Resolution, DIR-2, and proof of appointment/resignation.',
        icon: FileCheck,
      },
      {
        title: 'Update Statutory Registers',
        desc: 'Update the Register of Directors (MBP-1) and company records. Intimate banks, auditors, and other stakeholders of the director change.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We ensure all director changes are properly documented, filed, and updated across GST, bank, and other regulatory records.',
    documents: [
      {
        category: 'New Director Documents',
        list: [
          'PAN Card and Aadhaar Card',
          'Passport size photograph',
          'Address proof (bank statement or utility bill)',
        ],
      },
      {
        category: 'Resolution Documents',
        list: [
          'Board Resolution (appointment/acceptance of resignation)',
          'DIR-2 Consent to Act as Director',
          'Disqualification Declaration (Section 164)',
        ],
      },
      {
        category: 'MCA Filing Documents',
        list: [
          'Form DIR-12 with all attachments',
          'Form DIR-11 (filed by resigning director)',
          'DSC of authorized signatory',
        ],
      },
    ],
    compliance: [
      {
        title: 'Minimum Director Requirement',
        desc: 'A Pvt. Ltd. must have at least 2 directors and a Public Ltd. at least 3 directors at all times. Dropping below the minimum requires immediate appointment.',
      },
      {
        title: 'Resident Director Requirement',
        desc: 'Every company must have at least one director who has stayed in India for at least 182 days during the immediately preceding financial year.',
      },
      {
        title: 'Independent Director Requirement',
        desc: 'Listed companies and certain prescribed companies must have at least 1/3rd independent directors on the board as per SEBI LODR and Companies Act.',
      },
      {
        title: 'Annual DIR-3 KYC',
        desc: 'All directors with a DIN must file DIR-3 KYC annually by 30 September. Failure results in DIN deactivation and inability to sign MCA forms.',
      },
    ],
    faqs: [
      {
        q: 'What is the penalty for not filing DIR-12 within 30 days?',
        a: 'Late filing of DIR-12 attracts an additional fee of ₹100 per day per form with no upper cap. Prolonged non-filing can attract notices from the ROC.',
      },
      {
        q: 'Can a director resign if there are only 2 directors in a Pvt. Ltd.?',
        a: 'No. If resignation would reduce the number of directors below the statutory minimum (2 for Pvt. Ltd.), the resignation cannot take effect until a replacement is appointed.',
      },
      {
        q: 'What is the maximum number of directorships a person can hold?',
        a: 'A person cannot hold directorship in more than 20 companies, of which not more than 10 can be public companies, under Section 165 of the Companies Act, 2013.',
      },
      {
        q: 'Can a director be appointed without their consent?',
        a: 'No. A director must give written consent to act as director in Form DIR-2 before or at the time of their appointment. Appointment without consent is invalid.',
      },
      {
        q: 'How is a nominee director different from a regular director?',
        a: 'A nominee director is appointed by an investor, financial institution, or lender (not by shareholders) as per a contractual agreement. They have the same rights and obligations as regular directors but represent the nominating party\'s interests.',
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
