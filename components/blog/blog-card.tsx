import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = post.published_at 
    ? new Date(post.published_at).toLocaleDateString('es-CL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : 'Próximamente';

  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-brand-purple/20 hover:shadow-[0_20px_50px_rgba(142,68,173,0.1)] transition-all duration-500 flex flex-col h-full">
      {/* Image Container */}
      <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden block">
        {post.cover_image ? (
          <Image
            src={post.cover_image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-green/10 flex items-center justify-center">
             <span className="text-4xl font-black text-brand-purple/20 tracking-tighter">webunica.cl</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-purple text-xs font-bold rounded-full border border-brand-purple/10">
            {post.category?.name || 'General'}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>5 min lectura</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`} className="block group/title">
          <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover/title:text-brand-purple transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h2>
        </Link>

        <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-1">
          {post.excerpt || 'Explora este nuevo artículo sobre diseño web y tecnología Shopify en Chile.'}
        </p>

        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-brand-purple font-bold text-sm hover:gap-3 transition-all"
        >
          Leer más
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
