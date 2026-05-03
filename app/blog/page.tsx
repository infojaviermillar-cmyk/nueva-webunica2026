import { Metadata } from 'next';
import { getPublishedPosts, getCategories } from '@/lib/blog';
import { BlogCard } from '@/components/blog/blog-card';
import { Search } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Webunica.cl | Diseño Web Shopify Chile',
  description: 'Explora guías, consejos y estrategias sobre Shopify, SEO y diseño web para potenciar tu tienda online en Chile.',
};

export const dynamic = 'force-dynamic';

interface BlogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedParams = await searchParams;
  const currentCategory = (resolvedParams.category as string) || 'all';

  const [allPosts, categories] = await Promise.all([
    getPublishedPosts(),
    getCategories()
  ]);

  const posts = currentCategory === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category?.slug === currentCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-[22vh] lg:pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-brand-purple/5 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-none">
              Insights del <span className="text-brand-purple">Next Gen</span> Ecommerce
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
              Guías maestras sobre Shopify, SEO y tecnología chilena para vender más.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <Link 
                href="/blog"
                className={`px-5 py-2 font-bold rounded-full text-sm transition-all shadow-sm ${
                  currentCategory === 'all' 
                    ? 'bg-brand-purple text-white shadow-brand-purple/20 shadow-lg' 
                    : 'bg-white text-slate-600 hover:text-brand-purple hover:bg-brand-purple/5 border border-slate-200'
                }`}
              >
                Todos
              </Link>
              {categories.map((cat) => {
                const isActive = currentCategory === cat.slug;
                return (
                  <Link 
                    key={cat.id}
                    href={`/blog?category=${cat.slug}`}
                    className={`px-5 py-2 font-bold rounded-full text-sm transition-all shadow-sm ${
                      isActive
                        ? 'bg-brand-purple text-white shadow-brand-purple/20 shadow-lg'
                        : 'bg-white text-slate-600 hover:text-brand-purple hover:bg-brand-purple/5 border border-slate-200'
                    }`}
                  >
                    {cat.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-[3rem] p-16 text-center border border-dashed border-slate-200">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No hay publicaciones en esta categoría</h3>
              <p className="text-slate-500">Intenta explorando otros temas, o vuelve a "Todos".</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

