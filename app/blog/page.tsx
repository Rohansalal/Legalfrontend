import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { PostImage } from '@/components/post-image';
import { blogPosts, blogHref } from '@/lib/blog-data';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog & Legal Insights - Legal Door',
  description: 'Stay updated with the latest legal news, business regulations, and expert insights from Legal Door.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero — dark so the transparent navbar stays visible */}
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-24 bg-[#022d54] bg-[radial-gradient(circle_at_top,#0a3d6d_0%,#022d54_55%,#021e3a_100%)] relative overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-orange-400 font-black uppercase tracking-[0.3em] text-[11px] mb-4">The Journal</h4>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Legal <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent italic">Intelligence.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
              Deep dives into complex legal landscapes and regulatory shifts — authored by our lawyers, Chartered Accountants and company secretaries.
            </p>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-3xl border border-slate-100 overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <Link href={blogHref(post)} className="flex flex-col h-full">
                  <div className="relative">
                    <PostImage src={post.image} alt={post.title} className="h-48 sm:h-52" />
                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 mb-3">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <img src={post.author.avatar} alt={post.author.name} loading="lazy" className="w-8 h-8 rounded-full object-cover bg-slate-100" />
                        <div className="leading-tight">
                          <p className="text-[12px] font-black text-slate-900">{post.author.name}</p>
                          <p className="text-[10px] font-semibold text-slate-400">{post.author.role}</p>
                        </div>
                      </div>
                      <span className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
