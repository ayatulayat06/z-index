import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailClient } from '@/components/services/ServiceDetailClient';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/portfolio';
import { constructMetadata } from '@/lib/seo';

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return constructMetadata({
    title: `${service.title} — Capabilities & Architecture`,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: [service.title, ...service.technologies],
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = PROJECTS.filter((p) =>
    service.relatedProjectSlugs.includes(p.slug)
  );

  return (
    <ServiceDetailClient
      service={service}
      relatedProjects={relatedProjects}
    />
  );
}
