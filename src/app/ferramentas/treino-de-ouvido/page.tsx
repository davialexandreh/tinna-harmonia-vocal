import type { Metadata } from 'next';
import { PaginaFerramenta } from '@/components/ferramentas/PaginaFerramenta';
import { TreinoDeOuvido } from '@/components/ferramentas/TreinoDeOuvido';
import { acharFerramenta } from '@/content/ferramentas';

const ferramenta = acharFerramenta('treino-de-ouvido')!;

export const metadata: Metadata = {
  title: 'Ache a voz: treino de ouvido para harmonia vocal',
  description: ferramenta.descricao,
};

export default function Pagina() {
  return (
    <PaginaFerramenta ferramenta={ferramenta}>
      <TreinoDeOuvido />
    </PaginaFerramenta>
  );
}
