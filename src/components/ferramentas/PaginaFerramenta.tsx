import type { ReactNode } from 'react';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Container } from '@/components/ui/Container';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import type { Ferramenta } from '@/content/ferramentas';
import { site } from '@/content/site';
import styles from './ferramentas.module.css';

/** Moldura comum das páginas de ferramenta: título, ferramenta, como usar e CTA. */
export function PaginaFerramenta({
  ferramenta,
  children,
}: {
  ferramenta: Ferramenta;
  children: ReactNode;
}) {
  return (
    <>
      <Secao>
        <Container narrow>
          <SecHead
            nivel="h1"
            eyebrow="Ferramenta gratuita"
            titulo={ferramenta.titulo}
            descricao={ferramenta.descricao}
          />
          <noscript>
            <p className={styles.aviso}>
              As ferramentas funcionam com JavaScript, e ele está desativado ou bloqueado
              neste navegador. Libere o script desta página, ou abra em outro navegador,
              para usar o áudio.
            </p>
          </noscript>
          {children}
        </Container>
      </Secao>

      <Secao alt>
        <Container narrow>
          <SecHead centro titulo="Como usar no seu estudo" />
          <ol className={styles.comoUsar}>
            {ferramenta.comoUsar.map((passo) => (
              <li key={passo}>{passo}</li>
            ))}
          </ol>
          <div className={styles.acaoFerramenta}>
            <WhatsAppCTA
              mensagem={site.whatsapp.mensagens.material}
              tamanho="lg"
              origem={`ferramenta-${ferramenta.slug}`}
            >
              Quero o plano de estudo
            </WhatsAppCTA>
            <p className={styles.dica}>
              Prefere treinar com o grupo inteiro?{' '}
              <Link href="/workshops/">Veja como funciona o workshop presencial</Link>.
            </p>
          </div>
        </Container>
      </Secao>
    </>
  );
}
