import type { MetadataRoute } from 'next';
import { projects } from '@/data/portfolio';
import { siteUrl } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl
    ? [
        { url: siteUrl, priority: 1 },
        ...projects
          .filter((p) => p.detail)
          .map((p) => ({ url: `${siteUrl}/projects/${p.slug}`, priority: 0.8 })),
      ]
    : [];
}
