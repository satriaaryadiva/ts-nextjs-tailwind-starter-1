'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import TestimonialCard from '@/components/shared/TestimonialCard';
import Button from '@/components/ui/Button';
import { testimonials } from '@/data/testimonials';

export default function TestimonialPreview() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScroll = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector(
      '[data-testimonial-card]',
    ) as HTMLElement | null;
    const cardWidth = card?.offsetWidth ?? 340;
    el.scrollBy({
      left: direction === 'left' ? -(cardWidth + 16) : cardWidth + 16,
      behavior: 'smooth',
    });
  };

  return (
    <section className='relative overflow-hidden border-y-2 border-black bg-zinc-50 py-14 md:py-20'>
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.035]'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '2.5rem 2.5rem',
        }}
      />

      <div className='layout relative z-10'>
        <div className='mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-xl'>
            <p className='text-[10px] tracking-[0.28em] text-zinc-400 uppercase'>
              Testimoni
            </p>
            <h2 className='font-display mt-2 text-3xl text-black uppercase md:text-5xl'>
              Cerita Bahagia
              <br className='hidden sm:block' /> Klien Kami
            </h2>
            <p className='mt-3 text-sm leading-relaxed text-zinc-600 md:text-base'>
              Momen berharga yang terukir indah melalui sentuhan profesional
              Angelia Beauty.
            </p>
          </div>

          <div className='hidden shrink-0 items-center gap-2 md:flex'>
            <button
              type='button'
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className='flex h-11 w-11 items-center justify-center border-2 border-black bg-white text-black transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30'
              aria-label='Testimoni sebelumnya'
            >
              <ChevronLeft className='h-5 w-5' />
            </button>
            <button
              type='button'
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className='flex h-11 w-11 items-center justify-center border-2 border-black bg-white text-black transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30'
              aria-label='Testimoni selanjutnya'
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div>
        </div>

        <div className='mb-6 flex flex-wrap gap-2 md:mb-8'>
          <span className='border border-black bg-black px-3 py-1.5 text-[10px] tracking-[0.18em] text-white uppercase'>
            {testimonials.length} Ulasan
          </span>
          <span className='border border-zinc-300 px-3 py-1.5 text-[10px] tracking-[0.18em] text-zinc-600 uppercase'>
            ★ 5.0 Rata-rata
          </span>
        </div>

        <div
          ref={scrollRef}
          className='scrollbar-hide -mx-[4.166%] flex snap-x snap-mandatory gap-4 overflow-x-auto px-[4.166%] pb-2 sm:gap-5 md:-mx-0 md:px-0'
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              data-testimonial-card
              className='w-[min(85vw,340px)] shrink-0 snap-center sm:w-[360px]'
            >
              <TestimonialCard {...t} index={i} />
            </div>
          ))}
        </div>

        <div className='mt-10 text-center md:mt-12'>
          <Button
            href='/testimoni'
            variant='outline'
            className='border-2 border-black px-8 py-3.5 text-xs tracking-[0.18em] shadow-[4px_4px_0_0_#000] hover:bg-black hover:text-white'
          >
            Lihat Semua Testimoni
          </Button>
        </div>
      </div>
    </section>
  );
}
