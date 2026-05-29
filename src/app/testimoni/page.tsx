import type { Metadata } from 'next';

import TestimonialCard from '@/components/shared/TestimonialCard';
import CtaBanner from '@/components/shared/CtaBanner';
import PageHero from '@/components/shared/PageHero';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Testimoni',
  description: 'Ulasan klien Angelia Beauty MUA — wedding, prewedding, dan event.',
};

export default function TestimoniPage() {
  return (
    <>
      <PageHero
        title='Apa Kata Mereka?'
        subtitle='Yang mereka rasakan setelah menggunakan jasa Angelia Beauty MUA.'
      />
      <div className='layout grid gap-6 py-12 pb-16 md:grid-cols-2 lg:grid-cols-3'>
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </div>
      <CtaBanner />
    </>
  );
}
