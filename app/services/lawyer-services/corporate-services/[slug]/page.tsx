import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';
import { corporateServices } from '@/lib/lawyer-services-data/corporate';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(corporateServices).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = corporateServices[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Corporate Services - Legal Door`,
    description: service.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = corporateServices[slug];
  if (!service) notFound();

  return (
    <LeafServicePage
      {...service}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Lawyer Services', href: '/services/lawyer-services' },
        { name: 'Corporate Services', href: '/services/lawyer-services/corporate-services' },
        { name: service.title },
      ]}
    />
  );
}
