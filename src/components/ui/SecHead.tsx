import type { ReactNode } from 'react';
import styles from './SecHead.module.css';

type SecHeadProps = {
  titulo: ReactNode;
  descricao?: ReactNode;
  centro?: boolean;
  /** Nível do heading. Uma página só tem um h1. */
  nivel?: 'h1' | 'h2';
};

export function SecHead({
  titulo,
  descricao,
  centro = false,
  nivel = 'h2',
}: SecHeadProps) {
  const Titulo = nivel;

  return (
    <div className={[styles.head, centro && styles.centro].filter(Boolean).join(' ')}>
      <Titulo>{titulo}</Titulo>
      {descricao && <p>{descricao}</p>}
    </div>
  );
}
