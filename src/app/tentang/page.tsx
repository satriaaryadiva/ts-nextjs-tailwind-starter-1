import type { Metadata } from 'next';
import Image from 'next/image';

import CtaBanner from '@/components/shared/CtaBanner';
import PageHero from '@/components/shared/PageHero';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/constant/config';
import { siteImages } from '@/data/images';

export const metadata: Metadata = {
  title: 'Tentang',
  description:
    'Kenalan dengan Angelia — makeup & hair artist based in Medan, melayani seluruh Indonesia.',
};

const philosophy = [
  'Skin-first: kulit sehat di atas coverage berlebihan',
  'Photo-ready: tahan flash & lighting indoor/outdoor',
  'Natural glam: cantik dari dekat maupun di layar',
  'Hygiene & produk premium untuk kulit sensitif',
];

export default function TentangPage() {
  return (
    <>
      <PageHero title='Tentang Angelia Beauty MUA' />
      <div className='layout py-12 md:py-20'>
        <div className='grid items-start gap-12 lg:grid-cols-2'>
          <div className='relative aspect-4/5 overflow-hidden rounded-sm'>
            <Image
              src={siteImages.about}
              alt='Angelia Beauty MUA — makeup artist Medan'
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 50vw'
            />
          </div>
          <div>
            <p className='text-charcoal leading-relaxed'>
              Halo, aku Angelia — makeup & hair artist based di Medan yang
              percaya setiap wanita layak tampil versi terbaiknya tanpa
              kehilangan jati diri. Sejak tahun pertama aku pegang brush, yang
              paling aku suka bukan hanya hasil di kamera, tapi ekspresi
              &ldquo;ini aku, tapi lebih percaya diri&rdquo; di cermin.
            </p>
            <p className='text-charcoal-light mt-6 leading-relaxed'>
              Dari wedding di rumah adat sampai prewedding di pinggir danau, aku
              belajar bahwa makeup yang bagus bukan yang paling tebal — tapi
              yang <strong>tahan cerita</strong>: peluh, air mata bahagia,
              flash, dan pelukan keluarga. Itu yang kubawa di setiap klien, di
              kota manapun di Indonesia.
            </p>
            <div className='mt-10 grid grid-cols-3 gap-4 border-y border-cream-dark py-8 text-center'>
              <div>
                <p className='font-display text-3xl text-charcoal'>500+</p>
                <p className='text-charcoal-light mt-1 text-xs'>Klien</p>
              </div>
              <div>
                <p className='font-display text-3xl text-charcoal'>5+</p>
                <p className='text-charcoal-light mt-1 text-xs'>Tahun</p>
              </div>
              <div>
                <p className='font-display text-3xl text-charcoal'>🇮🇩</p>
                <p className='text-charcoal-light mt-1 text-xs'>
                  Seluruh Indonesia
                </p>
              </div>
            </div>
            <h2 className='font-display mt-10 text-xl text-charcoal'>
              Filosofi
            </h2>
            <ul className='mt-4 space-y-2'>
              {philosophy.map((item) => (
                <li
                  key={item}
                  className='text-charcoal-light flex gap-2 text-sm'
                >
                  <span className='text-rose'>•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className='text-charcoal-light mt-6 text-sm'>
              Base: {siteConfig.baseCity}, {siteConfig.baseRegion} ·{' '}
              {siteConfig.hashtag}
            </p>
            <div className='mt-8 flex flex-wrap gap-4'>
              <Button href='/portofolio' variant='outline'>
                Lihat Portofolio
              </Button>
              <Button href='/booking'>Booking Sekarang</Button>
            </div>
          </div>
        </div>
      </div>
      <CtaBanner />
    </>
  );
}
