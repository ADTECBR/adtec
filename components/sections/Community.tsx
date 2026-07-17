'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/ui/LanguageProvider';

const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    titlePt: 'Discussões abertas',
    titleEn: 'Open discussions',
    descPt: 'Troca de ideias sobre AdTech, mídia programática, tráfego pago, SEO e desenvolvimento web.',
    descEn: 'Exchange ideas about AdTech, programmatic media, paid traffic, SEO and web development.',
    color: '#4285f4',
    bg: 'rgba(66,133,244,0.08)',
    border: 'rgba(66,133,244,0.2)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    titlePt: 'Experts do mercado',
    titleEn: 'Industry experts',
    descPt: 'Conecte-se com profissionais experientes e aprenda com quem está no dia a dia do mercado digital.',
    descEn: 'Connect with experienced professionals and learn from those in the thick of the digital market.',
    color: '#1b9e4b',
    bg: 'rgba(27,158,75,0.08)',
    border: 'rgba(27,158,75,0.2)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    titlePt: 'Conteúdo exclusivo',
    titleEn: 'Exclusive content',
    descPt: 'Análises, tutoriais e bastidores do mercado que você não vai encontrar em nenhum outro lugar.',
    descEn: 'Analysis, tutorials and behind-the-scenes industry insights you won\'t find anywhere else.',
    color: '#f4b400',
    bg: 'rgba(244,180,0,0.08)',
    border: 'rgba(244,180,0,0.2)',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Community() {
  const { lang } = useLanguage();

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: 'var(--c-surface)' }}>
      {/* Top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(27,158,75,0.4), rgba(66,133,244,0.4), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background: 'radial-gradient(circle, rgba(27,158,75,0.06) 0%, transparent 65%)',
          top: -200,
          left: -150,
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-5 px-3 py-1 rounded-full"
              style={{ color: '#1b9e4b', background: 'rgba(27,158,75,0.08)', border: '1px solid rgba(27,158,75,0.2)' }}
            >
              {lang === 'pt' ? 'Comunidade AD TEC' : 'AD TEC Community'}
            </span>

            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6" style={{ color: 'var(--c-text-1)' }}>
              {lang === 'pt'
                ? <>Um espaço para quem<br />vive o mercado digital.</>
                : <>A space for those who<br />live the digital market.</>}
            </h2>

            <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--c-text-2)' }}>
              {lang === 'pt'
                ? 'Junte-se a profissionais de AdTech, marketing digital e tecnologia para discutir tendências, tirar dúvidas e compartilhar experiências. A comunidade é gratuita e aberta para todos.'
                : 'Join AdTech, digital marketing and technology professionals to discuss trends, ask questions and share experiences. The community is free and open to everyone.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://batepapo.ad.tec.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: '#1b9e4b', color: '#fff' }}
              >
                {lang === 'pt' ? 'Participar gratuitamente' : 'Join for free'}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://batepapo.ad.tec.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border transition-all hover:opacity-80"
                style={{ borderColor: 'var(--c-border)', color: 'var(--c-text-2)' }}
              >
                {lang === 'pt' ? 'Conhecer o fórum' : 'Browse the forum'}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: pillars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-4"
          >
            {PILLARS.map((p) => (
              <motion.div
                key={p.titlePt}
                variants={cardVariants}
                className="flex items-start gap-5 p-6 rounded-2xl border"
                style={{ background: 'var(--c-card)', borderColor: 'var(--c-border)' }}
              >
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ color: p.color, background: p.bg, border: `1px solid ${p.border}` }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--c-text-1)' }}>
                    {lang === 'pt' ? p.titlePt : p.titleEn}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-2)' }}>
                    {lang === 'pt' ? p.descPt : p.descEn}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Forum URL tag */}
            <div className="flex items-center gap-2 mt-2 px-1">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#1b9e4b' }} />
              <span className="text-xs font-mono" style={{ color: 'var(--c-text-3)' }}>
                batepapo.ad.tec.br
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
