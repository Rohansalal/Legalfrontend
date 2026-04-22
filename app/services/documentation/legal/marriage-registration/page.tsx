'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, Users } from 'lucide-react';

export default function MarriageRegistrationPage() {
  const data = {
    title: 'Marriage Registration',
    description: 'Register your marriage under the Hindu Marriage Act 1955 or Special Marriage Act 1954. Get your official Marriage Certificate for visa, passport, joint property, and insurance purposes.',
    heroBadges: ['Hindu & Special Marriage Act', 'Tatkal Facility Available', 'Certificate for Visa & Passport'],
    introTitle: 'What is Marriage Registration?',
    introContent: (
      <p>Marriage registration is the official legal recording of a marriage by a government authority, producing a Marriage Certificate — a vital document recognized by courts, government departments, banks, and foreign embassies. In India, marriage registration is governed by two primary laws: the Hindu Marriage Act 1955 (applicable to Hindus, Buddhists, Jains, and Sikhs) and the Special Marriage Act 1954 (applicable to inter-religion marriages, civil marriages, and NRI marriages). Registration under the Hindu Marriage Act is done at the office of the Sub-Registrar or District Registrar in the area where the marriage was solemnized or where either spouse resides. Under the Special Marriage Act, a 30-day prior notice must be published at the Marriage Officer's office to invite objections before the marriage can be formalized. A Marriage Certificate is mandatory for spouse visa applications, adding spouse to passport, joint home loans, life insurance nomination, property inheritance rights, and legal heir certificates. Many states including Delhi, Maharashtra, UP, and Rajasthan now offer Tatkal (fast-track) marriage registration for an additional fee, completing the process in 1–2 days. Court marriages (under the Special Marriage Act) provide an alternative for couples who have already solemnized their marriage and need legal registration.</p>
    ),
    detailsTitle: 'Why Register Your Marriage?',
    details: [
      { title: 'Mandatory for Visa & Passport', desc: 'Indian embassies and foreign consulates require a registered Marriage Certificate for spouse visa, dependent visa, and adding spouse to passport. Registration is no longer optional for international travel.', icon: Globe },
      { title: 'Legal Protection for Both Spouses', desc: 'A registered marriage provides legal rights including maintenance, inheritance, joint property ownership, and protection under the Protection of Women from Domestic Violence Act 2005.', icon: ShieldCheck },
      { title: 'Financial & Insurance Benefits', desc: 'Required to add spouse as nominee in LIC policies, bank accounts, PPF, EPF, and mutual funds. Also needed for joint home loans and spouse\'s health insurance coverage.', icon: Award },
      { title: 'Applicable to All Religions', desc: 'The Special Marriage Act 1954 allows any two persons regardless of religion, caste, or nationality to have a court marriage, making legal registration accessible to all couples in India.', icon: Users },
    ],
    requirements: [
      'Both parties must be adults (21 years for groom, 18 years for bride)',
      'Neither party should have a living spouse at time of marriage',
      'Both parties must be of sound mind and capable of giving valid consent',
      'Three witnesses required for registration (two for Hindu Marriage Act)',
      'Marriage must have been validly solemnized (for Hindu Marriage Act registration)',
      'Minimum 30-day prior notice for Special Marriage Act court marriage',
    ],
    processTitle: 'How to Register a Marriage in India',
    processIntro: 'The registration process varies slightly between the Hindu Marriage Act and Special Marriage Act. We assist with document preparation, appointment booking, and complete follow-through.',
    processSteps: [
      { title: 'Select Applicable Law & Jurisdiction', desc: 'We help determine whether your marriage qualifies under Hindu Marriage Act or Special Marriage Act, and identify the correct Sub-Registrar or Marriage Officer office with jurisdiction.', icon: UserCheck },
      { title: 'Document Preparation', desc: 'We prepare and verify all required documents including age proof, address proof, marriage photographs, and witness documents to avoid rejection at the registrar\'s office.', icon: FileSearch },
      { title: 'Application Filing & Appointment', desc: 'We file the marriage registration application (online where available) or assist with physical submission, and secure an appointment at the registrar\'s office.', icon: CheckCircle2 },
      { title: 'Appearance Before Registrar & Certificate', desc: 'Both spouses and witnesses appear before the Sub-Registrar or Marriage Officer. After verification, the Marriage Certificate is issued with the official seal and registrar\'s signature.', icon: FileCheck },
    ],
    processOutro: 'Hindu Marriage Act registration typically takes 1–7 working days. Special Marriage Act (court marriage) requires 30 days\' notice period plus 1–3 days for formalization.',
    documents: [
      { category: 'Age & Identity Proof (Both Spouses)', list: ['Birth certificate / SSC marksheet / passport for age proof', 'Aadhaar Card and PAN Card', 'Passport-size photographs (4 each)'] },
      { category: 'Address & Marriage Proof', list: ['Address proof — Aadhaar / Voter ID / utility bill', 'Marriage invitation card or photographs of marriage ceremony', 'Priest\'s / pandit\'s certificate (for religious marriages)'] },
      { category: 'Witness Documents (2–3 Witnesses)', list: ['Aadhaar Card of all witnesses', 'PAN Card of witnesses', 'Passport-size photographs of witnesses'] },
    ],
    compliance: [
      { title: 'Tatkal Registration Requires Premium Fee', desc: 'States offering Tatkal (fast-track) marriage registration charge an additional fee over the standard registration fee. Confirm the current fee schedule at the local Sub-Registrar office or state registration portal.' },
      { title: 'Name Change After Marriage', desc: 'After obtaining the Marriage Certificate, update your name or marital status in Aadhaar, PAN, passport, bank accounts, and insurance policies. This requires a gazette notification in most states if the surname is being changed.' },
      { title: 'NRI Marriage Registration', desc: 'For marriages where one spouse is an NRI or foreign national, registration under the Special Marriage Act is mandatory. Additionally, the marriage may need to be registered with the Indian Embassy or Consulate in the foreign country of residence.' },
      { title: 'Religious vs. Civil Registration', desc: 'Religious ceremonies alone (without Sub-Registrar registration) do not produce a legally recognized Marriage Certificate. Always ensure official registration regardless of religious solemnization to avoid future legal complications.' },
    ],
    faqs: [
      { q: 'Is marriage registration compulsory in India?', a: 'While the Supreme Court of India (Seema v. Ashwani Kumar, 2006) directed all states to make marriage registration compulsory, legislation varies by state. In practice, a Marriage Certificate is essential for virtually all legal, financial, and immigration purposes, making registration highly advisable for every married couple.' },
      { q: 'What is the difference between Hindu Marriage Act and Special Marriage Act registration?', a: 'Hindu Marriage Act registration is for couples where both parties are Hindu, Buddhist, Jain, or Sikh. It validates and registers an already solemnized marriage. Special Marriage Act is for inter-religion marriages or civil marriages where the marriage itself is solemnized in front of the Marriage Officer after a 30-day notice period.' },
      { q: 'Can we register a marriage solemnized years ago?', a: 'Yes. There is no limitation on registering a past marriage under the Hindu Marriage Act. You will need evidence of the marriage (photographs, invitation card, priest certificate) along with the usual documents. Some states may require an affidavit explaining the delay.' },
      { q: 'How many witnesses are required for marriage registration?', a: 'Under the Hindu Marriage Act, two witnesses are typically required. Under the Special Marriage Act, three witnesses are required. All witnesses must be adults and present at the time of registration with valid identity proof.' },
      { q: 'Is a court marriage different from marriage registration?', a: 'Yes. Court marriage (under Special Marriage Act) means the marriage itself is solemnized in front of the Marriage Officer — no prior religious ceremony is needed. Marriage registration (under Hindu Marriage Act) registers a marriage that has already been solemnized in a religious ceremony.' },
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
