import { describe, expect, it } from 'vitest';
import {
  desvioEmCents,
  frequenciaParaMidi,
  midiParaFrequencia,
  nomeDaNota,
  vozesDoAcorde,
} from '@/lib/audio/notas';

describe('midiParaFrequencia', () => {
  it('coloca o Lá 4 em 440 Hz', () => {
    expect(midiParaFrequencia(69)).toBeCloseTo(440, 6);
  });

  it('dobra a frequência a cada oitava', () => {
    expect(midiParaFrequencia(81)).toBeCloseTo(880, 6);
    expect(midiParaFrequencia(57)).toBeCloseTo(220, 6);
  });

  it('respeita outra afinação de referência', () => {
    expect(midiParaFrequencia(69, 442)).toBeCloseTo(442, 6);
  });
});

describe('frequenciaParaMidi', () => {
  it('é o inverso de midiParaFrequencia', () => {
    for (const midi of [40, 48, 60, 69, 72, 84]) {
      expect(frequenciaParaMidi(midiParaFrequencia(midi))).toBeCloseTo(midi, 6);
    }
  });
});

describe('nomeDaNota', () => {
  it('usa nomes em português com oitava científica', () => {
    expect(nomeDaNota(60)).toBe('Dó4');
    expect(nomeDaNota(69)).toBe('Lá4');
    expect(nomeDaNota(48)).toBe('Dó3');
    expect(nomeDaNota(61)).toBe('Dó#4');
  });

  it('arredonda valores fracionários para a nota mais próxima', () => {
    expect(nomeDaNota(60.4)).toBe('Dó4');
    expect(nomeDaNota(60.6)).toBe('Dó#4');
  });
});

describe('desvioEmCents', () => {
  it('dá zero quando a frequência está exata', () => {
    expect(desvioEmCents(440)).toBe(0);
  });

  it('é negativo abaixo da nota e positivo acima', () => {
    expect(desvioEmCents(437)).toBeLessThan(0);
    expect(desvioEmCents(443)).toBeGreaterThan(0);
  });

  it('mede meio semitom como cinquenta cents', () => {
    const meioSemitomAcima = 440 * Math.pow(2, 0.5 / 12);
    expect(Math.abs(desvioEmCents(meioSemitomAcima))).toBe(50);
  });
});

describe('vozesDoAcorde', () => {
  it('monta a tríade maior com terça maior na soprano', () => {
    // Dó3 = 48 → tenor Dó3, contralto Sol3, soprano Mi4
    expect(vozesDoAcorde(48, 'maior')).toEqual({
      tenor: 48,
      contralto: 55,
      soprano: 64,
    });
  });

  it('abaixa a terça da soprano no acorde menor', () => {
    // Regressão do erro do protótipo: com offset fixo +16, Ré menor
    // soava maior (Fá# em vez de Fá).
    expect(vozesDoAcorde(50, 'menor').soprano).toBe(65);
    expect(vozesDoAcorde(50, 'maior').soprano).toBe(66);
  });

  it('mantém a quinta justa na contralto em qualquer qualidade', () => {
    expect(vozesDoAcorde(57, 'menor').contralto).toBe(64);
    expect(vozesDoAcorde(57, 'maior').contralto).toBe(64);
  });
});
