'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function DirectorDIR3KYCPage() {
  const data = {
    title: 'Director KYC — DIR-3 KYC Filing',
    description:
      'Annual DIR-3 KYC filing for all DIN holders — mandatory by 30 September each year. Avoid ₹5,000 penalty and DIN deactivation. Expert assistance for timely KYC submission for directors across India.',
    heroBadges: ['30 September Deadline', 'DIN Reactivation Available', 'Bulk Director KYC'],
    introTitle: 'What is DIR-3 KYC?',
    introContent: (
      <p>
        DIR-3 KYC is a mandatory annual compliance for all individuals who have been allotted a Director Identification Number (DIN) under the Companies Act, 2013, irrespective of whether the DIN holder is currently an active director or not. The Ministry of Corporate Affairs (MCA) introduced this requirement via the Companies (Appointment and Qualification of Directors) Amendment Rules, 2018 to maintain an updated and verified database of all directors in India. DIR-3 KYC must be filed every year by 30 September. Failure to file by the deadline results in deactivation of the DIN and a penalty of ₹5,000 for reactivation. Once deactivated, the DIN holder cannot sign any MCA forms until the KYC is completed and the DIN is reactivated. The process involves submitting personal KYC details including PAN, Aadhaar, mobile number, and email address — verified via OTP authentication.
      </p>
    ),
    detailsTitle: 'Key Facts About DIR-3 KYC',
    details: [
      {
        title: 'Annual Deadline — 30 September',
        desc: 'DIR-3 KYC must be filed every year by 30 September. For new DIN allotted during the financial year, KYC is due by 30 September of that year itself.',
        icon: Clock,
      },
      {
        title: 'DIN Deactivation on Non-Filing',
        desc: 'MCA deactivates the DIN on 1 October if KYC is not filed. Deactivated DIN holders cannot sign MCA forms or e-file any company documents.',
        icon: ShieldCheck,
      },
      {
        title: 'Penalty for Reactivation',
        desc: 'To reactivate a deactivated DIN, the director must file DIR-3 KYC with a ₹5,000 fee. No grace period or waiver is available once deactivated.',
        icon: Scale,
      },
      {
        title: 'OTP-Based Aadhaar/Mobile Verification',
        desc: 'DIR-3 KYC requires OTP verification via the registered mobile number and email linked to Aadhaar. DSC of the director is also required for signing.',
        icon: UserCheck,
      },
    ],
    requirements: [
      'Director Identification Number (DIN)',
      'PAN Card of the Director',
      'Aadhaar Card with active mobile number linked',
      'Unique mobile number (not already used in another DIR-3 KYC)',
      'Unique email address (not already used in another DIR-3 KYC)',
      'Passport (for foreign nationals in place of Aadhaar)',
      'Class 3 Digital Signature Certificate (DSC) of the director',
      'Passport-size photograph',
    ],
    processTitle: 'How to File DIR-3 KYC',
    processIntro:
      'DIR-3 KYC is a simple but time-sensitive compliance. Our team processes KYC filings for all your directors well before the deadline.',
    processSteps: [
      {
        title: 'Check DIN Status',
        desc: 'Verify DIN status on the MCA portal. Confirm whether DIR-3 KYC has already been filed for the current year or if the DIN is deactivated.',
        icon: FileSearch,
      },
      {
        title: 'Collect KYC Documents',
        desc: 'Gather PAN, Aadhaar, active mobile number, email, photograph, and DSC of the director. Ensure Aadhaar is linked to the mobile number for OTP.',
        icon: UserCheck,
      },
      {
        title: 'Fill & Submit DIR-3 KYC Form',
        desc: 'Fill in all mandatory details on the MCA portal. Verify via Aadhaar OTP and email OTP. Sign the form using the director\'s DSC and submit.',
        icon: FileCheck,
      },
      {
        title: 'Receive Confirmation & Update Records',
        desc: 'On successful submission, MCA sends a confirmation email. Update the company\'s records to reflect KYC compliance for all directors.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We manage bulk DIR-3 KYC for all directors across multiple companies and send reminders each year before the 30 September deadline.',
    documents: [
      {
        category: 'Identity Documents',
        list: [
          'PAN Card (mandatory)',
          'Aadhaar Card (for Indian residents)',
          'Passport (for foreign nationals)',
        ],
      },
      {
        category: 'Contact Details',
        list: [
          'Mobile number linked to Aadhaar (for OTP)',
          'Email address (unique, not used by another director)',
          'Permanent address proof',
        ],
      },
      {
        category: 'Digital Documents',
        list: [
          'Class 3 DSC of the director',
          'Passport-size photograph (recent)',
          'DIN details and current status',
        ],
      },
    ],
    compliance: [
      {
        title: 'DIN Active Status Prerequisite',
        desc: 'Directors must maintain active DIN status to sign MCA documents, form filings, and e-forms. Deactivated DIN blocks all company compliance activity.',
      },
      {
        title: 'Unique Mobile & Email Rule',
        desc: 'Each director must use a unique mobile number and email address for DIR-3 KYC. Sharing contact details across multiple DINs is not permitted.',
      },
      {
        title: 'Foreign Director Compliance',
        desc: 'Foreign directors must submit notarized passport copy, foreign address proof, and use Form DIR-3 KYC-Web with DSC since Aadhaar OTP is not applicable.',
      },
      {
        title: 'DIN for Designated Partners in LLP',
        desc: 'Designated Partners of LLPs hold Designated Partner Identification Numbers (DPINs) which are same as DINs. They must also file DIR-3 KYC annually.',
      },
    ],
    faqs: [
      {
        q: 'Who needs to file DIR-3 KYC?',
        a: 'Every person who has been allotted a DIN must file DIR-3 KYC annually, regardless of whether they are currently an active director in any company.',
      },
      {
        q: 'What is the penalty for not filing DIR-3 KYC?',
        a: 'The DIN gets deactivated automatically on 1 October. To reactivate it, the director must file DIR-3 KYC with a government fee of ₹5,000. There is no waiver.',
      },
      {
        q: 'Can DIR-3 KYC be filed after 30 September?',
        a: 'Yes, but with a penalty of ₹5,000. The late filing reactivates the DIN. The government fee must be paid through the MCA portal along with the KYC form.',
      },
      {
        q: 'Is DIR-3 KYC required even if I resigned as a director?',
        a: 'Yes. As long as the DIN remains in existence (even for former directors), DIR-3 KYC must be filed annually. Surrendering the DIN is the only way to avoid this requirement.',
      },
      {
        q: 'What is the difference between DIR-3 KYC and DIR-3 KYC-Web?',
        a: 'DIR-3 KYC is the full form filed in the first year or when details change. DIR-3 KYC-Web is a simplified online update filed in subsequent years when no details have changed, accessible directly on the MCA portal.',
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
