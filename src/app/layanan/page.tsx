import type { Metadata } from 'next';
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
    'Paket wedding, prewedding, party, dan layanan makeup profesional — Angelia Beauty MUA, Medan.',
};

const serviceCategories: PackageCategory[] = [
  'wedding',
  'prewedding',
  'party',
  'kursus',
  'other',
];

export default function LayananPage() {
  return (
    <>
      <PageHero
        title='Pilihan Layanan Terbaik'
        subtitle='Sempurnakan setiap momen berharga Anda dengan sentuhan makeup artistik profesional yang dirancang khusus untuk menonjolkan kecantikan alami.'
      />

      <div className='bg-slate-50/60 py-16 md:py-24'>
        <div className='layout'>
          {/* Subtitle note */}
          <div className='mx-auto mb-16 max-w-xl text-center'>
            <p className='rounded-full border border-amber-200/60 bg-amber-50/50 px-5 py-2 text-xs font-medium italic text-amber-900'>
              * Harga yang tercantum bersifat estimasi awal. Penawaran resmi
              final akan disesuaikan dengan tanggal, lokasi acara, dan kebutuhan
              spesifik Anda.
            </p>
          </div>

          {/* Service Categories Sections */}
          <div className='space-y-24'>
            {serviceCategories.map((cat) => {
              const items = packages.filter((p) => p.category === cat);
              if (items.length === 0) return null;

              return (
                <section key={cat} id={cat} className='scroll-mt-24'>
                  {/* Category Header */}
                  <div className='mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-200 pb-5'>
                    <div>
                      <span className='text-xs font-bold uppercase tracking-wider text-amber-700'>
                        Kategori Layanan
                      </span>
                      <h2 className='font-display mt-1 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl'>
                        {categoryLabels[cat]}
                      </h2>
                    </div>
                    <p className='mt-2 max-w-md text-sm text-zinc-500 md:mt-0 md:text-right'>
                      Kumpulan paket riasan {categoryLabels[cat].toLowerCase()}{' '}
                      dengan jaminan kualitas flawless seharian.
                    </p>
                  </div>

                  {/* Grid layout for packages */}
                  <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {items.map((pkg) => (
                      <PackageCard key={pkg.slug} pkg={pkg} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Out of Town Service Info */}
          <section className='mt-28 overflow-hidden rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-lg shadow-zinc-100/50 md:p-12'>
            <div className='grid gap-8 md:grid-cols-3 items-center'>
              <div className='md:col-span-2'>
                <span className='text-xs font-bold uppercase tracking-wider text-amber-700'>
                  Layanan Seluruh Indonesia
                </span>
                <h3 className='font-display mt-2 text-2xl font-bold text-zinc-950 md:text-3xl'>
                  Studio Base di {siteConfig.baseCity}
                </h3>
                <p className='mt-4 leading-relaxed text-zinc-600 text-sm md:text-base'>
                  Meskipun studio utama kami berlokasi di{' '}
                  <strong>{siteConfig.baseCity}</strong>,{' '}
                  {siteConfig.baseRegion}, kami sangat senang melayani pemesanan
                  riasan di luar kota hingga ke seluruh wilayah Indonesia. Untuk
                  pemesanan di luar kota Medan, biaya tambahan berupa akomodasi
                  (apabila menginap) dan biaya perjalanan akan disesuaikan
                  dengan kota tujuan Anda.
                </p>
              </div>
              <div className='flex justify-start md:justify-end'>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center rounded-full bg-amber-600 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-amber-600/10 transition-all duration-300 hover:bg-amber-700 hover:shadow-lg'
                >
                  Konsultasi Via WhatsApp
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
