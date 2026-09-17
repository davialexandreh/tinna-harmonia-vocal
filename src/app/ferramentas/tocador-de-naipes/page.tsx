import type { Metadata } from 'next';
import { PaginaFerramenta } from '@/components/ferramentas/PaginaFerramenta';
import { TocadorDeNaipes } from '@/components/ferramentas/TocadorDeNaipes';
import { FerramentaLd } from '@/components/seo/DadosEstruturados';
import { acharFerramenta } from '@/content/ferramentas';

const ferramenta = acharFerramenta('tocador-de-naipes')!;

export const metadata: Metadata = {
  title: 'Tocador de naipes: soprano, contralto e tenor',
  description: ferramenta.descricao,
  alternates: { canonical: '/ferramentas/tocador-de-naipes/' },
};

export default function Pagina() {
  return (
    <PaginaFerramenta ferramenta={ferramenta}>
      <FerramentaLd
        nome={ferramenta.titulo}
        descricao={ferramenta.descricao}
        caminho="/ferramentas/tocador-de-naipes/"
      />
      <TocadorDeNaipes />
    </PaginaFerramenta>
  );
}
