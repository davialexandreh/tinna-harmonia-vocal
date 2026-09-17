import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Atualizado, Prosa } from '@/components/ui/Prosa';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Política de privacidade',
  description:
    'Como os seus dados são tratados no site de Tinna Silva, conforme a Lei Geral de Proteção de Dados.',
  alternates: { canonical: '/privacidade/' },
};

/*
 * ⚠️ MINUTA. Precisa de revisão jurídica e dos dados do controlador
 * (nome/razão social, CPF ou CNPJ, e-mail do encarregado) antes do deploy.
 *
 * A seção "Cookies e medição" descreve o comportamento real do código: os
 * scripts do GA4 e do Pixel só carregam depois do aceite no banner, e só se as
 * variáveis NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_META_PIXEL_ID existirem no build.
 */
export default function Privacidade() {
  return (
    <Secao>
      <Container narrow>
        <SecHead nivel="h1" titulo="Política de privacidade" />
        <Atualizado data="setembro de 2026" />
        <Prosa>
          <h2>Resumo em uma frase</h2>
          <p>
            Este site não pede cadastro e não tem formulário. Os cookies de medição só
            existem se você aceitar, e o contato acontece pelo WhatsApp.
          </p>

          <h2>Quem controla os dados</h2>
          <p>
            {site.nome}, responsável pelo conteúdo e pelos serviços descritos neste site.
            Para tratar de privacidade, fale comigo pelo WhatsApp disponível nas páginas.
          </p>

          <h2>Que dados são coletados</h2>
          <ul>
            <li>
              <b>Nenhum dado cadastral.</b> Não existe formulário, login ou lista de
              e-mails neste site.
            </li>
            <li>
              <b>Dados técnicos do servidor.</b> A hospedagem registra informações como
              endereço IP e tipo de navegador, pelo tempo necessário à segurança e ao
              funcionamento do site.
            </li>
            <li>
              <b>Áudio das ferramentas.</b> Nada do que você canta sai do seu aparelho. O
              processamento é feito no próprio navegador e nenhum áudio é gravado ou
              enviado para servidor algum.
            </li>
          </ul>

          <h2>Quando você fala comigo no WhatsApp</h2>
          <p>
            Ao clicar em um botão de WhatsApp, você é levado para o aplicativo com uma
            mensagem já escrita. A conversa passa a acontecer dentro do WhatsApp, sob a
            política de privacidade da Meta. Eu uso o que você me contar apenas para
            responder e organizar o atendimento do seu ministério.
          </p>

          <h2>Cookies e medição</h2>
          <p>
            Ao entrar, você vê um aviso perguntando se aceita cookies de medição.
            Enquanto você não aceitar, <b>nenhum script de terceiro é carregado</b>: nem
            o Google Analytics, nem o Pixel da Meta.
          </p>
          <p>Se você aceitar, passam a funcionar:</p>
          <ul>
            <li>
              <b>Google Analytics 4</b>, para saber quantas pessoas visitam o site, por
              quais páginas entram e de onde vêm. O endereço IP é anonimizado.
            </li>
            <li>
              <b>Pixel da Meta</b>, que registra visitas e cliques nos botões de WhatsApp,
              para eu entender quais conteúdos do Instagram trazem gente até aqui.
            </li>
          </ul>
          <p>
            A sua escolha fica guardada apenas no seu navegador. Para mudá-la, limpe os
            dados do site no seu navegador e escolha de novo quando o aviso aparecer.
          </p>
          <p>
            O que é registrado é o clique no botão e a seção de onde ele partiu, nunca o
            conteúdo da sua conversa no WhatsApp.
          </p>

          <h2>Compartilhamento</h2>
          <p>
            Seus dados não são vendidos nem cedidos. O site depende de prestadores que
            atuam como operadores: a hospedagem, que mantém o site no ar, e, caso você
            aceite os cookies, o Google e a Meta, que recebem dados de navegação
            conforme as políticas de privacidade deles.
          </p>

          <h2>Seus direitos</h2>
          <p>
            A Lei Geral de Proteção de Dados (Lei 13.709/2018) garante que você peça
            confirmação de tratamento, acesso, correção, anonimização, portabilidade ou
            eliminação dos seus dados. É só me pedir pelo WhatsApp.
          </p>

          <h2>Crianças e adolescentes</h2>
          <p>
            O site é destinado a maiores de 18 anos. Participação de menores nos encontros
            presenciais acontece com autorização dos responsáveis.
          </p>

          <h2>Alterações</h2>
          <p>
            Esta política pode ser atualizada. A data da última alteração fica no topo da
            página.
          </p>

          <p>
            Veja também os <Link href="/termos/">Termos de uso</Link>.
          </p>
        </Prosa>
      </Container>
    </Secao>
  );
}
