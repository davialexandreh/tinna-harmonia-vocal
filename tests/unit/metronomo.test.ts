import { describe, expect, it } from 'vitest';
import {
  BPM_MAXIMO,
  BPM_MINIMO,
  batidasNaJanela,
  limitarBpm,
  segundosPorBatida,
} from '@/lib/audio/metronomo';

describe('segundosPorBatida', () => {
  it('converte bpm em segundos', () => {
    expect(segundosPorBatida(60)).toBe(1);
    expect(segundosPorBatida(120)).toBe(0.5);
  });
});

describe('limitarBpm', () => {
  it('mantém o valor dentro da faixa usável', () => {
    expect(limitarBpm(10)).toBe(BPM_MINIMO);
    expect(limitarBpm(999)).toBe(BPM_MAXIMO);
    expect(limitarBpm(92.4)).toBe(92);
  });

  it('não devolve NaN quando o campo vem vazio', () => {
    expect(limitarBpm(Number.NaN)).toBe(BPM_MINIMO);
  });
});

describe('batidasNaJanela', () => {
  it('agenda só o que cabe na janela de lookahead', () => {
    const { batidas } = batidasNaJanela(0, 0, 0.1, 120, 4);
    expect(batidas).toHaveLength(1);
    expect(batidas[0].tempo).toBe(0);
  });

  it('acentua a primeira batida do compasso', () => {
    const { batidas } = batidasNaJanela(0, 0, 2.1, 120, 4);
    expect(batidas.map((b) => b.acentuada)).toEqual([
      true,
      false,
      false,
      false,
      true,
    ]);
  });

  it('não acentua nada quando o compasso é 1', () => {
    const { batidas } = batidasNaJanela(0, 0, 1.1, 120, 1);
    expect(batidas.every((b) => !b.acentuada)).toBe(true);
  });

  it('continua de onde parou, sem repetir nem pular batida', () => {
    const primeira = batidasNaJanela(0, 0, 1.1, 120, 4);
    const segunda = batidasNaJanela(
      primeira.tempoSeguinte,
      primeira.posicaoSeguinte,
      2.1,
      120,
      4,
    );

    const tempos = [...primeira.batidas, ...segunda.batidas].map((b) => b.tempo);
    expect(tempos).toEqual([0, 0.5, 1, 1.5, 2]);

    const posicoes = [...primeira.batidas, ...segunda.batidas].map((b) => b.posicao);
    expect(posicoes).toEqual([0, 1, 2, 3, 0]);
  });

  it('não acumula erro ao longo de mil batidas', () => {
    // É o ponto do lookahead scheduler: o tempo de cada batida vem de soma
    // exata sobre o relógio do áudio, não do timer do JavaScript.
    let tempo = 0;
    let posicao = 0;
    let total = 0;

    for (let janela = 0; janela < 500 && total < 1000; janela++) {
      const passo = batidasNaJanela(tempo, posicao, (janela + 1) * 1, 120, 4);
      tempo = passo.tempoSeguinte;
      posicao = passo.posicaoSeguinte;
      total += passo.batidas.length;
    }

    // 120 bpm = 0,5 s por batida: a batida de número n cai exatamente em n/2.
    expect(tempo).toBeCloseTo(total * 0.5, 9);
  });

  it('devolve lista vazia quando a próxima batida está além da janela', () => {
    const { batidas, tempoSeguinte } = batidasNaJanela(5, 2, 1, 120, 4);
    expect(batidas).toHaveLength(0);
    expect(tempoSeguinte).toBe(5);
  });
});
