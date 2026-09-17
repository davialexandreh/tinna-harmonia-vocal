import { Button } from '@/components/ui/Button';
import { whatsappUrl } from '@/lib/whatsapp';

type WhatsAppCTAProps = {
  /** Mensagem já preenchida no WhatsApp. Use site.whatsapp.mensagens. */
  mensagem: string;
  children: React.ReactNode;
  variante?: 'primary' | 'ghost' | 'inverse';
  tamanho?: 'sm' | 'md' | 'lg';
  bloco?: boolean;
  /** Identifica de qual bloco da página veio o clique (analytics, Fase 3). */
  origem: string;
};

/**
 * Único ponto de conversão do site. Se entrar formulário de e-mail depois,
 * troca-se este componente e nada mais.
 */
export function WhatsAppCTA({
  mensagem,
  children,
  variante = 'primary',
  tamanho = 'md',
  bloco = false,
  origem,
}: WhatsAppCTAProps) {
  return (
    <Button
      href={whatsappUrl(mensagem)}
      variante={variante}
      tamanho={tamanho}
      bloco={bloco}
      data-evento="whatsapp"
      data-origem={origem}
    >
      {children}
    </Button>
  );
}
