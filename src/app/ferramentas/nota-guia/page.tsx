import type { Metadata } from 'next';
import { NotaGuia } from '@/components/ferramentas/NotaGuia';
import { PaginaFerramenta } from '@/components/ferramentas/PaginaFerramenta';
import { acharFerramenta } from '@/content/ferramentas';

const ferramenta = acharFerramenta('nota-guia')!;

export const metadata: Metadata = {
  title: 'Nota-guia online grátis',
  description: ferramenta.descricao,
};

export default function Pagina() {
  return (
    <PaginaFerramenta ferramenta={ferramenta}>
      <NotaGuia />
    </PaginaFerramenta>
  );
}
