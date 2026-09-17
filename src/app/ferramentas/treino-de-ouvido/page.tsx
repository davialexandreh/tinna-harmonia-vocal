import type { Metadata } from 'next';
import { PaginaFerramenta } from '@/components/ferramentas/PaginaFerramenta';
import { TreinoDeOuvido } from '@/components/ferramentas/TreinoDeOuvido';
import { FerramentaLd } from '@/components/seo/DadosEstruturados';
import { acharFerramenta } from '@/content/ferramentas';

const ferramenta = acharFerramenta('treino-de-ouvido')!;

export const metadata: Metadata = {
  title: 'Ache a voz: treino de ouvido para harmonia vocal',
  description: ferramenta.descricao,
  alternates: { canonical: '/ferramentas/treino-de-ouvido/' },
};

export default function Pagina() {
  return (
    <PaginaFerramenta ferramenta={ferramenta}>
      <FerramentaLd
        nome={ferramenta.titulo}
        descricao={ferramenta.descricao}
        caminho="/ferramentas/treino-de-ouvido/"
      />
      <TreinoDeOuvido />
    </PaginaFerramenta>
  );
}
