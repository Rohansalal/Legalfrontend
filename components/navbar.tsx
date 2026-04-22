'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  ChevronDown,
  Building2,
  Globe,
  FileCheck,
  Landmark,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  FileText,
  Users,
  Gavel,
  Scale,
  Briefcase,
  TrendingUp,
  Headphones,
  Clock,
  Award,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

/* ─── Data ─────────────────────────────────────────────────────────────── */

const businessRegistrationCategories = [
  {
    id: 'company-registration',
    title: 'A. Company Registration',
    icon: Building2,
    description: 'Pvt Ltd, Public Ltd, LLP, OPC, NBFC & more.',
    href: '/services/business-registration/company-registration',
    subServices: [
      { title: 'Private Limited Company', href: '/services/business-registration/company-registration/private-limited-company' },
      { title: 'Public Limited Company', href: '/services/business-registration/company-registration/public-limited-company' },
      { title: 'LLP Registration', href: '/services/business-registration/company-registration/llp-registration' },
      { title: 'One Person Company (OPC)', href: '/services/business-registration/company-registration/one-person-company' },
      { title: 'GST Registration', href: '/services/business-registration/company-registration/gst-registration' },
      { title: 'Section 8 Company', href: '/services/business-registration/company-registration/section-8-company' },
      { title: 'Producer Company', href: '/services/business-registration/company-registration/producer-company' },
      { title: 'Proprietorship Firm', href: '/services/business-registration/company-registration/proprietorship-firm' },
      { title: 'Partnership Firm', href: '/services/business-registration/company-registration/partnership-firm' },
      { title: 'NBFC Registration', href: '/services/business-registration/company-registration/nbfc-registration' },
    ],
  },
  {
    id: 'other-registration',
    title: 'B. Other Registration',
    icon: FileText,
    description: 'Society, Trust, RERA, IEC, ESI & PF and more.',
    href: '/services/business-registration/other-registration',
    subServices: [
      { title: 'Society Registration (NGO)', href: '/services/business-registration/other-registration/society-registration' },
      { title: 'Trust Registration (NGO)', href: '/services/business-registration/other-registration/trust-registration' },
      { title: 'Political Party Registration', href: '/services/business-registration/other-registration/political-party-registration' },
      { title: '12A & 80G Registration', href: '/services/business-registration/other-registration/12a-80g-registration' },
      { title: 'RWA Registration', href: '/services/business-registration/other-registration/rwa-registration' },
      { title: 'RERA Registration', href: '/services/business-registration/other-registration/rera-registration' },
      { title: 'Import Export Code (IEC)', href: '/services/business-registration/other-registration/import-export-code' },
      { title: 'FCRA / FEMA Registration', href: '/services/business-registration/other-registration/fcra-fema-registration' },
      { title: 'ESI & PF Registration', href: '/services/business-registration/other-registration/esi-pf-registration' },
      { title: 'Telemarketing Registration', href: '/services/business-registration/other-registration/telemarketing-registration' },
    ],
  },
  {
    id: 'license',
    title: 'C. License',
    icon: Award,
    description: 'FSSAI, Drug, Liquor, Factory, FFMC & more.',
    href: '/services/business-registration/license',
    subServices: [
      { title: 'FSSAI License', href: '/services/business-registration/license/fssai-license' },
      { title: 'AYUSH License', href: '/services/business-registration/license/ayush-license' },
      { title: 'Drug License', href: '/services/business-registration/license/drug-license' },
      { title: 'Liquor License', href: '/services/business-registration/license/liquor-license' },
      { title: 'Factory License', href: '/services/business-registration/license/factory-license' },
      { title: 'Small Finance Bank License', href: '/services/business-registration/license/small-finance-bank-license' },
      { title: 'FFMC License', href: '/services/business-registration/license/ffmc-license' },
      { title: 'PASARA License', href: '/services/business-registration/license/pasara-license' },
      { title: 'Trade License', href: '/services/business-registration/license/trade-license' },
      { title: 'Shop & Establishment License', href: '/services/business-registration/license/shop-establishment-license' },
    ],
  },
  {
    id: 'ngo-registration',
    title: 'D. NGO Registration',
    icon: Users,
    description: 'Trust, Society & Section 8 Company for NGOs.',
    href: '/services/business-registration/ngo-registration',
    subServices: [
      { title: 'Trust Registration', href: '/services/business-registration/ngo-registration/trust-registration' },
      { title: 'Society Registration', href: '/services/business-registration/ngo-registration/society-registration' },
      { title: 'Section 8 Company', href: '/services/business-registration/ngo-registration/section-8-company' },
    ],
  },
  {
    id: 'tax-exemption',
    title: 'E. Tax Exemption',
    icon: ShieldCheck,
    description: '12A & 80G income tax exemptions for NGOs.',
    href: '/services/business-registration/tax-exemption',
    subServices: [
      { title: '12A Registration', href: '/services/business-registration/tax-exemption/12a-registration' },
      { title: '80G Registration', href: '/services/business-registration/tax-exemption/80g-registration' },
    ],
  },
];

