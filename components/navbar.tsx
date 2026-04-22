'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Globe,
  Search,
  FileCheck,
  Landmark,
  ShieldCheck,
  ArrowRight,
  Zap,
  Sparkles,
  FileText,
  Users,
  Gavel,
  Scale,
  Briefcase,
  Home,
  User,
  TrendingUp,
  Plane,
  Headphones,
  CheckCircle2,
  Clock,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
      { title: 'Annual Compliances for Section 8 Company', href: '/services/compliances/company-compliances/annual-section-8' },
      { title: 'Annual Compliances for Producer Company', href: '/services/compliances/company-compliances/annual-producer-company' },
      { title: 'Accounting / Audit / Book Keeping', href: '/services/compliances/company-compliances/accounting-audit-bookkeeping' },
      { title: 'GST Filing', href: '/services/compliances/company-compliances/gst-filing' },
      { title: 'ITR Filing', href: '/services/compliances/company-compliances/itr-filing' },
    ]
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
    ]
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
    ]
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
      { title: 'Court Support', href: '/services/lawyer-services/court-support' }
    ]
  }
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
    ]
  },
  {
    id: 'business-corporate-docs',
    title: 'B. Business / Corporate Document',
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
    ]
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
      { title: 'Global Expansion', href: '/services/global-business/global-expansion' }
    ]
  }
];

