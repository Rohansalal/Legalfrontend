'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { 
  Building2, 
  Rocket, 
  Briefcase, 
  UserCheck, 
  FileSearch, 
  PenTool, 
  Globe, 
  ShieldCheck,
  Zap,
  CheckCircle2,
  FileCheck,
  Calculator,
  Building
} from 'lucide-react';

export default function PrivateLimitedCompanyPage() {
  const pvtLtdData = {
    title: "Private Limited Company Registration",
    description: "Establish your business with India's most prestigious and popular legal structure. Ideal for startups looking to raise funding and protect their personal assets with limited liability.",
    heroBadges: ["100% Digital Process", "Govt. Certified Experts", "7-10 Days Turnaround"],
    
    introTitle: "What is a Private Limited Company (Pvt Ltd)?",
    introContent: (
      <>
        <p>
          A private limited company (Pvt Ltd) is a separate legal entity registered under the Companies Act, 2013, offering limited liability protection to its members. It restricts share transfers, requires a registered office address, and is ideal for startups and SMEs seeking credibility, funding, and control.
        </p>
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-8">
          <h4 className="text-slate-900 font-black mb-4 uppercase tracking-wider text-xs">Companies Act, 2013</h4>
          <p className="text-sm italic text-slate-500 mb-4">
            As per Section 2(68) of the Companies Act, 2013, a private limited company means a company having a minimum paid-up share capital as may be prescribed, and which by its articles of association:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm font-bold text-slate-700">
              <span className="text-primary">(a)</span> Restricts the right to transfer its shares;
            </li>
            <li className="flex gap-3 text-sm font-bold text-slate-700">
              <span className="text-primary">(b)</span> Limits the number of its members to 200 (excluding present and former employees); and
            </li>
            <li className="flex gap-3 text-sm font-bold text-slate-700">
              <span className="text-primary">(c)</span> Prohibits any invitation to the public to subscribe for any securities of the company.
            </li>
          </ul>
        </div>
      </>
    ),

    detailsTitle: "Key Benefits of Private Limited Company",
    details: [
      { 
        title: "Limited Liability", 
        desc: "Your personal assets are safe from business debts and liabilities.", 
        icon: ShieldCheck 
      },
      { 
        title: "Separate Entity", 
        desc: "The company exists as a separate legal person from its owners.", 
        icon: Building2 
      },
      { 
        title: "Raise Funding", 
        desc: "Preferred structure for Venture Capitalists and Angel Investors.", 
        icon: Rocket 
      },
      { 
        title: "Perpetual Existence", 
        desc: "The company continues to exist even if directors or owners change.", 
        icon: Zap 
      }
    ],

    requirements: [
      "Minimum 2 Directors",
      "Minimum 2 Shareholders",
      "One Director must be Indian Resident",
      "Unique & Available Company Name",
      "Registered Office Address Proof",
      "Digital Signature Certificate (DSC)",
      "Director Identification Number (DIN)",
      "Minimum Capital Contribution (No Limit)"
    ],

    processTitle: "How to Register a Private Limited Company in India?",
    processIntro: "Here’s how to register a private limited company under the Companies Act, 2013, regulated by the Ministry of Corporate Affairs (MCA):",
    processSteps: [
      { 
        title: "Obtain Digital Signature Certificate (DSC)", 
        desc: "All proposed directors must obtain a valid Digital Signature Certificate (DSC) for signing electronic documents.", 
        icon: UserCheck 
      },
      { 
        title: "Apply for Director Identification Number (DIN)", 
        desc: "Each director needs a Director Identification Number (DIN) during the private limited company registration process.", 
        icon: ShieldCheck 
      },
      { 
        title: "Name Approval through SPICe+ Part A", 
        desc: "Choose a unique company name and submit it via SPICe+ Part A for approval by the corporate affairs MCA.", 
        icon: Globe 
      },
      { 
        title: "Prepare Incorporation Documents", 
        desc: "Gather identity proof, address proof, and registered office address proof (like a rent agreement or utility bill).", 
        icon: FileSearch 
      },
      { 
        title: "Filing SPICe+ Part B, AGILE-PRO, eMOA, eAOA", 
        desc: "Complete company incorporation by filing SPICe+ Part B and linked forms with details like authorized capital, company’s objectives, and internal rules.", 
        icon: PenTool 
      },
      { 
        title: "PAN, TAN & GST Application", 
        desc: "Included in the online company registration, obtain PAN, TAN, and optionally apply for GST registration.", 
        icon: Zap 
      },
      { 
        title: "Verification by RoC and Certificate of Incorporation", 
        desc: "Upon approval, the Registrar of Companies (RoC) issues the Certificate of Incorporation, assigning a Corporate Identification Number (CIN).", 
        icon: CheckCircle2 
      },
      { 
        title: "Post Registration Compliance", 
        desc: "Open a bank account, issue shares, maintain financial statements, and ensure ongoing legal compliance.", 
        icon: FileCheck 
      }
    ],
    processOutro: "This structured pvt ltd company registration ensures limited liability, separate legal entity status, and ease in securing funding from financial institutions. Please note: The registration process for a Private Limited Company typically takes 7 to 10 days.",

    documents: [
      {
        category: "Identity Proof",
        list: ["PAN Card of all Directors", "Aadhaar Card of all Directors", "Passport size Photographs", "Voter ID/DL/Passport"]
      },
      {
        category: "Address Proof",
        list: ["Latest Bank Statement", "Electricity/Gas Bill", "Mobile/Telephone Bill", "NOC from Owner"]
      },
      {
        category: "Registered Office",
        list: ["Rental Agreement (if rented)", "Property Deed (if owned)", "Latest Utility Bill", "Owner's No Objection Certificate"]
      }
    ],

    compliance: [
      { 
        title: "Statutory Auditor", 
        desc: "Appointment of an auditor within 30 days of incorporation is mandatory." 
      },
      { 
        title: "Board Meetings", 
        desc: "First board meeting must be held within 30 days of COI issuance." 
      },
      { 
        title: "Income Tax", 
        desc: "Filing of annual income tax returns and maintaining books of accounts." 
      },
      { 
        title: "MCA Filings", 
        desc: "Submission of AOC-4 and MGT-7 forms annually to the ROC." 
      }
    ],

    faqs: [
      { 
        q: "What is a Private Limited Company?", 
        a: "A Private Limited Company is a separate legal entity owned by shareholders and managed by directors. It offers limited liability protection, meaning personal assets of owners are safe from business debts." 
      },
      { 
        q: "How many directors are needed?", 
        a: "A minimum of two directors are required. At least one director must be a resident of India." 
      },
      { 
        q: "Is physical presence required for registration?", 
        a: "No, the entire process is 100% digital. You can complete the registration from the comfort of your home or office." 
      },
      { 
        q: "How long does it take to register?", 
        a: "On average, it takes 7 to 10 working days, depending on the approval speed of the Ministry of Corporate Affairs (MCA)." 
      },
      { 
        q: "Can I register from any city?", 
        a: "Yes, our platform supports registration across all states and cities in India through our online portal." 
      }
    ]
  };

  return (
    <main>
      <Navbar />
      <ServiceTemplate {...pvtLtdData} />
      <CTASection />
      <Footer />
    </main>
  );
}