const propertyCategories = [
  {
    id: 'prop-registration',
    title: 'A. Registration',
    icon: Landmark,
    description: 'Sale deed, gift deed, will, GPA & all property registrations.',
    href: '/services/property/registration',
    subServices: [
      { title: 'Sale Deed Registration', href: '/services/property/registration/sale-deed' },
      { title: 'Gift Deed Registration', href: '/services/property/registration/gift-deed' },
      { title: 'Lease Deed Registration', href: '/services/property/registration/lease-deed' },
      { title: 'Conveyance Deed Registration', href: '/services/property/registration/conveyance-deed' },
      { title: 'Agreement to Sale', href: '/services/property/registration/agreement-to-sale' },
      { title: 'Mutation', href: '/services/property/registration/mutation' },
      { title: 'TM (Transfer of Memorandum)', href: '/services/property/registration/transfer-of-memorandum' },
      { title: 'Will Registration', href: '/services/property/registration/will-registration' },
      { title: 'General Power of Attorney', href: '/services/property/registration/general-power-of-attorney' },
      { title: 'Builder Buyer Agreement', href: '/services/property/registration/builder-buyer-agreement' },
    ],
  },
  {
    id: 'prop-verification',
    title: 'B. Verification & Report',
    icon: ShieldCheck,
    description: 'Title search, due diligence, CERSAI & legal reports.',
    href: '/services/property/verification',
    subServices: [
      { title: 'Title Search Verification', href: '/services/property/verification/title-search' },
      { title: 'Encumbrances Check', href: '/services/property/verification/encumbrances-check' },
      { title: 'Due Diligence Report', href: '/services/property/verification/due-diligence-report' },
      { title: 'CERSAI Verification', href: '/services/property/verification/cersai-verification' },
      { title: 'Certified Copy of Documents', href: '/services/property/verification/certified-copy' },
      { title: 'Permission to Mortgage (PTM)', href: '/services/property/verification/permission-to-mortgage' },
      { title: 'Legal Publish in Newspaper', href: '/services/property/verification/legal-newspaper-publication' },
    ],
  },
  {
    id: 'prop-certificate',
    title: 'C. Certificate',
    icon: Award,
    description: 'Surviving member, legal heir & succession certificates.',
    href: '/services/property/certificate',
    subServices: [
      { title: 'Surviving Member Certificate', href: '/services/property/certificate/surviving-member' },
      { title: 'Legal Heir Certificate', href: '/services/property/certificate/legal-heir' },
      { title: 'Succession Certificate', href: '/services/property/certificate/succession-certificate' },
    ],
  },
];

