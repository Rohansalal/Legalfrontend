import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { AboutContent } from '@/components/about-content';

export const metadata = {
  title: 'About Legal Door LLP — Legal Tech-Driven Professional Services',
  description:
    'Founded in 2012 by Dr. Deepak Choudhary, Legal Door LLP is a Government of India (MCA) registered Legal Tech firm serving 10,000+ clients across 20+ countries with legal, compliance, corporate and business advisory services.',
  keywords:
    'Legal Door LLP, about Legal Door, Dr. Deepak Choudhary, legal tech firm India, MCA registered, business advisory, corporate law, legal services',
  openGraph: {
    title: 'About Legal Door LLP — Empowering Businesses, Enabling Growth',
    description:
      'A leading Legal Tech-driven professional services firm helping startups, SMEs and corporations build successful, compliant and globally recognised brands.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutContent />
      <CTASection />
      <Footer />
    </main>
  );
}
