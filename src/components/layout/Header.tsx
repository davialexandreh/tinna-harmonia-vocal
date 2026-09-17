'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Container } from '@/components/ui/Container';
import { MarcaNota } from '@/components/ui/Icone';
import { navegacao, site } from '@/content/site';
import styles from './Header.module.css';

export function Header() {
  const [aberto, setAberto] = useState(false);

  // Esc fecha e trava o scroll do fundo enquanto o painel está aberto.
  useEffect(() => {
    if (!aberto) return;

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAberto(false);
    };

    document.addEventListener('keydown', aoTeclar);
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', aoTeclar);
      document.body.style.overflow = overflowAnterior;
    };
  }, [aberto]);

  return (
    <header className={styles.header}>
      <Container className={styles.inner} as="div">
        <Link href="/" className={styles.logo}>
          <span className={styles.mark}>
            <MarcaNota />
          </span>
          {site.nome}
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {navegacao.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.rotulo}
            </Link>
          ))}
        </nav>

        <div className={styles.acoes}>
          <span className={styles.ctaDesktop}>
            <WhatsAppCTA
              mensagem={site.whatsapp.mensagens.workshop}
              tamanho="sm"
              origem="header"
            >
              Levar à minha igreja
            </WhatsAppCTA>
          </span>

          <button
            type="button"
            className={styles.botaoMenu}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setAberto((v) => !v)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </Container>

      <div
        className={[styles.painel, aberto && styles.painelAberto].filter(Boolean).join(' ')}
        id="menu-mobile"
        inert={!aberto}
      >
        <nav aria-label="Navegação principal (mobile)">
          {navegacao.map((item) => (
            // Fecha o painel ao navegar.
            <Link key={item.href} href={item.href} onClick={() => setAberto(false)}>
              {item.rotulo}
            </Link>
          ))}
        </nav>
        <div className={styles.painelCta}>
          <WhatsAppCTA
            mensagem={site.whatsapp.mensagens.workshop}
            bloco
            origem="menu-mobile"
          >
            Levar à minha igreja
          </WhatsAppCTA>
        </div>
      </div>

    </header>
  );
}
