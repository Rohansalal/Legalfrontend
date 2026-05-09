import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';
import { iprServices, iprServiceLabels } from '@/lib/lawyer-services-data/ipr';

type IPRCategory = keyof typeof iprServices;

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  (Object.keys(iprServices) as IPRCategory[]).forEach((category) => {
    Object.keys(iprServices[category]).forEach((slug) => {
      params.push({ category, slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const cat = category as IPRCategory;
  const service = iprServices[cat]?.[slug];
  if (!service) return {};
  return {
    title: `${service.title} | IPR Services - Legal Door`,
    description: service.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { category, slug } = await params;
  const cat = category as IPRCategory;
  const service = iprServices[cat]?.[slug];
  if (!service) notFound();

  const subCategoryLabel = iprServiceLabels[cat];

  return (
    <LeafServicePage
      {...service}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Lawyer Services', href: '/services/lawyer-services' },
        { name: 'IPR Services', href: '/services/lawyer-services/ipr-services' },
        { name: subCategoryLabel, href: '/services/lawyer-services/ipr-services' },
        { name: service.title },
      ]}
    />
  );
}
