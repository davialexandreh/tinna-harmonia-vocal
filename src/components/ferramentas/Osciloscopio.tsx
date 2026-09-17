'use client';

import { useEffect, useRef } from 'react';
import {
  acharGatilho,
  amostrasPorCiclo,
  normalizarOnda,
  reduzirOnda,
  type ModoDeReducao,
} from '@/lib/audio/onda';
import styles from './ferramentas.module.css';

export type FaixaDeOnda = {
  id: string;
  nome: string;
  nota: string;
  analisador: AnalyserNode;
};

type OsciloscopioProps = {
  faixas: FaixaDeOnda[];
  /** Analisador da soma: o que o ouvido de fato escuta. */
  mestre: AnalyserNode | null;
  /** Fundamental do acorde, usada para marcar onde a forma se repete. */
  fundamental: number;
  tocando: boolean;
};

const ALTURA_FAIXA = 54;
const ALTURA_SOMA = 78;
const ESPACO = 10;

/**
 * Quantos ciclos da fundamental cabem na tela.
 *
 * Três é o número que faz a lição aparecer: no mesmo trecho de tempo, o tenor
 * desenha três ondas, a contralto quatro e meia e a soprano sete e meia. A
 * proporção entre elas é o intervalo, e ela fica visível sem precisar contar.
 */
const CICLOS_VISIVEIS = 3;

function lerCor(elemento: HTMLElement, token: string): string {
  return getComputedStyle(elemento).getPropertyValue(token).trim();
}

/**
 * Desenha, em tempo real, a onda de cada naipe e a soma das três.
 *
 * É o exercício do produto virando imagem: a contralto escorrega para a melodia
 * porque ninguém consegue ouvi-la dentro do acorde. Aqui dá para vê-la, e dá
 * para ver que as três juntas fecham um ciclo só, que é o que significa estar
 * em harmonia.
 *
 * Só roda enquanto o som toca e enquanto o canvas está na tela. Com movimento
 * reduzido, desenha um quadro parado em vez de animar.
 */
