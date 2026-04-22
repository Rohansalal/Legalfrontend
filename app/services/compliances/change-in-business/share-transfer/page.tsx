'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function ShareTransferPage() {
  const data = {
    title: 'Share Transfer in a Company',
    description:
      'Complete share transfer assistance — Share Transfer Form SH-4, stamp duty on transfer, board approval, register of members update, SEBI LODR for listed companies. Seamless transfer for private and public companies.',
    heroBadges: ['SH-4 Transfer Deed', 'Stamp Duty Advisory', 'Board Approval Handling'],
    introTitle: 'What is Share Transfer?',
    introContent: (
      <p>
        Share transfer is the process by which a shareholder (transferor) voluntarily passes their shares to another person (transferee) in consideration of a payment or otherwise. In a Private Limited Company, share transfer is restricted by the Articles of Association — the Board of Directors has the right to refuse transfer. In a Public Limited Company and listed company, shares are freely transferable. The instrument of transfer is Form SH-4 (Share Transfer Deed) under the Companies Act, 2013. The stamp duty at 0.25% of the consideration or market value (whichever is higher) must be paid on the SH-4 as per the Indian Stamp Act. The Board must approve the transfer within 30 days of receiving the application. On approval, the Register of Members must be updated. For listed companies, transfers in demat form are processed electronically through the depository, and SEBI LODR Regulations mandate specific timelines and disclosures.
      </p>
    ),
    detailsTitle: 'Key Aspects of Share Transfer',
    details: [
      {
        title: 'Share Transfer Deed — SH-4',
        desc: 'The instrument of transfer (Form SH-4) must be properly stamped, signed by both transferor and transferee, and submitted to the company within 60 days of execution.',
        icon: FileText,
      },
      {
        title: 'Stamp Duty on Transfer',
        desc: 'Stamp duty at 0.25% of the consideration or market value (whichever is higher) must be paid. E-stamping is accepted in most states.',
        icon: TrendingUp,
      },
      {
        title: 'Board Approval',
        desc: 'For private companies, Board approval within 30 days of receiving the transfer application is required. Board has discretion to refuse transfer per AOA provisions.',
        icon: Users,
      },
      {
        title: 'Register of Members Update',
        desc: 'After board approval, update the Register of Members to reflect the new shareholder. Issue share certificate to transferee within 1 month of lodgment.',
        icon: ShieldCheck,
      },
    ],
    requirements: [
      'Original share certificates of the shares being transferred',
      'Form SH-4 (Share Transfer Deed) duly executed',
      'Stamp duty paid on SH-4 (0.25% of consideration)',
      'PAN of transferor and transferee',
      'Board Resolution approving the transfer',
      'Identity proof and address proof of transferee',
      'Consideration amount / valuation report (for related party transfers)',
      'NOC from existing shareholders (if required by AOA)',
    ],
    processTitle: 'How to Transfer Shares in a Company',
    processIntro:
      'Share transfer must be executed, stamped, and board-approved in sequence. Our team handles documentation and all compliance requirements.',
    processSteps: [
      {
        title: 'Execute Share Transfer Deed',
        desc: 'Both transferor and transferee sign Form SH-4. The deed must specify the number, class, folio number of shares, and consideration paid.',
        icon: FileSearch,
      },
      {
        title: 'Pay Stamp Duty & Submit to Company',
        desc: 'Pay stamp duty at 0.25% of consideration. Submit the stamped SH-4 along with original share certificates to the company within 60 days of execution.',
        icon: UserCheck,
      },
      {
        title: 'Board Meeting for Approval',
        desc: 'Hold Board Meeting to approve the transfer. The board can refuse only on valid grounds mentioned in the AOA. Approval must be communicated within 30 days.',
        icon: FileCheck,
      },
      {
        title: 'Update Register & Issue Certificate',
        desc: 'Update the Register of Members with the new owner details. Issue new share certificate to the transferee within 1 month of registration of transfer.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'For significant transfers, we also assist with valuation (CA/merchant banker), FEMA compliance for NRI/foreign transferees, and capital gains tax planning.',
    documents: [
      {
        category: 'Transfer Documents',
        list: [
          'Form SH-4 (Share Transfer Deed)',
          'Original share certificates',
          'Stamp duty payment proof',
        ],
      },
      {
        category: 'Identity Documents',
        list: [
          'PAN of transferor and transferee',
          'Aadhaar / passport of transferee',
          'Address proof of transferee',
        ],
      },
      {
        category: 'Company Documents',
        list: [
          'Board Resolution approving transfer',
          'Updated Register of Members',
          'New share certificate for transferee',
        ],
      },
    ],
    compliance: [
      {
        title: 'Right of Pre-emption (AOA)',
        desc: 'Many private company AOAs include right of pre-emption — existing shareholders must first be offered shares before transfer to outsiders. Verify AOA before any transfer.',
      },
      {
        title: 'Capital Gains Tax',
        desc: 'Transfer of shares is a taxable event. Short-term capital gains (held less than 24 months for unlisted shares) are taxed at slab rates. Long-term at 20% with indexation for unlisted shares.',
      },
      {
        title: 'FEMA Compliance for NRI/Foreign Buyers',
        desc: 'Transfer of shares to or from NRIs or foreign nationals requires RBI approval in certain cases under FEMA. A CA certificate for fair valuation is mandatory.',
      },
      {
        title: 'Demat Transfer for Listed Companies',
        desc: 'For listed companies, share transfers happen electronically through NSDL/CDSL. SEBI LODR mandates that all transfers be in demat form. SH-4 is not used for demat transfers.',
      },
    ],
    faqs: [
      {
        q: 'Can a Private Limited Company refuse share transfer?',
        a: 'Yes. Private Limited Companies can restrict share transfers through AOA provisions. The Board can refuse transfer within 30 days of application if the AOA empowers them to do so.',
      },
      {
        q: 'What is the stamp duty on share transfer?',
        a: 'Stamp duty on share transfer is 0.25% of the consideration amount or market value of the shares, whichever is higher, as per the Indian Stamp Act.',
      },
      {
        q: 'What happens if SH-4 is not submitted within 60 days?',
        a: 'If Form SH-4 is not submitted to the company within 60 days of execution, it becomes invalid. A fresh SH-4 must be executed and stamped again.',
      },
      {
        q: 'Is share transfer different from transmission of shares?',
        a: 'Yes. Transfer is voluntary — by the holder to another person. Transmission is automatic — upon death, insolvency, or incapacity of the holder. Transmission requires probate or succession certificate, not an SH-4.',
      },
      {
        q: 'Is a CA valuation required for share transfer in a private company?',
        a: 'For transfers involving non-residents or related parties, a CA or registered valuer\'s Fair Market Value (FMV) certificate is required. For transfer between resident Indians in private companies, it is advisable but not always mandatory.',
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