const complianceCategories = [
  {
    id: 'company-compliances',
    title: 'D-1 Company Compliances',
    icon: FileCheck,
    description: 'Annual filings, GST, ITR & accounting for all company types.',
    href: '/services/compliances/company-compliances',
    subServices: [
      { title: 'Annual Compliances for Pvt. Ltd.', href: '/services/compliances/company-compliances/annual-pvt-ltd' },
      { title: 'Annual Compliances for Public Ltd.', href: '/services/compliances/company-compliances/annual-public-ltd' },
      { title: 'Annual Compliances for LLP', href: '/services/compliances/company-compliances/annual-llp' },
      { title: 'Annual Compliances for OPC', href: '/services/compliances/company-compliances/annual-opc' },
      { title: 'Annual Compliances for Nidhi Company', href: '/services/compliances/company-compliances/annual-nidhi-company' },
      { title: 'Annual Compliances for Section 8', href: '/services/compliances/company-compliances/annual-section-8' },
      { title: 'Annual Compliances for Producer Co.', href: '/services/compliances/company-compliances/annual-producer-company' },
      { title: 'Accounting / Audit / Book Keeping', href: '/services/compliances/company-compliances/accounting-audit-bookkeeping' },
      { title: 'GST Filing', href: '/services/compliances/company-compliances/gst-filing' },
      { title: 'ITR Filing', href: '/services/compliances/company-compliances/itr-filing' },
    ],
  },
  {
    id: 'change-in-business',
    title: 'D-2 Change in Business',
    icon: TrendingUp,
    description: 'Name, directors, capital, shares & other business changes.',
    href: '/services/compliances/change-in-business',
    subServices: [
      { title: 'Change Company Name', href: '/services/compliances/change-in-business/change-company-name' },
      { title: 'Change of Place of the Company', href: '/services/compliances/change-in-business/change-place' },
      { title: 'Change of Object of the Company', href: '/services/compliances/change-in-business/change-object' },
      { title: 'Change of Directors', href: '/services/compliances/change-in-business/change-directors' },
      { title: 'Increased Authorized Capital', href: '/services/compliances/change-in-business/increase-authorized-capital' },
      { title: 'Director (DIR-3) KYC', href: '/services/compliances/change-in-business/director-dir3-kyc' },
      { title: 'Dematerialization of Shares', href: '/services/compliances/change-in-business/dematerialization-of-shares' },
      { title: 'Share Transfer', href: '/services/compliances/change-in-business/share-transfer' },
      { title: 'Fund Raising', href: '/services/compliances/change-in-business/fund-raising' },
    ],
  },
  {
    id: 'closure-convert-others',
    title: 'D-3 Closure, Convert & Others',
    icon: Briefcase,
    description: 'Company conversions, closures & professional audit reports.',
    href: '/services/compliances/closure-convert-others',
    subServices: [
      { title: 'Convert Pvt. Ltd. to Public Ltd.', href: '/services/compliances/closure-convert-others/pvt-to-public' },
      { title: 'Convert LLP to Pvt. Ltd.', href: '/services/compliances/closure-convert-others/llp-to-pvt' },
      { title: 'Close LLP', href: '/services/compliances/closure-convert-others/close-llp' },
      { title: 'Close Pvt. Ltd.', href: '/services/compliances/closure-convert-others/close-pvt-ltd' },
      { title: 'Close Public Ltd.', href: '/services/compliances/closure-convert-others/close-public-ltd' },
      { title: 'Close NGO', href: '/services/compliances/closure-convert-others/close-ngo' },
      { title: 'CA Audit & Report', href: '/services/compliances/closure-convert-others/ca-audit-report' },
      { title: 'CS Audit & Report', href: '/services/compliances/closure-convert-others/cs-audit-report' },
      { title: 'CMA Audit & Report', href: '/services/compliances/closure-convert-others/cma-audit-report' },
      { title: 'Advocate Audit & Report', href: '/services/compliances/closure-convert-others/advocate-audit-report' },
    ],
  },
];

const lawyerCategories = [
  {
    id: 'lawyer-main',
    title: 'Legal Solutions',
    icon: Gavel,
    description: 'Expert consultation and representation.',
    href: '/services/lawyer-services',
    subServices: [
      { title: 'Legal Consultation', href: '/services/lawyer-services/legal-consultation' },
      { title: 'Legal Notices', href: '/services/lawyer-services/legal-notices' },
      { title: 'Dispute Resolution', href: '/services/lawyer-services/dispute-resolution' },
      { title: 'Court Support', href: '/services/lawyer-services/court-support' },
    ],
  },
];

