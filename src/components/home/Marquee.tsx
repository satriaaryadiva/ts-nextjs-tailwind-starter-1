import { Gem, Paintbrush, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const items = [
  'Wedding',
  'Prewedding',
  'Party Glam',
  'Photoshoot',
  'Medan',
  'Seluruh Indonesia',
  '#AngeliaBeautyLook',
];

const dividerIcons: LucideIcon[] = [Sparkles, Paintbrush, Gem];

function MarqueeDivider({ Icon }: { Icon: LucideIcon }) {
  return (
    <Icon
      className='shrink-0 text-white/90'
      size={22}
      strokeWidth={2.5}
      aria-hidden
    />
  );
}

function MarqueeTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className='flex w-max shrink-0 items-center gap-8 md:gap-12'
      aria-hidden={ariaHidden}
    >
      {items.map((label, index) => {
        const DividerIcon = dividerIcons[index % dividerIcons.length];

        return (
          <span
            key={`${label}-${index}`}
            className='flex shrink-0 items-center gap-8 md:gap-12'
          >
            <MarqueeDivider Icon={DividerIcon} />
            <span className='font-primary text-base font-bold tracking-[0.22em] text-white uppercase md:text-lg md:tracking-[0.28em]'>
              {label}
            </span>
          </span>
        );
      })}
      <MarqueeDivider Icon={Sparkles} />
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      className='overflow-hidden border-y border-black bg-black py-5 md:py-6'
      aria-label='Layanan Angelia Beauty MUA'
    >
      <div className='flex w-max animate-marquee items-center'>
        <MarqueeTrack />
        <MarqueeTrack ariaHidden />
      </div>
    </section>
  );
}
