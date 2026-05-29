'use client';

import { ChevronDown } from 'lucide-react';
import * as React from 'react';

import type { FaqItem } from '@/data/faq';
import { cn } from '@/lib/utils';

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <div className='space-y-3'>
      {items.map((item, i) => (
        <div
          key={item.question}
          className='overflow-hidden rounded-sm border border-cream-dark bg-white'
        >
          <button
            type='button'
            className='flex w-full items-center justify-between gap-4 p-5 text-left'
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className='font-medium text-charcoal'>{item.question}</span>
            <ChevronDown
              className={cn(
                'text-rose-dark shrink-0 transition-transform',
                open === i && 'rotate-180',
              )}
              size={20}
            />
          </button>
          {open === i && (
            <div className='text-charcoal-light border-t border-cream-dark px-5 pb-5 text-sm leading-relaxed'>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
