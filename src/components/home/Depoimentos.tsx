import { Container } from '@/components/ui/Container';
import { Grid } from '@/components/ui/Grid';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { depoimentos } from '@/content/home';
import styles from './home.module.css';

/**
 * Preparado para vídeo vertical: quando `video` existir, troca-se o
 * placeholder por um <video> com poster. Hoje a lista está vazia — nenhum
 * depoimento real foi fornecido (PENDENTE em src/content/home.ts).
 */
export function Depoimentos() {
  if (depoimentos.length === 0) return null;

  return (
    <Secao>
      <Container>
        <SecHead
          centro
          eyebrow="Quem já passou por isso"
          titulo={
            <>
              O que muda <em>no ensaio de segunda</em>
            </>
          }
        />
        <Grid colunas={4}>
          {depoimentos.map((d) => (
            <figure key={d.nome} className={styles.depoimento}>
              <div className={styles.videoPlaceholder} aria-hidden="true">
                ▶
              </div>
              <figcaption className={styles.depoimentoCorpo}>
                <p>{d.texto}</p>
                <div className={styles.autor}>
                  <b>{d.nome}</b>
                  <span>{d.papel}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </Grid>
      </Container>
    </Secao>
  );
}
