/**
 * Só existe consentimento a pedir se houver algo para medir.
 *
 * Sem IDs no build, o site não carrega nenhum script de terceiro e não grava
 * cookie nenhum, logo o banner não tem motivo para existir e não deve roubar
 * a tela do visitante.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const MEDICAO_CONFIGURADA = Boolean(GA_ID || PIXEL_ID);
