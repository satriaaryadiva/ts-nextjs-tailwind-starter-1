'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, Film, Play, X } from 'lucide-react';
import * as React from 'react';

import GalleryMedia, {
  isPortfolioVideo,
} from '@/components/portofolio/GalleryMedia';
import {
  getCategoryLabel,
  getPreviewItems,
  type PortfolioCategory,
  portfolioCategories,
  portfolioItems,
  type PortfolioItem,
} from '@/data/portfolio';
import { cn } from '@/lib/utils';

type GalleryProps = {
  mode?: 'preview' | 'full';
  limit?: number;
  showFilters?: boolean;
  className?: string;
};

const previewLayouts = [
  'col-span-2 row-span-2 min-h-[280px] sm:min-h-[320px] md:min-h-[520px]',
  'min-h-[160px] sm:min-h-[200px] md:min-h-[248px]',
  'min-h-[160px] sm:min-h-[200px] md:min-h-[248px]',
  'col-span-2 min-h-[160px] sm:min-h-[180px] md:min-h-[220px]',
  'min-h-[160px] sm:min-h-[200px] md:min-h-[248px]',
  'min-h-[160px] sm:min-h-[200px] md:min-h-[248px]',
  'min-h-[160px] sm:min-h-[200px] md:min-h-[248px]',
  'min-h-[160px] sm:min-h-[200px] md:min-h-[248px]',
];

const fullTileLayouts = [
  'sm:col-span-2 sm:row-span-2 min-h-[300px] md:min-h-[480px] lg:min-h-[540px]',
  'min-h-[220px] md:min-h-[260px]',
  'min-h-[220px] md:min-h-[260px]',
  'sm:col-span-2 min-h-[200px] md:min-h-[240px]',
  'min-h-[220px] md:min-h-[260px]',
  'min-h-[220px] md:min-h-[260px]',
  'min-h-[220px] md:min-h-[260px]',
  'min-h-[220px] md:min-h-[260px]',
];

function GalleryCaption({
  item,
  compact = false,
}: {
  item: PortfolioItem;
  compact?: boolean;
}) {
  const video = isPortfolioVideo(item);

  return (
    <>
      <div className='absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/20 to-black/5' />

      <div className='absolute top-3 left-3 z-20'>
        {video ? (
          <span className='inline-flex items-center gap-1 border border-white/30 bg-black/60 px-2.5 py-1 text-[8px] tracking-[0.2em] text-white uppercase backdrop-blur-sm md:text-[9px]'>
            <Film size={10} aria-hidden />
            Video
          </span>
        ) : (
          <span className='border border-white/25 bg-black/50 px-2.5 py-1 text-[8px] tracking-[0.2em] text-white/90 uppercase backdrop-blur-sm md:text-[9px]'>
            {getCategoryLabel(item.category)}
          </span>
        )}
      </div>

      {video && (
        <div className='pointer-events-none absolute inset-0 z-10 flex items-center justify-center'>
          <span className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/90 bg-black/45 text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 md:h-14 md:w-14'>
            <Play className='ml-0.5 h-5 w-5 fill-white md:h-6 md:w-6' />
          </span>
        </div>
      )}

      <figcaption
        className={cn(
          'absolute right-0 bottom-0 left-0 z-20 text-white',
          compact ? 'p-4 md:p-5' : 'p-4 md:p-6',
        )}
      >
        <p className='text-[9px] tracking-[0.22em] text-white/60 uppercase md:text-[10px]'>
          {getCategoryLabel(item.category)}
        </p>
        <p
          className={cn(
            'font-display mt-1 font-bold tracking-wide uppercase',
            compact ? 'text-sm md:text-base' : 'text-base md:text-xl',
          )}
        >
          {item.caption.split(' · ')[0]}
        </p>
        <p className='mt-1 line-clamp-2 max-h-0 overflow-hidden text-xs text-white/75 opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100'>
          {item.caption}
        </p>
      </figcaption>
    </>
  );
}

