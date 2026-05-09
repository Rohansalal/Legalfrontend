import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';
import { familyLawServices } from '@/lib/lawyer-services-data/family-law';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(familyLawServices).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = familyLawServices[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Family Law - Legal Door`,
    description: service.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = familyLawServices[slug];
  if (!service) notFound();

  return (
    <LeafServicePage
      {...service}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Lawyer Services', href: '/services/lawyer-services' },
        { name: 'Family Law', href: '/services/lawyer-services/family-law' },
        { name: service.title },
      ]}
    />
  );
}
