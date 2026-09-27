import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';
import { PROJECTS } from '@/data/portfolio';
import { SERVICES } from '@/data/services';
import { TEAM_MEMBERS } from '@/data/team';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    '',
    '/portfolio',
    '/about',
    '/services',
    '/contact',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projectPages = PROJECTS.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const servicePages = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const teamPages = TEAM_MEMBERS.map((m) => ({
    url: `${baseUrl}/team/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...servicePages, ...teamPages];
}
