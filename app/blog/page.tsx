import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { BlogListingShell } from '@/components/sections/BlogListingShell';

export const metadata: Metadata = {
  title: 'Blog — Insights & Artigos',
  description:
    'Publicamos regularmente sobre AdTech, mídia programática, tráfego pago, SEO e tendências do mercado digital.',
  openGraph: {
    title: 'Blog | AD TEC',
    description: 'Insights sobre AdTech, mídia programática, tráfego pago e SEO.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div style={{ background: 'var(--c-bg)', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto px-6 pt-36 pb-24">
        <BlogListingShell posts={posts} />
      </div>
    </div>
  );
}
