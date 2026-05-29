import CtaBanner from '@/components/shared/CtaBanner';
import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import TestimonialPreview from '@/components/home/TestimonialPreview';
import WhyMe from '@/components/home/WhyMe';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhyMe />
      <PortfolioPreview />
      <TestimonialPreview />
      <CtaBanner />
    </>
  );
}