export function Osciloscopio({ faixas, mestre, fundamental, tocando }: OsciloscopioProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !tocando || faixas.length === 0) return;

    const contexto = canvas.getContext('2d');
    if (!contexto) return;

    const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let quadro = 0;
    let visivel = true;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        visivel = entrada.isIntersecting;
      },
      { threshold: 0 },
    );
    observador.observe(canvas);

    const corMarca = lerCor(canvas, '--brand') || '#e11d62';
    const corLinha = lerCor(canvas, '--text-primary') || '#ffffff';
    const corApoio = lerCor(canvas, '--text-tertiary') || '#a79e9a';

    const alturaTotal =
      faixas.length * (ALTURA_FAIXA + ESPACO) + (mestre ? ALTURA_SOMA + ESPACO : 0);

    function dimensionar() {
      if (!canvas || !contexto) return { largura: 0 };
      const proporcao = Math.min(window.devicePixelRatio || 1, 2);
      const largura = canvas.clientWidth;

      canvas.height = alturaTotal * proporcao;
      canvas.width = largura * proporcao;
      canvas.style.height = `${alturaTotal}px`;
      contexto.setTransform(proporcao, 0, 0, proporcao, 0, 0);

      return { largura };
    }

    let { largura } = dimensionar();
    const aoRedimensionar = () => {
      largura = dimensionar().largura;
    };
    window.addEventListener('resize', aoRedimensionar);

    const janela = new Float32Array(faixas[0].analisador.fftSize);
    const taxa = faixas[0].analisador.context.sampleRate;
    const porCiclo = amostrasPorCiclo(fundamental, taxa);
    const amostrasVisiveis = porCiclo
      ? Math.min(Math.round(porCiclo * CICLOS_VISIVEIS), janela.length - 1)
      : janela.length;

    function desenharOnda(
      analisador: AnalyserNode,
      topo: number,
      altura: number,
      cor: string,
      espessura: number,
      ganho: number,
      modo: ModoDeReducao,
      normalizar: boolean,
    ) {
      if (!contexto) return;

      analisador.getFloatTimeDomainData(janela);

      // Alinha no cruzamento do zero: sem isso a onda escorrega para o lado.
      const folga = Math.max(janela.length - amostrasVisiveis, 1);
      const gatilho = acharGatilho(janela, folga);
      const util = janela.subarray(gatilho, gatilho + amostrasVisiveis);
      const brutos = reduzirOnda(util, Math.max(Math.floor(largura), 1), modo);
      const pontos = normalizar ? normalizarOnda(brutos) : brutos;

      const meio = topo + altura / 2;
      const escala = altura / 2 - 2;

      contexto.beginPath();
      contexto.lineWidth = espessura;
      contexto.strokeStyle = cor;
      contexto.lineJoin = 'round';
      contexto.lineCap = 'round';

      pontos.forEach((valor, coluna) => {
        const y = meio - Math.max(-1, Math.min(1, valor * ganho)) * escala;
        if (coluna === 0) contexto.moveTo(0, y);
        else contexto.lineTo(coluna, y);
      });

      contexto.stroke();
    }

    function desenharCiclo(topo: number, altura: number) {
      if (!contexto || !mestre || !porCiclo) return;

      // Uma marca por ciclo da fundamental: é onde a forma inteira se repete.
      const colunasPorCiclo = largura / CICLOS_VISIVEIS;
      if (colunasPorCiclo < 8) return;

      contexto.save();
      contexto.strokeStyle = corApoio;
      contexto.globalAlpha = 0.28;
      contexto.lineWidth = 1;
      contexto.setLineDash([2, 4]);

      for (let x = colunasPorCiclo; x < largura; x += colunasPorCiclo) {
        contexto.beginPath();
        contexto.moveTo(x, topo);
        contexto.lineTo(x, topo + altura);
        contexto.stroke();
      }

      contexto.restore();
    }

    function pintar() {
      if (!contexto) return;
      contexto.clearRect(0, 0, largura, alturaTotal);

      let topo = 0;
      for (const faixa of faixas) {
        contexto.save();
        contexto.globalAlpha = 0.7;
        // A faixa de cada voz mostra forma, não nível: normaliza.
        desenharOnda(faixa.analisador, topo, ALTURA_FAIXA, corLinha, 1.5, 1, 'extremo', true);
        contexto.restore();
        topo += ALTURA_FAIXA + ESPACO;
      }

      if (mestre) {
        desenharCiclo(topo, ALTURA_SOMA);
        // A soma mantém o nível real: três vozes soam mais alto que uma.
        desenharOnda(mestre, topo, ALTURA_SOMA, corMarca, 2.25, 2.6, 'media', false);
      }
    }

    function laco() {
      if (visivel) pintar();
      quadro = requestAnimationFrame(laco);
    }

    if (movimentoReduzido) {
      // Um quadro só: a informação continua, o movimento não.
      window.setTimeout(pintar, 120);
    } else {
      quadro = requestAnimationFrame(laco);
    }

    return () => {
      cancelAnimationFrame(quadro);
      observador.disconnect();
      window.removeEventListener('resize', aoRedimensionar);
    };
  }, [faixas, mestre, fundamental, tocando]);

  if (!tocando || faixas.length === 0) return null;

  return (
    <figure className={styles.osciloscopio}>
      <canvas ref={canvasRef} className={styles.onda} />
      <figcaption className={styles.legendaOnda}>
        <span className={styles.legendaVozes}>
          {faixas.map((faixa) => (
            <span key={faixa.id}>
              {faixa.nome} <b>{faixa.nota}</b>
            </span>
          ))}
        </span>
        <span className={styles.legendaSoma}>
          o que o ouvido escuta
          {faixas.length > 1 ? ', e o ciclo que as vozes fecham juntas' : ''}
        </span>
      </figcaption>
    </figure>
  );
}
