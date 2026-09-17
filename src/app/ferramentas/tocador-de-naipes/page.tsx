import type { Metadata } from 'next';
import { PaginaFerramenta } from '@/components/ferramentas/PaginaFerramenta';
import { TocadorDeNaipes } from '@/components/ferramentas/TocadorDeNaipes';
import { acharFerramenta } from '@/content/ferramentas';

const ferramenta = acharFerramenta('tocador-de-naipes')!;

export const metadata: Metadata = {
  title: 'Tocador de naipes: soprano, contralto e tenor',
  description: ferramenta.descricao,
};

export default function Pagina() {
  return (
    <PaginaFerramenta ferramenta={ferramenta}>
      <TocadorDeNaipes />
    </PaginaFerramenta>
  );
}
