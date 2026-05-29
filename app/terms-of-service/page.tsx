import { LegalPage } from '@/components/legal-page';

export const metadata = {
  title: 'Terms of Service — Legal Door',
  description:
    'The terms and conditions governing your use of the Legal Door website and services, including engagement, fees, liability and governing law.',
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="May 29, 2026"
      intro="These Terms of Service (“Terms”) govern your access to and use of the Legal Door website and the legal, taxation, compliance and advisory services we provide. By using our website or engaging our services, you agree to be bound by these Terms."
      sections={[
        {
          heading: 'Acceptance of Terms',
          body: [
            'By accessing our website or engaging our services, you confirm that you are at least 18 years old and capable of entering into a legally binding agreement, and that you accept these Terms in full. If you do not agree, please do not use our website or services.',
          ],
        },
        {
          heading: 'Services',
          body: [
            'Legal Door provides professional services including company registration, lawyer services, taxation, compliance, documentation and related advisory. The specific scope, deliverables, timelines and fees for any engagement will be set out in a separate proposal, quotation or engagement letter agreed with you.',
          ],
        },
        {
          heading: 'No Legal Advice Without Engagement',
          body: [
            'Information on this website is provided for general informational purposes only and does not constitute legal, tax or professional advice. No attorney–client or advisory relationship is created merely by browsing the website or submitting an enquiry. Such a relationship arises only upon a formal engagement confirmed in writing.',
          ],
        },
        {
          heading: 'Client Responsibilities',
          body: ['To enable us to deliver services, you agree to:'],
          bullets: [
            'Provide accurate, complete and timely information and documents.',
            'Cooperate with reasonable requests and respond promptly to communications.',
            'Ensure you have the authority to instruct us in respect of the matter.',
            'Make payments in accordance with the agreed fee schedule.',
          ],
        },
        {
          heading: 'Fees & Payment',
          body: [
            'Fees for services are as quoted in your engagement and are exclusive of applicable taxes and government / statutory fees unless stated otherwise. Government fees, stamp duty and third-party charges are payable in addition. Invoices are due as per the agreed terms; we reserve the right to suspend work on overdue accounts.',
          ],
        },
        {
          heading: 'Intellectual Property',
          body: [
            'All content on this website — including text, graphics, logos and design — is owned by or licensed to Legal Door and is protected by applicable intellectual-property laws. You may not reproduce, distribute or create derivative works without our prior written consent.',
          ],
        },
        {
          heading: 'Third-Party Links',
          body: [
            'Our website may contain links to third-party websites. We do not control and are not responsible for the content, policies or practices of those websites. Access to them is at your own risk.',
          ],
        },
        {
          heading: 'Disclaimers',
          body: [
            'Our website and content are provided on an “as is” and “as available” basis without warranties of any kind, express or implied. While we strive for accuracy, we do not warrant that the website will be error-free, uninterrupted or that information is current and complete.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          body: [
            'To the maximum extent permitted by law, Legal Door shall not be liable for any indirect, incidental, special or consequential damages arising from your use of the website or services. Our total liability for any engagement shall not exceed the professional fees paid by you for that engagement.',
          ],
        },
        {
          heading: 'Confidentiality',
          body: [
            'We treat the information you share with us as confidential and use it solely to provide the agreed services, except where disclosure is required by law or authorised by you. This obligation survives the termination of any engagement.',
          ],
        },
        {
          heading: 'Termination',
          body: [
            'Either party may terminate an engagement in accordance with the engagement letter or on reasonable notice. On termination, you remain liable for fees and costs incurred up to the date of termination.',
          ],
        },
        {
          heading: 'Governing Law & Jurisdiction',
          body: [
            'These Terms are governed by the laws of India. Subject to any arbitration agreement in your engagement, the courts at our principal place of business shall have exclusive jurisdiction over any disputes.',
          ],
        },
        {
          heading: 'Changes to These Terms',
          body: [
            'We may revise these Terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.',
          ],
        },
      ]}
    />
  );
}
