import { Hero } from '@/components/home/Hero';
import { CoreDivisions } from '@/components/home/CoreDivisions';
import { FeaturedPortfolio } from '@/components/home/FeaturedPortfolio';
import { WhyZIndex } from '@/components/home/WhyZIndex';
import { Workflow } from '@/components/home/Workflow';
import { Technologies } from '@/components/home/Technologies';
import { HomeCTA } from '@/components/home/HomeCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreDivisions />
      <FeaturedPortfolio />
      <WhyZIndex />
      <Workflow />
      <Technologies />
      <HomeCTA />
    </>
  );
}
