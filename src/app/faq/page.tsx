import type { Metadata } from 'next';

import FaqAccordion from '@/components/faq/FaqAccordion';
import CtaBanner from '@/components/shared/CtaBanner';
import PageHero from '@/components/shared/PageHero';
import { faqItems } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Pertanyaan umum seputar layanan makeup Angelia Beauty MUA.',
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title='FAQ'
        subtitle='Jawaban untuk pertanyaan yang sering ditanyakan sebelum booking.'
      />
      <div className='layout max-w-3xl py-12 pb-16'>
        <FaqAccordion items={faqItems} />
      </div>
      <CtaBanner
        title='Masih ada pertanyaan?'
        subtitle='Chat langsung atau mulai booking — dengan senang hati aku bantu.'
      />
    </>
  );
}
