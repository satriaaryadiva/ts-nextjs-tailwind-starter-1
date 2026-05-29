const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER ?? '6283867691938';

export const siteConfig = {
  title: 'Angelia Beauty MUA',
  description:
    'Makeup & hair artist profesional based in Medan. Melayani wedding, prewedding, party, dan kursus makeup di seluruh Indonesia.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://angeliabeauty-mua.vercel.app',
  instagram: 'https://instagram.com/angeliabeauty_mua',
  instagramHandle: '@angeliabeauty_mua',
  whatsapp: waNumber,
  email: 'hello@angeliabeauty.id',
  baseCity: 'Medan',
  baseRegion: 'Sumatera Utara',
  hashtag: '#AngeliaBeautyLook',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portofolio', label: 'Portofolio' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/kursus', label: 'Kursus' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/kontak', label: 'Kontak' },
] as const;
