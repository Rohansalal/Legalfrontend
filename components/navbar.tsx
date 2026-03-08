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
  Heart, 
  Gavel, 
  Scale, 
  Briefcase, 
  Home, 
  User, 
  TrendingUp, 
  Plane,
  Headphones,
  CheckCircle2,
  Clock
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
    title: 'Company Registration',
    icon: Building2,
    description: 'Start your business as a legal entity in India.',
    href: '/services/business-registration/company-registration',
    subServices: [
      { title: 'Private Limited Company', href: '/services/business-registration/company-registration/private-limited-company' },
      { title: 'Limited Liability Partnership', href: '/services/business-registration/company-registration/limited-liability-partnership' },
      { title: 'One Person Company', href: '/services/business-registration/company-registration/one-person-company' },
      { title: 'Sole Proprietorship', href: '/services/business-registration/company-registration/sole-proprietorship' },
      { title: 'Nidhi Company', href: '/services/business-registration/company-registration/nidhi-company' },
      { title: 'Producer Company', href: '/services/business-registration/company-registration/producer-company' },
      { title: 'Partnership Firm', href: '/services/business-registration/company-registration/partnership-firm' },
      { title: 'Startup India Registration', href: '/services/business-registration/company-registration/startup-india-registration' },
    ]
  },
  {
    id: 'international-setup',
    title: 'International Setup',
    icon: Globe,
    description: 'Expand your horizons with global registration.',
    href: '/services/business-registration/international-business-setup',
    subServices: [
      { title: 'USA Company', href: '/services/business-registration/international-business-setup/usa-company' },
      { title: 'UK Company', href: '/services/business-registration/international-business-setup/uk-company' },
      { title: 'Dubai Company', href: '/services/business-registration/international-business-setup/dubai-company' },
      { title: 'Singapore Company', href: '/services/business-registration/international-business-setup/singapore-company' },
    ]
  },
  {
    id: 'name-search',
    title: 'Company Name Search',
    icon: Search,
    description: 'Secure a unique identity for your brand.',
    href: '/services/business-registration/company-name-search',
    subServices: [
      { title: 'MCA Name Search', href: '/services/business-registration/company-name-search/mca-name-search' },
      { title: 'Trademark Name Search', href: '/services/business-registration/company-name-search/trademark-name-search' },
      { title: 'Domain Name Check', href: '/services/business-registration/company-name-search/domain-name-check' },
      { title: 'RUN Application', href: '/services/business-registration/company-name-search/run-application' },
      { title: 'Brand Name Consultation', href: '/services/business-registration/company-name-search/brand-name-consultation' },
    ]
  },
  {
    id: 'licenses',
    title: 'Licenses & Registrations',
    icon: FileCheck,
    description: 'All essential permits for your business ops.',
    href: '/services/business-registration/licenses-and-registrations',
    subServices: [
      { title: 'GST Registration', href: '/services/business-registration/licenses-and-registrations/gst-registration' },
      { title: 'Shop & Establishment', href: '/services/business-registration/licenses-and-registrations/shop-establishment-license' },
      { title: 'FSSAI License', href: '/services/business-registration/licenses-and-registrations/fssai-license' },
      { title: 'Import Export Code', href: '/services/business-registration/licenses-and-registrations/import-export-code' },
      { title: 'Trade License', href: '/services/business-registration/licenses-and-registrations/trade-license' },
      { title: 'Professional Tax', href: '/services/business-registration/licenses-and-registrations/professional-tax' },
      { title: 'ISO Certification', href: '/services/business-registration/licenses-and-registrations/iso-certification' },
      { title: 'MSME Registration', href: '/services/business-registration/licenses-and-registrations/msme-registration' },
    ]
  }
];

const propertyCategories = [
  {
    id: 'prop-doc',
    title: 'Documentation',
    icon: FileText,
    description: 'Sale deeds and agreements.',
    href: '/services/property',
    subServices: [
      { title: 'Sale Deed Drafting', href: '/services/property/property-documentation/sale-deed-drafting' },
      { title: 'Gift Deed', href: '/services/property/property-documentation/gift-deed' },
      { title: 'Rental Agreement', href: '/services/property/property-documentation/rental-agreement' },
      { title: 'Lease Agreement', href: '/services/property/property-documentation/lease-agreement' }
    ]
  },
  {
    id: 'prop-reg',
    title: 'Registration',
    icon: Landmark,
    description: 'Government registration.',
    href: '/services/property',
    subServices: [
      { title: 'Property Registration', href: '/services/property/property-registration/registration' },
      { title: 'Stamp Duty Calculation', href: '/services/property/property-registration/stamp-duty' },
      { title: 'Property Mutation', href: '/services/property/property-registration/mutation' }
    ]
  },
  {
    id: 'prop-ver',
    title: 'Verification',
    icon: ShieldCheck,
    description: 'Title checks and due diligence.',
    href: '/services/property',
    subServices: [
      { title: 'Title Verification', href: '/services/property/property-verification/title-verification' },
      { title: 'Land Record Check', href: '/services/property/property-verification/land-record' },
      { title: 'Legal Due Diligence', href: '/services/property/property-verification/due-diligence' }
    ]
  }
];

