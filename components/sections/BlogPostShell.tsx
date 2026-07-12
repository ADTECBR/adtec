'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/ui/LanguageProvider';
import { formatDate } from '@/lib/utils';

interface Props {
  date: string;
}

export function BlogPostMeta({ date }: Props) {
  const { lang } = useLanguage();
  return (
    <div className="flex items-center gap-4 pb-8 mb-8 border-b text-sm" style={{ borderColor: 'var(--c-border)', color: 'var(--c-text-3)' }}>
      <span>AD TEC</span>
      <span>·</span>
      <time dateTime={date}>{formatDate(date, lang)}</time>
    </div>
  );
}

export function BlogPostBackLink() {
  const { lang } = useLanguage();
  return (
    <Link
      href="/blog"
      className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
      style={{ color: 'var(--c-text-2)' }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Blog
    </Link>
  );
}

export function BlogPostFooterLink() {
  const { lang } = useLanguage();
  const label = lang === 'en' ? 'See all articles' : 'Ver todos os artigos';
  return (
    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: '#4285f4' }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </Link>
  );
}
