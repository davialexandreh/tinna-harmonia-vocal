---
name: Tinna Silva · Harmonia Vocal
description: Site escuro de captação para workshops de harmonia vocal em ministérios de louvor
colors:
  magenta-vivo: "#e11d62"
  magenta-profundo: "#8e0f3c"
  magenta-claro: "#f2568d"
  quase-preto: "#140a10"
  superficie-faixa: "#1a0f14"
  superficie-cartao: "#221419"
  superficie-afundada: "#0e0609"
  texto-primario: "#ffffff"
  texto-secundario: "#c8bec2"
  texto-terciario: "#a79e9a"
  borda-sutil: "rgba(255, 255, 255, 0.14)"
  preto-sombra: "#000000"
typography:
  display:
    fontFamily: "Inter Tight, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(36px, 5.4vw, 66px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  page-title:
    fontFamily: "Inter Tight, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(33px, 4.8vw, 54px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  tool-display:
    fontFamily: "Inter Tight, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(56px, 12vw, 88px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter Tight, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(29px, 4vw, 46px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Inter Tight, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  lead:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  subtitle:
    fontFamily: "Inter Tight, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  stat:
    fontFamily: "Inter Tight, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  caption:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  overline:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
  "20": "80px"
  "24": "96px"
components:
  button-primary:
    backgroundColor: "{colors.magenta-vivo}"
    textColor: "{colors.texto-primario}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
  button-primary-hover:
    backgroundColor: "{colors.magenta-profundo}"
    textColor: "{colors.texto-primario}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.texto-primario}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
  button-inverse:
    backgroundColor: "{colors.texto-primario}"
    textColor: "{colors.quase-preto}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
  card:
    backgroundColor: "{colors.superficie-cartao}"
    textColor: "{colors.texto-secundario}"
    rounded: "{rounded.lg}"
    padding: "24px"
  chip:
    backgroundColor: "{colors.superficie-afundada}"
    textColor: "{colors.texto-secundario}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  chip-selected:
    textColor: "{colors.magenta-claro}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
---

# Design System: Tinna Silva · Harmonia Vocal

## Overview

**Creative North Star: "O palco visto do naipe"**

Quem canta a segunda voz não vê o palco de frente: vê de dentro, meio no escuro,
com a luz batendo em quem está à frente. O sistema inteiro parte desse ponto de
vista. O fundo é escuro porque é assim que se enxerga o culto de dentro do grupo,
não porque tema escuro esteja na moda. A imagem principal do site é um palco em
penumbra, e o texto vive por cima dele com um véu que garante leitura.

A personalidade é **refinada e contida**. Nada aqui grita: o magenta é raro, o
movimento é curto, as bordas são finas e o espaçamento é largo o suficiente para
o olho descansar entre blocos. A densidade é média: parágrafos curtos, títulos
grandes, e nunca duas ideias disputando a mesma dobra. O site fala com um líder
de louvor cansado, no celular, entre o trabalho e o ensaio de terça.

O que o sistema recusa é tão definidor quanto o que ele usa: nada de estética de
palco gospel (dourado, brilho, luz volumétrica, sombra em letra) e nada de
urgência de infoproduto (contador, preço riscado, selo de garantia). A promessa é
de serviço, não de espetáculo.

O movimento tem um só momento autoral: as três partes do título do hero entram
em sequência, saindo do desfoque para o foco, enquanto a luz sobe sobre o vídeo.
São as vozes entrando num acorde, e é a única coreografia do site. Todo o resto
do movimento é resposta: confirma um toque, explica um estado, acompanha uma
troca de tela.

**Key Characteristics:**
- Fundo escuro único, sem alternância de tema
- Magenta reservado à ação, nunca à decoração
- Duas famílias tipográficas com papéis rígidos: Inter Tight titula, Archivo lê
- Três níveis de superfície quase pretos, separados por tom, borda fina e sombra ambiente
- Cantos generosos (16 a 32px) e botões em pílula
- Mobile-first de verdade: o layout nasce em 390px

## Colors

Uma paleta de um acento só, sobre quatro superfícies quase pretas: o magenta
carrega toda a energia do sistema justamente porque não tem concorrente.

### Primary
- **Magenta Vivo** (`#e11d62`): a cor da ação. Preenche botão primário, marca o
  estado ativo de um controle e pinta a faixa de chamada final. É a única cor
  saturada do sistema.
- **Magenta Profundo** (`#8e0f3c`): estado pressionado e hover do botão primário.
  Aparece só em resposta a toque, nunca em repouso.
- **Magenta Claro** (`#f2568d`): a versão legível do acento quando ele vira
  **texto** sobre o escuro. O Magenta Vivo alcança apenas 4,21:1 sobre o fundo e
  reprova no AA para texto pequeno; esta variante resolve com 6,01:1.

