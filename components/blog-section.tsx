'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { PostImage } from '@/components/post-image';
import { featuredPost, recentPosts, blogHref } from '@/lib/blog-data';

export function BlogSection() {
  const sidePosts = recentPosts.slice(0, 4);

  return (
    <section id="blog" className="py-14 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto">
        {/* ── Header row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-14"
        >
          <div className="max-w-2xl">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[11px] mb-3">Legal Insights</h4>
            <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl 3xl:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              From the Legal Door <span className="text-primary italic">Journal.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mt-3 sm:mt-4">
              Expert commentary on regulatory shifts, compliance and business law — authored by our lawyers, CAs and company secretaries.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex shrink-0 items-center gap-2 px-5 py-3 rounded-full border border-slate-200 text-slate-800 font-black text-[12px] uppercase tracking-widest hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
          >
            View All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* ── Editorial grid: featured + side list ── */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Featured */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link href={blogHref(featuredPost)} className="rounded-3xl overflow-hidden border border-slate-100 bg-white hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
              <div className="relative">
                <PostImage src={featuredPost.image} alt={featuredPost.title} className="h-56 sm:h-72 lg:h-80" />
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                  {featuredPost.category}
                </span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{featuredPost.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featuredPost.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors mb-3">
                  {featuredPost.title}
                </h3>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-6 flex-1">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <img src={featuredPost.author.avatar} alt={featuredPost.author.name} loading="lazy" className="w-10 h-10 rounded-full object-cover bg-slate-100" />
                    <div className="leading-tight">
                      <p className="text-[13px] font-black text-slate-900">{featuredPost.author.name}</p>
                      <p className="text-[11px] font-semibold text-slate-400">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-primary font-black text-[11px] uppercase tracking-widest">
                    Read <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Side list */}
          <div className="flex flex-col divide-y divide-slate-100">
            {sidePosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group py-5 first:pt-0 last:pb-0"
              >
                <Link href={blogHref(post)} className="flex gap-4 sm:gap-5 items-center">
                  <PostImage src={post.image} alt={post.title} className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2.5 mb-2 text-[10px] font-black uppercase tracking-widest">
                      <span className="text-primary">{post.category}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1 text-slate-400 font-bold tracking-normal normal-case">
                        <Clock className="h-3 w-3" />{post.readTime}
                      </span>
                    </div>
                    <h3 className="text-[15px] sm:text-base font-black text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-1.5">
                      {post.title}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] text-slate-400 font-medium leading-snug line-clamp-2 hidden sm:block">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-2.5">
                      <img src={post.author.avatar} alt={post.author.name} loading="lazy" className="w-6 h-6 rounded-full object-cover bg-slate-100" />
                      <span className="text-[11px] font-bold text-slate-500">{post.author.name}</span>
                      <span className="text-[11px] text-slate-300 hidden xs:inline">· {post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Mobile view-all */}
        <div className="sm:hidden text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-black text-[12px] uppercase tracking-widest"
          >
            View All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
