import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Container } from '@/components/ui/Container';
import { Secao } from '@/components/ui/Secao';
import { site } from '@/content/site';
import styles from './home.module.css';

export function CtaFinal() {
  return (
    <Secao>
      <Container>
        <div className={styles.ctaBand}>
          <h2>
            Pronto para o seu ministério <em>finalmente cantar em harmonia?</em>
          </h2>
          <p>
            Me conte em que ponto o grupo está hoje. Eu respondo com o formato que faz
            sentido para vocês.
          </p>
          <WhatsAppCTA
            mensagem={site.whatsapp.mensagens.workshop}
            variante="inverse"
            tamanho="lg"
            origem="home-cta-final"
          >
            Falar no WhatsApp
          </WhatsAppCTA>
        </div>
      </Container>
    </Secao>
  );
}
