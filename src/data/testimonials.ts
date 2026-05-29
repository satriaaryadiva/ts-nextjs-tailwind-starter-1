export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  handle: string;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Alhamdulillah hasilnya sesuai bayangan — ringan, awet sampai malam, dan Kak Angelia ramah banget dari trial sampai hari-H. Banyak tamu yang bilang aku glowing!',
    author: 'Rina',
    handle: '@rina_brides',
    image: 'https://images.unsplash.com/photo-1571332283201-99c82a8b3046?w=600&q=80',
  },
  {
    id: '2',
    quote:
      'Dari Medan ke lokasi di luar kota tetap tenang, tim datang on time, makeup tahan panas dan foto outdoor. Puas banget!',
    author: 'Dewi',
    handle: '@dewi_wedding',
    image: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80',
  },
  {
    id: '3',
    quote:
      'Look natural glam-nya pas banget di wajahku yang berjerawat. Nggak cakey, nggak berat. Sudah recommend ke teman-teman.',
    author: 'Sari',
    handle: '@sari_makeup',
    image: 'https://images.unsplash.com/photo-1675107360180-eee458d9dfdf?w=600&q=80',
  },
  {
    id: '4',
    quote:
      'Trial-nya membantu banget, jadi di hari wedding nggak panik. Tim on time, komunikatif.',
    author: 'Maya',
    handle: '@maya_n',
  },
  {
    id: '5',
    quote:
      'Makeup tahan dari pagi sampai malam resepsi. Suami sampai bilang "kok kayak artis".',
    author: 'Lisa',
    handle: '@lisa_medan',
  },
  {
    id: '6',
    quote:
      'Booking dari luar Medan tetap smooth, transport jelas dari awal.',
    author: 'Putri',
    handle: '@putri_sumut',
  },
  {
    id: '7',
    quote:
      'Seneng banget bisa pakai jasa Angelia, udah ngincer dari lama. Makeupnya ringan dan natural!',
    author: 'Fitri',
    handle: '@fitri_bridal',
  },
  {
    id: '8',
    quote:
      'Hasilnya bikin pangling sesuai ekspektasi, sampe beres acara makeup masih on point.',
    author: 'Ilfa',
    handle: '@ilfa_wedding',
  },
];
