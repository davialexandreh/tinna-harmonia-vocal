'use client';

import { useSyncExternalStore } from 'react';
import styles from './home.module.css';

type ConexaoDoNavegador = {
  saveData?: boolean;
  effectiveType?: string;
};

/**
 * Decide se vale a pena baixar o vídeo de fundo.
 *
 * Diz não quando a pessoa pediu menos movimento no sistema, quando o celular
 * está em economia de dados ou quando a conexão é lenta. O vídeo é decoração,
 * e 1,3 MB no 4G de alguém que veio do link da bio não é decoração barata.
 */
function podeTocarVideo(): boolean {
  if (typeof window === 'undefined') return false;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;

  const conexao = (navigator as Navigator & { connection?: ConexaoDoNavegador }).connection;
  if (conexao?.saveData) return false;
  if (conexao?.effectiveType && ['slow-2g', '2g', '3g'].includes(conexao.effectiveType)) {
    return false;
  }

  return true;
}

function inscrever(aoMudar: () => void): () => void {
  const consulta = window.matchMedia('(prefers-reduced-motion: reduce)');
  consulta.addEventListener('change', aoMudar);
  return () => consulta.removeEventListener('change', aoMudar);
}

/**
 * No servidor renderiza só o pôster: o HTML inicial não carrega vídeo nenhum,
 * então ele nunca disputa banda com o conteúdo que define o LCP.
 */
export function FundoDoHero() {
  const comVideo = useSyncExternalStore(inscrever, podeTocarVideo, () => false);

  return (
    <div className={styles.fundo} aria-hidden="true">
      {comVideo ? (
        <video
          className={styles.midiaDeFundo}
          poster="/midia/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/midia/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element -- export estático: sem otimizador, o srcset é montado à mão */
        <img
          className={styles.midiaDeFundo}
          src="/midia/hero-poster.jpg"
          alt=""
          width={1280}
          height={720}
          fetchPriority="low"
          decoding="async"
        />
      )}
      <div className={styles.veu} />
    </div>
  );
}
