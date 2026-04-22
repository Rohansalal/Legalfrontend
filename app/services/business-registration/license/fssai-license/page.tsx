'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function FSSAILicensePage() {
  const data = {
    title: 'FSSAI License',
    description: 'Mandatory Food Safety and Standards Authority of India license for all food business operators — from home bakers to large food manufacturers, restaurants, and exporters.',
    heroBadges: ['Ministry of Health & Family Welfare', 'State & Central License', '7–30 Days'],
    introTitle: 'What is an FSSAI License?',
    introContent: (
      <p>FSSAI (Food Safety and Standards Authority of India) license is mandatory under the Food Safety and Standards Act, 2006 for any Food Business Operator (FBO) engaged in manufacturing, processing, storage, distribution, or sale of food products in India. There are three types: Basic Registration (turnover &lt; ₹12L), State License (turnover ₹12L–₹20Cr), and Central License (turnover &gt; ₹20Cr or businesses involved in imports/exports). The 14-digit FSSAI license number must appear on all food product labels.</p>
    ),
    detailsTitle: 'Types of FSSAI License',
    details: [
      { title: 'Basic Registration', desc: 'For petty food businesses with turnover below ₹12 Lakhs. Simple process, valid 1–5 years.', icon: Zap },
      { title: 'State License', desc: 'For mid-sized FBOs with turnover between ₹12L and ₹20Cr. Issued by State Food Authority.', icon: ShieldCheck },
      { title: 'Central License', desc: 'For businesses with turnover > ₹20Cr, importers, exporters, and nationwide distributors.', icon: Globe },
      { title: 'Annual Renewal', desc: 'FSSAI license must be renewed before expiry. Non-renewal attracts fines up to ₹5 Lakhs.', icon: Award },
    ],
    requirements: [
      'Form A (Basic) or Form B (State/Central) application', 'Nature of food business and list of food categories',
      'Address proof of business premises', 'Identity proof of proprietor/partners/directors',
      'Food safety management system plan', 'List of food products to be handled',
      'Equipment and machinery details (for manufacturing)', 'Water test report (for manufacturing)',
    ],
    processTitle: 'How to Get FSSAI License',
    processIntro: 'FSSAI applications are filed online on the FoSCoS portal (foscos.fssai.gov.in).',
    processSteps: [
      { title: 'Determine License Type', desc: 'Identify whether you need Basic Registration, State License, or Central License based on turnover and type of food business.', icon: UserCheck },
      { title: 'Register on FoSCoS Portal', desc: 'Create account on foscos.fssai.gov.in. Fill the appropriate form (Form A or Form B).', icon: FileSearch },
      { title: 'Upload Documents', desc: 'Upload identity proof, address proof, food safety plan, and list of food products.', icon: Globe },
      { title: 'Inspection (if required)', desc: 'FSSAI food inspector may visit your premises for inspection before issuing State/Central license.', icon: CheckCircle2 },
      { title: 'FSSAI Certificate Issued', desc: 'Upon approval, download the FSSAI Registration/License Certificate with 14-digit number.', icon: FileCheck },
    ],
    processOutro: 'Basic Registration: 7–14 days. State License: 20–30 days. Central License: 30–60 days, subject to inspection.',
    documents: [
      { category: 'Identity Proof', list: ['PAN Card of proprietor/partner/director', 'Aadhaar Card', 'Passport size photograph'] },
      { category: 'Business Premises', list: ['Address proof (electricity bill / rental agreement)', 'List of equipment', 'Layout plan of premises'] },
      { category: 'Food Business', list: ['List of food categories', 'Food safety management system plan', 'Water analysis report (for manufacturing)'] },
    ],
    compliance: [
      { title: 'Annual License Renewal', desc: 'Renew FSSAI license before expiry (1–5 years). Late renewal attracts penalty of ₹100/day.' },
      { title: 'Food Safety Management', desc: 'Maintain records of raw materials, production, testing, and distribution as per FSSAI norms.' },
      { title: 'Display License', desc: 'FSSAI license number must be prominently displayed at the business premises and printed on all food labels.' },
      { title: 'Product Testing', desc: 'Food products must meet FSSAI safety standards. Random testing may be conducted by food inspectors.' },
    ],
    faqs: [
      { q: 'Is FSSAI license mandatory for home-based food businesses?', a: 'Yes. Even home bakers, cloud kitchens, and tiffin services must obtain Basic FSSAI Registration if they sell food to others.' },
      { q: 'What is the penalty for operating without FSSAI license?', a: 'Operating without an FSSAI license attracts imprisonment up to 6 months and/or fine up to ₹5 Lakhs.' },
      { q: 'Can I sell food on Swiggy/Zomato without FSSAI?', a: 'No. Swiggy, Zomato, and all food aggregators require FSSAI registration before listing any food business on their platforms.' },
      { q: 'Does FSSAI cover packaged food labels?', a: 'Yes. All packaged food products must carry the 14-digit FSSAI license number on their labels. Non-compliance attracts significant penalties.' },
      { q: 'How long is an FSSAI license valid?', a: 'FSSAI licenses can be obtained for 1 to 5 years at a time. The applicant can choose the duration during application.' },
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