const ngoCategories = [
  {
    id: 'ngo-reg',
    title: 'NGO Registration',
    icon: Users,
    description: 'Trust and Society setup.',
    href: '/services/ngo-services',
    subServices: [
      { title: 'Trust Registration', href: '/services/ngo-services/ngo-registration/trust' },
      { title: 'Society Registration', href: '/services/ngo-services/ngo-registration/society' },
      { title: 'Section 8 Company', href: '/services/ngo-services/ngo-registration/section-8' }
    ]
  },
  {
    id: 'ngo-tax',
    title: 'Tax Exemption',
    icon: ShieldCheck,
    description: '12A and 80G registrations.',
    href: '/services/ngo-services',
    subServices: [
      { title: '12A Registration', href: '/services/ngo-services/ngo-tax-exemption/12a' },
      { title: '80G Registration', href: '/services/ngo-services/ngo-tax-exemption/80g' }
    ]
  }
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
    id: 'doc-business',
    title: 'Business Documentation',
    icon: Briefcase,
    description: 'NDA, MOU, and vendor agreements.',
    href: '/services/documentation',
    subServices: [
      { title: 'NDA Drafting', href: '/services/documentation/business-documents/nda' },
      { title: 'MOU Drafting', href: '/services/documentation/business-documents/mou' },
      { title: 'Vendor Agreement', href: '/services/documentation/business-documents/vendor-agreement' },
      { title: 'Shareholders Agreement', href: '/services/documentation/business-documents/shareholders-agreement' },
      { title: 'Founders Agreement', href: '/services/documentation/business-documents/founder-agreement' }
    ]
  },
  {
    id: 'doc-property',
    title: 'Property Documentation',
    icon: Home,
    description: 'Rent, sale and lease agreements.',
    href: '/services/documentation',
    subServices: [
      { title: 'Rent Agreement', href: '/services/documentation/property-documents/rental-agreement' },
      { title: 'Sale Agreement', href: '/services/documentation/property-documents/sale-deed' },
      { title: 'Lease Agreement', href: '/services/documentation/property-documents/lease-agreement' },
      { title: 'Property Partition Deed', href: '/services/documentation/property-documents/partition-deed' }
    ]
  },
  {
    id: 'doc-personal',
    title: 'Personal Documents',
    icon: User,
    description: 'Wills, affidavits and power of attorney.',
    href: '/services/documentation',
    subServices: [
      { title: 'Affidavit', href: '/services/documentation/personal-legal-documents/affidavits' },
      { title: 'Power of Attorney', href: '/services/documentation/personal-legal-documents/power-of-attorney' },
      { title: 'Will', href: '/services/documentation/personal-legal-documents/wills-trusts' },
      { title: 'Succession Certificate', href: '/services/documentation/personal-legal-documents/succession-certificate' }
    ]
  },
  {
    id: 'doc-employment',
    title: 'Employment & HR',
    icon: Users,
    description: 'Offer letters and HR policies.',
    href: '/services/documentation',
    subServices: [
      { title: 'Employment Agreement', href: '/services/documentation/employment-hr/employment-agreement' },
      { title: 'Offer Letter', href: '/services/documentation/employment-hr/offer-letter' },
      { title: 'Internship Agreement', href: '/services/documentation/employment-hr/internship-agreement' },
      { title: 'HR Policy', href: '/services/documentation/employment-hr/hr-policy' }
    ]
  }
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
  { title: 'Property', categories: propertyCategories },
  { title: 'NGO Services', categories: ngoCategories },
  { title: 'Lawyer Services', categories: lawyerCategories },
  { title: 'Documentation', categories: documentationCategories },
  { title: 'Global Business', categories: globalBusinessCategories }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(businessRegistrationCategories[0].id);

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
      <div className="flex w-[900px] min-h-[480px] bg-white">
        {/* LEFT PANEL: Categories (320px) */}
        <div className="w-[320px] bg-[#F8FAFC] border-r border-slate-100 p-6 flex flex-col">
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
        <div className="flex-1 p-10 bg-white">
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
