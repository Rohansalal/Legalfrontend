import type { ServiceContent } from '@/components/leaf-service-page';
import { propertyRegistrationServices } from './registration';
import { propertyVerificationServices } from './verification';
import { propertyRealEstateServices } from './real-estate';

export type PropertyCategory = 'registration' | 'verification' | 'real-estate';

export const propertyCategoryMeta: Record<
  PropertyCategory,
  { label: string; tagline: string }
> = {
  registration: {
    label: 'Registration',
    tagline: 'Property registration — Sale Deed, Gift Deed, Lease, Will, GPA and more.',
  },
  verification: {
    label: 'Verification, Report & Certificate',
    tagline: 'Title search, due diligence, CERSAI, legal heir & succession certificates.',
  },
  'real-estate': {
    label: 'Real Estate & Infrastructure',
    tagline: 'RERA, FDI, SEZ, PPP, project finance, land acquisition and litigation.',
  },
};

export const propertyServices: Record<PropertyCategory, Record<string, ServiceContent>> = {
  registration: propertyRegistrationServices,
  verification: propertyVerificationServices,
  'real-estate': propertyRealEstateServices,
};