### Neutral
- **Quase Preto** (`#140a10`): o fundo da página e do rodapé. Não é preto puro:
  tem um resto de vermelho que amarra a página ao acento.
- **Faixa** (`#1a0f14`): o fundo das seções alternadas. Um degrau acima da página,
  o bastante para o olho perceber a troca de assunto.
- **Cartão** (`#221419`): a superfície elevada. Todo cartão, painel de ferramenta
  e bloco de destaque vive aqui, e por isso continua visível dentro de uma faixa.
- **Afundada** (`#0e0609`): mais escura que a página. Usada em controle em
  repouso (chip não selecionado, linha de voz desligada) para indicar recuo.
- **Texto primário** (`#ffffff`): títulos e texto de leitura principal.
- **Texto secundário** (`#c8bec2`): parágrafos de apoio e descrições de cartão.
- **Texto terciário** (`#a79e9a`): metadados, legendas e o rodapé legal.
- **Borda sutil** (`rgba(255, 255, 255, 0.14)`): a linha de 1px que desenha cartão,
  campo e separação de seção.
- **Preto puro** (`#000000`): só como base de sombra, em `rgba`. Nunca como fundo
  de superfície e nunca como cor de texto.

### Named Rules

**A Regra da Ação Única.** O magenta só aparece onde se pode tocar: botão, estado
ativo, faixa de chamada. Ênfase em título é peso e tamanho, nunca cor. Se um bloco
tem magenta em dois lugares e só um deles é clicável, o outro está errado.

**A Regra do Degrau.** Superfícies só sobem de nível: página → faixa → cartão.
Nunca se aninha cartão dentro de cartão para criar um quarto nível; se precisou,
o bloco está complexo demais.

## Typography

**Display Font:** Inter Tight (com `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`)
**Body Font:** Archivo (com a mesma pilha de reserva)

**Character:** Inter Tight é estreita e fecha bem o espaço entre letras em corpo
grande, o que deixa o título denso sem parecer apertado. Archivo tem letra aberta
e altura-x generosa, que é o que sustenta a leitura em tela pequena. As duas são
grotescas: o contraste entre elas é de largura e função, nunca de estilo.

### Hierarchy
- **Display** (600, `clamp(36px, 5.4vw, 66px)`, 1.05, `-0.03em`): a promessa do
  hero. Um por página, sempre.
- **Page title** (600, `clamp(33px, 4.8vw, 54px)`): o h1 de página interna, um
  degrau acima da abertura de seção.
- **Tool display** (600, `clamp(56px, 12vw, 88px)`): o mostrador das ferramentas
  de áudio. Existe só dentro do painel.
- **Headline** (600, `clamp(29px, 4vw, 46px)`, 1.05): abertura de seção.
- **Title** (600, 20px, 1.15): título de cartão e de bloco dentro de seção.
- **Body** (400, 17px, 1.55, `+0.005em`): leitura corrida. Medida de 65–75ch; em
  textos legais o limite é 72ch e o container cai para 880px.
- **Label** (600, 15px): botão, controle e link de navegação.
- **Lead** (400, 19px): parágrafo de abertura e resposta de FAQ.
- **Subtitle** (600, 24px): título de nível dentro de uma grade.
- **Stat** (600, 32px): número em destaque.
- **Caption** (400, 13px): legenda, metadado e nota de rodapé.
- **Overline** (700, 11px, `0.12em`, caixa alta): rótulo de controle dentro de um
  painel de ferramenta. Nunca acima de um título.

### Escala
Oito degraus, e nenhum valor fora deles: 11, 13, 15, 17, 19, 20, 24 e 32px. Acima
disso só as três fluidas: h1 `clamp(33px, 4.8vw, 54px)`, headline
`clamp(29px, 4vw, 46px)` e display `clamp(36px, 5.4vw, 66px)`.

### Named Rules

**A Regra das Duas Vozes.** Inter Tight só titula, Archivo só lê. Nenhum texto de
parágrafo usa a fonte de display, e nenhum título usa a de corpo. Um terceiro
tipo, incluindo monoespaçada, não existe neste sistema.

**A Regra do Aperto.** Todo título carrega `letter-spacing: -0.03em`. É o que faz
a Inter Tight parecer desenhada para o site em vez de escolhida numa lista.

**A Regra dos Oito Degraus.** Nenhum tamanho de fonte fora da escala. Se um bloco
pede 14,5px, o bloco está errado, não a escala.

**A Regra do Claro Sobre Escuro.** Texto branco sobre fundo quase preto parece
mais apertado do que é. O corpo compensa nos três eixos: entrelinha de 1,55 em
vez de 1,5, `+0,005em` de entreletra, e nunca abaixo do peso 400.

