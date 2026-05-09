import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';
import {
  documentationServices,
  documentationCategoryMeta,
  type DocumentationCategory,
} from '@/lib/documentation-data';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  (Object.keys(documentationServices) as DocumentationCategory[]).forEach((category) => {
    Object.keys(documentationServices[category]).forEach((slug) => {
      params.push({ category, slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const cat = category as DocumentationCategory;
  const service = documentationServices[cat]?.[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Documentation Services - Legal Door`,
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
  const { category, slug } = await params;
  const cat = category as DocumentationCategory;
  const service = documentationServices[cat]?.[slug];
  if (!service) notFound();

  const meta = documentationCategoryMeta[cat];

  return (
    <LeafServicePage
      {...service}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Documentation', href: '/services/documentation' },
        { name: meta.label, href: `/services/documentation/${cat}` },
        { name: service.title },
      ]}
    />
  );
}
