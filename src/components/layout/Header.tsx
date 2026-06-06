'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MessageCircle, X } from 'lucide-react';
import * as React from 'react';

import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import { navLinks, siteConfig } from '@/constant/config';
import { cn } from '@/lib/utils';

const MOBILE_HEADER_H = 'top-24';
const DESKTOP_HEADER_H = 'md:top-24';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const closeMenu = React.useCallback(() => setOpen(false), []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeMenu]);

  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Halo Angelia Beauty MUA, saya ingin konsultasi.')}`;

  return (
    <>
      <header className='sticky top-0 z-50 border-b-2 border-black bg-white/95 backdrop-blur-md'>
        <div className='layout flex h-24 items-center justify-between gap-3'>
          <div className='min-w-0 shrink'>
            <Logo
              variant='full'
              size='lg'
              priority
              className='origin-left scale-150 lg:hidden'
            />
            <Logo
              variant='full'
              size='xl'
              priority
              className='hidden lg:inline-flex'
            />
          </div>

          <nav className='hidden items-center gap-6 lg:flex lg:gap-8'>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'border-2 border-transparent px-2 py-1.5 text-sm tracking-wide transition-colors duration-200 outline-none',
                    'hover:border-black hover:text-black focus-visible:border-black',
                    isActive
                      ? 'border-black bg-black font-bold text-white'
                      : 'text-charcoal-light',
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href='/booking' size='sm'>
              Booking
            </Button>
          </nav>

          <button
            type='button'
            className={cn(
              'flex h-10 w-10 shrink-0 items-center justify-center border-2 border-black bg-white text-black transition-colors lg:hidden',
              open && 'bg-black text-white',
            )}
            aria-expanded={open}
            aria-controls='mobile-nav'
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <X size={20} strokeWidth={2} />
            ) : (
              <Menu size={20} strokeWidth={2} />
            )}
          </button>
        </div>
      </header>

      {open && (
        <button
          type='button'
          aria-label='Tutup menu'
          className={cn(
            'fixed inset-x-0 bottom-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden',
            MOBILE_HEADER_H,
            DESKTOP_HEADER_H,
          )}
          onClick={closeMenu}
        />
      )}

      <div
        id='mobile-nav'
        className={cn(
          'fixed inset-x-0 bottom-0 z-50 flex flex-col border-t-2 border-black bg-white transition-transform duration-300 ease-out lg:hidden',
          MOBILE_HEADER_H,
          DESKTOP_HEADER_H,
          open ? 'translate-y-0' : 'pointer-events-none translate-y-full',
        )}
        aria-hidden={!open}
      >
        <nav className='layout flex flex-1 flex-col overflow-y-auto overscroll-contain py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]'>
          <p className='mb-4 text-[10px] tracking-[0.3em] text-zinc-400 uppercase'>
            Menu
          </p>

          <ul className='space-y-2'>
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      'flex items-center justify-between border-2 px-4 py-3.5 transition-colors',
                      isActive
                        ? 'border-black bg-black font-semibold text-white shadow-[3px_3px_0_0_#000]'
                        : 'border-zinc-200 bg-white text-charcoal hover:border-black',
                    )}
                  >
                    <span className='font-display text-base tracking-wide uppercase md:text-lg'>
                      {link.label}
                    </span>
                    <span className='text-[10px] tracking-[0.2em] text-zinc-400 tabular-nums'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className='mt-6 space-y-3 border-t-2 border-zinc-100 pt-6'>
            <Button
              href='/booking'
              className='w-full border-2 border-black py-3.5 text-sm shadow-[4px_4px_0_0_#000]'
              onClick={closeMenu}
            >
              Booking Sekarang
            </Button>

            <a
              href={waHref}
              target='_blank'
              rel='noopener noreferrer'
              onClick={closeMenu}
              className='flex w-full items-center justify-center gap-2 border-2 border-black bg-white px-6 py-3.5 text-xs font-semibold tracking-[0.18em] text-black uppercase transition-colors hover:bg-black hover:text-white'
            >
              <MessageCircle size={16} aria-hidden />
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
