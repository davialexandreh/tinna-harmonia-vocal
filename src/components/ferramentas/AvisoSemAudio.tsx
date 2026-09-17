'use client';

import { useSyncExternalStore } from 'react';
import { temSuporteAudio } from '@/lib/audio/contexto';
import styles from './ferramentas.module.css';

/** Nada a assinar: o suporte do navegador não muda durante a sessão. */
const semInscricao = () => () => {};

/**
 * Fallback claro quando o navegador não tem Web Audio.
 * No servidor assume que há suporte, para o aviso não piscar na hidratação.
 */
export function AvisoSemAudio() {
  const temSuporte = useSyncExternalStore(
    semInscricao,
    () => temSuporteAudio(),
    () => true,
  );

  if (temSuporte) return null;

  return (
    <p className={styles.aviso} role="alert">
      Este navegador não reproduz o áudio desta ferramenta. Se você chegou por um link
      do Instagram, toque nos três pontos e escolha “Abrir no navegador”. Fora dele,
      use Chrome, Safari ou Firefox atualizados.
    </p>
  );
}
