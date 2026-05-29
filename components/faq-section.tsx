'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, FileCheck, FileText, Landmark, Scale, Globe, HelpCircle, Headphones, ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const faqCategories = [
  {
    id: 'business-registration',
    label: 'Business Registration',
    icon: Building2,
    faqs: [
      {
        question: 'Which business structure should I choose — Private Limited, LLP, OPC or Proprietorship?',
        answer:
          'It depends on your goals. A Private Limited Company suits startups raising funds, an LLP works well for professional firms, an OPC is ideal for solo founders who want limited liability, and a proprietorship is simplest for small local businesses. We assess your plans and recommend the right fit.',
      },
      {
        question: 'How long does company registration take in India?',
        answer:
          'Most Private Limited Companies and LLPs are incorporated within 7–12 working days once all documents and digital signatures are ready. Timelines can vary slightly based on name approval and government processing.',
      },
      {
        question: 'What documents are required to register a company?',
        answer:
          'Typically PAN and Aadhaar of directors, passport-size photos, address proof (bank statement/utility bill), and proof of the registered office (rent agreement + NOC or ownership proof). Foreign nationals need a notarised/apostilled passport.',
      },
      {
        question: 'Do I need a physical office address to register?',
        answer:
          'Yes, a valid registered office address is required for incorporation. It can be a commercial or residential address with the owner’s NOC. We also assist with virtual office solutions where permitted.',
      },
      {
        question: 'Is GST registration mandatory for my business?',
        answer:
          'GST is mandatory once your turnover crosses the threshold (₹40 lakh for goods / ₹20 lakh for services, lower in some states), or earlier if you sell inter-state or online. We help you register and stay compliant from day one.',
      },
      {
        question: 'Can a foreign national or NRI register a company in India?',
        answer:
          'Yes. Foreign nationals and NRIs can be directors and shareholders, subject to FDI rules. At least one director must be a resident of India. We handle the additional documentation and compliance involved.',
      },
    ],
  },
  {
    id: 'compliances',
    label: 'Compliances',
    icon: FileCheck,
    faqs: [
      {
        question: 'What annual compliances must a Private Limited Company file?',
        answer:
          'A Pvt Ltd must file its annual return (MGT-7), financial statements (AOC-4), hold board and AGM meetings, file income tax returns, complete director KYC, and maintain statutory registers — regardless of turnover or activity.',
      },
      {
        question: 'What happens if I miss an ROC filing deadline?',
        answer:
          'Late filings attract a penalty of ₹100 per day per form with no upper cap, and continued default can lead to the company being struck off and directors disqualified. We track your due dates so nothing lapses.',
      },
      {
        question: 'How do I change my company’s name or registered office?',
        answer:
          'Both require board and shareholder approval plus filing the relevant forms with the ROC (and, for some changes, the Regional Director). We manage the resolutions, forms and approvals end to end.',
      },
      {
        question: 'What is DIR-3 KYC and who needs to file it?',
        answer:
          'Every person holding a Director Identification Number (DIN) must file DIR-3 KYC annually, even if they are not currently a director. Missing it deactivates the DIN and attracts a ₹5,000 penalty to reactivate.',
      },
      {
        question: 'How do I close or strike off a company that is inactive?',
        answer:
          'A dormant company can be closed by filing for strike-off (Form STK-2) after clearing pending compliances, or wound up voluntarily. We advise on the right route and handle the filings.',
      },
      {
        question: 'Do LLPs have fewer compliance requirements than companies?',
        answer:
          'Yes, LLPs have lighter compliance — mainly the annual return (Form 11), Statement of Accounts (Form 8) and income tax return. Audits are only required above certain turnover/contribution thresholds.',
      },
    ],
  },
  {
    id: 'documentation',
    label: 'Documentation',
    icon: FileText,
    faqs: [
      {
        question: 'What legal documents does my business need from day one?',
        answer:
          'Common essentials include founders’/shareholders’ agreements, employment and offer letters, NDAs, vendor and service contracts, and a privacy policy/terms for online businesses. We tailor a document stack to your model.',
      },
      {
        question: 'Are the documents you draft legally valid and enforceable?',
        answer:
          'Yes. Our documents are drafted by qualified legal professionals, executed on appropriate stamp paper where required, and notarised or registered as the law demands — making them legally valid and enforceable.',
      },
      {
        question: 'What’s the difference between a notarised and a registered document?',
        answer:
          'Notarisation authenticates signatures before a notary, while registration records the document with the sub-registrar for legal proof and public record. Some documents (e.g., sale deeds) must be registered; others only need notarisation.',
      },
      {
        question: 'Can you help draft custom agreements like NDAs, MoUs or franchise deals?',
        answer:
          'Absolutely. We draft and review bespoke agreements — NDAs, MoUs, joint ventures, franchise, lease and business contracts — customised to protect your specific interests.',
      },
      {
        question: 'How long does it take to get a document drafted?',
        answer:
          'Standard documents are usually delivered within 1–3 working days. Complex, negotiated agreements may take longer depending on review rounds and your inputs.',
      },
      {
        question: 'Do I need to be present for notarisation or attestation?',
        answer:
          'For most notarisation and attestation, the signatory’s presence (or a valid power of attorney) is needed. We guide you on the exact requirement and can arrange convenient options.',
      },
    ],
  },
  {
    id: 'property',
    label: 'Property',
    icon: Landmark,
    faqs: [
      {
        question: 'What is the process to register a sale deed?',
        answer:
          'The sale deed is drafted, the correct stamp duty and registration fee are paid, and both parties appear before the sub-registrar with witnesses and ID to execute and register it. We manage drafting, valuation and the registration appointment.',
      },
      {
        question: 'Why is a title search or due diligence important before buying property?',
        answer:
          'A title search confirms the seller’s ownership, checks for encumbrances, loans, disputes or pending dues, and verifies approvals — protecting you from buying litigated or defective-title property. We provide a detailed due-diligence report.',
      },
      {
        question: 'What is property mutation and why do I need it?',
        answer:
          'Mutation updates the local revenue/municipal records to reflect the new owner after a sale, gift or inheritance. It’s essential for paying property tax and establishing ownership in government records.',
      },
      {
        question: 'How do I obtain a legal heir or succession certificate?',
        answer:
          'These are issued by the competent authority/court to identify rightful heirs and enable transfer of the deceased’s assets. We prepare the application, documentation and represent you through the process.',
      },
      {
        question: 'What is RERA and does my project need to be registered?',
        answer:
          'RERA regulates real estate projects to protect buyers. Projects above the prescribed size/plot threshold must be RERA-registered before marketing or sale. We handle developer registration and ongoing RERA compliance.',
      },
      {
        question: 'What charges apply when registering property?',
        answer:
          'You pay stamp duty (a percentage of property value, varying by state and buyer category) plus a registration fee. We calculate the exact applicable charges and help with valuation.',
      },
    ],
  },
  {
    id: 'lawyer-services',
    label: 'Lawyer Services',
    icon: Scale,
    faqs: [
      {
        question: 'How do I register a trademark and how long does it take?',
        answer:
          'We conduct a search, file the application in the right class, and respond to any objections. You can use the ™ symbol immediately; registration (the ® mark) typically takes 8–18 months if unopposed.',
      },
      {
        question: 'Can you represent me in court for civil or criminal matters?',
        answer:
          'Yes. Our network of advocates handles civil litigation, criminal defence, bail, appeals, consumer disputes and more — from drafting and filing to courtroom representation.',
      },
      {
        question: 'What’s the difference between mutual and contested divorce?',
        answer:
          'In a mutual divorce both spouses agree on separation and terms, making it faster and less costly. A contested divorce involves disputes over grounds, custody, alimony or property, requiring litigation. We advise and represent in both.',
      },
      {
        question: 'How quickly can you help with bail or an FIR matter?',
        answer:
          'Criminal matters are time-sensitive and we prioritise them. We can assist with anticipatory or regular bail, FIR registration or quashing, and urgent representation on a priority basis.',
      },
      {
        question: 'Do you handle corporate matters like M&A and insolvency?',
        answer:
          'Yes. Our corporate team advises on mergers and acquisitions, insolvency and bankruptcy, IPO/listing compliance, banking, securities and international trade law.',
      },
      {
        question: 'Are initial consultations with a lawyer confidential?',
        answer:
          'Completely. All discussions are protected and kept strictly confidential. You can speak openly so we can advise you accurately.',
      },
    ],
  },
  {
    id: 'global-business',
    label: 'Global Business',
    icon: Globe,
    faqs: [
      {
        question: 'Which country is best to incorporate my company internationally?',
        answer:
          'It depends on your market, tax goals and substance needs — the US and UK for credibility and funding, Singapore/Hong Kong for Asia, the UAE for 0% personal tax, or BVI/Cayman for holding structures. We recommend based on your specific objectives.',
      },
      {
        question: 'Can I register a company abroad without travelling?',
        answer:
          'In most jurisdictions, yes — incorporation is completed remotely with scanned documents and electronic signatures. A few (e.g., Germany, Switzerland) may require notarisation, which we help arrange.',
      },
      {
        question: 'Do I need a local director or resident shareholder?',
        answer:
          'Many jurisdictions allow 100% foreign ownership, but some (e.g., Singapore, Australia, New Zealand) require a resident director. We offer nominee director services where needed.',
      },
      {
        question: 'What’s the difference between a UAE free zone and mainland company?',
        answer:
          'Free zones offer 100% ownership, lower cost and tax efficiency but trade mainly internationally or within the zone; mainland licences allow you to trade directly across the UAE market and bid for government contracts. We match the licence to your activity.',
      },
      {
        question: 'Are offshore companies (BVI, Cayman, Seychelles) legal?',
        answer:
          'Yes. Offshore companies are legitimate structuring tools when used transparently and reported correctly under your home-country tax obligations. We ensure compliant setup and ongoing economic-substance requirements.',
      },
      {
        question: 'Can you help open an international bank account?',
        answer:
          'Yes. We assist with corporate bank and fintech account opening in your chosen jurisdiction, guiding you through KYC and documentation to improve approval chances.',
      },
    ],
  },
];

