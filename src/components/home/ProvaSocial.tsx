import { Container } from '@/components/ui/Container';
import { provaSocial } from '@/content/home';
import styles from './home.module.css';

/**
 * Só renderiza quando houver dado real. Hoje as listas estão vazias
 * de propósito — ver PENDENTE em src/content/home.ts.
 */
export function ProvaSocial() {
  const temNumeros = provaSocial.numeros.length > 0;
  const temMinisterios = provaSocial.ministerios.length > 0;

  if (!temNumeros && !temMinisterios) return null;

  return (
    <div className={styles.strip}>
      <Container>
        {temNumeros && (
          <div className={styles.numeros}>
            {provaSocial.numeros.map((n) => (
              <div key={n.rotulo}>
                <b>{n.valor}</b>
                <span>{n.rotulo}</span>
              </div>
            ))}
          </div>
        )}
        {temMinisterios && (
          <div className={styles.stripIn}>
            {provaSocial.ministerios.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
