import Image from 'next/image';

import Button from '@/components/ui/Button';
import { siteConfig } from '@/constant/config';

export default function Hero() {
  return (
    <section className='relative min-h-[85vh] overflow-hidden'>
      <Image
        src='https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80'
        alt='Wedding makeup by Angelia Beauty MUA'
        fill
        priority
        className='object-cover object-center'
        sizes='100vw'
      />
      <div className='absolute inset-0 bg-black/50' />
      <div className='relative layout flex min-h-[85vh] flex-col items-center justify-center py-20 text-center text-cream'>
        <p className='mb-4 text-xs tracking-[0.35em] text-cream/80 uppercase'>
          {siteConfig.hashtag}
        </p>
        <h1 className='font-display max-w-4xl text-4xl leading-[1.1] text-balance md:text-5xl lg:text-6xl'>
          Wujudkan Hari Impianmu dengan Makeup yang Bercerita
        </h1>
        <p className='mt-4 max-w-xl text-sm tracking-[0.2em] text-cream/90 uppercase md:text-base'>
          Let your moment shine — Medan · Seluruh Indonesia
        </p>
        <div className='mt-10 flex flex-wrap justify-center gap-4'>
          <Button href='/booking' variant='primary' size='lg'>
            Booking Sekarang
          </Button>
          <Button
            href='/portofolio'
            variant='outline'
            size='lg'
            className='border-cream text-cream hover:bg-cream hover:text-charcoal'
          >
            Lihat Portofolio
          </Button>
        </div>
      </div>
    </section>
  );
}
