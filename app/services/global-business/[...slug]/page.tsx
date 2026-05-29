import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JurisdictionPage, RegionLanding } from '@/components/jurisdiction-page';
import {
  REGIONS,
  JURISDICTIONS,
  getRegion,
  findJurisdiction,
  jurisdictionPath,
} from '@/lib/global-jurisdictions';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

/** Pre-render every region landing page and every jurisdiction page. */
export function generateStaticParams() {
  const params: { slug: string[] }[] = [];
  for (const region of REGIONS) params.push({ slug: [region.slug] });
  for (const j of JURISDICTIONS) params.push({ slug: jurisdictionPath(j) });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug.length === 1) {
    const region = getRegion(slug[0]);
    if (region) {
      return {
        title: `Company Registration in ${region.name} — Legal Door`,
        description: region.intro,
      };
    }
  }

  const j = findJurisdiction(slug);
  if (j) {
    const region = getRegion(j.region);
    return {
      title: `${j.name} Company Registration${region ? ` — ${region.name}` : ''} | Legal Door`,
      description: j.tagline,
    };
  }

  return { title: 'Global Business — Legal Door' };
}

export default async function GlobalJurisdictionPage({ params }: PageProps) {
  const { slug } = await params;

  // Region landing page: /services/global-business/<region>
  if (slug.length === 1) {
    const region = getRegion(slug[0]);
    if (region) return <RegionLanding region={region} />;
  }

  // Jurisdiction page: /services/global-business/<region>/<country>
  //                    /services/global-business/middle-east/<group>/<jurisdiction>
  const jurisdiction = findJurisdiction(slug);
  if (jurisdiction) {
    const region = getRegion(jurisdiction.region)!;
    return <JurisdictionPage jurisdiction={jurisdiction} region={region} />;
  }

  notFound();
}
