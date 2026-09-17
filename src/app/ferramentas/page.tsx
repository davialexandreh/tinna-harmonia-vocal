import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Card, CardIcone } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Grid } from '@/components/ui/Grid';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { ferramentas } from '@/content/ferramentas';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Ferramentas gratuitas de canto',
  description:
    'Ferramentas gratuitas para treinar harmonia vocal no navegador: tocador de naipes, nota-guia, metrônomo e treino de ouvido. Sem cadastro e sem instalar nada.',
  alternates: { canonical: '/ferramentas/' },
};

export default function Ferramentas() {
  return (
    <>
      <Secao>
        <Container>
          <SecHead
            nivel="h1"
            titulo={
              <>
                Ferramentas para <em>treinar hoje</em>
              </>
            }
            descricao="Grátis e sem cadastro, direto no navegador do celular. Nada para instalar, nada para pagar, e nenhum dado seu sai do aparelho."
          />
          <Grid colunas={2}>
            {ferramentas.map((ferramenta) => (
              <Card key={ferramenta.slug}>
                <CardIcone nome={ferramenta.icone} />
                <h2>
                  <Link href={`/ferramentas/${ferramenta.slug}/`}>{ferramenta.titulo}</Link>
                </h2>
                <p>{ferramenta.descricao}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Secao>

      <Secao alt>
        <Container narrow centralizado>
          <SecHead
            centro
            titulo="Quer treinar com o ministério inteiro?"
            descricao="As ferramentas ajudam no estudo de casa. O salto acontece quando o grupo trabalha junto."
          />
          <WhatsAppCTA
            mensagem={site.whatsapp.mensagens.workshop}
            tamanho="lg"
            origem="ferramentas-indice"
          >
            Levar um workshop à minha igreja
          </WhatsAppCTA>
        </Container>
      </Secao>
    </>
  );
}
