import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { BlogCard } from '@/components/blog/blog-card';
import { ArrowRight } from 'lucide-react';

interface FeaturedBlogSectionProps {
  posts: BlogPost[];
}

export default function FeaturedBlogSection({ posts }: FeaturedBlogSectionProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const recentPosts = posts.slice(0, 6);

  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Insights & Guías</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-950 uppercase">
            Últimas <span className="text-brand-purple">Publicaciones</span>
          </h2>
        </div>
        
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 border border-zinc-200 rounded-full font-bold text-sm hover:border-brand-purple hover:text-brand-purple transition-all group shadow-sm"
        >
          Ver todo el blog
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* CSS Scroll Snap Carousel */}
      <div className="w-full relative">
         <div className="flex overflow-x-auto gap-6 px-6 lg:px-[calc((100vw-80rem)/2+2rem)] pb-12 snap-x snap-mandatory hide-scrollbars no-scrollbar">
            {recentPosts.map((post) => (
              <div key={post.id} className="snap-center shrink-0 w-[85vw] md:w-[400px]">
                <BlogCard post={post} />
              </div>
            ))}
         </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
