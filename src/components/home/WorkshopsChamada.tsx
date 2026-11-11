import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Button } from '@/components/ui/Button';
import { Card, CardIcone } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Grid } from '@/components/ui/Grid';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { site } from '@/content/site';
import { servicos } from '@/content/servicos';
import styles from './home.module.css';

/**
 * Os cinco serviços da Tinna, do individual online ao Kit Voz. Título e
 * descrição vêm do material de divulgação dela. O detalhe do presencial em
 * grupo continua na página /workshops/.
 */
export function WorkshopsChamada() {
  return (
    <Secao id="servicos">
      <Container>
        <SecHead
          centro
          titulo={
            <>
              Mais vozes <em>com propósito</em>
            </>
          }
          descricao="Desenvolva sua voz, descubra seu potencial e cante com mais segurança e liberdade."
        />
        <Grid className={styles.gradeServicos}>
          {servicos.map((servico) => (
            <Card key={servico.titulo}>
              <CardIcone nome={servico.icone} />
              <h3>{servico.titulo}</h3>
              {servico.modalidade && (
                <span className={styles.modalidade}>{servico.modalidade}</span>
              )}
              <p>{servico.descricao}</p>
            </Card>
          ))}
        </Grid>
        <div className={styles.acaoCentral}>
          <WhatsAppCTA
            mensagem={site.whatsapp.mensagens.geral}
            tamanho="lg"
            origem="home-servicos"
          >
            Falar com a Tinna
          </WhatsAppCTA>{' '}
          <Button href="/workshops/" variante="ghost" tamanho="lg">
            Ver o treinamento em grupo
          </Button>
        </div>
      </Container>
    </Secao>
  );
}
