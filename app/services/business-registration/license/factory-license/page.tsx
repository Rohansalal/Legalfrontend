'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Building2, ShieldCheck, Users, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function FactoryLicensePage() {
  const data = {
    title: 'Factory License',
    description: 'Mandatory license for all manufacturing units under the Factories Act, 1948. Required when 10+ workers are employed with power, or 20+ workers without power.',
    heroBadges: ['Factories Act 1948', 'State Labour Dept', '15–30 Days'],
    introTitle: 'What is a Factory License?',
    introContent: (
      <p>Under the Factories Act, 1948, any manufacturing premises employing 10 or more workers with the use of power (or 20+ workers without power) must obtain a Factory License from the Chief Inspector of Factories (State Labour Department). The Act aims to ensure worker safety, health, and welfare. The license must be obtained before commencing manufacturing operations and must be renewed annually. The occupier of the factory is personally responsible for compliance with all provisions of the Act.</p>
    ),
    detailsTitle: 'Key Requirements Under Factories Act',
    details: [
      { title: 'Mandatory Safety Compliance', desc: 'Factories must comply with safety provisions — machinery guards, fire prevention, ventilation, and emergency exits.', icon: ShieldCheck },
      { title: 'Worker Welfare', desc: 'Provide drinking water, latrines, canteen (100+ workers), crèche (30+ female workers), and rest rooms.', icon: Users },
      { title: 'Hazardous Processes', desc: 'Special provisions for hazardous manufacturing — health surveys, protective equipment, and medical facilities.', icon: Globe },
      { title: 'Working Hours Compliance', desc: 'Workers cannot work more than 48 hours/week, 9 hours/day. Overtime at double rate mandatory.', icon: Building2 },
    ],
    requirements: [
      'Factory premises ownership or rental agreement', 'Site plan and factory layout',
      'List of manufacturing processes and machinery', 'Number of workers and shift details',
      'PAN Card of occupier (owner) and manager', 'Certificate from competent authority on structural stability',
      'Fire NOC from Fire Department', 'Environmental clearance (if applicable)',
    ],
    processTitle: 'How to Obtain a Factory License',
    processIntro: 'Factory license application is filed with the Chief Inspector of Factories in the respective state.',
    processSteps: [
      { title: 'Prepare Factory Plan', desc: 'Get factory site plan and layout prepared by a licensed architect/engineer showing all departments, machinery, and safety provisions.', icon: UserCheck },
      { title: 'Submit Plan for Approval', desc: 'Submit factory plan to Chief Inspector for approval under Section 6 of the Factories Act before construction/modification.', icon: FileSearch },
      { title: 'Apply for License (Form 2)', desc: 'File Form 2 application for factory license with all required documents after plan approval.', icon: Globe },
      { title: 'Factory Inspection', desc: 'Inspector of Factories visits for structural, machinery, fire safety, and welfare facility inspection.', icon: CheckCircle2 },
      { title: 'Factory License Issued', desc: 'Chief Inspector issues the Factory License (Form 4) specifying category and maximum workers allowed.', icon: FileCheck },
    ],
    processOutro: 'Factory license takes 15–30 days from plan approval. Larger or hazardous factories take longer due to additional inspections.',
    documents: [
      { category: 'Occupier Documents', list: ['PAN Card', 'Aadhaar Card', 'Address proof', 'Identity proof'] },
      { category: 'Factory Documents', list: ['Site plan and factory layout', 'Structural stability certificate', 'List of machinery with HP rating', 'Fire NOC'] },
      { category: 'Workers & Processes', list: ['Number of workers per shift', 'Nature of manufacturing process', 'Hazardous materials list (if applicable)'] },
    ],
    compliance: [
      { title: 'Annual License Renewal', desc: 'Factory license must be renewed annually by 31st December. Late renewal attracts penalties.' },
      { title: 'Safety Inspections', desc: 'Factory Inspector may conduct surprise inspections. Non-compliance attracts fines and factory closure.' },
      { title: 'Statutory Registers', desc: 'Maintain registers of workers, attendance, wages, overtime, accidents, and dangerous occurrences.' },
      { title: 'Accident Reporting', desc: 'Any accident causing death or serious injury must be reported to the Inspector within 12 hours.' },
    ],
    faqs: [
      { q: 'Who is the occupier of a factory?', a: 'The person who has ultimate control over the factory affairs. For a company, it is a director; for a partnership, a designated partner.' },
      { q: 'Is factory license required for small workshops?', a: 'If employing less than 10 workers with power or less than 20 without power, a factory license is not required. Such units may still need a trade license or MSME registration.' },
      { q: 'What happens if I operate without a factory license?', a: 'Operating without a license is a criminal offense under Section 92 of the Factories Act — imprisonment up to 2 years and/or fine up to ₹2 Lakhs.' },
      { q: 'Do I need a separate license for each manufacturing unit?', a: 'Yes. Each factory premises requires a separate factory license from the Chief Inspector of Factories of that state.' },
      { q: 'What is the maximum overtime allowed?', a: 'Workers can be required to work overtime, but cannot exceed 60 hours per week including overtime. Overtime is paid at double the regular wage.' },
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
