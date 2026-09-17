'use client';

import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import { Button } from '@/components/ui/Button';
import {
  definirConsentimento,
  inscrever,
  lerConsentimento,
  lerConsentimentoNoServidor,
} from '@/lib/consentimento';
import styles from './Banner.module.css';

export function BannerConsentimento() {
  const consentimento = useSyncExternalStore(
    inscrever,
    lerConsentimento,
    lerConsentimentoNoServidor,
  );

  if (consentimento !== 'pendente') return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Aviso de cookies">
      <p className={styles.texto}>
        Uso cookies de medição para entender como as pessoas chegam até aqui. Eles só
        carregam se você aceitar. Detalhes na{' '}
        <Link href="/privacidade/">Política de privacidade</Link>.
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
