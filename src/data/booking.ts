import { addons, formatRupiah, getPackageBySlug, packages } from './packages';

export type EventType =
  | 'wedding'
  | 'prewedding'
  | 'party'
  | 'kursus'
  | 'editorial'
  | 'other';

export type StyleType =
  | 'natural'
  | 'soft-glam'
  | 'bold'
  | 'traditional'
  | 'by-reference';

export type BookingState = {
  step: number;
  eventType: EventType | '';
  date: string;
  city: string;
  province: string;
  venue: string;
  packageSlug: string;
  addons: string[];
  style: StyleType | '';
  referenceUrl: string;
  name: string;
  phone: string;
  instagram: string;
  notes: string;
};

export const initialBookingState: BookingState = {
  step: 1,
  eventType: '',
  date: '',
  city: '',
  province: '',
  venue: '',
  packageSlug: '',
  addons: [],
  style: '',
  referenceUrl: '',
  name: '',
  phone: '',
  instagram: '',
  notes: '',
};

export const eventTypeLabels: Record<EventType, string> = {
  wedding: 'Pernikahan / Wedding',
  prewedding: 'Prewedding / Engagement',
  party: 'Pesta / Party',
  kursus: 'Kursus Makeup',
  editorial: 'Editorial / Content',
  other: 'Lainnya',
};

export const styleLabels: Record<StyleType, string> = {
  natural: 'Natural / Fresh',
  'soft-glam': 'Soft Glam',
  bold: 'Bold Glam',
  traditional: 'Adat / Traditional',
  'by-reference': 'Sesuai Referensi',
};

export const DRAFT_KEY = 'angelia_booking_draft';

export function calculateEstimate(state: BookingState): number {
  const pkg = getPackageBySlug(state.packageSlug);
  let total = pkg?.priceFrom ?? 0;
  for (const slug of state.addons) {
    const addon = addons.find((a) => a.slug === slug);
    if (addon) total += addon.price;
  }
  return total;
}

export function normalizePhone(input: string): string {
  const digits = input.replace(/\D/g, '');
  if (digits.startsWith('0')) return `62${digits.slice(1)}`;
  if (digits.startsWith('62')) return digits;
  return `62${digits}`;
}

export function buildWhatsAppMessage(
  state: BookingState,
  waDisplayPhone: string,
): string {
  const pkg = getPackageBySlug(state.packageSlug);
  const addonLines = state.addons
    .map((slug) => addons.find((a) => a.slug === slug)?.name)
    .filter(Boolean);
  const estimate = calculateEstimate(state);
  const dateFormatted = state.date
    ? new Date(state.date + 'T12:00:00').toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '-';

  return `Halo Angelia Beauty MUA 👋

Saya ingin konsultasi *booking* dengan detail berikut:

📌 *Jenis acara:* ${state.eventType ? eventTypeLabels[state.eventType as EventType] : '-'}
📅 *Tanggal:* ${dateFormatted}
📍 *Kota:* ${state.city || '-'}${state.province ? `, ${state.province}` : ''}
🏛️ *Venue:* ${state.venue || '-'}

📦 *Paket:* ${pkg?.name ?? '-'}
➕ *Add-on:* ${addonLines.length ? addonLines.join(', ') : 'Tidak ada'}

🎨 *Style:* ${state.style ? styleLabels[state.style as StyleType] : '-'}
🔗 *Referensi:* ${state.referenceUrl || '-'}

👤 *Nama:* ${state.name}
📱 *WhatsApp:* ${waDisplayPhone}
📸 *Instagram:* ${state.instagram || '-'}

📝 *Catatan:*
${state.notes || '-'}

💰 *Estimasi (sementara):* ${formatRupiah(estimate)}
*(Harga final setelah konfirmasi & kuota tanggal)*

Terima kasih! Saya menunggu konfirmasinya.`;
}

export function getPackagesForEvent(eventType: EventType | '') {
  if (!eventType) return packages;
  if (eventType === 'kursus')
    return packages.filter((p) => p.category === 'kursus');
  if (eventType === 'wedding')
    return packages.filter((p) => p.category === 'wedding');
  if (eventType === 'prewedding')
    return packages.filter((p) => p.category === 'prewedding');
  if (eventType === 'party')
    return packages.filter((p) => p.category === 'party');
  return packages.filter((p) => p.category === 'other');
}

export const provinces = [
  'Sumatera Utara',
  'DKI Jakarta',
  'Jawa Barat',
  'Jawa Tengah',
  'Jawa Timur',
  'Bali',
  'Sumatera Barat',
  'Riau',
  'Kepulauan Riau',
  'Lampung',
  'Kalimantan Timur',
  'Sulawesi Selatan',
  'Lainnya',
];
