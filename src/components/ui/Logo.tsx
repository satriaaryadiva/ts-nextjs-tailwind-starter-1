import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/constant/config';
import { cn } from '@/lib/utils';

type LogoSize = 'sm' | 'md' | 'lg' | 'xl' | '3xl';

type LogoProps = {
  variant?: 'full' | 'icon';
  size?: LogoSize;
  href?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

const logoSrc = {
  full: '/images/logo.png',
  icon: '/images/logo-icon.png',
} as const;

const sizeConfig: Record<
  LogoSize,
  { full: string; icon: string; width: number; height: number }
> = {
  sm: {
    full: 'h-10 md:h-12',
    icon: 'h-10 w-10',
    width: 140,
    height: 42,
  },
  md: {
    full: 'h-14 md:h-16',
    icon: 'h-12 w-12',
    width: 200,
    height: 60,
  },
  lg: {
    full: 'h-16 md:h-[4.5rem]',
    icon: 'h-14 w-14 md:h-16 md:w-16',
    width: 260,
    height: 78,
  },
  xl: {
    full: 'h-24 md:h-28',
    icon: 'h-20 w-20 md:h-24 md:w-24',
    width: 320,
    height: 96,
  },
  '3xl': {
    full: 'h-[15.5rem] md:h-[16.5rem] scale-150',
    icon: 'h-24 w-24 md:h-28 md:w-28',
    width: 480,
    height: 144,
  },
};

export default function Logo({
  variant = 'full',
  size = 'md',
  href = '/',
  className,
  imageClassName,
  priority = false,
}: LogoProps) {
  const isFull = variant === 'full';
  const config = sizeConfig[size];

  const image = (
    <Image
      src={logoSrc[variant]}
      alt={`${siteConfig.title} logo`}
      width={isFull ? config.width : config.height}
      height={config.height}
      priority={priority}
      className={cn(
        'h-auto w-auto max-w-none object-contain',
        isFull ? config.full : config.icon,
        imageClassName,
      )}
    />
  );

  if (!href) {
    return (
      <span className={cn('inline-flex shrink-0 items-center', className)}>
        {image}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex shrink-0 items-center transition-opacity hover:opacity-90',
        className,
      )}
      aria-label={`${siteConfig.title} — Home`}
    >
      {image}
    </Link>
  );
}
