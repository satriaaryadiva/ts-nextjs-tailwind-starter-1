import CtaBanner from '@/components/shared/CtaBanner';
import Hero from '@/components/home/Hero';
import Marquee from '@/components/home/Marquee';
import NaturalGlam from '@/components/home/NaturalGlam';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import TestimonialPreview from '@/components/home/TestimonialPreview';
import WhyMe from '@/components/home/WhyMe';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      <WhyMe />
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialPreview />
      <CtaBanner />
    </>
  );
}
