/**
 * Metrônomo com lookahead scheduler.
 *
 * `setInterval` sozinho desalinha: o timer do JavaScript é impreciso e sofre
 * com o main thread ocupado. A técnica correta é um timer grosseiro que, a cada
 * disparo, agenda as próximas batidas com os tempos exatos do AudioContext.
 * Referência: "A Tale of Two Clocks" (Chris Wilson).
 */

/** Intervalo do timer grosseiro, em ms. */
const INTERVALO_TIMER_MS = 25;
/** Janela de agendamento antecipado, em segundos. */
const JANELA_LOOKAHEAD_S = 0.1;

export const BPM_MINIMO = 40;
export const BPM_MAXIMO = 240;

type Batida = {
  /** Instante no relógio do AudioContext, em segundos. */
  tempo: number;
  /** Posição dentro do compasso, começando em 0. */
  posicao: number;
  /** Primeira batida do compasso: som mais agudo. */
  acentuada: boolean;
};

export function segundosPorBatida(bpm: number): number {
  return 60 / bpm;
}

export function limitarBpm(bpm: number): number {
  if (Number.isNaN(bpm)) return BPM_MINIMO;
  return Math.min(BPM_MAXIMO, Math.max(BPM_MINIMO, Math.round(bpm)));
}

/**
 * Calcula quais batidas cabem na janela de lookahead.
 * Pura de propósito: é o coração do metrônomo e o que os testes cobrem.
 */
export function batidasNaJanela(
  proximoTempo: number,
  proximaPosicao: number,
  ate: number,
  bpm: number,
  compasso: number,
): { batidas: Batida[]; tempoSeguinte: number; posicaoSeguinte: number } {
  const passo = segundosPorBatida(bpm);
  const batidas: Batida[] = [];

  let tempo = proximoTempo;
  let posicao = proximaPosicao;

  while (tempo < ate) {
    batidas.push({ tempo, posicao, acentuada: compasso > 1 && posicao === 0 });
    tempo += passo;
    posicao = (posicao + 1) % compasso;
  }

  return { batidas, tempoSeguinte: tempo, posicaoSeguinte: posicao };
}

type ContextoMinimo = Pick<
  AudioContext,
  'currentTime' | 'createOscillator' | 'createGain' | 'destination'
>;

type OpcoesMetronomo = {
  bpm?: number;
  compasso?: number;
  /** Chamado a cada batida agendada, para acender o indicador visual. */
  aoAgendar?: (batida: Batida) => void;
};

export class Metronomo {
  private bpm: number;
  private compasso: number;
  private proximoTempo = 0;
  private proximaPosicao = 0;
  private timer: ReturnType<typeof setInterval> | null = null;
  private readonly aoAgendar?: (batida: Batida) => void;

  constructor(
    private readonly ctx: ContextoMinimo,
    opcoes: OpcoesMetronomo = {},
  ) {
    this.bpm = limitarBpm(opcoes.bpm ?? 80);
    this.compasso = opcoes.compasso ?? 4;
    this.aoAgendar = opcoes.aoAgendar;
  }

  get tocando(): boolean {
    return this.timer !== null;
  }

  iniciar(): void {
    if (this.timer) return;

    this.proximoTempo = this.ctx.currentTime + 0.05;
    this.proximaPosicao = 0;
    this.agendar();
    this.timer = setInterval(() => this.agendar(), INTERVALO_TIMER_MS);
  }

  parar(): void {
    if (!this.timer) return;
    clearInterval(this.timer);
    this.timer = null;
  }

  definirBpm(bpm: number): void {
    this.bpm = limitarBpm(bpm);
  }

  definirCompasso(compasso: number): void {
    this.compasso = Math.max(1, Math.round(compasso));
    this.proximaPosicao = 0;
  }

  private agendar(): void {
    const { batidas, tempoSeguinte, posicaoSeguinte } = batidasNaJanela(
      this.proximoTempo,
      this.proximaPosicao,
      this.ctx.currentTime + JANELA_LOOKAHEAD_S,
      this.bpm,
      this.compasso,
    );

    for (const batida of batidas) {
      this.emitirClique(batida);
      this.aoAgendar?.(batida);
    }

    this.proximoTempo = tempoSeguinte;
    this.proximaPosicao = posicaoSeguinte;
  }

  private emitirClique({ tempo, acentuada }: Batida): void {
    const osc = this.ctx.createOscillator();
    const ganho = this.ctx.createGain();

    osc.frequency.value = acentuada ? 1600 : 1000;
    ganho.gain.setValueAtTime(0.0001, tempo);
    ganho.gain.exponentialRampToValueAtTime(acentuada ? 0.5 : 0.32, tempo + 0.002);
    ganho.gain.exponentialRampToValueAtTime(0.0001, tempo + 0.05);

    osc.connect(ganho);
    ganho.connect(this.ctx.destination);
    osc.start(tempo);
    osc.stop(tempo + 0.06);
  }
}
