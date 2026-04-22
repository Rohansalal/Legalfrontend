'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { ServiceTemplate } from '@/components/service-template';
import { ShieldCheck, Zap, Globe, Award, UserCheck, FileSearch, CheckCircle2, FileCheck, FileText, TrendingUp, Briefcase, Scale, Clock, Users, Building2 } from 'lucide-react';

export default function CMAAuditReportPage() {
  const data = {
    title: 'CMA Audit & Cost Report Services',
    description:
      'Expert Cost Audit and CMA certification services — Cost Audit under Section 148, Cost Compliance Report, XBRL filing of cost accounts, applicability thresholds for manufacturing and service companies, and ICMAI standards compliance.',
    heroBadges: ['ICMAI-Certified CMAs', 'Section 148 Cost Audit', 'CRA-4 XBRL Filing'],
    introTitle: 'What is a CMA Audit & Cost Report?',
    introContent: (
      <p>
        A Cost and Management Accountant (CMA) registered with the Institute of Cost Accountants of India (ICMAI, formerly ICWAI) is authorized to conduct Cost Audit under Section 148 of the Companies Act, 2013 read with the Companies (Cost Records and Audit) Rules, 2014. Cost Audit involves examination of the cost records and cost of production/service to verify accuracy and compliance with the cost accounting standards. The Cost Audit Report must be submitted in Form CRA-3 and filed with the Central Government in Form CRA-4 (XBRL) within 30 days of receiving the report (and no later than 30 September). Cost Audit is mandatory for manufacturing companies with aggregate turnover above ₹25 crore and for service sector companies covered under the Rules with turnover above ₹100 crore. CMAs also assist with maintenance of cost records, preparation of project reports, bank credit (CMA data format), and financial analysis.
      </p>
    ),
    detailsTitle: 'Types of CMA Audit & Reports',
    details: [
      {
        title: 'Cost Audit — Section 148',
        desc: 'Mandatory for prescribed manufacturing companies (turnover above ₹25 crore) and service companies (above ₹100 crore). CMA audits cost records and issues Form CRA-3.',
        icon: ShieldCheck,
      },
      {
        title: 'Cost Compliance Report (CCR)',
        desc: 'Companies required to maintain cost records but below the audit threshold must submit a self-certified Cost Compliance Report to MCA annually.',
        icon: FileText,
      },
      {
        title: 'XBRL Filing — CRA-4',
        desc: 'Cost Audit Report must be filed with the Central Government in Form CRA-4 in XBRL format within 30 days of receiving the report from the Cost Auditor.',
        icon: Globe,
      },
      {
        title: 'CMA Data for Bank Credit',
        desc: 'CMAs prepare CMA data (financial analysis in prescribed format) for banks to assess credit proposals — term loans, working capital, project financing.',
        icon: TrendingUp,
      },
    ],
    requirements: [
      'Certificate of Incorporation and CIN',
      'Cost accounting records maintained throughout the year',
      'Product/service-wise cost statements and costing sheets',
      'Manufacturing account / production records',
      'Fixed asset register with depreciation per product',
      'Overhead absorption and allocation statements',
      'Board Resolution appointing the Cost Auditor',
      'Previous year Cost Audit Report (CRA-3)',
    ],
    processTitle: 'How We Conduct CMA Audit & Reports',
    processIntro:
      'Our ICMAI-empanelled CMA team conducts cost audits following Cost Auditing Standards and files CRA-4 in XBRL format within deadlines.',
    processSteps: [
      {
        title: 'Assess Applicability & Appoint CMA',
        desc: 'Determine if Cost Audit is mandatory based on turnover, product category, and Rules applicability. Pass Board Resolution to appoint the Cost Auditor within 30 days of the Board Meeting.',
        icon: FileSearch,
      },
      {
        title: 'Maintain & Review Cost Records',
        desc: 'Ensure cost accounting records are maintained as per CAS (Cost Accounting Standards). Review product-wise cost of production, overhead allocation, and cost sheets.',
        icon: UserCheck,
      },
      {
        title: 'Conduct Cost Audit & Issue CRA-3',
        desc: 'CMA team examines cost records, verifies cost statements, and issues the Cost Audit Report in Form CRA-3. Report includes variances, efficiency analysis, and observations.',
        icon: FileCheck,
      },
      {
        title: 'File CRA-4 (XBRL) with MCA',
        desc: 'File Cost Audit Report in Form CRA-4 in XBRL format within 30 days of receiving CRA-3 from the auditor (latest by 30 September). Also intimate the Central Government.',
        icon: CheckCircle2,
      },
    ],
    processOutro:
      'We also prepare CMA data reports in RBI/bank prescribed format for companies seeking credit facilities, project financing, or loan restructuring.',
    documents: [
      {
        category: 'Production Records',
        list: [
          'Product-wise cost of production statements',
          'Raw material consumption records',
          'Manufacturing overhead statements',
        ],
      },
      {
        category: 'Accounting Records',
        list: [
          'Trial balance and general ledger',
          'Fixed asset register per product/service',
          'Overhead allocation and absorption basis',
        ],
      },
      {
        category: 'Regulatory Documents',
        list: [
          'Board Resolution appointing Cost Auditor',
          'Previous year CRA-3 report',
          'MCA intimation of Cost Auditor appointment (CRA-2)',
        ],
      },
    ],
    compliance: [
      {
        title: 'Cost Auditor Independence',
        desc: 'The Cost Auditor must be independent of the company. The same firm of CMAs that provides other services (e.g., CMA data, internal audit) can be the Cost Auditor subject to independence conditions.',
      },
      {
        title: 'CRA-2 — Intimation of Appointment',
        desc: 'The company must intimate the appointment of Cost Auditor to the Central Government in Form CRA-2 within 30 days of appointment, before the financial year begins.',
      },
      {
        title: 'Cost Accounting Standards (CAS)',
        desc: 'Cost records must be maintained following the 24 Cost Accounting Standards issued by ICMAI. Non-compliance with CAS is a qualification in the Cost Audit Report.',
      },
      {
        title: 'Rotation of Cost Auditors',
        desc: 'Cost Auditors must be rotated every 5 years for listed companies. The firm can be re-appointed after a 2-year cooling-off period.',
      },
    ],
    faqs: [
      {
        q: 'Is Cost Audit mandatory for all manufacturing companies?',
        a: 'No. Cost Audit under Section 148 is mandatory for companies in regulated industries (cement, steel, pharma, chemicals, telecom, etc.) with turnover above ₹25 crore, and service companies in regulated sectors with turnover above ₹100 crore.',
      },
      {
        q: 'What is the difference between Cost Audit and Statutory Audit?',
        a: 'Statutory Audit (by CA) examines financial statements for true and fair view. Cost Audit (by CMA) examines cost accounting records to verify cost of production/services and efficiency of operations.',
      },
      {
        q: 'What is CMA data and why do banks require it?',
        a: 'CMA data is a standardized financial analysis format required by Indian banks for credit appraisal. It includes past 3 years financials and future projections covering turnover, margins, debt, and net worth to assess creditworthiness.',
      },
      {
        q: 'What is the due date for filing CRA-4?',
        a: 'Form CRA-4 (Cost Audit Report) must be filed within 30 days of receiving the Cost Audit Report (Form CRA-3) from the Cost Auditor, and not later than 30 September of the following year.',
      },
      {
        q: 'Can a CA firm conduct a Cost Audit?',
        a: 'No. Only a Cost Accountant (CMA) holding a valid Certificate of Practice from ICMAI can conduct Cost Audit under Section 148 of the Companies Act, 2013.',
      },
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
