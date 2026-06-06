export type TestimonialEvent =
  | 'Wedding'
  | 'Prewedding'
  | 'Party'
  | 'Photoshoot';

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  handle: string;
  event: TestimonialEvent;
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Alhamdulillah hasilnya sesuai bayangan — ringan, awet sampai malam, dan Kak Angelia ramah banget dari trial sampai hari-H. Banyak tamu yang bilang aku glowing!',
    author: 'Rina',
    handle: '@rina_brides',
    event: 'Wedding',
  },
  {
    id: '2',
    quote:
      'Dari Medan ke lokasi di luar kota tetap tenang, tim datang on time, makeup tahan panas dan foto outdoor. Puas banget!',
    author: 'Dewi',
    handle: '@dewi_wedding',
    event: 'Prewedding',
  },
  {
    id: '3',
    quote:
      'Look natural glam-nya pas banget di wajahku yang berjerawat. Nggak cakey, nggak berat. Sudah recommend ke teman-teman.',
    author: 'Sari',
    handle: '@sari_makeup',
    event: 'Wedding',
  },
  {
    id: '4',
    quote:
      'Trial-nya membantu banget, jadi di hari wedding nggak panik. Tim on time, komunikatif.',
    author: 'Maya',
    handle: '@maya_n',
    event: 'Wedding',
  },
  {
    id: '5',
    quote:
      'Makeup tahan dari pagi sampai malam resepsi. Suami sampai bilang "kok kayak artis".',
    author: 'Lisa',
    handle: '@lisa_medan',
    event: 'Wedding',
  },
  {
    id: '6',
    quote: 'Booking dari luar Medan tetap smooth, transport jelas dari awal.',
    author: 'Putri',
    handle: '@putri_sumut',
    event: 'Prewedding',
  },
  {
    id: '7',
    quote:
      'Seneng banget bisa pakai jasa Angelia, udah ngincer dari lama. Makeupnya ringan dan natural!',
    author: 'Fitri',
    handle: '@fitri_bridal',
    event: 'Wedding',
  },
  {
    id: '8',
    quote:
      'Hasilnya bikin pangling sesuai ekspektasi, sampe beres acara makeup masih on point.',
    author: 'Ilfa',
    handle: '@ilfa_wedding',
    event: 'Party',
  },
];

export function getInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}
