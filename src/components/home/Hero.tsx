import { FundoDoHero } from "@/components/home/FundoDoHero";
import { WhatsAppCTA } from "@/components/cta/WhatsAppCTA";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import styles from "./home.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <FundoDoHero />

      <Container className={styles.heroInterno}>
        <div className={styles.heroTexto}>
          {/* Três partes, três vozes: a ordem de entrada é a sequência do método. */}
          <h1 className={styles.titulo}>
            <span>Cantar em harmonia</span> <em>não é dom.</em>{' '}
            <span>É método e o seu grupo pode aprender.</span>
          </h1>
          <p className={styles.lead}>
            Se o seu ministério canta junto mas a segunda voz sempre escorrega
            de volta para a melodia, o problema nunca foi talento. Foi caminho.
            E caminho se ensina.
          </p>
          <div className={styles.acoes}>
            <WhatsAppCTA
              mensagem={site.whatsapp.mensagens.workshop}
              tamanho="lg"
              origem="home-hero"
            >
              Levar à minha igreja
            </WhatsAppCTA>
            <Button href="/ferramentas/" variante="inverse" tamanho="lg">
              Ferramentas grátis
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
