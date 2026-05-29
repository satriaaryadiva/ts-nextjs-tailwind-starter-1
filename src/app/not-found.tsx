import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className='layout flex min-h-[60vh] flex-col items-center justify-center py-20 text-center'>
      <p className='font-display text-6xl text-rose'>404</p>
      <h1 className='font-display mt-4 text-2xl text-charcoal'>
        Halaman tidak ditemukan
      </h1>
      <p className='text-charcoal-light mt-2 max-w-md text-sm'>
        Sepertinya halaman yang kamu cari sudah pindah atau tidak ada.
      </p>
      <Button href='/' className='mt-8'>
        Kembali ke Home
      </Button>
    </section>
  );
}
