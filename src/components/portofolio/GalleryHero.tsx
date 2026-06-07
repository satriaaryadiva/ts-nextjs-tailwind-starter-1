'use client';

import { Film } from 'lucide-react';

import GalleryMedia, {
  isPortfolioVideo,
} from '@/components/portofolio/GalleryMedia';
import { getCategoryLabel, portfolioItems } from '@/data/portfolio';
import { cn } from '@/lib/utils';

/** 3 unggulan pertama — layout editorial, source sama dengan galeri */
export default function GalleryHero() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <section id='unggulan' className='scroll-mt-28'>
      <div className='mb-6 flex flex-col gap-3 border-b-2 border-black pb-5 md:mb-8 md:flex-row md:items-end md:justify-between md:pb-6'>
        <div>
          <p className='text-[10px] tracking-[0.28em] text-gold uppercase'>
            Chapter I
          </p>
          <h2 className='font-display mt-1 text-2xl text-black uppercase md:text-4xl'>
            Look <span className='text-gold-light'>Unggulan</span>
          </h2>
        </div>
        <p className='max-w-sm text-sm leading-relaxed text-gold-muted md:text-right'>
          Tiga momen pilihan — foto & video natural glam dari klien Angelia
          Beauty.
        </p>
      </div>

      <div className='grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4'>
        {featured.map((item, i) => {
          const isVideo = isPortfolioVideo(item);

          return (
            <figure
              key={item.id}
              className={cn(
                'group relative isolate overflow-hidden border-2 border-black bg-black shadow-[6px_6px_0_0_#b8860b] transition-shadow duration-300 hover:shadow-[3px_3px_0_0_#d4af37] md:shadow-[8px_8px_0_0_#b8860b]',
                i === 0
                  ? 'h-[320px] md:col-span-7 md:row-span-2 md:h-[480px]'
                  : i === 1
                    ? 'h-[240px] md:col-span-5 md:h-[230px]'
                    : 'h-[240px] md:col-span-5 md:h-[230px]',
              )}
            >
              <span
                className='absolute top-4 right-4 z-30 font-display text-5xl text-gold-light/20 md:text-6xl'
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <GalleryMedia
                item={item}
                priority={i === 0}
                autoPlayVideo={isVideo}
                sizes='(max-width: 768px) 100vw, 50vw'
                className='transition-transform duration-700 group-hover:scale-[1.03]'
              />

              <div className='absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/25 to-transparent' />

              <div className='absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2'>
                {isVideo && (
                  <span className='inline-flex items-center gap-1 border border-gold/40 bg-black/60 px-2.5 py-1 text-[9px] tracking-[0.2em] text-gold-light uppercase'>
                    <Film size={11} aria-hidden />
                    Video
                  </span>
                )}
                <span className='border border-gold/35 bg-black/55 px-2.5 py-1 text-[9px] tracking-[0.2em] text-gold-soft uppercase'>
                  {getCategoryLabel(item.category)}
                </span>
              </div>

              <figcaption className='absolute right-0 bottom-0 left-0 z-20 p-5 md:p-7'>
                <p className='font-display text-lg font-bold tracking-wide text-white uppercase md:text-2xl'>
                  {item.caption.split(' · ')[0]}
                </p>
                <p className='mt-1.5 line-clamp-2 text-xs text-gold-soft md:text-sm'>
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
