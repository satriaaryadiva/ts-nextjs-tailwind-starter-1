import type { Metadata } from 'next';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

import PageHero from '@/components/shared/PageHero';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  title: 'Kontak',
  description:
    'Hubungi Angelia Beauty MUA via WhatsApp, Instagram, atau email.',
};

export default function KontakPage() {
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Halo Angelia Beauty MUA, saya ingin konsultasi.')}`;

  return (
    <>
      <PageHero
        title='Hubungi Kami'
        subtitle='Pilih cara tercepat — atau gunakan Booking untuk kirim detail acara otomatis ke WhatsApp.'
      />
      <div className='layout py-12 md:py-20'>
        <div className='mx-auto grid max-w-3xl gap-8'>
          <a
            href={waHref}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-4 rounded-sm border border-cream-dark bg-white p-6 transition-shadow hover:shadow-md'
          >
            <MessageCircle className='text-[#25D366]' size={32} />
            <div>
              <p className='font-medium text-charcoal'>WhatsApp</p>
              <p className='text-charcoal-light text-sm'>
                +{siteConfig.whatsapp} (placeholder)
              </p>
            </div>
          </a>
          <a
            href={siteConfig.instagram}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-4 rounded-sm border border-cream-dark bg-white p-6 transition-shadow hover:shadow-md'
          >
            <div>
              <p className='font-medium text-charcoal'>Instagram</p>
              <p className='text-charcoal-light text-sm'>
                {siteConfig.instagramHandle}
              </p>
            </div>
          </a>
          <div className='flex items-center gap-4 rounded-sm border border-cream-dark bg-white p-6'>
            <Mail className='text-rose-dark' size={32} />
            <div>
              <p className='font-medium text-charcoal'>Email</p>
              <p className='text-charcoal-light text-sm'>{siteConfig.email}</p>
            </div>
          </div>
          <div className='flex items-start gap-4 rounded-sm border border-cream-dark bg-white p-6'>
            <MapPin className='text-rose-dark shrink-0' size={32} />
            <div>
              <p className='font-medium text-charcoal'>Base Studio</p>
              <p className='text-charcoal-light mt-1 text-sm'>
                {siteConfig.baseCity}, {siteConfig.baseRegion}, Indonesia
              </p>
              <p className='text-charcoal-light mt-2 text-sm'>
                Jam respon: Setiap hari 09.00–21.00 WIB — balasan maksimal 24
                jam.
              </p>
            </div>
          </div>
        </div>
        <div className='mt-12 text-center'>
          <Button href='/booking' size='lg'>
            Mulai Booking
          </Button>
        </div>
      </div>
    </>
  );
}
