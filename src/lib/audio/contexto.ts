/**
 * AudioContext compartilhado por todas as ferramentas.
 *
 * Pegadinhas cobertas aqui:
 * - iOS e Chrome só saem de `suspended` dentro de um gesto do usuário, então
 *   `obterContexto` precisa ser chamado a partir de um clique.
 * - Ao voltar do background, o contexto pode ficar suspenso de novo.
 */

let contexto: AudioContext | null = null;

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

/** Só existe áudio se o navegador tiver Web Audio. */
export function temSuporteAudio(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    'AudioContext' in window ||
    'webkitAudioContext' in (window as unknown as Record<string, unknown>)
  );
}
