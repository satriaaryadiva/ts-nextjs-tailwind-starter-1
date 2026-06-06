import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';

import CtaBanner from '@/components/shared/CtaBanner';
import PageHero from '@/components/shared/PageHero';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/constant/config';
import { siteImages } from '@/data/images';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Kontak',
  description:
    'Hubungi Angelia Beauty MUA via WhatsApp, Instagram, atau email. Base Medan — melayani seluruh Indonesia.',
};

const waMessage = 'Halo Angelia Beauty MUA, saya ingin konsultasi makeup.';
const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(waMessage)}`;

const contactMethods = [
  {
    id: 'instagram',
    label: 'Instagram',
    value: siteConfig.instagramHandle,
    href: siteConfig.instagram,
    hint: 'DM untuk inspirasi look & update terbaru',
    icon: Instagram,
    external: true,
  },
  {
    id: 'email',
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    hint: 'Kerjasama brand & inquiry formal',
    icon: Mail,
    external: true,
  },
  {
    id: 'location',
    label: 'Base Studio',
    value: `${siteConfig.baseCity}, ${siteConfig.baseRegion}`,
    hint: 'On-location & travel ke seluruh Indonesia',
    icon: MapPin,
    external: false,
  },
] as const;

const steps = [
  {
    num: '01',
    title: 'Hubungi via WhatsApp',
    desc: 'Ceritakan tanggal, kota, dan jenis acaramu.',
  },
  {
    num: '02',
    title: 'Konsultasi Look',
    desc: 'Referensi foto, skin type, dan preferensi makeup.',
  },
  {
    num: '03',
    title: 'Konfirmasi Jadwal',
    desc: 'Detail & paket disepakati langsung via chat.',
  },
] as const;

const quickLinks = [
  { href: '/booking', label: 'Form Booking' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/portofolio', label: 'Portofolio' },
  { href: '/faq', label: 'FAQ' },
] as const;

function ContactCard({
  label,
  value,
  hint,
  href,
  external,
  icon: Icon,
}: {
  label: string;
  value: string;
  hint: string;
  href?: string;
  external?: boolean;
  icon: typeof Instagram;
}) {
  const inner = (
    <>
      <div className='flex items-start justify-between gap-3'>
        <span className='flex h-11 w-11 items-center justify-center border-2 border-black bg-black text-white'>
          <Icon size={18} strokeWidth={1.75} aria-hidden />
        </span>
        {href && (
          <ArrowUpRight
            size={18}
            className='shrink-0 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black'
            aria-hidden
          />
        )}
      </div>
      <p className='mt-5 text-[10px] tracking-[0.28em] text-zinc-400 uppercase'>
        {label}
      </p>
      <p className='font-display mt-1 text-lg font-bold tracking-wide text-black uppercase md:text-xl'>
        {value}
      </p>
      <p className='mt-2 text-sm leading-relaxed text-zinc-500'>{hint}</p>
    </>
  );

  const className =
    'group border-2 border-black bg-white p-6 shadow-[5px_5px_0_0_#000] transition-all duration-300 hover:shadow-[2px_2px_0_0_#000] md:p-7';

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}

export default function KontakPage() {
  return (
    <>
      <PageHero
        title='Hubungi Kami'
        subtitle='Respon cepat via WhatsApp — atau pilih channel lain untuk konsultasi dan booking.'
      />

      {/* WhatsApp hero + editorial image */}
      <section className='border-b-2 border-black'>
        <div className='layout grid gap-0 lg:grid-cols-12'>
          <div className='relative min-h-[280px] overflow-hidden border-b-2 border-black lg:col-span-5 lg:min-h-[480px] lg:border-r-2 lg:border-b-0'>
            <Image
              src='/images/citra2.jpeg'
              alt='Angelia Beauty MUA — kontak & booking'
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 42vw'
              priority
            />
            <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent' />
            <div className='absolute right-0 bottom-0 left-0 p-6 md:p-8'>
              <p className='text-[10px] tracking-[0.3em] text-white/60 uppercase'>
                {siteConfig.hashtag}
              </p>
              <p className='font-display mt-2 text-2xl font-bold tracking-wide text-white uppercase md:text-3xl'>
                Natural Glam
                <br />
                Photo-Ready
              </p>
            </div>
          </div>

          <div className='flex flex-col bg-black text-white lg:col-span-7'>
            <div className='flex flex-1 flex-col justify-center p-8 md:p-12 lg:p-14'>
              <p className='text-[10px] tracking-[0.32em] text-white/45 uppercase'>
                Channel Utama
              </p>
              <h2 className='font-display mt-3 text-3xl font-bold tracking-wide uppercase md:text-4xl lg:text-5xl'>
                Chat WhatsApp
              </h2>
              <p className='mt-4 max-w-md text-sm leading-relaxed text-white/65 md:text-base'>
                Cara tercepat untuk konsultasi harga, cek ketersediaan tanggal,
                dan booking makeup wedding, prewedding, party, atau photoshoot.
              </p>

              <a
                href={waHref}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-8 inline-flex w-fit items-center gap-3 border-2 border-white bg-white px-7 py-4 text-xs font-semibold tracking-[0.2em] text-black uppercase transition-colors hover:bg-transparent hover:text-white'
              >
                <MessageCircle size={18} aria-hidden />
                {siteConfig.whatsappDisplay}
              </a>

              <div className='mt-8 flex flex-wrap gap-2'>
                <span className='inline-flex items-center gap-1.5 border border-white/25 px-3 py-1.5 text-[10px] tracking-[0.18em] text-white/70 uppercase'>
                  <Clock size={12} aria-hidden />
                  09.00 – 21.00 WIB
                </span>
                <span className='border border-white/25 px-3 py-1.5 text-[10px] tracking-[0.18em] text-white/70 uppercase'>
                  Balasan max 24 jam
                </span>
                <span className='border border-white/25 px-3 py-1.5 text-[10px] tracking-[0.18em] text-white/70 uppercase'>
                  🇮🇩 Seluruh Indonesia
                </span>
              </div>
            </div>

            <div className='grid grid-cols-2 border-t border-white/15'>
              <Link
                href='/booking'
                className='group flex items-center justify-between border-r border-white/15 px-6 py-5 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-white hover:text-black md:px-8 md:py-6'
              >
                Form Booking
                <ArrowUpRight
                  size={16}
                  className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  aria-hidden
                />
              </Link>
              <a
                href={siteConfig.instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center justify-between px-6 py-5 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-white hover:text-black md:px-8 md:py-6'
              >
                Instagram
                <ArrowUpRight
                  size={16}
                  className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section className='border-b-2 border-black bg-zinc-50 py-14 md:py-20'>
        <div className='layout'>
          <div className='mx-auto mb-10 max-w-2xl text-center md:mb-14'>
            <p className='text-[10px] tracking-[0.28em] text-zinc-400 uppercase'>
              Channel Lainnya
            </p>
            <h2 className='font-display mt-2 text-2xl text-black uppercase md:text-4xl'>
              Pilih Cara Hubungi
            </h2>
          </div>

          <div className='grid gap-4 md:grid-cols-3 md:gap-5'>
            {contactMethods.map((method) => (
              <ContactCard
                key={method.id}
                label={method.label}
                value={method.value}
                hint={method.hint}
                href={'href' in method ? method.href : undefined}
                external={'external' in method ? method.external : false}
                icon={method.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation flow */}
      <section className='layout py-14 md:py-20'>
        <div className='grid gap-10 lg:grid-cols-12 lg:gap-12'>
          <div className='lg:col-span-4'>
            <p className='text-[10px] tracking-[0.28em] text-zinc-400 uppercase'>
              Alur Konsultasi
            </p>
            <h2 className='font-display mt-2 text-2xl text-black uppercase md:text-3xl'>
              Dari Chat
              <br />
              Sampai Hari-H
            </h2>
            <p className='mt-4 text-sm leading-relaxed text-zinc-500'>
              Tidak perlu ribet — cukup mulai dari WhatsApp. Untuk detail acara
              lengkap, gunakan form booking agar informasi terkirim otomatis.
            </p>
            <div className='mt-8'>
              <Button href='/booking' variant='outline'>
                Mulai Booking
              </Button>
            </div>
          </div>

          <div className='grid gap-4 sm:grid-cols-3 lg:col-span-8'>
            {steps.map((step) => (
              <div
                key={step.num}
                className='border-2 border-black bg-white p-6 shadow-[4px_4px_0_0_#000] md:p-7'
              >
                <span className='font-display text-3xl text-zinc-200 md:text-4xl'>
                  {step.num}
                </span>
                <h3 className='font-display mt-3 text-base font-bold tracking-wide text-black uppercase md:text-lg'>
                  {step.title}
                </h3>
                <p className='mt-2 text-sm leading-relaxed text-zinc-500'>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-12 flex flex-wrap justify-center gap-2 md:mt-16 md:gap-3'>
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'border border-zinc-300 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-zinc-600 uppercase transition-colors hover:border-black hover:text-black md:px-5 md:py-2.5 md:text-xs',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner
        title='Siap diskusi look impianmu?'
        subtitle='Kirim tanggal & kota acaramu — aku bantu rekomendasikan paket yang pas.'
      />
    </>
  );
}
