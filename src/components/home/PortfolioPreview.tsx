import Gallery from '@/components/portofolio/Gallery';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

export default function PortfolioPreview() {
  return (
    <section className='overflow-hidden bg-zinc-50 py-20 md:py-28'>
      <div className='layout'>
        <SectionHeading
          title='Galeri Portofolio'
          subtitle='Foto & video hasil riasan — wedding, prewedding, party, photoshoot, dan editorial.'
        />
      </div>

      <Gallery mode='preview' limit={8} showFilters={false} />

      <div className='layout mt-14 text-center md:mt-16'>
        <Button
          href='/portofolio'
          variant='outline'
          className='rounded-none border-black px-10 py-3.5 text-xs tracking-[0.2em] shadow-[3px_3px_0_0_#000] hover:shadow-[1px_1px_0_0_#000]'
        >
          Lihat Galeri Lengkap
        </Button>
      </div>
    </section>
  );
}
