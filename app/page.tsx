import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { ClientsSection } from '@/components/clients-section';
import { ProcessSection } from '@/components/process-section';
import { WhyChooseUs } from '@/components/why-choose-us';
import { TestimonialsSection } from '@/components/testimonials-section';
import { BlogSection } from '@/components/blog-section';
import { FAQSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { FloatingIcons } from '@/components/floating-icons';

export const metadata = {
  title: 'Legal Door - Expert Legal Services for Business Success',
  description:
    'Professional legal services including corporate law, IP protection, employment law, and business litigation. Your trusted partner in legal excellence.',
  keywords:
    'legal services, corporate law, intellectual property, business attorney, employment law, litigation',
  openGraph: {
    title: 'Legal Door - Expert Legal Services',
    description: 'Your gateway to legal excellence and business success',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      
      {/* Background Floating Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FloatingIcons />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <ClientsSection />
        <ProcessSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </div>
      
      <Footer />
    </main>
  );
}
