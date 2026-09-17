/**
 * Preparo dos dados para desenhar a onda.
 *
 * Funções puras de propósito: a parte que decide o que aparece na tela é
 * testável sem navegador, e o componente só cuida de pintar.
 */

/**
 * Como cada fatia de amostras vira um ponto na tela.
 *
 * `extremo` mantém o pico e serve para uma voz sozinha, onde o desenho deve ser
 * fiel ao timbre. `media` suaviza e serve para a soma das vozes: ali o que
 * interessa é a forma que se repete, e o dente-de-serra de cada oscilador
 * esconde essa forma atrás do próprio ruído.
 */
export type ModoDeReducao = 'extremo' | 'media';

/**
 * Reduz a janela do analisador ao número de colunas do canvas.
 *
 * Pegar uma amostra a cada N faria a onda tremer de quadro em quadro; por isso
 * cada coluna resume a fatia inteira.
 */
export function reduzirOnda(
  amostras: Float32Array,
  colunas: number,
  modo: ModoDeReducao = 'extremo',
): number[] {
  if (colunas <= 0 || amostras.length === 0) return [];

  const porColuna = amostras.length / colunas;
  const pontos: number[] = new Array(colunas);

  for (let coluna = 0; coluna < colunas; coluna++) {
    const inicio = Math.floor(coluna * porColuna);
    const fim = Math.max(Math.min(Math.floor((coluna + 1) * porColuna), amostras.length), inicio + 1);

    if (modo === 'media') {
      let soma = 0;
      for (let i = inicio; i < fim; i++) soma += amostras[i];
      pontos[coluna] = soma / (fim - inicio);
      continue;
    }

    let extremo = 0;
    for (let i = inicio; i < fim; i++) {
      if (Math.abs(amostras[i]) > Math.abs(extremo)) extremo = amostras[i];
    }
    pontos[coluna] = extremo;
  }

  return pontos;
}

/**
 * Alinha a janela no cruzamento do zero subindo, para a onda parar de correr
 * para o lado a cada quadro. É o mesmo truque do gatilho do osciloscópio.
 */
export function acharGatilho(amostras: Float32Array, limiteDeBusca: number): number {
  const limite = Math.min(limiteDeBusca, amostras.length - 1);

  for (let i = 1; i < limite; i++) {
    if (amostras[i - 1] <= 0 && amostras[i] > 0) return i;
  }

  return 0;
}

/**
 * Quantas amostras cabem em um ciclo da fundamental.
 * É o que permite marcar onde a forma se repete: três vozes em harmonia
 * combinam num ciclo só, e ver esse ciclo é o ponto do exercício.
 */
export function amostrasPorCiclo(frequencia: number, taxaDeAmostragem: number): number {
  if (frequencia <= 0) return 0;
  return taxaDeAmostragem / frequencia;
}

/**
 * Escala os pontos para o pico ocupar quase toda a faixa.
 *
 * Cada voz é feita de três osciladores levemente desafinados, e eles batem
 * entre si: a amplitude some e volta sozinha, algumas vezes por segundo. Sem
 * normalizar, a faixa de uma voz perfeitamente audível pisca como se estivesse
 * muda. O nível absoluto continua honesto na soma, que é onde ele significa
 * alguma coisa.
 */
export function normalizarOnda(pontos: number[], ocupacao = 0.85): number[] {
  let pico = 0;
  for (const ponto of pontos) {
    const modulo = Math.abs(ponto);
    if (modulo > pico) pico = modulo;
  }

  // Silêncio de verdade continua sendo uma linha reta, não ruído ampliado.
  if (pico < 0.004) return pontos.map(() => 0);

  const fator = ocupacao / pico;
  return pontos.map((ponto) => ponto * fator);
}
