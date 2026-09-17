*** Settings ***
Documentation       Consentimento: nada de medição antes do aceite.
...                 Esta suíte precisa de um build com IDs de medição
...                 (npm run build:teste) — sem eles o banner não existe.
Resource            resources/comum.resource
Test Teardown       Close Browser    ALL

*** Test Cases ***
Banner Aparece Na Primeira Visita
    Abrir Site No Celular
    Get Text    [aria-label="Aviso de cookies"]    contains    cookies de medição

Aceitar Esconde O Banner E Persiste Na Próxima Página
    Abrir Site No Celular
    Click    button:has-text("Aceitar")
    Get Element Count    [aria-label="Aviso de cookies"]    ==    0
    Go To    ${BASE_URL}/workshops/
    Get Element Count    [aria-label="Aviso de cookies"]    ==    0

Recusar Também Encerra O Aviso
    Abrir Site No Celular
    Click    button:has-text("Recusar")
    Get Element Count    [aria-label="Aviso de cookies"]    ==    0

Sem Aceite Nenhum Script De Terceiro É Carregado
    Abrir Site No Celular
    ${google} =    Get Element Count    script[src*="googletagmanager"]
    ${meta} =    Get Element Count    script[src*="facebook"]
    Should Be Equal As Integers    ${google}    0
    Should Be Equal As Integers    ${meta}    0

Política De Privacidade Descreve A Medição
    Abrir Site No Celular    /privacidade/
    Get Text    body    contains    Google Analytics 4
    Get Text    body    contains    Pixel da Meta

Banner Não Pode Cobrir Os Controles Das Ferramentas
    [Documentation]    Regressão: o banner é fixo no rodapé e chegou a ficar
    ...    por cima do botão de tocar, deixando a ferramenta inútil no celular.
    Abrir Site No Celular    /ferramentas/nota-guia/
    Get Element States    [aria-label="Aviso de cookies"]    contains    visible
    ${situacao} =    Evaluate JavaScript    ${None}
    ...    () => { const botao = [...document.querySelectorAll('button')].find(b => b.textContent.includes('Tocar nota-guia')); botao.scrollIntoView({ block: 'center', behavior: 'instant' }); const r = botao.getBoundingClientRect(); const emCima = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2); return JSON.stringify({ alcancavel: botao.contains(emCima) || botao === emCima, cobertoPor: emCima?.closest('[aria-label="Aviso de cookies"]') ? 'banner' : null, espacoReservado: getComputedStyle(document.body).paddingBottom }); }
    Should Contain    ${situacao}    "alcancavel":true
    Should Contain    ${situacao}    "cobertoPor":null
    Should Not Contain    ${situacao}    "espacoReservado":"0px"

Rodapé Continua Alcançável Com O Banner Aberto
    Abrir Site No Celular
    ${situacao} =    Evaluate JavaScript    ${None}
    ...    () => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }); const rodape = document.querySelector('footer').getBoundingClientRect(); const banner = document.querySelector('[aria-label="Aviso de cookies"]').getBoundingClientRect(); return JSON.stringify({ fimVisivel: rodape.bottom <= window.innerHeight + 1, bannerAcimaDoFim: banner.top < rodape.bottom }); }
    Should Contain    ${situacao}    "fimVisivel":true
