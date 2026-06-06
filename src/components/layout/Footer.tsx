import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';

import Logo from '@/components/ui/Logo';
import { navLinks, siteConfig } from '@/constant/config';

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden
    >
      <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z' />
    </svg>
  );
}

const legalLinks = [
  { href: '/faq', label: 'FAQ' },
  { href: '/syarat-layanan', label: 'Syarat & Ketentuan' },
  { href: '/kebijakan-privasi', label: 'Kebijakan Privasi' },
];

const socials = [
  {
    href: siteConfig.instagram,
    label: 'Instagram',
    icon: Instagram,
    external: true,
  },
  { href: '#', label: 'TikTok', icon: TikTokIcon, external: true },
  { href: '#', label: 'YouTube', icon: Youtube, external: true },
] as const;

export default function Footer() {
  const waLink = `https://wa.me/${siteConfig.whatsapp}`;

  return (
    <footer className='relative overflow-hidden border-t-2 border-black bg-black text-white'>
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.04]'
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '3rem 3rem',
        }}
      />

      <div
        className='pointer-events-none absolute -right-6 bottom-0 font-display text-[clamp(5rem,16vw,11rem)] leading-none text-white/3 select-none'
        aria-hidden
      >
        AB
      </div>

      <div className='layout relative z-10 py-14 md:py-20'>
        <div className='grid gap-12 lg:grid-cols-12 lg:gap-10'>
          {/* Brand */}
          <div className='lg:col-span-5 text-center'>
            <Logo variant='full' size='3xl' href='/' />
            <p className='mt-5 max-w-sm text-sm leading-relaxed text-white/65'>
              Makeup & hair artist profesional — natural glam, soft, dan
              photo-ready untuk wedding, prewedding, photoshoot, dan acara
              spesialmu.
            </p>

            <div className='mt-5 space-y-2 text-sm text-white/70'>
              <p className='inline-flex items-start gap-2'>
                <MapPin size={15} className='mt-0.5 shrink-0' aria-hidden />
                <span>
                  {siteConfig.baseCity}, {siteConfig.baseRegion} · Melayani
                  seluruh Indonesia
                </span>
              </p>
              <p className='inline-flex items-center gap-2'>
                <Mail size={15} className='shrink-0' aria-hidden />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className='transition-colors hover:text-white'
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <a
              href={waLink}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-7 inline-flex items-center gap-2 border-2 border-white bg-white px-6 py-3 text-xs font-semibold tracking-[0.18em] text-black uppercase transition-colors hover:bg-transparent hover:text-white'
            >
              <MessageCircle size={16} aria-hidden />
              Chat WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div className='lg:col-span-3'>
            <p className='mb-5 text-[10px] tracking-[0.3em] text-white/45 uppercase'>
              Navigasi
            </p>
            <ul className='space-y-2.5'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='group inline-flex items-center gap-1 text-sm text-white/75 transition-colors hover:text-white'
                  >
                    <span className='border-b border-transparent transition-colors group-hover:border-white/50'>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & legal */}
          <div className='lg:col-span-4'>
            <p className='mb-5 text-[10px] tracking-[0.3em] text-white/45 uppercase'>
              Ikuti Kami
            </p>
            <div className='flex flex-wrap gap-2'>
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.label}
                    className='inline-flex h-11 w-11 items-center justify-center border border-white/25 text-white/80 transition-all hover:border-white hover:bg-white hover:text-black'
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>

            <p className='mt-3 text-xs text-white/50'>
              {siteConfig.instagramHandle}
            </p>

            <div className='mt-8 border border-white/15 p-5'>
              <p className='text-[10px] tracking-[0.25em] text-white/45 uppercase'>
                {siteConfig.hashtag}
              </p>
              <p className='mt-2 font-display text-lg tracking-wide uppercase'>
                Natural Glam · Photo-Ready
              </p>
              <Link
                href='/booking'
                className='mt-4 inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.16em] text-white/80 uppercase transition-colors hover:text-white'
              >
                Booking sekarang
                <ArrowUpRight size={14} aria-hidden />
              </Link>
            </div>

            <ul className='mt-6 space-y-2'>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-xs text-white/50 transition-colors hover:text-white/80'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-[11px] tracking-[0.12em] text-white/45 md:flex-row md:text-left'>
          <p>
            © {new Date().getFullYear()} {siteConfig.title}. All rights
            reserved.
          </p>
          <p className='text-white/55'>{siteConfig.hashtag}</p>
        </div>
      </div>
    </footer>
  );
}
