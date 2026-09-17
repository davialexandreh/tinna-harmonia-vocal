import type { MetadataRoute } from 'next';

// Obrigatório com `output: 'export'`: sem isso o Next trata a rota como dinâmica.
export const dynamic = 'force-static';
import { site } from '@/content/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
