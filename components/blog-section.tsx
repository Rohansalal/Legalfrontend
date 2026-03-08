'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: '10 Essential Legal Documents Every Business Needs',
    excerpt: 'A comprehensive guide to the foundational legal documents that protect your business and establish clear policies.',
    date: 'March 1, 2024',
    category: 'Business Law',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Protecting Your Intellectual Property in the Digital Age',
    excerpt: 'Learn how to safeguard your innovations, trademarks, and copyrights in our increasingly digital marketplace.',
    date: 'February 28, 2024',
    category: 'IP Law',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Navigating Employment Law Changes in 2024',
    excerpt: 'Stay compliant with the latest employment regulations and understand new legal requirements for employers.',
    date: 'February 25, 2024',
    category: 'Employment Law',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop'
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Legal <span className="text-primary italic">Insights.</span>
          </h2>
          <p className="text-lg text-slate-500 font-bold max-w-2xl mx-auto">
            Stay updated with our latest articles on legal trends, business law, and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-100 overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-widest">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2">{post.excerpt}</p>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest cursor-pointer group/link"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 mx-auto"
            size="lg"
          >
            View All Articles
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
