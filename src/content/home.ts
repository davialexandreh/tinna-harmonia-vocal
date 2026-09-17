/**
 * Conteúdo da Home.
 *
 * Regra: nada de dado de cliente inventado. Listas marcadas PENDENTE ficam
 * vazias e o bloco correspondente simplesmente não renderiza.
 */

/** PENDENTE (perguntas 3 e 4): números e ministérios reais. */
export const provaSocial = {
  numeros: [] as { valor: string; rotulo: string }[],
  ministerios: [] as string[],
};

/** PENDENTE (pergunta 3): depoimentos reais, texto ou vídeo. */
export const depoimentos = [] as {
  nome: string;
  papel: string;
  texto: string;
  /** Caminho do vídeo vertical, quando houver. */
  video?: string;
}[];

/**
 * As cinco bases do método.
 * TODO(cliente): o protótipo sugeria o acrônimo "N.A.I.P.E". Enquanto a Tinna
 * não valida o nome, a seção é apresentada sem acrônimo (pergunta 2).
 */
export const pilares = [
  {
    titulo: 'Naipe',
    descricao:
      'Descobrir qual é a sua voz dentro do arranjo: soprano, contralto ou tenor. Tudo começa aqui.',
    analogia: 'É saber qual instrumento você toca antes de tocar.',
  },
  {
    titulo: 'Apoio',
    descricao:
      'Respiração, postura e fôlego para sustentar a nota até o fim da frase, sem tremer.',
    analogia: 'É a fundação da casa: sem ela nada se sustenta.',
  },
  {
    titulo: 'Intervalo',
    descricao:
      'Ouvido treinado para reconhecer as distâncias entre as vozes e não cair na melodia.',
    analogia: 'É aprender a enxergar no escuro.',
  },
  {
    titulo: 'Prática',
    descricao:
      'Aplicação em música real, com os arranjos que vocês já cantam no culto.',
    analogia: 'É sair do simulador e dirigir na rua.',
  },
  {
    titulo: 'Ensaio',
    descricao:
      'Conduzir o grupo: dividir vozes, corrigir sem constranger e montar o roteiro de segunda.',
    analogia: 'É quando o grupo deixa de precisar do professor.',
  },
];

export const niveis = [
  {
    nivel: 'nível 01',
    titulo: 'iniciante',
    itens: [
      'Conhecendo a própria voz',
      'Classificação de naipe',
      'Respiração e apoio',
      'Aquecimento antes do culto',
      'Afinação: primeiros passos',
      'Cantando com playback',
    ],
  },
  {
    nivel: 'nível 02',
    titulo: 'intermediário',
    itens: [
      'Segunda voz na prática',
      'Terças e sextas',
      'Sustentando contra a melodia',
      'Microfone e retorno',
      'Dinâmica no grupo',
      'Resistência vocal',
    ],
  },
  {
    nivel: 'nível 03',
    titulo: 'avançado',
    itens: [
      'Arranjo de três vozes',
      'Harmonias de passagem',
      'Conduzindo o naipe',
      'Ensaio por naipe',
      'Repertório do culto',
      'Autonomia do grupo',
    ],
  },
];

export const paraQuem = {
  sim: [
    'Seu ministério canta junto, mas tudo em uníssono, e vocês querem três vozes de verdade.',
    'A segunda voz começa certa e escorrega de volta para a melodia no meio da música.',
    'Você canta back vocal e perde o fôlego antes do fim da frase.',
    'Você lidera o louvor e precisa de um roteiro de ensaio que funcione com gente ocupada.',
    'Você acha que não tem ouvido, e nunca teve alguém para te mostrar o caminho.',
  ],
  nao: [
    'Você procura formação erudita, canto lírico ou preparação para conservatório.',
    'Você quer resultado sem ensaiar entre um encontro e outro.',
    'Você espera um curso online pronto para assistir hoje: o atendimento agora é presencial.',
    'Você quer aprender teoria musical pela teoria, não para cantar melhor no culto.',
  ],
};
