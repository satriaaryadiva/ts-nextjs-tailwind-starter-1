export type PackageCategory =
  | 'wedding'
  | 'prewedding'
  | 'party'
  | 'other'
  | 'kursus';

export type Package = {
  slug: string;
  name: string;
  category: PackageCategory;
  description: string;
  includes: string[];
  priceFrom: number;
};

export const packages: Package[] = [
  {
    slug: 'akad-saja',
    name: 'Akad Saja',
    category: 'wedding',
    description: 'Makeup & hair untuk akad',
    includes: ['Makeup & hair akad', '1× retouch ringan'],
    priceFrom: 2_500_000,
  },
  {
    slug: 'resepsi-saja',
    name: 'Resepsi Saja',
    category: 'wedding',
    description: 'Makeup & hair untuk resepsi',
    includes: ['Makeup & hair resepsi', 'Retouch terbatas'],
    priceFrom: 3_000_000,
  },
  {
    slug: 'full-day-bride',
    name: 'Full Day Bride',
    category: 'wedding',
    description: 'Paket lengkap pengantin',
    includes: ['Akad + resepsi', 'Retouch unlimited pengantin'],
    priceFrom: 6_500_000,
  },
  {
    slug: 'full-day-plus-2',
    name: 'Full Day + 2 Orang',
    category: 'wedding',
    description: 'Pengantin + 2 orang terdekat',
    includes: ['Full day bride', 'Makeup 2 orang tambahan'],
    priceFrom: 9_500_000,
  },
  {
    slug: 'trial-makeup',
    name: 'Trial Makeup',
    category: 'wedding',
    description: 'Sesi uji look sebelum hari-H',
    includes: ['1 sesi trial', 'Konsultasi look'],
    priceFrom: 750_000,
  },
  {
    slug: 'prewed-look-1',
    name: 'Look 1',
    category: 'prewedding',
    description: 'Prewedding single look',
    includes: ['1 makeup & hair', 'On location'],
    priceFrom: 1_800_000,
  },
  {
    slug: 'prewed-look-2',
    name: 'Look 2',
    category: 'prewedding',
    description: 'Dua pergantian look',
    includes: ['2 makeup & hair', 'Ganti outfit'],
    priceFrom: 3_200_000,
  },
  {
    slug: 'prewed-half-day',
    name: 'Half Day',
    category: 'prewedding',
    description: 'Hingga 3 look',
    includes: ['3 look', 'Asisten'],
    priceFrom: 4_500_000,
  },
  {
    slug: 'party-glam',
    name: 'Party Glam',
    category: 'party',
    description: 'Makeup pesta',
    includes: ['Makeup lengkap'],
    priceFrom: 850_000,
  },
  {
    slug: 'party-hair',
    name: 'Party + Hair',
    category: 'party',
    description: 'Makeup & hair pesta',
    includes: ['Makeup & hair styling'],
    priceFrom: 1_200_000,
  },
  {
    slug: 'party-group-3',
    name: 'Group 3 Orang',
    category: 'party',
    description: 'Paket grup',
    includes: ['Makeup 3 orang'],
    priceFrom: 2_400_000,
  },
  {
    slug: 'editorial',
    name: 'Editorial / Content',
    category: 'other',
    description: 'Per look',
    includes: ['Makeup editorial', 'Photo-ready'],
    priceFrom: 2_000_000,
  },
  {
    slug: 'private-lesson',
    name: 'Private Lesson',
    category: 'other',
    description: '2 jam privat',
    includes: ['Hands-on', 'Tips produk'],
    priceFrom: 1_500_000,
  },
  {
    slug: 'kursus-private',
    name: 'Private 1-on-1',
    category: 'kursus',
    description: '4 pertemuan',
    includes: ['Kurikulum personal', 'Sertifikat'],
    priceFrom: 4_500_000,
  },
  {
    slug: 'kursus-semi',
    name: 'Semi-Private',
    category: 'kursus',
    description: '2–3 orang',
    includes: ['4 pertemuan', 'Praktik intensif'],
    priceFrom: 2_800_000,
  },
  {
    slug: 'kursus-basic',
    name: 'Basic Class',
    category: 'kursus',
    description: '1 hari',
    includes: ['Skin prep', 'Base, eyes, lips'],
    priceFrom: 1_200_000,
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
  prewedding: 'Prewedding & Engagement',
  party: 'Party & Event',
  other: 'Lainnya',
  kursus: 'Kursus Makeup',
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
