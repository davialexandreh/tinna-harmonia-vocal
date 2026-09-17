# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primário: o líder de louvor / ministro de música.** É quem decide, agenda e
paga o encontro presencial. Chega ao site pelo link da bio do Instagram, quase
sempre pelo celular, e avalia se vale levar alguém de fora para o ministério
dele. A dúvida dele não é "isso é bom?", é "isso funciona com o meu grupo, no
meu ensaio de segunda, com as pessoas que eu tenho?".

**Secundário: o back vocal ou cantor do ministério.** Entra pelo conteúdo e
pelas ferramentas gratuitas, estuda sozinho e leva a ideia ao líder depois.
Costuma acreditar que "não tem ouvido" e que o problema é dom.

Perfil comum aos dois: adultos evangélicos, majoritariamente entre 25 e 50 anos,
acesso predominante por celular, muitos abrindo o site dentro do navegador
interno do Instagram.

## Product Purpose

Tinna Silva ensina **harmonia vocal para grupos** há mais de dez anos, dentro de
igrejas, com foco em ministérios de louvor. O site existe para transformar a
audiência do Instagram em conversas de agendamento: apresentar o método, provar
competência e levar o líder a uma conversa no WhatsApp.

Sucesso, nos próximos seis meses, tem duas medidas declaradas pelo cliente:
**workshops presenciais agendados** e **autoridade / busca orgânica** no nicho.
As duas juntas, sem que a segunda vire desculpa para a primeira não acontecer.

## Positioning

O mercado está cheio de curso de **técnica vocal individual**. Quase não existe
ensino de **harmonia vocal para o grupo que canta junto** — que é exatamente o
problema do ministério de louvor: todo mundo começa certo e a segunda voz
escorrega de volta para a melodia no meio da música.

A posição da Tinna: harmonia não é dom, é coordenação, e coordenação se treina
em grupo. O trabalho termina quando o ministério consegue ensaiar sozinho.

## Operating Context

- O encontro acontece **dentro da igreja**, com o grupo inteiro, no espaço onde
  eles já cantam todo domingo.
- O ensaio real do ministério costuma ser semanal, à noite, com gente que
  trabalha o dia inteiro. Todo material precisa sobreviver a essa agenda.
- A descoberta acontece no Instagram (@tinnasilvaharmoniavocal, ~9.600
  seguidores), em Reels educativos: testes de respiração, "ache a voz do
  soprano", dicas de microfone e retorno.
- A Tinna tem um segundo negócio (estética) que ocupa o link da bio. O negócio
  de canto não tinha nenhum destino de conversão antes deste site.
- **Atendimento presencial: Grande São Paulo.**

## Capabilities and Constraints

- **O que é vendido hoje:** workshops e encontros presenciais para ministérios.
  É o que já gera caixa.
- **Preço não é publicado.** Todo valor sai por orçamento no WhatsApp, caso a
  caso.
- **Curso online não existe.** Está em preparo e, quando existir, fica em
  plataforma terceirizada (Hotmart ou similar). O site nunca promete data nem
  vende acesso.
- **Fora de escopo, por decisão:** cadastro, login, área de membros, player de
  aulas, pagamento, painel administrativo. Tudo isso é da plataforma de terceiro.
- **Captação é só WhatsApp** (`wa.me`), sem formulário e sem e-mail marketing.
  Consequência assumida: não existe lista de espera, e transmissão no WhatsApp
  só alcança quem salvou o número dela.
- **Ferramentas gratuitas de canto** rodam no navegador, com processamento
  local. Nenhum áudio do usuário sai do aparelho.
- **Restrições de operação:** orçamento apertado, custo recorrente precisa ficar
  perto de zero, e o site é mantido por uma pessoa só.
- **Conteúdo sem CMS:** toda edição de texto passa por deploy, por decisão de
  custo.

### Decisões em aberto

- **Nome do método.** As cinco bases (Naipe, Apoio, Intervalo, Prática, Ensaio)
  estão definidas; o acrônimo "N.A.I.P.E" era sugestão do protótipo e **não foi
  validado**. Enquanto isso, as bases aparecem numeradas, sem marca.
- Número de WhatsApp real e domínio definitivo.
- Duração e capacidade de cada formato de workshop.
- Dados de identificação legal (CPF/CNPJ, e-mail) para termos e privacidade.

## Brand Commitments

- Nome: **Tinna Silva**. Perfil: **@tinnasilvaharmoniavocal**.
- Tom: acolhedor, prático, de serviço. **Não** performático, não "gospel brega".
- Todo conteúdo visível em português do Brasil.
- O protótipo `docs/tinna-silva-v2.html` é referência de direção e de copy, não
  código de produção. Seus números, depoimentos e preços são fictícios.

## Evidence on Hand

**Existe, mas ainda não foi entregue** (confirmado pelo cliente nesta rodada):

- depoimentos em vídeo;
- depoimentos em texto;
- nomes de ministérios atendidos;
- números verificáveis (anos ensinando, ministérios atendidos).

**Já entregue e em uso:** foto de retrato da Tinna e vídeo de fundo do hero, em
`assets/`, processados para `public/midia/`.

**Regra que vale enquanto não chegar:** nenhum número, depoimento, nome de igreja
ou avaliação é inventado. As listas correspondentes ficam vazias e os blocos
simplesmente não renderizam. Hoje a Home não exibe nenhuma prova social por
esse motivo.

## Product Principles

1. **Só afirmar o que a Tinna sustenta.** Sem número, depoimento ou promessa que
   ela não possa provar. Prova ausente é bloco ausente, nunca placeholder
   plausível.
2. **A unidade de valor é o grupo.** Harmonia não se resolve em aula individual;
   tudo é desenhado para o ministério aprender junto e continuar sem ela.
3. **O site qualifica, a conversa fecha.** Nenhuma etapa tenta vender sozinha:
   o destino é sempre uma conversa humana no WhatsApp, já contextualizada.
4. **Não prometer o que ainda não existe.** O curso online só aparece como venda
   quando for real.
5. **Barato de manter, por uma pessoa.** Qualquer decisão que crie custo
   recorrente ou dependência de especialista precisa se pagar em agendamentos.

## Accessibility & Inclusion

- **Mobile-first não é preferência, é o cenário real:** a maior parte do tráfego
  vem do link da bio, muitas vezes no navegador interno do Instagram, em conexão
  variável.
- Contraste AA, navegação por teclado e rótulos corretos são requisito, não
  refinamento.
- As ferramentas de áudio precisam funcionar **sem microfone** e avisar com
  clareza quando o navegador não suporta o recurso — o WebView do Instagram
  bloqueia `getUserMedia`, e é por lá que boa parte do público entra.
- Faixa etária 25–50 com uso majoritário de celular: alvos de toque generosos e
  texto legível sem zoom.
