'use client';

import { useSearchParams } from 'next/navigation';
import * as React from 'react';

import BookingSummary from '@/components/booking/BookingSummary';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/constant/config';
import {
  type BookingState,
  type EventType,
  type StyleType,
  DRAFT_KEY,
  buildWhatsAppMessage,
  eventTypeLabels,
  getPackagesForEvent,
  initialBookingState,
  normalizePhone,
  provinces,
  styleLabels,
} from '@/data/booking';
import { addons, formatRupiah } from '@/data/packages';
import { cn } from '@/lib/utils';

const STEPS = [
  'Jenis Acara',
  'Tanggal & Lokasi',
  'Paket',
  'Style',
  'Data Diri',
];

const eventOptions: { value: EventType; label: string; emoji: string }[] = [
  { value: 'wedding', label: 'Wedding', emoji: '💍' },
  { value: 'prewedding', label: 'Prewedding', emoji: '📸' },
  { value: 'party', label: 'Party', emoji: '✨' },
  { value: 'kursus', label: 'Kursus', emoji: '🎓' },
  { value: 'editorial', label: 'Editorial', emoji: '💄' },
  { value: 'other', label: 'Lainnya', emoji: '🌸' },
];

const styleOptions: { value: StyleType; label: string }[] = [
  { value: 'natural', label: 'Natural' },
  { value: 'soft-glam', label: 'Soft Glam' },
  { value: 'bold', label: 'Bold Glam' },
  { value: 'traditional', label: 'Adat' },
  { value: 'by-reference', label: 'Sesuai Referensi' },
];

function getMinDate() {
  const d = new Date();
  d.setDate(d.getDate() + 14);
  return d.toISOString().split('T')[0];
}

