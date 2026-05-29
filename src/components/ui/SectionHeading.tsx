import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        align === 'center' && 'text-center',
        className,
      )}
    >
      <h2 className='font-display text-3xl tracking-tight text-charcoal md:text-4xl'>
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-3 max-w-2xl text-charcoal-light',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
