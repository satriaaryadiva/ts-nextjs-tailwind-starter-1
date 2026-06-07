import type { Metadata } from 'next';

import Gallery from '@/components/portofolio/Gallery';
import GalleryHero from '@/components/portofolio/GalleryHero';
import PortfolioStoryIntro from '@/components/portofolio/PortfolioStoryIntro';
import CtaBanner from '@/components/shared/CtaBanner';

export const metadata: Metadata = {
  title: 'Portofolio',
  description:
    'Galeri foto & video makeup — wedding, prewedding, sister of bride, party, photoshoot, dan editorial oleh Angelia Beauty MUA.',
};

export default function PortofolioPage() {
  return (
    <>
      <PortfolioStoryIntro />

      <div className='layout pb-4 pt-12 md:pb-6 md:pt-16'>
        <GalleryHero />
      </div>

      <section
        id='koleksi'
        className='scroll-mt-28 border-t-2 border-black bg-gold-pale/50 py-12 md:py-16'
      >
        <div className='layout mb-8 md:mb-12'>
          <div className='flex flex-col gap-4 border-b-2 border-black pb-6 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-[10px] tracking-[0.28em] text-gold uppercase'>
                Chapter II
              </p>
              <h2 className='font-display mt-1 text-2xl text-black uppercase md:text-4xl'>
                Semua <span className='text-gold-light'>Karya</span>
              </h2>
            </div>
            <p className='max-w-md text-sm leading-relaxed text-gold-muted md:text-right'>
              Filter kategori · klik tile untuk preview fullscreen · navigasi
              dengan keyboard di lightbox
            </p>
          </div>
        </div>

        <Gallery mode='full' showFilters />
      </section>

      <CtaBanner
        title='Suka salah satu look?'
        subtitle='Ceritakan tanggal & acaramu — aku bantu wujudkan look impianmu.'
      />
    </>
  );
}