export function FAQSection() {
  const [activeTab, setActiveTab] = useState(faqCategories[0].id);
  const activeCategory = faqCategories.find((c) => c.id === activeTab) ?? faqCategories[0];

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/60">
      <div className="max-w-7xl 3xl:max-w-[1500px] mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">

          {/* ── Left: sticky intro + support card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-[10px] uppercase tracking-widest mb-5">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
              Frequently Asked{' '}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Clear answers to the questions we hear most — across every service, from company
              registration to global expansion. Pick a category to explore.
            </p>

            {/* Support card */}
            <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm p-7 sm:p-8">
              <div className="absolute -top-12 -right-10 w-44 h-44 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Still have questions?</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Can’t find what you’re looking for? Our legal experts are happy to help.
                </p>
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-black text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors"
                >
                  Talk to an Expert
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── Right: category pills + accordion ── */}
          <div>
            {/* Category pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-7 sm:mb-8">
              {faqCategories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={cn(
                      'inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-full border font-bold text-[12px] sm:text-[13px] transition-all duration-300',
                      isActive
                        ? 'bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-900/20'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900',
                    )}
                  >
                    <cat.icon className={cn('w-3.5 h-3.5 sm:w-4 sm:h-4', isActive ? 'text-primary' : 'text-slate-400')} strokeWidth={2.2} />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                  {activeCategory.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-slate-200 rounded-2xl px-5 sm:px-6 bg-white shadow-sm transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5"
                    >
                      <AccordionTrigger className="text-[14px] sm:text-base font-bold text-slate-900 hover:text-primary hover:no-underline text-left py-5 [&[data-state=open]]:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-[15px] text-slate-500 leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
