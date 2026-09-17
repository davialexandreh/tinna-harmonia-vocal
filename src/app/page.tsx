import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/content/site';
import styles from './page.module.css';

/*
 * Fase 0: só o hero, para validar tokens, tipografia e o fluxo de CTA.
 * Os demais blocos da Home entram na Fase 1.
 *
 * TODO(cliente): a faixa de números (anos, ministérios, avaliação) só entra
 * com dados reais — perguntas 3 e 4.
 */
export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <svg
          className={styles.wavefield}
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g fill="none" stroke="#E11D62" strokeWidth="1.2">
            <path d="M0 460 Q 100 380 200 460 T 400 460 T 600 460 T 800 460 T 1000 460 T 1200 460" />
            <path
              d="M0 500 Q 100 420 200 500 T 400 500 T 600 500 T 800 500 T 1000 500 T 1200 500"
              opacity=".7"
            />
            <path
              d="M0 540 Q 100 460 200 540 T 400 540 T 600 540 T 800 540 T 1000 540 T 1200 540"
              opacity=".45"
            />
            <path
              d="M0 420 Q 100 340 200 420 T 400 420 T 600 420 T 800 420 T 1000 420 T 1200 420"
              opacity=".3"
            />
          </g>
        </svg>

        <Container className={styles.heroGrid}>
          <div>
            <span className={styles.eyebrow}>{site.tagline}</span>
            <h1 className={styles.titulo}>
              Cantar em harmonia <em>não é dom.</em> É método — e o seu grupo pode
              aprender.
            </h1>
            <p className={styles.lead}>
              Se o seu ministério canta junto mas a segunda voz sempre escorrega de volta
              para a melodia, o problema nunca foi talento. Foi caminho. E caminho se
              ensina.
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

          <div className={styles.retrato}>
            <div>
              <strong aria-hidden="true">🎤</strong>
              <span>
                Placeholder
                <br />
                foto da Tinna
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.proximo}>
        <Container narrow>
          <h2>Fase 0 concluída</h2>
          <p>
            Fundação no ar: tokens do protótipo, tipografia, header com menu mobile,
            rodapé, rotas e build estático. Os blocos de conteúdo da Home entram na Fase 1.
          </p>
        </Container>
      </section>
    </>
  );
}