function GalleryTile({
  item,
  onClick,
  className,
  priority = false,
}: {
  item: PortfolioItem;
  onClick: () => void;
  className?: string;
  priority?: boolean;
}) {
  const video = isPortfolioVideo(item);

  return (
    <figure
      onClick={onClick}
      className={cn(
        'group relative isolate min-h-[inherit] cursor-pointer overflow-hidden border-2 border-black bg-black shadow-[4px_4px_0_0_#000] transition-all duration-300 hover:shadow-[2px_2px_0_0_#000]',
        className,
      )}
    >
      <GalleryMedia
        item={item}
        priority={priority}
        autoPlayVideo={video}
        className='transition-transform duration-700 ease-out group-hover:scale-[1.03]'
      />
      <GalleryCaption item={item} />
    </figure>
  );
}

function Lightbox({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  item: PortfolioItem;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev, hasPrev, hasNext]);

  React.useEffect(() => {
    if (isPortfolioVideo(item)) {
      videoRef.current?.play().catch(() => undefined);
    }
  }, [item]);

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/96 p-4 backdrop-blur-md'
      onClick={onClose}
    >
      <button
        type='button'
        onClick={onClose}
        className='absolute top-5 right-5 z-60 flex h-11 w-11 items-center justify-center border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20'
        aria-label='Tutup'
      >
        <X className='h-5 w-5' />
      </button>

      <span className='absolute top-6 left-6 z-60 font-display text-sm tracking-[0.25em] text-white/40 md:text-base'>
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>

      {hasPrev && (
        <button
          type='button'
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className='absolute top-1/2 left-4 z-60 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 md:left-8'
          aria-label='Sebelumnya'
        >
          <ChevronLeft className='h-5 w-5' />
        </button>
      )}

      {hasNext && (
        <button
          type='button'
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className='absolute top-1/2 right-4 z-60 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8'
          aria-label='Selanjutnya'
        >
          <ChevronRight className='h-5 w-5' />
        </button>
      )}

      <div
        className='relative flex h-[min(80vh,900px)] w-full max-w-5xl items-center justify-center'
        onClick={(e) => e.stopPropagation()}
      >
        {isPortfolioVideo(item) ? (
          <video
            ref={videoRef}
            src={item.src}
            controls
            playsInline
            className='max-h-full max-w-full bg-black'
          />
        ) : (
          <div className='relative h-full w-full'>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className='object-contain'
              sizes='100vw'
              priority
            />
          </div>
        )}
      </div>

      <div
        className='absolute right-0 bottom-0 left-0 bg-linear-to-t from-black to-transparent p-6 text-center text-white md:p-10'
        onClick={(e) => e.stopPropagation()}
      >
        <p className='inline-flex items-center justify-center gap-2 text-xs tracking-[0.25em] text-white/60 uppercase'>
          {isPortfolioVideo(item) && <Film size={12} aria-hidden />}
          {getCategoryLabel(item.category)}
        </p>
        <h3 className='font-display mt-2 text-xl uppercase md:text-3xl'>
          {item.caption}
        </h3>
      </div>
    </div>
  );
}

