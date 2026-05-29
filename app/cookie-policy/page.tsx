import { LegalPage } from '@/components/legal-page';

export const metadata = {
  title: 'Cookie Policy — Legal Door',
  description:
    'How Legal Door uses cookies and similar technologies, the types of cookies we use, and how you can manage your cookie preferences.',
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated="May 29, 2026"
      intro="This Cookie Policy explains how Legal Door uses cookies and similar technologies when you visit our website. It describes what these technologies are, why we use them, and the choices you have to control them."
      sections={[
        {
          heading: 'What Are Cookies?',
          body: [
            'Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, or work more efficiently, and to provide information to the site owners. Similar technologies include pixels, web beacons and local storage.',
          ],
        },
        {
          heading: 'Types of Cookies We Use',
          body: ['We use the following categories of cookies:'],
          bullets: [
            'Strictly necessary cookies — required for the website to function (e.g., security, page navigation). These cannot be switched off.',
            'Performance & analytics cookies — help us understand how visitors use the site so we can improve it.',
            'Functional cookies — remember your preferences and choices to enhance your experience.',
            'Marketing cookies — used, with your consent, to deliver relevant content and measure campaign effectiveness.',
          ],
        },
        {
          heading: 'Why We Use Cookies',
          body: ['We use cookies to:'],
          bullets: [
            'Operate and secure our website.',
            'Remember your settings and preferences.',
            'Analyse traffic and improve performance and content.',
            'Measure the effectiveness of our communications, where permitted.',
          ],
        },
        {
          heading: 'Third-Party Cookies',
          body: [
            'Some cookies may be set by third-party services that appear on our pages, such as analytics providers. These third parties may use cookies in accordance with their own privacy and cookie policies, over which we have no control.',
          ],
        },
        {
          heading: 'Managing Your Preferences',
          body: [
            'You can control and delete cookies through your browser settings. Most browsers let you refuse or remove cookies and notify you when one is set. Please note that disabling certain cookies may affect the functionality of our website.',
          ],
        },
        {
          heading: 'Consent',
          body: [
            'By continuing to use our website, you consent to our use of non-essential cookies as described in this policy, unless you disable them. Where required by law, we will seek your consent before placing such cookies.',
          ],
        },
        {
          heading: 'Updates to This Policy',
          body: [
            'We may update this Cookie Policy to reflect changes in technology, law or our practices. The “Last updated” date indicates when this policy was last revised.',
          ],
        },
      ]}
    />
  );
}
