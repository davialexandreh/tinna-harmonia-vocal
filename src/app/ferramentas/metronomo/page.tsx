import type { Metadata } from 'next';
import { Metronomo } from '@/components/ferramentas/Metronomo';
import { PaginaFerramenta } from '@/components/ferramentas/PaginaFerramenta';
import { FerramentaLd } from '@/components/seo/DadosEstruturados';
import { acharFerramenta } from '@/content/ferramentas';

const ferramenta = acharFerramenta('metronomo')!;

export const metadata: Metadata = {
  title: 'Metrônomo online para ensaio',
  description: ferramenta.descricao,
  alternates: { canonical: '/ferramentas/metronomo/' },
};

export default function Pagina() {
  return (
    <PaginaFerramenta ferramenta={ferramenta}>
      <FerramentaLd
        nome={ferramenta.titulo}
        descricao={ferramenta.descricao}
        caminho="/ferramentas/metronomo/"
      />
      <Metronomo />
    </PaginaFerramenta>
  );
}
