import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';
import {
  educationalLawServices,
  educationalLawCategoryMeta,
  type EduCategory,
} from '@/lib/global-business-data/educational-law';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  (Object.keys(educationalLawServices) as EduCategory[]).forEach((category) => {
    Object.keys(educationalLawServices[category]).forEach((slug) => {
      params.push({ category, slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const cat = category as EduCategory;
  const service = educationalLawServices[cat]?.[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Educational Law - Legal Door`,
    description: service.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { category, slug } = await params;
  const cat = category as EduCategory;
  const service = educationalLawServices[cat]?.[slug];
  if (!service) notFound();

  const meta = educationalLawCategoryMeta[cat];

  return (
    <LeafServicePage
      {...service}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Global Business', href: '/services/global-business' },
        { name: 'Educational Law', href: '/services/global-business/educational-law' },
        { name: meta.label, href: `/services/global-business/educational-law/${cat}` },
        { name: service.title },
      ]}
    />
  );
}
