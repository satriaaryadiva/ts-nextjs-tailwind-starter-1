const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER ?? '6282355165288';

export const siteConfig = {
  title: 'Angelia Beauty MUA',
  description:
    'Makeup & hair artist profesional based in Medan. Melayani wedding, prewedding, party, dan photoshoot di seluruh Indonesia.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://angeliabeauty-mua.vercel.app',
  instagram: 'https://www.instagram.com/angeliabeauty_mua/',
  instagramHandle: '@angeliabeauty_mua',
  whatsapp: waNumber,
  whatsappDisplay: '+62 823-5516-5288',
  email: 'hello@angeliabeauty.id',
  baseCity: 'Medan',
  baseRegion: 'Sumatera Utara',
  hashtag: '#AngeliaBeautyLook',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portofolio', label: 'Portofolio' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/kontak', label: 'Kontak' },
] as const;
