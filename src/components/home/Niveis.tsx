import { Container } from '@/components/ui/Container';
import { CardNumero } from '@/components/ui/Card';
import { Grid } from '@/components/ui/Grid';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { niveis } from '@/content/home';
import styles from './home.module.css';

export function Niveis() {
  return (
    <Secao id="conteudo">
      <Container>
        <SecHead
          centro
          titulo={
            <>
              Do primeiro naipe ao <em>arranjo completo</em>
            </>
          }
          descricao="Um caminho só, do absoluto zero até o ministério conduzir o próprio ensaio."
        />
        <Grid>
          {niveis.map((nivel) => (
            <div key={nivel.titulo} className={styles.nivel}>
              <CardNumero>{nivel.nivel}</CardNumero>
              <h3>{nivel.titulo}</h3>
              <ul>
                {nivel.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Grid>
      </Container>
    </Secao>
  );
}
