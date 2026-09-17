import type { Metadata } from 'next';
import { EmConstrucao } from '@/components/layout/EmConstrucao';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Back vocal, compositora e professora de harmonia vocal há mais de dez anos, com foco em ministérios de louvor.',
};

export default function Pagina() {
  return (
    <EmConstrucao
      titulo="Sobre a Tinna"
      descricao="Back vocal, compositora e professora de harmonia vocal há mais de dez anos, com foco em ministérios de louvor."
      origem="stub-sobre"
    />
  );
}
