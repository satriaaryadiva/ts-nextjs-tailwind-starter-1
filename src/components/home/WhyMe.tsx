'use client';

import * as React from 'react';
import Image from 'next/image';
import { Crown, Flame, Sparkles, Play, Maximize, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import Button from '@/components/ui/Button';
import { siteConfig } from '@/constant/config';

type Pillar = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const pillars: Pillar[] = [
  {
    icon: Sparkles,
    title: 'NIKAH CUMA 1 KALI',
    text: 'Aku sudah memiliki pengalaman melayani ratusan klien di berbagai daerah di seluruh Indonesia. Pernikahan kamu tidak bisa diulang — pastikan makeup kamu dipercayakan kepada MUA yang tepat.',
  },
  {
    icon: Flame,
    title: siteConfig.hashtag,
    text: 'Semua mata tamu akan tertuju kepadamu. Kamu wajib tampil cantik maksimal tetapi tidak berlebihan — langsung di-makeup oleh Angelia dengan look signature yang natural glam dan photo-ready.',
  },
  {
    icon: Crown,
    title: 'RAJA DAN RATU',
    text: 'Di hari pernikahanmu, fokusku cuma untuk makeup kamu saja. Baik mulai makeup ataupun retouch langsung dengan aku — kamu tidak perlu khawatir aku meninggalkanmu untuk klien lain di tengah proses.',
  },
];

function IphoneShowcase() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <>
      <div className='relative mx-auto w-[280px] sm:w-[340px] md:w-[400px] lg:w-[440px]'>
        {/* iPhone 17 frame */}
        <div className='rounded-[3rem] border-2 border-black bg-black p-1.5 shadow-[8px_8px_0_0_#000]'>
          <div className='relative aspect-[9/16] overflow-hidden rounded-[3rem] bg-zinc-900'>
            
            <video
              ref={videoRef}
              src='/video/preview.mp4'
              playsInline
              muted
              autoPlay
              loop
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className='h-full w-full cursor-pointer object-cover'
            />

            {/* Play Icon Overlay */}
            {!isPlaying && (
              <div className='pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-black/20'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-white/40 backdrop-blur-md'>
                  <Play className='ml-1 h-8 w-8 text-white' fill='currentColor' />
                </div>
              </div>
            )}

            {/* Fullscreen Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className='absolute bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/70'
              aria-label='Fullscreen'
            >
              <Maximize className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm'>
          <button
            onClick={() => setIsModalOpen(false)}
            className='absolute right-6 top-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20'
            aria-label='Close'
          >
            <X className='h-6 w-6' />
          </button>
          
          <div className='relative max-h-[90vh] w-full max-w-5xl'>
            <video
              src='/video/preview.mp4'
              controls
              autoPlay
              playsInline
              className='max-h-[90vh] w-full rounded-2xl object-contain shadow-2xl'
            />
          </div>
        </div>
      )}
    </>
  );
}

function PillarBlock({ icon: Icon, title, text }: Pillar) {
  return (
    <article>
      <div className='mb-4 '>
        <Icon
          className=' text-black'
          size={30}
          strokeWidth={4}
          aria-hidden
        />


        <h2 className='font-display font-bold tracking-wide text-bold uppercase text-black md:text-4xl'> {title}</h2>
      </div>

      <p className='mt-3 text-sm leading-relaxed text-black
      md:text-[0.9375rem] font-semibold'>
        {text}
      </p>
    </article>
  );
}

export default function WhyMe() {
  return (
    <section className='bg-white py-16 md:py-20'>
      <div className='layout'>
        {/* Header — seperti referensi neymakeup */}
        <header className='text-center'>
          <h2 className='font-display text-4xl tracking-tight text-black uppercase md:text-xl lg:text-8xl'>
            Why Me?
          </h2>
          <p className='mx-auto mt-2 max-w-2xl text-sm text-black md:font-semibold'>
            Alasan kamu memilih {siteConfig.instagramHandle} untuk mewujudkan
            pernikahan impian:
          </p>
        </header>

        {/* Kotak utama: kiri mockup HP · kanan teks */}
        <div className='mt-5   border-black  '>
          <div className='grid md:grid-cols-2'>
            {/* Kolom kiri — visual */}
            <div className='flex min-h-[360px] items-center justify-center border-b border-black p-8 md:min-h-[480px] md:border-r md:border-b-0 md:p-12 lg:p-16'>
              <IphoneShowcase />
            </div>

            {/* Kolom kanan — pilar */}
            <div className='flex flex-col justify-center gap-5 p-8 md:gap-5 md:p-12 lg:gap-10 lg:p-10'>
              {pillars.map((pillar) => (
                <PillarBlock key={pillar.title} {...pillar} />
              ))}
            </div>
          </div>
        </div>

        <div className='mt-12 text-center md:mt-14'>
          <Button href='/booking'>Booking Sekarang</Button>
        </div>
      </div>
    </section>
  );
}
