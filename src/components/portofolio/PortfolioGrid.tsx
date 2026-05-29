'use client';

import Image from 'next/image';
import * as React from 'react';
import { X, Play } from 'lucide-react';

import {
  type PortfolioCategory,
  portfolioCategories,
  portfolioItems,
  type PortfolioItem,
} from '@/data/portfolio';
import { cn } from '@/lib/utils';

export default function PortfolioGrid() {
  const [filter, setFilter] = React.useState<PortfolioCategory | 'all'>('all');
  const [selectedItem, setSelectedItem] = React.useState<PortfolioItem | null>(null);

  const filtered =
    filter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      <div className='layout mb-12 flex flex-wrap justify-center gap-3'>
        <button
          type='button'
          onClick={() => setFilter('all')}
          className={cn(
            'rounded-full border px-6 py-2.5 text-sm font-medium tracking-wider uppercase transition-all duration-300',
            filter === 'all'
              ? 'border-black bg-black text-white shadow-md'
              : 'border-gray-200 bg-white text-gray-600 hover:border-black hover:text-black'
          )}
        >
          Semua
        </button>
        {portfolioCategories.map((cat) => (
          <button
            key={cat.slug}
            type='button'
            onClick={() => setFilter(cat.slug)}
            className={cn(
              'rounded-full border px-6 py-2.5 text-sm font-medium tracking-wider uppercase transition-all duration-300',
              filter === cat.slug
                ? 'border-black bg-black text-white shadow-md'
                : 'border-gray-200 bg-white text-gray-600 hover:border-black hover:text-black'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>
      
      {/* Grid Layout - Larger Items */}
      <div className='layout grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 md:gap-8 md:auto-rows-[480px] lg:auto-rows-[600px]'>
        {filtered.map((item, index) => (
          <figure
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={cn(
              'group relative cursor-pointer overflow-hidden rounded-[2rem] bg-zinc-100 shadow-sm transition-shadow hover:shadow-2xl',
              // Pattern: 1 big, 2 half, 1 big...
              index % 3 === 0 ? 'md:col-span-2' : 'col-span-1',
              // Height for mobile
              'h-[400px] md:h-auto'
            )}
          >
            {item.type === 'video' ? (
              <>
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  autoPlay
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 z-10 flex items-center justify-center'>
                  <div className='flex h-14 w-14 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-transform group-hover:scale-110'>
                    <Play className='ml-1 h-6 w-6' fill='currentColor' />
                  </div>
                </div>
              </>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            )}
            
            {/* Elegant Gradient Overlay */}
            <div className='absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80' />
            
            {/* Animated Title & Caption inside image */}
            <figcaption className='absolute bottom-0 left-0 right-0 z-30 flex flex-col justify-end p-6 md:p-8'>
              <div className='translate-y-4 transform transition-transform duration-500 group-hover:translate-y-0'>
                <h3 className='font-display text-2xl font-bold uppercase tracking-widest text-white drop-shadow-md md:text-3xl'>{item.category}</h3>
                <p className='mt-2 text-sm text-gray-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:text-base'>{item.caption}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl transition-all duration-300'>
          <button
            onClick={() => setSelectedItem(null)}
            className='absolute right-6 top-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 hover:scale-105'
            aria-label='Close'
          >
            <X className='h-6 w-6' />
          </button>
          
          <div className='relative w-full max-w-6xl overflow-hidden rounded-3xl shadow-2xl'>
            <div className='relative flex h-[75vh] w-full items-center justify-center bg-zinc-900 md:h-[85vh]'>
              {selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  className='h-full w-full object-contain'
                />
              ) : (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  className='object-contain'
                  sizes='100vw'
                />
              )}
            </div>
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 text-white md:p-10'>
              <h2 className='font-display text-4xl font-black uppercase tracking-widest drop-shadow-lg md:text-5xl'>{selectedItem.category}</h2>
              <p className='mt-3 text-lg font-light text-gray-200 drop-shadow-md md:text-xl'>{selectedItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
