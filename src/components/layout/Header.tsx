'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import * as React from 'react';

import Button from '@/components/ui/Button';
import { navLinks } from '@/constant/config';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // Mengunci scroll body saat menu mobile terbuka
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className='sticky top-0 z-50 border-b border-cream-dark/40 bg-cream/80 backdrop-blur-md transition-all duration-300'>
      <div className='layout flex h-16 items-center justify-between md:h-20'>
        {/* Logo Brand */}
        <Link
          href='/'
          className='group font-display text-lg tracking-wide md:text-xl text-charcoal transition-colors hover:text-rose-dark'
        >
          Angelia Beauty{' '}
          <span className='ml-1 text-rose-dark text-xs font-normal tracking-widest uppercase transition-opacity group-hover:opacity-80'>
            MUA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden items-center gap-8 lg:flex'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm tracking-wide border-2 border-black transition-colors duration-200 p-2',
                  'hover:text-rose-dark  focus-visible:text-rose-dark outline-none',
                  isActive
                    ? 'text-rose-dark bg-white font-bold  '
                    : 'text-charcoal-light',
                )}
              >
                {link.label}
                {/* Underline aesthetic untuk link yang aktif */}
                {isActive && (
                  <span className='absolute bottom-0 left-0 h-[4px] w-full bg-rose-dark rounded-full' />
                )}
              </Link>
            );
          })}
          <Button
            href='/booking'
            size='sm'
            className='shadow-sm hover:shadow-md transition-shadow'
          >
            Booking
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type='button'
          className='p-2 -mr-2 text-charcoal hover:text-rose-dark transition-colors lg:hidden focus:outline-none'
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X
              size={24}
              className='animate-in fade-in zoom-in-75 duration-150'
            />
          ) : (
            <Menu
              size={24}
              className='animate-in fade-in zoom-in-75 duration-150'
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {open && (
        <div className='fixed inset-x-0 bottom-0 top-16 z-40 bg-cream/98 backdrop-blur-lg animate-in slide-in-from-top-5 duration-300 lg:hidden border-t border-cream-dark/20'>
          <nav className='layout flex flex-col gap-2 py-6 h-[calc(100vh-4rem)] overflow-y-auto'>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-xl px-4 py-3.5 text-base font-medium tracking-wide transition-all duration-200',
                    isActive
                      ? 'bg-rose-dark/10 text-rose-dark font-semibold'
                      : 'text-charcoal-light hover:bg-cream-dark/10 hover:text-charcoal',
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className='mt-auto pt-6 border-t border-cream-dark/20'>
              <Button
                href='/booking'
                className='w-full py-4 text-base shadow-sm'
              >
                Booking Sekarang
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
