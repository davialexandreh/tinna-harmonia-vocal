import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { bio } from '@/content/sobre';
import styles from './home.module.css';

export function SobreResumo() {
  return (
    <Secao>
      <Container className={styles.blocoComMidia}>
        {/* eslint-disable-next-line @next/next/no-img-element -- export estático: sem otimizador, o srcset é montado à mão */}
        <img
          className={styles.retrato}
          src="/midia/tinna-800.jpg"
          srcSet="/midia/tinna-480.webp 480w, /midia/tinna-800.webp 800w, /midia/tinna-1200.webp 1200w"
          sizes="(max-width: 900px) 78vw, 400px"
          width={800}
          height={1067}
          alt="Tinna Silva sorrindo, segurando um microfone"
          loading="lazy"
          decoding="async"
        />
        <div>
          <SecHead
            eyebrow="Quem ensina"
            titulo={
              <>
                Tinna Silva, <em>harmonia vocal</em>
              </>
            }
          />
          <p className={[styles.lead, styles.textoSecundario].join(' ')}>{bio[0]}</p>
          <p className={[styles.textoSecundario, styles.espacoAntesBotao].join(' ')}>
            {bio[1]}
          </p>
          <Button href="/sobre/" variante="ghost">
            Conhecer a história completa
          </Button>
        </div>
      </Container>
    </Secao>
  );
}
