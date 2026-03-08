import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog & Legal Insights - Legal Door',
  description: 'Stay updated with the latest legal news, business regulations, and expert insights from Legal Door.',
};

const posts = [
  {
    title: 'The Future of Digital Contracts in India',
    excerpt: 'Exploring the legal validity and emerging trends of smart contracts and digital signatures.',
    date: 'March 15, 2024',
    author: 'Dr. Vikram Sethi',
    category: 'Technology Law'
  },
  {
    title: 'New GST Amendments: What Businesses Need to Know',
    excerpt: 'A comprehensive guide to the latest changes in GST compliance and filing requirements.',
    date: 'March 10, 2024',
    author: 'Rajesh Khanna',
    category: 'Taxation'
  },
  {
    title: 'Navigating Cross-Border IP Protection',
    excerpt: 'Key strategies for protecting your intellectual property when expanding into international markets.',
    date: 'March 5, 2024',
    author: 'Meera Deshmukh',
    category: 'Global Business'
  },
  {
    title: 'Real Estate Regulation Act (RERA) Updates 2024',
    excerpt: 'Important updates for property buyers and developers under the latest RERA guidelines.',
    date: 'Feb 28, 2024',
    author: 'Amit Verma',
    category: 'Property'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">The Journal</h4>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
              Legal <span className="text-primary italic">Intelligence.</span>
            </h1>
            <p className="text-lg text-slate-500 font-bold leading-relaxed max-w-2xl mx-auto">
              Deep dives into complex legal landscapes and regulatory shifts, authored by our R&D specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {posts.map((post, i) => (
              <div key={i} className="group bg-white p-8 rounded-[32px] border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-black text-slate-500 uppercase tracking-widest">{post.category}</span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold ml-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100" />
                    <span className="text-xs font-black text-slate-900">{post.author}</span>
                  </div>
                  <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
