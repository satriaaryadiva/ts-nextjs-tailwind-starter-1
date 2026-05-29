import type { Metadata } from 'next';

import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan',
};

export default function SyaratPage() {
  return (
    <>
      <PageHero title='Syarat & Ketentuan' />
      <article className='layout prose-charcoal max-w-3xl py-12 pb-20'>
        <div className='space-y-6 text-sm leading-relaxed text-charcoal-light'>
          <section>
            <h2 className='font-display text-lg text-charcoal'>
              1. Pemesanan & DP
            </h2>
            <p className='mt-2'>
              Tanggal dianggap terkonfirmasi setelah DP 30% diterima. Pelunasan
              dilakukan maksimal H-7 sebelum acara kecuali disepakati lain via
              WhatsApp.
            </p>
          </section>
          <section>
            <h2 className='font-display text-lg text-charcoal'>
              2. Pembatalan & Reschedule
            </h2>
            <p className='mt-2'>
              Pembatalan H-30 atau lebih: DP dapat dipindahkan ke tanggal lain
              (1×). Pembatalan H-14 ke bawah: DP hangus. Force majeure
              didiskusikan secara musyawarah.
            </p>
          </section>
          <section>
            <h2 className='font-display text-lg text-charcoal'>
              3. Keterlambatan Klien
            </h2>
            <p className='mt-2'>
              Keterlambatan dari pihak klien dapat mempengaruhi jadwal makeup
              berikutnya. Mohon siapkan venue dan lighting yang memadai.
            </p>
          </section>
          <section>
            <h2 className='font-display text-lg text-charcoal'>
              4. Layanan Luar Kota
            </h2>
            <p className='mt-2'>
              Untuk acara di luar Medan, biaya transport dan akomodasi (jika
              diperlukan) ditambahkan dan dikonfirmasi sebelum DP.
            </p>
          </section>
          <section>
            <h2 className='font-display text-lg text-charcoal'>
              5. Hak Foto & Portofolio
            </h2>
            <p className='mt-2'>
              Angelia Beauty MUA berhak menggunakan foto hasil makeup untuk
              portofolio dan media sosial dengan persetujuan klien. Tanpa
              persetujuan, foto tidak akan dipublikasikan.
            </p>
          </section>
          <p className='text-charcoal-light pt-4 text-xs italic'>
            Dokumen ini bersifat dummy untuk pengembangan website. Sesuaikan
            dengan kebijakan bisnis resmi sebelum launch.
          </p>
        </div>
      </article>
    </>
  );
}
