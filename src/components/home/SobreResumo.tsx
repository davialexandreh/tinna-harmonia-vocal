import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { bio } from '@/content/sobre';
import styles from './home.module.css';

export function SobreResumo() {
  return (
    <Secao>
      <Container className={styles.heroGrid}>
        <div className={styles.retratoPlaceholder}>
          <div>
            <strong aria-hidden="true">📖</strong>
            <span>
              Placeholder
              <br />
              vídeo de apresentação
            </span>
          </div>
        </div>
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
