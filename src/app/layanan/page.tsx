import type { Metadata } from 'next';

import PackageCard from '@/components/shared/PackageCard';
import CtaBanner from '@/components/shared/CtaBanner';
import PageHero from '@/components/shared/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
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
  'other',
];

export default function LayananPage() {
  return (
    <>
      <PageHero
        title='Layanan Makeup'
        subtitle='Dari hari pernikahan sampai pesta — pilih paket yang sesuai. Harga final setelah konsultasi.'
      />
      <div className='layout py-12 md:py-16'>
        <p className='text-charcoal-light mb-12 text-center text-sm italic'>
          *Harga di bawah bersifat estimasi. Penawaran final mengikuti tanggal,
          lokasi, dan kebutuhan kamu.
        </p>

        {serviceCategories.map((cat) => {
          const items = packages.filter((p) => p.category === cat);
          return (
            <section key={cat} id={cat} className='mb-16 scroll-mt-24'>
              <SectionHeading
                title={categoryLabels[cat]}
                align='left'
                className='mb-8'
              />
              <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {items.map((pkg) => (
                  <PackageCard key={pkg.slug} pkg={pkg} />
                ))}
              </div>
            </section>
          );
        })}

        <section className='rounded-sm border border-cream-dark bg-white p-8 md:p-10'>
          <h2 className='font-display text-2xl text-charcoal'>
            Melayani Seluruh Indonesia
          </h2>
          <p className='text-charcoal-light mt-4 leading-relaxed'>
            Base studio di <strong>{siteConfig.baseCity}</strong>,{' '}
            {siteConfig.baseRegion}. Untuk acara di luar Medan, dikenakan biaya
            transport dan akomodasi (jika menginap) sesuai kota tujuan.
            Konsultasi jarak jauh bisa via WhatsApp sebelum lock tanggal.
          </p>
        </section>
      </div>
      <CtaBanner />
    </>
  );
}
