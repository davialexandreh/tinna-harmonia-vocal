import type { ReactNode } from 'react';
import styles from './Secao.module.css';

type SecaoProps = {
  children: ReactNode;
  /** Fundo alternado, para separar blocos vizinhos. */
  alt?: boolean;
  escura?: boolean;
  id?: string;
  className?: string;
};

export function Secao({ children, alt, escura, id, className }: SecaoProps) {
  const classes = [styles.secao, alt && styles.alt, escura && styles.escura, className]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}
