import type { Metadata } from 'next';

import Gallery from '@/components/portofolio/Gallery';
import GalleryHero from '@/components/portofolio/GalleryHero';
import CtaBanner from '@/components/shared/CtaBanner';
import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Portofolio',
  description:
    'Galeri foto & video makeup — wedding, prewedding, party, photoshoot, dan editorial oleh Angelia Beauty MUA.',
};

export default function PortofolioPage() {
  return (
    <>
      <PageHero
        title='Galeri Portofolio'
        subtitle='Setiap wajah punya cerita — foto & video natural glam, soft, dan photo-ready.'
      />

      <GalleryHero />

      <section className='border-t-2 border-black bg-zinc-50 py-12 md:py-16'>
        <div className='layout mb-6 text-center md:mb-10'>
          <p className='text-[10px] tracking-[0.28em] text-zinc-400 uppercase'>
            Koleksi Lengkap
          </p>
          <h2 className='font-display mt-2 text-2xl text-black uppercase md:text-4xl'>
            Semua Karya
          </h2>
          <p className='mx-auto mt-3 max-w-lg text-sm text-zinc-500'>
            Filter kategori · klik untuk preview fullscreen
          </p>
        </div>

        <Gallery mode='full' showFilters />
      </section>

      <CtaBanner
        title='Suka salah satu look?'
        subtitle='Booking sekarang dan ceritakan acaramu.'
      />
    </>
  );
}
