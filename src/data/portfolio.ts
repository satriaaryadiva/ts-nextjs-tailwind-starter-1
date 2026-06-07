import { siteImages } from '@/data/images';

export type PortfolioCategory =
  | 'wedding'
  | 'prewedding'
  | 'party'
  | 'photoshoot'
  | 'editorial'
  | 'sister-of-bride';

export type PortfolioItem = {
  id: string;
  src: string;
  alt: string;
  category: PortfolioCategory;
  caption: string;
  type: 'image' | 'video';
  featured?: boolean;
};

export const portfolioCategories: { slug: PortfolioCategory; label: string }[] =
  [
    { slug: 'wedding', label: 'Wedding' },
    { slug: 'sister-of-bride', label: 'Sister of Bride' },
    { slug: 'prewedding', label: 'Prewedding' },
    { slug: 'party', label: 'Party' },
    { slug: 'photoshoot', label: 'Photoshoot' },
    { slug: 'editorial', label: 'Editorial' },
  ];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'v-photoshoot',
    src: siteImages.videos.photoshoot,
    alt: 'Video sesi photoshoot — Angelia Beauty MUA',
    category: 'photoshoot',
    caption: 'Photoshoot session · Natural glam',
    type: 'video',
    featured: true,
  },
  {
    id: 'v-sister-bride',
    src: siteImages.videos.sisterOfBride,
    alt: 'Video sister of bride — Angelia Beauty MUA',
    category: 'sister-of-bride',
    caption: 'Sister of Bride · Soft glam · Medan',
    type: 'video',
    featured: true,
  },
  {
    id: 'sob-1',
    src: siteImages.sisterOfBride,
    alt: 'Rias sister of bride kebaya — Angelia Beauty MUA',
    category: 'sister-of-bride',
    caption: 'Sister of Bride · Kebaya look · Medan',
    type: 'image',
    featured: true,
  },
  {
    id: 'n-collage',
    src: siteImages.naturalCollage,
    alt: 'Koleksi natural glam look — Angelia Beauty MUA',
    category: 'photoshoot',
    caption: 'Natural glam · Photoshoot · Medan',
    type: 'image',
    featured: true,
  },
  {
    id: 'n-1',
    src: siteImages.natural1,
    alt: 'Portrait natural glam makeup',
    category: 'photoshoot',
    caption: 'Soft glam · Natural · Medan',
    type: 'image',
    featured: true,
  },
  {
    id: 'v-whyme',
    src: siteImages.videos.whyMe,
    alt: 'Video behind the scene — Angelia Beauty MUA',
    category: 'editorial',
    caption: 'Behind the scene · Angelia Beauty',
    type: 'video',
    featured: true,
  },
  {
    id: 'v-behind',
    src: siteImages.videos.behind,
    alt: 'Video behind the scene makeup — Angelia Beauty MUA',
    category: 'editorial',
    caption: 'Behind the scene · Proses makeup',
    type: 'video',
    featured: true,
  },
  {
    id: 'hero-citra',
    src: siteImages.hero,
    alt: 'Portrait makeup artist look — Angelia Beauty MUA',
    category: 'editorial',
    caption: 'Signature look · Portrait · Medan',
    type: 'image',
    featured: true,
  },
  {
    id: 'n-2',
    src: siteImages.natural2,
    alt: 'Close-up riasan natural elegan',
    category: 'photoshoot',
    caption: 'Natural glam · Portrait · Medan',
    type: 'image',
    featured: true,
  },
  {
    id: 'v-preview',
    src: siteImages.videos.preview,
    alt: 'Video preview makeup — Angelia Beauty MUA',
    category: 'editorial',
    caption: 'Preview · Makeup transformation',
    type: 'video',
    featured: true,
  },
  {
    id: 'w-1',
    src: siteImages.wedding1,
    alt: 'Makeup pengantin natural glam — Angelia Beauty MUA',
    category: 'wedding',
    caption: 'Natural glam · Wedding · Medan',
    type: 'image',
    featured: true,
  },
  {
    id: 'w-2',
    src: siteImages.wedding2,
    alt: 'Portrait pengantin soft glam',
    category: 'wedding',
    caption: 'Soft glam · Wedding · Medan',
    type: 'image',
  },
  {
    id: 'w-3',
    src: siteImages.wedding3,
    alt: 'Rias pengantin hari-H',
    category: 'wedding',
    caption: 'Bridal look · Wedding · Medan',
    type: 'image',
  },
  {
    id: 'w-4',
    src: siteImages.wedding4,
    alt: 'Detail makeup pengantin',
    category: 'wedding',
    caption: 'Detail look · Wedding · Medan',
    type: 'image',
  },
  {
    id: 'pw-1',
    src: siteImages.prewed1,
    alt: 'Makeup prewedding outdoor',
    category: 'prewedding',
    caption: 'Natural · Prewedding · Medan',
    type: 'image',
  },
  {
    id: 'pw-2',
    src: siteImages.prewed2,
    alt: 'Look prewedding engagement',
    category: 'prewedding',
    caption: 'Soft glam · Engagement · Medan',
    type: 'image',
  },
  {
    id: 'p-1',
    src: siteImages.party1,
    alt: 'Party glam makeup',
    category: 'party',
    caption: 'Party glow · Event · Medan',
    type: 'image',
  },
  {
    id: 'p-2',
    src: siteImages.party2,
    alt: 'Makeup pesta elegan',
    category: 'party',
    caption: 'Glam night · Party · Medan',
    type: 'image',
  },
  {
    id: 'e-1',
    src: siteImages.editorial1,
    alt: 'Beauty editorial portrait',
    category: 'editorial',
    caption: 'Beauty shot · Editorial',
    type: 'image',
  },
  {
    id: 'e-2',
    src: siteImages.editorial2,
    alt: 'Editorial makeup portrait',
    category: 'editorial',
    caption: 'Editorial · Beauty · Medan',
    type: 'image',
  },
  {
    id: 'about',
    src: siteImages.about,
    alt: 'Makeup artist at work — Angelia Beauty MUA',
    category: 'editorial',
    caption: 'At work · Angelia Beauty',
    type: 'image',
  },
];

export function getPreviewItems(limit = 8) {
  return portfolioItems.slice(0, limit);
}

export function getCategoryLabel(slug: PortfolioCategory) {
  return portfolioCategories.find((c) => c.slug === slug)?.label ?? slug;
}
