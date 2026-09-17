import type { Metadata } from 'next';
import { EmConstrucao } from '@/components/layout/EmConstrucao';

export const metadata: Metadata = {
  title: 'Ferramentas gratuitas de canto',
  description: 'Ferramentas de canto que funcionam direto no navegador: nota-guia, tocador de naipes, metrônomo e treino de ouvido.',
};

export default function Pagina() {
  return (
    <EmConstrucao
      titulo="Ferramentas gratuitas"
      descricao="Ferramentas de canto que funcionam direto no navegador: nota-guia, tocador de naipes, metrônomo e treino de ouvido."
      origem="stub-ferramentas"
    />
  );
}
