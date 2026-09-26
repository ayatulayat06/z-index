import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetailClient } from '@/components/portfolio/ProjectDetailClient';
import { PROJECTS } from '@/data/portfolio';
import { constructMetadata } from '@/lib/seo';

interface ProjectPageProps {
  params: Promise<{ project: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    project: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { project: slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Case Study Not Found' };
  }

  return constructMetadata({
    title: `${project.title} — Case Study`,
    description: project.description,
    path: `/portfolio/${project.slug}`,
    keywords: [project.category, ...project.technologies],
    ogImage: project.image,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { project: slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const relatedProjects = PROJECTS.filter(
    (p) => project.relatedSlugs.includes(p.slug) || (p.category === project.category && p.slug !== project.slug)
  ).slice(0, 2);

  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <ProjectDetailClient
      project={project}
      relatedProjects={relatedProjects}
      nextProject={nextProject}
    />
  );
}
