'use client';

import { useLanguage } from '@/components/ui/LanguageProvider';
import { BlogCard } from '@/components/ui/BlogCard';
import type { BlogPost } from '@/lib/types';

interface Props {
  posts: BlogPost[];
}

export function BlogListingShell({ posts }: Props) {
  const { lang } = useLanguage();

  const ui = {
    heading:  lang === 'en' ? 'Insights & Articles'                                                      : 'Insights & Artigos',
    subtext:  lang === 'en' ? 'Perspectives from our team on the digital advertising ecosystem.'          : 'Perspectivas do nosso time sobre o ecossistema de publicidade digital.',
    empty:    lang === 'en' ? 'No articles published yet.'                                               : 'Nenhum artigo publicado ainda.',
  };

  return (
    <div className="mb-14" style={{ display: 'contents' }}>
      <div className="mb-14">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
          style={{ color: '#4285f4', background: 'rgba(66,133,244,0.08)', border: '1px solid rgba(66,133,244,0.2)' }}
        >
          Blog
        </span>
        <h1 className="text-5xl font-black mb-4" style={{ color: 'var(--c-text-1)' }}>
          {ui.heading}
        </h1>
        <p style={{ color: 'var(--c-text-2)' }}>
          {ui.subtext}
        </p>
      </div>

      {posts.length === 0 ? (
        <p style={{ color: 'var(--c-text-2)' }}>{ui.empty}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
}
