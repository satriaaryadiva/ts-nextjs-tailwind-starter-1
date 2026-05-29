type PageHeroProps = {
  title: string;
  subtitle?: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className='border-b border-cream-dark bg-neutral-100 py-16 md:py-20'>
      <div className='layout text-center'>
        <h1 className='font-display text-4xl text-charcoal md:text-5xl'>
          {title}
        </h1>
        {subtitle && (
          <p className='mx-auto mt-4 max-w-2xl text-charcoal-light'>{subtitle}</p>
        )}
      </div>
    </section>
  );
}
