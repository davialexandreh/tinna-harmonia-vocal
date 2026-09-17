import type { Metadata } from 'next';
import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Grid } from '@/components/ui/Grid';
import { Prosa } from '@/components/ui/Prosa';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { site } from '@/content/site';
import { bio, principios } from '@/content/sobre';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Tinna Silva: back vocal, compositora e professora de harmonia vocal há mais de dez anos, com foco em ministérios de louvor.',
  alternates: { canonical: '/sobre/' },
};

export default function Sobre() {
  return (
    <>
      <Secao>
        <Container narrow>
          <SecHead
            nivel="h1"
            eyebrow="Quem ensina"
            titulo={
              <>
                Harmonia vocal <em>é o meu trabalho há mais de dez anos</em>
              </>
            }
          />
          <Prosa>
            {bio.map((paragrafo) => (
              <p key={paragrafo.slice(0, 40)}>{paragrafo}</p>
            ))}
          </Prosa>
        </Container>
      </Secao>

      <Secao alt>
        <Container>
          <SecHead centro eyebrow="Como eu ensino" titulo="Quatro princípios" />
          <Grid colunas={4}>
            {principios.map((p) => (
              <Card key={p.titulo}>
                <h3>{p.titulo}</h3>
                <p>{p.descricao}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Secao>

      <Secao>
        <Container narrow centralizado>
          <SecHead
            centro
            titulo="Quer conversar sobre o seu ministério?"
            descricao="Me conte em que ponto o grupo está. Respondo pelo WhatsApp."
          />
          <p>
            <WhatsAppCTA
              mensagem={site.whatsapp.mensagens.geral}
              tamanho="lg"
              origem="sobre-final"
            >
              Falar no WhatsApp
            </WhatsAppCTA>
          </p>
        </Container>
      </Secao>
    </>
  );
}
