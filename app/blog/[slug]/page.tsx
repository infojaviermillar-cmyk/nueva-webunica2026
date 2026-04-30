import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getPublishedPosts } from '@/lib/blog';
import { Calendar, Clock, User, ArrowLeft, Globe, Share2, Link as LinkIcon } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) return { title: 'Post no encontrado' };

  return {
    title: `${post.seo_title || post.title} - Webunica.cl`,
    description: post.seo_description || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) notFound();

  const formattedDate = post.published_at 
    ? new Date(post.published_at).toLocaleDateString('es-CL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : 'Próximamente';

  return (
    <article className="bg-white min-h-screen">
      {/* Article Header */}
      <header className="relative pt-32 pb-16 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-brand-purple/5 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-purple font-bold text-sm mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Volver al blog
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs font-bold rounded-full">
                {post.category?.name || 'General'}
              </span>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>5 min lectura</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Equipo Webunica</div>
                  <div className="text-xs text-slate-500 font-medium">Expertos en Shopify</div>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">Publicado el</span>
                <span className="text-sm font-bold text-slate-700">{formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      {post.cover_image && (
        <div className="container mx-auto px-6 -mt-10 mb-16 relative z-20">
          <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-purple/10 border-8 border-white">
            <Image
              src={post.cover_image}
              alt={post.cover_image_alt || post.seo_title || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 pb-32">
        {/* Left: Social Share */}
        <aside className="lg:w-20 lg:sticky lg:top-32 h-fit flex lg:flex-col gap-4">
           <button className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center border border-slate-100">
             <Globe className="w-5 h-5" />
           </button>
           <button className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center border border-slate-100">
             <Share2 className="w-5 h-5" />
           </button>
           <button className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center border border-slate-100">
             <LinkIcon className="w-5 h-5" />
           </button>
        </aside>

        {/* Center: Main Content */}
        <div className="flex-1 max-w-4xl prose prose-slate prose-lg lg:prose-xl prose-headings:font-black prose-headings:tracking-tighter prose-p:text-slate-600 prose-a:text-brand-purple prose-img:rounded-[2rem]">
          {/* Aquí renderizaríamos Markdown si tuviéramos un plugin, por ahora renderizamos como texto/html básico */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Right: Sidebar / Lead CTA */}
        <aside className="lg:w-96 lg:sticky lg:top-32 h-fit space-y-8">
           <div className="bg-brand-purple rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl shadow-brand-purple/20">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
             <h3 className="text-2xl font-black tracking-tighter mb-4 relative z-10">¿Quieres vender más en Shopify?</h3>
             <p className="text-white/80 text-sm font-medium leading-relaxed mb-8 relative z-10">
               Agenda una consultoría técnica gratuita y descubre cómo podemos ayudarte a escalar tus ventas de forma real.
             </p>
             <LeadButton className="w-full bg-white text-brand-purple font-black rounded-2xl py-5 transition-all hover:scale-105 active:scale-95 shadow-lg relative z-10 uppercase tracking-widest text-xs">
                Cotizar mi proyecto
             </LeadButton>
           </div>
        </aside>
      </div>
    </article>
  );
}
