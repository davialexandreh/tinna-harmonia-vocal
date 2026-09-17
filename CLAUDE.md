# Site Tinna Silva · Harmonia Vocal

Site institucional + funil de captação para workshops presenciais de harmonia
vocal. Contexto completo do projeto em `docs/prompt-claude-code-tinna-silva.md`;
referência visual e de copy em `docs/tinna-silva-v2.html` (protótipo, não é
código de produção).

## Decisões fechadas

| Tema | Decisão |
| --- | --- |
| Framework | Next.js 16 (App Router) com `output: 'export'`, estático puro |
| Estilo | CSS Modules + tokens em `src/styles/tokens.css` |
| CMS | Nenhum. Conteúdo em `src/content/`, toda edição passa por deploy |
| Hospedagem | Netlify, publish `out/` |
| Captação | Só `wa.me`. Sem formulário, sem e-mail marketing |
| Áudio | Web Audio API puro, sem Tone.js |
| Testes | Vitest na lógica de áudio, Robot Framework + Playwright nos fluxos |
| Tema escuro | Segue `prefers-color-scheme`. Sem toggle |

## Convenções

- Todo conteúdo visível em português do Brasil; código e nomes de arquivo também.
- Nenhum valor cru de cor, espaçamento ou raio fora de `tokens.css`.
- Todo CTA de conversão passa por `WhatsAppCTA`, o ponto único de troca se um
  dia entrar formulário.
- Dado de cliente (número, depoimento, preço) nunca é inventado: fica marcado
  como `PENDENTE` em `src/content/site.ts`.
- `output: 'export'` significa: sem rota dinâmica de servidor, sem middleware,
  sem `next/image` otimizado.

## Comandos

```bash
npm run dev        # desenvolvimento
npm run build      # build estático em out/
npm run preview    # serve out/ localmente
npm run lint
npm run typecheck
npm test           # Vitest (lógica pura)
npm run test:e2e   # Robot Framework (precisa do site servido em :4321)
```

## Onde mexer

| Quero mudar | Arquivo |
| --- | --- |
| Número de WhatsApp, domínio, redes | `src/content/site.ts` |
| Textos da Home | `src/content/home.ts` |
| FAQ | `src/content/faq.ts` |
| Formatos e passos do workshop | `src/content/workshops.ts` |
| Cores, espaçamento, tipografia | `src/styles/tokens.css` |
| Acordes das ferramentas | `src/content/acordes.ts` |
| Foto e vídeo | troque em `assets/` e rode `npm run midia` |

O vídeo do hero não carrega quando a pessoa pediu menos movimento no sistema,
está em economia de dados ou tem conexão lenta. Nesses casos fica o pôster.
A regra está em `src/components/home/FundoDoHero.tsx`.
