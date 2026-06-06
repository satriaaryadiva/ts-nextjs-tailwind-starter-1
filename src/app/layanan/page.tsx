import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

import PackageCard from '@/components/shared/PackageCard';
import CtaBanner from '@/components/shared/CtaBanner';
import PageHero from '@/components/shared/PageHero';
import { siteConfig } from '@/constant/config';
import {
  categoryLabels,
  packages,
  type PackageCategory,
} from '@/data/packages';

export const metadata: Metadata = {
  title: 'Layanan Makeup',
  description:
    'Layanan wedding, bride, prewedding, photoshoot, dan party — Angelia Beauty MUA, Medan.',
};

const serviceCategories: {
  slug: PackageCategory;
  description: string;
}[] = [
  {
    slug: 'wedding',
    description:
      'Riasan untuk momen sakral akad dan resepsi — natural glam, elegan, dan photo-ready.',
  },
  {
    slug: 'bride',
    description:
      'Paket khusus pengantin — full day standby, trial makeup, dan pendampingan eksklusif hari-H.',
  },
  {
    slug: 'prewedding',
    description:
      'Makeup & hair untuk sesi prewedding dan engagement — tahan lama di outdoor maupun studio.',
  },
  {
    slug: 'photoshoot',
    description:
      'Riasan photo-ready HD untuk content creator, branding, editorial, dan portofolio.',
  },
  {
    slug: 'party',
    description:
      'Glam look untuk wisuda, pesta, prom, bridesmaid, dan acara formal lainnya.',
  },
];

export default function LayananPage() {
  return (
    <>
      <PageHero
        title='Layanan Makeup'
        subtitle='Wedding · Bride · Prewedding · Photoshoot · Party — setiap look dirancang khusus untuk kamu.'
      />

      <div className='border-t border-zinc-200 bg-white py-16 md:py-24'>
        <div className='layout'>
          <div className='mx-auto mb-14 max-w-2xl text-center md:mb-20'>
            <p className='border border-black bg-black px-5 py-3 text-xs tracking-[0.2em] text-white uppercase md:text-sm'>
              Harga & penawaran hanya via WhatsApp — disesuaikan tanggal,
              lokasi, dan kebutuhan acaramu.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-5 inline-flex items-center gap-2 border-2 border-black px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-black hover:text-white'
            >
              <MessageCircle size={16} aria-hidden />
              Chat WhatsApp
            </a>
          </div>

          <div className='mb-12 flex flex-wrap justify-center gap-2 md:mb-16 md:gap-3'>
            {serviceCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className='border border-zinc-300 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-zinc-600 uppercase transition-colors hover:border-black hover:text-black md:px-5 md:py-2.5 md:text-xs'
              >
                {categoryLabels[cat.slug]}
              </a>
            ))}
          </div>

          <div className='space-y-20 md:space-y-28'>
            {serviceCategories.map((cat) => {
              const items = packages.filter((p) => p.category === cat.slug);
              if (items.length === 0) return null;

              return (
                <section key={cat.slug} id={cat.slug} className='scroll-mt-28'>
                  <div className='mb-8 flex flex-col gap-4 border-b-2 border-black pb-6 md:mb-10 md:flex-row md:items-end md:justify-between'>
                    <div>
                      <p className='text-[10px] tracking-[0.28em] text-zinc-400 uppercase'>
                        Kategori
                      </p>
                      <h2 className='font-display mt-1 text-3xl text-black uppercase md:text-4xl'>
                        {categoryLabels[cat.slug]}
                      </h2>
                    </div>
                    <p className='max-w-md text-sm leading-relaxed text-zinc-600 md:text-right'>
                      {cat.description}
                    </p>
                  </div>

                  <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                    {items.map((pkg) => (
                      <PackageCard key={pkg.slug} pkg={pkg} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <section className='mt-20 border-2 border-black bg-zinc-50 p-8 md:mt-28 md:p-12'>
            <div className='grid items-center gap-8 md:grid-cols-3'>
              <div className='md:col-span-2'>
                <p className='text-[10px] tracking-[0.28em] text-zinc-500 uppercase'>
                  Melayani Seluruh Indonesia
                </p>
                <h3 className='font-display mt-2 text-2xl text-black uppercase md:text-3xl'>
                  Base {siteConfig.baseCity}
                </h3>
                <p className='mt-4 text-sm leading-relaxed text-zinc-600 md:text-base'>
                  Studio utama di <strong>{siteConfig.baseCity}</strong>,{' '}
                  {siteConfig.baseRegion}. Melayani on-location di luar kota —
                  biaya transport & akomodasi dikonsultasikan via WhatsApp.
                </p>
              </div>
              <div className='flex md:justify-end'>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex w-full items-center justify-center gap-2 border-2 border-black bg-black px-8 py-4 text-xs font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-white hover:text-black md:w-auto'
                >
                  <MessageCircle size={16} aria-hidden />
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
