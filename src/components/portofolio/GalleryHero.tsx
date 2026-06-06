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
    <section className='layout -mt-2 mb-10 md:mb-14'>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4'>
        {featured.map((item, i) => {
          const isVideo = isPortfolioVideo(item);

          return (
            <figure
              key={item.id}
              className={cn(
                'group relative isolate overflow-hidden border-2 border-black bg-black shadow-[6px_6px_0_0_#000] md:shadow-[8px_8px_0_0_#000]',
                i === 0
                  ? 'h-[320px] md:col-span-7 md:row-span-2 md:h-[460px]'
                  : i === 1
                    ? 'h-[240px] md:col-span-5 md:h-[220px]'
                    : 'h-[240px] md:col-span-5 md:h-[220px]',
              )}
            >
              <GalleryMedia
                item={item}
                priority={i === 0}
                autoPlayVideo={isVideo}
                sizes='(max-width: 768px) 100vw, 50vw'
                className='transition-transform duration-700 group-hover:scale-[1.03]'
              />

              <div className='absolute inset-0 z-10 bg-linear-to-t from-black/85 via-black/15 to-transparent' />

              <div className='absolute top-4 left-4 z-20 flex items-center gap-2'>
                {isVideo && (
                  <span className='inline-flex items-center gap-1 border border-white/30 bg-black/55 px-2.5 py-1 text-[9px] tracking-[0.2em] text-white uppercase'>
                    <Film size={11} aria-hidden />
                    Video
                  </span>
                )}
                <span className='border border-white/25 bg-black/45 px-2.5 py-1 text-[9px] tracking-[0.2em] text-white/90 uppercase'>
                  {getCategoryLabel(item.category)}
                </span>
              </div>

              <figcaption className='absolute right-0 bottom-0 left-0 z-20 p-5 md:p-6'>
                <p className='font-display text-lg font-bold tracking-wide text-white uppercase md:text-2xl'>
                  {item.caption.split(' · ')[0]}
                </p>
                <p className='mt-1 text-xs text-white/70 md:text-sm'>
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
