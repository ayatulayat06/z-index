export type TeamDepartment = 'Programming' | 'Graphics' | 'Robotics' | 'Web & IT';

export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  photo: string;
  role: string;
  department: TeamDepartment;
  secondaryDepartment?: TeamDepartment;
  bio: string;
  detailedBio: string;
  skills: string[];
  responsibilities: string[];
  email?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
  projects: string[];
  featured: boolean;
}
