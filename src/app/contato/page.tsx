import type { Metadata } from 'next';
import { EmConstrucao } from '@/components/layout/EmConstrucao';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com a Tinna sobre workshops, imersões e acompanhamento do seu ministério.',
};

export default function Pagina() {
  return (
    <EmConstrucao
      titulo="Contato"
      descricao="Fale com a Tinna sobre workshops, imersões e acompanhamento do seu ministério."
      origem="stub-contato"
    />
  );
}
