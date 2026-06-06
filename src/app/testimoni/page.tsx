import type { Metadata } from 'next';

import TestimonialCard from '@/components/shared/TestimonialCard';
import CtaBanner from '@/components/shared/CtaBanner';
import PageHero from '@/components/shared/PageHero';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Testimoni',
  description:
    'Ulasan klien Angelia Beauty MUA — wedding, prewedding, dan event.',
};

export default function TestimoniPage() {
  const [featured, ...rest] = testimonials;

  return (
    <>
      <PageHero
        title='Apa Kata Mereka?'
        subtitle='Yang mereka rasakan setelah menggunakan jasa Angelia Beauty MUA.'
      />

      <section className='border-b-2 border-black bg-white py-12 md:py-16'>
        <div className='layout'>
          <div className='mb-8 flex flex-wrap gap-2 md:mb-10'>
            <span className='border border-black bg-black px-3 py-1.5 text-[10px] tracking-[0.18em] text-white uppercase'>
              {testimonials.length} Ulasan Klien
            </span>
            <span className='border border-zinc-300 px-3 py-1.5 text-[10px] tracking-[0.18em] text-zinc-600 uppercase'>
              ★ 5.0 Rating
            </span>
            <span className='border border-zinc-300 px-3 py-1.5 text-[10px] tracking-[0.18em] text-zinc-600 uppercase'>
              Wedding · Prewedding · Party
            </span>
          </div>

          {featured && (
            <div className='mb-10 md:mb-14'>
              <p className='mb-4 text-[10px] tracking-[0.28em] text-zinc-400 uppercase'>
                Unggulan
              </p>
              <TestimonialCard {...featured} index={0} variant='featured' />
            </div>
          )}

          <p className='mb-6 text-[10px] tracking-[0.28em] text-zinc-400 uppercase md:mb-8'>
            Semua Ulasan
          </p>

          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
            {rest.map((t, i) => (
              <TestimonialCard key={t.id} {...t} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
