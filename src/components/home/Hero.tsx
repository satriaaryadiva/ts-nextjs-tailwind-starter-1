'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDown,
  ArrowUpRight,
  Instagram,
  MapPin,
  Sparkles,
} from 'lucide-react';
import * as React from 'react';

import Button from '@/components/ui/Button';
import { siteConfig } from '@/constant/config';
import { siteImages } from '@/data/images';
import { cn } from '@/lib/utils';

const accentSlides = [
  { src: siteImages.natural1, label: 'Natural Glam' },
  { src: siteImages.natural2, label: 'Soft Glam' },
  { src: siteImages.naturalCollage, label: 'Photoshoot' },
] as const;

const tickerItems = [
  'Wedding Makeup',
  'Prewedding',
  'Party Glam',
  'Editorial',
  'Photoshoot',
  siteConfig.hashtag,
  `${siteConfig.baseCity} · Indonesia`,
];

const stats = [
  { value: '500+', label: 'Klien Puas' },
  { value: '8+', label: 'Tahun Pengalaman' },
  { value: '100%', label: 'Photo-Ready' },
];

export default function Hero() {
  const [slide, setSlide] = React.useState(0);
  const visualRef = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const timer = setInterval(
      () => setSlide((s) => (s + 1) % accentSlides.length),
      4500,
    );
    return () => clearInterval(timer);
  }, []);

  const handlePointerMove = React.useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = visualRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
      setTilt({ x, y });
    },
    [],
  );

  const resetTilt = React.useCallback(() => setTilt({ x: 0, y: 0 }), []);

  return (
    <section className='relative min-h-[calc(100dvh-4.5rem)] overflow-hidden bg-white md:min-h-[calc(100dvh-6rem)]'>
      <div
        className='pointer-events-none absolute inset-0'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(to right, #00000005 1px, transparent 1px), linear-gradient(to bottom, #00000005 1px, transparent 1px)',
          backgroundSize: '2.75rem 2.75rem',
        }}
      />

      <div
        className='pointer-events-none absolute top-16 -left-6 font-display text-[clamp(5rem,16vw,12rem)] leading-none text-black/[0.03] select-none'
        aria-hidden
      >
        AB
      </div>

      <div className='layout relative z-10 grid min-h-[calc(100dvh-4.5rem)] grid-cols-1 items-center gap-10 py-10 md:min-h-[calc(100dvh-6rem)] md:gap-12 md:py-12 lg:grid-cols-2 lg:gap-12 lg:py-14 xl:gap-16'>
        {/* Copy block */}
        <div className='flex flex-col justify-center lg:max-w-xl lg:pr-4 xl:max-w-none'>
          <div
            className='hero-reveal mb-6 flex flex-wrap items-center gap-3'
            style={{ animationDelay: '0s' }}
          >
            <span className='inline-flex items-center gap-2 border border-black bg-black px-3.5 py-1.5 text-white'>
              <Sparkles size={12} strokeWidth={2.5} aria-hidden />
              <span className='text-[10px] font-semibold tracking-[0.28em] uppercase'>
                {siteConfig.hashtag}
              </span>
            </span>
            <span className='text-[10px] tracking-[0.25em] text-zinc-400 uppercase'>
              {siteConfig.baseCity} · Indonesia
            </span>
          </div>

          <div className='relative mb-1'>
            <p
              className='hero-text-stroke pointer-events-none absolute -top-1 left-0 font-display text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.9] uppercase'
              aria-hidden
            >
              Angelia Beauty
            </p>

            <h1 className='font-display relative uppercase'>
              <span
                className='hero-reveal block text-[clamp(2.75rem,7.5vw,5rem)] leading-[0.92] text-black'
                style={{ animationDelay: '0.08s' }}
              >
                Angelia Beauty
              </span>

              <span
                className='hero-reveal mt-3 flex flex-wrap items-center gap-x-3 gap-y-2'
                style={{ animationDelay: '0.16s' }}
              >
                <span className='inline-block bg-black px-3 py-1 text-[clamp(1.25rem,3vw,2rem)] leading-none tracking-wide text-white md:px-4 md:py-1.5'>
                  Makeup Artist
                </span>
                <span className='text-[clamp(0.85rem,2vw,1.125rem)] tracking-[0.28em] text-zinc-500'>
                  Profesional
                </span>
              </span>

              <span
                className='hero-reveal mt-3 block text-[clamp(1rem,2.2vw,1.35rem)] tracking-[0.22em] text-zinc-400'
                style={{ animationDelay: '0.22s' }}
              >
                Natural Glam · Photo-Ready
              </span>
            </h1>
          </div>

          <p
            className='hero-reveal mt-5 max-w-md text-sm leading-relaxed text-zinc-600 md:text-[15px] md:leading-7'
            style={{ animationDelay: '0.3s' }}
          >
            Riasan elegan untuk wedding, prewedding, dan acara spesial — soft,
            tahan lama, dan siap difoto. Setiap look dirancang khusus agar kamu
            tampil percaya diri di momen yang hanya terjadi sekali.
          </p>

          <div
            className='hero-reveal mt-7 flex flex-wrap items-center gap-3'
            style={{ animationDelay: '0.38s' }}
          >
            <Button
              href='/booking'
              variant='primary'
              size='lg'
              className='rounded-none px-8 shadow-[4px_4px_0_0_#000] transition-shadow hover:shadow-[2px_2px_0_0_#000]'
            >
              Booking Sekarang
            </Button>
            <Button
              href='/portofolio'
              variant='outline'
              size='lg'
              className='rounded-none px-8'
            >
              Lihat Portofolio
            </Button>
            <Link
              href={siteConfig.instagram}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex h-12 w-12 items-center justify-center border border-black text-black transition-colors hover:bg-black hover:text-white'
              aria-label={`Instagram ${siteConfig.instagramHandle}`}
            >
              <Instagram size={18} strokeWidth={2} />
            </Link>
          </div>

          <div
            className='hero-reveal mt-9 grid grid-cols-3 gap-3 border-t border-zinc-200 pt-7 sm:gap-4'
            style={{ animationDelay: '0.46s' }}
          >
            {stats.map((item) => (
              <div key={item.label}>
                <p className='font-display text-xl text-black sm:text-2xl md:text-3xl'>
                  {item.value}
                </p>
                <p className='mt-1 text-[9px] leading-snug tracking-[0.16em] text-zinc-500 uppercase sm:text-[10px]'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className='hero-reveal mt-5 flex items-start gap-2 text-zinc-600'
            style={{ animationDelay: '0.54s' }}
          >
            <MapPin size={15} className='mt-0.5 shrink-0' aria-hidden />
            <p className='text-xs md:text-sm'>
              <span className='font-medium text-black'>
                Melayani {siteConfig.baseCity} & seluruh Indonesia
              </span>
              <span className='text-zinc-500'> — on-location & studio</span>
            </p>
          </div>
        </div>

        {/* Visual block */}
        <div
          className='relative flex min-h-[420px] items-center justify-center sm:min-h-[480px] lg:min-h-[calc(100dvh-8rem)]'
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
        >
          <div
            ref={visualRef}
            className='hero-reveal relative h-full w-full max-w-[540px] lg:max-w-[580px] xl:max-w-[620px]'
            style={{
              animationDelay: '0.18s',
              transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg)`,
              transition: 'transform 0.35s ease-out',
            }}
          >
            <div className='absolute top-6 right-4 left-4 z-0 hidden h-[90%] border-2 border-black lg:block' />

            <div className='relative z-10 mx-auto w-full max-w-[92%] sm:max-w-[88%] lg:max-w-full'>
              <div className='relative aspect-[3/4] overflow-hidden border-2 border-black bg-zinc-100 shadow-[10px_10px_0_0_#000] md:shadow-[16px_16px_0_0_#000]'>
                <Image
                  src={siteImages.hero}
                  alt='Makeup oleh Angelia Beauty MUA'
                  fill
                  priority
                  className='object-cover object-[center_12%] transition-transform duration-700 hover:scale-[1.02]'
                  sizes='(max-width: 1024px) 88vw, 560px'
                />
                <div className='absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent' />

                <div className='absolute top-4 left-4 border border-white/40 bg-black/50 px-3 py-1.5 backdrop-blur-sm'>
                  <p className='text-[9px] tracking-[0.28em] text-white uppercase'>
                    Look Unggulan
                  </p>
                </div>

                <div className='absolute right-4 bottom-4 left-4 flex items-end justify-between gap-3'>
                  <div>
                    <p className='font-display text-base text-white uppercase sm:text-lg md:text-xl'>
                      Angelia Beauty
                    </p>
                    <p className='text-[10px] tracking-[0.22em] text-white/75 uppercase'>
                      MUA Profesional
                    </p>
                  </div>
                  <span className='font-display text-3xl text-white/25 sm:text-4xl md:text-5xl'>
                    {String(slide + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className='absolute -bottom-6 -left-4 z-20 w-[42%] border-2 border-black bg-white shadow-[6px_6px_0_0_#000] sm:-bottom-7 sm:-left-6 sm:w-[38%] md:-bottom-8 md:-left-8'>
                <div className='relative aspect-[4/5] overflow-hidden'>
                  {accentSlides.map((item, i) => (
                    <Image
                      key={item.src}
                      src={item.src}
                      alt={item.label}
                      fill
                      className={cn(
                        'object-cover transition-all duration-1000',
                        i === slide
                          ? 'scale-100 opacity-100'
                          : 'scale-105 opacity-0',
                      )}
                      sizes='200px'
                    />
                  ))}
                </div>
                <div className='flex items-center justify-between border-t-2 border-black px-2.5 py-2 sm:px-3'>
                  <p className='text-[8px] font-semibold tracking-[0.18em] uppercase sm:text-[9px]'>
                    {accentSlides[slide].label}
                  </p>
                  <div className='flex gap-1'>
                    {accentSlides.map((_, i) => (
                      <button
                        key={i}
                        type='button'
                        aria-label={`Slide ${i + 1}`}
                        onClick={() => setSlide(i)}
                        className={cn(
                          'h-1.5 transition-all duration-300',
                          i === slide
                            ? 'w-4 bg-black sm:w-5'
                            : 'w-1.5 bg-zinc-300 hover:bg-zinc-500',
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href='/booking'
              className='absolute top-4 right-0 z-20 hidden items-center gap-2 border border-black bg-white px-3.5 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors hover:bg-black hover:text-white lg:flex'
            >
              Book Now
              <ArrowUpRight size={14} aria-hidden />
            </Link>

            <a
              href='#natural'
              className='absolute -bottom-2 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex'
              aria-label='Scroll ke bawah'
            >
              <span className='text-[9px] tracking-[0.3em] text-zinc-400 uppercase [writing-mode:vertical-rl]'>
                Scroll
              </span>
              <span className='relative h-12 w-px bg-zinc-300'>
                <span className='absolute top-0 left-0 h-full w-full origin-top animate-hero-pulse-line bg-black' />
              </span>
              <ArrowDown size={13} className='text-zinc-500' aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div className='relative z-10 border-t-2 border-black bg-black text-white'>
        <div className='overflow-hidden py-3.5'>
          <div className='flex w-max animate-hero-ticker items-center gap-10'>
            {[...tickerItems, ...tickerItems].map((label, i) => (
              <span
                key={`${label}-${i}`}
                className='flex shrink-0 items-center gap-10 text-[11px] font-medium tracking-[0.22em] uppercase'
              >
                {label}
                <span className='text-white/30' aria-hidden>
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
