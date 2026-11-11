/**
 * Tudo o que a Tinna oferece, na ordem e com o texto do material de
 * divulgação que ela mandou (novembro de 2026). Aparece na seção de serviços
 * da Home.
 *
 * `modalidade` vazia quando o serviço não é aula (o Kit Voz é material).
 */
import type { NomeDeIcone } from '@/components/ui/Icone';

export const servicos: {
  icone: NomeDeIcone;
  titulo: string;
  modalidade?: string;
  descricao: string;
}[] = [
  {
    icone: 'fone',
    titulo: 'Treinamento individual de harmonia vocal',
    modalidade: 'Online',
    descricao:
      'Trabalhe sua voz, aprimore sua afinação e desenvolva harmonia vocal, no seu ritmo, de onde estiver.',
  },
  {
    icone: 'grupo',
    titulo: 'Treinamento em grupo',
    modalidade: 'Presencial',
    descricao:
      'Aprenda, evolua e faça parte de um grupo que caminha junto. Técnica, uníssono, harmonia e muito mais, com acompanhamento de perto.',
  },
  {
    icone: 'pessoa',
    titulo: 'Aula individual avulsa',
    modalidade: 'Online e presencial',
    descricao:
      'Aulas focadas nas suas necessidades, com atenção total ao seu desenvolvimento.',
  },
  {
    icone: 'nota',
    titulo: 'Acompanhamento em ensaio',
    modalidade: 'Presencial',
    descricao:
      'Orientação prática no seu grupo ou ministério, ajudando a aplicar o que foi aprendido na sua realidade.',
  },
  {
    icone: 'presente',
    titulo: 'Kit Voz personalizado',
    descricao:
      'Um kit completo, feito especialmente para você, com os materiais que vão te auxiliar no seu treino e no seu dia a dia.',
  },
];
