/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Arquivos estáticos em public/ são servidos por caminho exato: public/assinatura/index.html
  // responde em /assinatura/index.html, mas não em /assinatura. O rewrite cobre a URL limpa.
  async rewrites() {
    return [
      { source: '/assinatura', destination: '/assinatura/index.html' },
    ];
  },
};

module.exports = nextConfig;
