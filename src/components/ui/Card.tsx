import type { ReactNode } from 'react';
import { Icone, type NomeDeIcone } from './Icone';
import styles from './Card.module.css';

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={[styles.card, className].filter(Boolean).join(' ')}>{children}</div>;
}

/** Ícone desenhado no topo do cartão. Decorativo: o título carrega o sentido. */
export function CardIcone({ nome }: { nome: NomeDeIcone }) {
  return (
    <div className={styles.ico}>
      <Icone nome={nome} tamanho={22} />
    </div>
  );
}

export function CardNumero({ children }: { children: ReactNode }) {
  return <span className={styles.num}>{children}</span>;
}
