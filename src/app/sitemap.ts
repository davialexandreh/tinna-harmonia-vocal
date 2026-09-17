import type { MetadataRoute } from 'next';

// Obrigatório com `output: 'export'`: sem isso o Next trata a rota como dinâmica.
export const dynamic = 'force-static';
import { ferramentas } from '@/content/ferramentas';
import { site } from '@/content/site';

/** Gerado no build. Com `output: 'export'` vira out/sitemap.xml. */
export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();

  const fixas = [
    { url: '/', prioridade: 1 },
    { url: '/workshops/', prioridade: 0.9 },
    { url: '/ferramentas/', prioridade: 0.8 },
    { url: '/sobre/', prioridade: 0.6 },
    { url: '/contato/', prioridade: 0.6 },
    { url: '/termos/', prioridade: 0.2 },
    { url: '/privacidade/', prioridade: 0.2 },
  ];

  return [
    ...fixas.map((pagina) => ({
      url: `${site.url}${pagina.url}`,
      lastModified: agora,
      priority: pagina.prioridade,
    })),
    ...ferramentas.map((ferramenta) => ({
      url: `${site.url}/ferramentas/${ferramenta.slug}/`,
      lastModified: agora,
      priority: 0.7,
    })),
  ];
}
