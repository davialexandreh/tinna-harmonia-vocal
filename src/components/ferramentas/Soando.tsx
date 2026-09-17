import styles from './ferramentas.module.css';

/**
 * Indicador de voz soando. Decorativo para leitor de tela: o estado já é
 * anunciado pelo aria-pressed do próprio controle.
 */
export function Soando() {
  return (
    <span className={styles.soando} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}
