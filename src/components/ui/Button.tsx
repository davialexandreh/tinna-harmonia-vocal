import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.css';

type Variante = 'primary' | 'ghost' | 'inverse';
type Tamanho = 'sm' | 'md' | 'lg';

type BaseProps = {
  children: ReactNode;
  variante?: Variante;
  tamanho?: Tamanho;
  bloco?: boolean;
  className?: string;
};

type ButtonProps = BaseProps & {
  href?: string;
} & Omit<ComponentPropsWithoutRef<'a'>, keyof BaseProps | 'href'> &
  Omit<ComponentPropsWithoutRef<'button'>, keyof BaseProps>;

const ehExterno = (href: string) => /^(https?:)?\/\/|^(mailto|tel):/.test(href);

export function Button({
  children,
  variante = 'primary',
  tamanho = 'md',
  bloco = false,
  className,
  href,
  ...rest
}: ButtonProps) {
  const classes = [
    styles.btn,
    styles[variante],
    tamanho !== 'md' && styles[tamanho],
    bloco && styles.block,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href && ehExterno(href)) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...(rest as ComponentPropsWithoutRef<'a'>)}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as ComponentPropsWithoutRef<'a'>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  );
}
