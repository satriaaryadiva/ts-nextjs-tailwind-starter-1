import type { Metadata } from 'next';

import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
};

export default function PrivasiPage() {
  return (
    <>
      <PageHero title='Kebijakan Privasi' />
      <article className='layout max-w-3xl py-12 pb-20'>
        <div className='space-y-6 text-sm leading-relaxed text-charcoal-light'>
          <p>
            Angelia Beauty MUA menghormati privasi kamu. Data yang dikumpulkan
            melalui form booking (nama, nomor WhatsApp, tanggal acara, lokasi,
            dan catatan) hanya digunakan untuk keperluan konsultasi, penawaran
            harga, dan pelaksanaan layanan makeup.
          </p>
          <p>
            Kami tidak menjual atau membagikan data pribadi kepada pihak ketiga
            tanpa persetujuan, kecuali diwajibkan oleh hukum.
          </p>
          <p>
            Data disimpan selama diperlukan untuk hubungan layanan dan dapat
            diminta untuk dihapus melalui WhatsApp resmi kami.
          </p>
          <p>
            Dengan menggunakan website ini, kamu menyetujui kebijakan privasi
            ini. Kebijakan dapat diperbarui; versi terbaru selalu tersedia di
            halaman ini.
          </p>
          <p className='text-xs italic'>
            Dokumen dummy — perbarui sesuai kebutuhan legal sebelum launch
            produksi.
          </p>
        </div>
      </article>
    </>
  );
}
