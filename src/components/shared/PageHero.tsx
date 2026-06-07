import Image from 'next/image';

import { cn } from '@/lib/utils';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  align?: 'center' | 'left';
};

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  imageAlt = '',
  align = 'center',
}: PageHeroProps) {
  const isLeft = align === 'left' || Boolean(image);

  if (image) {
    return (
      <section className='relative min-h-[300px] overflow-hidden border-b-2 border-black md:min-h-[380px]'>
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className='object-cover object-center'
          sizes='100vw'
        />

        <div className='absolute inset-0 bg-linear-to-r from-black/90 via-black/75 to-black/45 md:from-black/88 md:via-black/65 md:to-black/35' />

        <div
          className='pointer-events-none absolute inset-0 opacity-[0.08]'
          aria-hidden
          style={{
            backgroundImage:
              'linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)',
            backgroundSize: '2.5rem 2.5rem',
          }}
        />

        <div
          className={cn(
            'layout relative z-10 flex min-h-[300px] flex-col justify-center py-14 md:min-h-[380px] md:py-20',
            isLeft ? 'items-start text-left' : 'items-center text-center',
          )}
        >
          {eyebrow && (
            <p className='text-[10px] tracking-[0.32em] text-gold-light uppercase'>
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              'font-display text-[clamp(2rem,6vw,3.75rem)] leading-[1.02] text-white uppercase',
              eyebrow && 'mt-3',
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                'mt-4 max-w-xl text-sm leading-relaxed text-gold-soft md:text-base',
                !isLeft && 'mx-auto',
              )}
            >
              {subtitle}
            </p>
          )}
          <div className='mt-6 h-px w-16 bg-gold' aria-hidden />
        </div>
      </section>
    );
  }

  return (
    <section className='border-b-2 border-black bg-gold-pale/60 py-16 md:py-20'>
      <div className={cn('layout', isLeft ? 'text-left' : 'text-center')}>
        {eyebrow && (
          <p className='text-[10px] tracking-[0.32em] text-gold uppercase'>
            {eyebrow}
          </p>
        )}
        <h1
          className={cn(
            'font-display text-4xl text-black uppercase md:text-5xl',
            eyebrow && 'mt-2',
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={cn(
              'mt-4 max-w-2xl text-gold-muted',
              !isLeft && 'mx-auto',
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
