/** Índice das ferramentas. Cada uma é uma porta de entrada de busca orgânica. */
import type { NomeDeIcone } from '@/components/ui/Icone';

export const ferramentas = [
  {
    slug: 'tocador-de-naipes',
    icone: 'naipes',
    titulo: 'Tocador de naipes',
    chamada: 'Ouça soprano, contralto e tenor separados ou juntos.',
    descricao:
      'Toque as três vozes de um acorde separadas ou juntas. Isole o seu naipe, memorize a sua nota e depois tente sustentá-la com o grupo cantando em volta.',
    comoUsar: [
      'Escolha um acorde e toque só o seu naipe. Cante junto até a nota ficar na memória.',
      'Ligue as três vozes e cante a sua de novo, agora com as outras soando em volta.',
      'Se escorregar para a melodia, volte a isolar o naipe e repita mais devagar.',
    ],
  },
  {
    slug: 'nota-guia',
    icone: 'diapasao',
    titulo: 'Nota-guia',
    chamada: 'Uma nota sustentada para apoiar o seu estudo.',
    descricao:
      'Uma nota longa e estável para você cantar por cima. Serve para treinar afinação, apoio e a segunda voz sem precisar de teclado.',
    comoUsar: [
      'Escolha a nota e deixe ela tocando.',
      'Cante a mesma nota até a sua voz encaixar sem tremer.',
      'Depois cante a terça ou a quinta acima, mantendo a nota-guia de referência.',
    ],
  },
  {
    slug: 'metronomo',
    icone: 'metronomo',
    titulo: 'Metrônomo',
    chamada: 'Andamento estável para o ensaio não acelerar.',
    descricao:
      'Metrônomo simples e preciso para o ensaio do ministério. Escolha o andamento e a fórmula de compasso, com acento na primeira batida.',
    comoUsar: [
      'Comece devagar, num andamento em que o grupo acerte tudo.',
      'Suba de cinco em cinco batidas por minuto, só depois que sair limpo.',
      'Em música de louvor, andar junto vale mais do que andar rápido.',
    ],
  },
  {
    slug: 'treino-de-ouvido',
    icone: 'ouvido',
    titulo: 'Ache a voz',
    chamada: 'Toca um acorde de três vozes e você identifica o naipe.',
    descricao:
      'O exercício que mais engaja no Instagram, agora para treinar quando quiser: o acorde toca, uma voz aparece sozinha e você descobre se era soprano, contralto ou tenor.',
    comoUsar: [
      'Ouça o acorde inteiro primeiro, para o ouvido se situar.',
      'Depois ouça a voz sozinha e responda qual naipe era.',
      'Errar faz parte: repita o mesmo acorde até reconhecer sem pensar.',
    ],
  },
] as const satisfies readonly { icone: NomeDeIcone; [chave: string]: unknown }[];

export type Ferramenta = (typeof ferramentas)[number];

export function acharFerramenta(slug: string): Ferramenta | undefined {
  return ferramentas.find((f) => f.slug === slug);
}
