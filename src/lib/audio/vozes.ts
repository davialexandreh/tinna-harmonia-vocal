import { obterContexto } from './contexto';

export type VozTocando = {
  parar: (segundos?: number) => void;
  definirVolume: (volume: number) => void;
};

type OpcoesVoz = {
  /** 0 a 1. */
  volume?: number;
  /** Velocidade do vibrato, em Hz. Dá vida ao timbre sintético. */
  vibrato?: number;
  ataque?: number;
};

/**
 * Uma voz sustentada: três osciladores levemente desafinados entre si,
 * vibrato suave e filtro passa-baixa para tirar a aspereza do sawtooth.
 * É o mesmo desenho do protótipo, reorganizado para poder tocar sozinho.
 */
export function tocarVoz(frequencia: number, opcoes: OpcoesVoz = {}): VozTocando {
  const { volume = 0.5, vibrato = 4.8, ataque = 0.12 } = opcoes;
  const ctx = obterContexto();
  const agora = ctx.currentTime;

  const saida = ctx.createGain();
  saida.gain.value = 0;

  const filtro = ctx.createBiquadFilter();
  filtro.type = 'lowpass';
  filtro.frequency.value = 2400;
  filtro.Q.value = 0.6;

  saida.connect(filtro);
  filtro.connect(ctx.destination);
  saida.gain.linearRampToValueAtTime(volume, agora + ataque);

  const fontes: OscillatorNode[] = [];
  const camadas: [number, OscillatorType, number][] = [
    [0, 'sawtooth', 0.45],
    [-5, 'triangle', 0.28],
    [5, 'triangle', 0.28],
  ];

  for (const [cents, tipo, amplitude] of camadas) {
    const osc = ctx.createOscillator();
    osc.type = tipo;
    osc.frequency.value = frequencia * Math.pow(2, cents / 1200);

    const ganho = ctx.createGain();
    ganho.gain.value = amplitude;

    osc.connect(ganho);
    ganho.connect(saida);
    osc.start(agora);
    fontes.push(osc);
  }

  const lfo = ctx.createOscillator();
  const ganhoLfo = ctx.createGain();
  lfo.frequency.value = vibrato;
  ganhoLfo.gain.value = 0.035;
  lfo.connect(ganhoLfo);
  ganhoLfo.connect(saida.gain);
  lfo.start(agora);
  fontes.push(lfo);

  let parado = false;

  return {
    parar(segundos = 0.15) {
      if (parado) return;
      parado = true;

      const t = ctx.currentTime;
      saida.gain.cancelScheduledValues(t);
      saida.gain.setValueAtTime(saida.gain.value, t);
      saida.gain.linearRampToValueAtTime(0, t + segundos);

      // Só desliga os osciladores depois do fade, senão estala.
      window.setTimeout(
        () => {
          for (const fonte of fontes) {
            try {
              fonte.stop();
            } catch {
              // já parado
            }
          }
        },
        (segundos + 0.07) * 1000,
      );
    },
    definirVolume(novo: number) {
      if (parado) return;
      saida.gain.setTargetAtTime(novo, ctx.currentTime, 0.05);
    },
  };
}
