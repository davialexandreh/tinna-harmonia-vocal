import type { Metadata } from 'next';
import { EmConstrucao } from '@/components/layout/EmConstrucao';

export const metadata: Metadata = {
  title: 'Workshops presenciais',
  description: 'Workshops e imersões de harmonia vocal para ministérios de louvor. Formatos, o que o grupo recebe e como agendar.',
};

export default function Pagina() {
  return (
    <EmConstrucao
      titulo="Workshops presenciais"
      descricao="Workshops e imersões de harmonia vocal para ministérios de louvor. Formatos, o que o grupo recebe e como agendar."
      origem="stub-workshops"
    />
  );
}
