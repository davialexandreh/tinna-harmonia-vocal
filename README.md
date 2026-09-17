# Site Tinna Silva · Harmonia Vocal

Site estático em Next.js 16 (App Router, `output: 'export'`), publicado no Netlify.

## Rodando

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # gera out/
npm run preview # serve out/ em http://localhost:3000
```

## Mídia

As fotos e vídeos originais ficam em `assets/`. O build é estático, então nada
é otimizado em tempo de execução: o que está em `public/midia/` é exatamente o
que o visitante baixa.

```bash
npm run midia   # gera public/midia/ a partir de assets/
```

Imagens saem pelo sharp (webp em três larguras + jpeg de segurança). O vídeo
precisa do ffmpeg (`brew install ffmpeg`): vira 720p sem áudio, com pôster.
Rode sempre que a Tinna mandar material novo.

## Testes

```bash
npm test          # Vitest: lógica de áudio e montagem de links
npm run lint
npm run typecheck
```

End-to-end com Robot Framework + Playwright (precisa de Python):

```bash
python3 -m venv .venv-e2e
.venv-e2e/bin/pip install -r tests/e2e/requirements.txt
.venv-e2e/bin/rfbrowser init

npm run build:teste   # com IDs falsos: sem eles o banner de cookies não existe
python3 -m http.server 4321 --directory out &
.venv-e2e/bin/robot --outputdir tests/e2e/relatorios --exclude pendente-cliente tests/e2e
```

A tag `pendente-cliente` isola as travas que dependem de dado que a cliente
ainda não enviou, hoje o número de WhatsApp. Rode antes de publicar:

```bash
.venv-e2e/bin/robot --include pendente-cliente tests/e2e
```

Enquanto esse teste falhar, o site não está pronto para ir ao ar.

Orçamento de performance (Lighthouse CI, exige Chrome):

```bash
npm run build && npx @lhci/cli autorun
```

## Deploy (Netlify)

1. Suba o repositório para o GitHub.
2. No Netlify: **Add new site → Import an existing project**.
3. Build command `npm run build`, publish directory `out` já estão em
   `netlify.toml`, não precisa preencher à mão.
4. Deploy Previews por branch vêm ligados por padrão.

Se o Netlify instalar o `@netlify/plugin-nextjs` automaticamente, confira o log:
com `output: 'export'` ele deve apenas servir os arquivos estáticos. Se tentar
subir runtime de SSR, remova o plugin nas configurações do site.

## Pendências de conteúdo

Veja os `PENDENTE` em `src/content/site.ts`: número de WhatsApp, domínio e os
dados reais (anos de experiência, ministérios atendidos, depoimentos).

## Variáveis de ambiente

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canônica do site (Open Graph, metadados, sitemap) |
| `NEXT_PUBLIC_GA_ID` | ID do Google Analytics 4. Opcional |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID do Pixel da Meta. Opcional |

As duas últimas são lidas no build. **Sem elas o site não carrega script de
terceiro nenhum e o banner de cookies não aparece**, porque não há o que consentir.
Com elas, o banner aparece e nada carrega antes do aceite.
