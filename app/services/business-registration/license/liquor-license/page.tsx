'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Building2, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function LiquorLicensePage() {
  const data = {
    title: 'Liquor License',
    description: 'State-specific liquor license for retail sale, restaurants/bars, or wholesale distribution of alcoholic beverages. Navigate the complex state excise licensing process with expert help.',
    heroBadges: ['State Excise Department', 'State-Specific Rules', '30–60 Days'],
    introTitle: 'What is a Liquor License?',
    introContent: (
      <p>Liquor or alcohol licenses in India are regulated by each state's Excise Department under the respective State Excise Acts. There is no central licensing authority — rules, fees, and procedures vary significantly across states. Liquor licenses are categorized by type: off-premise retail (liquor vend), on-premise (bar/restaurant), hotel license, wine shop, wholesale, club/canteen, and manufacturing (brewery/distillery). Both the premises and the licensee must meet specific criteria set by the state Excise Commissioner.</p>
    ),
    detailsTitle: 'Types of Liquor Licenses',
    details: [
      { title: 'Retail Vend (FL-2)', desc: 'For liquor shops selling bottles for off-premise consumption. Most common type.', icon: ShieldCheck },
      { title: 'Bar / Restaurant License', desc: 'For restaurants, bars, and pubs selling alcoholic beverages for on-premise consumption.', icon: Building2 },
      { title: 'Hotel Bar License', desc: 'For star hotels and resorts. Typically allows 24-hour service in certain states.', icon: Globe },
      { title: 'Wholesale License', desc: 'For wholesale distributors supplying to retail shops, hotels, and restaurants.', icon: Award },
    ],
    requirements: [
      'State-specific application form from Excise Department', 'Age: 21+ years for individual licensee',
      'No prior criminal record (Police clearance certificate)', 'Premises meets size and zoning requirements',
      'Distance from schools, places of worship, hospitals (state-specific)', 'NOC from local authority (Municipality/Panchayat)',
      'Financial capacity proof (bank statement)', 'PAN and address proof',
    ],
    processTitle: 'How to Get a Liquor License',
    processIntro: 'The process varies by state. Generally involves application to the District Collector or State Excise Commissioner.',
    processSteps: [
      { title: 'Check State-Specific Rules', desc: 'Liquor laws are entirely state-specific. Verify current regulations, quota availability, and license types in your state.', icon: UserCheck },
      { title: 'Prepare Premises', desc: 'Ensure premises meets minimum area, ventilation, distance from sensitive locations, and safety requirements.', icon: FileSearch },
      { title: 'Apply to District Excise Office', desc: 'Submit application with required documents to the District Excise Office or apply online on state excise portal.', icon: Globe },
      { title: 'Police Verification', desc: 'Police conducts background check on applicant and premises. NOC must be obtained.', icon: CheckCircle2 },
      { title: 'Pay Excise Duty', desc: 'Pay applicable license fee, security deposit, and excise duty as specified by the state.', icon: Building2 },
      { title: 'License Granted', desc: 'Excise Commissioner grants the license. Display prominently at premises.', icon: FileCheck },
    ],
    processOutro: 'Liquor license timelines vary heavily by state (30–90 days). States with auction-based licensing (like Tamil Nadu) require bidding at auctions.',
    documents: [
      { category: 'Applicant Documents', list: ['PAN Card', 'Aadhaar Card', 'Police clearance certificate', 'Age proof (21+ years)'] },
      { category: 'Premises Documents', list: ['Rental agreement or ownership deed', 'Municipal license / trade license', 'NOC from local body', 'Premises layout plan'] },
      { category: 'Financial Documents', list: ['Bank statements (last 6 months)', 'Income tax returns', 'Security deposit proof'] },
    ],
    compliance: [
      { title: 'Annual License Renewal', desc: 'Liquor licenses typically need annual renewal with payment of fresh excise duty.' },
      { title: 'Operating Hours', desc: 'Strictly follow state-specified operating hours. Serving outside hours is a serious violation.' },
      { title: 'Purchase Only from Licensed Wholesalers', desc: 'Purchase alcohol only from state-authorized wholesalers/depots. Maintain purchase records.' },
      { title: 'No Sales to Minors', desc: 'Strictly prohibited to sell alcohol to persons under 21 years. Violators face license cancellation and prosecution.' },
    ],
    faqs: [
      { q: 'Is liquor licensing the same across all states?', a: 'No. India has no uniform liquor policy. Each state has its own Excise Act, fee structure, quota system, and zoning rules. Gujarat and Bihar are dry states where liquor is prohibited.' },
      { q: 'Can I serve liquor at a wedding/private event without a license?', a: 'Most states require a Temporary Liquor Permit (TLP) or event license for serving alcohol at private events. Operating without this is an offense.' },
      { q: 'What is the minimum age to apply for a liquor license?', a: 'The applicant must be at least 21 years of age in most states.' },
      { q: 'Can I sell imported liquor with a domestic liquor license?', a: 'No. A separate FL-3 or Import Permit is typically required for selling imported foreign liquor (IMFL) in most states.' },
      { q: 'What happens if I serve alcohol after hours?', a: 'Serving alcohol outside permitted hours is a serious violation — leads to immediate license suspension, FIR, and possible cancellation.' },
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
