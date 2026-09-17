import type { Metadata } from 'next';
import { NotaGuia } from '@/components/ferramentas/NotaGuia';
import { PaginaFerramenta } from '@/components/ferramentas/PaginaFerramenta';
import { FerramentaLd } from '@/components/seo/DadosEstruturados';
import { acharFerramenta } from '@/content/ferramentas';

const ferramenta = acharFerramenta('nota-guia')!;

export const metadata: Metadata = {
  title: 'Nota-guia online grátis',
  description: ferramenta.descricao,
  alternates: { canonical: '/ferramentas/nota-guia/' },
};

export default function Pagina() {
  return (
    <PaginaFerramenta ferramenta={ferramenta}>
      <FerramentaLd
        nome={ferramenta.titulo}
        descricao={ferramenta.descricao}
        caminho="/ferramentas/nota-guia/"
      />
      <NotaGuia />
    </PaginaFerramenta>
  );
}
