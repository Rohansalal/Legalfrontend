'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Building2, ShieldCheck, Globe, FileCheck, UserCheck, FileSearch, CheckCircle2 } from 'lucide-react';

export default function RERARegistrationPage() {
  const data = {
    title: 'RERA Registration for Promoters & Projects',
    description: 'Mandatory RERA registration for all real estate projects and agents under the Real Estate (Regulation and Development) Act, 2016. Build buyer trust and legal compliance.',
    heroBadges: ['Real Estate Act 2016', 'State RERA Authority', '20–30 Days'],
    introTitle: 'What is RERA Registration?',
    introContent: (
      <p>RERA (Real Estate Regulatory Authority) was established under the Real Estate (Regulation and Development) Act, 2016 to bring transparency and accountability to the real estate sector. Every real estate project with more than 500 sq.mt. plot area or more than 8 apartments must be registered with the state RERA authority before any advertisement, booking, or sale. Promoters (builders/developers) must also register individually. RERA protects buyers' rights and establishes clear timelines, escrow requirements, and grievance redressal mechanisms.</p>
    ),
    detailsTitle: 'Why RERA Registration Matters',
    details: [
      { title: 'Mandatory Compliance', desc: 'Selling without RERA registration attracts penalties up to 5% of project cost.', icon: ShieldCheck },
      { title: 'Buyer Trust', desc: 'RERA-registered projects have higher buyer confidence and faster sales conversions.', icon: Building2 },
      { title: 'Bank Loan Facilitation', desc: 'Most banks require RERA registration before sanctioning home loans for buyers.', icon: Globe },
      { title: 'Legal Protection', desc: 'RERA registration protects developers from frivolous complaints and provides structured dispute resolution.', icon: FileCheck },
    ],
    requirements: [
      'Plot area > 500 sq.mt. OR units > 8 apartments', 'PAN Card of promoter company and directors',
      'Registered address and CIN of promoter company', 'Ownership/title documents of land',
      'Sanctioned building plan from competent authority', 'Environmental clearance certificate',
      'Land use conversion certificate (if applicable)', 'CA certificate of promoter\'s balance sheet',
    ],
    processTitle: 'How to Register a Real Estate Project under RERA',
    processIntro: 'RERA registration is done on the respective state RERA portal. Each state has its own RERA authority and portal.',
    processSteps: [
      { title: 'Register Promoter on State RERA Portal', desc: 'Create promoter account on the state RERA website with company PAN, CIN, and contact details.', icon: UserCheck },
      { title: 'Prepare Project Application', desc: 'Fill Form A (project registration application) with complete project details, timeline, and layout.', icon: FileSearch },
      { title: 'Upload Land & Approval Documents', desc: 'Upload title deed, conversion certificate, building plan approval, environmental clearance, and commencement certificate.', icon: Globe },
      { title: 'Upload Financial Details', desc: 'Provide CA-certified balance sheet, details of previous projects delivered (if any), and proposed project cost.', icon: CheckCircle2 },
      { title: 'Submit and Pay Fee', desc: 'Submit application and pay RERA registration fee (calculated on project carpet area/cost as per state rules).', icon: Building2 },
      { title: 'RERA Certificate', desc: 'RERA authority processes and issues the Registration Certificate with a unique RERA number within 30 days.', icon: FileCheck },
    ],
    processOutro: 'RERA registration is processed within 30 days of application. If not processed in 30 days, it is deemed approved under most state laws.',
    documents: [
      { category: 'Promoter Identity', list: ['PAN Card of Company', 'CIN of Promoter Company', 'Aadhaar/PAN of Authorized Signatory', 'Directors\' details'] },
      { category: 'Land Documents', list: ['Title Deed / Sale Deed', 'Encumbrance Certificate', 'Land use conversion certificate', 'Joint Development Agreement (if applicable)'] },
      { category: 'Project Approvals', list: ['Building plan approval', 'Environmental clearance', 'Commencement Certificate', 'Layout plan'] },
    ],
    compliance: [
      { title: 'Quarterly Updates', desc: 'Upload quarterly project progress reports on the RERA portal covering construction stage, units sold, and funds received.' },
      { title: 'Escrow Account', desc: '70% of funds collected from buyers must be maintained in a separate escrow account and used only for project construction.' },
      { title: 'Completion Certificate', desc: 'Upload Completion Certificate and Occupancy Certificate on the RERA portal upon project completion.' },
      { title: 'Project Disclosure', desc: 'All project details, including floor plans, prices, amenities, and status must be publicly visible on the RERA portal.' },
    ],
    faqs: [
      { q: 'Is RERA registration mandatory for all real estate projects?', a: 'Yes, for projects with plot area > 500 sq.mt. or > 8 apartments. Ongoing projects not completed by May 2017 also needed to register under RERA.' },
      { q: 'Can a promoter advertise before RERA registration?', a: 'No. Advertisement, marketing, or booking of any apartment is strictly prohibited before obtaining RERA registration. Violation attracts a penalty of 5% of project cost.' },
      { q: 'What is RERA registration for agents?', a: 'Real estate agents who facilitate sale/purchase must also register with RERA. Agent registration is separate from project registration.' },
      { q: 'How long is RERA registration valid?', a: 'RERA registration is valid until the project completion date declared at the time of registration. Extensions can be requested for genuine delays.' },
      { q: 'What penalties apply for non-registration?', a: 'Promoters can face penalties up to 10% of the project cost, imprisonment up to 3 years, or both for violations of RERA.' },
    ],
  };

  return (
    <main>
      <Navbar />
      <ServiceTemplate {...data} />
      <CTASection />
      <Footer />
    </main>
  );
}
