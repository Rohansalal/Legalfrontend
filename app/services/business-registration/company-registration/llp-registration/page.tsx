'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { Users, ShieldCheck, Zap, Globe, UserCheck, FileSearch, PenTool, CheckCircle2, FileCheck, Building2 } from 'lucide-react';

export default function LLPRegistrationPage() {
  const data = {
    title: 'Limited Liability Partnership (LLP) Registration',
    description: 'The ideal structure for professionals and service businesses. Enjoy partnership flexibility with the protection of limited liability and minimal compliance requirements.',
    heroBadges: ['Low Compliance', 'No Minimum Capital', '10–15 Days Process'],
    introTitle: 'What is a Limited Liability Partnership (LLP)?',
    introContent: (
      <p>An LLP is a hybrid business structure under the Limited Liability Partnership Act, 2008. It combines the flexibility of a partnership with the limited liability protection of a company. Each partner's liability is limited to their agreed contribution, and partners are not personally liable for other partners' wrongful acts. Widely preferred by CA firms, law firms, architects, and consultants.</p>
    ),
    detailsTitle: 'Key Benefits of an LLP',
    details: [
      { title: 'Limited Liability', desc: 'Partners are only liable for their own contribution — personal assets are protected.', icon: ShieldCheck },
      { title: 'Flexible Management', desc: 'Partners can manage the LLP directly without the rigidity of a company board structure.', icon: Users },
      { title: 'Low Compliance', desc: 'No mandatory board meetings, no requirement for statutory audit if turnover < ₹40L.', icon: Zap },
      { title: 'Perpetual Existence', desc: 'LLP continues to exist even if partners change, retire, or are replaced.', icon: Globe },
    ],
    requirements: [
      'Minimum 2 Designated Partners', 'At least 1 Indian Resident Designated Partner',
      'DPIN (Designated Partner Identification Number)', 'Digital Signature Certificate (DSC)',
      'Unique LLP name (MCA approval)', 'Registered Office Address in India',
      'LLP Agreement executed on stamp paper', 'No minimum capital contribution required',
    ],
    processTitle: 'How to Register an LLP in India',
    processIntro: 'LLP registration is handled by the MCA through the LLP-RUN (Reserve Unique Name) and FiLLiP (Form for Incorporation of LLP) forms.',
    processSteps: [
      { title: 'Obtain DSC and DPIN', desc: 'All designated partners need a DSC. Apply for DPIN through DIR-3 or during LLP incorporation.', icon: UserCheck },
      { title: 'LLP Name Reservation', desc: 'Reserve a unique name using LLP-RUN (Reserve Unique Name) form on MCA portal.', icon: FileSearch },
      { title: 'File FiLLiP Form', desc: 'Submit the Form for Incorporation of LLP (FiLLiP) with partner details, capital, and registered office.', icon: PenTool },
      { title: 'Execute LLP Agreement', desc: 'Draft and execute the LLP Agreement on stamp paper within 30 days of incorporation.', icon: Globe },
      { title: 'File LLP Agreement (Form 3)', desc: 'Submit the executed LLP Agreement on MCA portal within 30 days of incorporation.', icon: CheckCircle2 },
      { title: 'Certificate of Incorporation', desc: 'RoC issues the Certificate of Incorporation with LLPIN (LLP Identification Number).', icon: FileCheck },
    ],
    processOutro: 'LLP registration typically takes 10–15 working days. The LLP Agreement must be filed within 30 days of incorporation.',
    documents: [
      { category: 'Partner Identity', list: ['PAN Card of all Partners', 'Aadhaar Card', 'Passport size photographs', 'Voter ID / Passport / DL'] },
      { category: 'Address Proof', list: ['Latest bank statement', 'Electricity / Gas bill', 'Mobile / Telephone bill'] },
      { category: 'Registered Office', list: ['Rental Agreement (if rented)', 'Property deed (if owned)', "NOC from landlord", 'Latest utility bill'] },
    ],
    compliance: [
      { title: 'Annual Return (Form 11)', desc: 'File LLP Annual Return with partner details within 60 days of financial year end.' },
      { title: 'Statement of Accounts (Form 8)', desc: 'File financial statements with MCA within 30 days of 6 months from financial year end.' },
      { title: 'Income Tax Return', desc: 'LLPs must file ITR-5 annually. Tax rate is 30% on profits.' },
      { title: 'Statutory Audit', desc: 'Mandatory if turnover exceeds ₹40 Lakhs or contribution exceeds ₹25 Lakhs.' },
    ],
    faqs: [
      { q: 'What is the difference between LLP and Partnership Firm?', a: 'In a Partnership Firm, partners have unlimited personal liability. In an LLP, each partner is liable only for their own acts and their contribution — personal assets are protected.' },
      { q: 'Can an LLP be converted to a company?', a: 'Yes. An LLP can be converted to a Private Limited Company by following the prescribed procedure under the Companies Act, 2013.' },
      { q: 'Is audit mandatory for LLP?', a: 'Audit is not mandatory for LLPs with turnover below ₹40 Lakhs and contribution below ₹25 Lakhs.' },
      { q: 'Can a foreign national be a partner in an LLP?', a: 'Yes, but at least one designated partner must be an Indian resident.' },
      { q: 'What is DPIN?', a: 'DPIN (Designated Partner Identification Number) is a unique identification number required by each designated partner of an LLP, similar to DIN for company directors.' },
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
