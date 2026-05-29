import Link from 'next/link';

import type { Package } from '@/data/packages';
import { formatRupiah } from '@/data/packages';

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className='flex h-full flex-col rounded-sm border border-cream-dark bg-white p-6 transition-shadow hover:shadow-md'>
      <h3 className='font-display text-xl text-charcoal'>{pkg.name}</h3>
      <p className='mt-2 text-sm text-charcoal-light'>{pkg.description}</p>
      <ul className='mt-4 flex-1 space-y-2 text-sm text-charcoal-light'>
        {pkg.includes.map((item) => (
          <li key={item} className='flex gap-2'>
            <span className='text-rose'>✓</span>
            {item}
          </li>
        ))}
      </ul>
      <p className='text-charcoal mt-6 font-medium'>
        Mulai dari {formatRupiah(pkg.priceFrom)}
      </p>
      <Link
        href={`/booking?paket=${pkg.slug}`}
        className='border-charcoal hover:bg-charcoal mt-4 inline-block border px-4 py-2.5 text-center text-xs tracking-widest uppercase transition-colors hover:text-cream'
      >
        Pilih Paket
      </Link>
    </article>
  );
}
