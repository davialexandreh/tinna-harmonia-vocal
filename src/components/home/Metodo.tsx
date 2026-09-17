import { Container } from '@/components/ui/Container';
import { CardNumero } from '@/components/ui/Card';
import { Grid } from '@/components/ui/Grid';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { pilares } from '@/content/home';
import styles from './home.module.css';

/*
 * TODO(cliente): quando a Tinna validar o nome do método, ele entra no título
 * e os pilares voltam a exibir a inicial no lugar do número (pergunta 2).
 */
export function Metodo() {
  return (
    <Secao alt id="metodo">
      <Container>
        <SecHead
          centro
          eyebrow="A metodologia"
          titulo={
            <>
              O caminho, <em>na ordem exata</em>
            </>
          }
          descricao="Cinco bases, sem pular etapa. É o que separa um grupo que canta junto de um grupo que canta em harmonia."
        />
        <Grid colunas={5}>
          {pilares.map((pilar, i) => (
            <div key={pilar.titulo} className={styles.pilar}>
              <CardNumero>{String(i + 1).padStart(2, '0')}</CardNumero>
              <h3>{pilar.titulo}</h3>
              <p>{pilar.descricao}</p>
              <p className={styles.analogia}>{pilar.analogia}</p>
            </div>
          ))}
        </Grid>
      </Container>
    </Secao>
  );
}
