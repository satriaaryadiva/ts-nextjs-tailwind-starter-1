import { siteImages } from '@/data/images';

export type PackageCategory =
  | 'wedding'
  | 'bride'
  | 'prewedding'
  | 'party'
  | 'photoshoot'
  | 'other';

export type Package = {
  slug: string;
  name: string;
  category: PackageCategory;
  description: string;
  includes: string[];
  priceFrom: number;
  image: string;
};

export const packages: Package[] = [
  {
    slug: 'akad-saja',
    name: 'Akad Saja',
    category: 'wedding',
    description:
      'Makeup & hair untuk akad pernikahan agar tampak flawless dan natural di hari istimewa.',
    includes: [
      'Makeup & hair akad',
      '1× retouch ringan',
      'Premium eyelashes & softlens',
    ],
    priceFrom: 2_500_000,
    image: siteImages.wedding1,
  },
  {
    slug: 'resepsi-saja',
    name: 'Resepsi Saja',
    category: 'wedding',
    description:
      'Tampilan glamour dan awet yang disesuaikan dengan gaun resepsi serta pencahayaan panggung.',
    includes: [
      'Makeup & hair resepsi',
      'Retouch terbatas',
      'Premium accessories placement',
    ],
    priceFrom: 3_000_000,
    image: siteImages.wedding2,
  },
  {
    slug: 'full-day-bride',
    name: 'Full Day Bride',
    category: 'bride',
    description:
      'Pendampingan makeup eksklusif seharian penuh dari akad hingga pesta resepsi selesai.',
    includes: [
      'Akad + resepsi',
      'Retouch unlimited pengantin',
      'Standby seharian penuh di lokasi',
    ],
    priceFrom: 6_500_000,
    image: siteImages.wedding1,
  },
  {
    slug: 'full-day-plus-2',
    name: 'Full Day + 2 Orang',
    category: 'bride',
    description:
      'Paket lengkap eksklusif untuk pengantin beserta dua orang terdekat (ibu / bridesmaid).',
    includes: [
      'Full day bride',
      'Makeup & hair 2 orang tambahan',
      'Retouch ringan untuk semua',
    ],
    priceFrom: 9_500_000,
    image: siteImages.wedding3,
  },
  {
    slug: 'trial-makeup',
    name: 'Trial Makeup',
    category: 'bride',
    description:
      'Sesi uji coba look makeup dan hair-styling sebelum hari pernikahan tiba agar tampilan sempurna.',
    includes: [
      '1 sesi trial lengkap',
      'Konsultasi look & warna gaun',
      'Rekomendasi skin prep',
    ],
    priceFrom: 750_000,
    image: siteImages.wedding4,
  },
  {
    slug: 'prewed-look-1',
    name: 'Look 1',
    category: 'prewedding',
    description:
      'Satu sesi makeup dan penataan rambut bertema natural glam untuk foto prewedding.',
    includes: [
      '1 makeup & hair',
      'On location standby 2 jam',
      'Softlens & custom look',
    ],
    priceFrom: 1_800_000,
    image: siteImages.prewed1,
  },
  {
    slug: 'prewed-look-2',
    name: 'Look 2',
    category: 'prewedding',
    description:
      'Dua pergantian tema makeup dan hair styling yang disesuaikan dengan tema outfit foto.',
    includes: [
      '2 tema makeup & hair',
      'Ganti outfit di lokasi',
      'On location standby 4 jam',
    ],
    priceFrom: 3_200_000,
    image: siteImages.prewed2,
  },
  {
    slug: 'prewed-half-day',
    name: 'Half Day',
    category: 'prewedding',
    description:
      'Paket makeup prewedding durasi setengah hari dengan kebebasan hingga 3 pergantian look.',
    includes: [
      '3 look / tema makeup',
      'Asisten standby seharian',
      'Unlimited retouch selama sesi',
    ],
    priceFrom: 4_500_000,
    image: siteImages.prewed2,
  },
  {
    slug: 'party-glam',
    name: 'Party Glam',
    category: 'party',
    description:
      'Makeup glamor tahan lama untuk menghadiri pesta, wisuda, prom, atau perayaan formal.',
    includes: [
      'Makeup lengkap (wajah & mata)',
      'Contour & highlight profesional',
      'Premium eyelashes',
    ],
    priceFrom: 850_000,
    image: siteImages.party1,
  },
  {
    slug: 'party-hair',
    name: 'Party + Hair',
    category: 'party',
    description:
      'Paket lengkap makeup cetar serta penataan rambut (hair styling / hijab styling) untuk acara pesta.',
    includes: [
      'Makeup pesta glamor',
      'Hair styling / hijab styling',
      'Hair accessories placement',
    ],
    priceFrom: 1_200_000,
    image: siteImages.party2,
  },
  {
    slug: 'party-group-3',
    name: 'Group 3 Orang',
    category: 'party',
    description:
      'Paket hemat makeup & hair styling untuk kelompok kecil (wisuda, bridesmaid, atau pesta keluarga).',
    includes: [
      'Makeup & hair styling 3 orang',
      'Lebih hemat dibanding satuan',
      'Selesai tepat waktu',
    ],
    priceFrom: 2_400_000,
    image: siteImages.party1,
  },
  {
    slug: 'editorial',
    name: 'Editorial / Content',
    category: 'other',
    description:
      'Makeup kreatif bertema tinggi untuk kebutuhan pemotretan majalah, iklan, atau pembuatan konten.',
    includes: [
      'Makeup editorial & kreatif',
      'Photo-ready high definition base',
      'Custom styling support',
    ],
    priceFrom: 2_000_000,
    image: siteImages.editorial1,
  },
  {
    slug: 'private-lesson',
    name: 'Private Lesson',
    category: 'other',
    description:
      'Kelas privat 2 jam mempelajari teknik makeup untuk diri sendiri (self-makeup) bersama Kak Angelia.',
    includes: [
      'Hands-on practice & feedback',
      'Tips memilih produk yang sesuai',
      'Materi skin prep & finishing',
    ],
    priceFrom: 1_500_000,
    image: siteImages.wedding4,
  },
  {
    slug: 'photoshoot-look-1',
    name: 'Look 1',
    category: 'photoshoot',
    description:
      'Makeup & hair untuk satu tema pemotretan — natural glam, flawless, dan photo-ready HD.',
    includes: [
      '1 makeup & hair look',
      'On location standby 2 jam',
      'Softlens & custom styling',
    ],
    priceFrom: 1_800_000,
    image: siteImages.editorial1,
  },
  {
    slug: 'photoshoot-look-2',
    name: 'Look 2',
    category: 'photoshoot',
    description:
      'Dua pergantian makeup & hair untuk sesi photoshoot multi-tema atau ganti outfit.',
    includes: [
      '2 tema makeup & hair',
      'Ganti outfit di lokasi',
      'On location standby 4 jam',
    ],
    priceFrom: 3_200_000,
    image: siteImages.editorial2,
  },
  {
    slug: 'photoshoot-full-session',
    name: 'Full Session',
    category: 'photoshoot',
    description:
      'Paket photoshoot setengah hari dengan hingga 3 look — ideal untuk content creator, branding, dan portofolio.',
    includes: [
      '3 look / tema makeup & hair',
      'Retouch unlimited selama sesi',
      'Standby & asisten on location',
    ],
    priceFrom: 4_500_000,
    image: siteImages.prewed2,
  },
];

export const addons = [
  { slug: 'early-call', name: 'Early Call', price: 300_000 },
  { slug: 'extra-person', name: 'Extra Person', price: 600_000 },
  { slug: 'second-look', name: 'Second Look', price: 800_000 },
  {
    slug: 'transport-outside-medan',
    name: 'Transport Luar Medan',
    price: 500_000,
  },
] as const;

export const categoryLabels: Record<PackageCategory, string> = {
  wedding: 'Wedding',
  bride: 'Bride',
  prewedding: 'Prewedding',
  party: 'Party',
  photoshoot: 'Photoshoot',
  other: 'Lainnya',
};

export function formatRupiah(amount: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getPackageBySlug(slug: string) {
  return packages.find((p) => p.slug === slug);
}
