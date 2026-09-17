/**
 * Consentimento de cookies (LGPD).
 *
 * Nada de medição carrega antes do "aceito". A escolha fica no localStorage
 * do próprio navegador — não sai do aparelho e não vai para servidor nenhum.
 */

export const CHAVE_CONSENTIMENTO = 'tinna:consentimento:v1';

export type Consentimento = 'aceito' | 'recusado' | 'pendente' | 'indefinido';

const ouvintes = new Set<() => void>();

export function inscrever(ouvinte: () => void): () => void {
  ouvintes.add(ouvinte);
  return () => ouvintes.delete(ouvinte);
}

/** No servidor devolve 'indefinido': nada renderiza até o cliente responder. */
export function lerConsentimento(): Consentimento {
  if (typeof window === 'undefined') return 'indefinido';

  try {
    const salvo = window.localStorage.getItem(CHAVE_CONSENTIMENTO);
    if (salvo === 'aceito' || salvo === 'recusado') return salvo;
  } catch {
    // modo anônimo ou storage bloqueado: trata como pendente
  }

  return 'pendente';
}

export function lerConsentimentoNoServidor(): Consentimento {
  return 'indefinido';
}

export function definirConsentimento(valor: 'aceito' | 'recusado'): void {
  try {
    window.localStorage.setItem(CHAVE_CONSENTIMENTO, valor);
  } catch {
    // sem storage, a escolha vale só para esta visita
  }
  for (const ouvinte of ouvintes) ouvinte();
}
