/** Semua aset foto lokal — public/images */
export const siteImages = {
  logo: '/images/logo.png',
  logoIcon: '/images/logo-icon.png',
  hero: '/images/citra2.jpeg',
  about: '/images/citra2.jpeg',
  whyMe: '/images/IMG_1213.JPG.webp',

  wedding1: '/images/IMG_1037.webp',
  wedding2: '/images/IMG_1213.JPG.webp',
  wedding3: '/images/IMG_1035.webp',
  wedding4: '/images/makeup-3.webp',

  prewed1: '/images/IMG_0468.JPG.webp',
  prewed2: '/images/IMG_0469.JPG.webp',

  party1: '/images/IMG_0472.JPG.webp',
  party2: '/images/IMG_0473.JPG.webp',

  editorial1: '/images/IMG_0990.webp',
  editorial2: '/images/makeup-2.webp',

  natural1: '/images/natural-glam-1.webp',
  natural2: '/images/natural-glam-2.webp',
  naturalCollage: '/images/natural-collage.webp',

  video: '/video/preview.mp4',
  video2: '/video/whyme.mp4',
  videos: {
    preview: '/video/preview.mp4',
    whyMe: '/video/whyme.mp4',
    photoshoot: '/video/photoshoot.webm',
    behind: '/video/behind.mp4',
  },
  services: {
    wedding: '/images/IMG_1037.webp',
    prewedding: '/images/IMG_0468.JPG.webp',
    party: '/images/IMG_0472.JPG.webp',
    photoshoot: '/images/makeup-3.webp',
  },
} as const;

/** Urutan untuk rotasi paket / testimoni */
export const galleryImages = [
  siteImages.naturalCollage,
  siteImages.natural1,
  siteImages.natural2,
  siteImages.wedding1,
  siteImages.wedding2,
  siteImages.wedding3,
  siteImages.prewed1,
  siteImages.prewed2,
  siteImages.party1,
  siteImages.party2,
  siteImages.editorial1,
  siteImages.editorial2,
  siteImages.wedding4,
] as const;

export function galleryImageAt(index: number) {
  return galleryImages[index % galleryImages.length];
}
