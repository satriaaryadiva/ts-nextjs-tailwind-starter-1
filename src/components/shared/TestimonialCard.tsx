import type { Testimonial } from '@/data/testimonials';

export default function TestimonialCard({ quote, author, handle }: Testimonial) {
  return (
    <blockquote className='flex h-full flex-col rounded-sm border border-cream-dark bg-white p-6 md:p-8'>
      <p className='flex-1 text-sm leading-relaxed text-charcoal-light italic'>
        &ldquo;{quote}&rdquo;
      </p>
      <footer className='mt-6 border-t border-cream-dark pt-4'>
        <cite className='text-charcoal not-italic font-medium'>{author}</cite>
        <span className='text-rose-dark mt-1 block text-sm'>{handle}</span>
      </footer>
    </blockquote>
  );
}
