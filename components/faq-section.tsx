'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What areas of law do you specialize in?',
    answer:
      'We offer comprehensive legal services including corporate law, intellectual property, employment law, family law, business growth strategies, and litigation. Our multi-disciplinary team ensures we can handle diverse legal challenges.',
  },
  {
    question: 'How do you determine your legal fees?',
    answer:
      'We offer flexible fee arrangements including hourly rates, flat fees for specific services, and contingency arrangements depending on the case type. We provide transparent cost estimates upfront.',
  },
  {
    question: 'What should I bring to my initial consultation?',
    answer:
      'Bring any relevant documents related to your legal matter - contracts, correspondence, agreements, or records. This helps us understand your situation better. If you prefer, you can discuss what documents to bring during scheduling.',
  },
  {
    question: 'How long does the legal process typically take?',
    answer:
      'Timeline varies depending on the complexity of your case. Simple matters might take weeks, while complex litigation could take months or years. We provide realistic timeframes after our initial analysis.',
  },
  {
    question: 'Will my information be kept confidential?',
    answer:
      'Absolutely. All client information is protected by attorney-client privilege. We maintain strict confidentiality standards and comply with all professional ethics regulations.',
  },
  {
    question: 'Do you offer remote consultations?',
    answer:
      'Yes! We offer flexible consultation options including in-person meetings, video calls, and phone consultations. Choose what works best for your schedule.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
