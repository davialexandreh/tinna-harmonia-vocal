import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Button } from '@/components/ui/Button';
import { Card, CardIcone } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Grid } from '@/components/ui/Grid';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { site } from '@/content/site';
import { formatos } from '@/content/workshops';
import styles from './home.module.css';

/**
 * Ocupa o lugar do bloco de oferta/preço do protótipo. O produto que existe
 * hoje é o presencial; curso online entra quando for real.
 */
export function WorkshopsChamada() {
  return (
    <Secao id="workshops">
      <Container>
        <SecHead
          centro
          eyebrow="Presencial"
          titulo={
            <>
              Levo o trabalho <em>até a sua igreja</em>
            </>
          }
          descricao="Um encontro com o ministério inteiro, no lugar onde vocês já cantam todo domingo."
        />
        <Grid>
          {formatos.map((formato) => (
            <Card key={formato.titulo}>
              <CardIcone>{formato.icone}</CardIcone>
              <h3>{formato.titulo}</h3>
              <p>{formato.descricao}</p>
            </Card>
          ))}
        </Grid>
        <div className={styles.acaoCentral}>
          <WhatsAppCTA
            mensagem={site.whatsapp.mensagens.workshop}
            tamanho="lg"
            origem="home-workshops"
          >
            Pedir um orçamento
          </WhatsAppCTA>{' '}
          <Button href="/workshops/" variante="ghost" tamanho="lg">
            Ver como funciona
          </Button>
        </div>
      </Container>
    </Secao>
  );
}
