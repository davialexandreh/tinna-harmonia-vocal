import type { Metadata } from 'next';
import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Button } from '@/components/ui/Button';
import { Card, CardIcone } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Grid } from '@/components/ui/Grid';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { site } from '@/content/site';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a Tinna Silva sobre workshops de harmonia vocal, imersões e acompanhamento do seu ministério de louvor.',
  alternates: { canonical: '/contato/' },
};

export default function Contato() {
  return (
    <Secao>
      <Container narrow>
        <SecHead
          nivel="h1"
          centro
          titulo={
            <>
              Fale comigo <em>direto no WhatsApp</em>
            </>
          }
          descricao="Sem formulário e sem robô. A mensagem chega para mim e eu respondo."
        />
        <Grid colunas={2}>
          <Card>
            <CardIcone nome="conversa" />
            <h2>Workshop para o ministério</h2>
            <p>
              Me diga o nome da igreja, quantas pessoas cantam e o período que vocês
              preferem. Eu respondo com formato e valor.
            </p>
            <p>
              <WhatsAppCTA
                mensagem={site.whatsapp.mensagens.workshop}
                origem="contato-workshop"
              >
                Pedir orçamento
              </WhatsAppCTA>
            </p>
          </Card>
          <Card>
            <CardIcone nome="fone" />
            <h2>Outras dúvidas</h2>
            <p>
              Dúvida sobre voz, ensaio, as ferramentas do site ou o curso online que está
              em preparo.
            </p>
            <p>
              <WhatsAppCTA
                mensagem={site.whatsapp.mensagens.geral}
                variante="ghost"
                origem="contato-geral"
              >
                Tirar uma dúvida
              </WhatsAppCTA>
            </p>
          </Card>
        </Grid>

        <SecHead
          centro
          titulo="Também estou no Instagram"
          descricao="É lá que saem os exercícios curtos, os testes de respiração e os avisos de agenda."
        />
        <div className={styles.centro}>
          <Button href={site.instagram.url} variante="ghost">
            {site.instagram.usuario}
          </Button>
        </div>
      </Container>
    </Secao>
  );
}
