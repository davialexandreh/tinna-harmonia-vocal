import type { Metadata } from 'next';
import { EmConstrucao } from '@/components/layout/EmConstrucao';

export const metadata: Metadata = {
  title: 'Termos de uso',
  description: 'Condições de uso do site e das ferramentas gratuitas.',
};

export default function Pagina() {
  return (
    <EmConstrucao
      titulo="Termos de uso"
      descricao="Condições de uso do site e das ferramentas gratuitas."
      origem="stub-termos"
    />
  );
}
