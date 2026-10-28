export type Metadata = Record<string, any>;
export type Viewport = Record<string, any>;

export type MetadataRoute = {
  Robots: {
    rules?: Array<{ userAgent?: string; allow?: string; disallow?: string }>;
    sitemap?: string;
  };
  Sitemap: Array<{
    url: string;
    lastModified?: Date;
    changeFrequency?: string;
    priority?: number;
  }>;
};
