import Link from 'next/link';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

import { navLinks, siteConfig } from '@/constant/config';

const footerLinks = [
  { href: '/faq', label: 'FAQ' },
  { href: '/syarat-layanan', label: 'Syarat & Ketentuan' },
  { href: '/kebijakan-privasi', label: 'Kebijakan Privasi' },
];

export default function Footer() {
  return (
    <footer className='border-t border-cream-dark bg-charcoal text-cream'>
      <div className='layout py-12 md:py-16'>
        <div className='grid gap-10 md:grid-cols-3'>
          <div>
            <p className='font-display text-xl'>Angelia Beauty MUA</p>
            <p className='mt-2 text-sm text-cream/70'>
              Makeup & hair artist · Base {siteConfig.baseCity},{' '}
              {siteConfig.baseRegion}
            </p>
            <p className='mt-1 text-sm text-cream/70'>
              Melayani seluruh Indonesia
            </p>
          </div>

          <div>
            <p className='mb-4 text-xs tracking-widest text-cream/50 uppercase'>
              Menu
            </p>
            <ul className='space-y-2'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-cream/80 hover:text-white'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href='/booking'
                  className='text-sm font-medium text-white hover:text-cream'
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  href='/testimoni'
                  className='text-sm text-cream/80 hover:text-rose'
                >
                  Testimoni
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className='mb-4 text-xs tracking-widest text-cream/50 uppercase'>
              Social Media
            </p>
            <div className='flex gap-4'>
              <a
                href={siteConfig.instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='text-cream/80 hover:text-white'
                aria-label='Instagram'
              >
                <FaInstagram size={22} />
              </a>
              <a
                href='#'
                className='text-cream/80 hover:text-white'
                aria-label='TikTok'
              >
                <FaTiktok size={22} />
              </a>
              <a
                href='#'
                className='text-cream/80 hover:text-white'
                aria-label='YouTube'
              >
                <FaYoutube size={22} />
              </a>
            </div>
            <ul className='mt-6 space-y-2'>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-cream/60 hover:text-cream'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/50'>
          © {new Date().getFullYear()} Angelia Beauty MUA · {siteConfig.hashtag}
        </div>
      </div>
    </footer>
  );
}