function FilterBar({
  filter,
  onFilter,
}: {
  filter: PortfolioCategory | 'all';
  onFilter: (value: PortfolioCategory | 'all') => void;
}) {
  return (
    <div className='layout mb-10 flex flex-wrap justify-center gap-2 md:mb-12 md:gap-2.5'>
      <button
        type='button'
        onClick={() => onFilter('all')}
        className={cn(
          'border px-4 py-2 text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors md:px-5 md:py-2.5 md:text-xs',
          filter === 'all'
            ? 'border-black bg-black text-white'
            : 'border-zinc-300 bg-white text-zinc-600 hover:border-black hover:text-black',
        )}
      >
        Semua
      </button>
      {portfolioCategories.map((cat) => (
        <button
          key={cat.slug}
          type='button'
          onClick={() => onFilter(cat.slug)}
          className={cn(
            'border px-4 py-2 text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors md:px-5 md:py-2.5 md:text-xs',
            filter === cat.slug
              ? 'border-black bg-black text-white'
              : 'border-zinc-300 bg-white text-zinc-600 hover:border-black hover:text-black',
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

function StatsBar({
  counts,
}: {
  counts: { total: number; photo: number; video: number };
}) {
  return (
    <div className='layout mb-8 flex flex-wrap items-center justify-center gap-2 md:mb-10 md:gap-3'>
      <span className='border border-zinc-300 px-3 py-1.5 text-[10px] tracking-[0.2em] text-zinc-500 uppercase'>
        {counts.total} Karya
      </span>
      <span className='border border-black bg-black px-3 py-1.5 text-[10px] tracking-[0.2em] text-white uppercase'>
        {counts.photo} Foto
      </span>
      <span className='inline-flex items-center gap-1.5 border border-zinc-300 px-3 py-1.5 text-[10px] tracking-[0.2em] text-zinc-600 uppercase'>
        <Film size={11} aria-hidden />
        {counts.video} Video
      </span>
    </div>
  );
}

export default function Gallery({
  mode = 'full',
  limit = 8,
  showFilters,
  className,
}: GalleryProps) {
  const isPreview = mode === 'preview';
  const filtersEnabled = showFilters ?? !isPreview;

  const [filter, setFilter] = React.useState<PortfolioCategory | 'all'>('all');
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const filtered = React.useMemo(() => {
    if (isPreview) return getPreviewItems(limit);

    const items =
      filter === 'all'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === filter);
    return items;
  }, [filter, isPreview, limit]);

  React.useEffect(() => {
    setSelectedIndex(null);
  }, [filter]);

  const counts = React.useMemo(() => {
    const video = portfolioItems.filter((i) => i.type === 'video').length;
    const photo = portfolioItems.filter((i) => i.type === 'image').length;
    return { video, photo, total: portfolioItems.length };
  }, []);

  const selectedItem = selectedIndex !== null ? filtered[selectedIndex] : null;

  return (
    <>
      {!isPreview && <StatsBar counts={counts} />}

      {filtersEnabled && <FilterBar filter={filter} onFilter={setFilter} />}

      {isPreview ? (
        <div
          className={cn(
            'layout grid auto-rows-fr grid-cols-2 gap-2 md:grid-cols-4 md:gap-3',
            className,
          )}
        >
          {filtered.map((item, index) => (
            <GalleryTile
              key={item.id}
              item={item}
              onClick={() => setSelectedIndex(index)}
              priority={index < 2}
              className={cn(
                previewLayouts[index] ?? 'min-h-[160px] md:min-h-[248px]',
              )}
            />
          ))}
        </div>
      ) : (
        <div
          className={cn(
            'layout grid grid-cols-1 gap-3 pb-20 sm:grid-cols-2 sm:auto-rows-fr lg:grid-cols-4 lg:gap-4',
            className,
          )}
        >
          {filtered.map((item, index) => (
            <GalleryTile
              key={item.id}
              item={item}
              onClick={() => setSelectedIndex(index)}
              priority={index < 4}
              className={fullTileLayouts[index % fullTileLayouts.length]}
            />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className='layout pb-20 text-center text-sm text-zinc-500'>
          Belum ada karya di kategori ini.
        </p>
      )}

      {selectedItem && selectedIndex !== null && (
        <Lightbox
          item={selectedItem}
          index={selectedIndex}
          total={filtered.length}
          onClose={() => setSelectedIndex(null)}
          onPrev={() =>
            setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i))
          }
          onNext={() =>
            setSelectedIndex((i) =>
              i !== null && i < filtered.length - 1 ? i + 1 : i,
            )
          }
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < filtered.length - 1}
        />
      )}
    </>
  );
}