**A Regra da Entrelinha Proporcional.** Título grande fecha a linha (1,05);
título pequeno, que quebra em duas, precisa de ar (1,18). Uma entrelinha única
para todos os níveis deixa o título de cartão espremido.

## Layout

Coluna única centrada, com dois containers: **1120px** para grade de conteúdo e
**880px** para leitura corrida (FAQ, textos legais, biografia). O respiro lateral
é de 24px em qualquer largura, o que dá margem confortável em 390px sem perder
área útil.

A seção é a unidade de ritmo: **96px** de respiro vertical no desktop, **64px**
abaixo de 760px. O cabeçalho é fixo com 72px de altura, e `scroll-padding-top`
compensa esse valor ao pular para uma âncora.

As grades caem em degraus previsíveis: 3, 4 ou 5 colunas viram **2 colunas abaixo
de 1000px** e **1 coluna abaixo de 680px**; o bloco de duas colunas com imagem
empilha abaixo de 900px. A navegação de desktop desaparece abaixo de 900px e vira
painel de tela cheia.

O espaçamento segue uma escala de múltiplos de 4px (4 a 96). Dentro de um grupo,
8 a 16px; entre grupos, 24 a 48px; entre seções, 64 a 96px. Acima de um título
sempre cabe mais espaço do que abaixo dele.

**A Regra do Refluxo.** Nenhuma página rola para o lado a 195px de largura, que
é o que sobra de um celular de 390px com zoom de 200%. Isso exige três coisas
que se esquecem sozinhas: item de grade com `min-width: 0`, botão com
`max-width: 100%` em vez de `white-space: nowrap`, e `overflow-wrap: break-word`
no texto, porque palavra longa em português estoura cartão estreito.

## Elevation & Depth

O sistema é **de camadas com sombra ambiente**. A separação começa pelo tom: três
superfícies quase pretas, cada uma um degrau acima da anterior. Sobre fundo escuro
essa diferença é sutil por natureza, então cada superfície elevada também carrega
uma borda de 1px em branco a 14% e uma sombra ambiente discreta, que é o que
impede o cartão de se dissolver na faixa.

Sombra nesse mundo é sempre preta e sempre com opacidade alta: a sombra suave de
6% que funciona em fundo claro simplesmente não existe aqui.

### Shadow Vocabulary
- **Ambiente** (`box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35)`): repouso de cartão,
  painel de ferramenta e bloco elevado.
- **Resposta** (`box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45)`): hover de botão e de
  elemento que reage ao toque.
- **Flutuante** (`box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6)`): o que realmente
  sai do plano da página, como o aviso de cookies.

### Named Rules

**A Regra da Borda Obrigatória.** Toda superfície elevada tem borda de 1px. No
escuro, sombra sozinha não desenha contorno; sem a linha, o cartão some.

## Shapes

O raio cresce com o tamanho do elemento: **8px** em foco e detalhe, **12px** em
tile de ícone, **16px** em cartão e campo, **24px** em painel de ferramenta,
**32px** em bloco grande e retrato. Botão e chip são sempre **pílula** (999px).

Não existe canto vivo no sistema, e também não existe corte diagonal, máscara
geométrica ou moldura decorativa. A forma é sempre um retângulo arredondado; o
que varia é quanto.

A imagem segue a mesma língua: retrato em 3/4 com raio de 32px e a mesma borda de
1px das superfícies elevadas.

## Components

O comportamento é **refinado e contido**: transição curta (0,2s) com
`cubic-bezier(0.16, 1, 0.3, 1)`, deslocamento de 1px no hover, nada que salte.
Ao toque, 100ms e uma redução de 1,5% de escala: o retorno chega antes do
resultado.

### Buttons
- **Shape:** pílula completa (`999px`), altura confortável para dedo (padrão 14px
  26px; pequeno 9px 16px; grande 18px 34px).
- **Primary:** Magenta Vivo com texto branco (4,61:1). É o botão de conversão.
- **Hover / Focus:** fundo vai para Magenta Profundo, o botão sobe 1px e ganha a
  sombra de resposta. Foco usa o anel global de 3px em Magenta Claro.
- **Ghost:** fundo transparente, texto branco, borda de 1,5px na borda sutil. Ação
  secundária dentro do mesmo bloco.
- **Inverse:** fundo branco, texto Quase Preto. Existe só sobre imagem ou vídeo,
  onde o ghost perderia legibilidade.

### Chips
- **Style:** pílula na superfície afundada, texto secundário, borda transparente
  de 1,5px que reserva o espaço do estado ativo.
- **State:** selecionado ganha preenchimento tênue do magenta
  (`color-mix(in srgb, #e11d62 16%, transparent)`), borda Magenta Vivo e texto
  Magenta Claro. Nunca se usa fundo claro para marcar seleção neste sistema.

