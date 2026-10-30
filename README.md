# Site Tinna Silva · Harmonia Vocal

Site estático em Next.js 16 (App Router, `output: 'export'`), publicado no GitHub Pages.

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
.venv-e2e/bin/robot --outputdir tests/e2e/relatorios tests/e2e
```

Orçamento de performance (Lighthouse CI, exige Chrome):

```bash
npm run build && npx @lhci/cli autorun
```

## Deploy (GitHub Pages)

Todo push na `main` publica sozinho: o job `publicar` do CI
(`.github/workflows/ci.yml`) roda depois de lint, tipos, testes, build e
Robot Framework. Se algum falhar, nada vai ao ar.

- Domínio: `tinnasilvaharmoniavocal.com.br`, configurado em
  **Settings → Pages → Custom domain** (não existe arquivo `CNAME` no repo).
- DNS no Registro.br: quatro registros A na raiz (`185.199.108.153`,
  `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) e `www` como CNAME
  para `davialexandreh.github.io`.
- Não há Deploy Preview por PR: o Pages publica só a `main`.

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
