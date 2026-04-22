'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Building2, ShieldCheck, TrendingUp, Globe, UserCheck, FileSearch, CheckCircle2, FileCheck } from 'lucide-react';

export default function SmallFinanceBankLicensePage() {
  const data = {
    title: 'Small Finance Bank License',
    description: 'RBI license to establish a Small Finance Bank (SFB) for providing basic financial services including deposits and credit to underserved sections of the population.',
    heroBadges: ['RBI Regulated', 'Universal Banking Services', '180–365 Days'],
    introTitle: 'What is a Small Finance Bank?',
    introContent: (
      <p>A Small Finance Bank (SFB) is a niche bank licensed by the Reserve Bank of India (RBI) under the Banking Regulation Act, 1949. SFBs are designed to serve small business units, marginal farmers, micro-enterprises, and the unorganized sector. Unlike NBFCs, SFBs can accept deposits from the public, provide credit, and offer payment services. They are subject to the same prudential norms as commercial banks but with a focus on financial inclusion and priority sector lending (minimum 75% of loans must be in priority sectors).</p>
    ),
    detailsTitle: 'Key Features of Small Finance Banks',
    details: [
      { title: 'Accept Deposits', desc: 'Unlike NBFCs, SFBs can accept savings, fixed, and recurring deposits from the public.', icon: Building2 },
      { title: 'Priority Sector Lending', desc: '75% of ANBC must go to priority sectors — agriculture, micro, small enterprises, and weaker sections.', icon: TrendingUp },
      { title: 'Full Banking Services', desc: 'Can provide remittances, payment services, forex, mutual fund distribution, and insurance distribution.', icon: Globe },
      { title: 'RBI Oversight', desc: 'Fully supervised by RBI — must meet CRR, SLR, CRAR, and other prudential requirements.', icon: ShieldCheck },
    ],
    requirements: [
      'Minimum paid-up equity capital of ₹200 Crores', 'Promoters must be Indian residents with 10+ years of experience in banking/finance/microfinance',
      'Existing MFI / NBFC with at least 5 years track record preferred', 'Net worth ≥ ₹200 Crores',
      'Fit and proper criteria for promoters and directors', 'Business plan for 5 years with financial projections',
      'Capital adequacy plan', 'IT infrastructure and cybersecurity plan',
    ],
    processTitle: 'How to Apply for Small Finance Bank License',
    processIntro: 'SFB license applications are submitted to RBI when RBI opens the application window (periodic, not continuous).',
    processSteps: [
      { title: 'Wait for RBI Application Window', desc: 'RBI opens the SFB license application window periodically. Monitor RBI press releases for announcements.', icon: UserCheck },
      { title: 'Prepare Detailed Application', desc: 'Submit comprehensive application with promoter background, business plan, financial projections, and governance structure.', icon: FileSearch },
      { title: 'RBI Background Verification', desc: 'RBI conducts thorough due diligence on promoters, past track record, and financial soundness.', icon: Globe },
      { title: 'High Level Advisory Committee Review', desc: 'RBI\'s HLAC reviews shortlisted applications and recommends candidates for in-principle approval.', icon: CheckCircle2 },
      { title: 'In-Principle Approval', desc: 'RBI issues in-principle approval valid for 18 months to set up the bank.', icon: Building2 },
      { title: 'Final License', desc: 'After meeting all conditions (capital, premises, staff, IT), RBI grants final banking license and commencement approval.', icon: FileCheck },
    ],
    processOutro: 'SFB licensing is an extremely complex, competitive process taking 1–3 years. Only entities with strong microfinance/NBFC track records are typically approved.',
    documents: [
      { category: 'Promoter Documents', list: ['10-year financial track record', 'Banker\'s reports', 'Background verification reports', 'Net worth certificates'] },
      { category: 'Business Plan', list: ['5-year financial projections', 'Priority sector lending plan', 'Geographic coverage plan', 'Technology infrastructure blueprint'] },
      { category: 'Governance Documents', list: ['Proposed Board composition', 'Fit and proper declarations', 'Shareholding pattern', 'Conflict of interest disclosures'] },
    ],
    compliance: [
      { title: 'Priority Sector Lending', desc: 'Minimum 75% of ANBC must be deployed in priority sectors — agriculture, micro enterprises, and weaker sections.' },
      { title: 'Capital Adequacy', desc: 'Maintain minimum Capital to Risk-weighted Assets Ratio (CRAR) of 15% at all times.' },
      { title: 'CRR and SLR', desc: 'Maintain Cash Reserve Ratio (CRR) and Statutory Liquidity Ratio (SLR) as prescribed by RBI.' },
      { title: 'Annual Inspection', desc: 'RBI conducts annual on-site inspection of all SFBs. CAMELS ratings are assigned.' },
    ],
    faqs: [
      { q: 'What is the difference between SFB and NBFC?', a: 'SFBs can accept public deposits and provide banking services like current/savings accounts. NBFCs cannot accept demand deposits. SFBs are regulated under the Banking Regulation Act; NBFCs under the RBI Act.' },
      { q: 'Who can apply for an SFB license?', a: 'Resident Indian entities — primarily existing MFIs, NBFCs, LABs, or NBFCs-MFI with 5+ years of experience and strong financial track record.' },
      { q: 'What is the minimum capital for SFB?', a: 'Minimum paid-up equity capital is ₹200 Crores for new SFBs. Existing entities applying for conversion need to meet this within the prescribed timeline.' },
      { q: 'Can an SFB convert to a Universal Bank?', a: 'Yes. After completing 5 years of operations, an SFB can apply for conversion to a Universal Commercial Bank if it meets the eligibility criteria.' },
      { q: 'Are SFB deposits covered by DICGC insurance?', a: 'Yes. Deposits in SFBs are covered by DICGC (Deposit Insurance and Credit Guarantee Corporation) up to ₹5 Lakhs per depositor, same as other banks.' },
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
