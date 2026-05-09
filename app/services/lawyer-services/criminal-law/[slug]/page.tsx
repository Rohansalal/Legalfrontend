import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';
import { criminalLawServices } from '@/lib/lawyer-services-data/criminal-law';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(criminalLawServices).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = criminalLawServices[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Criminal Law - Legal Door`,
    description: service.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = criminalLawServices[slug];
  if (!service) notFound();

  return (
    <LeafServicePage
      {...service}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Lawyer Services', href: '/services/lawyer-services' },
        { name: 'Criminal Law', href: '/services/lawyer-services/criminal-law' },
        { name: service.title },
      ]}
    />
  );
}
