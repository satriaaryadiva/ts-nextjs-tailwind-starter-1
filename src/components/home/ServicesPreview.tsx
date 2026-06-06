'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Button from '@/components/ui/Button';
import { siteImages } from '@/data/images';

type ServiceCategoryPreview = {
  id: string;
  name: string;
  hash: string;
  description: string;
  image: string;
  popularPackage: string;
};

const servicePreviews: ServiceCategoryPreview[] = [
  {
    id: 'Prewedding',
    name: 'Prewedding',
    hash: 'Prewedding',
    description:
      'Riasan akad dan resepsi — natural glam, elegan, dan photo-ready untuk momen sakral pernikahanmu.',
    image: '/images/IMG_0990.webp',
    popularPackage: 'Akad Saja',
  },
  {
    id: 'Engagement ',
    name: 'Engagement',
    hash: ' ',
    description:
      'Paket pengantin full day — trial makeup, standby seharian, dan pendampingan eksklusif hari-H.',
    image: '/images/IMG_1035.webp',
    popularPackage: ' Makeup',
  },
  {
    id: 'Wedding',
    name: 'Wedding',
    hash: 'wedding',
    description:
      'Makeup & hair tahan lama untuk sesi prewedding dan engagement — outdoor maupun studio.',
    image: '/images/IMG_0469.JPG.webp',
    popularPackage: 'Look 2',
  },
  {
    id: 'photoshoot',
    name: 'Photoshoot',
    hash: 'photoshoot',
    description:
      'Riasan photo-ready HD untuk content creator, branding, editorial, dan portofolio.',
    image: '/images/IMG_1213.JPG.webp',
    popularPackage: 'Full Session',
  },
  {
    id: 'party',
    name: 'Party',
    hash: 'party',
    description:
      'Glam look untuk wisuda, pesta, prom, bridesmaid, dan acara formal lainnya.',
    image: siteImages.services.party,
    popularPackage: 'Party + Hair',
  },
];

export default function ServicesPreview() {
  return (
    <section className='relative overflow-hidden bg-white py-14 md:py-20'>
      {/* Subtle top decoration grid/glow */}
      <div className='pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent' />

      <div className='layout relative z-10'>
        {/* Section Header */}
        <div className='mb-10 flex flex-col items-center text-center md:mb-24'>
          <span className='mb-4 inline-block rounded-full border border-amber-200 bg-amber-50 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800 backdrop-blur-sm'>
            Layanan Kami
          </span>
          <h2 className='font-display text-4xl tracking-tight text-zinc-900 md:text-5xl lg:text-6xl'>
            Seni Rias Profesional
          </h2>
          <p className='mt-4 max-w-xl text-base text-zinc-600 md:text-lg'>
            Pilih kategori layanan riasan yang disesuaikan secara khusus untuk
            memenuhi setiap impian keindahan penampilan Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid gap-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5'>
          {servicePreviews.map((service) => (
            <Link
              key={service.id}
              href={`/layanan#${service.hash}`}
              className='group relative flex min-h-[420px] flex-col justify-end overflow-hidden border-2 border-black bg-zinc-900 p-5 shadow-[5px_5px_0_0_#000] transition-all duration-500 hover:shadow-[2px_2px_0_0_#000] sm:min-h-[460px] md:h-[460px] md:p-6'
            >
              {/* Background image overlay */}
              <div className='absolute inset-0 z-0 overflow-hidden'>
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className='object-cover transition-transform duration-1000 ease-out group-hover:scale-110'
                  sizes='(max-width: 1024px) 50vw, 25vw'
                />
                {/* Dark gradients to ensure text visibility */}
                <div className='absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent transition-opacity duration-500 group-hover:opacity-95' />
              </div>

              {/* Card content */}
              <div className='relative z-10 flex flex-col justify-end text-white'>
                {/* Popular package tag */}
                <span className='mb-3 self-start rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-amber-300 backdrop-blur-sm transition-colors duration-300 group-hover:bg-amber-600 group-hover:text-white'>
                  Terpopuler: {service.popularPackage}
                </span>

                <h3 className='font-display text-xl font-bold tracking-tight md:text-2xl'>
                  {service.name}
                </h3>

                {/* Description — always visible on mobile, reveal on hover desktop */}
                <div className='grid grid-rows-[1fr] transition-all duration-500 ease-in-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]'>
                  <div className='overflow-hidden'>
                    <p className='mt-3 text-xs leading-relaxed text-zinc-300 line-clamp-3 opacity-100 md:line-clamp-none md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100'>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Action indicator link */}
                <div className='mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 transition-colors duration-300 group-hover:text-white md:mt-5'>
                  <span>Lihat Selengkapnya</span>
                  <ArrowRight className='h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1.5' />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className='mt-12 text-center md:mt-20'>
          <Button
            href='/layanan'
            variant='outline'
            className='rounded-full border-zinc-200 bg-white px-10 py-4 text-xs font-bold tracking-widest text-zinc-700 shadow-sm hover:border-amber-400 hover:bg-amber-50 hover:text-amber-800 uppercase'
          >
            Jelajahi Semua Layanan
          </Button>
        </div>
      </div>
    </section>
  );
}
