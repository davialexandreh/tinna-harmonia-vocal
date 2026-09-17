import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsAppCTA } from '@/components/cta/WhatsAppCTA';
import { Container } from '@/components/ui/Container';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { site } from '@/content/site';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: 'Página não encontrada',
};

/**
 * Sem esta página, o Next serve a própria: em inglês, em fundo branco e sem
 * saída. Quem chega aqui já errou o caminho uma vez; o mínimo é dizer o que
 * aconteceu na língua do site e mostrar para onde ir.
 */
export default function NaoEncontrada() {
  return (
    <Secao>
      <Container narrow>
        <SecHead
          nivel="h1"
          titulo="Essa página não existe"
          descricao="O endereço pode ter mudado de lugar, ou o link que trouxe você até aqui está quebrado. Nada se perdeu: o resto do site continua no lugar."
        />

        <nav className={styles.saidas} aria-label="Para onde ir">
          <Link href="/">
            <b>Início</b>
            <span>O método, os níveis e as respostas às dúvidas mais comuns</span>
          </Link>
          <Link href="/ferramentas/">
            <b>Ferramentas gratuitas</b>
            <span>Tocador de naipes, nota-guia, metrônomo e treino de ouvido</span>
          </Link>
          <Link href="/workshops/">
            <b>Workshops presenciais</b>
            <span>Como funciona o encontro dentro da sua igreja</span>
          </Link>
        </nav>

        <div className={styles.acao}>
          <WhatsAppCTA mensagem={site.whatsapp.mensagens.geral} origem="404">
            Falar no WhatsApp
          </WhatsAppCTA>
        </div>
      </Container>
    </Secao>
  );
}
