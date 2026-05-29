import type { Metadata } from 'next';

import PackageCard from '@/components/shared/PackageCard';
import CtaBanner from '@/components/shared/CtaBanner';
import PageHero from '@/components/shared/PageHero';
import { packages } from '@/data/packages';

export const metadata: Metadata = {
  title: 'Kursus Makeup',
  description:
    'Belajar makeup profesional dengan Angelia Beauty MUA — private, semi-private, dan basic class di Medan.',
};

const kursusPackages = packages.filter((p) => p.category === 'kursus');

const curriculum = [
  'Skin prep & analisis kulit',
  'Base flawless untuk foto & video',
  'Eye makeup & lashes',
  'Contouring & blush',
  'Lip techniques',
  'Hair styling dasar (basic class)',
];

export default function KursusPage() {
  return (
    <>
      <PageHero
        title='Kursus Makeup'
        subtitle='Belajar teknik makeup profesional — langsung dipandu Angelia, dari dasar hingga wedding glam.'
      />
      <div className='layout py-12 md:py-16'>
        <div className='grid gap-12 lg:grid-cols-2'>
          <div>
            <h2 className='font-display text-2xl text-charcoal'>
              Apa yang akan kamu pelajari?
            </h2>
            <ul className='mt-6 space-y-3'>
              {curriculum.map((item) => (
                <li
                  key={item}
                  className='text-charcoal-light flex gap-3 text-sm'
                >
                  <span className='text-rose'>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className='text-charcoal-light mt-8 text-sm'>
              Jadwal batch terdekat diumumkan via Instagram{' '}
              <strong>@angeliabeauty_mua</strong>. Untuk private class, tanggal
              fleksibel sesuai kesepakatan.
            </p>
          </div>
          <div className='grid gap-6'>
            {kursusPackages.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>
      <CtaBanner
        title='Siap mulai belajar?'
        subtitle='Daftar via booking — pilih Kursus Makeup.'
      />
    </>
  );
}
