/**
 * AudioContext compartilhado por todas as ferramentas.
 *
 * Pegadinhas cobertas aqui:
 * - iOS e Chrome só saem de `suspended` dentro de um gesto do usuário, então
 *   `obterContexto` precisa ser chamado a partir de um clique.
 * - Ao voltar do background, o contexto pode ficar suspenso de novo.
 */

let contexto: AudioContext | null = null;
let barramento: GainNode | null = null;
let analisadorMestre: AnalyserNode | null = null;

export function obterContexto(): AudioContext {
  if (!contexto) {
    const Construtor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    contexto = new Construtor();
  }

  if (contexto.state === 'suspended') {
    void contexto.resume();
  }

  return contexto;
}

/**
 * Barramento por onde passa todo o som do site.
 *
 * Existe para que dê para medir o que está soando: cada voz entra aqui, e daqui
 * sai para o alto-falante passando por um analisador. Sem esse ponto único,
 * não há como desenhar a soma das vozes, que é o que o ouvido escuta.
 */
export function obterBarramento(): GainNode {
  const ctx = obterContexto();

  if (!barramento) {
    barramento = ctx.createGain();
    analisadorMestre = ctx.createAnalyser();
    analisadorMestre.fftSize = 4096;
    analisadorMestre.smoothingTimeConstant = 0;

    barramento.connect(analisadorMestre);
    analisadorMestre.connect(ctx.destination);
  }

  return barramento;
}

/** O analisador da soma. Só existe depois que o barramento é criado. */
export function obterAnalisadorMestre(): AnalyserNode | null {
  obterBarramento();
  return analisadorMestre;
}

/** Só existe áudio se o navegador tiver Web Audio. */
export function temSuporteAudio(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    'AudioContext' in window ||
    'webkitAudioContext' in (window as unknown as Record<string, unknown>)
  );
}
