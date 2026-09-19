'use client';

import { useEffect, useRef } from 'react';
import styles from './home.module.css';

type ConexaoDoNavegador = {
  saveData?: boolean;
  effectiveType?: string;
};

/**
 * Decide se vale a pena baixar e tocar o vídeo de fundo.
 *
 * Diz não quando a pessoa pediu menos movimento no sistema, quando o celular
 * está em economia de dados ou quando a conexão é lenta: o vídeo é decoração,
 * e 1,3 MB no 4G de alguém que veio do link da bio não é decoração barata.
 */
function podeTocarVideo(): boolean {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;

  const conexao = (navigator as Navigator & { connection?: ConexaoDoNavegador }).connection;
  if (conexao?.saveData) return false;
  if (conexao?.effectiveType && ['slow-2g', '2g', '3g'].includes(conexao.effectiveType)) {
    return false;
  }

  return true;
}

/**
 * Fundo do hero: o pôster desde o primeiro quadro, o vídeo só se couber.
 *
 * O elemento é sempre o mesmo `<video>`, já no HTML do servidor, mostrando o
 * pôster. Antes havia troca de `<img>` para `<video>` depois da hidratação, e
 * essa troca custava caro: o vídeo virava o maior elemento da tela ao aparecer,
 * e o LCP no celular pulava de 1,7s para 2,5s só por causa da substituição.
 *
 * Sem `autoplay` no HTML: quem manda tocar é o script, e só depois de checar
 * movimento reduzido, economia de dados e velocidade da conexão. Sem
 * JavaScript, o que fica é o pôster parado, que é o resultado correto.
 */
export function FundoDoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !podeTocarVideo()) return;

    video.play().catch(() => {
      // Navegador recusou a reprodução automática: o pôster já está na tela e
      // dá conta do recado sozinho.
    });
  }, []);

  return (
    <div className={styles.fundo} aria-hidden="true">
      <video
        ref={videoRef}
        className={styles.midiaDeFundo}
        poster="/midia/hero-poster.jpg"
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/midia/hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.veu} />
    </div>
  );
}
