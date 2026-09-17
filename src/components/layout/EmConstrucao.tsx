import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Container } from '@/components/ui/Container';
import { site } from '@/content/site';
import styles from './EmConstrucao.module.css';

/** Stub de rota: existe para a navegação não quebrar até a Fase 1. */
export function EmConstrucao({
  titulo,
  descricao,
  origem,
}: {
  titulo: string;
  descricao: string;
  origem: string;
}) {
  return (
    <section className={styles.bloco}>
      <Container narrow>
        <span className={styles.selo}>Em breve</span>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
        <WhatsAppCTA mensagem={site.whatsapp.mensagens.geral} origem={origem}>
          Falar no WhatsApp
        </WhatsAppCTA>
      </Container>
    </section>
  );
}
