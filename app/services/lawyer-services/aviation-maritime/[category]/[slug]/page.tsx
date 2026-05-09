import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';
import {
  aviationMaritimeServices,
  aviationMaritimeLabels,
} from '@/lib/lawyer-services-data/aviation-maritime';

type AvMarCategory = keyof typeof aviationMaritimeServices;

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  const params: { category: string; slug: string }[] = [];
  (Object.keys(aviationMaritimeServices) as AvMarCategory[]).forEach((category) => {
    Object.keys(aviationMaritimeServices[category]).forEach((slug) => {
      params.push({ category, slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const cat = category as AvMarCategory;
  const service = aviationMaritimeServices[cat]?.[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Aviation & Maritime Law - Legal Door`,
    description: service.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { category, slug } = await params;
  const cat = category as AvMarCategory;
  const service = aviationMaritimeServices[cat]?.[slug];
  if (!service) notFound();

  return (
    <LeafServicePage
      {...service}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Lawyer Services', href: '/services/lawyer-services' },
        { name: 'Aviation & Maritime Law', href: '/services/lawyer-services/aviation-maritime' },
        { name: aviationMaritimeLabels[cat], href: '/services/lawyer-services/aviation-maritime' },
        { name: service.title },
      ]}
    />
  );
}
