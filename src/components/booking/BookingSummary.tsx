'use client';

import {
  type BookingState,
  calculateEstimate,
  eventTypeLabels,
  styleLabels,
} from '@/data/booking';
import { addons, formatRupiah, getPackageBySlug } from '@/data/packages';

export default function BookingSummary({ state }: { state: BookingState }) {
  const pkg = getPackageBySlug(state.packageSlug);
  const estimate = calculateEstimate(state);
  const selectedAddons = state.addons
    .map((slug) => addons.find((a) => a.slug === slug))
    .filter(Boolean);

  return (
    <div className='sticky top-24 rounded-sm border border-cream-dark bg-white p-6'>
      <h3 className='font-display text-lg text-charcoal'>Ringkasan Paketmu</h3>
      <dl className='mt-4 space-y-3 text-sm'>
        <div>
          <dt className='text-charcoal-light'>Acara</dt>
          <dd className='text-charcoal font-medium'>
            {state.eventType ? eventTypeLabels[state.eventType] : '—'}
          </dd>
        </div>
        <div>
          <dt className='text-charcoal-light'>Tanggal</dt>
          <dd className='text-charcoal font-medium'>{state.date || '—'}</dd>
        </div>
        <div>
          <dt className='text-charcoal-light'>Lokasi</dt>
          <dd className='text-charcoal font-medium'>
            {state.city
              ? `${state.city}${state.province ? `, ${state.province}` : ''}`
              : '—'}
          </dd>
        </div>
        <div>
          <dt className='text-charcoal-light'>Paket</dt>
          <dd className='text-charcoal font-medium'>{pkg?.name ?? '—'}</dd>
        </div>
        {selectedAddons.length > 0 && (
          <div>
            <dt className='text-charcoal-light'>Add-on</dt>
            <dd className='text-charcoal'>
              {selectedAddons.map((a) => a!.name).join(', ')}
            </dd>
          </div>
        )}
        <div>
          <dt className='text-charcoal-light'>Style</dt>
          <dd className='text-charcoal font-medium'>
            {state.style ? styleLabels[state.style] : '—'}
          </dd>
        </div>
      </dl>
      <div className='border-charcoal/10 mt-6 border-t pt-4'>
        <p className='text-charcoal-light text-xs'>Estimasi sementara</p>
        <p className='font-display text-2xl text-charcoal'>
          {pkg ? formatRupiah(estimate) : '—'}
        </p>
        <p className='text-charcoal-light mt-1 text-xs'>
          Harga final setelah konfirmasi
        </p>
      </div>
    </div>
  );
}
