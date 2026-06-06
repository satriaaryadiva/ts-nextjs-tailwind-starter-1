import Image from 'next/image';

import type { PortfolioItem } from '@/data/portfolio';
import { cn } from '@/lib/utils';

type GalleryMediaProps = {
  item: PortfolioItem;
  className?: string;
  priority?: boolean;
  autoPlayVideo?: boolean;
  sizes?: string;
};

export function isPortfolioVideo(item: PortfolioItem) {
  return item.type === 'video';
}

/** Satu sumber media — selalu `item.src`, tanpa poster terpisah */
export default function GalleryMedia({
  item,
  className,
  priority = false,
  autoPlayVideo = false,
  sizes = '(max-width: 768px) 100vw, 33vw',
}: GalleryMediaProps) {
  if (isPortfolioVideo(item)) {
    return (
      <video
        src={item.src}
        muted
        loop
        playsInline
        preload='metadata'
        autoPlay={autoPlayVideo}
        className={cn('absolute inset-0 h-full w-full object-cover', className)}
      />
    );
  }

  return (
    <Image
      src={item.src}
      alt={item.alt}
      fill
      priority={priority}
      className={cn('object-cover', className)}
      sizes={sizes}
    />
  );
}
