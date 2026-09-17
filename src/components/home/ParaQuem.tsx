import { Container } from '@/components/ui/Container';
import { Grid } from '@/components/ui/Grid';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { paraQuem } from '@/content/home';
import styles from './home.module.css';

export function ParaQuem() {
  return (
    <Secao alt>
      <Container>
        <SecHead
          centro
          eyebrow="Honestidade"
          titulo={
            <>
              Isso é pra vocês? <em>Nem sempre.</em>
            </>
          }
          descricao="Prefiro dizer antes de você gastar tempo e dinheiro."
        />
        <Grid colunas={2}>
          <div className={styles.fitbox}>
            <h3>É pra vocês se…</h3>
            <ol>
              {paraQuem.sim.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          <div className={[styles.fitbox, styles.fitboxNao].join(' ')}>
            <h3>Não é pra vocês se…</h3>
            <ol>
              {paraQuem.nao.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </Grid>
      </Container>
    </Secao>
  );
}
