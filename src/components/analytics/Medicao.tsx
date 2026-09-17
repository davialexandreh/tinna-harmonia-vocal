'use client';

import Script from 'next/script';
import { useEffect, useSyncExternalStore } from 'react';
import {
  inscrever,
  lerConsentimento,
  lerConsentimentoNoServidor,
} from '@/lib/consentimento';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/**
 * GA4 e Pixel da Meta, carregados só depois do aceite — e só se os IDs
 * existirem no build. Sem variável de ambiente, nada é injetado.
 *
 * Também registra o clique de WhatsApp, que é a única conversão do site.
 * O ouvinte é delegado no document: qualquer elemento com data-evento
 * ="whatsapp" é rastreado, inclusive os que aparecerem depois.
 */
export function Medicao() {
  const consentimento = useSyncExternalStore(
    inscrever,
    lerConsentimento,
    lerConsentimentoNoServidor,
  );

  const aceito = consentimento === 'aceito';

  useEffect(() => {
    if (!aceito) return;

    function aoClicar(evento: MouseEvent) {
      const alvo = (evento.target as HTMLElement | null)?.closest<HTMLElement>(
        '[data-evento="whatsapp"]',
      );
      if (!alvo) return;

      const origem = alvo.dataset.origem ?? 'desconhecida';
      window.gtag?.('event', 'contato_whatsapp', { origem });
      window.fbq?.('track', 'Contact', { origem });
    }

    document.addEventListener('click', aoClicar);
    return () => document.removeEventListener('click', aoClicar);
  }, [aceito]);

  if (!aceito) return null;

  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
          </Script>
        </>
      )}

      {PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
      )}
    </>
  );
}
