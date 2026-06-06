import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { TeamContent } from '@/components/team-content';

export const metadata = {
  title: 'Our Team - Legal Door LLP',
  description:
    'Meet the multidisciplinary team behind Legal Door LLP — expert lawyers, Chartered Accountants, company secretaries and financial specialists led by founder Dr. Deepak Choudhary.',
};

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TeamContent />
      <CTASection />
      <Footer />
    </main>
  );
}
