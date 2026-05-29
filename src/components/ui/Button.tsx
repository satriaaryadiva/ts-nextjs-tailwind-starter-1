import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';

type ButtonProps = {
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
);

const variants = {
  primary:
    'bg-charcoal text-cream hover:bg-charcoal/90 border border-charcoal',
  outline:
    'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-cream',
  ghost: 'bg-transparent text-charcoal hover:bg-cream-dark',
};

const sizes = {
  sm: 'px-4 py-2 text-xs tracking-wider',
  md: 'px-6 py-2.5 text-sm tracking-widest',
  lg: 'px-8 py-3.5 text-sm tracking-widest',
};

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-medium uppercase transition-colors duration-200',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as object)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type='button' {...(props as object)}>
      {children}
    </button>
  );
}
