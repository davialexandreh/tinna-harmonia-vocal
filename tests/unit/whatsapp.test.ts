import { describe, expect, it } from 'vitest';
import { site } from '@/content/site';
import { whatsappUrl } from '@/lib/whatsapp';

describe('whatsappUrl', () => {
  it('aponta para o wa.me do número configurado', () => {
    expect(whatsappUrl('oi')).toBe(`https://wa.me/${site.whatsapp.numero}?text=oi`);
  });

  it('escapa acento, espaço e pontuação da mensagem', () => {
    const url = whatsappUrl('Oi, Tinna! Quero um workshop de harmonia vocal?');
    expect(url).not.toContain(' ');
    expect(url).toContain('Oi%2C%20Tinna!');
    expect(url).toContain('%3F');
  });

  it('mantém o número só com dígitos, no formato DDI+DDD', () => {
    expect(site.whatsapp.numero).toMatch(/^\d{12,13}$/);
  });
});
