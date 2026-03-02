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
  },
  {
    title: 'Protecting Your Intellectual Property in the Digital Age',
    excerpt: 'Learn how to safeguard your innovations, trademarks, and copyrights in our increasingly digital marketplace.',
    date: 'February 28, 2024',
    category: 'IP Law',
  },
  {
    title: 'Navigating Employment Law Changes in 2024',
    excerpt: 'Stay compliant with the latest employment regulations and understand new legal requirements for employers.',
    date: 'February 25, 2024',
    category: 'Employment Law',
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Legal Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              className="rounded-xl border border-border overflow-hidden bg-white hover:shadow-lg transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-primary font-semibold cursor-pointer"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
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
