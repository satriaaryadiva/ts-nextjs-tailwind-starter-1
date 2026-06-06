'use client';

import { AlertCircle } from 'lucide-react';
import * as React from 'react';

import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className='layout flex min-h-[60vh] flex-col items-center justify-center py-20 text-center'>
      <AlertCircle className='text-black' size={48} strokeWidth={1.5} />
      <h1 className='font-display mt-6 text-2xl text-black md:text-3xl'>
        Terjadi kesalahan
      </h1>
      <p className='text-charcoal-light mt-2 max-w-md text-sm'>
        Maaf, ada yang tidak beres. Silakan coba lagi.
      </p>
      <Button onClick={reset} className='mt-8'>
        Coba Lagi
      </Button>
    </section>
  );
}
