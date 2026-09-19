/**
 * Fonte única do conteúdo institucional.
 * Sem CMS: toda alteração de texto passa por deploy.
 *
 * TODO(cliente): os campos marcados PENDENTE aguardam resposta da Tinna.
 */

export const site = {
  nome: "Tinna Silva",
  tagline: "Harmonia vocal na prática",
  descricao:
    "Aulas e workshops de harmonia vocal para ministérios de louvor. Método prático para o grupo cantar em três vozes, sem depender de teoria musical.",

  /*
   * Endereço oficial do site, usado nos metadados, no preview de link e no
   * sitemap.
   *
   * Sem domínio próprio ainda, quem responde é a variável URL que o Netlify
   * injeta na hora de construir: ela já vale o endereço do site e passa a
   * valer o domínio definitivo sozinha, no dia em que um for conectado por lá.
   * Fixar um domínio que ainda não existe seria declarar como oficial um
   * endereço que não responde.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.URL ??
    "http://localhost:3000",

  instagram: {
    usuario: "@tinnasilvaharmoniavocal",
    url: "https://instagram.com/tinnasilvaharmoniavocal",
  },

  whatsapp: {
    // PENDENTE: número real da Tinna. Formato: DDI + DDD + número, só dígitos.
    numero: "5511947308383",
    mensagens: {
      workshop:
        "Oi, Tinna! Quero levar um workshop de harmonia vocal para o meu ministério. Pode me passar os formatos e valores?",
      geral: "Oi, Tinna! Vim pelo site e queria falar sobre harmonia vocal.",
      material: "Oi, Tinna! Quero receber o plano de estudo de harmonia vocal.",
    },
  },
} as const;

export const navegacao = [
  { href: "/workshops/", rotulo: "Workshops" },
  { href: "/ferramentas/", rotulo: "Ferramentas" },
  { href: "/sobre/", rotulo: "Sobre" },
  { href: "/contato/", rotulo: "Contato" },
] as const;
