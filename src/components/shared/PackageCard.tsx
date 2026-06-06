import { Check, MessageCircle } from 'lucide-react';
import Link from 'next/link';

import { siteConfig } from '@/constant/config';
import type { Package } from '@/data/packages';
import { categoryLabels } from '@/data/packages';

function buildWaLink(pkg: Package) {
  const text = encodeURIComponent(
    `Halo Angelia Beauty MUA 👋\n\nSaya tertarik dengan paket *${pkg.name}* (${categoryLabels[pkg.category]}).\n\nBoleh info harga & ketersediaan tanggal? Terima kasih!`,
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className='group flex h-full flex-col border-2 border-black bg-white shadow-[6px_6px_0_0_#000] transition-all duration-300 hover:shadow-[3px_3px_0_0_#000]'>
      <div className='flex flex-1 flex-col justify-between p-6 md:p-7'>
        <div>
          <span className='inline-block border border-black bg-black px-3 py-1 text-[9px] font-semibold tracking-[0.2em] text-white uppercase'>
            {categoryLabels[pkg.category]}
          </span>

          <h3 className='font-display mt-4 text-xl tracking-tight text-black uppercase md:text-2xl'>
            {pkg.name}
          </h3>
          <p className='mt-2.5 text-sm leading-relaxed text-zinc-600'>
            {pkg.description}
          </p>

          <ul className='mt-6 space-y-2.5 border-t border-zinc-200 pt-5'>
            {pkg.includes.map((item) => (
              <li
                key={item}
                className='flex items-start gap-2.5 text-xs text-zinc-700 md:text-sm'
              >
                <Check
                  className='mt-0.5 h-3.5 w-3.5 shrink-0 text-black'
                  strokeWidth={2.5}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-7 space-y-3 border-t border-zinc-200 pt-5'>
          <p className='text-[10px] tracking-[0.18em] text-zinc-500 uppercase'>
            Harga via konsultasi WhatsApp
          </p>
          <a
            href={buildWaLink(pkg)}
            target='_blank'
            rel='noopener noreferrer'
            className='flex w-full items-center justify-center gap-2 border-2 border-black bg-black py-3 text-xs font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-white hover:text-black'
          >
            <MessageCircle size={15} aria-hidden />
            Tanya Harga
          </a>
          <Link
            href={`/booking?paket=${pkg.slug}`}
            className='flex w-full items-center justify-center border border-zinc-300 py-2.5 text-[10px] font-medium tracking-[0.18em] text-zinc-600 uppercase transition-colors hover:border-black hover:text-black'
          >
            Booking Online
          </Link>
        </div>
      </div>
    </article>
  );
}
