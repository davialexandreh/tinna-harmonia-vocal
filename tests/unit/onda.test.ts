import { describe, expect, it } from 'vitest';
import {
  acharGatilho,
  amostrasPorCiclo,
  normalizarOnda,
  reduzirOnda,
} from '@/lib/audio/onda';

/** Uma senoide de `ciclos` voltas completas em `tamanho` amostras. */
function senoide(tamanho: number, ciclos: number, amplitude = 1): Float32Array {
  return Float32Array.from({ length: tamanho }, (_, i) =>
    Math.sin((2 * Math.PI * ciclos * i) / tamanho) * amplitude,
  );
}

describe('reduzirOnda', () => {
  it('devolve uma coluna por posição pedida', () => {
    expect(reduzirOnda(senoide(1024, 4), 128)).toHaveLength(128);
  });

  it('preserva o pico no modo extremo', () => {
    const pontos = reduzirOnda(senoide(1024, 4), 64, 'extremo');
    const pico = Math.max(...pontos.map(Math.abs));
    expect(pico).toBeGreaterThan(0.98);
  });

  it('suaviza no modo média, sem inventar amplitude', () => {
    const pontos = reduzirOnda(senoide(1024, 40), 64, 'media');
    const pico = Math.max(...pontos.map(Math.abs));
    // Com muitos ciclos por coluna, a média de cada fatia tende a zero.
    expect(pico).toBeLessThan(0.5);
  });

  it('não devolve nada quando não há amostras ou colunas', () => {
    expect(reduzirOnda(new Float32Array(0), 32)).toEqual([]);
    expect(reduzirOnda(senoide(256, 2), 0)).toEqual([]);
  });

  it('não devolve NaN quando há mais colunas do que amostras', () => {
    const pontos = reduzirOnda(senoide(16, 1), 64);
    expect(pontos.every(Number.isFinite)).toBe(true);
  });
});

describe('acharGatilho', () => {
  it('acha o cruzamento do zero subindo', () => {
    // A senoide sobe do zero em 0 e volta a subir na metade do ciclo.
    const indice = acharGatilho(senoide(1000, 1), 999);
    expect(indice).toBeGreaterThan(0);
    expect(indice).toBeLessThan(1000);
  });

  it('devolve zero quando não há cruzamento na janela de busca', () => {
    const constante = Float32Array.from({ length: 100 }, () => 0.5);
    expect(acharGatilho(constante, 99)).toBe(0);
  });
});

describe('amostrasPorCiclo', () => {
  it('converte frequência em amostras', () => {
    expect(amostrasPorCiclo(100, 48000)).toBe(480);
  });

  it('protege contra frequência inválida', () => {
    expect(amostrasPorCiclo(0, 48000)).toBe(0);
    expect(amostrasPorCiclo(-40, 48000)).toBe(0);
  });
});

describe('normalizarOnda', () => {
  it('leva o pico até a ocupação pedida', () => {
    const pontos = normalizarOnda([0.1, -0.2, 0.05], 0.85);
    expect(Math.max(...pontos.map(Math.abs))).toBeCloseTo(0.85, 6);
  });

  it('mantém a forma, só muda a escala', () => {
    const pontos = normalizarOnda([0.1, 0.2, -0.1]);
    expect(pontos[1] / pontos[0]).toBeCloseTo(2, 6);
    expect(Math.sign(pontos[2])).toBe(-1);
  });

  it('trata silêncio como linha reta, e não amplifica ruído', () => {
    expect(normalizarOnda([0.0001, -0.0002, 0])).toEqual([0, 0, 0]);
  });
});
