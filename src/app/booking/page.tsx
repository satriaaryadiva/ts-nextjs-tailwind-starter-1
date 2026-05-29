import type { Metadata } from 'next';
import { Suspense } from 'react';

import BookingWizard from '@/components/booking/BookingWizard';
import PageHero from '@/components/shared/PageHero';

export const metadata: Metadata = {
  title: 'Booking',
  description:
    'Rangkai paket makeup impianmu — kirim permintaan booking ke Angelia Beauty MUA via WhatsApp.',
};

function BookingFallback() {
  return (
    <div className='layout py-20 text-center text-charcoal-light'>
      Memuat form booking...
    </div>
  );
}

export default function BookingPage() {
  return (
    <>
      <PageHero
        title='Booking'
        subtitle='Rangkai hari impianmu — langkah demi langkah, lalu kirim ke WhatsApp.'
      />
      <Suspense fallback={<BookingFallback />}>
        <BookingWizard />
      </Suspense>
    </>
  );
}