export default function BookingWizard() {
  const searchParams = useSearchParams();
  const [state, setState] = React.useState<BookingState>(initialBookingState);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [draftLoaded, setDraftLoaded] = React.useState(false);

  React.useEffect(() => {
    const paket = searchParams.get('paket');
    const tipe = searchParams.get('tipe');
    const event = searchParams.get('event') as EventType | null;

    let next = { ...initialBookingState };

    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as BookingState;
        next = { ...next, ...parsed };
      }
    } catch {
      /* ignore */
    }

    if (paket) {
      next.packageSlug = paket;
      next.step = 3;
    }
    if (tipe === 'kursus') {
      next.eventType = 'kursus';
      next.step = Math.max(next.step, 1);
    }
    if (event) {
      next.eventType = event;
    }

    setState(next);
    setDraftLoaded(true);
  }, [searchParams]);

  React.useEffect(() => {
    if (!draftLoaded) return;
    localStorage.setItem(DRAFT_KEY, JSON.stringify(state));
  }, [state, draftLoaded]);

  const update = (patch: Partial<BookingState>) => {
    setState((s) => ({ ...s, ...patch }));
    setErrors({});
  };

  const validateStep = (): boolean => {
    const e: Record<string, string> = {};
    if (state.step === 1 && !state.eventType) {
      e.eventType = 'Pilih jenis acara';
    }
    if (state.step === 2) {
      if (!state.date) e.date = 'Pilih tanggal';
      if (!state.city.trim()) e.city = 'Isi kota';
      if (!state.province) e.province = 'Pilih provinsi';
    }
    if (state.step === 3 && !state.packageSlug) {
      e.package = 'Pilih paket';
    }
    if (state.step === 4 && !state.style) {
      e.style = 'Pilih style';
    }
    if (state.step === 5) {
      if (state.name.trim().length < 2) e.name = 'Nama minimal 2 karakter';
      const phone = normalizePhone(state.phone);
      if (!/^62\d{9,12}$/.test(phone)) e.phone = 'Nomor WA tidak valid';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    update({ step: Math.min(state.step + 1, 5) });
  };

  const prevStep = () => update({ step: Math.max(state.step - 1, 1) });

  const submitWhatsApp = () => {
    if (!validateStep()) return;
    const phone = normalizePhone(state.phone);
    const displayPhone = state.phone.startsWith('0')
      ? state.phone
      : `+${phone}`;
    const message = buildWhatsAppMessage(
      { ...state, phone: displayPhone },
      displayPhone
    );
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const availablePackages = getPackagesForEvent(state.eventType);

  const toggleAddon = (slug: string) => {
    const next = state.addons.includes(slug)
      ? state.addons.filter((s) => s !== slug)
      : [...state.addons, slug];
    update({ addons: next });
  };

  return (
    <div className='layout py-12 md:py-16'>
      <div className='mb-8'>
        <div className='mb-2 flex justify-between text-xs tracking-wider text-charcoal-light uppercase'>
          {STEPS.map((label, i) => (
            <span
              key={label}
              className={cn(
                'hidden sm:inline',
                i + 1 <= state.step && 'text-rose-dark font-medium'
              )}
            >
              {label}
            </span>
          ))}
        </div>
        <div className='bg-cream-dark h-1.5 overflow-hidden rounded-full'>
          <div
            className='h-full bg-black transition-all duration-300'
            style={{ width: `${(state.step / 5) * 100}%` }}
          />
        </div>
        <p className='text-charcoal-light mt-2 text-sm'>
          Langkah {state.step} dari 5
        </p>
      </div>

      <div className='grid gap-10 lg:grid-cols-5'>
        <div className='lg:col-span-3'>
          {state.step === 1 && (
            <div className='animate-fade-up'>
              <h2 className='font-display text-2xl text-charcoal'>
                Jenis acara apa?
              </h2>
              <p className='text-charcoal-light mt-2 text-sm'>
                Pilih kategori yang paling sesuai.
              </p>
              <div className='mt-8 grid gap-4 sm:grid-cols-2'>
                {eventOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type='button'
                    onClick={() =>
                      update({
                        eventType: opt.value,
                        packageSlug: '',
                      })
                    }
                    className={cn(
                      'rounded-sm border p-6 text-left transition-all',
                      state.eventType === opt.value
                        ? 'border-black bg-black/5 shadow-sm'
                        : 'border-cream-dark bg-white hover:border-black'
                    )}
                  >
                    <span className='text-2xl'>{opt.emoji}</span>
                    <p className='mt-2 font-medium text-charcoal'>
                      {eventTypeLabels[opt.value]}
                    </p>
                  </button>
                ))}
              </div>
              {errors.eventType && (
                <p className='text-rose-dark mt-2 text-sm'>{errors.eventType}</p>
              )}
            </div>
          )}

          {state.step === 2 && (
            <div className='animate-fade-up space-y-6'>
              <h2 className='font-display text-2xl text-charcoal'>
                Kapan & di mana?
              </h2>
              <div>
                <label className='text-charcoal mb-1 block text-sm font-medium'>
                  Tanggal acara
                </label>
                <input
                  type='date'
                  min={getMinDate()}
                  value={state.date}
                  onChange={(e) => update({ date: e.target.value })}
                  className='border-cream-dark focus:border-rose-dark w-full rounded-sm border bg-white px-4 py-3'
                />
                {errors.date && (
                  <p className='text-rose-dark mt-1 text-sm'>{errors.date}</p>
                )}
              </div>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div>
                  <label className='text-charcoal mb-1 block text-sm font-medium'>
                    Kota
                  </label>
                  <input
                    type='text'
                    placeholder='Contoh: Medan'
                    value={state.city}
                    onChange={(e) => update({ city: e.target.value })}
                    className='border-cream-dark focus:border-rose-dark w-full rounded-sm border bg-white px-4 py-3'
                  />
                  {errors.city && (
                    <p className='text-rose-dark mt-1 text-sm'>{errors.city}</p>
                  )}
                </div>
                <div>
                  <label className='text-charcoal mb-1 block text-sm font-medium'>
                    Provinsi
                  </label>
                  <select
                    value={state.province}
                    onChange={(e) => update({ province: e.target.value })}
                    className='border-cream-dark focus:border-rose-dark w-full rounded-sm border bg-white px-4 py-3'
                  >
                    <option value=''>Pilih provinsi</option>
                    {provinces.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  {errors.province && (
                    <p className='text-rose-dark mt-1 text-sm'>
                      {errors.province}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className='text-charcoal mb-1 block text-sm font-medium'>
                  Venue (opsional)
                </label>
                <input
                  type='text'
                  placeholder='Hotel, rumah, gedung...'
                  value={state.venue}
                  onChange={(e) => update({ venue: e.target.value })}
                  className='border-cream-dark focus:border-rose-dark w-full rounded-sm border bg-white px-4 py-3'
                />
              </div>
            </div>
          )}

          {state.step === 3 && (
            <div className='animate-fade-up'>
              <h2 className='font-display text-2xl text-charcoal'>
                Pilih paket
              </h2>
              <div className='mt-6 space-y-3'>
                {availablePackages.map((pkg) => (
                  <button
                    key={pkg.slug}
                    type='button'
                    onClick={() => update({ packageSlug: pkg.slug })}
                    className={cn(
                      'w-full rounded-sm border p-4 text-left transition-all',
                      state.packageSlug === pkg.slug
                        ? 'border-black bg-black/5'
                        : 'border-cream-dark bg-white hover:border-black'
                    )}
                  >
                    <div className='flex justify-between gap-4'>
                      <div>
                        <p className='font-medium text-charcoal'>{pkg.name}</p>
                        <p className='text-charcoal-light text-sm'>
                          {pkg.description}
                        </p>
                      </div>
                      <p className='text-rose-dark shrink-0 text-sm font-medium'>
                        {formatRupiah(pkg.priceFrom)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              {errors.package && (
                <p className='text-rose-dark mt-2 text-sm'>{errors.package}</p>
              )}
              <p className='text-charcoal mt-8 mb-3 text-sm font-medium'>
                Add-on (opsional)
              </p>
              <div className='flex flex-wrap gap-2'>
                {addons.map((addon) => (
                  <button
                    key={addon.slug}
                    type='button'
                    onClick={() => toggleAddon(addon.slug)}
                    className={cn(
                      'rounded-full border px-4 py-2 text-sm transition-colors',
                      state.addons.includes(addon.slug)
                        ? 'border-rose-dark bg-rose/20 text-charcoal'
                        : 'border-cream-dark bg-white'
                    )}
                  >
                    {addon.name} (+{formatRupiah(addon.price)})
                  </button>
                ))}
              </div>
            </div>
          )}

          {state.step === 4 && (
            <div className='animate-fade-up'>
              <h2 className='font-display text-2xl text-charcoal'>
                Style yang kamu inginkan
              </h2>
              <div className='mt-8 grid gap-3 sm:grid-cols-2'>
                {styleOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type='button'
                    onClick={() => update({ style: opt.value })}
                    className={cn(
                      'rounded-sm border px-4 py-4 text-left font-medium transition-all',
                      state.style === opt.value
                        ? 'border-black bg-black/5 text-charcoal'
                        : 'border-cream-dark bg-white'
                    )}
                  >
                    {styleLabels[opt.value]}
                  </button>
                ))}
              </div>
              {errors.style && (
                <p className='text-rose-dark mt-2 text-sm'>{errors.style}</p>
              )}
              <div className='mt-6'>
                <label className='text-charcoal mb-1 block text-sm font-medium'>
                  Link referensi (opsional)
                </label>
                <input
                  type='url'
                  placeholder='https://instagram.com/...'
                  value={state.referenceUrl}
                  onChange={(e) => update({ referenceUrl: e.target.value })}
                  className='border-cream-dark focus:border-rose-dark w-full rounded-sm border bg-white px-4 py-3'
                />
              </div>
            </div>
          )}

          {state.step === 5 && (
            <div className='animate-fade-up space-y-6'>
              <h2 className='font-display text-2xl text-charcoal'>
                Data diri kamu
              </h2>
              <div>
                <label className='text-charcoal mb-1 block text-sm font-medium'>
                  Nama lengkap
                </label>
                <input
                  type='text'
                  value={state.name}
                  onChange={(e) => update({ name: e.target.value })}
                  className='border-cream-dark focus:border-rose-dark w-full rounded-sm border bg-white px-4 py-3'
                />
                {errors.name && (
                  <p className='text-rose-dark mt-1 text-sm'>{errors.name}</p>
                )}
              </div>
              <div>
                <label className='text-charcoal mb-1 block text-sm font-medium'>
                  Nomor WhatsApp
                </label>
                <input
                  type='tel'
                  placeholder='0812xxxxxxx'
                  value={state.phone}
                  onChange={(e) => update({ phone: e.target.value })}
                  className='border-cream-dark focus:border-rose-dark w-full rounded-sm border bg-white px-4 py-3'
                />
                {errors.phone && (
                  <p className='text-rose-dark mt-1 text-sm'>{errors.phone}</p>
                )}
              </div>
              <div>
                <label className='text-charcoal mb-1 block text-sm font-medium'>
                  Instagram (opsional)
                </label>
                <input
                  type='text'
                  placeholder='@username'
                  value={state.instagram}
                  onChange={(e) => update({ instagram: e.target.value })}
                  className='border-cream-dark focus:border-rose-dark w-full rounded-sm border bg-white px-4 py-3'
                />
              </div>
              <div>
                <label className='text-charcoal mb-1 block text-sm font-medium'>
                  Catatan
                </label>
                <textarea
                  rows={4}
                  maxLength={500}
                  placeholder='Ceritakan kebutuhan khususmu...'
                  value={state.notes}
                  onChange={(e) => update({ notes: e.target.value })}
                  className='border-cream-dark focus:border-rose-dark w-full rounded-sm border bg-white px-4 py-3'
                />
              </div>
            </div>
          )}

          <div className='mt-10 flex flex-wrap gap-4'>
            {state.step > 1 && (
              <Button variant='outline' onClick={prevStep}>
                Kembali
              </Button>
            )}
            {state.step < 5 ? (
              <Button onClick={nextStep}>Lanjut</Button>
            ) : (
              <button
                type='button'
                onClick={submitWhatsApp}
                className='bg-[#25D366] border-[#25D366] hover:bg-[#20bd5a] inline-flex items-center justify-center border px-8 py-3.5 text-sm tracking-widest text-white uppercase transition-colors'
              >
                Kirim via WhatsApp
              </button>
            )}
          </div>
        </div>

        <div className='lg:col-span-2'>
          <BookingSummary state={state} />
        </div>
      </div>
    </div>
  );
}
