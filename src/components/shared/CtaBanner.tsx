import Button from '@/components/ui/Button';

type CtaBannerProps = {
  title?: string;
  subtitle?: string;
};

export default function CtaBanner({
  title = 'Siap Tampil Terbaik di Hari Spesialmu?',
  subtitle = 'Ceritakan tanggal, kota, dan acaramu — aku bantu rangkai paket yang pas.',
}: CtaBannerProps) {
  return (
    <section className='bg-charcoal py-16 text-cream md:py-20'>
      <div className='layout text-center'>
        <h2 className='font-display text-3xl font-medium md:text-4xl'>
          {title}
        </h2>
        <p className='mx-auto mt-4 max-w-xl text-cream/70'>{subtitle}</p>
        <div className='mt-8'>
          <Button
            href='/booking'
            className='border-white bg-white text-black hover:bg-white/90 hover:text-black'
          >
            Mulai Booking
          </Button>
        </div>
      </div>
    </section>
  );
}
