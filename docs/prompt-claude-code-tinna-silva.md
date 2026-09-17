# Prompt para o Claude Code — Site Tinna Silva (Harmonia Vocal)

> Cole este conteúdo inteiro como primeira mensagem no Claude Code.

---

Você vai me ajudar a construir o site de uma cliente. Antes de escrever qualquer linha de código, leia todo o contexto abaixo e siga a seção **"Como quero trabalhar"** no final.

## 1. A cliente

**Tinna Silva** (@tinnasilvaharmoniavocal) — back vocal, compositora e professora de harmonia vocal. Ensina há mais de 10 anos, com foco em **ministérios de louvor de igrejas evangélicas**: grupos que cantam juntos mas não conseguem sustentar as vozes em harmonia.

- ~9.600 seguidores no Instagram, conteúdo consistente em Reels (formato educativo: testes de respiração, "ache a voz do soprano", dicas de microfone e retorno)
- Já dá **aulas e workshops presenciais em grupo**, dentro de igrejas
- Tem um segundo negócio (estética/beleza) que hoje ocupa o link da bio — o negócio de canto **não tem nenhum destino de conversão hoje**
- Nicho pouco explorado: existe muito curso de técnica vocal individual, quase nada de **harmonia vocal para grupos de louvor**

## 2. Estágio do produto (importante)

Ela **ainda não tem curso online gravado nem produto validado**. O conteúdo do Instagram é registro do trabalho, não vitrine de venda. Logo:

- O site **não pode depender** de conteúdo que ainda não existe
- A prioridade é **captação de leads** e venda dos **workshops presenciais**, que já geram caixa
- O curso online virá depois, hospedado em **plataforma terceirizada (Hotmart ou similar)**

## 3. O que estamos construindo

Um **site institucional + funil de captação**, mobile-first, em português do Brasil.

### O site FAZ:

- Apresenta a Tinna e o método dela (autoridade)
- Vende os **workshops/imersões presenciais** para ministérios (formulário de contato/orçamento)
- Captura e-mail e WhatsApp (lista de espera do curso online + isca digital)
- Serve de **página de vendas** do curso online quando ele existir, com CTA levando ao **checkout da Hotmart** (link externo)
- Oferece **ferramentas gratuitas de canto** (detalhe na seção 5) como isca de SEO e captura de lead
- Link único na bio do Instagram, resolvendo o problema atual

### O site NÃO FAZ (fora de escopo — não construir):

- Cadastro/login de aluno
- Área de membros, player de vídeo, progresso de aulas, certificados
- Processamento de pagamento ou gestão de assinaturas
- Painel administrativo de alunos

Tudo isso fica na plataforma terceirizada. No site, existe apenas um link **"Área do aluno"** que aponta para fora, e uma seção que **mostra** como é a área de aluno (screenshots/mockup), sem implementá-la.

## 4. Estrutura de páginas

1. **Home** — página longa de conversão. Blocos, nessa ordem:
   - Hero: promessa + CTA duplo (workshop presencial / lista de espera)
   - Prova social (números, ministérios atendidos)
   - Problema → solução (por que o grupo não canta em harmonia)
   - **O método** (precisa de nome próprio — vamos definir com a cliente)
   - O que você aprende, por nível (iniciante / intermediário / avançado)
   - Sobre a Tinna (história + credenciais)
   - Depoimentos (preparar para **vídeo**, não só texto)
   - "É pra você se… / não é pra você se…"
   - Ferramentas gratuitas (chamada)
   - Oferta / planos + garantia
   - FAQ longo (10+ perguntas, cada uma matando uma objeção)
   - CTA final
   - CTA se repete ~5–6x ao longo da página
2. **Workshops presenciais** — página de serviço: formatos, para quem, o que o ministério recebe, como agendar, formulário de orçamento
3. **Sobre**
4. **Ferramentas** — índice + uma página por ferramenta (cada uma é uma porta de entrada de SEO)
5. **Contato**
6. **Blog** (opcional, avaliar) — conteúdo de SEO no nicho
7. Termos de uso e Política de privacidade

## 5. Ferramentas interativas

Diferencial competitivo do projeto. Fase 1 (sem microfone, mais simples e confiável):

