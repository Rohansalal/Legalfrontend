import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Scale, Briefcase } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import {
  documentationServices,
  documentationCategoryMeta,
  type DocumentationCategory,
} from '@/lib/documentation-data';

interface PageProps {
  params: Promise<{ category: string }>;
}

const categoryIcons: Record<DocumentationCategory, typeof Scale> = {
  legal: Scale,
  'business-corporate': Briefcase,
};

export function generateStaticParams() {
  return (Object.keys(documentationServices) as DocumentationCategory[]).map(
    (category) => ({ category })
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = category as DocumentationCategory;
  const meta = documentationCategoryMeta[cat];
  if (!meta) return {};
  return {
    title: `${meta.label} | Documentation Services - Legal Door`,
    description: meta.tagline,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = category as DocumentationCategory;
  const services = documentationServices[cat];
  const meta = documentationCategoryMeta[cat];
  if (!services || !meta) notFound();

  const Icon = categoryIcons[cat];

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container mx-auto py-24 px-4 pt-32">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-8 max-w-7xl mx-auto flex-wrap">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/services/documentation" className="hover:text-primary transition-colors">Documentation</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900">{meta.label}</span>
        </nav>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            {meta.label}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">{meta.tagline}</p>
          <span className="inline-block mt-6 text-xs font-black uppercase tracking-widest text-primary">
            {Object.keys(services).length} Services
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {Object.entries(services).map(([slug, service]) => (
            <Link
              key={slug}
              href={`/services/documentation/${cat}/${slug}`}
              className="group bg-white border border-slate-100 p-6 rounded-3xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col gap-3"
            >
              <h3 className="text-base md:text-lg font-black text-slate-900 group-hover:text-primary transition-colors leading-tight">
                {service.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed flex-1 line-clamp-3">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary">
                Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CTASection />
      <Footer />
    </main>
  );
}
