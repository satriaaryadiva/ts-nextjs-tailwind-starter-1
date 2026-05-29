'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

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
    id: 'wedding',
    name: 'Wedding Makeup',
    hash: 'wedding',
    description:
      'Riasan pengantin akad dan resepsi eksklusif yang dirancang khusus agar flawless, ringan, dan memancarkan pesona anggun seharian penuh.',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    popularPackage: 'Full Day Bride',
  },
  {
    id: 'prewedding',
    name: 'Prewedding & Engagement',
    hash: 'prewedding',
    description:
      'Riasan natural glamor yang tahan lama dan photo-ready untuk sesi foto outdoor maupun indoor agar setiap potret tampak sempurna.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    popularPackage: 'Prewedding Look 2',
  },
  {
    id: 'party',
    name: 'Party & Event Glam',
    hash: 'party',
    description:
      'Sentuhan riasan glamor elegan untuk wisuda, pesta keluarga, bridesmaid, prom night, atau menghadiri momen perayaan formal lainnya.',
    image:
      'https://images.unsplash.com/photo-1522337094133-f37f5179a1be?w=800&q=80',
    popularPackage: 'Party + Hair Styling',
  },
  {
    id: 'kursus',
    name: 'Kursus & Workshop',
    hash: 'kursus',
    description:
      'Kelas privat kecantikan 1-on-1 dengan kurikulum personal dari tingkat dasar hingga materi tingkat lanjut untuk merintis karir sebagai profesional MUA.',
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
    popularPackage: 'Private MUA Lesson',
  },
];

export default function ServicesPreview() {
  return (
    <section className='relative overflow-hidden bg-white py-24 md:py-36'>
      {/* Subtle top decoration grid/glow */}
      <div className='pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent' />

      <div className='layout relative z-10'>
        {/* Section Header */}
        <div className='mb-16 flex flex-col items-center text-center md:mb-24'>
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
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {servicePreviews.map((service) => (
            <Link
              key={service.id}
              href={`/layanan#${service.hash}`}
              className='group relative flex h-[480px] flex-col justify-end overflow-hidden rounded-[2.5rem] bg-zinc-900 p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-950/20 md:p-8'
            >
              {/* Background image overlay */}
              <div className='absolute inset-0 z-0 overflow-hidden'>
                <img
                  src={service.image}
                  alt={service.name}
                  className='h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110'
                  loading='lazy'
                />
                {/* Dark gradients to ensure text visibility */}
                <div className='absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent transition-opacity duration-500 group-hover:opacity-95' />
              </div>

              {/* Card content */}
              <div className='relative z-10 flex flex-col justify-end text-white'>
                {/* Popular package tag */}
                <span className='mb-2 self-start rounded-full bg-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-amber-300 backdrop-blur-sm transition-colors duration-300 group-hover:bg-amber-600 group-hover:text-white'>
                  Terpopuler: {service.popularPackage}
                </span>

                <h3 className='font-display text-xl font-bold tracking-tight md:text-2xl'>
                  {service.name}
                </h3>

                {/* Smooth description reveal */}
                <div className='grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr]'>
                  <div className='overflow-hidden'>
                    <p className='mt-3 text-xs leading-relaxed text-zinc-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Action indicator link */}
                <div className='mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 group-hover:text-white transition-colors duration-300'>
                  <span>Lihat Selengkapnya</span>
                  <ArrowRight className='h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1.5' />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className='mt-20 text-center'>
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
