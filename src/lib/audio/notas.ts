/**
 * Conversões de nota, frequência e afinação.
 * Tudo aqui é função pura: é o que os testes da Fase 4 cobrem.
 */

const NOTAS_PT = [
  'Dó',
  'Dó#',
  'Ré',
  'Ré#',
  'Mi',
  'Fá',
  'Fá#',
  'Sol',
  'Sol#',
  'Lá',
  'Lá#',
  'Si',
] as const;

/** Lá 4 = MIDI 69 = 440 Hz. */
const LA4_MIDI = 69;
const AFINACAO_PADRAO = 440;

export function midiParaFrequencia(midi: number, afinacao = AFINACAO_PADRAO): number {
  return afinacao * Math.pow(2, (midi - LA4_MIDI) / 12);
}

export function frequenciaParaMidi(frequencia: number, afinacao = AFINACAO_PADRAO): number {
  return LA4_MIDI + 12 * Math.log2(frequencia / afinacao);
}

/** Nome em português com oitava científica: MIDI 60 → "Dó4". */
export function nomeDaNota(midi: number): string {
  const indice = ((Math.round(midi) % 12) + 12) % 12;
  const oitava = Math.floor(Math.round(midi) / 12) - 1;
  return `${NOTAS_PT[indice]}${oitava}`;
}

/**
 * Desvio em cents entre a frequência ouvida e a nota mais próxima.
 * Negativo = abaixo (bemol), positivo = acima (sustenido).
 */
export function desvioEmCents(frequencia: number, afinacao = AFINACAO_PADRAO): number {
  const midi = frequenciaParaMidi(frequencia, afinacao);
  return Math.round((midi - Math.round(midi)) * 100);
}

export type Terca = 'maior' | 'menor';

/**
 * Distribuição das três vozes a partir da fundamental.
 *
 * Correção em relação ao protótipo: lá a soprano usava sempre +16 semitons
 * (terça maior uma oitava acima), o que fazia "Ré menor" e "Lá menor" soarem
 * maiores. A terça agora acompanha a qualidade do acorde.
 */
export function vozesDoAcorde(
  fundamental: number,
  terca: Terca,
): { tenor: number; contralto: number; soprano: number } {
  return {
    tenor: fundamental,
    contralto: fundamental + 7,
    soprano: fundamental + 12 + (terca === 'maior' ? 4 : 3),
  };
}
