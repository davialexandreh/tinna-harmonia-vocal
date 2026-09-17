import { Card, CardIcone } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Grid } from '@/components/ui/Grid';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import styles from './home.module.css';

export function Ferramentas() {
  return (
    <Secao alt>
      <Container>
        <SecHead
          centro
          titulo={
            <>
              Ferramentas para <em>treinar hoje</em>
            </>
          }
          descricao="Grátis e sem cadastro. Funcionam direto no navegador do celular, sem instalar nada."
        />
        <Grid colunas={2}>
          <Card>
            <CardIcone nome="naipes" />
            <h3>Tocador de naipes</h3>
            <p>
              Ouça soprano, contralto e tenor separados ou juntos. Isole a sua voz e treine
              sustentar contra o grupo.
            </p>
          </Card>
          <Card>
            <CardIcone nome="diapasao" />
            <h3>Nota-guia e metrônomo</h3>
            <p>
              Uma nota sustentada para apoiar o estudo e um metrônomo estável para o ensaio
              não acelerar.
            </p>
          </Card>
        </Grid>
        <div className={styles.acaoCentral}>
          <Button href="/ferramentas/">Ver todas as ferramentas</Button>
        </div>
      </Container>
    </Secao>
  );
}
