import Image from 'next/image';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';

export default function TestimonialPreview() {
  const preview = testimonials.slice(0, 3);

  return (
    <section className='bg-zinc-50 py-20 md:py-32'>
      <div className='layout'>
        <SectionHeading
          title='Apa Kata Mereka?'
          subtitle='Yang mereka rasakan setelah menggunakan jasa Angelia Beauty MUA.'
        />
        
        <div className='mt-12 grid gap-8 md:grid-cols-3'>
          {preview.map((t) => (
            <div
              key={t.id}
              className='group relative flex h-[500px] w-full flex-col justify-end overflow-hidden rounded-3xl bg-neutral-200 shadow-md transition-all hover:shadow-2xl md:h-[600px]'
            >
              {t.image ? (
                <Image
                  src={t.image}
                  alt={`Testimonial dari ${t.author}`}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
              ) : (
                <div className='h-full w-full bg-linear-to-br from-neutral-300 to-neutral-400' />
              )}
              
              {/* Elegant overlay to ensure text is readable even if there's no box */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80' />
              
              {/* Floating Caption Box */}
              <div className='relative z-10 m-4 rounded-2xl bg-black/80 p-6 text-center shadow-xl backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2 md:m-6 md:p-8'>
                <p className='text-sm italic leading-relaxed text-gray-200 md:text-base'>
                  "{t.quote}"
                </p>
                <div className='mt-4 flex items-center justify-center space-x-2'>
                  <div className='h-1 w-8 rounded-full bg-cream'></div>
                </div>
                <h4 className='mt-3 font-display font-semibold uppercase tracking-wide text-white'>
                  {t.author}
                </h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className='mt-16 text-center'>
          <Button href='/testimoni' variant='outline' className='rounded-full px-8 py-3 text-sm tracking-widest'>
            Lihat Semua Testimoni
          </Button>
        </div>
      </div>
    </section>
  );
}
