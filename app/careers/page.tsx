import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { CareersContent } from '@/components/careers-content';

export const metadata = {
  title: 'Careers at Legal Door — Join Our Team',
  description:
    'Explore career opportunities at Legal Door. Work at the intersection of high-stakes law and technology alongside lawyers, CAs and CS professionals across 20+ countries.',
  keywords:
    'Legal Door careers, legal jobs India, advocate jobs, corporate lawyer jobs, CA jobs, legal tech jobs, company secretary jobs',
  openGraph: {
    title: 'Careers at Legal Door — Build the Future of Law',
    description:
      'Join a Legal Tech-driven team of lawyers, chartered accountants, company secretaries and engineers. View current openings and apply.',
    type: 'website',
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <CareersContent />
      <CTASection />
      <Footer />
    </main>
  );
}
