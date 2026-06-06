import { Quote, Star } from 'lucide-react';

import { getInitials, type Testimonial } from '@/data/testimonials';
import { cn } from '@/lib/utils';

type TestimonialCardProps = Testimonial & {
  index?: number;
  variant?: 'default' | 'featured';
  className?: string;
};

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className='flex gap-0.5' aria-label={`${rating} dari 5 bintang`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            'h-3.5 w-3.5',
            i < rating
              ? 'fill-black text-black'
              : 'fill-zinc-200 text-zinc-200',
          )}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function TestimonialCard({
  quote,
  author,
  handle,
  event,
  rating = 5,
  index,
  variant = 'default',
  className,
}: TestimonialCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col border-2 border-black transition-all duration-300',
        isFeatured
          ? 'bg-black text-white shadow-[8px_8px_0_0_#404040]'
          : 'bg-white text-black shadow-[5px_5px_0_0_#000] hover:shadow-[2px_2px_0_0_#000]',
        className,
      )}
    >
      <div className='flex flex-1 flex-col p-6 md:p-7'>
        <div className='mb-6 flex items-start justify-between gap-4'>
          <Quote
            className={cn(
              'h-8 w-8 shrink-0',
              isFeatured ? 'text-white/30' : 'text-zinc-200',
            )}
            strokeWidth={1.25}
            aria-hidden
          />
          {index !== undefined && (
            <span
              className={cn(
                'text-[10px] tracking-[0.25em] tabular-nums',
                isFeatured ? 'text-white/40' : 'text-zinc-400',
              )}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </div>

        <blockquote
          className={cn(
            'flex-1 leading-relaxed',
            isFeatured
              ? 'text-base text-white/90 md:text-lg'
              : 'text-sm text-zinc-700 md:text-base',
          )}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>

        <div
          className={cn(
            'mt-6 border-t pt-5',
            isFeatured ? 'border-white/15' : 'border-zinc-200',
          )}
        >
          <div className='flex items-center gap-3'>
            <div
              className={cn(
                'flex h-11 w-11 shrink-0 items-center justify-center border-2 font-display text-sm font-bold tracking-wide uppercase',
                isFeatured
                  ? 'border-white bg-white text-black'
                  : 'border-black bg-black text-white',
              )}
              aria-hidden
            >
              {getInitials(author)}
            </div>
            <div className='min-w-0'>
              <h4
                className={cn(
                  'font-display text-sm font-bold tracking-wide uppercase',
                  isFeatured ? 'text-white' : 'text-black',
                )}
              >
                {author}
              </h4>
              <p
                className={cn(
                  'truncate text-xs',
                  isFeatured ? 'text-white/55' : 'text-zinc-400',
                )}
              >
                {handle}
              </p>
            </div>
          </div>

          <div className='mt-4 flex flex-wrap items-center justify-between gap-3'>
            <StarRating rating={rating} />
            <span
              className={cn(
                'border px-2.5 py-1 text-[9px] font-semibold tracking-[0.16em] uppercase',
                isFeatured
                  ? 'border-white/25 text-white/80'
                  : 'border-zinc-300 text-zinc-600',
              )}
            >
              {event}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
