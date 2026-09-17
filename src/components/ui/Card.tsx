import type { ReactNode } from 'react';
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

/** Ícone em emoji no topo do card. Decorativo. */
export function CardIcone({ children }: { children: ReactNode }) {
  return (
    <div className={styles.ico} aria-hidden="true">
      {children}
    </div>
  );
}

export function CardNumero({ children }: { children: ReactNode }) {
  return <span className={styles.num}>{children}</span>;
}
