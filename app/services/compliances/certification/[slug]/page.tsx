import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { LeafServicePage } from '@/components/leaf-service-page';
import { certificationServices } from '@/lib/compliances-data/certification';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(certificationServices).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = certificationServices[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Compliances - Legal Door`,
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
  const service = certificationServices[slug];
  if (!service) notFound();

  return (
    <LeafServicePage
      {...service}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Compliances', href: '/services/compliances' },
        { name: 'Certification', href: '/services/compliances/certification' },
        { name: service.title },
      ]}
    />
  );
}
