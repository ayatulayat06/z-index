import { DivisionCategory } from './portfolio';

export interface ServiceCapability {
  title: string;
  description: string;
  features: string[];
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  category: DivisionCategory;
  tagline: string;
  description: string;
  iconName: string;
  capabilities: ServiceCapability[];
  technologies: string[];
  engineeringProcess: ServiceProcessStep[];
  relatedProjectSlugs: string[];
}
