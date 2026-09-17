import type { ReactNode } from 'react';
import styles from './Prosa.module.css';

export function Prosa({ children }: { children: ReactNode }) {
  return <div className={styles.prosa}>{children}</div>;
}

export function Atualizado({ data }: { data: string }) {
  return <p className={styles.atualizado}>Última atualização: {data}</p>;
}
