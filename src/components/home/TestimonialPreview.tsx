'use client';

import * as React from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
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
    const cardWidth = el.querySelector('div')?.offsetWidth ?? 400;
    el.scrollBy({
      left: direction === 'left' ? -cardWidth - 24 : cardWidth + 24,
      behavior: 'smooth',
    });
  };

  return (
    <section className='relative overflow-hidden bg-slate-50 py-24 md:py-36'>
      {/* Light background elegant radial gradient */}
      <div className='pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'>
        <div className='h-[600px] w-[600px] rounded-full bg-amber-100/40 blur-[120px]' />
      </div>

      <div className='layout relative z-10'>
        {/* Header */}
        <div className='mb-16 flex flex-col items-center text-center md:mb-20'>
          <span className='mb-4 inline-block rounded-full border border-amber-200 bg-amber-50 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 backdrop-blur-sm'>
            Testimoni
          </span>
          <h2 className='font-display text-4xl tracking-tight text-zinc-900 md:text-5xl lg:text-6xl'>
            Cerita Bahagia Klien Kami
          </h2>
          <p className='mt-4 max-w-lg text-base text-zinc-600'>
            Momen berharga yang terukir indah melalui sentuhan profesional
            Angelia Beauty.
          </p>
        </div>

        {/* Navigation Arrows — Desktop */}
        <div className='mb-8 hidden items-center justify-end gap-3 md:flex'>
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className='flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:border-amber-300 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-30'
            aria-label='Scroll left'
          >
            <ChevronLeft className='h-5 w-5' />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className='flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition-all hover:border-amber-300 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-30'
            aria-label='Scroll right'
          >
            <ChevronRight className='h-5 w-5' />
          </button>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className='scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 md:-mx-0 md:px-0'
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className='group relative flex w-[85vw] shrink-0 snap-center flex-col overflow-hidden border border-zinc-100 bg-white shadow-md shadow-zinc-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50 sm:w-[380px] md:w-[400px]'
            >
              {/* 1. GAMBAR (Client Photo) */}
              <div className='relative h-64 w-full overflow-hidden bg-zinc-100'>
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.author}
                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                    loading='lazy'
                  />
                ) : (
                  <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50 text-2xl font-bold text-amber-700'>
                    {t.author.slice(0, 2)}
                  </div>
                )}
                {/* Overlay Quote Icon */}
                <div className='absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm'>
                  <Quote className='h-4 w-4 text-amber-600' />
                </div>
              </div>

              {/* Card Body */}
              <div className='flex flex-1 flex-col justify-between p-6 md:p-8'>
                {/* 2. TEKS (Testimonial & Author Info) */}
                <div className='mb-6'>
                  <blockquote className='text-base leading-relaxed text-zinc-700'>
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className='mt-5 flex items-center gap-3'>
                    <div className='h-1.5 w-1.5 rounded-full bg-amber-500' />
                    <div>
                      <h4 className='font-display text-sm font-bold uppercase tracking-wider text-zinc-900'>
                        {t.author}
                      </h4>
                      <p className='text-xs text-zinc-400'>{t.handle}</p>
                    </div>
                  </div>
                </div>

                {/* 3. BINTANG (Star Rating) */}
                <div className='flex items-center justify-between border-t border-zinc-100 pt-4'>
                  <div className='flex gap-1'>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className='h-4 w-4 text-amber-400'
                        fill='currentColor'
                      />
                    ))}
                  </div>
                  <span className='text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full'>
                    Verified Bride
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='mt-16 text-center'>
          <Button
            href='/testimoni'
            variant='outline'
            className='rounded-full border-zinc-300 bg-white px-8 py-3 text-sm tracking-widest text-zinc-700 shadow-sm hover:border-amber-400 hover:bg-amber-50 hover:text-amber-800'
          >
            Lihat Semua Testimoni
          </Button>
        </div>
      </div>
    </section>
  );
}
