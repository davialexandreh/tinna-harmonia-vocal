/**
 * Conteúdo da página de workshops presenciais: o produto que já gera caixa.
 *
 * ⚠️ VALIDAR COM A CLIENTE antes do deploy: os campos `detalhe` de cada formato
 * (duração e capacidade) vieram do protótipo e ainda não foram confirmados
 * pela Tinna (pergunta 5).
 */

export const formatos = [
  {
    icone: '🎤',
    titulo: 'Workshop de um dia',
    descricao:
      'Um encontro com o ministério inteiro: diagnóstico de vozes, fundamentos de harmonia e montagem de uma música em três vozes até o fim do dia.',
    detalhe: 'PENDENTE: duração e número de participantes',
  },
  {
    icone: '🔥',
    titulo: 'Imersão de fim de semana',
    descricao:
      'Mais tempo para aprofundar: arranjo, ensaio separado por naipe e preparação do repertório que vocês vão cantar no culto.',
    detalhe: 'PENDENTE: duração e número de participantes',
  },
  {
    icone: '🌱',
    titulo: 'Acompanhamento contínuo',
    descricao:
      'Encontros recorrentes com o mesmo grupo, para consolidar o método, evoluir o repertório e formar quem vai conduzir o ensaio depois.',
    detalhe: 'PENDENTE: frequência e formato',
  },
];

export const oQueRecebe = [
  {
    titulo: 'Diagnóstico de vozes',
    descricao:
      'Cada pessoa descobre o próprio naipe e onde a voz dela se encaixa no arranjo do grupo.',
  },
  {
    titulo: 'Uma música montada',
    descricao:
      'O grupo sai do encontro com uma música em três vozes, pronta para cantar no culto.',
  },
  {
    titulo: 'Roteiro de ensaio',
    descricao:
      'O passo a passo para o líder repetir o trabalho na segunda-feira, sem depender de mim.',
  },
  {
    titulo: 'Aquecimento próprio',
    descricao:
      'A sequência de aquecimento que o ministério passa a usar antes de cada culto.',
  },
];

export const comoFunciona = [
  'Você me chama no WhatsApp com o nome da igreja, quantas pessoas cantam e o período que vocês preferem.',
  'Eu entendo em que ponto o grupo está hoje e sugiro o formato que faz sentido.',
  'Confirmamos data, formato e valor.',
  'No dia, o encontro acontece na sua igreja, com o grupo inteiro.',
  'Vocês seguem com o roteiro de ensaio e eu fico à disposição para as dúvidas.',
];
