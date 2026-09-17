import type { Metadata } from 'next';
import { Metronomo } from '@/components/ferramentas/Metronomo';
import { PaginaFerramenta } from '@/components/ferramentas/PaginaFerramenta';
import { acharFerramenta } from '@/content/ferramentas';

const ferramenta = acharFerramenta('metronomo')!;

export const metadata: Metadata = {
  title: 'Metrônomo online para ensaio',
  description: ferramenta.descricao,
};

export default function Pagina() {
  return (
    <PaginaFerramenta ferramenta={ferramenta}>
      <Metronomo />
    </PaginaFerramenta>
  );
}
