import Link from 'next/link';
import type { Package } from '@/data/packages';
import { formatRupiah } from '@/data/packages';
import { Check } from 'lucide-react';

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className='group flex h-full flex-col overflow-hidden border border-zinc-100 bg-white shadow-md shadow-zinc-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/50'>
      {/* 1. GAMBAR LAYANAN (Service Image) */}
      <div className='relative h-56 w-full overflow-hidden bg-zinc-100'>
        <img
          src={pkg.image}
          alt={pkg.name}
          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
          loading='lazy'
        />
        {/* Category Tag overlay */}
        <div className='absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 shadow-sm backdrop-blur-sm'>
          {pkg.category}
        </div>
      </div>

      {/* Card Content */}
      <div className='flex flex-1 flex-col justify-between p-6 md:p-8'>
        <div>
          {/* Title & Description */}
          <h3 className='font-display text-xl font-bold tracking-tight text-zinc-950 group-hover:text-amber-800 transition-colors duration-300'>
            {pkg.name}
          </h3>
          <p className='mt-2.5 text-sm leading-relaxed text-zinc-500'>
            {pkg.description}
          </p>

          {/* Includes List */}
          <ul className='mt-6 space-y-3 border-t border-zinc-50 pt-5'>
            {pkg.includes.map((item) => (
              <li
                key={item}
                className='flex items-start gap-2.5 text-xs text-zinc-600'
              >
                <div className='mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-700'>
                  <Check className='h-2.5 w-2.5' />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & CTA Button */}
        <div className='mt-8 border-t border-zinc-100 pt-5'>
          <div className='flex items-baseline justify-between'>
            <span className='text-xs font-medium text-zinc-400'>
              Mulai dari
            </span>
            <span className='font-display text-lg font-bold text-zinc-900'>
              {formatRupiah(pkg.priceFrom)}
            </span>
          </div>

          <Link
            href={`/booking?paket=${pkg.slug}`}
            className='mt-4 flex w-full items-center justify-center rounded-full bg-zinc-900 py-3 text-xs font-semibold tracking-wider text-white uppercase shadow-sm transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-600/20'
          >
            Pilih Paket
          </Link>
        </div>
      </div>
    </article>
  );
}
