import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';
import {
  propertyServices,
  propertyCategoryMeta,
  type PropertyCategory,
} from '@/lib/property-data';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  (Object.keys(propertyServices) as PropertyCategory[]).forEach((category) => {
    Object.keys(propertyServices[category]).forEach((slug) => {
      params.push({ category, slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const cat = category as PropertyCategory;
  const service = propertyServices[cat]?.[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Property Legal Services - Legal Door`,
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
  const cat = category as PropertyCategory;
  const service = propertyServices[cat]?.[slug];
  if (!service) notFound();

  const meta = propertyCategoryMeta[cat];

  return (
    <LeafServicePage
      {...service}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Property Services', href: '/services/property' },
        { name: meta.label, href: '/services/property' },
        { name: service.title },
      ]}
    />
  );
}
