import type { Metadata } from 'next';

import PortfolioGrid from '@/components/portofolio/PortfolioGrid';
import CtaBanner from '@/components/shared/CtaBanner';
import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Portofolio',
  description:
    'Kumpulan look wedding, prewedding, party, dan editorial oleh Angelia Beauty MUA.',
};

export default function PortofolioPage() {
  return (
    <>
      <PageHero
        title='Portofolio'
        subtitle='Setiap wajah punya cerita sendiri — natural glam, soft, dan photo-ready.'
      />
      <section className='pt-10'>
        <PortfolioGrid />
      </section>
      <CtaBanner
        title='Suka salah satu look?'
        subtitle='Booking sekarang dan ceritakan acaramu.'
      />
    </>
  );
}
