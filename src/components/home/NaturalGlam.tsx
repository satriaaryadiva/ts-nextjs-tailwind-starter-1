import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import Button from '@/components/ui/Button';
import { siteImages } from '@/data/images';

const highlights = [
  'Kulit flawless tanpa terlihat berlebihan',
  'Soft contour & highlight photo-ready',
  'Tahan lama untuk acara seharian',
  'Cocok wedding, prewedding & photoshoot',
];

const naturalPhotos = [
  {
    src: siteImages.natural1,
    alt: 'Portrait natural glam makeup — Angelia Beauty MUA',
    label: 'Natural Glam',
  },
  {
    src: siteImages.natural2,
    alt: 'Close-up riasan natural elegan — Angelia Beauty MUA',
    label: 'Soft Glam',
  },
] as const;

export default function NaturalGlam() {
  return (
    <section
      id='natural'
      className='scroll-mt-24 border-t border-zinc-200 bg-white py-20 md:py-28'
    >
      <div className='layout'>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20'>
          {/* Visual */}
          <div className='relative order-2 lg:order-1'>
            <div className='relative mx-auto max-w-lg lg:max-w-none'>
              <div className='relative aspect-[4/5] overflow-hidden border-2 border-black shadow-[12px_12px_0_0_#000] md:shadow-[16px_16px_0_0_#000]'>
                <Image
                  src={siteImages.naturalCollage}
                  alt='Koleksi look natural glam — Angelia Beauty MUA'
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 92vw, 520px'
                />
                <div className='absolute top-4 left-4 border border-white/40 bg-black/60 px-3 py-1.5 backdrop-blur-sm'>
                  <p className='text-[9px] tracking-[0.28em] text-white uppercase'>
                    Signature Look
                  </p>
                </div>
              </div>

              <div className='mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:mt-5'>
                {naturalPhotos.map((photo) => (
                  <figure
                    key={photo.src}
                    className='group relative aspect-[3/4] overflow-hidden border-2 border-black bg-zinc-100 shadow-[5px_5px_0_0_#000]'
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className='object-cover transition-transform duration-700 group-hover:scale-105'
                      sizes='(max-width: 1024px) 44vw, 240px'
                    />
                    <figcaption className='absolute right-0 bottom-0 left-0 bg-black/75 px-2.5 py-2'>
                      <p className='text-[8px] tracking-[0.2em] text-white uppercase sm:text-[9px]'>
                        {photo.label}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className='pointer-events-none absolute -top-3 -right-3 hidden border-2 border-black bg-black px-4 py-2 text-white md:block lg:-right-6'>
                <p className='font-display text-xs tracking-[0.25em] uppercase'>
                  Natural
                </p>
                <p className='text-[10px] tracking-[0.3em] text-white/70 uppercase'>
                  Glam
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className='order-1 lg:order-2'>
            <p className='text-[10px] font-semibold tracking-[0.32em] text-zinc-400 uppercase'>
              Look Signature
            </p>
            <h2 className='font-display mt-3 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] text-black uppercase'>
              Natural Glam
            </h2>
            <p className='mt-2 text-sm tracking-[0.22em] text-zinc-500 uppercase md:text-base'>
              Cantik maksimal · Tidak berlebihan
            </p>

            <p className='mt-6 max-w-lg text-sm leading-relaxed text-zinc-600 md:text-[15px] md:leading-7'>
              Look andalan Angelia Beauty — riasan yang menonjolkan kecantikan
              alami wajahmu. Soft, elegan, dan siap difoto dari jarak dekat
              maupun di layar. Perfect untuk hari-H, prewedding, dan sesi
              photoshoot.
            </p>

            <ul className='mt-8 space-y-3'>
              {highlights.map((item) => (
                <li key={item} className='flex gap-3 text-sm text-zinc-700'>
                  <span className='mt-1.5 h-1.5 w-1.5 shrink-0 bg-black' />
                  {item}
                </li>
              ))}
            </ul>

            <div className='mt-9 flex flex-wrap items-center gap-3'>
              <Button
                href='/booking?style=natural'
                variant='primary'
                size='lg'
                className='rounded-none px-8 shadow-[4px_4px_0_0_#000]'
              >
                Booking Natural Look
              </Button>
              <Link
                href='/portofolio'
                className='inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.2em] text-zinc-600 uppercase transition-colors hover:text-black'
              >
                Lihat Portofolio
                <ArrowUpRight size={14} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
