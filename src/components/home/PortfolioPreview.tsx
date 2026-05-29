import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { portfolioItems } from '@/data/portfolio';

export default function PortfolioPreview() {
  const preview = portfolioItems.slice(0, 4);

  return (
    <section className='bg-white py-20  '>
      <div className='layout'>
        <SectionHeading
          title='Hasil Karya Kami'
          subtitle='Beberapa cuplikan hasil makeup terbaik dari Angelia Beauty.'
        />

        {/* Masonry or simple grid layout for preview */}
        <div className='mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'>
          {preview.map((item) => (
            <figure
              key={item.id}
              className='group relative h-[350px] w-full overflow-hidden   bg-zinc-100  transition-all '
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-105'
                sizes='(max-width: 768px) 100vw, 25vw'
              />
              <div className='absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90' />

              <figcaption className='absolute bottom-0 left-0 right-0 z-20 flex flex-col justify-end p-6'>
                <div className='translate-y-4 transform transition-transform duration-500 group-hover:translate-y-0'>
                  <h3 className='font-display text-xl font-bold uppercase tracking-wider text-white drop-shadow-md'>
                    {item.category}
                  </h3>
                  <p className='mt-1 text-sm text-gray-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                    {item.caption}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <Button
            href='/portofolio'
            variant='outline'
            className='rounded-full px-8 py-3 text-sm tracking-widest'
          >
            Lihat Selengkapnya
          </Button>
        </div>
      </div>
    </section>
  );
}