const documentationCategories = [
  {
    id: 'legal-docs',
    title: 'A. Legal',
    icon: Scale,
    description: 'Legal notices, affidavits, agreements & attestation.',
    href: '/services/documentation/legal',
    subServices: [
      { title: 'Legal Notice', href: '/services/documentation/legal/legal-notice' },
      { title: 'Affidavit', href: '/services/documentation/legal/affidavit' },
      { title: 'Notary, Stamp & Attestation', href: '/services/documentation/legal/notary-stamp-attestation' },
      { title: 'Apostille (MEA/HRD)', href: '/services/documentation/legal/apostille' },
      { title: 'Marriage Registration', href: '/services/documentation/legal/marriage-registration' },
      { title: 'Rent / Lease Agreement', href: '/services/documentation/legal/rent-lease-agreement' },
      { title: 'Legal Contract', href: '/services/documentation/legal/legal-contract' },
      { title: 'Business Agreement', href: '/services/documentation/legal/business-agreement' },
      { title: 'Real Estate Agreement', href: '/services/documentation/legal/real-estate-agreement' },
    ],
  },
  {
    id: 'business-corporate-docs',
    title: 'B. Business / Corporate',
    icon: Briefcase,
    description: 'Corporate letters, agreements & business documents.',
    href: '/services/documentation/business-corporate',
    subServices: [
      { title: 'No Objection Certificate', href: '/services/documentation/business-corporate/noc' },
      { title: 'Offer Letter / Appointment Letter', href: '/services/documentation/business-corporate/offer-appointment-letter' },
      { title: 'Resignation Letter', href: '/services/documentation/business-corporate/resignation-letter' },
      { title: 'Termination Letter', href: '/services/documentation/business-corporate/termination-letter' },
      { title: 'Memorandum of Understanding', href: '/services/documentation/business-corporate/mou' },
      { title: 'Franchise Agreement', href: '/services/documentation/business-corporate/franchise-agreement' },
      { title: 'Joint Venture Agreement', href: '/services/documentation/business-corporate/joint-venture-agreement' },
      { title: 'Non-Disclosure Agreement', href: '/services/documentation/business-corporate/nda' },
      { title: 'Auditor Appointment Letter', href: '/services/documentation/business-corporate/auditor-appointment-letter' },
      { title: 'Appointment of Company Secretary', href: '/services/documentation/business-corporate/company-secretary-appointment' },
    ],
  },
];

const globalBusinessCategories = [
  {
    id: 'global-main',
    title: 'Global Expansion',
    icon: Globe,
    description: 'International setup and banking.',
    href: '/services/global-business',
    subServices: [
      { title: 'International Formation', href: '/services/global-business/international-company-formation' },
      { title: 'Global Compliance', href: '/services/global-business/global-compliance' },
      { title: 'Global Banking', href: '/services/global-business/global-banking' },
      { title: 'Global Expansion', href: '/services/global-business/global-expansion' },
    ],
  },
];

const mainNavLinks = [
  { title: 'Business Registration', categories: businessRegistrationCategories },
  { title: 'Compliances', categories: complianceCategories },
  { title: 'Documentation', categories: documentationCategories },
  { title: 'Property', categories: propertyCategories },
  { title: 'Lawyer Services', categories: lawyerCategories },
  { title: 'Global Business', categories: globalBusinessCategories },
];