- **Nota-guia / drone sustentado** — segura uma tônica para treinar sustentar a segunda voz
- **Teclado com escala** — clica na nota, ouve a altura de referência
- **Metrônomo** — obrigatoriamente com agendamento via `AudioContext` e lookahead scheduler; `setInterval` desalinha e não é aceitável
- **Treino de ouvido "ache a voz"** — toca um acorde de 3 vozes, o usuário identifica qual naipe está soando (é o formato de maior engajamento dela no Instagram)

Fase 2 (exige microfone — só depois da fase 1 validada):

- **Afinador / detector de nota em tempo real** (autocorrelação ou YIN)
- **Teste de extensão vocal** — descobre se a pessoa é soprano, contralto ou tenor

Requisitos das ferramentas com microfone: HTTPS obrigatório, pedido explícito de permissão, **fallback claro** quando o navegador negar ou o dispositivo não suportar, aviso sobre ruído ambiente. Nenhum áudio do usuário pode ser enviado para servidor — processamento 100% local no navegador.

Cada ferramenta deve ter um CTA de captura de e-mail no final ("receba o plano de estudo completo").

## 6. Identidade visual

- Público: mulheres e homens adultos, evangélicos, majoritariamente 25–50 anos, acessando **pelo celular**
- Tom: acolhedor, prático, de serviço — **não** performático nem "gospel brega"
- Paleta: neutros quentes + acento rosa/vinho (o que ela já usa nas capas dos Reels)
- Já existe um protótipo visual meu que serve de referência de direção — vou compartilhar
- Fotos e vídeos reais dela serão fornecidos depois; use placeholders identificáveis por enquanto

## 7. Requisitos não funcionais

- **Mobile-first**, obrigatório — a maior parte do tráfego vem do link da bio
- Performance: Core Web Vitals no verde; imagens otimizadas; a página Home é longa, então lazy-load é essencial
- **SEO** técnico completo: meta tags, Open Graph, dados estruturados, sitemap, URLs semânticas em português. As páginas de ferramentas são as principais apostas de busca orgânica
- **Analytics + Pixel** (Meta) com eventos de conversão nos CTAs e nos formulários
- **LGPD**: banner de consentimento, política de privacidade, consentimento explícito nos formulários
- **Acessibilidade**: contraste AA, navegação por teclado, labels corretos nos formulários
- Conteúdo editável pela cliente sem depender de deploy (avaliar CMS — ver seção 8)
- Formulários integrados com e-mail marketing e/ou WhatsApp

## 8. Decisões técnicas em aberto — quero decidir com você

**Não escolha sozinho.** Apresente as opções com prós, contras, custo e esforço de manutenção, e recomende uma. Pontos a decidir:

1. **Framework** — Next.js? Astro? Outro? Considere que o site é majoritariamente estático com algumas ilhas interativas (as ferramentas de áudio)
2. **CMS** — a cliente precisa editar textos, depoimentos e datas de workshop sozinha. Headless? Git-based? Nenhum na fase 1?
3. **Hospedagem** — custo recorrente importa muito; ela é microempreendedora
4. **Formulários e e-mail marketing** — qual serviço, e como integrar
5. **Ferramentas de áudio** — Web Audio API puro ou alguma lib (Tone.js)? Avalie peso do bundle
6. **Testes** — o que faz sentido testar num site desse porte
7. **Estratégia de deploy e domínio**

Restrições que pesam na decisão: **orçamento apertado**, **custo recorrente precisa ser mínimo**, e eu preciso conseguir **manter isso sozinho** depois.

## 9. Como quero trabalhar

1. Primeiro, leia este contexto e o protótipo de referência em `docs/tinna-silva-v2.html`, e **me faça as perguntas** que ficaram em aberto. Não comece a codar.
2. Depois, apresente as **opções técnicas da seção 8** e sua recomendação, com justificativa
3. Só depois de eu aprovar, monte o **plano de implementação em fases** e comece
4. Trabalhe em incrementos pequenos e revisáveis; me mostre o resultado antes de seguir
5. Pergunte quando algo for ambíguo em vez de assumir
6. Todo o conteúdo visível é em **português do Brasil**
7. Em `skills/` há skills reaproveitadas de outro projeto meu (Nexus). Leia antes de começar e me diga, para cada uma: se aplica a este projeto, se aplica com ajuste, ou se devo remover. Elas não são obrigatórias e não devem condicionar a escolha de stack — se alguma pressupõe uma tecnologia, me avise explicitamente.
