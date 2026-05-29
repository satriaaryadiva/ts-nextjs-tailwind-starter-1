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
    image:
      'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=800&q=80',
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
    image:
      'https://images.unsplash.com/photo-1591555200985-ac5d2bf6101c?w=800&q=80',
  },
  {
    slug: 'full-day-bride',
    name: 'Full Day Bride',
    category: 'wedding',
    description:
      'Pendampingan makeup eksklusif seharian penuh dari akad hingga pesta resepsi selesai.',
    includes: [
      'Akad + resepsi',
      'Retouch unlimited pengantin',
      'Standby seharian penuh di lokasi',
    ],
    priceFrom: 6_500_000,
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
  },
  {
    slug: 'full-day-plus-2',
    name: 'Full Day + 2 Orang',
    category: 'wedding',
    description:
      'Paket lengkap eksklusif untuk pengantin beserta dua orang terdekat (ibu / bridesmaid).',
    includes: [
      'Full day bride',
      'Makeup & hair 2 orang tambahan',
      'Retouch ringan untuk semua',
    ],
    priceFrom: 9_500_000,
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
  },
  {
    slug: 'trial-makeup',
    name: 'Trial Makeup',
    category: 'wedding',
    description:
      'Sesi uji coba look makeup dan hair-styling sebelum hari pernikahan tiba agar tampilan sempurna.',
    includes: [
      '1 sesi trial lengkap',
      'Konsultasi look & warna gaun',
      'Rekomendasi skin prep',
    ],
    priceFrom: 750_000,
    image:
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80',
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
    image:
      'https://images.unsplash.com/photo-1616166330003-8e550d199b26?w=800&q=80',
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
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
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
    image:
      'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=800&q=80',
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
    image:
      'https://images.unsplash.com/photo-1522337094133-f37f5179a1be?w=800&q=80',
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
    image:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80',
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
    image:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&q=80',
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
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
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
    image:
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80',
  },
  {
    slug: 'kursus-private',
    name: 'Private 1-on-1',
    category: 'kursus',
    description:
      'Kelas intensif 4 pertemuan untuk berkarir profesional sebagai MUA (Makeup Artist) handal.',
    includes: [
      'Kurikulum personal dari basic',
      'Sertifikat kelulusan kelas',
      'Penyediaan model & alat dibantu',
    ],
    priceFrom: 4_500_000,
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
  },
  {
    slug: 'kursus-semi',
    name: 'Semi-Private',
    category: 'kursus',
    description:
      'Kelas belajar makeup bersama dalam kelompok kecil (2-3 orang) dengan bimbingan personal.',
    includes: [
      '4 pertemuan materi intensif',
      'Praktik langsung & evaluasi',
      'Networking & sertifikat',
    ],
    priceFrom: 2_800_000,
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
  },
  {
    slug: 'kursus-basic',
    name: 'Basic Class',
    category: 'kursus',
    description:
      'Kelas dasar 1 hari untuk mempelajari langkah-langkah dasar makeup harian agar rapi.',
    includes: [
      'Skin preparation basic',
      'Teknik base, eyes, and lips',
      'Tanya jawab produk favorit',
    ],
    priceFrom: 1_200_000,
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
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
