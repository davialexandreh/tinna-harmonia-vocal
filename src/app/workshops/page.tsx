import type { Metadata } from 'next';
import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Card, CardIcone } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Grid } from '@/components/ui/Grid';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { site } from '@/content/site';
import { comoFunciona, formatos, oQueRecebe } from '@/content/workshops';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Workshops presenciais',
  description:
    'Workshops e imersões de harmonia vocal dentro da sua igreja: diagnóstico de vozes, uma música montada em três vozes e um roteiro de ensaio para o ministério seguir sozinho.',
  alternates: { canonical: '/workshops/' },
};

export default function Workshops() {
  return (
    <>
      <section className={styles.capa}>
        <Container>
          <span className={styles.eyebrow}>Workshops e imersões</span>
          <h1>
            O encontro acontece <em>na sua igreja</em>, com o ministério inteiro
          </h1>
          <p>
            Um dia de trabalho com o grupo que já canta junto todo domingo, e que vai
            sair cantando em três vozes.
          </p>
          <WhatsAppCTA
            mensagem={site.whatsapp.mensagens.workshop}
            tamanho="lg"
            origem="workshops-capa"
          >
            Pedir um orçamento
          </WhatsAppCTA>
        </Container>
      </section>

      <Secao>
        <Container>
          <SecHead
            eyebrow="Formatos"
            titulo={
              <>
                Três maneiras de <em>trabalhar com o grupo</em>
              </>
            }
            descricao="O formato certo depende do tamanho do ministério e de quanto tempo vocês têm."
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
        </Container>
      </Secao>

      <Secao alt>
        <Container>
          <SecHead
            eyebrow="O que o ministério recebe"
            titulo={
              <>
                Vocês não saem com teoria. <em>Saem com repertório.</em>
              </>
            }
          />
          <Grid colunas={4}>
            {oQueRecebe.map((item) => (
              <Card key={item.titulo}>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Secao>

      <Secao id="orcamento">
        <Container>
          <SecHead
            eyebrow="Como agendar"
            titulo="Do primeiro contato até o encontro"
            descricao="Sem formulário e sem espera: a conversa começa e termina no WhatsApp."
          />
          <ol className={styles.passos}>
            {comoFunciona.map((passo) => (
              <li key={passo}>{passo}</li>
            ))}
          </ol>
          <div className={styles.acao}>
            <WhatsAppCTA
              mensagem={site.whatsapp.mensagens.workshop}
              tamanho="lg"
              origem="workshops-orcamento"
            >
              Pedir um orçamento
            </WhatsAppCTA>
          </div>
        </Container>
      </Secao>
    </>
  );
}
