import type { Metadata } from 'next';
import { EmConstrucao } from '@/components/layout/EmConstrucao';

export const metadata: Metadata = {
  title: 'Política de privacidade',
  description: 'Como os seus dados são tratados neste site, conforme a LGPD.',
};

export default function Pagina() {
  return (
    <EmConstrucao
      titulo="Política de privacidade"
      descricao="Como os seus dados são tratados neste site, conforme a LGPD."
      origem="stub-privacidade"
    />
  );
}
