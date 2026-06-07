import Link from 'next/link';
import { ArrowDown, MapPin } from 'lucide-react';

import { siteConfig } from '@/constant/config';
import { portfolioCategories, portfolioItems } from '@/data/portfolio';

const storyBeats = [
  {
    num: '01',
    title: 'Percakapan',
    desc: 'Setiap karya diawali dari cerita acara, karakter wajah, dan impian look yang ingin dikenang.',
  },
  {
    num: '02',
    title: 'Kreasi',
    desc: 'Skin-first, natural glam, photo-ready — dirancang tahan flash, peluh, dan air mata bahagia.',
  },
  {
    num: '03',
    title: 'Kenangan',
    desc: 'Bukan hanya cantik di kamera — tapi saat kamu melihat cermin dan bilang, ini aku.',
  },
] as const;

const tickerItems = [
  ...portfolioCategories.map((c) => c.label),
  siteConfig.hashtag,
  `${siteConfig.baseCity} · Indonesia`,
  'Natural Glam',
  'Photo-Ready',
];

export default function PortfolioStoryIntro() {
  const photoCount = portfolioItems.filter((i) => i.type === 'image').length;
  const videoCount = portfolioItems.filter((i) => i.type === 'video').length;

  return (
    <section className='relative overflow-hidden border-b-2 border-black bg-white'>
      {/* Ticker */}
      <div className='border-b-2 border-black bg-black text-white'>
        <div className='overflow-hidden py-3'>
          <div className='flex w-max animate-hero-ticker items-center gap-8'>
            {[...tickerItems, ...tickerItems].map((label, i) => (
              <span
                key={`${label}-${i}`}
                className='flex shrink-0 items-center gap-8 text-[10px] font-medium tracking-[0.24em] uppercase md:text-[11px]'
              >
                {label}
                <span className='text-gold-light' aria-hidden>
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className='relative'>
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.05]'
          aria-hidden
          style={{
            backgroundImage:
              'linear-gradient(to right, #b8860b 1px, transparent 1px), linear-gradient(to bottom, #b8860b 1px, transparent 1px)',
            backgroundSize: '2.75rem 2.75rem',
          }}
        />
        <div
          className='pointer-events-none absolute -right-4 top-8 font-display text-[clamp(6rem,22vw,12rem)] leading-none text-gold/10 select-none md:top-12'
          aria-hidden
        >
          AB
        </div>

        <div className='layout relative z-10 grid gap-10 py-12 md:grid-cols-12 md:gap-8 md:py-16 lg:gap-12 lg:py-20'>
          <div className='md:col-span-7 lg:col-span-8'>
            <div className='inline-flex items-center gap-2 border border-gold/40 bg-gold-pale/50 px-3 py-1.5'>
              <span className='text-[10px] tracking-[0.28em] text-black uppercase'>
                Portofolio
              </span>
              <span className='h-3 w-px bg-gold/40' aria-hidden />
              <span className='text-[10px] tracking-[0.2em] text-gold-muted uppercase'>
                {portfolioItems.length} Karya
              </span>
            </div>

            <h1 className='font-display mt-6 text-[clamp(2.5rem,8vw,5rem)] leading-[0.95] text-black uppercase'>
              Bukan Sekadar
              <br />
              <span className='text-gold-light'>Foto.</span>
              <br />
              Ini Cerita.
            </h1>

            <div className='mt-5 h-px w-16 bg-gold md:mt-6' aria-hidden />

            <p className='mt-6 max-w-lg text-base leading-relaxed text-gold-muted md:mt-8 md:text-lg'>
              Galeri ini adalah arsip momen — sister of bride yang menemani hari
              sakral keluarga, prewedding di outdoor, wedding natural glam,
              sampai party yang tahan sampai tengah malam.
            </p>

            <p className='mt-4 flex items-start gap-2 text-sm text-gold-muted md:text-base'>
              <MapPin
                size={16}
                className='mt-0.5 shrink-0 text-gold'
                aria-hidden
              />
              <span>
                Base{' '}
                <strong className='font-medium text-gold'>
                  {siteConfig.baseCity}
                </strong>
                {' · '}melayani seluruh Indonesia — on-location & travel
              </span>
            </p>
          </div>

          <div className='md:col-span-5 lg:col-span-4'>
            <div className='border-2 border-black bg-black p-6 text-white shadow-[8px_8px_0_0_#b8860b] md:p-8'>
              <p className='text-[10px] tracking-[0.3em] text-gold-light uppercase'>
                Filosofi
              </p>
              <blockquote className='mt-4'>
                <p className='font-display text-2xl leading-[1.1] uppercase md:text-3xl'>
                  Makeup yang bagus bukan yang paling tebal —
                </p>
                <p className='mt-2 font-display text-2xl leading-[1.1] text-gold-light uppercase md:text-3xl'>
                  tapi yang tahan cerita.
                </p>
              </blockquote>
              <footer className='mt-6 border-t border-gold/25 pt-5 text-[10px] tracking-[0.22em] text-gold-soft uppercase'>
                Angelia Beauty MUA
              </footer>

              <div className='mt-6 grid grid-cols-3 gap-2'>
                {[
                  { value: portfolioItems.length, label: 'Karya' },
                  { value: photoCount, label: 'Foto' },
                  { value: videoCount, label: 'Video' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className='border border-gold/30 px-2 py-3 text-center'
                  >
                    <p className='font-display text-xl text-gold-light md:text-2xl'>
                      {stat.value}
                    </p>
                    <p className='mt-1 text-[8px] tracking-[0.14em] text-gold-soft uppercase'>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='layout relative z-10 border-t-2 border-black bg-gold-pale/40'>
          <div className='grid md:grid-cols-3'>
            {storyBeats.map((beat, i) => (
              <div
                key={beat.num}
                className={`group p-6 transition-colors hover:bg-gold-pale/80 md:p-8 ${i < storyBeats.length - 1 ? 'border-b-2 border-black md:border-r-2 md:border-b-0' : ''}`}
              >
                <span className='font-display text-4xl text-gold/20 transition-colors group-hover:text-gold/35 md:text-5xl'>
                  {beat.num}
                </span>
                <h2 className='font-display mt-3 text-lg text-black uppercase md:text-xl'>
                  {beat.title}
                </h2>
                <p className='mt-2 text-sm leading-relaxed text-gold-muted'>
                  {beat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='layout relative z-10 flex flex-col items-center gap-6 border-t border-gold/25 py-8 md:flex-row md:justify-between md:py-10'>
          <div className='flex flex-wrap justify-center gap-2 md:justify-start'>
            {portfolioCategories.map((cat) => (
              <span
                key={cat.slug}
                className='border border-gold/35 bg-white px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-gold-muted uppercase transition-colors hover:border-gold hover:bg-gold-pale hover:text-gold'
              >
                {cat.label}
              </span>
            ))}
          </div>

          <Link
            href='#unggulan'
            className='group inline-flex items-center gap-3 text-[10px] tracking-[0.28em] text-gold-muted uppercase transition-colors hover:text-gold'
          >
            Lihat Unggulan
            <span className='flex h-9 w-9 items-center justify-center border-2 border-gold bg-white text-gold transition-colors group-hover:bg-gold group-hover:text-black'>
              <ArrowDown
                size={16}
                className='transition-transform group-hover:translate-y-0.5'
                aria-hidden
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
