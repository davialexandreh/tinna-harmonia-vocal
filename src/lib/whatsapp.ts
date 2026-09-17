import { site } from '@/content/site';

/**
 * Monta o link wa.me com mensagem pré-preenchida.
 *
 * Toda captação de lead do site passa por aqui. Se um dia entrar formulário
 * + e-mail marketing, o ponto de troca é este arquivo e o WhatsAppCTA.
 */
export function whatsappUrl(mensagem: string): string {
  return `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`;
}
