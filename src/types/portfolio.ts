export type DivisionCategory = 'Programming' | 'Graphics' | 'Robotics' | 'Web & IT';

export interface ProjectProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ArchitectureLayer {
  level: number;
  name: string;
  technology: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: DivisionCategory;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  status: 'Production' | 'Active Deployment' | 'Internal R&D';
  featured: boolean;
  year: string;
  scope: string;
  overview: string;
  challenge: string;
  solution: string;
  process: ProjectProcessStep[];
  architectureLayers: ArchitectureLayer[];
  outcome: string;
  relatedSlugs: string[];
}
