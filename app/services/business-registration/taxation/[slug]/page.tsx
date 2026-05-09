import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';
import { taxationServices } from '@/lib/business-registration-data/taxation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(taxationServices).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = taxationServices[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Taxation Services - Legal Door`,
    description: service.description,
    keywords: service.keywords,
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'website',
      siteName: 'Legal Door',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = taxationServices[slug];
  if (!service) notFound();

  return (
    <LeafServicePage
      {...service}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Business Registration', href: '/services/business-registration' },
        { name: 'Taxation', href: '/services/business-registration/taxation' },
        { name: service.title },
      ]}
    />
  );
}
