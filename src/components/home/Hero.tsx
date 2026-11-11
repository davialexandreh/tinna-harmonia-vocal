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
            <span>Desenvolva o potencial</span> <em>vocal</em>{" "}
            <span>
              do seu grupo e construa novas possibilidades em harmonia
            </span>
          </h1>
          <p className={styles.lead}>
            Seu grupo canta junto, mas ainda encontra dificuldades para
            construir e sustentar as harmonias? Com treinamento e orientação, é
            possível desenvolver vozes mais seguras e harmonias bem construídas.
          </p>
          <div className={styles.acoes}>
            <WhatsAppCTA
              mensagem={site.whatsapp.mensagens.workshop}
              tamanho="lg"
              origem="home-hero"
            >
              Quero levar esse treinamento para meu grupo
            </WhatsAppCTA>
            <Button href="#servicos" variante="inverse" tamanho="lg">
              Descubra como posso ajudar
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