const mainNavLinks = [
  { title: 'Business Registration', categories: businessRegistrationCategories },
  { title: 'Compliances', categories: complianceCategories },
  { title: 'Documentation', categories: documentationCategories },
  { title: 'Property', categories: propertyCategories },
  { title: 'Lawyer Services', categories: lawyerCategories },
  { title: 'Global Business', categories: globalBusinessCategories },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>(businessRegistrationCategories[0].id);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderMegaMenu = (categories: any[]) => {
    const activeData = categories.find(c => c.id === activeCategory) || categories[0];
    
    return (
      <div className="flex w-[960px] min-h-[520px] bg-white">
        {/* LEFT PANEL: Categories (320px) */}
        <div className="w-[320px] bg-[#F8FAFC] border-r border-slate-100 p-6 flex flex-col overflow-y-auto">
          <div className="mb-6 px-2">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Service Categories</h4>
            <div className="space-y-1.5">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onMouseEnter={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-2xl transition-all cursor-pointer group relative",
                    activeCategory === category.id 
                      ? "bg-white shadow-xl shadow-slate-200/40 ring-1 ring-slate-100" 
                      : "hover:bg-slate-200/30"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300",
                    activeCategory === category.id ? "bg-slate-900 text-white scale-105" : "bg-white border border-slate-200 text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600"
                  )}>
                    <category.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-0.5">
                    <h5 className={cn(
                      "font-black text-[14px] transition-colors",
                      activeCategory === category.id ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                    )}>
                      {category.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 font-bold leading-tight line-clamp-1">{category.description}</p>
                  </div>
                  {activeCategory === category.id && (
                    <motion.div layoutId="active-indicator" className="absolute right-4 top-1/2 -translate-y-1/2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-auto p-2">
            <div className="flex items-center gap-3 text-slate-400">
              <Clock className="w-4 h-4" />
              <span className="text-[11px] font-black uppercase tracking-widest">Available 24/7 Support</span>
            </div>
          </div>
        </div>

        {/* CENTER PANEL: Services (Flexible Width) */}
        <div className="flex-1 p-10 bg-white overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-1 pb-6 border-b border-slate-50">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1 h-1 rounded-full bg-primary" />
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">{activeData?.title}</h3>
                </div>
                <p className="text-xs text-slate-400 font-bold">Comprehensive legal and business solutions for your identity and compliance.</p>
              </div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                {activeData?.subServices.map((sub: any) => (
                  <Link 
                    key={sub.title} 
                    href={sub.href}
                    className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                  >
                    <span className="text-[13px] font-black text-slate-600 group-hover:text-slate-900 transition-colors">
                      {sub.title}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
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
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-2 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Legal Door"
            width={50}
            height={50}
            className="h-10 sm:h-12 w-auto"
            style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 ml-auto mr-8">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {mainNavLinks.map((nav) => (
                <NavigationMenuItem key={nav.title} className="relative">
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent hover:bg-transparent focus:bg-transparent font-black text-[13px] h-auto py-2 px-4 transition-all tracking-tight uppercase",
                    "data-[state=open]:text-primary data-[state=open]:bg-transparent focus:text-primary",
                    isScrolled 
                      ? "text-slate-700 hover:text-primary" 
                      : "text-white/90 hover:text-white data-[state=open]:text-white focus:text-white"
                  )}>                    {nav.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full left-0 -translate-x-[15%] mt-4 shadow-[0_30px_80px_rgba(0,0,0,0.2)] rounded-[32px] border border-slate-100 overflow-hidden z-[100]">
                    {renderMegaMenu(nav.categories)}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className={cn(
                  "rounded-full font-black px-8 h-12 transition-all shadow-xl flex items-center gap-2 outline-none border-none group",
                  isScrolled ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-orange-500/20 hover:shadow-orange-500/40' : 'bg-white text-slate-900 hover:bg-slate-100 shadow-white/10'
                )}>
                  Consult an Expert
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 p-2 rounded-2xl bg-white/95 backdrop-blur-xl border-slate-200 shadow-2xl mt-2">
                <DropdownMenuItem className="py-4 px-5 rounded-xl font-bold text-slate-700 hover:text-primary hover:bg-slate-50 cursor-pointer transition-colors flex justify-between group">
                  Talk to a Lawyer <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </DropdownMenuItem>
                <DropdownMenuItem className="py-4 px-5 rounded-xl font-bold text-slate-700 hover:text-primary hover:bg-slate-50 cursor-pointer transition-colors flex justify-between group border-t border-slate-50">
                  Talk to a CA <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Toggle */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={cn(
                "transition-colors",
                isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              )}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] bg-white border-l-0 p-0 overflow-hidden flex flex-col">
              <div className="p-8 bg-slate-950 text-white relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16" />
                <Image src="/images/logo.png" alt="Logo" width={45} height={45} className="brightness-0 invert mb-6 relative z-10" />
                <h2 className="text-2xl font-black tracking-tight relative z-10">Our Services</h2>
                <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest relative z-10 mt-1">Legal Door Intelligence</p>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 py-8 custom-scrollbar">
                <div className="space-y-10">
                  {mainNavLinks.map((nav) => (
                    <div key={nav.title} className="space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-slate-100" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] shrink-0">{nav.title}</span>
                        <div className="h-px flex-1 bg-slate-100" />
                      </div>
                      <div className="space-y-8">
                        {nav.categories.map((category: any) => (
                          <div key={category.id} className="space-y-4 group">
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                   <category.icon className="w-4 h-4" />
                                </div>
                                <span className="font-black text-slate-900 text-sm">{category.title}</span>
                             </div>
                             <div className="grid grid-cols-1 gap-3 pl-11">
                                {category.subServices.map((sub: any) => (
                                  <Link 
                                    key={sub.title} 
                                    href={sub.href} 
                                    className="text-slate-500 hover:text-primary py-1 text-[13px] font-bold transition-colors flex items-center gap-2"
                                  >
                                    <div className="w-1 h-1 rounded-full bg-slate-200" />
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

              <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col gap-3">
                <div className="flex items-center justify-center gap-2 mb-2">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />)}
                   </div>
                   <span className="text-[10px] font-black text-slate-400 uppercase">10k+ users joined</span>
                </div>
                <Button className="w-full h-14 rounded-2xl font-black uppercase tracking-widest bg-slate-900 hover:bg-primary shadow-xl shadow-slate-200 transition-all">
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
