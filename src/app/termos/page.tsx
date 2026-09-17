import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Atualizado, Prosa } from '@/components/ui/Prosa';
import { SecHead } from '@/components/ui/SecHead';
import { Secao } from '@/components/ui/Secao';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Termos de uso',
  description: 'Condições de uso do site de Tinna Silva e das ferramentas gratuitas.',
  alternates: { canonical: '/termos/' },
};

/*
 * ⚠️ MINUTA. Não é peça jurídica: precisa de revisão por advogado antes do
 * deploy, e dos dados de identificação da Tinna (razão social/CPF ou CNPJ e
 * e-mail de contato).
 */
export default function Termos() {
  return (
    <Secao>
      <Container narrow>
        <SecHead nivel="h1" titulo="Termos de uso" />
        <Atualizado data="setembro de 2026" />
        <Prosa>
          <h2>1. Quem somos</h2>
          <p>
            Este site é mantido por {site.nome}, que presta serviços de ensino de
            harmonia vocal. Contato: pelo WhatsApp ou pelo perfil{' '}
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
              {site.instagram.usuario}
            </a>
            .
          </p>

          <h2>2. O que este site oferece</h2>
          <p>
            O site apresenta o trabalho de {site.nome}, informa sobre workshops e
            encontros presenciais e disponibiliza ferramentas gratuitas de treino vocal
            que funcionam no seu navegador.
          </p>
          <p>
            O site não processa pagamentos, não vende produtos e não possui área de
            aluno. A contratação de qualquer serviço acontece fora daqui, por conversa
            direta.
          </p>

          <h2>3. Ferramentas gratuitas</h2>
          <p>
            As ferramentas são oferecidas no estado em que se encontram, para estudo
            pessoal. Elas dependem de recursos de áudio do seu navegador e podem não
            funcionar em todos os aparelhos.
          </p>
          <p>
            Elas não substituem acompanhamento profissional. Se você sentir dor,
            rouquidão persistente ou qualquer desconforto ao cantar, interrompa o uso e
            procure um profissional de saúde vocal.
          </p>

          <h2>4. Conteúdo e propriedade intelectual</h2>
          <p>
            Textos, materiais, exercícios, marca e identidade visual deste site
            pertencem a {site.nome}. Você pode usar o conteúdo para estudo próprio, mas
            não pode reproduzir, revender ou redistribuir como se fosse seu.
          </p>

          <h2>5. Links externos</h2>
          <p>
            O site aponta para serviços de terceiros, como WhatsApp e Instagram. O uso
            desses serviços segue os termos e as políticas de cada um deles.
          </p>

          <h2>6. Limitação de responsabilidade</h2>
          <p>
            Fazemos o possível para manter o site disponível e as informações corretas,
            mas não garantimos funcionamento ininterrupto nem resultados específicos de
            aprendizado, que dependem da prática de cada pessoa e de cada grupo.
          </p>

          <h2>7. Alterações</h2>
          <p>
            Estes termos podem ser atualizados a qualquer momento. A data da última
            atualização fica sempre no topo desta página.
          </p>

          <h2>8. Foro</h2>
          <p>
            Aplica-se a legislação brasileira. Questões não resolvidas de forma amigável
            serão tratadas no foro do domicílio do consumidor.
          </p>

          <p>
            Veja também a <Link href="/privacidade/">Política de privacidade</Link>.
          </p>
        </Prosa>
      </Container>
    </Secao>
  );
}
