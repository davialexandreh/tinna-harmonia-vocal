'use client';

import Link from 'next/link';
import { useEffect, useRef, useSyncExternalStore } from 'react';
import { Button } from '@/components/ui/Button';
import {
  definirConsentimento,
  inscrever,
  lerConsentimento,
  lerConsentimentoNoServidor,
} from '@/lib/consentimento';
import { MEDICAO_CONFIGURADA } from '@/lib/medicao';
import styles from './Banner.module.css';

export function BannerConsentimento() {
  const consentimento = useSyncExternalStore(
    inscrever,
    lerConsentimento,
    lerConsentimentoNoServidor,
  );
  const caixa = useRef<HTMLDivElement>(null);

  const visivel = MEDICAO_CONFIGURADA && consentimento === 'pendente';

  /*
   * O banner é fixo no rodapé e, sem isso, fica por cima dos controles das
   * ferramentas — o visitante clica e nada acontece. Reservar o espaço no fim
   * da página garante que tudo continue alcançável enquanto ele estiver ali.
   */
  useEffect(() => {
    if (!visivel) return;

    const altura = caixa.current?.offsetHeight ?? 0;
    const anterior = document.body.style.paddingBottom;
    document.body.style.paddingBottom = `calc(${altura}px + var(--space-8))`;

    return () => {
      document.body.style.paddingBottom = anterior;
    };
  }, [visivel]);

  if (!visivel) return null;

  return (
    <div className={styles.banner} ref={caixa} role="dialog" aria-label="Aviso de cookies">
      <p className={styles.texto}>
        Uso cookies de medição, que só carregam se você aceitar.{' '}
        <Link href="/privacidade/">Como trato seus dados</Link>.
      </p>
      <div className={styles.acoes}>
        <Button onClick={() => definirConsentimento('aceito')}>Aceitar</Button>
        <Button variante="ghost" onClick={() => definirConsentimento('recusado')}>
          Recusar
        </Button>
      </div>
    </div>
  );
}
