import type { ReactNode } from 'react';
import styles from './Grid.module.css';

export function Grid({
  children,
  colunas = 3,
  className,
}: {
  children: ReactNode;
  colunas?: 2 | 3 | 4 | 5;
  className?: string;
}) {
  return (
    <div className={[styles.grid, styles[`c${colunas}`], className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
