export type PortfolioCategory =
  | 'wedding'
  | 'prewedding'
  | 'party'
  | 'editorial';

export type PortfolioItem = {
  id: string;
  src: string;
  alt: string;
  category: PortfolioCategory;
  caption: string;
  type?: 'image' | 'video';
};

export const portfolioCategories: { slug: PortfolioCategory; label: string }[] =
  [
    { slug: 'wedding', label: 'Wedding' },
    { slug: 'prewedding', label: 'Prewedding' },
    { slug: 'party', label: 'Party' },
    { slug: 'editorial', label: 'Editorial' },
  ];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1661326352695-6cbe1ff74ee9?w=800&q=80',
    alt: 'Wedding makeup natural glam',
    category: 'wedding',
    caption: 'Natural glam · Wedding · Medan, 2025',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1571332283201-99c82a8b3046?w=800&q=80',
    alt: 'Bride portrait',
    category: 'wedding',
    caption: 'Soft glam · Wedding · Medan, 2025',
  },
  {
    id: '3',
    src: '/video/preview.mp4',
    alt: 'Prewedding couple video',
    category: 'prewedding',
    caption: 'Soft glam · Prewedding · Lake Toba, 2024',
    type: 'video',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1582576192532-06353147fcbf?w=800&q=80',
    alt: 'Prewedding outdoor',
    category: 'prewedding',
    caption: 'Natural · Prewedding · Bali, 2024',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1612883695890-f2ab22e65215?w=800&q=80',
    alt: 'Party makeup',
    category: 'party',
    caption: 'Party glow · Birthday · Jakarta, 2025',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1675107360180-eee458d9dfdf?w=800&q=80',
    alt: 'Editorial portrait',
    category: 'editorial',
    caption: 'Editorial · Content · Medan, 2025',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1646770965835-4547b3ef13b0?w=800&q=80',
    alt: 'Wedding ceremony',
    category: 'wedding',
    caption: 'Traditional touch · Wedding · Medan, 2024',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80',
    alt: 'Bridal getting ready',
    category: 'wedding',
    caption: 'Getting ready · Wedding · Medan, 2025',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1648671095177-d00c1f6264e9?w=800&q=80',
    alt: 'Engagement session',
    category: 'prewedding',
    caption: 'Engagement · Medan, 2025',
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1661340878961-9335510adfa3?w=800&q=80',
    alt: 'Party event',
    category: 'party',
    caption: 'Glam night · Party · Surabaya, 2024',
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=800&q=80',
    alt: 'Beauty editorial',
    category: 'editorial',
    caption: 'Beauty shot · Editorial · 2025',
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1642988576543-32aad4e26d5d?w=800&q=80',
    alt: 'Wedding reception',
    category: 'wedding',
    caption: 'Reception glam · Medan, 2025',
  },
];
