import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { PostImage } from '@/components/post-image';
import { blogPosts, getPost, getRelatedPosts, blogHref, type ContentBlock } from '@/lib/blog-data';
import { Calendar, Clock, ArrowLeft, ArrowRight, Info } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Legal Door Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [{ url: post.image }],
    },
  };
}

/** Renders one article body block. */
function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'heading':
      return <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-10 mb-4">{block.text}</h2>;
    case 'list':
      return (
        <ul className="space-y-3 my-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'paragraph':
    default:
      return <p className="text-slate-600 leading-relaxed text-[15px] sm:text-base mb-5">{block.text}</p>;
  }
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* ── Hero (dark — keeps the transparent navbar visible) ── */}
      <article>
        <header className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-[#022d54] bg-[radial-gradient(circle_at_top,#0a3d6d_0%,#022d54_55%,#021e3a_100%)] relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[60%] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto">
              {/* breadcrumb */}
              <nav className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold text-slate-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-white transition-colors">Journal</Link>
                <span>/</span>
                <span className="text-slate-300 line-clamp-1">{post.category}</span>
              </nav>

              <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-[10px] font-black uppercase tracking-widest text-orange-300 mb-5">
                {post.category}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.12] mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <div className="flex items-center gap-3">
                  <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover bg-white/10" />
                  <div className="leading-tight">
                    <p className="text-sm font-black text-white">{post.author.name}</p>
                    <p className="text-[11px] font-semibold text-slate-400">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[12px] font-bold text-slate-400">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Cover image (overlaps hero) ── */}
        <div className="bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto -mt-8 sm:-mt-12 relative z-10">
              <PostImage
                src={post.image}
                alt={post.title}
                className="rounded-[24px] sm:rounded-[32px] aspect-[16/9] shadow-2xl ring-1 ring-slate-100"
              />
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl font-bold text-slate-800 leading-relaxed mb-8 pb-8 border-b border-slate-100">
                {post.excerpt}
              </p>

              {post.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}

              {/* disclaimer */}
              <div className="mt-12 flex items-start gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  This article is for general information only and is not legal advice. Laws change and every
                  situation is different — <Link href="/contact" className="text-primary font-bold hover:underline">speak to a Legal Door expert</Link> before acting on it.
                </p>
              </div>

              {/* author card */}
              <div className="mt-10 flex items-center gap-4 p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100">
                <img src={post.author.avatar} alt={post.author.name} className="w-16 h-16 rounded-2xl object-cover bg-slate-100 shrink-0" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Written by</p>
                  <p className="text-lg font-black text-slate-900 leading-none">{post.author.name}</p>
                  <p className="text-sm font-semibold text-slate-500 mt-1">{post.author.role}, Legal Door LLP</p>
                </div>
              </div>

              {/* back link */}
              <div className="mt-10">
                <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-black text-[12px] uppercase tracking-widest hover:gap-3 transition-all">
                  <ArrowLeft className="w-4 h-4" /> Back to all articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ── Related articles ── */}
      {related.length > 0 && (
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {related.map((rp) => (
                  <article
                    key={rp.slug}
                    className="group rounded-3xl border border-slate-100 overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 flex flex-col"
                  >
                    <Link href={blogHref(rp)} className="flex flex-col h-full">
                      <div className="relative">
                        <PostImage src={rp.image} alt={rp.title} className="h-44 sm:h-48" />
                        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                          {rp.category}
                        </span>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 mb-3">
                          <Clock className="w-3.5 h-3.5" />{rp.readTime}
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-4 flex-1">
                          {rp.title}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 text-primary font-black text-[11px] uppercase tracking-widest">
                          Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </main>
  );
}
