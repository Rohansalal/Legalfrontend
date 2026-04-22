'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Scale, Briefcase, Landmark, Home, Clock } from 'lucide-react';

export default function WillRegistrationPage() {
  const data = {
    title: 'Will Registration',
    description:
      'Secure your family\'s future by registering your Will under the Indian Succession Act 1925 — prevent succession disputes and ensure your assets are distributed exactly as you intend.',
    heroBadges: ['Indian Succession Act 1925', 'Optional But Strongly Advised', 'Probate Required in Select States'],
    introTitle: 'What is a Will and Why Register It?',
    introContent: (
      <p>
        A Will (also called a Testament or Last Will and Testament) is a legal document under the Indian Succession Act, 1925 in which a person (the testator) declares their wishes regarding the distribution of their movable and immovable property, assets, investments, and valuables after their death. The testator must be at least 18 years of age and of sound mind at the time of making the Will. A Will can include bequests of property, appointment of executor(s) to carry out its terms, guardianship provisions for minor children, and specific conditions on legacies. In India, registration of a Will is optional — an unregistered Will is equally valid in law and can be acted upon — but registration at the Sub-Registrar&#39;s office under the Registration Act, 1908 is strongly recommended as it: (a) creates a permanent, tamper-proof official record; (b) is extremely difficult to challenge on grounds of fraud, forgery, or undue influence; (c) provides conclusive proof that the testator was alive and of sound mind on the date of registration; and (d) cannot be suppressed by disgruntled family members. A Will can be changed or revoked at any time by the testator during their lifetime by executing a new Will (which automatically revokes prior Wills) or a Codicil (amendment). After the testator&#39;s death, in certain states — Maharashtra (Bombay High Court jurisdiction), West Bengal (Calcutta High Court), and the original territory of Madras (Chennai) — a probate from the High Court is required before a registered Will can be given effect for immovable property. Probate is the court&#39;s formal certification of the Will&#39;s validity. Elsewhere in India, probate is optional for registered Wills but may be insisted upon by banks, registrars, and government bodies for large estates.
      </p>
    ),
    detailsTitle: 'Benefits of Registering Your Will',
    details: [
      {
        title: 'Tamper-Proof Official Record',
        desc: 'A registered Will is stored in the Sub-Registrar&#39;s official records and cannot be suppressed, altered, or destroyed by family members. The testator can obtain a certified copy at any time, and the original is preserved permanently in government records.',
        icon: ShieldCheck,
      },
      {
        title: 'Difficult to Challenge in Court',
        desc: 'Courts have consistently held that a registered Will is very difficult to challenge — it is direct evidence that the testator appeared before a public official, was identified, and voluntarily registered the document, making fraud and undue influence claims much harder to sustain.',
        icon: Zap,
      },
      {
        title: 'Streamlined Succession',
        desc: 'A registered Will significantly speeds up asset succession for the legal heirs — banks, share registrars, and property authorities are more readily willing to act on a registered Will, reducing delays and paperwork in estate administration.',
        icon: Globe,
      },
      {
        title: 'Probate Readiness',
        desc: 'In states where probate is mandatory (Maharashtra, West Bengal, Chennai), a registered Will makes the probate petition process smoother and faster, as the court accepts the registered copy as prima facie evidence of authenticity.',
        icon: Award,
      },
    ],
    requirements: [
      'Testator must be 18+ years and of sound mind at time of registration',
      'Two witnesses (not beneficiaries under the Will) present at Sub-Registrar office',
      'Identity proof of testator: Aadhaar, PAN, Passport',
      'Draft Will prepared and signed by testator before registration',
      'List of assets to be bequeathed: property details, bank accounts, investments',
      'Passport-size photograph and signature of testator',
    ],
    processTitle: 'How to Register a Will in India',
    processIntro:
      'Will registration is a straightforward but sensitive process requiring careful drafting to reflect the testator&#39;s exact wishes and compliance with Indian Succession Act formalities. Our lawyers ensure a precise, legally sound Will.',
    processSteps: [
      {
        title: 'Will Drafting Consultation',
        desc: 'Our succession lawyers consult with the testator to understand the full estate — property, investments, FDs, shares, jewellery — identify the beneficiaries and their shares, and draft a comprehensive Will incorporating specific bequests, residuary estate clause, and executor appointment.',
        icon: UserCheck,
      },
      {
        title: 'Review & Signing',
        desc: 'The drafted Will is reviewed and approved by the testator. The testator signs or thumb-marks the Will on each page in the presence of two independent witnesses (who are not beneficiaries) who also sign the Will attesting they witnessed the testator&#39;s signature.',
        icon: FileSearch,
      },
      {
        title: 'Sub-Registrar Appointment',
        desc: 'The testator and two witnesses appear in person at the Sub-Registrar&#39;s office. Unlike other registrations, only the testator needs to appear — beneficiaries need not be present. The Sub-Registrar records the testator&#39;s statement and registers the Will.',
        icon: CheckCircle2,
      },
      {
        title: 'Safe Storage of Registered Will',
        desc: 'The original registered Will is returned to the testator (unlike sale deeds which the buyer gets). We advise on safe storage options — bank locker, sealed envelope with family solicitor, or testator&#39;s personal custody — and inform a trusted family member of its location.',
        icon: FileCheck,
      },
    ],
    processOutro:
      'Will registration at the Sub-Registrar office is typically completed in a single day once the draft is approved. Registration fees are nominal — typically &#x20b9;300 to &#x20b9;1,000 depending on the state.',
    documents: [
      {
        category: 'Testator Identity',
        list: [
          'Aadhaar Card, PAN Card, and Passport (any two) of testator',
          'Passport-size photograph of testator',
          'Identity proof of two witnesses (Aadhaar / Voter ID)',
        ],
      },
      {
        category: 'Asset Schedule Documents',
        list: [
          'Property documents (title deed / sale deed / share certificate) for bequeathed property',
          'Bank account details, FD certificates, share demat account details',
          'Details of any existing Wills, Codicils, or prior succession planning documents',
        ],
      },
      {
        category: 'Will Execution Documents',
        list: [
          'Signed and witnessed Will on plain paper (not stamp paper — not required)',
          'Covering letter identifying the document as a Will for registration',
          'Sub-Registrar registration fee receipt',
        ],
      },
    ],
    compliance: [
      {
        title: 'Revoke Prior Wills Expressly',
        desc: 'Every new Will should expressly revoke all prior Wills and Codicils to avoid ambiguity. Under Section 70 of the Indian Succession Act, a Will is revoked by a later Will, by a writing declaring intention to revoke, or by destruction of the Will by the testator.',
      },
      {
        title: 'Probate After Death (Selected States)',
        desc: 'In Maharashtra, West Bengal, and Chennai (Madras High Court jurisdiction), the executor named in the Will must apply for Probate from the High Court after the testator&#39;s death before acting on the Will for immovable property. The probate process typically takes 6–18 months.',
      },
      {
        title: 'Executor\'s Duties Post-Death',
        desc: 'The appointed Executor has legal duties to: obtain probate (where required), take stock of estate assets, pay outstanding debts and taxes, file the deceased&#39;s final income tax return, and distribute assets to beneficiaries per the Will within a reasonable time.',
      },
      {
        title: 'Update Will on Major Life Events',
        desc: 'A Will should be reviewed and updated after major life events: marriage (marriage revokes a prior Will under Hindu law), divorce, birth of new children, acquisition of significant new assets, or death of a beneficiary. We recommend reviewing every 5 years or on any major financial change.',
      },
    ],
    faqs: [
      {
        q: 'Is a registered Will more valid than an unregistered Will?',
        a: 'Both registered and unregistered Wills are equally valid in Indian law — there is no difference in legal validity. However, a registered Will is much harder to challenge on grounds of fraud, forgery, or mental incapacity, and is preserved permanently in government records. Practically, a registered Will results in fewer disputes and smoother estate administration.',
      },
      {
        q: 'Can a Will be challenged in court?',
        a: 'Yes, a Will can be challenged in court on grounds of: (a) lack of testamentary capacity (unsound mind); (b) undue influence or coercion; (c) fraud or forgery; (d) improper execution (not signed or not witnessed). A registered Will is significantly harder to challenge, and courts place a high evidentiary burden on challengers of registered Wills.',
      },
      {
        q: 'Does a Will need to be on stamp paper?',
        a: 'No. A Will does not require stamp paper. It can be written on plain paper. However, it must be signed by the testator and attested by at least two witnesses (who should not be beneficiaries) under Section 63 of the Indian Succession Act. A Will on stamp paper is neither more valid nor less valid than one on plain paper.',
      },
      {
        q: 'What is a Codicil and when should it be used?',
        a: 'A Codicil is a supplemental document to an existing Will that modifies, adds to, or partially revokes the original Will without requiring a completely new Will to be drafted. It is used for minor amendments — such as adding a new asset, changing a beneficiary\'s share, or appointing a new executor. A Codicil must be executed and attested in the same manner as the original Will.',
      },
      {
        q: 'Is probate mandatory for all registered Wills in India?',
        a: 'Probate is mandatory only in certain territorial jurisdictions: Mumbai, Kolkata, and Chennai (and their respective High Court original jurisdictions). In the rest of India, probate is optional — though banks, registrars, and housing societies may insist on it for large estates. Outside these cities, a registered Will along with the death certificate is usually sufficient for asset succession.',
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
