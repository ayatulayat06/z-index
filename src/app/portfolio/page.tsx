import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { PortfolioClient } from '@/components/portfolio/PortfolioClient';
import { PROJECTS } from '@/data/portfolio';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Portfolio — Selected Engineering Work',
  description:
    'Explore projects engineered by Z-INDEX across distributed programming engines, token design systems, IoT physical computing nodes, and resilient web platforms.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <div>
      <PageHeader
        badge="PORTFOLIO DIRECTORY"
        title="OUR WORK"
        description="Ideas we've designed, developed and engineered. Explore technical case studies detailing architecture layers, problem statements, and real production outcomes."
        zIndexLayer={20}
      />
      <PortfolioClient initialProjects={PROJECTS} />
    </div>
  );
}
