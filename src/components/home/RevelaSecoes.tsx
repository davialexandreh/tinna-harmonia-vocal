'use client';

import { useEffect } from 'react';

/**
 * Revelação das seções da Home ao rolar.
 *
 * Um componente só observa todas as seções, em vez de cada bloco carregar o
 * próprio invólucro: menos código e nenhuma div a mais no HTML.
 *
 * O gesto é de propósito diferente do hero. O hero sai do desfoque para o
 * foco, é longo e é único; aqui é um deslocamento curto de 14px em 420ms. Se
 * as duas coisas fossem iguais, a entrada do título deixaria de ser um momento
 * e viraria o padrão da página.
 *
 * Sem JavaScript nada fica escondido: quem esconde é a classe que este arquivo
 * e o script do layout colocam no <html>. Se o script não rodar, o site aparece
 * inteiro, como sempre apareceu.
 */

/** Atraso entre irmãos de uma mesma grade, em ms. */
const PASSO_DA_GRADE = 70;
/** Teto do atraso acumulado: ninguém espera mais que isto por um cartão. */
const ATRASO_MAXIMO = 280;

export function RevelaSecoes() {
  useEffect(() => {
    const raiz = document.documentElement;
    const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const conteudo = document.querySelector('main');
    if (!conteudo) return;

    // A primeira seção é o hero: ele tem a própria coreografia e está na
    // primeira dobra, então nunca entra na revelação.
    const secoes = [...conteudo.querySelectorAll<HTMLElement>(':scope > section')].slice(1);

    if (movimentoReduzido || secoes.length === 0) {
      raiz.classList.remove('revelacao-ativa');
      return;
    }

    for (const secao of secoes) {
      secao.dataset.revelar = 'espera';

      // Grade de cartões entra como lista: um depois do outro, com teto.
      const grade = secao.querySelector('[data-grade]');
      if (grade) {
        [...grade.children].forEach((filho, indice) => {
          const atraso = Math.min(indice * PASSO_DA_GRADE, ATRASO_MAXIMO);
          (filho as HTMLElement).style.setProperty('--atraso-revelacao', `${atraso}ms`);
        });
      }
    }

    const revelar = (secao: HTMLElement) => {
      secao.dataset.revelar = 'pronto';
    };

    let observador: IntersectionObserver;

    try {
      observador = new IntersectionObserver(
        (entradas) => {
          for (const entrada of entradas) {
            // Passou por cima sem nunca aparecer? Rolagem rápida, âncora ou
            // posição restaurada pelo navegador. Revela do mesmo jeito: pior
            // que não animar é a seção ficar invisível para sempre.
            const jaPassou = entrada.boundingClientRect.bottom <= 0;
            if (!entrada.isIntersecting && !jaPassou) continue;

            revelar(entrada.target as HTMLElement);
            observador.unobserve(entrada.target);
          }
        },
        // Começa um pouco antes de encostar na borda: a seção já chega pronta.
        { rootMargin: '0px 0px -12% 0px', threshold: 0.01 },
      );
    } catch {
      // Navegador sem IntersectionObserver: mostra tudo e sai de cena.
      for (const secao of secoes) revelar(secao);
      return;
    }

    for (const secao of secoes) observador.observe(secao);

    return () => {
      observador.disconnect();
      for (const secao of secoes) revelar(secao);
    };
  }, []);

  return null;
}
