import { FundoDoHero } from '@/components/home/FundoDoHero';
import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/content/site';
import styles from './home.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <FundoDoHero />

      <Container className={styles.heroGrid}>
        <div>
          <span className={styles.eyebrow}>{site.tagline}</span>
          <h1 className={styles.titulo}>
            Cantar em harmonia <em>não é dom.</em> É método — e o seu grupo pode aprender.
          </h1>
          <p className={styles.lead}>
            Se o seu ministério canta junto mas a segunda voz sempre escorrega de volta
            para a melodia, o problema nunca foi talento. Foi caminho. E caminho se ensina.
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

        {/* eslint-disable-next-line @next/next/no-img-element -- export estático: sem otimizador, o srcset é montado à mão */}
        <img
          className={styles.retrato}
          src="/midia/tinna-800.jpg"
          srcSet="/midia/tinna-480.webp 480w, /midia/tinna-800.webp 800w, /midia/tinna-1200.webp 1200w"
          sizes="(max-width: 900px) 70vw, 380px"
          width={800}
          height={1067}
          alt="Tinna Silva sorrindo, segurando um microfone"
          fetchPriority="high"
          decoding="async"
        />
      </Container>
    </section>
  );
}
