import type { Terca } from '@/lib/audio/notas';

/**
 * Acordes usados no tocador de naipes e no treino de ouvido.
 * `fundamental` em MIDI; a terça define se o acorde é maior ou menor.
 */
export const acordes: { nome: string; fundamental: number; terca: Terca }[] = [
  { nome: 'Dó maior', fundamental: 48, terca: 'maior' },
  { nome: 'Ré menor', fundamental: 50, terca: 'menor' },
  { nome: 'Fá maior', fundamental: 53, terca: 'maior' },
  { nome: 'Sol maior', fundamental: 55, terca: 'maior' },
  { nome: 'Lá menor', fundamental: 57, terca: 'menor' },
  { nome: 'Si♭ maior', fundamental: 46, terca: 'maior' },
];

export const naipes = [
  {
    id: 'soprano',
    nome: 'Soprano',
    descricao: 'voz mais aguda · por cima do acorde',
  },
  {
    id: 'contralto',
    nome: 'Contralto',
    descricao: 'voz do meio · a que mais escorrega',
  },
  {
    id: 'tenor',
    nome: 'Tenor',
    descricao: 'voz mais grave · a base do acorde',
  },
] as const;

export type NaipeId = (typeof naipes)[number]['id'];
