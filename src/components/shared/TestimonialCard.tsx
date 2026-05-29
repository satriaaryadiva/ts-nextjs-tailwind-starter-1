import type { Testimonial } from '@/data/testimonials';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({
  quote,
  author,
  handle,
  image,
}: Testimonial) {
  return (
    <div className='group flex flex-col border-10 overflow-hidden   border border-black bg-white shadow-md shadow-zinc-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50'>
      {/* 1. GAMBAR (Client Photo) */}
      <div className='relative h-60 w-full overflow-hidden bg-zinc-100'>
        {image ? (
          <img
            src={image}
            alt={author}
            className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
            loading='lazy'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50 text-2xl font-bold text-amber-700'>
            {author.slice(0, 2)}
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
          <blockquote className='text-sm leading-relaxed text-zinc-900 md:text-base'>
            &ldquo;{quote}&rdquo;
          </blockquote>

          <div className='mt-5 flex items-center gap-3'>
            <div className='h-1.5 w-1.5 rounded-full bg-amber-500' />
            <div>
              <h4 className='font-display text-sm font-bold uppercase tracking-wider text-zinc-900'>
                {author}
              </h4>
              <p className='text-xs text-zinc-400'>{handle}</p>
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
  );
}