/* ─── Component ─────────────────────────────────────────────────────────── */

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Mega-menu top offset follows the navbar height transition */
  const menuTop = isScrolled ? 58 : 80;

  const renderMegaMenu = (categories: typeof businessRegistrationCategories) => {
    const active = categories.find(c => c.id === activeCategory) ?? categories[0];

    return (
      /*
       * Width ladder:
       *  lg  (1024–1279 px) → 700 px   compact laptops / Surface / small Windows
       *  xl  (1280–1535 px) → 860 px   standard 13-14" MacBook / 1080p Windows
       *  2xl (1536 px+)     → 1020 px  large MacBook Pro, 2K / 4K monitors
       */
      <div className="flex w-[700px] xl:w-[860px] 2xl:w-[1020px] bg-white overflow-hidden"
           style={{ maxHeight: 'calc(85vh - 80px)' }}>

        {/* ── Left panel: category list ── */}
        <div className="w-[200px] xl:w-[256px] 2xl:w-[296px] bg-slate-50 border-r border-slate-100 flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
          <div className="flex-1 p-3 xl:p-4 2xl:p-5">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.22em] mb-3 px-1">
              Categories
            </p>
            <div className="space-y-0.5">
              {categories.map((cat) => {
                const isActive = active.id === cat.id;
                return (
                  <div
                    key={cat.id}
                    onMouseEnter={() => setActiveCategory(cat.id)}
                    className={cn(
                      'flex items-center gap-2.5 xl:gap-3 p-2.5 xl:p-3 rounded-xl cursor-pointer group relative transition-all duration-150',
                      isActive
                        ? 'bg-white shadow-md shadow-slate-200/60 ring-1 ring-slate-100'
                        : 'hover:bg-white/60',
                    )}
                  >
                    <div className={cn(
                      'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200',
                      isActive
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600',
                    )}>
                      <cat.icon className="w-[15px] h-[15px]" strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className={cn(
                        'font-bold leading-tight transition-colors',
                        'text-[11px] xl:text-[12px] 2xl:text-[13px]',
                        isActive ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-800',
                      )}>
                        {cat.title}
                      </p>
                      <p className="text-[10px] text-slate-400 leading-tight line-clamp-1 mt-0.5 hidden xl:block">
                        {cat.description}
                      </p>
                    </div>

                    {isActive && (
                      <motion.span
                        layoutId="cat-dot"
                        className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer badge */}
          <div className="p-3 xl:p-4 border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[9px] font-black uppercase tracking-widest">24 / 7 Support</span>
            </div>
          </div>
        </div>

        {/* ── Right panel: service links ── */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 xl:p-7 2xl:p-8 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.14, ease: 'easeOut' }}
              className="space-y-4 xl:space-y-5"
            >
              {/* Panel header */}
              <div className="pb-3 xl:pb-4 border-b border-slate-50">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  <h3 className="text-[15px] xl:text-base 2xl:text-lg font-black text-slate-900 tracking-tight">
                    {active.title}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-400 font-medium leading-snug">
                  {active.description}
                </p>
              </div>

              {/* Service grid — 1 col on lg, 2 cols on xl+ */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 2xl:gap-x-10 gap-y-0.5">
                {active.subServices.map((sub) => (
                  <Link
                    key={sub.title}
                    href={sub.href}
                    className="group flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-150"
                  >
                    <span className="text-[11.5px] xl:text-[12.5px] font-semibold text-slate-600 group-hover:text-slate-900 transition-colors leading-snug">
                      {sub.title}
                    </span>
                    <ArrowRight className="w-3 h-3 text-primary shrink-0 ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/96 backdrop-blur-md border-b border-slate-200/80 py-2 shadow-sm'
          : 'bg-transparent py-4',
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Legal Door"
            width={50}
            height={50}
            className="h-9 sm:h-11 w-auto"
            style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
          />
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden lg:flex items-center gap-1 mx-auto">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-0">
              {mainNavLinks.map((nav) => (
                <NavigationMenuItem key={nav.title} className="relative">
                  <NavigationMenuTrigger
                    onMouseEnter={() => setActiveCategory(nav.categories[0].id)}
                    className={cn(
                      // reset all default styles
                      'bg-transparent hover:bg-transparent focus:bg-transparent',
                      'data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent',
                      // typography
                      'font-bold tracking-tight uppercase',
                      'text-[11px] xl:text-[12px] 2xl:text-[13px]',
                      // spacing — tighter on lg, normal on xl+
                      'h-auto py-2 px-2.5 xl:px-3.5',
                      // colour states
                      'transition-colors duration-150',
                      isScrolled
                        ? 'text-slate-700 hover:text-primary data-[state=open]:text-primary focus:text-primary'
                        : 'text-white/85 hover:text-white data-[state=open]:text-white focus:text-white',
                    )}
                  >
                    {nav.title}
                  </NavigationMenuTrigger>

                  {/*
                   * The motion.nav has transform applied by Framer Motion.
                   * That makes it the containing block for `position:fixed` children,
                   * which is identical to the viewport since the nav is pinned
                   * top:0 left:0 right:0. So centering with left:50% / -translateX(50%)
                   * here == centering in the viewport. No overflow on any screen size.
                   */}
                  <NavigationMenuContent
                    className={cn(
                      '!fixed !left-1/2 !-translate-x-1/2',
                      '!rounded-2xl !border !border-slate-100/80 !overflow-hidden',
                      '!shadow-[0_16px_56px_rgba(0,0,0,0.13),0_4px_16px_rgba(0,0,0,0.06)]',
                      'transition-[top] duration-300',
                      // clear radix default positioning
                      '!top-auto !mt-0',
                    )}
                    style={{ top: menuTop }}
                  >
                    {renderMegaMenu(nav.categories)}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* ── Right actions ── */}
        <div className="flex items-center gap-3 xl:gap-4">
          {/* Consult button — hidden on mobile */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className={cn(
                  'rounded-full font-black text-[12px] xl:text-[13px] px-5 xl:px-7 h-10 xl:h-11',
                  'flex items-center gap-1.5 outline-none border-none group transition-all duration-200',
                  'shadow-lg',
                  isScrolled
                    ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:shadow-orange-500/30 hover:shadow-xl'
                    : 'bg-white text-slate-900 hover:bg-slate-50 shadow-white/20',
                )}>
                  <Headphones className="w-3.5 h-3.5 shrink-0" />
                  Consult an Expert
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-64 xl:w-72 p-1.5 rounded-2xl bg-white/98 backdrop-blur-xl border-slate-100 shadow-[0_16px_48px_rgba(0,0,0,0.12)] mt-2"
              >
                <DropdownMenuItem className="flex items-center justify-between py-3.5 px-4 rounded-xl font-semibold text-[13px] text-slate-700 hover:text-primary hover:bg-slate-50 cursor-pointer group transition-colors">
                  Talk to a Lawyer
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-between py-3.5 px-4 rounded-xl font-semibold text-[13px] text-slate-700 hover:text-primary hover:bg-slate-50 cursor-pointer group transition-colors mt-0.5">
                  Talk to a CA
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* ── Mobile hamburger ── */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'w-10 h-10 rounded-xl transition-colors',
                  isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10',
                )}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full sm:w-[390px] bg-white border-l-0 p-0 overflow-hidden flex flex-col"
            >
              {/* Sheet header */}
              <div className="p-7 bg-slate-950 text-white relative overflow-hidden shrink-0">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
                <Image src="/images/logo.png" alt="Logo" width={42} height={42} className="brightness-0 invert mb-5 relative z-10" />
                <h2 className="text-xl font-black tracking-tight relative z-10">Our Services</h2>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest relative z-10 mt-0.5">
                  Legal Door — India&apos;s Trusted Platform
                </p>
              </div>

              {/* Sheet body */}
              <div className="flex-1 overflow-y-auto px-5 py-7 custom-scrollbar">
                <div className="space-y-8">
                  {mainNavLinks.map((nav) => (
                    <div key={nav.title} className="space-y-4">
                      {/* Section label */}
                      <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-slate-100" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.28em] shrink-0">
                          {nav.title}
                        </span>
                        <div className="h-px flex-1 bg-slate-100" />
                      </div>

                      <div className="space-y-6">
                        {nav.categories.map((cat: typeof businessRegistrationCategories[0]) => (
                          <div key={cat.id} className="space-y-2">
                            <div className="flex items-center gap-3">
                              <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                                <cat.icon className="w-3.5 h-3.5" />
                              </div>
                              <span className="font-black text-slate-900 text-[13px]">{cat.title}</span>
                            </div>
                            <div className="pl-10 grid grid-cols-1 gap-1">
                              {cat.subServices.map((sub) => (
                                <Link
                                  key={sub.title}
                                  href={sub.href}
                                  className="flex items-center gap-2 text-slate-500 hover:text-primary py-1 text-[12.5px] font-medium transition-colors"
                                >
                                  <span className="w-1 h-1 rounded-full bg-slate-200 shrink-0" />
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sheet footer */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 shrink-0 space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <div className="flex -space-x-1.5">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    10,000+ clients served
                  </span>
                </div>
                <Button className="w-full h-12 rounded-xl font-black text-[12px] uppercase tracking-widest bg-slate-900 hover:bg-primary transition-colors shadow-sm">
                  Book Free Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
