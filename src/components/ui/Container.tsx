import type { ElementType, ReactNode } from 'react';
import styles from './Container.module.css';

type ContainerProps = {
  children: ReactNode;
  /** Largura reduzida, para blocos de leitura (FAQ, textos legais). */
  narrow?: boolean;
  as?: ElementType;
  className?: string;
};

export function Container({
  children,
  narrow = false,
  as: Tag = 'div',
  className,
}: ContainerProps) {
  const classes = [styles.container, narrow && styles.narrow, className]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