### Cards / Containers
- **Corner Style:** 16px; painéis maiores, 24px.
- **Background:** superfície de cartão (`#221419`), um degrau acima de onde ele
  está apoiado.
- **Shadow Strategy:** sombra ambiente em repouso (ver Elevation & Depth).
- **Border:** 1px na borda sutil, obrigatória.
- **Internal Padding:** 24px; 20px abaixo de 680px.

### Inputs / Fields
- **Style:** fundo da superfície da página, borda de 1,5px na borda sutil, raio de
  pílula em campo curto e 16px em área de texto.
- **Focus:** borda passa a Magenta Vivo, somada ao anel de foco global de 3px com
  2px de deslocamento.

### Navigation
- **Style:** cabeçalho fixo translúcido (`color-mix` da superfície da página a 88%
  com `backdrop-filter: blur(14px)`), separado por 1px de borda sutil.
- **Links:** Archivo 15px, peso 500, em texto secundário; hover vai para Magenta
  Claro. O CTA fica à direita, sempre visível no desktop.
- **Mobile:** abaixo de 900px os links somem e um botão de 42px abre painel de
  tela cheia, com links em Inter Tight 24px, fechamento por Esc e rolagem do fundo
  travada.

### Indicador de voz soando

Três barras finas em magenta que respiram em 1,9s, uma defasada da outra, ao
lado da nota. Aparece só enquanto o áudio toca e some quando ele para, então
nada fica em laço no silêncio. É o único lugar do site onde a tela mostra que há
som, e por isso conta como estado, não como enfeite.

### Osciloscópio de naipes (componente de assinatura)

A harmonia desenhada em tempo real, dentro do tocador de naipes: uma faixa por
voz ligada, em branco a 70%, e embaixo a soma em Magenta Vivo, com marcas
tracejadas onde a fundamental fecha o ciclo. A janela mostra três ciclos da
fundamental, e é isso que faz a lição aparecer: no mesmo trecho de tempo o tenor
desenha três ondas, a contralto quatro e meia e a soprano sete e meia. A
proporção entre elas é o intervalo.

Cada faixa de voz é normalizada pelo próprio pico, porque ali interessa a forma;
a soma mantém o nível real, porque ali o nível significa alguma coisa. Fundo
afundado, raio de 12px, e existe só enquanto há som.

### Painel de ferramenta (componente de assinatura)

O bloco que abriga as ferramentas de áudio é o que este site tem de próprio:
superfície de cartão com raio de 24px, rótulo em caixa alta com `0.12em` de
entreletra, mostrador central em Inter Tight de até 88px, e controles empilhados
com alvo de toque cheio. A informação musical (nome da nota) é texto, não ícone, e
usa o display em 20px para se destacar da descrição.

## Do's and Don'ts

### Do:
- **Do** reservar o magenta para o que se pode tocar: botão, estado ativo, faixa
  de chamada. Ênfase de título é peso e tamanho.
- **Do** apoiar todo cartão um degrau de superfície acima do fundo em que ele
  está, sempre com borda de 1px e sombra ambiente.
- **Do** usar Magenta Claro (`#f2568d`) quando o acento virar texto; o Magenta
  Vivo reprova no AA para corpo pequeno sobre o escuro.
- **Do** manter a medida de leitura entre 65 e 75ch e trocar o container para
  880px em texto corrido.
- **Do** desenhar ícone como SVG autoral, em traço de 1,75 na grade de 24, com a
  cor vindo de `currentColor`.
- **Do** manter o ícone solto no fluxo, sem moldura arredondada em volta.
- **Do** tratar 390px como a largura de projeto, não como adaptação.

### Don't:
- **Don't** usar emoji como ícone. É a marca registrada de página gerada, e o
  sistema já rejeitou essa saída.
- **Don't** abrir seção com rótulo minúsculo em caixa alta acima do título. O
  título carrega o próprio peso.
- **Don't** trazer estética de palco gospel: degradê dourado, brilho, luz
  volumétrica ou sombra em letra.
- **Don't** usar recurso de urgência de infoproduto: contador regressivo, preço
  riscado, selo de garantia, "últimas vagas".
- **Don't** introduzir um segundo acento cromático. A paleta tem um acento só, e a
  raridade dele é o que o faz funcionar.
- **Don't** usar fundo claro em nenhum estado, incluindo seleção e destaque. O
  site tem um tema só.
- **Don't** aninhar cartão dentro de cartão para criar profundidade extra.
- **Don't** repetir a entrada do hero como revelação de seção ao rolar. A
  coreografia é uma só, e é no primeiro quadro.
- **Don't** deixar animação em laço rodando quando o que ela representa parou.
