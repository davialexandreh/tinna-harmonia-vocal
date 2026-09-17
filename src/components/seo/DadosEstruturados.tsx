import { faq } from '@/content/faq';
import { site } from '@/content/site';

/**
 * JSON-LD. Só afirma o que é verdade: nada de nota de avaliação, contagem de
 * alunos ou preço enquanto esses dados não existirem de fato.
 */
function Json({ dados }: { dados: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // O conteúdo é nosso, não vem de entrada de usuário.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }}
    />
  );
}

export function PessoaESericoLd() {
  return (
    <>
      <Json
        dados={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: site.nome,
          jobTitle: 'Professora de harmonia vocal',
          description: site.descricao,
          url: site.url,
          sameAs: [site.instagram.url],
          knowsAbout: [
            'Harmonia vocal',
            'Canto em grupo',
            'Ministério de louvor',
            'Técnica vocal',
          ],
        }}
      />
      <Json
        dados={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Workshop de harmonia vocal para ministérios de louvor',
          provider: { '@type': 'Person', name: site.nome, url: site.url },
          areaServed: { '@type': 'Country', name: 'Brasil' },
          description:
            'Workshops e imersões presenciais de harmonia vocal dentro de igrejas, para ministérios que querem cantar em três vozes.',
        }}
      />
    </>
  );
}

export function FaqLd() {
  return (
    <Json
      dados={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.pergunta,
          acceptedAnswer: { '@type': 'Answer', text: item.resposta },
        })),
      }}
    />
  );
}

export function FerramentaLd({
  nome,
  descricao,
  caminho,
}: {
  nome: string;
  descricao: string;
  caminho: string;
}) {
  return (
    <Json
      dados={{
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: nome,
        description: descricao,
        url: `${site.url}${caminho}`,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Navegador web',
        inLanguage: 'pt-BR',
        isAccessibleForFree: true,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
        author: { '@type': 'Person', name: site.nome },
      }}
    />
  );
}
