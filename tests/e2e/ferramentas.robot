*** Settings ***
Documentation       As ferramentas de áudio precisam ao menos montar, responder
...                 ao clique e não derrubar a página.
Resource            resources/comum.resource
Test Teardown       Close Browser    ALL

*** Test Cases ***
Índice Lista As Quatro Ferramentas
    Abrir Site No Celular    /ferramentas/
    Get Element Count    a[href^="/ferramentas/"]    >=    4

Metrônomo Inicia E Para
    Abrir Site No Celular    /ferramentas/metronomo/
    Get Text    body    contains    batidas por minuto
    Click    button >> text=Iniciar
    Get Text    button:has-text("Parar")    contains    Parar
    Click    button >> text=Parar
    Get Text    button:has-text("Iniciar")    contains    Iniciar

Tocador De Naipes Mostra As Três Vozes Com As Notas Certas
    Abrir Site No Celular    /ferramentas/tocador-de-naipes/
    Get Text    body    contains    Soprano
    Get Text    body    contains    Contralto
    Get Text    body    contains    Tenor
    # Dó maior: tenor Dó3, contralto Sol3, soprano Mi4
    Get Text    body    contains    Dó3
    Get Text    body    contains    Sol3
    Get Text    body    contains    Mi4

Acorde Menor Mostra A Terça Menor
    [Documentation]    Regressão do erro musical do protótipo.
    Abrir Site No Celular    /ferramentas/tocador-de-naipes/
    Click    text=Ré menor
    Get Text    body    contains    Fá4
    Get Text    body    not contains    Fá#4

Nota-Guia Troca A Nota Escolhida
    Abrir Site No Celular    /ferramentas/nota-guia/
    Click    button:has-text("Sol3")
    Get Text    body    contains    196.0 Hz

Treino De Ouvido Começa Uma Rodada
    Abrir Site No Celular    /ferramentas/treino-de-ouvido/
    Click    button >> text=Começar
    Get Text    body    contains    acorde

Treino De Ouvido Marca A Resposta Escolhida
    [Documentation]    Sem marcar a escolha, a pessoa não sabe no que clicou
    ...    nem qual naipe era o certo.
    Abrir Site No Celular    /ferramentas/treino-de-ouvido/
    Click    button >> text=Começar
    Sleep    6.5s
    Click    button >> text=Contralto
    # A rodada é sorteada: ora a escolha é a certa, ora não. O que precisa
    # valer sempre é que o clique fica marcado e que o naipe correto aparece.
    Get Attribute    button:has-text("Contralto")    aria-pressed    ==    true
    Get Text    body    contains    era esta

Osciloscópio Mostra Uma Faixa Por Voz Ligada
    [Documentation]    O canvas só existe enquanto há som, e some ao parar:
    ...    nada de laço de desenho rodando em silêncio.
    Abrir Site No Celular    /ferramentas/tocador-de-naipes/
    Get Element Count    canvas    ==    0
    Click    button >> text=Tocar acorde
    Sleep    1.2s
    ${desenho} =    Evaluate JavaScript    ${None}
    ...    () => { const c = document.querySelector('canvas'); const ctx = c.getContext('2d'); const d = ctx.getImageData(0, 0, c.width, c.height).data; let pintados = 0; for (let i = 3; i < d.length; i += 4) if (d[i] > 12) pintados++; return JSON.stringify({ pintou: pintados > 500, faixas: document.querySelectorAll('figcaption span b').length }); }
    Should Contain    ${desenho}    "pintou":true
    Should Contain    ${desenho}    "faixas":3
    Click    button >> text=Parar
    Sleep    0.5s
    Get Element Count    canvas    ==    0
