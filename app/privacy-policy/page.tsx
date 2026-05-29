import { LegalPage } from '@/components/legal-page';

export const metadata = {
  title: 'Privacy Policy — Legal Door',
  description:
    'How Legal Door collects, uses, stores and protects your personal data, your rights under the Digital Personal Data Protection Act, 2023, and how to contact us.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="May 29, 2026"
      intro="Legal Door (“we”, “us”, “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose and safeguard your personal data when you use our website and services, and the rights available to you under the Digital Personal Data Protection Act, 2023 and other applicable laws of India."
      sections={[
        {
          heading: 'Information We Collect',
          body: ['We collect information you provide directly and information generated automatically when you use our website:'],
          bullets: [
            'Identity and contact data — name, email, phone number, city and any details you submit through our forms.',
            'Service data — documents and information you share so we can provide legal, taxation and compliance services.',
            'Technical data — IP address, browser type, device information, and pages visited (via cookies and analytics).',
            'Communications — records of your enquiries, calls and correspondence with us.',
          ],
        },
        {
          heading: 'How We Use Your Information',
          body: ['We process your personal data for the following purposes:'],
          bullets: [
            'To respond to your enquiries and provide the services you request.',
            'To prepare, file and follow up on applications, filings and legal matters on your behalf.',
            'To send service updates, reminders and, with your consent, marketing communications.',
            'To improve our website, services and customer experience.',
            'To comply with legal, regulatory and professional obligations.',
          ],
        },
        {
          heading: 'Legal Basis for Processing',
          body: [
            'We process your personal data on the basis of your consent, the performance of a contract or engagement with you, our legitimate interests in operating our business, and compliance with legal obligations. Where processing relies on consent, you may withdraw it at any time.',
          ],
        },
        {
          heading: 'Sharing & Disclosure',
          body: ['We do not sell your personal data. We may share it only as necessary:'],
          bullets: [
            'With government authorities, registries and courts to deliver the services you engage us for.',
            'With trusted service providers (e.g., IT, hosting, payment and analytics) bound by confidentiality.',
            'Where required by law, regulation, legal process or to protect our rights and safety.',
          ],
        },
        {
          heading: 'Data Retention',
          body: [
            'We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, professional and regulatory requirements. When no longer required, data is securely deleted or anonymised.',
          ],
        },
        {
          heading: 'Data Security',
          body: [
            'We implement reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, misuse or alteration. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
          ],
        },
        {
          heading: 'Your Rights',
          body: ['Subject to applicable law, including the Digital Personal Data Protection Act, 2023, you have the right to:'],
          bullets: [
            'Access the personal data we hold about you and obtain a summary of its processing.',
            'Request correction, completion or updating of inaccurate or incomplete data.',
            'Request erasure of your personal data where it is no longer required.',
            'Withdraw consent and nominate another person to exercise your rights in case of incapacity.',
            'Make a grievance to us and, if unresolved, to the Data Protection Board of India.',
          ],
        },
        {
          heading: 'Cookies',
          body: [
            'We use cookies and similar technologies to operate our website and improve your experience. For details, please see our Cookie Policy.',
          ],
        },
        {
          heading: 'Children’s Privacy',
          body: [
            'Our services are not directed at children. We do not knowingly collect personal data of children without verifiable parental or guardian consent as required by law.',
          ],
        },
        {
          heading: 'Changes to This Policy',
          body: [
            'We may update this Privacy Policy from time to time. The “Last updated” date reflects the most recent revision. We encourage you to review this page periodically.',
          ],
        },
      ]}
    />
  );
}
