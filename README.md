# Site Tinna Silva — Harmonia Vocal

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

## Deploy (Netlify)

1. Suba o repositório para o GitHub.
2. No Netlify: **Add new site → Import an existing project**.
3. Build command `npm run build`, publish directory `out` — já estão em
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
| `NEXT_PUBLIC_SITE_URL` | URL canônica do site (Open Graph, metadados) |
