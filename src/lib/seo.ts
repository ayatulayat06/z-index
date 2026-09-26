import { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  type?: 'website' | 'article' | 'profile';
}

export function constructMetadata({
  title,
  description = SITE_CONFIG.description,
  path = '',
  keywords = [],
  ogImage = '/images/brand/logo.svg',
  type = 'website',
}: SEOProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle = `${title} | ${SITE_CONFIG.name} — Technology × Creativity × Engineering`;

  return {
    title: fullTitle,
    description,
    keywords: [
      'Z-INDEX',
      'technology company',
      'engineering',
      'programming',
      'robotics',
      'graphics design',
      'web solutions',
      'automation',
      'IoT systems',
      ...keywords,
    ],
    authors: [{ name: 'Z-INDEX Engineering Team' }],
    creator: 'Z-INDEX',
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 450,
          alt: `${SITE_CONFIG.name} — Neo-Tech Minimal Systems`,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@zindex_tech',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/brand/logo.svg`,
    description: SITE_CONFIG.description,
    slogan: SITE_CONFIG.tagline,
    knowsAbout: [
      'Software Architecture',
      'Robotics & Automation',
      'Graphic & Visual Design Systems',
      'Web & IT Infrastructure',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.contact.inquiries,
      contactType: 'technical support',
      availableLanguage: ['English'],
    },
  };
}
