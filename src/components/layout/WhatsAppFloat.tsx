import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

import { siteConfig } from '@/constant/config';

export default function WhatsAppFloat() {
  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Halo Angelia Beauty MUA, saya ingin konsultasi makeup.')}`;

  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 md:right-6 md:bottom-6'
      aria-label='Chat WhatsApp'
    >
      <MessageCircle size={28} />
    </Link>
  );
}
