import type { ServiceContent } from '@/components/leaf-service-page';
import { documentationLegalServices } from './legal';
import { documentationBusinessCorporateServices } from './business-corporate';

export type DocumentationCategory = 'legal' | 'business-corporate';

export const documentationCategoryMeta: Record<
  DocumentationCategory,
  { label: string; tagline: string }
> = {
  legal: {
    label: 'Legal Documentation',
    tagline:
      'Legal notices, affidavits, attestations, contracts and real-estate agreements drafted by senior advocates.',
  },
  'business-corporate': {
    label: 'Business / Corporate Documentation',
    tagline:
      'NOCs, NDAs, MoUs, JV / franchise agreements and statutory corporate appointments.',
  },
};

export const documentationServices: Record<
  DocumentationCategory,
  Record<string, ServiceContent>
> = {
  legal: documentationLegalServices,
  'business-corporate': documentationBusinessCorporateServices,
};
