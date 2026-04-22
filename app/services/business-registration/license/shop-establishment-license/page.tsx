'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Building2, ShieldCheck, Users, Zap, UserCheck, FileSearch, CheckCircle2, FileCheck, Globe } from 'lucide-react';

export default function ShopEstablishmentLicensePage() {
  const data = {
    title: 'Shop and Establishment License',
    description: 'State-level license under the Shops and Establishments Act — mandatory for all commercial establishments including shops, offices, restaurants, and hotels.',
    heroBadges: ['State Labour Dept', 'State-Level Act', '3–7 Days'],
    introTitle: 'What is Shop and Establishment License?',
    introContent: (
      <p>The Shop and Establishment License (S&E Registration) is granted under the respective state's Shops and Establishments Act to regulate working conditions, employment terms, and hours of work in commercial establishments. Every shop, office, hotel, restaurant, eating house, entertainment venue, or any other commercial establishment must register under this Act. The certificate serves as the primary proof of business establishment and is required for GST registration, bank account opening, and other regulatory compliances. Unlike the trade license (municipal), the S&E registration is issued by the State Labour Department.</p>
    ),
    detailsTitle: 'Why Shop & Establishment Registration is Critical',
    details: [
      { title: 'Proof of Business', desc: 'Primary document accepted as business address proof for GST, bank accounts, and other registrations.', icon: Building2 },
      { title: 'Employee Protection', desc: 'Mandates leave entitlements, working hours, overtime pay, and employment terms for employees.', icon: Users },
      { title: 'Legal Compliance', desc: 'Mandatory for all commercial establishments — attracts fines for non-registration.', icon: ShieldCheck },
      { title: 'Quick Process', desc: 'Obtained in 3–7 days in most states. Many states have fully online portals.', icon: Zap },
    ],
    requirements: [
      'Name and address of the establishment', 'Name of employer with identity proof',
      'Nature of business / commercial activity', 'Number of employees (if any)',
      'Proof of business premises (rental / owned)', 'PAN Card of employer',
      'Email ID and mobile number', 'State-specific registration fee',
    ],
    processTitle: 'How to Get Shop & Establishment Registration',
    processIntro: 'Registration is done at the state Labour Department office or online through the state\'s labour portal.',
    processSteps: [
      { title: 'Visit State Labour Portal', desc: 'Most states like Maharashtra, Delhi, Karnataka, and UP have online portals for S&E registration.', icon: UserCheck },
      { title: 'Fill Registration Form', desc: 'Provide establishment details, employer information, employee count, and nature of business.', icon: FileSearch },
      { title: 'Upload Documents', desc: 'Upload PAN card, address proof, premises proof, and rental agreement.', icon: Globe },
      { title: 'Pay Registration Fee', desc: 'Pay the state-specific fee (typically ₹200–₹1,000 based on employee count).', icon: CheckCircle2 },
      { title: 'Registration Certificate', desc: 'Certificate issued within 1–7 working days (many states provide instant digital certificates).', icon: FileCheck },
    ],
    processOutro: 'S&E registration is the fastest business registration in India — obtainable in 1–7 days through online portals in most states.',
    documents: [
      { category: 'Employer Documents', list: ['PAN Card', 'Aadhaar Card', 'Passport size photograph', 'Address proof'] },
      { category: 'Business Premises', list: ['Rental agreement or ownership deed', 'Latest utility bill', 'NOC from landlord'] },
      { category: 'Business Details', list: ['Nature of trade/service', 'Number of employees', 'Business name and signboard'] },
    ],
    compliance: [
      { title: 'Annual Renewal', desc: 'S&E registration must be renewed annually in most states. Some states like Karnataka issue lifetime registration.' },
      { title: 'Working Hours', desc: 'Shops cannot operate beyond the hours specified under the state S&E Act (typically 9–10 hours/day).' },
      { title: 'Employee Leaves', desc: 'Employees are entitled to annual leave, sick leave, and casual leave as per the state S&E Act.' },
      { title: 'Wage Payment', desc: 'Wages must be paid within 7 days of wage period end for establishments employing < 1,000 workers.' },
    ],
    faqs: [
      { q: 'Is S&E registration required for startups working from home?', a: 'Yes. Even home-based businesses or startups operating from a home address need S&E registration in most states.' },
      { q: 'What is the difference between Trade License and S&E Registration?', a: 'Trade License is issued by the municipal authority for operating a trade from a specific premises. S&E Registration is issued by the State Labour Department and regulates employment conditions in commercial establishments.' },
      { q: 'Is S&E registration same across all states?', a: 'No. Each state has its own Shops and Establishments Act with different fees, renewal periods, working hour limits, and employment conditions.' },
      { q: 'Do I need S&E registration if I have only 1 employee?', a: 'Yes. Most state S&E Acts apply from the moment you operate a commercial establishment — with or without employees.' },
      { q: 'Can I use S&E certificate for GST registration?', a: 'Yes. The S&E certificate is accepted as proof of business address during GST registration in most states.' },
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
